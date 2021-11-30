import logging
import time
from pathlib import Path
from typing import BinaryIO, Dict, Mapping, Optional

import requests
from requests.exceptions import HTTPError, ConnectionError
from requests.models import Response

from annotell.input_api.util import RETRYABLE_STATUS_CODES, get_content_type, get_wait_time

log = logging.getLogger(__name__)


class UploadHandler:

    def __init__(self, max_retry_attempts: int = 23, max_retry_wait_time: int = 60, timeout: int = 60) -> None:
        """
        :param max_upload_retry_attempts: Max number of attempts to retry uploading a file to GCS.
        :param max_upload_retry_wait_time:  Max with time before retrying an upload to GCS.
        """
        self.MAX_NUM_RETRIES = max_retry_attempts
        self.MAX_RETRY_WAIT_TIME = max_retry_wait_time  # seconds
        self.TIMEOUT = timeout  # seconds

    #  Using similar retry strategy as gsutil
    #  https://cloud.google.com/storage/docs/gsutil/addlhelp/RetryHandlingStrategy
    def _upload_file(self, upload_url: str, file: BinaryIO, headers: Dict[str, str], number_of_retries: int) -> None:
        """
        Upload the file to GCS, retries if the upload fails with some specific status codes.
        """
        log.info(f"Uploading file={file.name}")
        resp = requests.put(upload_url, data=file, headers=headers, timeout=self.TIMEOUT)
        try:
            resp.raise_for_status()
        except (HTTPError, ConnectionError) as e:
            http_condition = number_of_retries > 0 and resp.status_code in RETRYABLE_STATUS_CODES
            if http_condition or isinstance(e, ConnectionError):
                self._handle_upload_error(upload_url, file, headers, resp, number_of_retries)
            else:
                raise e

        except Exception as e:
            raise e

    def _handle_upload_error(self, upload_url: str, file: BinaryIO, headers: Dict[str, str], resp: Response, number_of_retries: int):
        upload_attempt = self.MAX_NUM_RETRIES - number_of_retries + 1
        log.error(
            f"On upload attempt ({upload_attempt}/{self.MAX_NUM_RETRIES}) to GCS "
            f"got response:\n{resp.status_code}: {resp.content}"
        )
        wait_time = get_wait_time(upload_attempt, self.MAX_RETRY_WAIT_TIME)
        log.info(f"Waiting {int(wait_time)} seconds before retrying")
        time.sleep(wait_time)
        self._upload_file(upload_url, file, headers, number_of_retries - 1)

    def upload_files(self, url_map: Mapping[str, str], folder: Optional[Path] = None) -> None:
        """
        Upload all files to cloud storage

        :param url_map: map between filename and GCS signed URL
        :param folder: Optional base path, will join folder and each filename in map if provided
        """
        for (filename, upload_url) in url_map.items():
            file_path = folder.joinpath(filename).expanduser() if folder else Path(filename).expanduser()
            with file_path.open('rb') as file:
                content_type = get_content_type(filename)
                headers = {"Content-Type": content_type}
                self._upload_file(upload_url, file, headers, self.MAX_NUM_RETRIES)
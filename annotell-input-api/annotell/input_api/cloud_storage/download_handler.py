import json
import logging
from typing import Dict

import requests
import time

from requests.exceptions import HTTPError, ConnectionError

from annotell.input_api.util import RETRYABLE_STATUS_CODES, get_wait_time

log = logging.getLogger(__name__)


class DownloadHandler:

    def __init__(self, max_retry_attempts: int = 23, max_retry_wait_time: int = 60, timeout: int = 60) -> None:
        """
        :param max_upload_retry_attempts: Max number of attempts to retry uploading a file to GCS.
        :param max_upload_retry_wait_time:  Max with time before retrying an upload to GCS.
        """
        self.MAX_NUM_RETRIES = max_retry_attempts
        self.MAX_RETRY_WAIT_TIME = max_retry_wait_time  # seconds
        self.TIMEOUT = timeout  # seconds

    def get_json(self, url: str) -> Dict:
        try:
            return json.loads(self._download_file(url, self.MAX_NUM_RETRIES))
        except Exception as e:
            raise e

    def _download_file(self, url: str, number_of_retries: int) -> bytes:
        """
        Download a json file from cloud storage

        :param url: URL of file to download
        :param number_of_retries: Number of download attempts before we stop trying to download
        :return: JSON deserialized to dictionary
        """
        resp = requests.get(url, timeout=self.TIMEOUT)
        try:
            resp.raise_for_status()
        except (HTTPError, ConnectionError) as e:
            http_condition = number_of_retries > 0 and resp.status_code in RETRYABLE_STATUS_CODES
            if http_condition or isinstance(e, ConnectionError):
                upload_attempt = self.MAX_NUM_RETRIES - number_of_retries + 1
                wait_time = get_wait_time(upload_attempt, self.MAX_RETRY_WAIT_TIME)
                log.error(
                    f"Failed to download annotation. Retrying in {int(wait_time)} seconds. "
                    f"Attempt {upload_attempt}/{self.MAX_NUM_RETRIES}"
                )
                time.sleep(wait_time)
                self._download_file(url, number_of_retries - 1)
            else:
                raise e

        except Exception as e:
            raise e

        return resp.content
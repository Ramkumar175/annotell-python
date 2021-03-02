from typing import Optional

import logging

from annotell.input_api.file_resource_client import FileResourceClient
from annotell.input_api.http_client import HttpClient
import annotell.input_api.model.input as InputModel
import annotell.input_api.model as Model
from annotell.input_api.util import get_image_dimensions

log = logging.getLogger(__name__)


class CreateableInputAPIResource(FileResourceClient):

    def __init__(self, client: HttpClient, file_resource_client: FileResourceClient):
        super().__init__()
        self.client = client
        self.file_resource_client = file_resource_client

    def post_input_request(self, resource_path: str,
                           input_request: dict,
                           project: Optional[str],
                           batch: Optional[str],
                           input_list_id: Optional[int],
                           dryrun: bool = False) -> Optional[InputModel.InputJobCreated]:
        """
        Send input to Input API. if not dryrun is true, only validation is performed
        Otherwise, returns `InputJobCreated`
        """
        if input_list_id is not None:
            input_request['inputListId'] = input_list_id

        log.debug("POST:ing to %s input %s", resource_path, input_request)

        request_url = self._resolve_request_url(resource_path, project, batch)
        json_resp = self.client.post(request_url, json=input_request, dryrun=dryrun)
        if not dryrun:
            response = InputModel.InputJobCreated.from_json(json_resp)

            if (len(response.files) > 0):
                self.file_resource_client.upload_files(response.files)
                self.client.post(
                    f"v1/inputs/input-jobs/{response.internal_id}/commit",
                    json=False,
                    discard_response=True
                )

            return response

    @staticmethod
    def _resolve_request_url(resource_path: str,
                             project: Optional[str] = None,
                             batch: Optional[str] = None) -> str:
        """
        Resolves which request url to use for input based on if project and batch is specified
        """
        url = f"v1/inputs/"

        if project is not None:
            url += f"project/{project}/"
            if batch is not None:
                url += f"batch/{batch}/"

        url += resource_path

        return url

    @staticmethod
    def _set_sensor_settings(cameras: InputModel.CameraInput):
        def _create_camera_settings(width_height_dict: dict):
            return InputModel.CameraSettings(width_height_dict['width'], width_height_dict['height'])

        def _create_sensor_settings():
            first_frame = camera_resource.frames[0]
            return {
                image_frame.sensor_name: _create_camera_settings(get_image_dimensions(image_frame.filename)) for image_frame in first_frame.image_frames
            }

        if cameras.sensor_specification is None:
            cameras.sensor_specification = InputModel.SensorSpecification(
                sensor_settings=_create_sensor_settings())
        elif cameras.sensor_specification.sensor_settings is None:
            cameras.sensor_specification.sensor_settings = _create_sensor_settings()

    def get_upload_urls(self, files_to_upload: Model.FilesToUpload) -> Model.UploadUrls:
        """Get upload urls to cloud storage"""
        json_resp = self.client.get("v1/inputs/upload-urls", json=files_to_upload.to_dict())
        return Model.UploadUrls.from_json(json_resp)

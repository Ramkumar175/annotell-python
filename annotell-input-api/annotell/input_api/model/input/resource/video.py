from annotell.input_api.model.input.resource.resource import Resource
from typing import Optional
from dataclasses import dataclass
from annotell.input_api.util import filter_none

camera_sensor_default = "CAM"


@dataclass
class VideoFrame(Resource):
    filename: str
    resource_id: Optional[str] = None
    sensor_name: str = camera_sensor_default
    video_timestamp: int = -1  # TODO: This is due to how dataclasses work, must be named :/

    def to_dict(self) -> dict:
        return filter_none({
            "filename": self.filename,
            "videoTimestamp": self.video_timestamp,
            "sensorName": self.sensor_name,
            "resourceId": self.resolve_resource_id()
        })

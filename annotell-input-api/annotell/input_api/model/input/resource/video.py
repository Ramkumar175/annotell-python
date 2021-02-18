from annotell.input_api.model.input.resource.resource import Resource
from typing import Optional
from dataclasses import dataclass
from annotell.input_api.util import filter_none

camera_sensor_default = "CAM"


@dataclass
class VideoFrame(Resource):
    video_timestamp: int
    filename: str
    resource_id: Optional[str] = None
    sensor_name: str = camera_sensor_default

    def to_dict(self) -> dict:
        return filter_none({
            "filename": self.filename,
            "videoTimestamp": self.video_timestamp,
            "sensorName": self.sensor_name,
            "resourceId": self.resolve_resource_id()
        })

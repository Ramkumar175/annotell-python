from typing import List, Union
from dataclasses import dataclass, field

from annotell.input_api.model.v1.frame import Frame, ImageFrame, PointCloudFrame, VideoFrame
from annotell.input_api.model.v1.sensor_specification import SensorSpecification
from annotell.input_api.model.v1.common_models import CameraResource


@dataclass
class Cameras(CameraResource):
    external_id: str
    sensor_specification: SensorSpecification
    image_frames: List[ImageFrame] = field(default_factory=list)

    def to_dict(self) -> dict:
        return dict(imageFrames=[image_frame.to_dict() for image_frame in self.image_frames],
                    sensorSpecification=self.sensor_specification.to_dict(),
                    externalId=self.external_id)

    def get_local_resources(self) -> List[Union[VideoFrame, ImageFrame]]:
        resources = []
        for frame in self.frames:
            for resource in (frame.image_frames + frame.video_frames):
                if resource.resource_id is None:
                    resources.append(resource)

        return resources


from typing import List, Union
from dataclasses import dataclass, field

from annotell.input_api.model.v1.frame import Frame, ImageFrame, PointCloudFrame, VideoFrame
from annotell.input_api.model.v1.sensor_specification import SensorSpecification
from annotell.input_api.model.v1.common_models import CameraResource


@dataclass
class Cameras(CameraResource):
    external_id: str
    sensor_specification: SensorSpecification
    images: List[ImageFrame] = field(default_factory=list)

    def to_dict(self) -> dict:
        images = dict(images=[image_frame.to_dict() for image_frame in self.images])
        return dict(frame=images,
                    sensorSpecification=self.sensor_specification.to_dict(),
                    externalId=self.external_id)

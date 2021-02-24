from dataclasses import dataclass
from typing import List, Union

from annotell.input_api.model.input.sensor_specification import SensorSpecification
from annotell.input_api.model.input.cameras_sequence.frame import Frame
from annotell.input_api.model.input.resource.image import Image
from annotell.input_api.model.input.resource.video import VideoFrame
from annotell.input_api.model.input.abstract.camera_input import CameraInput


@dataclass
class CamerasSequence(CameraInput):
    external_id: str
    frames: List[Frame]
    sensor_specification: SensorSpecification

    def to_dict(self) -> dict:
        return dict(frames=[frame.to_dict() for frame in self.frames],
                    sensorSpecification=self.sensor_specification.to_dict(),
                    externalId=self.external_id)
from typing import Optional, List, Mapping, Union
from dataclasses import field, dataclass

from annotell.input_api.model.input.abstract import CameraInput, CameraFrame
from annotell.input_api.model.input.cameras_sequence.frame import Frame
from annotell.input_api.model.input.sensor_specification import SensorSpecification


@dataclass
class CamerasSequence(CameraInput):
    external_id: str
    frames: List[Frame]
    sensor_specification: SensorSpecification
    metadata: Mapping[str, Union[int, float, str, bool]] = field(default_factory=dict)

    def to_dict(self) -> dict:
        return dict(frames=[frame.to_dict() for frame in self.frames],
                    sensorSpecification=self.sensor_specification.to_dict(),
                    externalId=self.external_id,
                    metadata=self.metadata)

    def get_first_camera_frame(self) -> CameraFrame:
        return self.frames[0]

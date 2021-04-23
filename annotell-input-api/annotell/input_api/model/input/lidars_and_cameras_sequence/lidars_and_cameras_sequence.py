from dataclasses import dataclass, field

from typing import List, Mapping, Union
from annotell.input_api.model.input.abstract import CameraInput, CameraFrame
from annotell.input_api.model.input.lidars_and_cameras_sequence.frame import Frame
from annotell.input_api.model.input.sensor_specification import SensorSpecification


@dataclass
class LidarsAndCamerasSequence(CameraInput):
    external_id: str
    frames: List[Frame]
    calibration_id: str
    sensor_specification: SensorSpecification
    metadata: Mapping[str, Union[int, float, str]] = field(default_factory=dict)

    def to_dict(self) -> dict:
        return dict(frames=[frame.to_dict() for frame in self.frames],
                    sensorSpecification=self.sensor_specification.to_dict(),
                    externalId=self.external_id,
                    calibrationId=self.calibration_id,
                    metadata=self.metadata)

    def get_first_camera_frame(self) -> CameraFrame:
        return self.frames[0]

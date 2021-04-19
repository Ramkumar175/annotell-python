from dataclasses import dataclass
from typing import List, Optional

from annotell.input_api.model.input.lidars_and_cameras_sequence.frame import Frame
from annotell.input_api.model.input.sensor_specification import SensorSpecification


@dataclass
class LidarsAndCamerasSequence:
    external_id: str
    frames: List[Frame]
    calibration_id: str
    start_timestamp: Optional[int] = None
    sensor_specification: Optional[SensorSpecification] = None

    def to_dict(self) -> dict:
        return dict(frames=[frame.to_dict() for frame in self.frames],
                    sensorSpecification=self.sensor_specification.to_dict() if self.sensor_specification is not None else None,
                    startTs=self.start_timestamp,
                    externalId=self.external_id,
                    calibrationId=self.calibration_id)

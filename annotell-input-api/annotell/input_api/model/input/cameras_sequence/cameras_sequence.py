from typing import Optional, List
from dataclasses import dataclass

from annotell.input_api.model.input.cameras_sequence.frame import Frame
from annotell.input_api.model.input.sensor_specification import SensorSpecification


@dataclass
class CamerasSequence:
    external_id: str
    frames: List[Frame]
    start_timestamp: Optional[int] = None
    sensor_specification: Optional[SensorSpecification] = None

    def to_dict(self) -> dict:
        return dict(frames=[frame.to_dict() for frame in self.frames],
                    sensorSpecification=self.sensor_specification.to_dict() if isinstance(self.sensor_specification, SensorSpecification) else None,
                    startTs=self.start_timestamp,
                    externalId=self.external_id)

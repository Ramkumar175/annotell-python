from dataclasses import dataclass
from typing import Optional

from annotell.input_api.model.input.lidars_and_cameras.frame import Frame
from annotell.input_api.model.input.sensor_specification import SensorSpecification


@dataclass
class LidarsAndCameras:
    external_id: str
    frame: Frame
    calibration_id: str
    sensor_specification: Optional[SensorSpecification] = None

    def to_dict(self) -> dict:
        return dict(frame=self.frame.to_dict(),
                    sensorSpecification=self.sensor_specification.to_dict() if self.sensor_specification is not None else None,
                    externalId=self.external_id,
                    calibrationId=self.calibration_id)

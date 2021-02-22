from dataclasses import dataclass
from typing import List, Union

from annotell.input_api.model.v1.frame import Frame, ImageFrame, PointCloudFrame, VideoFrame
from annotell.input_api.model.v1.sensor_specification import SensorSpecification
from annotell.input_api.model.v1.common_models import CameraResource


@dataclass
class LidarsAndCamerasSequence(CameraResource):
    external_id: str
    frames: List[Frame]
    calibration_id: str
    sensor_specification: SensorSpecification

    def to_dict(self) -> dict:
        return dict(frames=[frame.to_dict() for frame in self.frames],
                    sensorSpecification=self.sensor_specification.to_dict(),
                    externalId=self.external_id,
                    calibrationId=self.calibration_id)

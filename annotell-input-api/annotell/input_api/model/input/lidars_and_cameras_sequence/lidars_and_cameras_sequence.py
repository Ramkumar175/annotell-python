from dataclasses import dataclass
from typing import List, Union

from annotell.input_api.model.input.resource.image import Image
from annotell.input_api.model.input.resource.video import VideoFrame
from annotell.input_api.model.input.resource.point_cloud import PointCloud
from annotell.input_api.model.input.lidars_and_cameras_sequence.frame import Frame

from annotell.input_api.model.input.sensor_specification import SensorSpecification
from annotell.input_api.model.input.abstract.camera_sensor import CameraSensor


@dataclass
class LidarsAndCamerasSequence(CameraSensor):
    external_id: str
    frames: List[Frame]
    calibration_id: str
    sensor_specification: SensorSpecification

    def to_dict(self) -> dict:
        return dict(frames=[frame.to_dict() for frame in self.frames],
                    sensorSpecification=self.sensor_specification.to_dict(),
                    externalId=self.external_id,
                    calibrationId=self.calibration_id)
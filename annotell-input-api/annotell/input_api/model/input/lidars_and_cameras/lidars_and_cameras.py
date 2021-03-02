from dataclasses import dataclass
from typing import List, Union

from annotell.input_api.model.input.resource.image import Image
from annotell.input_api.model.input.resource.point_cloud import PointCloud
from annotell.input_api.model.input.lidars_and_cameras.frame import Frame

from annotell.input_api.model.input.sensor_specification import SensorSpecification
from annotell.input_api.model.input.abstract.camera_input import CameraInput


@dataclass
class LidarsAndCameras(CameraInput):
    external_id: str
    frame: Frame
    calibration_id: str
    sensor_specification: SensorSpecification

    def to_dict(self) -> dict:
        return dict(frame=self.frame.to_dict(),
                    sensorSpecification=self.sensor_specification.to_dict(),
                    externalId=self.external_id,
                    calibrationId=self.calibration_id)

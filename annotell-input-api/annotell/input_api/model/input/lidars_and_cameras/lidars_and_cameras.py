from dataclasses import field, dataclass
from typing import List, Union, Any, Mapping

from annotell.input_api.model.input.resources.image import Image
from annotell.input_api.model.input.resources.point_cloud import PointCloud
from annotell.input_api.model.input.lidars_and_cameras.frame import Frame

from annotell.input_api.model.input.sensor_specification import SensorSpecification
from annotell.input_api.model.input.abstract import CameraInput, CameraFrame


@dataclass
class LidarsAndCameras(CameraInput):
    external_id: str
    frame: Frame
    calibration_id: str
    sensor_specification: SensorSpecification
    metadata: Mapping[str, Any] = field(default_factory=dict)

    def to_dict(self) -> dict:
        return dict(frame=self.frame.to_dict(),
                    sensorSpecification=self.sensor_specification.to_dict(),
                    externalId=self.external_id,
                    calibrationId=self.calibration_id,
                    metadata=self.metadata)

    def get_first_camera_frame(self) -> CameraFrame:
        return self.frame

from typing import Optional

from annotell.input_api.model.base_serializer import BaseSerializer
from annotell.input_api.model.calibration.common import BaseCalibration, CalibrationType


class LidarFieldOfView(BaseSerializer):
    start_angle: float
    stop_angle: float


class LidarCalibration(BaseCalibration):
    calibration_type = CalibrationType.LIDAR
    field_of_view: Optional[LidarFieldOfView]

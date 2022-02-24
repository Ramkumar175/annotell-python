from annotell.input_api.model.calibration.lidar.lidar_calibration import LidarCalibration
from annotell.input_api.model.calibration.common import Position, RotationQuaternion


def unity_lidar_calibration():
    lidar_position = Position(x=0.0, y=0.0, z=0.0)
    lidar_rotation = RotationQuaternion(w=1.0, x=0.0, y=0.0, z=0.0)
    return LidarCalibration(position=lidar_position, rotation_quaternion=lidar_rotation)

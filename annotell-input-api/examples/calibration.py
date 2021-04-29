from typing import List

from annotell.input_api.input_api_client import InputApiClient

import annotell.input_api.model.calibration as CalibrationModel

def create_sensor_calibration(external_id, lidar_sources: List[str] = None, camera_sources: List[str] = None):

    if lidar_sources is None:
        lidar_sources = []

    if camera_sources is None:
        camera_sources = []

    # Create lidar calibration
    def unity_lidar_calibration():
        lidar_position = CalibrationModel.Position(x=0.0, y=0.0, z=0.0)
        lidar_rotation = CalibrationModel.RotationQuaternion(
            w=1.0, x=0.0, y=0.0, z=0.0)
        return CalibrationModel.LidarCalibration(position=lidar_position,
                                                 rotation_quaternion=lidar_rotation)
    # Create a camera calibration
    def unity_camera_calibration():
        camera_camera_type = CalibrationModel.CameraType.PINHOLE
        camera_position = CalibrationModel.Position(
            x=0.0, y=0.0, z=0.0)  # similar to Lidar
        camera_rotation = \
            CalibrationModel.RotationQuaternion(
                w=1.0, x=0.0, y=0.0, z=0.0)  # similar to Lidar
        camera_camera_matrix = CalibrationModel.CameraMatrix(
            fx=3450, fy=3250, cx=622, cy=400)
        camera_distortion_coefficients = \
            CalibrationModel.DistortionCoefficients(
                k1=0.0, k2=0.0, p1=0.0, p2=0.0, k3=0.0)
        camera_properties = CalibrationModel.CameraProperty(
            camera_type=camera_camera_type)
        return CalibrationModel.CameraCalibration(
            position=camera_position,
            rotation_quaternion=camera_rotation,
            camera_matrix=camera_camera_matrix,
            distortion_coefficients=camera_distortion_coefficients,
            camera_properties=camera_properties,
            image_height=1080,
            image_width=1920
        )

    # Create calibration for the scene
    calibration_dict = {
        **{lidar_source: unity_lidar_calibration() for lidar_source in lidar_sources},
        **{camera_source: unity_camera_calibration() for camera_source in camera_sources}
    }
    calibration_external_id = external_id
    sensor_calibration = CalibrationModel.SensorCalibration(external_id=calibration_external_id,
                                                            calibration=calibration_dict)

    return sensor_calibration


if __name__ == "__main__":
    print("Creating Calibration...")

    client = InputApiClient()

    calibration = create_sensor_calibration("2020-06-16", ["lidar"], ["RFC01"])

    # Create the calibration using the Input API client
    created_calibration = client.calibration.create_calibration(
        sensor_calibration=calibration)

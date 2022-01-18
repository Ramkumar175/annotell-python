from typing import List

from annotell.input_api.input_api_client import InputApiClient

import annotell.input_api.model.calibration as CalibrationModel
from examples.calibration.create_kannala_calibration import unity_kannala_calibration
from examples.calibration.create_fisheye_calibration import unity_fisheye_calibration
from examples.calibration.create_pinhole_calibration import unity_pinhole_calibration
from examples.calibration.create_legacy_camera_calibration import unity_camera_calibration
from examples.calibration.create_lidar_calibration import unity_lidar_calibration


def create_sensor_calibration(external_id, lidar_sources: List[str] = None, camera_sources: List[str] = None):

    if lidar_sources is None:
        lidar_sources = []

    if camera_sources is None:
        camera_sources = []

    # Create calibration for the scene
    camera_calibrations = [
        unity_camera_calibration(), unity_kannala_calibration(), unity_pinhole_calibration(), unity_fisheye_calibration()
    ]
    calibration_dict = {
        **{lidar_source: unity_lidar_calibration() for lidar_source in lidar_sources},
        **{camera_source: camera_calibrations.pop() for camera_source in camera_sources}
    }
    calibration_external_id = external_id
    sensor_calibration = CalibrationModel.SensorCalibration(external_id=calibration_external_id, calibration=calibration_dict)

    return sensor_calibration


if __name__ == "__main__":
    print("Creating Calibration...")

    client = InputApiClient()

    calibration = create_sensor_calibration("2020-06-16", ["lidar"], ["RFC01"])

    # Create the calibration using the Input API client
    created_calibration = client.calibration.create_calibration(sensor_calibration=calibration)

from __future__ import absolute_import

import annotell.input_api.input_api_client as IAC
import annotell.input_api.model.input as InputModel
import annotell.input_api.model.input.resource as ResourceModel
import annotell.input_api.model.input.lidars_and_cameras_sequence as LCS
from annotell.input_api.logger import setup_logging

from calibration import create_calibration_spec

print("Creating Lidar and Camera Sequence Input...")

setup_logging(level="INFO")

client = IAC.InputApiClient()


# Create calibration
calibration_spec = create_calibration_spec(
    "Collection 2020-06-16", ["lidar"], ["RFC01", "RFC02", "RFC03"])
created_calibration = client.calibration.create_calibration(calibration_spec)

camera_settings = InputModel.CameraSettings(width=1920, height=1080)
sensor_specification = InputModel.SensorSpecification(sensor_settings=dict(RFC01=camera_settings,
                                                                           RFC02=camera_settings,
                                                                           RFC03=camera_settings))

lidar_and_camera_seq = LCS.LidarsAndCamerasSequence(
    external_id="input1",
    frames=[
        LCS.Frame(
            frame_id="1",
            relative_timestamp=0,
            point_cloud_frames=[
                ResourceModel.PointCloud("~/Downloads/lidar_RFL01.pcd", sensor_name="lidar"),
            ],
            image_frames=[
                ResourceModel.Image("~/Downloads/img_RFC01.jpg", sensor_name="RFC01"),
                ResourceModel.Image("~/Downloads/img_RFC01.jpg", sensor_name="RFC02"),
                ResourceModel.Image("~/Downloads/img_RFC01.jpg", sensor_name="RFC03")
            ]),
    ],
    calibration_id=created_calibration.id,
    sensor_specification=sensor_specification
)


# Project - Available via `client.list_projects()`
project = "<project-identifier>"


# Add input
client.lidar_and_image_sequence.create(lidar_and_camera_seq,
                                       project=project,
                                       dryrun=True)

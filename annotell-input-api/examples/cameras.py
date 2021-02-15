from __future__ import absolute_import

import annotell.input_api.input_api_client as IAC
import annotell.input_api.model as IAM
from annotell.input_api.logger import setup_logging

from calibration import create_calibration_spec

print("Creating Cameras Input...")

setup_logging(level="INFO")

client = IAC.InputApiClient()

# Create calibration
calibration_spec = create_calibration_spec("Collection 2020-06-16", ["RFC01", "RFC02", "RFC03"])
created_calibration = client.calibration.create_calibration(calibration_spec)

camera_settings = IAM.CameraSettings(width=1920, height=1080)
sensor_specification = IAM.SensorSpecification(sensor_settings=dict(RFC01=camera_settings,
                                                                    RFC02=camera_settings,
                                                                    RFC03=camera_settings))

cameras = IAM.Cameras(
    external_id="input1",
    image_frames=[
        IAM.ImageFrame("~/Downloads/img_RFC01.jpg", sensor_name="RFC01"),
        IAM.ImageFrame("~/Downloads/img_RFC01.jpg", sensor_name="RFC02"),
        IAM.ImageFrame("~/Downloads/img_RFC01.jpg", sensor_name="RFC03")
    ],
    sensor_specification=sensor_specification
)


# Project - Available via `client.list_projects()`
project = "project-identifier"


# Add input
client.images.create(cameras,
                     project=project,
                     dryrun=False)

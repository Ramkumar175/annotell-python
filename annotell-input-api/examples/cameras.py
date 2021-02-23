from __future__ import absolute_import

from annotell.input_api.input_api_client import InputApiClient
import annotell.input_api.model.input as InputModel
import annotell.input_api.model.input.cameras as CamerasModel
import annotell.input_api.model.input.resource as ResourceModel
from annotell.input_api.logger import setup_logging

from calibration import create_sensor_calibration

print("Creating Cameras Input...")

setup_logging(level="INFO")

client = InputApiClient()

# Create calibration
calibration_spec = create_sensor_calibration(
    "Collection 2020-06-16", [], ["RFC01", "RFC02", "RFC03"])
created_calibration = client.calibration.create_calibration(calibration_spec)

camera_settings = InputModel.CameraSettings(width=1920, height=1080)
sensor_specification = InputModel.SensorSpecification(sensor_settings=dict(RFC01=camera_settings,
                                                                           RFC02=camera_settings,
                                                                           RFC03=camera_settings))

cameras = CamerasModel.Cameras(
    external_id="input1",
    frame=CamerasModel.Frame(
        images=[
            ResourceModel.Image("~/Downloads/img_RFC01.jpg", sensor_name="RFC01"),
            ResourceModel.Image("~/Downloads/img_RFC01.jpg", sensor_name="RFC02"),
            ResourceModel.Image("~/Downloads/img_RFC01.jpg", sensor_name="RFC03")
        ]
    ),
    sensor_specification=sensor_specification
)


# Project - Available via `client.list_projects()`
project = "project-identifier"


# Add input
client.cameras.create(cameras, project=project, dryrun=False)

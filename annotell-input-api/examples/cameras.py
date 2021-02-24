from __future__ import absolute_import

from calibration import create_sensor_calibration
from annotell.input_api.input_api_client import InputApiClient
import annotell.input_api.model.input.cameras as CamerasModel
import annotell.input_api.model.input.resource as ResourceModel
import annotell.input_api.model.input as InputModel
from annotell.input_api.logger import setup_logging


print("Creating Cameras Input...")

setup_logging(level="INFO")

client = InputApiClient()

sensor1 = "RFC01"
sensor2 = "RFC02"
sensor3 = "RFC03"

camera_settings = InputModel.CameraSettings(width=1920, height=1080)

sensor_settings = {
    sensor1: camera_settings,
    sensor2: camera_settings,
    sensor3: camera_settings
}
sensor_specification = InputModel.SensorSpecification(sensor_settings=sensor_settings)

cameras = CamerasModel.Cameras(
    external_id="input1",
    frame=CamerasModel.Frame(
        images=[
            ResourceModel.Image("~/Downloads/img_RFC01.jpg", sensor_name=sensor1),
            ResourceModel.Image("~/Downloads/img_RFC01.jpg", sensor_name=sensor2),
            ResourceModel.Image("~/Downloads/img_RFC01.jpg", sensor_name=sensor3)
        ]
    ),
    sensor_specification=sensor_specification
)


# Project - Available via `client.list_projects()`
project = "Project-identifier"


# Add input
client.cameras.create(cameras, project=project, dryrun=True)

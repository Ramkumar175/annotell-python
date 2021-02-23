---
title: Cameras
---

A `Cameras` input consists of a single frame of camera images, where the frame can contain between 1-8
images from different sensors.

## Frames

All of the inputs at Annotell consists of one or several **frames** where a
frame consists of inputs from several sensors, e.g. cameras or lidars. 
`Cameras` input consists of a single frame, which simply contains a list of images and are
easily created in the client.

```python
import annotell.input_api.model.input.resource as ResourceModel
import annotell.input_api.model.input.cameras as CamerasModel

sensor1 = "RFC01"
sensor2 = "RFC02"
sensor3 = "RFC03"

frame = CamerasModel.Frame(
     images=[
         ResourceModel.Image("~/Downloads/img_RFC01.jpg", sensor_name=sensor1),
         ResourceModel.Image("~/Downloads/img_RFC01.jpg", sensor_name=sensor2),
         ResourceModel.Image("~/Downloads/img_RFC01.jpg", sensor_name=sensor3)
     ])
```

## Creating the input
In order to create the `Cameras` input we need to specify three parameters: the `Frame` object,
the `external_id` and a `SensorSpecification` object.

### Frame
The frame of the input, which is described in detail in the previous chapter.

### external_id
An id which can be used to get your inputs via the client, or to get the annotations 
related to the input.

### SensorSpecification
Includes the fields `sensor_to_pretty_name`, `sensor_order` and `sensor_settings`.
* `sensor_to_pretty_name` is a mapping of sensor names to a prettier name version
  displayed in the Annotell Annotation Tool.
* `sensor_order` defines in what order the camera sensors that should be shown
  in the Annotell Annotation Tool.
* `sensor_settings` is a mapping of a sensor name to a `CameraSettings` object.
The `CameraSettings` object consists of the resolution of the video/image.

All that is left after creating the `Cameras` object is selecting which project
to upload the input to and then call the `create` method for cameras.

```python
from __future__ import absolute_import

from annotell.input_api.input_api_client import InputApiClient
import annotell.input_api.model.input as InputModel
import annotell.input_api.model.input.cameras as CamerasModel
import annotell.input_api.model.input.resource as ResourceModel
from annotell.input_api.logger import setup_logging

from calibration import create_calibration_spec

print("Creating Cameras Input...")

setup_logging(level="INFO")

client = InputApiClient()

sensor1 = "RFC01"
sensor2 = "RFC02"
sensor3 = "RFC03"

# Create calibration
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

# Project - Available via `client.project.get_projects()`
project = "project-identifier"

# Add input
client.cameras.create(cameras, project=project, dryrun=True)
```

:::tip Use dryrun to validate input
Setting `dryrun` parameter to true in the method call, will validate the input using the Input API but not create any inputs.
:::

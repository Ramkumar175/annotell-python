---
title: Cameras
---
All of the inputs at Annotell consists of one or several **frames** where a frame consists of inputs from several sensors, e.g. cameras or lidars. A `Cameras` input consists of a single frame of camera images, where the frame can contain between 1-8 images from different sensors.

```python reference
https://github.com/annotell/annotell-python/blob/master/annotell-input-api/examples/cameras.py
```



### SensorSpecification
The `SensorSpecification` includes the fields `sensor_to_pretty_name`, `sensor_order` and `sensor_settings`, where only the latter is mandatory. Adding information about pretty name and sensor order is useful information during annotation.

| Parameter               | Description                                                                                                  |
| ----------------------- | ------------------------------------------------------------------------------------------------------------ |
| `sensor_to_pretty_name` | *(Optional)* A mapping of sensor names to a prettier name version displayed in the Annotell Annotation Tool. |
| `sensor_order`          | *(Optional)* Defines in what order (left to right) the camera sensors that should be shown in the Annotell Annotation Tool   |
| `sensor_settings`       | A mapping of a sensor name to a `CameraSettings` object, where the `CameraSettings` object consists of the resolution of the image.                       |


:::tip Use dryrun to validate input
Setting `dryrun` parameter to true in the method call, will validate the input using the Input API but not create any inputs.
:::

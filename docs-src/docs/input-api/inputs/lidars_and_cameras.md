---
title: LidarsAndCameras
---

All of the inputs at Annotell consists of one or several frames where a frame consists of inputs from several sensors, e.g. cameras or lidars. A `LidarsAndCameras` input consists of a *single* frame which contains 1-8 cameras images as well as a single pointcloud.

## Creating the input
In order to create a `LidarsAndCameras` you need to specify the following parameters

| Parameter            | Description                                                                                                                                                                                                                                                      |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| external_id          | Id which can be used to track progress of annotations with.                                                                                                                                                                                                      |
| sensor_specification | Additional information about sensors, includes `sensor_to_pretty_name` and `sensor_order`. Defines which sensor that should be shown first, the sensor_order, or a mapping of sensor names to a prettier name version displayed in the Annotell Annotation Tool. |
| calibration_id       | Which calibration to use for the input.                            |
| frame                | Specifies which camera images and lidar pointclouds constitute the frame.                            |

```python reference
https://github.com/annotell/annotell-python/blob/master/annotell-input-api/examples/lidars_and_cameras.py
```


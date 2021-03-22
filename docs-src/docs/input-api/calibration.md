---
title: Calibration
---

Inputs including both a 2D and 3D representation such as **lidars_and_cameras** require a calibration relating the camera sensors with the lidar sensors in terms of location and rotation. The calibration should also contain the required information for projecting 3D points into the image plane of the camera.

A Calibration object consists of a set of key-value pairs where the key is the name of the sensor (i.e. sensor name) and the value is either a _LidarCalibration_ object or a _CameraCalibration_ object depending on the sensor.

A lidar calibration is represented as a _LidarCalibration_ object and consists of a position expressed with three coordinates and a rotation in the form of a [Quaternion](https://en.wikipedia.org/wiki/Quaternions_and_spatial_rotation). See the code example below for creating a basic _LidarCalibration_ object.

The Camera calibration format is based on [OpenCVs](https://docs.opencv.org/3.4/d4/d94/tutorial_camera_calibration.html) format and this [paper](http://www.robots.ox.ac.uk/~cmei/articles/single_viewpoint_calib_mei_07.pdf). Currently three different camera types are supported: `PINHOLE`, `FISHEYE` and `KANNALA`. The camera calibration consists of the following set of key-value pairs.

| Key                       | Value                                                                                                                               |
| :------------------------ | :---------------------------------------------------------------------------------------------------------------------------------- |
| rotation_quaternion       | A RotationQuaternion object                                                                                                         |
| position                  | A Position object                                                                                                                   |
| camera_matrix             | A CameraMatrix object                                                                                                               |
| camera_properties         | A CameraProperty object                                                                                                             |
| distortion_coefficients   | A DistortionCoefficients object. Please note that the coefficient _k3_ should be equal to None if the camera type is _Kannala_**.** |
| image_height              | Integer                                                                                                                             |
| image_width               | Integer                                                                                                                             |
| undistortion_coefficients | \(**Optional\)** An UndistortionCoefficients object. This is only used for _Kannala_ cameras.                                       |


## Example: Creating a calibration
The following example code shows how you can create a *unity* (i.e. we assume that all sensors are placed at origin and have no rotation) calibration for a lidar sensor and several camera sensors of type `PINHOLE`.
```python reference
https://github.com/annotell/annotell-python/blob/master/annotell-input-api/examples/calibration.py
```

:::tip reuse calibration
Note that you can, and should, reuse the same calibration for multiple inputs if possible.
:::

### Listing existing calibrations

As a final step we can fetch the calibration via the external id. This can either be done via the client, or via the CLI annoutil tool. 

```python
client.calibration.get_calibration(external_id="Collection 2020-06-16")
```

```bash
$ annoutil calibration --external-id "Collection 2020-06-16"
```
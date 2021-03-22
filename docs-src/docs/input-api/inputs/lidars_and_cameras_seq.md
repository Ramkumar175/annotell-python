---
title: LidarsAndCamerasSeq
---

A `LidarsAndCamerasSeq` input consists of a sequence of camera images and lidar point clouds. Unlike single-frame input types you also have to specify the sequential relationship between the _frames_, where each frame consists on 1-8 camera images, as well as lidar point clouds.

:::info no multi-lidar support currently
Currently there is only support for supplying a single point cloud per frame.
:::

## Creating a list of frames

The sequential relationship is expressed via a list of `Frame` objects. This representation expresses the ordering of the frames, but it does not include the _relative temporal_ relationship between the frames in the list.

```python
frame_1 = IAM.Frame(...)
frame_2 = IAM.Frame(...)
frames = [frame_1, frame_2]
```

In other words, this representation captures that `frame_1` comes before `frame_2`, but does not express how much time has passed between the two frames. In order to express how much time has passed between the frames we need to specify the field `relative_timestamp` for each frame object. If we for example know that we have collected and aggregated our sensor data at 2Hz, then we would express that as

```python
frame_1 = IAM.Frame(..., relative_timestamp=0)
frame_2 = IAM.Frame(..., relative_timestamp=500)
frames = [frame_1, frame_2]
```

:::tip Why is relative time important?
Specifying the time relationship between frames is important in order to enable different types of advanced annotator assistance tools in the Annotell platform. These tools enable a **significant** reduction in annotation time, while keeping quality high.
:::

## Creating the input
In addition to supplying the sequential and temporal information for our `Frame` objects we also need to specify the camera images and lidar point clouds that constitute each frame. This is done by passing a list of `PointCloudFrame` and `ImageFrame` objects, where each of these objects contains the path to the underlying file as well as the sensor name. Finally, we also need to specify the `frame_id` of each frame.

In order to create the input we need to use our list of `Frame` objects and specify the parameters `external_id` and `calibration_id` as well as the optional parameter `sensor_specification`.

| Parameter            | Description                                                                                                                                                                                                                                                      |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| external_id          | Id which can be used to track progress of annotations with.                                                                                                                                                                                                      |
| sensor_specification | Additional information about sensors, includes `sensor_to_pretty_name` and `sensor_order`. Defines which sensor that should be shown first, the sensor_order, or a mapping of sensor names to a prettier name version displayed in the Annotell Annotation Tool. |
| calibration_id       | Which calibration to use for the input.                            |

```python reference
https://github.com/annotell/annotell-python/blob/master/annotell-input-api/examples/lidars_and_cameras_seq.py
```
:::note Be careful with sensor names
Make sure that the provided sensor names for each image and lidar frame are present in the calibration supplied to the input. Otherwise the input cannot be created. For more information about this see the [Calibration](/input-api/calibration.md) section.
:::


:::tip reuse calibration
Note that you can, and should, reuse the same calibration for multiple inputs if possible.
:::

:::tip Use dryrun to validate input
Setting `dryrun` parameter to true in the method call, will validate the input using the Input API but not create any inputs.
:::


## Providing Ego Vehicle Motion Information
Ego vehicle motion (i.e. the position and rotation of the ego vehicle) is optional information that can be provided when creating `LidarsAndCamerasSeq` inputs. This information can enable a massive reduction in the time it takes to annotate static objects. Ego vehicle motion information is provided by passing a `EgoVehicleMotion` object to **each** `Frame` in the input.


```python reference
https://github.com/annotell/annotell-python/blob/master/annotell-input-api/examples/lidars_and_cameras_seq_full.py
```

:::note Coordinate Systems
Note that both `position` and `rotation` for ego vehicle pose are with respect to the *local* coordinate system.
:::
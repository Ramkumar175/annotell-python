---
title: CamerasSeq
---

A `CamerasSeq` input consists of a sequence of camera images. Unlike single-frame input types you also have to specify the sequential relationship between the _frames_, where each frame consists on 1-8 camera images.

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
In addition to supplying the sequential and temporal information for our `Frame` objects we also need to specify the camera images that constitute each frame. This is done by passing a list of `ImageFrame` objects, where each of these objects contains the path to the underlying file as well as the sensor name. Finally, we also need to specify the `frame_id` of each frame.

In order to create the input we need to use our list of `Frame` objects and specify the parameters `external_id` and `sensor_specification`.

| Parameter            | Description                                                                                                                                                                                                                                                      |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| external_id          | Id which can be used to track progress of annotations with.                                                                                                                                                                                                      |
| sensor_specification | Additional information about sensors, includes `sensor_to_pretty_name` and `sensor_order`. Defines which sensor that should be shown first, the sensor_order, or a mapping of sensor names to a prettier name version displayed in the Annotell Annotation Tool. |

```python reference
https://github.com/annotell/annotell-python/blob/master/annotell-input-api/examples/cameras_seq.py
```

:::tip Use dryrun to validate input
Setting `dryrun` parameter to true in the method call, will validate the input using the Input API but not create any inputs.
:::
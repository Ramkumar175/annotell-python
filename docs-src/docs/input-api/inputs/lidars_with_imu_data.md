---
title: Motion Compensation for Multi-Lidar Setups
---
:::info This feature is not yet available
This feature is not currently available for public use, but will be shortly.
:::
An inherent problem with labeling any lidar setup, and especially a multi-lidar one,
is that the resulting point
cloud is not a snapshot from a single instant in time but a time interval
in which several lidar sweeps have been made. This causes a problem during labeling since
the objects can move from one lidar sweep to the next, and if you try to label a car with
e.g. a 3D box that box would not represent the actual size of that car. This issue can be
resolved with the help of motion compensation, where we syncronize the timestamp of all
points in the point cloud.

By including data from the Intertial Measurement Unit (IMU) of the ego vehicle we get a very
exact trajectory of how the car is moving during the lidar sweeps. This allows us to perform
motion compensation, adjusting the points in the point cloud so that they represent the same
instant in time.

Additionally, each point in the provided point clouds need to have a unix timestamp specified
(in nanoseconds), so that the motion compensation can work. 

What instant in time to motion-compensate the points to can be specified
with the `unix_timestamp_ns` parameter. If this is not specified then, for each 
frame, the median time of all points in the pointclouds will be used instead.

:::caution All Unix Timestamps need to be in nanoseconds
In order for the motion compensation to work correctly it is important with a consistent
unit of time. Therefore all unix timestamps needs to be provided in nanoseconds.
:::


```python reference
https://github.com/annotell/annotell-python/blob/master/annotell-input-api/examples/lidars_with_imu_data.py
```

:::tip Use dryrun to validate input
Setting `dryrun` parameter to true in the method call, will validate the input using the Input API but not create any inputs.
:::

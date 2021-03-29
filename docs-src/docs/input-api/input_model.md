---
title: Structure
---

## Different types of inputs
An Input represents a grouping of sensor data (e.g. camera images, lidar pointclouds) that should be annotated together. Any information necessary to express the relationship between the sensors and their captured data is also present, be it camera resolution, sensor name or the frequency at which the data was recorded at.

There are different input types depending on what kind of sensor(s) are used to represent the contents of the input. For example, if you want to create an input only consisting of data from camera sensors then you would use the input type `Cameras`. Similarly, if you want to create an input consisting of lidar sensors and camera sensors then you would use the input type `LidarsAndCameras`. Additionally, inputs can either be **sequential** or **non-sequential**.

### Sequential vs non-sequential
Sequential inputs represent a *sequence* of sensor data, whereas non-sequential inputs only contain a single snapshot of sensor data. The sequential relationship is expressed via a sequence of **Frames**, where each **Frame** object contains information related to what kind of sensor data constitues the frame (e.g. which image and/or point cloud is a part of the Frame) as well as a *relative timestamp* that captures where in time (relative to the other frames) the Frame is located.

Non-sequential inputs only express a single snapshot of sensor data. As such, these kinds of inputs only contain a single Frame object and do not require any relative timestamp information.

Sequential input types are easily identified by the suffix `Seq` present in their name. The following input types are currently supported:
* `Cameras`
* `LidarsAndCameras`
* `CamerasSeq`
* `LidarAndCamerasSeq` 

## Required Fields
All non-sequential inputs have the following structure

```python
@dataclass
class Input():
    external_id: str
    frame: Frame
    sensor_specification: SensorSpecification
    calibration_id: Optional[str] # Required if using lidar sensors
```

Sequential inputs are similarly represented, except that they instead contain a list of Frames

```python
@dataclass
class InputSeq():
    external_id: str
    frames: List[Frame]
    sensor_specification: SensorSpecification
    calibration_id: Optional[str] # Required if using lidar sensors
```

The fields contain all of information required to create the input.

### External Id
Whenever an input is uploaded it automatically gets an unique UUID, this is used as the primary identifier by Annotell and by all of our internal systems. However, in order to make communication around specific inputs easier we also allow for clients to include any kind of identifier to the input via the external id.

### Sensor Specification
The sensor specification contains information related to the different camera and/or lidar sensors used for capturing the data present on the input. The sensor specification only requires information regarding the width and height of the different camera sensors used in the input.

The additional fields are optional and relate to specifying the order of the camera sensors and human readable variants of the sensor name (e.g. "Front Camera" instead of "FC").

```python
@dataclass
class CameraSettings:
    width: int
    height: int

@dataclass
class SensorSpecification:
    sensor_settings: Mapping[str, CameraSettings]
    sensor_to_pretty_name: Optional[Dict[str, str]] = None
    sensor_order: Optional[List[str]] = None
```

As an example, let's say we have three different camera sensors `R`, `F` and `L`. The `R` sensor is mounted on the right side of the ego vehicle, the `F` sensor at the front and the `L` sensor to the left. Creating a sensor specification for this scenario would correspond to

```python
sensor_spec = SensorSpecification(
    sensor_settings={
        "R": CameraSettings(width=1080, height=1920),
        "F": CameraSettings(width=1080, height=1920),
        "L": CameraSettings(width=1080, height=1920)
    },
    sensor_to_pretty_name={
        "R": "Right Camera",
        "F": "Front Camera",
        "L": "Left Camera"
    },
    sensor_order=["L", "F", "R"]
)
```

The specified `sensor_order` will cause the different camera sensors to be presented in a clockwise manner in the annotation tool (Left -> Front -> Right), while the `sensor_to_pretty_name` parameter will result in the annotation tool showing the human readable version of all the sensor names when changing sensor.

### Calibration Id
Any input consisting of lidar and camera sensors requires a calibration. The calibration captures the spatial relationship (position and rotation) between the different sensors, as well as different camera specific parameters.

This information is used by the annotation tool to highlight regions in the point cloud visible in the selected camera sensors as well as for projecting information from the pointcloud onto the different camera sensors (points, cuboids etc).

Detailed documentation on how to create calibrations via the API is present in the [Calibration section](calibration).

When including calibration id make sure that all of the sensors present on the input are also present in the calibration as well. If this is not the case the input will not be created and a validation error will be returned by the API.

Inputs without a lidar sensor do not require a calibration.

### Frame (non-sequential inputs)
The Frame object specifies the binary data to be annotated (.jpg, .png, .las etc) as well as which sensor the data originated from. 

The Frame object is different for each input type since they all support different kinds of sensors, even though the overall structure is the same. 

As an example, let's say we want to create an input consiting of images from three different camera sensors `R`, `F` and `L`. The corresponding binary data is present in the files `img_cam_R.jpg`, `img_cam_F.jpg` and `img_cam_F.jpg`. This would correspond to creating a `Cameras` input.

```python
cameras_input = Cameras(
    ...,
    frame=Frame(
        images=[
            Image("img_cam_R.jpg", sensor_name="R"),
            Image("img_cam_F.jpg", sensor_name="F"),
            Image("img_cam_L.jpg", sensor_name="L"),
        ]
    )
)
```

Similarly, if we also had an associated lidar pointcloud from the sensor `VDL-64` and a corresponding binary file `scan_vdl_64.las` we would instead express this as a `LidarsAndCameras` input instead.

```python
lidars_and_cameras = LidarsAndCameras(
    ...,
    frame=Frame(
        images=[
            Image("img_cam_R.jpg", sensor_name="R"),
            Image("img_cam_F.jpg", sensor_name="F"),
            Image("img_cam_L.jpg", sensor_name="L"),            
        ],
        point_clouds=[
            PointCloud("scan_vdl_64.las", sensor_name="VDL-64")
        ]
    )

)
```

### Frames (sequential inputs)
Sequential inputs deal with a list of Frame objects instead of a single Frame object. In addition, Frame objects associated with sequential inputs have two additional parameters not present in their non-sequential Frame counterparts: `frame_id` and `relative_timestamp`.

The sequential relationship is expressed via the ordering of the Frame objects in the `frames` list

```python
frame_1 = Frame(...)
frame_2 = Frame(...)
frame_3 = Frame(...)
frames = [frame_1, frame_2, frame_3]
```

This representation captures that `frame_1` comes first, then `frame_2` and `frame_3`, but it does not express how much time has passed between the different frames. This information is encoded via the `relative_timestamp` parameter present on each Frame object. The relative timestamp is expressed in milliseconds and describes the relative time between the Frame and the start of the input.

For example, let's say that the sensor data is collected and aggregated at 2Hz. That would then be expressed as 

```python
frame_1 = Frame(..., relative_timestamp=0)
frame_2 = Frame(..., relative_timestamp=500)
frame_3 = Frame(..., relative_timestamp=1000)
frames = [frame_1, frame_2, frame_3]
```

The `frame_id` is expressed as a string and is used to produce a unique identifier for each frame in the list of frames. The `frame_id` is used as a top-level key in the produced annotations, indicating which parts of the complete annotation belong to this specific frame.

A common use case is to have the `frame_id` correspond to the `relative_timestamp`.

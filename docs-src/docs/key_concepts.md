---
id: key_concepts
title: Key Concepts
description: Annotell Platform Concepts
slug: /
---

![Annotell](/img/annotell-domain.png)

## Project

Project is the top-most concept when interfacing with the Annotell Platform. It is possible to have multiple ongoing projects, and they act as a container for other Annotell resources.
Project setup is performed by the Annotell Professional Services team during the Guideline Agreement Process (GAP) of a new client engagement.

To use projects within the Annotell APIs, they can be identified using an external identifier.

## Batch

Input batches allow grouping of inputs into smaller batches within a project. By default, every project has at least one input batch.

Ongoing projects can benefit from using batches in two ways

- Group inputs collected at the same time
- Perform guideline or task definition changes without the need for retroactive changes.

### Batch Status

| Status      | Description                                                                                                            |
| ----------- | ---------------------------------------------------------------------------------------------------------------------- |
| pending     | Batch has been created but is still not fully configured by Annotell. Either during project setup or requested changes |
| open        | Batch is open for new inputs                                                                                           |
| ready       | Batch has been published and no longer open for new inputs.                                                            |
| in-progress | Annotell has started annotation of inputs within the batch.                                                            |
| completed   | Annotations has been completed.                                                                                        |

## Request

During GAP, projects are divided into different annotation types. E.g. a project consisting of images can be divided into lane annotation and object detection. Within Annotell this is represented as a **Request**.
A Request can be viewed as a drawing tool - we divide big and complex projects into several independent annotation types.
This makes it possible to:

- Reduce the mental strain on annotators
- Higher bandwidth - more annotators can work on the same data in parallel
- Build simple user interfaces

All of these contribute to a high level of quality while also reducing the total time needed for producing an annotation.

### Guideline

In order for us to produce annotations we need to know what and how to annotate. This type of information is found in something that's called a Guideline. A guideline contains information on what to mark (e.g. vehicles and pedestrians) as well as how (e.g. bounding box). A guideline also includes information about how to interpret the data, i.e. what does it mean that a vehicle is "heavily occluded"?

### Task Definition

Task Definition - Describes what we’re annotating. How many objects? Bounding box, semantic segmentation or lines/splines? What are the properties? Task Definitions are json documents that the Annotell Professional Services team generates from the guideline. The task definition is used by the Annotell App to construct the drawing tool, and can be viewed as the machine readable quivalent of a guideline.

## Input

The Annotell Platform has support for annotating different types of data together, e.g:

- One (or more) images of the same scene from different cameras
- Images from different cameras together with lidar point clouds

An **input** specifies how these different resources belong together using metadata about the scene and calibrations (how sensors relate to each other). An important concept related to inputs is that of the _frame_. A frame is a discrete moment in time, consisting of data from several different sensors. Inputs are divided into either being _single frame_ or _multiple frame_, where the latter is represented by the input type ending with `Seq`. In cases where you want to annotate sequences, where temporal information is important for producing the annotation, then inputs types that support multiple frames are preferrable.


Inputs can be created via Annotell's Input API, which has support for several different types of input types.


### Input Types
| Type                           | Description                                                                           |
| -------------------------------|---------------------------------------------------------------------------------------|
| **Cameras**                    | A single frame consisting of images from 1-9 cameras                                  |
| **LidarsAndCameras**           | A single frame consisting of 1-3 lidar point clouds and images from 1-9 cameras       |
| **CamerasSeq**                 | Sequence of frames, each frame consisting of images from 1-9 cameras                  |
| **LidarsAndCamerasSeq**        | Sequence of frames, consisting of 1-3 lidar point clouds and images from 1-9 cameras  |


## Annotation

Inputs are annotated in requests, producing _annotations_. Version v1.0.x provide by default annotations in Annotell's annotation format. Version v1.1.x and above provide annotations in the [ASAM OpenLABEL](https://www.asam.net/project-detail/asam-openlabel-v100/) format.

### v1.0.x Format (Deprecated) 🚨
The Annotell annotation format is closely linked to the Annotell task definition. The task definition determines what we are expected to save, where properties are stored and what datatype(s) the properties will be. The Annotell annotation format is saved as a JSON file and will be described according to the data types of JSON.

The Annotell annotation is an object with the following top keys:

| Property        | Description                                                                                                                                                                           |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| shapes          | contains information needed for drawing the shapes. Follows GeoJson standard for serialising geometric shapes, please see [GeoJSON](https://en.wikipedia.org/wiki/GeoJSON) for more information. |
| shapeProperties | contains the property values for shapes in shapes.                                                                                                                                    |
| properties      | contains the property values for what we want to know about the input, the inputProperties of the task definition.                                                                    |

```json
{
  "shapes": {}
  "shapeProperties": {}
  "properties": {}
}
```

### v1.1.x Format (Upcoming release) 🚧
Annotations are provided by the `annotell-input-api` as json objects in the ASAM OpenLABEL format.
More information on how the ASAM OpenLABEL format is structured is available at [ASAM](https://www.asam.net/index.php?eID=dumpFile&t=f&f=3876&token=413e8c85031ae64cc35cf42d0768627514868b2f#_structure_of_the_openlabel_format).

#### Convert to OpenLABEL
Besides the `annotell-input-api` Annotell also provides a library in order to parse the OpenLABEL json into a pythonic object,
called `annotell-openlabel` which you can find [here](https://pypi.org/project/annotell-openlabel), and with this
it is straight forward to parse the json. Here is an example where the annotation is fetched using a method described in
the [Downloading Annotations](input-api/annotations.md) chapter:
```
client = InputApiClient()
annotation = client.annotation.get_annotation(input_uuid=input_uuid, annotation_type=annotation_type)
open_label = Openlabel.parse_obj(annotation.content)
```
Any conversion away from this format will need to occur client-side.
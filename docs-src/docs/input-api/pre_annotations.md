---
title: Pre-annotations
---

:::caution
This feature is in an alpha stage and might be subject to changes
:::

Pre-annotations have many uses in ground-truth production. The pre-annotations feature allows information about the objects already known to be present in an input to be specified. Please reach out to our Advisory Services team to see how they can best be used for your use-case.

The Annotell platform supports uploading pre-annotations in the OpenLabel format using the [annotell-openlabel package](https://pypi.org/project/annotell-openlabel)

## Creating pre-annotations using the annotell-input-api client

There are 3 steps that are needed in order to create pre-annotations in the Annotell platform.
1. Create a scene by uploading all the needed data
2. Upload an OpenLabel annotation as a pre-annotation
3. Create an input from the scene

### 1. Creating a scene

:::note
The scene is a subset of the input, specifically refering to the data, such as images or pointclouds.
An input is what is created when this data is ready to be annotated.
:::

The interface for creating just a scene, without an input, is the same as we are familiar with.
The exception is that by not providing a project or a batch in the function call, the scene will be "dangling" until deemed ready for annotation

```python reference
https://github.com/annotell/annotell-python/blob/master/annotell-input-api/examples/lidars_and_cameras_seq_with_pre_annotations.py#L81-L82
```

2. Uploading an OpenLabel annotation

The pre-annotation can be uploaded to the Annotell platform once the scene has been created successfully.


Load your OpenLabel annotation according to the documentation in `annotell-openlabel` and upload it to the annotell platform as such:

```python reference
https://github.com/annotell/annotell-python/blob/master/annotell-input-api/examples/lidars_and_cameras_seq_with_pre_annotations.py#L89-L100
```

3. Create the input

When the scene and pre-annotation successfully have been created, the input can be created.
This will add it to the latest open batch in a project, or the specific batch that's specified, and be ready for annotation with the pre-annotation present.

```python reference
https://github.com/annotell/annotell-python/blob/master/annotell-input-api/examples/lidars_and_cameras_seq_with_pre_annotations.py#L102-L104
```


## Supported pre-annotation features

### Geometries
- Cuboid

### Attributes
- Text
- Num
- Boolean

At the moment only attributes for the objects are supported, i.e. geometry specific ones are not (With exception for the `stream` property)
The attributes can be static (specified in the `objects` key) or dynamic (specified in the `object_data` for the object in the frame).

An example of a supported pre-annotation
```json
{
  "openlabel": {
    "frame_intervals": [],
    "frames": {
      "0": {
        "frame_properties": {
          "timestamp": 0,
          "external_id": "0"
        },
        "objects": {
          "1232b4f4-e3ca-446a-91cb-d8d403703df7": {
            "object_data": {
              "cuboid": [
                {
                  "attributes": {
                    "text": [
                      {
                        "name": "stream",
                        "val": "LIDAR1"
                      }
                    ]
                  },
                  "name": "cuboid-89ac8a2b",
                  "val": [
                    2.079312801361084,
                    -18.919870376586914,
                    0.3359137773513794,
                    -0.002808041640852679,
                    0.022641949116037438,
                    0.06772797660868829,
                    0.9974429197838155,
                    1.767102435869269,
                    4.099334155319101,
                    1.3691029802958168
                  ]
                }
              ]
            }
          }
        }
      }
    },
    "metadata": {
      "schema_version": "1.0.0"
    },
    "objects": {
      "1232b4f4-e3ca-446a-91cb-d8d403703df7": {
        "name": "1232b4f4-e3ca-446a-91cb-d8d403703df7",
        "object_data": {
          "text": [
            {
              "name": "color",
              "val": "red"
            }
          ]
        },
        "type": "PassengerCar"
      }
    },
    "relations": {},
    "streams": {
      "LIDAR1": {
        "description": "",
        "type": "lidar"
      }
    },
    "tags": {}
  }
}
```

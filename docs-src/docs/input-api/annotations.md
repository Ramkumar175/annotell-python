---
title: Downloading Annotations
---

Annotations are made available for each [input](overview) and [annotation type](annotation_types) as soon as they are quality assured by the Annotell platform. Information about the format can be found in the [Key Concepts](../key_concepts.md#annotation) section.


## v1.0.x (Deprecated) 🚨

Once annotations are available they can be downloaded by supplying a list of `input_uuid`s for the corresponding inputs. A dictonary is returned containing available annotations for each input. Several annotations occur if the project is setup in such a way that each input should be annotated with different annotation types, e.g. Lane Markings and Objects.

```python
client.annotation.get_annotations(input_uuids=[
    'decf6479-d540-459f-b924-a12c2cecf3b5',
    '5da4f44b-16cb-414a-8dbd-ff5e5afc309a'
])
```

A common use case is downloading all completed annotations a project. This can be performed by first fetching all of the inputs added to the project and then filtering to only include inputs with status `"created"` (see [Input Statuses](working_with_inputs#input-status)).

```python reference
https://github.com/annotell/annotell-python/blob/f2b941373b1dff4297d7705ef0f2587eadbca7b3/annotell-input-api/examples/download_annotations.py#L10-L12
```

## v1.1.x (Upcoming release) 🚧
:::caution Not avialable
This section describes fetching OpenLABEL annotations using the Input API client, which is currently not available for use. It will be available in version 1.1.0 of `annotell-input-api`.
:::

<!--- Add this when we release v1.1.x
:::info Contact Annotell before use
This feature is currently only available for selected projects. If you would like this to be activated for one of your projects please contact Annotell.
:::-->
This section describes how you can fetch annotations in the OpenLABEL format (see [Annotation Format](../key_concepts.md#annotation)). These annotations are
automatically available as soon as they are finished and can be downloaded either for a whole project/batch or individually via the methods listed below.
All methods returns either a single `Annotation` object or a generator yielding `Annotation` objects, which contains indentifiers as well
as a dictionary containing the OpenLABEL json:

```python reference
https://github.com/annotell/annotell-python/blob/master/annotell-input-api/annotell/input_api/model/annotation/client_annotation.py#L7-L13
```
As can be seen in the `Annotation` model, an annotation is unique for each input and annotation-type.
The OpenLABEL json can be used as is or it can be converted into a pythonic object using the `annotell-openlabel` library, see
[Convert to OpenLABEL](../key_concepts.md#annotation).

### Get Single Annotation

#### Using input and annotation type
```python reference
https://github.com/annotell/annotell-python/blob/master/annotell-input-api/examples/get_annotation.py#L7-L10
```

This method returns a single `Annotation` object, containing the OpenLABEL json, using an input uuid and an annotation type.
### Get Annotations for a Project or Batch
```python reference
https://github.com/annotell/annotell-python/blob/master/annotell-input-api/examples/get_project_annotations.py#L8-L23
```
This example fetches annotations for an entire project or batch. The `run()` method returns a generator which will yield `Annotation` objects for all finished annotations
, for the given `project`, `batch` and `annotation_type`, and in the end prints all of these annotations.
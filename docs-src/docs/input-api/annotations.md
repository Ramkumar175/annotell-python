---
title: Downloading Annotations
---

Annotations are made available for each [input](overview) and [annotation type](annotation_types) as soon as they are quality assured by the Annotell platform. Information about the format can be found in the [Key Concepts](../#format) section.


#### v1.0.x (Will be deprecated) 🚨

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

#### v1.1.x (Upcoming release) 🚧

Once annotations are available they can be downloaded individually or by project and batch. In both cases annotations are downloaded per annotation type.

```python

## Note - NOT FINAL
annotation: AnnotationModel.Annotation = \
    client.annotation.get_annotation(
        input_uuid='<input_uuid>',
        annotation_type='<annotation_type>'
    )
```

```python

## Note - NOT FINAL
annotations: List[AnnotationModel.Annotation] = \
    client.annotation.get_project_annotations(
        project='<project>',
        annotation_type='<annotation_type>',
        batch='<batch>'
    )
```
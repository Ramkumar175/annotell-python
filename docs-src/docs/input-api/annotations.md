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
:::info Contact Annotell before use
This feature is currently only available for selected projects. If you would like this to be activated for one of your projects please contact Annotell.
:::
This section describes how you can fetch annotations in the OpenLABEL format (see [Annotation Format](../key_concepts.md#annotation)). These annotations are
automatically available as soon as they are finished and can be downloaded either for a whole project/batch or individually via the methods listed below.
All methods returns either a single `Annotation` object or a generator yielding `Annotation` objects, which contains indentifiers as well
as a dictionary containing the OpenLABEL json:

``` python
@dataclass
class Annotation:
    annotation_uuid: str
    input_uuid: str
    annotation_type: str
    content: Dict
    created: datetime
```
As can be seen in the `Annotation` model, an annotation is unique for each input and annotation-type.
The OpenLABEL json can be used as is or it can be converted into a pythonic object using the `annotell-openlabel` library, see
[Convert to OpenLABEL](../key_concepts.md#annotation).

### Get Single Annotation

#### Using input and annotation type
```python
client = InputApiClient()
annotation = client.annotation.get_annotation(input_uuid=input_uuid,
                                              annotation_type=annotation_type)
```
This method returns a single `Annotation` object, containing the OpenLABEL json, using an input uuid and an annotation type.
#### Using Annotation UUID
```python
client = InputApiClient()
annotation = client.annotation.get_annotation(annotation_uuid=annotation_uuid)
```
This method returns a single `Annotation` object, containing the OpenLABEL json, using an annotation uuid. This method is useful since after you have
downloaded the annotation once you only need to save the annotation uuid as a unique identifier for the annotation.

### Get Annotations for a Project or Batch
```python
def run(client: InputApiClient,
        project: str,
        annotation_type: str,
        batch: Optional[str] = None) -> Generator[Annotation, None, None]:
    annotation_generator = client.annotation.get_project_annotations(project=project,
                                                            batch=batch,
                                                            annotation_type=annotation_type)
    return annotation_generator


if __name__ == '__main__':
    setup_logging(level="INFO")
    client = InputApiClient()

    # Project - Available via `client.project.get_projects()`
    project = "<project-idenfitier>"
    annotation_type = "<annotation-type>"
    annotation_generator = run(client, project, annotation_type)
    for annotation in annotation_generator:
        print(annotation)
```
This example fetches annotations for an entire project or batch. It returns a generator which will yield `Annotation` objects for all finished annotations.
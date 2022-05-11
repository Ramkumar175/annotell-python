---
title: Downloading Annotations
---

Annotations are made available for each [input](overview) and [annotation type](annotation_types) as soon as they are quality assured by the Annotell platform. Information about the format can be found in the [Key Concepts](../key_concepts.md#annotation) section.



## v1.1.x
:::info Contact Annotell before use
This feature is currently only available for selected projects. If you would like this to be activated for one of your
projects please contact Annotell.
:::
This section describes how you can fetch annotations on the [OpenLABEL format](../openlabel/openlabel-format). These 
annotations are automatically available as soon as they are finished and can be downloaded either for an entire 
project/batch or individually via the methods listed below. All methods return either a single `Annotation` object or 
a generator yielding `Annotation` objects, which contains indentifiers as well as a dictionary containing the OpenLABEL 
json:

```python reference
https://github.com/annotell/annotell-python/blob/master/annotell-input-api/annotell/input_api/model/annotation/client_annotation.py#L7-L13
```

As the `Annotation` model shows, an annotation is unique for each input and annotation-type.
The OpenLABEL json can be used as it is or be converted into a pythonic object using the `annotell-openlabel` library, described
[here](../openlabel/python-client).

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


## Common use cases

### Download and convert a single annotation

This example shows a common workflow where an annotation is fetched, parsed into an `OpenLabelAnnotation` and then 
converted into a custom annotation format. 

```python
from annotell.input_api.input_api_client import InputApiClient
from annotell.openlabel.models import OpenLabelAnnotation
from pydantic import BaseModel

class CustomAnnotationFormat(BaseModel):
    ...
    
    @staticmethod
    def from_openlabel(openlabel_annotation: OpenLabelAnnotation):
        pass

    
client = InputApiClient()

annotation = client.annotation.get_annotation(
    input_uuid='<input-uuid-identifier>',
    annotation_type='<annotation-type>'
)

openlabel_annotation = OpenLabelAnnotation.parse_obj(annotation.content) # Create pydantic object
converted_annotation = CustomAnnotationFormat.from_openlabel(openlabel_annotation=openlabel_annotation) # Convert annotation
converted_dict = converted_annotation.dict(exclude_none=True) # Serialize to dict (or json)
```



### Download and save annotations to a zip file

In this example, all annotations are fetch for a project batch and then converted saved into a zip file. Note that the
save_file must have the extension `.zip`. 

```python
import io, json, zipfile
import annotell.input_api.input_api_client as IAC

client = IAC.InputApiClient()

zip_buffer = io.BytesIO()
with zipfile.ZipFile(zip_buffer, 'a', zipfile.ZIP_DEFLATED, False) as zip_file:
    for annotation in client.annotation.get_project_annotations(
            project="Project-identifier",
            batch="Batch-identifier",
            annotation_type="Annotation-Type-identifier"
    ):
        encoded_annotation = io.BytesIO(json.dumps(annotation.content, indent=4).encode())
        zip_file.writestr(f"{annotation.input_uuid}.json", encoded_annotation.getvalue())

with open('path/to/annotations.zip', 'wb') as f:
    f.write(zip_buffer.getvalue())
```



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
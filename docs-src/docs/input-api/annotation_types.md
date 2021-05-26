---
id: annotation-types
title: Annotation Types
---

Annotation Types are something that **can** be configured for a project either during or after 
the Guideline Agreement Process (GAP). During the GAP a set of taxonomies are defined
which will be used in order to annotate all the inputs that are uploaded to the platform.

Annotation Types are identifiers that each map to one of these taxonomies and allows you
to programmatically define, for every input that you create, what taxonomies that you
would like that input to be annotated with. You do not **need** to use annotation types
in a project but by doing so, all your inputs would always be created for all
annotation types available in the specified batch.

:::tip Add additional Annotation Types
It is possible to add additional Annotation Types after a project is created, and 
make them available to future batches that you create.
:::

## Examples
For the following examples we will be creating `cameras_sequence` inputs, however the
procedure would be identical for any other input type. We will also assume that the
project `example_project_id` is configured with the Annotation Types:
`static_objects` and `dynamic_objects`, and that they are also available in the batch
`example_batch_id`.

### Create inputs for specific Annotation Types
```python
from annotell.input_api.input_api_client import InputApiClient
from annotell.input_api.model.input.cameras_sequence import CamerasSequence

client = InputApiClient()
camera_input = CamerasSequence(external_id=..., frames=...)
client.cameras_sequence.create(camera_input,
                               project="example_project_id",
                               batch="example_batch_id",
                               annotation_types=["static_objects", "dynamic_objects"])
```
The above example will create a new input which will be annotated for the annotation 
types specified. If one or more of the specified annotation types would not be available
in the specified batch the validation in the Input API would fail. 

### Create inputs for all Annotation Types in batch
```python
from annotell.input_api.input_api_client import InputApiClient
from annotell.input_api.model.input.cameras_sequence import CamerasSequence

client = InputApiClient()
camera_input = CamerasSequence(external_id=..., frames=...)
client.cameras_sequence.create(camera_input,
                               project="example_project_id",
                               batch="example_batch_id")
```
The above example will create a new input which will be annotated for all annotation
types available in the batch `example_batch_id`. However, this way it is not explicit
what annotation types that the inputs will be annotated with, and you would not get an
error if e.g. `static_objects` was missing from the specified batch.

:::tip Always specify Annotation Types
The recommended option is always to specify annotation types when you create
inputs.
:::

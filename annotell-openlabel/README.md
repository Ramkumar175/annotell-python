# Annotell OpenLABEL

## Installation
Install the Annotell OpenLABEL package from pip with

    pip install annotell-openlabel

## Serialization and deserialization

Since all models inherit from `pydantic`'s `BaseModel`, serialization and deserialization from dicts or json strings are relatively straight forward. 

```py
data = {
    "openlabel": {
        "metadata": {
            "schema_version": "1.0.0"
        }
    }
}

import annotell.openlabel.models as OLM

# Deserialize dict
openlabel_annotation = OLM.OpenLabelAnnotation.parse_obj(data)

# Serialize to json
json_data = openlabel_annotation.json(exclude_none=True)

# Deserialize json
openlabel_annotation = OLM.OpenLabelAnnotation.parse_raw(json_data)

# Serialize to dict
dict_data = openlabel_annotation.dict(exclude_none=True)
```
    
## Further reading
https://www.asam.net/project-detail/asam-openlabel-v100/

# Changelog
## [0.1.4] - 2022-01-24
- Improved serializability for enum classes

## [0.1.3] - 2022-01-04
- Fixed issues with version 0.1.2

## [0.1.2] - 2021-12-29
- Updated several fields with multiple types to fix issues with serialization and deserialization.
For example, the coordinates on `Poly2d` objects were previously always parsed to strings.
  This update means that an attempt to parse them to floats is made. If this fails the they will be parsed to strings. 

## [0.1.1] - 2021-11-24
- Updated stream properties model generation to be nicer to work with

## [0.1.0] - 2021-11-18
- Updated json schema and model to be true to the 1.0.0 release of openlabel. Previously it was based on the release-candidate

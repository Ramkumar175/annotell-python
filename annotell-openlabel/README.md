# Annotell OpenLABEL

## Installation
Install the Annotell OpenLABEL package from pip with

    pip install annotell-openlabel

## Serialization and deserialization

Since all models inherit from `pydantic`'s `BaseModel`, serialization and deserialization from dicts or json strings are relatively straight forward. 

    data = {
        "openlabel": {
            "metadata": {
                "schema_version": "1.0.0"
            }
        }
    }

    
    import annotell.openlabel.models as OLM
    import json
    
    # Deserialize dict
    openlabel_annotation = OLM.OpenLabelAnnotation.parse_obj(data)
    
    # Deserialize json
    json_data = json.dumps(data)
    openlabel_annotation = OLM.OpenLabelAnnotation.parse_raw(data)

    # Serialize to dict
    dict_data = openlabel_annotation.dict(exclude_none=True)
    
    # Serialize to json
    json_data = openlabel_annotation.json(exclude_none=True)
    
    
    



## Further reading
https://www.asam.net/project-detail/asam-openlabel-v100/


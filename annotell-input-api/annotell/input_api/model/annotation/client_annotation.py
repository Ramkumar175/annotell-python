from typing import Optional, Dict
from datetime import datetime
from dataclasses import dataclass
from annotell.input_api.model.abstract.abstract_models import Response
from annotell.input_api.util import ts_to_dt


@dataclass
class Annotation(Response):
    input_uuid: str
    annotation_type: str
    created: datetime
    content: Dict

    @staticmethod
    def from_json(js: dict):
        return Annotation(
            input_uuid=js["inputUuid"],
            annotation_type=js["annotationType"],
            created=ts_to_dt(js["created"]),
            content=js.get("content") or dict()
        )

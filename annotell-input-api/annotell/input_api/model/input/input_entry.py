from dataclasses import dataclass
from typing import Optional, List
from enum import Enum
from annotell.input_api.model.abstract.abstract_models import Response
from annotell.input_api.model.annotation.annotation_type import AnnotationType

class InputStatus(str, Enum):
    Processing = "processing"
    Created = "created"
    Failed = "failed"
    InvalidatedBadContent = "invalidated:broken-input"
    InvalidatedSlamRerun = "invalidated:slam-rerun"
    InvalidatedDuplicate = "invalidated:duplicate"
    InvalidatedIncorrectlyCreated = "invalidated:incorrectly-created"


@dataclass
class Input(Response):
    uuid: str
    external_id: str
    batch: str
    input_type: str
    status: InputStatus
    view_link: Optional[str]
    error_message: Optional[str]
    annotation_types: List[AnnotationType]

    @staticmethod
    def from_json(js: dict):
        return Input(
            uuid=js["internalId"],
            external_id=js["externalId"],
            batch=js["batchId"],
            input_type=js["inputType"],
            status=js["status"],
            view_link=js.get("viewLink"),
            error_message=js.get("errorMessage"),
            annotation_types=js["annotationTypes"]
        )

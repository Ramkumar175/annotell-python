from dataclasses import dataclass
from datetime import datetime
from typing import Optional
from enum import Enum
from annotell.input_api.model.abstract.abstract_models import Response
from annotell.input_api.util import ts_to_dt


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
    created: datetime
    calibration_id: Optional[str]
    view_link: Optional[str]
    error_message: Optional[str]

    @staticmethod
    def from_json(js: dict):
        return Input(
            js["internalId"],
            js["externalId"],
            js["batchId"],
            js["inputType"],
            js["status"],
            ts_to_dt(js["created"]),
            js.get("calibrationId"),
            js.get("viewLink"),
            js.get("errorMessage")
        )

from dataclasses import dataclass
from datetime import datetime
from annotell.input_api.model.enums import InputBatchStatus
from annotell.input_api.util import ts_to_dt


@dataclass
class InputBatch:
    id: int
    project_id: int
    external_id: str
    title: str
    status: InputBatchStatus
    created: datetime
    updated: datetime

    @staticmethod
    def from_json(js: dict):
        return InputBatch(int(js["id"]), int(js["projectId"]), js["externalId"], js["title"], InputBatchStatus(js["status"]),
                          ts_to_dt(js["created"]), ts_to_dt(js["created"]))
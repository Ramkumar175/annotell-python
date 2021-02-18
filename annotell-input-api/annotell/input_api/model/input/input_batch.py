from dataclasses import dataclass
from datetime import datetime
from enum import Enum
from annotell.input_api.util import ts_to_dt
from annotell.input_api.model.abstract.abstract_models import Response


class InputBatchStatus(str, Enum):
    PENDING = 'pending'
    OPEN = 'open'
    READY = 'ready'
    INPROGESS = 'in-progress'
    COMPLETED = 'completed'


@dataclass
class InputBatch(Response):
    external_id: str
    title: str
    status: InputBatchStatus
    created: datetime
    updated: datetime

    @staticmethod
    def from_json(js: dict):
        return InputBatch(js["externalId"], js["title"], InputBatchStatus(js["status"]),
                          ts_to_dt(js["created"]), ts_to_dt(js["created"]))

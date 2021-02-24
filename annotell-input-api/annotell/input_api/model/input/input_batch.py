from dataclasses import dataclass
from datetime import datetime
from enum import Enum
from annotell.input_api.util import ts_to_dt
from annotell.input_api.model.abstract.abstract_models import Response


class ProjectBatchStatus(str, Enum):
    PENDING = 'pending'
    OPEN = 'open'
    READY = 'ready'
    INPROGESS = 'in-progress'
    COMPLETED = 'completed'


@dataclass
class ProjectBatch(Response):
    external_id: str
    title: str
    status: ProjectBatchStatus
    created: datetime
    updated: datetime

    @staticmethod
    def from_json(js: dict):
        return ProjectBatch(js["externalId"], js["title"], ProjectBatchStatus(js["status"]),
                          ts_to_dt(js["created"]), ts_to_dt(js["created"]))

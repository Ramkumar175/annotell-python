from dataclasses import dataclass
from datetime import datetime
from annotell.input_api.util import ts_to_dt
from annotell.input_api.model.abstract.abstract_models import Response


@dataclass
class Project(Response):
    created: datetime
    title: str
    description: str
    status: str
    external_id: str

    @ staticmethod
    def from_json(js: dict):
        return Project(ts_to_dt(js["created"]), js["title"],
                       js["description"], js["status"], js["externalId"])

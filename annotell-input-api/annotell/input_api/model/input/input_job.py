from dataclasses import dataclass
from typing import Dict
from annotell.input_api.model.abstract.abstract_models import Response


@dataclass
class InputJobCreated(Response):
    internal_id: int
    files: Dict[str, str]

    @staticmethod
    def from_json(js: dict):
        return InputJobCreated(js["internalId"], js["files"])

@dataclass
class CreateInputResponse:
    internal_id: int

    @staticmethod
    def from_input_job_response(input_job: InputJobCreated):
        return CreateInputResponse(input_job.internal_id)

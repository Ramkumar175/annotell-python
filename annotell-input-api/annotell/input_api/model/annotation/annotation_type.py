from dataclasses import dataclass
from annotell.input_api.model.abstract.abstract_models import Response


@dataclass
class AnnotationType(Response):
    name: str

    @staticmethod
    def from_json(js: dict):
        return AnnotationType(
            name=str(js["annotationType"])
        )

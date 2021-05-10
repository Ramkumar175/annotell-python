from dataclasses import dataclass
from annotell.input_api.model.abstract.abstract_models import Response


@dataclass
class AnnotationType(Response):
    name: str

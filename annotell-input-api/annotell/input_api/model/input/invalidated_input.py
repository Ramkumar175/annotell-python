from dataclasses import dataclass
from typing import List
from annotell.input_api.model.abstract.abstract_models import Response


@dataclass
class InvalidatedInputs(Response):
    invalidated_input_ids: List[int]
    not_found_input_ids: List[int]
    already_invalidated_input_ids: List[int]

    @staticmethod
    def from_json(js: dict):
        return InvalidatedInputs(js["invalidatedInputIds"],
                                 js["notFoundInputIds"],
                                 js["alreadyInvalidatedInputIds"])

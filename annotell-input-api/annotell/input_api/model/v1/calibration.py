from dataclasses import dataclass
from typing import Dict, Union, Mapping
from datetime import datetime
from annotell.input_api.model.calibration_explicit import *
from annotell.input_api.util import ts_to_dt


@dataclass
class CalibrationNoContent:
    id: str
    external_id: str
    created: datetime

    @staticmethod
    def from_json(js: dict):
        return CalibrationNoContent(
            js["id"], js["externalId"], ts_to_dt(js["created"])
        )


@dataclass
class CalibrationWithContent:
    id: str
    external_id: str
    created: datetime
    calibration: Mapping[str, dict]

    @staticmethod
    def from_json(js: dict):
        return CalibrationWithContent(js["id"], js["externalId"], ts_to_dt(js["created"]), js["calibration"])

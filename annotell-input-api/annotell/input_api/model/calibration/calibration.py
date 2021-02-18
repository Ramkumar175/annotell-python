from annotell.input_api.model.abstract.abstract_models import Response
from annotell.input_api.util import ts_to_dt
from datetime import datetime
from typing import Mapping
from dataclasses import dataclass
from typing import Dict, Union
from annotell.input_api.model.calibration.parts import (
    CameraCalibration, LidarCalibration
)


@dataclass
class Calibration:
    calibration_dict: Dict[str, Union[CameraCalibration, LidarCalibration]]

    def to_dict(self):
        return dict(
            [(k, v.to_dict()) for (k, v) in self.calibration_dict.items()]
        )


@dataclass
class CalibrationSpec:
    external_id: str
    calibration: Calibration

    def to_dict(self):
        return {
            'externalId': self.external_id,
            'calibration': self.calibration.to_dict()
        }


@dataclass
class CalibrationNoContent(Response):
    id: str
    external_id: str
    created: datetime

    @staticmethod
    def from_json(js: dict):
        return CalibrationNoContent(
            id=js["id"],
            external_id=js["externalId"],
            created=ts_to_dt(js["created"])
        )


@dataclass
class CalibrationWithContent(Response):
    id: str
    external_id: str
    created: datetime
    calibration: Mapping[str, dict]

    @staticmethod
    def from_json(js: dict):
        return CalibrationWithContent(
            id=js["id"],
            external_id=js["externalId"],
            created=ts_to_dt(js["created"]),
            calibration=js["calibration"]
        )

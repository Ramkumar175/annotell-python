from dataclasses import dataclass
from typing import Dict, Union, Mapping
from datetime import datetime
from annotell.input_api.model.calibration_explicit import *
from annotell.input_api.util import ts_to_dt


@dataclass
class Calibration:
    calibration_dict: Dict[str, Union[CameraCalibrationExplicit, LidarCalibrationExplicit]]  # noqa:E501

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

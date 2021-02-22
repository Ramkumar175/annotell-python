from abc import ABC
from dataclasses import dataclass
from annotell.input_api.model.v1.sensor_specification import SensorSpecification


@dataclass
class CameraResource(ABC):
    sensor_specification: SensorSpecification



from abc import ABC
from dataclasses import dataclass
from annotell.input_api.model.input.sensor_specification import SensorSpecification


@dataclass
class CameraInput(ABC):
    sensor_specification: SensorSpecification

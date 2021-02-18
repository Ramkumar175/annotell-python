from pathlib import Path
from abc import ABC
from dataclasses import dataclass


@dataclass
class Resource(ABC):
    filename: str
    resource_id: int
    sensor_name: str

    def resolve_resource_id(self):
        return self.resource_id or str(Path(self.filename).expanduser())

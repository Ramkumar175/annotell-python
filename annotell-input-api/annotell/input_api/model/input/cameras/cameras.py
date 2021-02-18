from typing import List
from dataclasses import dataclass

from annotell.input_api.model.input.resource.image import Image
from annotell.input_api.model.input.sensor_specification import SensorSpecification
from annotell.input_api.model.input.cameras.frame import Frame
from annotell.input_api.model.input.abstract.camera_sensor import CameraSensor


@dataclass
class Cameras(CameraSensor):
    external_id: str
    sensor_specification: SensorSpecification
    frame: Frame

    def to_dict(self) -> dict:
        return dict(frame=self.frame.to_dict(),
                    sensorSpecification=self.sensor_specification.to_dict(),
                    externalId=self.external_id)

    def get_local_resources(self) -> List[Image]:
        resources = []
        for resource in self.frame.images:
            if resource.resource_id is None:
                resources.append(resource)

        return resources

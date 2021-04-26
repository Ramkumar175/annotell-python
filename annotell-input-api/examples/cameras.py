from __future__ import absolute_import

import annotell.input_api.input_api_client as IAC
import annotell.input_api.model.input as InputModel
import annotell.input_api.model.input.cameras as CamerasModel
from annotell.input_api.logger import setup_logging
from typing import Optional


def run(client: IAC.InputApiClient, project: str, dryrun: bool = True) -> Optional[InputModel.CreateInputResponse]:
    print("Creating Cameras Input...")

    sensor1 = "RFC01"
    sensor2 = "RFC02"
    metadata = {
        "location-lat": 27.986065,
        "location-long": 86.922623,
        "vehicle_id": "abg"
    }

    cameras = CamerasModel.Cameras(
        external_id="input1",
        frame=CamerasModel.Frame(
            images=[
                InputModel.Image("./examples/resources/img_RFC01.jpg", sensor_name=sensor1),
                InputModel.Image("./examples/resources/img_RFC02.jpg", sensor_name=sensor2),
            ]
        ),
        metadata=metadata
    )

    # Add input
    return client.cameras.create(cameras, project=project, dryrun=dryrun)


if __name__ == '__main__':
    setup_logging(level="INFO")
    client = IAC.InputApiClient()

    # Project - Available via `client.project.get_projects()`
    project = "Project-identifier"
    run(client, project)



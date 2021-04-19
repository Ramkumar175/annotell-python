from __future__ import absolute_import

import annotell.input_api.input_api_client as IAC
import annotell.input_api.model.input.cameras_sequence as CamerasSeqModel
import annotell.input_api.model.input as InputModel
from annotell.input_api.logger import setup_logging


def run(client: IAC.InputApiClient, project: str, dryrun: bool = True):
    print("Creating Cameras Sequence Input...")

    sensor1 = "RFC01"
    sensor2 = "RFC02"

    cameras_sequence = CamerasSeqModel.CamerasSequence(
        external_id="camera_sequence_images_example_input",
        start_timestamp=1617698705,
        frames=[
            CamerasSeqModel.Frame(
                frame_id="1",
                relative_timestamp=0,
                images=[
                    InputModel.Image(
                        filename="./examples/resources/img_RFC01.jpg",
                        sensor_name=sensor1),
                    InputModel.Image(
                        filename="./examples/resources/img_RFC02.jpg",
                        sensor_name=sensor2),
                ]
            ),
            CamerasSeqModel.Frame(
                frame_id="2",
                relative_timestamp=500,
                images=[
                    InputModel.Image(
                        filename="./examples/resources/img_RFC11.jpg",
                        sensor_name=sensor1),
                    InputModel.Image(
                        filename="./examples/resources/img_RFC12.jpg",
                        sensor_name=sensor2),
                ]
            )
        ]
    )

    # Add input
    return client.cameras_sequence.create(cameras_sequence,
                                          project=project,
                                          dryrun=dryrun)


if __name__ == '__main__':
    setup_logging(level="INFO")
    # Project - Available via `client.project.get_projects()`
    project = "<project-identifier>"

    client = IAC.InputApiClient()
    run(client, project)


from __future__ import absolute_import
from typing import List, Optional

import annotell.input_api.input_api_client as IAC
import annotell.input_api.model.input as InputModel
import annotell.input_api.model.input.cameras_sequence as CamerasSeqModel
from annotell.input_api.logger import setup_logging


def run(client: IAC.InputApiClient, project: str, annotation_types: Optional[List[str]] = None, dryrun: bool = True):
    print("Creating Cameras Sequence Input...")

    sensor1 = "RFC01"
    sensor2 = "RFC02"
    metadata = {
        "location-lat": 27.986065,
        "location-long": 86.922623,
        "vehicle_id": "abg"
    }

    cameras_sequence = CamerasSeqModel.CamerasSequence(
        external_id="camera_sequence_images_example_input",
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
                ],
                metadata={'dut_status': 'active'}
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
                ],
                metadata={'dut_status': 'active'}
            )
        ],
        metadata=metadata
    )

    # Add input
    return client.cameras_sequence.create(cameras_sequence,
                                          project=project,
                                          annotation_types=annotation_types,
                                          dryrun=dryrun)


if __name__ == '__main__':
    setup_logging(level="INFO")
    # Project - Available via `client.project.get_projects()`
    project = "<project-identifier>"

    # Annotation Types - Available via `client.project.get_annotation_types(project)`
    annotation_types = ["annotation-type"]

    client = IAC.InputApiClient()
    run(client, project, annotation_types)


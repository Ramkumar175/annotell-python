from __future__ import absolute_import

import annotell.input_api.input_api_client as IAC
import annotell.input_api.model.input as InputModel
import annotell.input_api.model.input.lidars_sequence as LSM
import annotell.input_api.model.input.resources as ResourceModel
from annotell.input_api.logger import setup_logging
from annotell.input_api.model.input.metadata.metadata import MetaData


def run(client: IAC.InputApiClient, project: str, dryrun: bool = True) -> InputModel.CreateInputResponse:
    print("Creating Lidar Sequence Input...")

    lidar_sensor1 = "lidar"
    metadata = MetaData.parse_obj({"location-lat": 27.986065, "location-long": 86.922623, "vehicle_id": "abg"})

    lidars_seq = LSM.LidarsSequence(
        external_id="input1",
        frames=[
            LSM.Frame(
                frame_id="1",
                relative_timestamp=0,
                point_clouds=[
                    ResourceModel.PointCloud("./examples/resources/point_cloud_RFL01.las", sensor_name=lidar_sensor1),
                ],
                metadata={'dut_status': 'active'}
            ),
            LSM.Frame(
                frame_id="2",
                relative_timestamp=100,
                point_clouds=[
                    ResourceModel.PointCloud("./examples/resources/point_cloud_RFL02.las", sensor_name=lidar_sensor1),
                ],
                metadata={'dut_status': 'active'}
            )
        ],
        metadata=metadata
    )
    # Add input
    return client.lidars_sequence.create(lidars_seq, project=project, dryrun=dryrun)


if __name__ == '__main__':
    setup_logging(level="INFO")
    client = IAC.InputApiClient()

    # Project - Available via `client.project.get_projects()`
    project = "<project-identifier>"
    run(client, project)

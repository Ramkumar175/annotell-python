from __future__ import absolute_import

import os.path

import annotell.input_api.input_api_client as IAC
import annotell.input_api.model.input as InputModel
import annotell.input_api.model.input.resources as ResourceModel
import annotell.input_api.model.input.lidars as lidar_model
from annotell.input_api.logger import setup_logging
from annotell.input_api.model.input.metadata.metadata import MetaData
from examples.imu_data.create_imu_data import create_dummy_imu_data


def run(client: IAC.InputApiClient, project: str, dryrun: bool = True) -> InputModel.CreateInputResponse:
    print("Creating Lidars Input...")

    lidar_sensor1 = "lidar"
    metadata = MetaData.parse_obj({"location-lat": 27.986065, "location-long": 86.922623, "vehicle_id": "abg"})
    imu_data = create_dummy_imu_data()
    examples_path = os.path.dirname(__file__)
    lidars = lidar_model.Lidars(
        external_id="input1",
        frame=lidar_model.Frame(
            point_clouds=[ResourceModel.PointCloud(examples_path + "/resources/point_cloud_RFL01.las", sensor_name=lidar_sensor1)],
            unix_timestamp=1644223851 * 1e9
        ),
        metadata=metadata,
        imu_data=imu_data
    )

    # Add input
    return client.lidars.create(lidars, project=project, dryrun=dryrun)


if __name__ == '__main__':
    setup_logging(level="INFO")
    client = IAC.InputApiClient()

    # Project - Available via `client.project.get_projects()`
    project = "<project-identifier>"
    run(client, project)

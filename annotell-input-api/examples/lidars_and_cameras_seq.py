from __future__ import absolute_import

import annotell.input_api.input_api_client as IAC
import annotell.input_api.model.input as InputModel
import annotell.input_api.model.input.lidars_and_cameras_sequence as LCSM
import annotell.input_api.model.input.resources as ResourceModel
from annotell.input_api.logger import setup_logging

from examples.calibration import create_sensor_calibration


def run(client: IAC.InputApiClient, project: str, dryrun: bool = True) -> InputModel.CreateInputResponse:
    print("Creating Lidar and Camera Sequence Input...")

    lidar_sensor1 = "lidar"
    cam_sensor1 = "RFC01"
    cam_sensor2 = "RFC02"
    cam_sensor3 = "RFC03"
    # Create calibration
    calibration_spec = create_sensor_calibration("Collection 2020-06-16", [lidar_sensor1], [cam_sensor1, cam_sensor2, cam_sensor3])
    created_calibration = client.calibration.create_calibration(calibration_spec)

    camera_settings = InputModel.CameraSettings(width=1920, height=1080)
    sensor_settings = {
        cam_sensor1: camera_settings,
        cam_sensor2: camera_settings,
        cam_sensor3: camera_settings
    }
    sensor_specification = InputModel.SensorSpecification(sensor_settings=sensor_settings)

    lidars_and_cameras_seq = LCSM.LidarsAndCamerasSequence(
        external_id="input1",
        frames=[
            LCSM.Frame(
                frame_id="1",
                relative_timestamp=0,
                point_clouds=[
                    ResourceModel.PointCloud("./examples/resources/point_cloud_RFL01.las", sensor_name=lidar_sensor1),
                ],
                images=[
                    ResourceModel.Image("./examples/resources/img_RFC01.jpg", sensor_name=cam_sensor1),
                    ResourceModel.Image("./examples/resources/img_RFC01.jpg", sensor_name=cam_sensor2),
                    ResourceModel.Image("./examples/resources/img_RFC01.jpg", sensor_name=cam_sensor3)
                ]),
        ],
        calibration_id=created_calibration.id,
        sensor_specification=sensor_specification
    )
    # Add input
    return client.lidars_and_cameras_sequence.create(lidars_and_cameras_seq,
                                                     project=project,
                                                     dryrun=dryrun)


if __name__ == '__main__':
    setup_logging(level="INFO")
    client = IAC.InputApiClient()

    # Project - Available via `client.project.get_projects()`
    project = "<project-identifier>"
    run(client, project)

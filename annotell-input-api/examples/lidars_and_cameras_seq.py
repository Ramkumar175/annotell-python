from __future__ import absolute_import

import annotell.input_api.input_api_client as IAC
import annotell.input_api.model as IAM
from annotell.input_api.logger import setup_logging

from examples.calibration import create_calibration_spec


def run(client: IAC.InputApiClient, project: str, dryrun: bool = True) -> IAM.CreateInputResponse:
    print("Creating Lidar and Camera Sequence Input...")

    sensor1 = "RFC01"
    sensor2 = "RFC02"
    sensor3 = "RFC03"
    # Create calibration
    calibration_spec = create_calibration_spec("Collection 2020-06-16", ["lidar"], [sensor1, sensor2, sensor3])
    created_calibration = client.calibration.create_calibration(calibration_spec)

    camera_settings = IAM.CameraSettings(width=1920, height=1080)
    sensor_specification = IAM.SensorSpecification(sensor_settings=dict(RFC01=camera_settings,
                                                                        RFC02=camera_settings,
                                                                        RFC03=camera_settings))

    lidars_and_cameras_seq = LCS.LidarsAndCamerasSequence(
        external_id="input1",
        frames=[
            LCS.Frame(
                frame_id="1",
                relative_timestamp=0,
                point_clouds=[
                    ResourceModel.PointCloud(
                        "~/Downloads/lidar_RFL01.pcd", sensor_name="lidar"),
                ],
                images=[
                    ResourceModel.Image(
                        "~/Downloads/img_RFC01.jpg", sensor_name="RFC01"),
                    ResourceModel.Image(
                        "~/Downloads/img_RFC01.jpg", sensor_name="RFC02"),
                    ResourceModel.Image(
                        "~/Downloads/img_RFC01.jpg", sensor_name="RFC03")
                ]),
        ],
        calibration_id=created_calibration.id,
        sensor_specification=sensor_specification
    )
    # Add input
    return client.lidar_and_image_sequence.create(lidar_and_camera_seq,
                                                  project=project,
                                                  dryrun=dryrun)


if __name__ == '__main__':
    setup_logging(level="INFO")
    client = IAC.InputApiClient()

    # Project - Available via `client.project.get_projects()`
    project = "<project-identifier>"
    run(client, project)

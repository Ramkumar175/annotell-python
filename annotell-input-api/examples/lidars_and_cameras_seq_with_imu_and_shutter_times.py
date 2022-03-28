from __future__ import absolute_import

import os.path
from datetime import datetime
from typing import List, Optional

import annotell.input_api.input_api_client as IAC
import annotell.input_api.model.input as InputModel
import annotell.input_api.model.input.lidars_and_cameras_sequence as LCSM
import annotell.input_api.model.input.resources as ResourceModel
from annotell.input_api.logger import setup_logging
from examples.calibration.calibration import create_sensor_calibration
from examples.imu_data.create_imu_data import create_dummy_imu_data


def run(
    client: IAC.InputApiClient,
    project: str,
    annotation_types: Optional[List[str]] = None,
    dryrun: bool = True
) -> InputModel.CreateInputResponse:

    print("Creating Lidar and Camera Sequence Input...")

    lidar_sensor1 = "RFL01"
    lidar_sensor2 = "RFL02"
    cam_sensor1 = "RFC01"
    cam_sensor2 = "RFC02"
    metadata = {"location-lat": 27.986065, "location-long": 86.922623, "vehicleId": "abg"}
    examples_path = os.path.dirname(__file__)

    # Create calibration
    calibration_spec = create_sensor_calibration(f"Collection {datetime.now()}", [lidar_sensor1, lidar_sensor2], [cam_sensor1, cam_sensor2])
    created_calibration = client.calibration.create_calibration(calibration_spec)

    # Generate IMU data
    MILLI = 1000000 # nanos
    start_ts = 1648200140000000000
    end_ts = start_ts + 10 * MILLI
    imu_data = create_dummy_imu_data(start_timestamp=start_ts, end_timestamp=end_ts, samples_per_sec=1000)

    lidars_and_cameras_seq = LCSM.LidarsAndCamerasSequence(
        external_id="input1",
        frames=[
            LCSM.Frame(
                frame_id="1",
                unix_timestamp=start_ts + MILLI,
                relative_timestamp=0,
                point_clouds=[
                    ResourceModel.PointCloud(examples_path + "/resources/point_cloud_RFL01.csv", sensor_name=lidar_sensor1),
                    ResourceModel.PointCloud(examples_path + "/resources/point_cloud_RFL02.csv", sensor_name=lidar_sensor2),
                ],
                images=[
                    ResourceModel.Image(examples_path + "/resources/img_RFC01.jpg", sensor_name=cam_sensor1,
                                        metadata=ResourceModel.ImageMetadata(
                                            shutter_time_start_ns=start_ts + 0.5 * MILLI,
                                            shutter_time_end_ns=start_ts + 1.5 * MILLI)),
                    ResourceModel.Image(examples_path + "/resources/img_RFC02.jpg", sensor_name=cam_sensor2,
                                        metadata=ResourceModel.ImageMetadata(
                                            shutter_time_start_ns=start_ts + 0.5 * MILLI,
                                            shutter_time_end_ns=start_ts + 1.5 * MILLI))
                ],
            ),
            LCSM.Frame(
                frame_id="2",
                unix_timestamp=start_ts + 5 * MILLI,
                relative_timestamp=4 * MILLI,
                point_clouds=[
                    ResourceModel.PointCloud(examples_path + "/resources/point_cloud_RFL11.csv", sensor_name=lidar_sensor1),
                    ResourceModel.PointCloud(examples_path + "/resources/point_cloud_RFL12.csv", sensor_name=lidar_sensor2),
                ],
                images=[
                    ResourceModel.Image(examples_path + "/resources/img_RFC11.jpg", sensor_name=cam_sensor1,
                                        metadata=ResourceModel.ImageMetadata(
                                            shutter_time_start_ns=start_ts + 4.5 * MILLI,
                                            shutter_time_end_ns=start_ts + 5.5 * MILLI)),
                    ResourceModel.Image(examples_path + "/resources/img_RFC12.jpg", sensor_name=cam_sensor2,
                                        metadata=ResourceModel.ImageMetadata(
                                            shutter_time_start_ns=start_ts + 4.5 * MILLI,
                                            shutter_time_end_ns=start_ts + 5.5 * MILLI)),
                ]
            ),
        ],
        calibration_id=created_calibration.id,
        metadata=metadata,
        imu_data=imu_data
    )
    # Add input
    return client.lidars_and_cameras_sequence.create(
        lidars_and_cameras_seq, project=project, annotation_types=annotation_types, dryrun=dryrun
    )

if __name__ == '__main__':
    setup_logging(level="INFO")
    client = IAC.InputApiClient()

    # Project - Available via `client.project.get_projects()`
    project = "<project-id>"
    # Annotation Types - Available via `client.project.get_annotation_types(project)`
    annotation_types = ["<annotation-type>"]

    run(client, project, annotation_types, dryrun=True)

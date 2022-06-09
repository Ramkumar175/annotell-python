from __future__ import absolute_import

import os.path
import time
from datetime import datetime
from typing import List, Optional

from annotell.openlabel.models import Metadata, Openlabel, OpenLabelAnnotation, SchemaVersion

import annotell.input_api.input_api_client as IAC
import annotell.input_api.model.input.lidars_and_cameras_sequence as LCSM
import annotell.input_api.model.input.resources as ResourceModel
from annotell.input_api.logger import setup_logging
from examples.calibration.calibration import create_sensor_calibration


def run(
    client: IAC.InputApiClient,
    project: str,
    annotation_types: Optional[List[str]] = None,
    dryrun: bool = False,
    pre_annotation: Optional[OpenLabelAnnotation] = None
) -> Optional[dict]:
    print("Creating Lidar and Camera Sequence Input with OpenLabel pre-annotations...")

    lidar_sensor1 = "RFL01"
    lidar_sensor2 = "RFL02"
    cam_sensor1 = "RFC01"
    cam_sensor2 = "RFC02"
    metadata = {"location-lat": 27.986065, "location-long": 86.922623, "vehicleId": "abg"}
    examples_path = os.path.dirname(__file__)

    # Create calibration
    calibration_spec = create_sensor_calibration(f"Collection {datetime.now()}", [lidar_sensor1, lidar_sensor2], [cam_sensor1, cam_sensor2])
    created_calibration = client.calibration.create_calibration(calibration_spec)

    lidars_and_cameras_seq = LCSM.LidarsAndCamerasSequence(
        external_id="input1",
        frames=[
            LCSM.Frame(
                frame_id="1",
                relative_timestamp=0,
                point_clouds=[
                    ResourceModel.PointCloud(examples_path + "/resources/point_cloud_RFL01.csv", sensor_name=lidar_sensor1),
                    ResourceModel.PointCloud(examples_path + "/resources/point_cloud_RFL02.csv", sensor_name=lidar_sensor2),
                ],
                images=[
                    ResourceModel.Image(
                        examples_path + "/resources/img_RFC01.jpg",
                        sensor_name=cam_sensor1,
                    ),
                    ResourceModel.Image(
                        examples_path + "/resources/img_RFC02.jpg",
                        sensor_name=cam_sensor2,
                    )
                ],
            ),
            LCSM.Frame(
                frame_id="2",
                relative_timestamp=4,
                point_clouds=[
                    ResourceModel.PointCloud(examples_path + "/resources/point_cloud_RFL11.csv", sensor_name=lidar_sensor1),
                    ResourceModel.PointCloud(examples_path + "/resources/point_cloud_RFL12.csv", sensor_name=lidar_sensor2),
                ],
                images=[
                    ResourceModel.Image(
                        examples_path + "/resources/img_RFC11.jpg",
                        sensor_name=cam_sensor1,
                    ),
                    ResourceModel.Image(
                        examples_path + "/resources/img_RFC12.jpg",
                        sensor_name=cam_sensor2,
                    ),
                ]
            ),
        ],
        calibration_id=created_calibration.id,
        metadata=metadata
    )

    # Create Scene but not input since we don't provide project or batch
    scene_response = client.lidars_and_cameras_sequence.create(lidars_and_cameras_seq, annotation_types=annotation_types, dryrun=dryrun)

    # Simulate waiting for scene to be created since this is a async process
    # The rest needs to be run once the scene creation has finished
    print(f"Sleeping 10 seconds in order to wait for the scene to be created")
    time.sleep(10)

    # Create some pre-annotations using the OpenLabel model.
    if pre_annotation is None:
        pre_annotation = OpenLabelAnnotation(
            openlabel=Openlabel(
                metadata=Metadata(name="empty pre-annotation", schema_version=SchemaVersion.field_1_0_0),
                objects={},
                frames={},
                frame_intervals=[],
                streams={},
            )
        )
    resp = client.pre_annotation.create(scene_uuid=scene_response.input_uuid, pre_annotation=pre_annotation, dryrun=dryrun)

    return client.lidars_and_cameras_sequence.create_from_scene(
        scene_uuid=scene_response.input_uuid, annotation_types=annotation_types, project=project, dryrun=dryrun
    )


if __name__ == '__main__':
    setup_logging(level="INFO")
    client = IAC.InputApiClient()

    # Project - Available via `client.project.get_projects()`
    project = "<project-id>"

    # Annotation Types - Available via `client.project.get_annotation_types(project)`
    annotation_types = ["<annotation-type>"]

    run(client, project, annotation_types, dryrun=True)

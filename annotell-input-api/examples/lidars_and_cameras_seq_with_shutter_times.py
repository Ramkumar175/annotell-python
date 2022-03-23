from __future__ import absolute_import

from typing import List, Optional
from datetime import datetime

import annotell.input_api.input_api_client as IAC
import annotell.input_api.model.input as InputModel
import annotell.input_api.model.input.lidars_and_cameras_sequence as LCSM
import annotell.input_api.model.input.resources as ResourceModel
from annotell.input_api.logger import setup_logging
from examples.calibration.calibration import create_sensor_calibration


def run(
    client: IAC.InputApiClient,
    project: str,
    annotation_types: Optional[List[str]] = None,
    dryrun: bool = True
) -> InputModel.CreateInputResponse:

    print("Creating Lidar and Camera Sequence Input...")

    lidar_sensor1 = "lidar"
    cam_sensor1 = "RFC01"
    cam_sensor2 = "RFC02"
    metadata = {"location-lat": 27.986065, "location-long": 86.922623, "vehicleId": "abg"}

    # Create calibration
    calibration_spec = create_sensor_calibration(f"Collection {datetime.now()}", [lidar_sensor1], [cam_sensor1, cam_sensor2])
    created_calibration = client.calibration.create_calibration(calibration_spec)

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
                    ResourceModel.Image("./examples/resources/img_RFC01.jpg", sensor_name=cam_sensor1,
                                        metadata=ResourceModel.Image.ImageMetadata(shuttertime_start_ns=1646132400000000000,
                                                                                   shuttertime_end_ns=1646132400008330000)),
                    ResourceModel.Image("./examples/resources/img_RFC02.jpg", sensor_name=cam_sensor2,
                                        metadata=ResourceModel.Image.ImageMetadata(shuttertime_start_ns=1646132400016670000,
                                                                                   shuttertime_end_ns=1646132400025000000))
                ],
                metadata={'dut_status': 'active'}
            ),
            # ... further frames ...
        ],
        calibration_id=created_calibration.id,
        metadata=metadata
    )
    # Add input
    return client.lidars_and_cameras_sequence.create(
        lidars_and_cameras_seq, project=project, annotation_types=annotation_types, dryrun=dryrun
    )

if __name__ == '__main__':
    setup_logging(level="INFO")
    client = IAC.InputApiClient()

    # Project - Available via `client.project.get_projects()`
    project = "<project-identifier>"
    # Annotation Types - Available via `client.project.get_annotation_types(project)`
    annotation_types = ["annotation-type"]

    run(client, project, annotation_types, dryrun=True)

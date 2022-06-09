from __future__ import absolute_import

from typing import List
from uuid import uuid4

import annotell.openlabel.models as OLM

import annotell.input_api.input_api_client as IAC
import annotell.input_api.model as IAM
import examples.lidars_and_cameras_seq_with_pre_annotations as lidars_cameras_seq_with_pre_annotations_example
from tests.utils import TestProjects


class TestLidarsAndCamerasSeqWithPreAnnotations:

    @staticmethod
    def filter_lidar_and_cameras_seq_project(projects: List[IAM.Project]):
        return [p for p in projects if p.project == TestProjects.LidarsAndCamerasSequenceProject]

    def test_create_lidars_cameras_seq_with_pre_annotation(self, client: IAC.InputApiClient):
        projects = client.project.get_projects()
        project = self.filter_lidar_and_cameras_seq_project(projects)[0].project
        object_uuid = str(uuid4())
        pre_annotation = OLM.OpenLabelAnnotation(
            openlabel=OLM.Openlabel(
                metadata=OLM.Metadata(name="empty pre-annotation", schema_version=OLM.SchemaVersion.field_1_0_0),
                objects={object_uuid: OLM.Object(name="MyNameIsBox", type="SpaceShip", object_data=OLM.ObjectData())},
                frames={
                    "0": OLM.Frame(
                        frame_properties=OLM.FrameProperties(streams={}, timestamp=0, external_id="1"),
                        objects={
                            object_uuid: OLM.Objects(
                                object_data=OLM.ObjectData(
                                    cuboid=[
                                        OLM.Cuboid(
                                            attributes=OLM.Attributes(text=[OLM.Text(name="stream", val="RFL01")]),
                                            name="Cuboid-1",
                                            val=[
                                                -67.37240600585938,
                                                -21.776424407958984,
                                                0.0018768074223771691,
                                                -0.008678210841102768,
                                                0.011558858557049027,
                                                0.2286106806721516,
                                                0.9734106215406072,
                                                1.767102435869269,
                                                4.099334155319101,
                                                1.3691029802958168
                                            ]
                                        )
                                    ]
                                )
                            )
                        }
                    )
                },
                frame_intervals=[],
                streams={},
            )
        )
        resp = lidars_cameras_seq_with_pre_annotations_example.run(
            client=client, project=project, dryrun=False, pre_annotation=pre_annotation
        )
        assert resp is None

    def test_validate_lidars_cameras_seq_with_empty_pre_annotation(self, client: IAC.InputApiClient):
        projects = client.project.get_projects()
        project = self.filter_lidar_and_cameras_seq_project(projects)[0].project
        resp = lidars_cameras_seq_with_pre_annotations_example.run(client=client, project=project)
        assert resp is None

    def test_create_lidars_cameras_seq_with_empty_pre_annotation(self, client: IAC.InputApiClient):
        projects = client.project.get_projects()
        project = self.filter_lidar_and_cameras_seq_project(projects)[0].project
        resp = lidars_cameras_seq_with_pre_annotations_example.run(client=client, project=project, dryrun=False)
        assert resp is None

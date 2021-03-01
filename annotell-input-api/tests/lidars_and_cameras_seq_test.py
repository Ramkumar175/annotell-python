from __future__ import absolute_import

from typing import List

import pytest

import annotell.input_api.model as IAM
import examples.lidars_and_cameras_seq as lidars_cameras_seq_example
import annotell.input_api.input_api_client as IAC
from tests.utils import TestProjects


class TestLidarsAndCamerasSeq:

    @staticmethod
    def filter_lidar_and_cameras_seq_project(projects: List[IAM.Project]):
        return [p for p in projects if p.external_id == TestProjects.LidarsAndCamerasSequenceProject]

    def test_get_lidars_and_cameras_seq_project(self, client: IAC.InputApiClient):
        projects = client.project.get_projects()
        project = self.filter_lidar_and_cameras_seq_project(projects)
        assert len(project) == 1

    # TODO: Once we have v1 route active in Input API (Not alpha hack) uncomment this.
    #
    # def test_validate_lidars_and_cameras_seq_input(self):
    #     client = create_input_api_client(get_annotell_env(), get_organization_id())
    #     projects = client.project.get_projects()
    #     project = self.filter_lidar_and_cameras_seq_project(projects)[0].external_id
    #     resp = lidars_cameras_seq_example.run(client=client, project=project)
    #     assert resp is None
    #
    # def test_create_lidars_and_cameras_seq_input(self):
    #     client = create_input_api_client(get_annotell_env(), get_organization_id())
    #     projects = client.project.get_projects()
    #     project = self.filter_lidar_and_cameras_seq_project(projects)[0].external_id
    #     resp = lidars_cameras_seq_example.run(client=client, project=project, dryrun=False)
    #     assert isinstance(resp.internal_id, str)
    #
    #     with pytest.raises(AttributeError):
    #         resp.files

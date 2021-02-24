from __future__ import absolute_import

from typing import List

import pytest
from tests.utils import create_input_api_client, get_annotell_env

import annotell.input_api.model as IAM
import examples.lidars_and_cameras_seq as lidars_cameras_seq_example



class TestLidarsAndCamerasSeq:

    @staticmethod
    def filter_lidar_and_cameras_seq_project(projects: List[IAM.Project]):
        return [p for p in projects if p.external_id == "00af3327-ecdd-440a-b6ad-7bded88704ba"]

    def test_get_lidars_and_cameras_seq_project(self):
        client = create_input_api_client(get_annotell_env(), 3)
        projects = client.project.get_projects()
        project = self.filter_lidar_and_cameras_seq_project(projects)
        assert len(project) == 1

    # TODO: Once we have v1 route active in Input API (Not alpha hack) uncomment this.
    #
    # def test_validate_lidars_and_cameras_seq_input(self):
    #     client = create_input_api_client(get_annotell_env(), 3)
    #     projects = client.project.get_projects()
    #     project = self.filter_lidar_and_cameras_seq_project(projects)[0].external_id
    #     resp = lidars_cameras_seq_example.run(client=client, project=project)
    #     assert resp is None
    #
    # def test_create_lidars_and_cameras_seq_input(self):
    #     client = create_input_api_client(get_annotell_env(), 3)
    #     projects = client.project.get_projects()
    #     project = self.filter_lidar_and_cameras_seq_project(projects)[0].external_id
    #     resp = lidars_cameras_seq_example.run(client=client, project=project, dryrun=False)
    #     assert isinstance(resp.internal_id, str)
    #
    #     with pytest.raises(AttributeError):
    #         resp.files

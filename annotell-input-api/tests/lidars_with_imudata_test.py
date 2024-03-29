from typing import List

import pytest

import annotell.input_api.model as IAM
import annotell.input_api.input_api_client as IAC
from tests.utils import TestProjects

import examples.lidars_with_imu_data as lidars_example


class TestLidarsWithImuData:

    @staticmethod
    def filter_lidar_project(projects: List[IAM.Project]):
        return [p for p in projects if p.project == TestProjects.LidarsProject]

    def test_validate_lidars_input(self, client: IAC.InputApiClient):
        projects = client.project.get_projects()
        project = self.filter_lidar_project(projects)[0].project
        resp = lidars_example.run(client=client, project=project)
        assert resp is None

    def test_create_lidars_input(self, client: IAC.InputApiClient):
        projects = client.project.get_projects()
        project = self.filter_lidar_project(projects)[0].project
        resp = lidars_example.run(client=client, project=project, dryrun=False)
        assert isinstance(resp.input_uuid, str)

        with pytest.raises(AttributeError):
            resp.files

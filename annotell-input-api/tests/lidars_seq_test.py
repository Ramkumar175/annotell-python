from __future__ import absolute_import

from typing import List

import pytest

import annotell.input_api.model as IAM
import examples.lidars_seq as lidars_seq_example
import annotell.input_api.input_api_client as IAC
from tests.utils import TestProjects


class TestLidarsSeq:

    @staticmethod
    def filter_lidar_seq_project(projects: List[IAM.Project]):
        return [p for p in projects if p.project == TestProjects.LidarsSequenceProject]

    def test_get_lidars_seq_project(self, client: IAC.InputApiClient):
        projects = client.project.get_projects()
        project = self.filter_lidar_seq_project(projects)
        assert len(project) == 1

    def test_validate_lidars_seq_input(self, client: IAC.InputApiClient):
        projects = client.project.get_projects()
        project = self.filter_lidar_seq_project(projects)[0].project
        resp = lidars_seq_example.run(client=client, project=project)
        assert resp is None

    def test_create_lidars_seq_input(self, client: IAC.InputApiClient):
        projects = client.project.get_projects()
        project = self.filter_lidar_seq_project(projects)[0].project
        resp = lidars_seq_example.run(client=client, project=project, dryrun=False)
        assert isinstance(resp.input_uuid, str)

        with pytest.raises(AttributeError):
            resp.files

from __future__ import absolute_import
from typing import List
import pytest

import annotell.input_api.model as IAM
import examples.cameras_seq as cameras_seq_example
import annotell.input_api.input_api_client as IAC
from tests.utils import TestProjects


class TestCameras:
    @staticmethod
    def filter_cameras_project(projects: List[IAM.Project]):
        return [p for p in projects if p.external_id == TestProjects.CamerasSequenceProject]

    def test_get_cameras_project(self, client: IAC.InputApiClient):
        projects = client.project.get_projects()
        project = self.filter_cameras_project(projects)
        assert len(project) == 1

    def test_validate_cameras_sequence_input(self, client: IAC.InputApiClient):
        projects = client.project.get_projects()
        project = self.filter_cameras_project(projects)[0].external_id

        resp = cameras_seq_example.run(client=client, project=project)
        assert resp is None

    def test_create_cameras_sequence_input(self, client: IAC.InputApiClient):
        projects = client.project.get_projects()
        project = self.filter_cameras_project(projects)[0].external_id
        resp = cameras_seq_example.run(client=client, project=project, dryrun=False)
        assert isinstance(resp.internal_id, str)

        with pytest.raises(AttributeError):
            resp.files

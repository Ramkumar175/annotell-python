from __future__ import absolute_import
from typing import List
import pytest

import annotell.input_api.model as IAM
import examples.cameras_seq_images as cameras_seq_images_example
import examples.cameras_seq_videos as cameras_seq_videos_example
import annotell.input_api.input_api_client as IAC
from tests.utils import TestProjects


class TestCameras:
    @staticmethod
    def filter_cameras_project(projects: List[IAM.Project]):
        return [p for p in projects if p.project == TestProjects.CamerasSequenceProject]

    def test_get_cameras_project(self, client: IAC.InputApiClient):
        projects = client.project.get_projects()
        project = self.filter_cameras_project(projects)
        assert len(project) == 1

    def test_validate_cameras_sequence_images_input(self, client: IAC.InputApiClient):
        projects = client.project.get_projects()
        project = self.filter_cameras_project(projects)[0].project

        resp = cameras_seq_images_example.run(client=client, project=project)
        assert resp is None

    def test_create_cameras_sequence_images_input(self, client: IAC.InputApiClient):
        projects = client.project.get_projects()
        project = self.filter_cameras_project(projects)[0].project
        resp = cameras_seq_images_example.run(client=client, project=project, dryrun=False)
        assert isinstance(resp.input_uuid, str)

        with pytest.raises(AttributeError):
            resp.files

    def test_validate_cameras_sequence_videos_input(self, client: IAC.InputApiClient):
        projects = client.project.get_projects()
        project = self.filter_cameras_project(projects)[0].project

        resp = cameras_seq_videos_example.run(client=client, project=project)
        assert resp is None

    def test_create_cameras_sequence_videos_input(self, client: IAC.InputApiClient):
        projects = client.project.get_projects()
        project = self.filter_cameras_project(projects)[0].project
        resp = cameras_seq_videos_example.run(client=client, project=project, dryrun=False)
        assert isinstance(resp.input_uuid, str)

        with pytest.raises(AttributeError):
            resp.files
from __future__ import absolute_import
from typing import List
import pytest

import annotell.input_api.model as IAM
import examples.cameras as cameras_example
import annotell.input_api.input_api_client as IAC
from tests.utils import TestProjects


class TestCameras:

    @staticmethod
    def filter_cameras_project(projects: List[IAM.Project]):
        return [p for p in projects if p.project == TestProjects.CamerasProject]

    def test_get_cameras_project(self, client: IAC.InputApiClient):
        projects = client.project.get_projects()
        project = self.filter_cameras_project(projects)
        assert len(project) == 1

    def test_validate_cameras_input(self, client: IAC.InputApiClient):
        projects = client.project.get_projects()
        project = self.filter_cameras_project(projects)[0].project

        resp = cameras_example.run(client=client, project=project)
        assert resp is None

    def test_create_cameras_input(self, client: IAC.InputApiClient):
        projects = client.project.get_projects()
        project = self.filter_cameras_project(projects)[0].project
        resp = cameras_example.run(client=client, project=project, dryrun=False)
        assert isinstance(resp.input_uuid, str)

        with pytest.raises(AttributeError):
            resp.files

    def test_validate_create_cameras_with_at(self, client: IAC.InputApiClient):
        projects = client.project.get_projects()
        project = self.filter_cameras_project(projects)[0].project
        annotation_types = ["object-detection", "signs"]
        resp = cameras_example.run(client=client, project=project, annotation_types=annotation_types)
        assert resp is None

    def test_create_cameras_with_at(self, client: IAC.InputApiClient):
        projects = client.project.get_projects()
        project = self.filter_cameras_project(projects)[0].project
        annotation_types = ["object-detection", "signs"]
        resp = cameras_example.run(client=client, project=project, annotation_types=annotation_types, dryrun=False)

        assert isinstance(resp.input_uuid, str)

        with pytest.raises(AttributeError):
            resp.files

    def test_create_dangling_cameras_input(self, client: IAC.InputApiClient):
        resp = cameras_example.run(client=client, project=None, dryrun=False)

        assert isinstance(resp.input_uuid, str)

        with pytest.raises(AttributeError):
            resp.files

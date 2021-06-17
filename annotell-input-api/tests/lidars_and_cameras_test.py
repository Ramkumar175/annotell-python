from __future__ import absolute_import, annotations

from typing import List

import pytest

import annotell.input_api.model as IAM
import examples.lidars_and_cameras as lidars_cameras_example
import annotell.input_api.input_api_client as IAC
from tests.utils import TestProjects


class TestLidarsAndCamerasSeq:

    @staticmethod
    def filter_lidar_and_cameras_project(projects: List[IAM.Project]):
        return [p for p in projects if p.project == TestProjects.LidarsAndCamerasProject]

    def test_get_lidars_and_cameras_project(self, client: IAC.InputApiClient):
        projects = client.project.get_projects()
        project = self.filter_lidar_and_cameras_project(projects)
        assert len(project) == 1

    def test_validate_lidars_and_cameras_input(self, client: IAC.InputApiClient):
        projects = client.project.get_projects()
        project = self.filter_lidar_and_cameras_project(projects)[0].project
        resp = lidars_cameras_example.run(client=client, project=project)
        assert resp is None

    def test_create_lidars_and_cameras_input(self, client: IAC.InputApiClient):
        projects = client.project.get_projects()
        project = self.filter_lidar_and_cameras_project(projects)[0].project
        resp = lidars_cameras_example.run(client=client, project=project, dryrun=False)
        assert isinstance(resp.input_uuid, str)

        with pytest.raises(AttributeError):
            resp.files

    def test_validate_lidars_and_cameras_with_at_input(self, client: IAC.InputApiClient):
        projects = client.project.get_projects()
        project = self.filter_lidar_and_cameras_project(projects)[0].project

        annotation_types = ["object-detection", "signs"]
        resp = lidars_cameras_example.run(client=client, project=project, annotation_types=annotation_types)
        assert resp is None

    def test_create_lidars_and_cameras_with_at_input(self, client: IAC.InputApiClient):
        projects = client.project.get_projects()
        project = self.filter_lidar_and_cameras_project(projects)[0].project

        annotation_types = ["object-detection", "signs"]
        resp = lidars_cameras_example.run(client=client, project=project, annotation_types=annotation_types, dryrun=False)
        assert isinstance(resp.input_uuid, str)

        with pytest.raises(AttributeError):
            resp.files

    def test_create_lidars_and_cameras_input(self, client: IAC.InputApiClient):
        resp = lidars_cameras_example.run(client=client, project=None, dryrun=False)
        assert isinstance(resp.input_uuid, str)

        with pytest.raises(AttributeError):
            resp.files

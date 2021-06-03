from typing import List

import annotell.input_api.input_api_client as IAC
import annotell.input_api.model as IAM
import examples.get_projects as get_projects_example
import examples.get_project_batches as get_project_batches_example
from tests.utils import TestProjects


class TestProject:

    @staticmethod
    def filter_cameras_project(projects: List[IAM.Project]):
        return [p for p in projects if p.project == TestProjects.CamerasProject]

    def test_get_projects(self, client: IAC.InputApiClient):
        projects = get_projects_example.run(client=client)
        assert isinstance(projects, list)

        assert len(projects) >= 1

    def test_get_project_batches(self, client: IAC.InputApiClient):
        projects = client.project.get_projects()
        cameras_project = self.filter_cameras_project(projects)[0].project
        project_batches = get_project_batches_example.run(client=client, project=cameras_project)

        assert isinstance(project_batches, list)

        assert len(project_batches) >= 1

        assert all([cameras_project == batch.project for batch in project_batches])

    def test_get_annotation_types(self, client: IAC.InputApiClient):
        projects = client.project.get_projects()
        cameras_project = self.filter_cameras_project(projects)[0].project
        annotation_types = client.project.get_annotation_types(cameras_project)

        assert isinstance(annotation_types, list)

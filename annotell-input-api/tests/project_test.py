from typing import List

import annotell.input_api.input_api_client as IAC
import annotell.input_api.model as IAM
import examples.get_projects as get_projects_example
import examples.get_project_batches as get_project_batches_example
import examples.get_project_annotation_types as get_project_annotation_types_example
import examples.get_project_batches_annotation_types as get_project_batches_annotation_types_example
from tests.utils import TestProjects


class TestProject:

    @staticmethod
    def filter_cameras_project(projects: List[IAM.Project]):
        return [p for p in projects if p.project == TestProjects.CamerasProject]

    @staticmethod
    def filter_cameras_project_with_at(projects: List[IAM.Project]):
        return [p for p in projects if p.project == TestProjects.CamerasProjectWithAT]

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

    def test_get_project_annotation_types(self, client: IAC.InputApiClient):
        projects = client.project.get_projects()
        print([project.project for project in projects])

        project = self.filter_cameras_project_with_at(projects)[0].project
        annotation_types = get_project_annotation_types_example.run(client=client, project=project)

        assert isinstance(annotation_types, list)

        assert len(annotation_types) >= 1

        assert "QA" in annotation_types

    def test_get_batch_annotation_types(self, client: IAC.InputApiClient):
        projects = client.project.get_projects()
        project = self.filter_cameras_project_with_at(projects)[0].project
        batch = client.project.get_project_batches(project)[0].batch

        annotation_types = get_project_batches_annotation_types_example.run(client=client, project=project, batch=batch)

        assert isinstance(annotation_types, list)

        assert len(annotation_types) >= 1

        assert "QA" not in annotation_types

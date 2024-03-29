from typing import List
import time
import annotell.input_api.model as IAM
import examples.get_inputs as get_inputs_example
import examples.get_inputs_by_uuids as get_inputs_by_uuids_example
import annotell.input_api.input_api_client as IAC
import examples.cameras as cameras_example
from tests.utils import TestProjects


class TestInput:

    @staticmethod
    def filter_cameras_project(projects: List[IAM.Project]):
        return [p for p in projects if p.project == TestProjects.CamerasProject]

    def test_get_inputs_for_project(self, client: IAC.InputApiClient):
        projects = client.project.get_projects()
        project = self.filter_cameras_project(projects)[0].project
        project_inputs = get_inputs_example.run(client=client, project=project)

        assert isinstance(project_inputs, list)
        assert len(project_inputs) >= 1

    def test_get_inputs_with_uuid(self, client: IAC.InputApiClient):
        projects = client.project.get_projects()
        project = self.filter_cameras_project(projects)[0].project
        input_response = cameras_example.run(client=client, project=project, dryrun=False)
        input_uuid = input_response.input_uuid

        assert isinstance(input_uuid, str)

        inputs = get_inputs_by_uuids_example.run(client=client, input_uuids=[input_uuid])

        assert isinstance(inputs, list)
        assert len(inputs) == 1

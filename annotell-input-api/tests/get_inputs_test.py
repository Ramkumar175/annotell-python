from typing import List
import annotell.input_api.model as IAM
import examples.get_inputs as get_inputs_example
import annotell.input_api.input_api_client as IAC
from tests.utils import TestProjects


class TestInput:

    @staticmethod
    def filter_projects(projects: List[IAM.Project]):
        return [p for p in projects if p.project == TestProjects.CamerasProject]

    def test_get_inputs(self, client: IAC.InputApiClient):
        projects = client.project.get_projects()
        project = self.filter_projects(projects)[0].project
        project_inputs = get_inputs_example.run(client=client, project=project)
        assert isinstance(project_inputs, list)

        assert len(project_inputs) >= 1

        input = get_inputs_example.run(client=client, project=project, input_uuids=[project_inputs[0].uuid])

        assert len(input) == 1

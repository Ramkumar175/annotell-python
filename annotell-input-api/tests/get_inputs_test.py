from tests.utils import create_input_api_client, get_annotell_env
from typing import List
import annotell.input_api.model as IAM
import examples.get_inputs as get_inputs_example


class TestInput:

    @staticmethod
    def filter_projects(projects: List[IAM.Project]):
        return [p for p in projects if p.external_id == "b31d17c0-bf40-4506-bd2e-d2367215de5a"]

    def test_get_inputs(self):
        client = create_input_api_client(get_annotell_env(), 3)
        projects = client.project.get_projects()
        project = self.filter_projects(projects)[0].external_id
        inputs = get_inputs_example.run(client=client, project=project)
        assert isinstance(inputs, list)

        assert len(inputs) >= 1


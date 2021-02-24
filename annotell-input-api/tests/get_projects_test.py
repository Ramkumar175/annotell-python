import examples.get_projects as get_projects_example
from tests.utils import create_input_api_client


class TestProject:

    def test_get_projects(self):
        client = create_input_api_client("development", 3)
        projects = get_projects_example.run(client=client)
        assert isinstance(projects, list)

        assert len(projects) >= 1

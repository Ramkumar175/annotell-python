import examples.get_projects as get_projects_example
import annotell.input_api.input_api_client as IAC


class TestProject:

    def test_get_projects(self, client: IAC.InputApiClient):
        projects = get_projects_example.run(client=client)
        assert isinstance(projects, list)

        assert len(projects) >= 1

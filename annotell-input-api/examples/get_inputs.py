from typing import List
from annotell.input_api import model as IAM
import annotell.input_api.input_api_client as IAC


def run(client: IAC.InputApiClient, project: str) -> List[IAM.Input]:
    print("Listing inputs...")
    return client.input.get_inputs(project)


if __name__ == '__main__':
    client = IAC.InputApiClient()

    # Project - Available via `client.project.get_projects()`
    project = "Project-identifier"
    run(client, project)

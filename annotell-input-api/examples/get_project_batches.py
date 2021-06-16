from annotell.input_api import model as IAM
from typing import List
import annotell.input_api.input_api_client as IAC


def run(client: IAC.InputApiClient, project: str) -> List[IAM.ProjectBatch]:
    print("Listing project batches...")

    return client.project.get_project_batches(project)


if __name__ == '__main__':
    client = IAC.InputApiClient()

    project = "Project-Identifier"
    project_batches = run(client, project=project)

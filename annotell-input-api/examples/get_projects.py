from annotell.input_api import model as IAM
from typing import List
import annotell.input_api.input_api_client as IAC


def run(client: IAC.InputApiClient) -> List[IAM.Project]:
    print("Listing projects...")

    return client.project.get_projects()


if __name__ == '__main__':
    client = IAC.InputApiClient()
    projects = run(client)

    for project in projects:
        print(f"Project: {project.external_id}")
        batches = client.project.get_project_batches(project.external_id)

        print(", ".join([batch.external_id for batch in batches]))

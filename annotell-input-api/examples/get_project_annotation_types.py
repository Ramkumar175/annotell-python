from annotell.input_api.model.projects import project_batch
from annotell.input_api import model as IAM
from typing import List
import annotell.input_api.input_api_client as IAC


def run(client: IAC.InputApiClient, project: str) -> List[str]:
    print("Listing projects annotation types...")

    return client.project.get_annotation_types(project=project)


if __name__ == '__main__':
    client = IAC.InputApiClient()

    project = "Project-Identifier"
    annotation_types = run(client, project)

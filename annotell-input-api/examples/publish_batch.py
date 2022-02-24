from annotell.input_api.model.projects.project_batch import ProjectBatch
from annotell.input_api import model as IAM
from typing import List, Optional
import annotell.input_api.input_api_client as IAC


def run(client: IAC.InputApiClient, project: str, batch: str) -> ProjectBatch:
    print(f"Publish batch {batch} in project {project}")

    return client.project.publish_batch(project, batch)


if __name__ == '__main__':
    client = IAC.InputApiClient()

    project = "Project-Identifier"
    batch = "New-Batch-Identifier"
    annotation_types = run(client, project, batch)

from typing import List, Optional
from annotell.input_api import model as IAM
import annotell.input_api.input_api_client as IAC


def run(client: IAC.InputApiClient,
        project: str,
        input_uuids: Optional[List[str]] = None,
        include_invalidated: bool = False) -> List[IAM.Input]:

    print("Listing inputs...")
    return client.input.get_inputs(project=project, include_invalidated=include_invalidated, input_uuids=input_uuids)


if __name__ == '__main__':
    client = IAC.InputApiClient()

    # Project - Available via `client.project.get_projects()`
    project = "Project-identifier"
    run(client, project)

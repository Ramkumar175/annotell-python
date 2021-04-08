from __future__ import absolute_import

import annotell.input_api.input_api_client as IAC
import annotell.input_api.model.input as InputModel
from annotell.input_api.logger import setup_logging
from typing import Optional

def run(client: IAC.InputApiClient, project: str):

    inputs = client.input.get_inputs(project=project)
    input_ids = [input.uuid for input in inputs if input.status == "created"]
    annotations = client.annotation.get_annotations(input_uuids=input_ids)

    return annotations


if __name__ == '__main__':
    setup_logging(level="INFO")
    client = IAC.InputApiClient()

    # Project - Available via `client.project.get_projects()`
    project = "Project-identifier"
    run(client, project)

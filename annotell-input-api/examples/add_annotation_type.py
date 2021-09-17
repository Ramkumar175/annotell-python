from annotell.input_api.model.projects import project_batch
from annotell.input_api import model as IAM
from typing import List, Optional
import annotell.input_api.input_api_client as IAC


def run(client: IAC.InputApiClient, input_uuid: str, annotation_type: str):
    print("Adding annotation types to input...")

    client.input.add_annotation_type(input_uuid=input_uuid, annotation_type=annotation_type)


if __name__ == '__main__':
    client = IAC.InputApiClient()

    input_uuid = "<input-identifier>"
    annotation_type = "annotation-type"
    run(client, input_uuid, annotation_type)

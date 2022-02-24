from __future__ import absolute_import

from annotell.input_api.input_api_client import InputApiClient
from annotell.input_api.logger import setup_logging
from annotell.input_api.model.annotation.client_annotation import Annotation


def run(client: InputApiClient, input_uuid: str, annotation_type: str) -> Annotation:
    annotation = client.annotation.get_annotation(input_uuid=input_uuid, annotation_type=annotation_type)
    return annotation


if __name__ == '__main__':
    setup_logging(level="INFO")
    client = InputApiClient()

    input_uuid = "<input-uuid>"
    annotation_type = "<annotation-type>"
    annotation = run(client, input_uuid, annotation_type)

from __future__ import absolute_import

import annotell.input_api.input_api_client as IAC
from annotell.input_api.logger import setup_logging
from annotell.input_api.model.annotation.client_annotation import Annotation

def run(client: IAC.InputApiClient, input_uuid: str, annotation_type: str) -> Annotation:
    return client.annotation.get_annotation(input_uuid=input_uuid, annotation_type=annotation_type)


if __name__ == '__main__':
    setup_logging(level="INFO")
    client = IAC.InputApiClient()

    input_uuid = "<input-uuid>"
    annotation_type = "<annotation-type>"
    run(client, input_uuid, annotation_type)

from __future__ import absolute_import

from annotell.input_api.input_api_client import InputApiClient
from typing import Generator, Optional
from annotell.input_api.logger import setup_logging
from annotell.input_api.model.annotation.client_annotation import Annotation


def run(client: InputApiClient, project: str, annotation_type: str, batch: Optional[str] = None) -> Generator[Annotation, None, None]:
    annotations = client.annotation.get_project_annotations(project=project, batch=batch, annotation_type=annotation_type)
    return annotations


if __name__ == '__main__':
    setup_logging(level="INFO")
    client = InputApiClient()

    # Project - Available via `client.project.get_projects()`
    project = "<project-idenfitier>"
    annotation_type = "<annotation-type>"
    annotation_generator = run(client, project, annotation_type)
    for annotation in annotation_generator:
        print(annotation)

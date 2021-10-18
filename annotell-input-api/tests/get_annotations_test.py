from __future__ import absolute_import, annotations

from typing import List

import pytest

import annotell.input_api.model as IAM
import annotell.input_api.input_api_client as IAC
from tests.utils import TestProjects
import examples.get_annotation as get_annotation_example
import examples.get_project_annotations as get_project_annotations_example

class TestGetAnnotations:
    @staticmethod
    def filter_cameras_project(projects: List[IAM.Project]):
        return [p for p in projects if p.project == TestProjects.CamerasProject]

    def test_get_annotation(self, client: IAC.InputApiClient):
        annotation = get_annotation_example.run(client=client, input_uuid="ab9cb6b5-497c-47b7-8dac-591de4ff65f6", annotation_type="objects")
        assert isinstance(annotation, dict)
        assert annotation["test"] == 1

    def test_get_annotation_incorrect_at(self, client: IAC.InputApiClient):
        with pytest.raises(Exception) as exception_info:
            get_annotation_example.run(client=client, input_uuid="ab9cb6b5-497c-47b7-8dac-591de4ff65f6", annotation_type="object")

        assert exception_info.value.args[0] == "404 Client Error: Not Found for url: http://annotell.org:8010/v1/annotations/inputs/ab9cb6b5-497c-47b7-8dac-591de4ff65f6/annotation-type/object"

    def test_get_project_annotations(self, client: IAC.InputApiClient):
        projects = client.project.get_projects()
        project = self.filter_cameras_project(projects)[0].project
        annotations = get_project_annotations_example.run(client=client, project=project, annotation_type="objects")
        annotation_list = list(annotations)
        assert len(annotation_list) > 0
        assert annotation_list[0].content["test"] == 1

    def test_get_project_annotations_incorrect_at(self, client: IAC.InputApiClient):
        with pytest.raises(Exception) as exception_info:
            projects = client.project.get_projects()
            project = self.filter_cameras_project(projects)[0].project
            a = get_project_annotations_example.run(client=client, project=project, annotation_type="object")
            list(a)
        assert exception_info.value.args[0] == "Validation failed: Invalid annotation type sent: object. Allowed values in project: [objects]"
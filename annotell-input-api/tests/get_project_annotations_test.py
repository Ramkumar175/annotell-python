from __future__ import absolute_import, annotations

from typing import List

import pytest

import annotell.input_api.model as IAM
import annotell.input_api.input_api_client as IAC
from annotell.input_api.model.annotation.client_annotation import Annotation
from tests.utils import TestProjects
import examples.get_annotation as get_annotation_example
import examples.get_project_annotations as get_project_annotations_example


#TODO: Add client_annotations to testdata INT-663
class TestGetAnnotations:

    @staticmethod
    def filter_cameras_project(projects: List[IAM.Project]):
        return [p for p in projects if p.project == TestProjects.CamerasProject]

    def test_get_project_annotations(self, client: IAC.InputApiClient):
        projects = client.project.get_projects()
        project = self.filter_cameras_project(projects)[0].project
        annotations = get_project_annotations_example.run(client=client, project=project, annotation_type="signs")
        annotation_list = list(annotations)
        assert len(annotation_list) > 0

    def test_get_project_annotations_incorrect_at(self, client: IAC.InputApiClient):
        with pytest.raises(Exception) as exception_info:
            projects = client.project.get_projects()
            project = self.filter_cameras_project(projects)[0].project
            a = get_project_annotations_example.run(client=client, project=project, annotation_type="object")
            list(a)
        assert exception_info.value.args[
            0] == "Validation failed: Invalid annotation type sent: object. Allowed values in project: [object-detection, signs, QA]"

from __future__ import absolute_import

from typing import List

import pytest

import annotell.input_api.model as IAM
import annotell.input_api.input_api_client as IAC
from tests.utils import TestProjects
import examples.download_annotations as download_annotations_example


class TestDownloadAnnotations:

    @staticmethod
    def filter_cameras_project(projects: List[IAM.Project]):
        return [p for p in projects if p.project == TestProjects.CamerasProject]

    def test_get_annotations_via_get_inputs(self, client: IAC.InputApiClient):
        projects = client.project.get_projects()
        project = self.filter_cameras_project(projects)[0].project
        annotations = download_annotations_example.run(client=client, project=project)
        assert isinstance(annotations, dict)

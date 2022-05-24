from __future__ import absolute_import

import time
from typing import List

import annotell.input_api.input_api_client as IAC
import annotell.input_api.model as IAM
import examples.cameras as cameras_example
import examples.add_annotation_type as add_annotation_type
import examples.get_inputs_by_uuids as get_inputs_example

from tests.utils import TestProjects


class TestCameras:

    @staticmethod
    def filter_project(projects: List[IAM.Project]):
        return [p for p in projects if p.project == TestProjects.AnnotationTypeProject]

    def test_invalidate_inputs(self, client: IAC.InputApiClient):
        projects = client.project.get_projects()
        project = self.filter_project(projects)[0].project
        input_response = cameras_example.run(client=client, project=project, annotation_types=["first"], dryrun=False)
        input_uuid = input_response.input_uuid

        assert isinstance(input_uuid, str)

        inputs = None
        for _ in range(6):
            inputs = get_inputs_example.run(client=client, input_uuids=[input_uuid])

            if len(inputs) == 1 and inputs[0].status == 'created':
                print("Input created")
                break

            time.sleep(1)

        assert isinstance(inputs, list)
        assert len(inputs) == 1
        assert inputs[0].status == "created", f"Input has not been created, has status {inputs[0].status}"

        add_annotation_type.run(client=client, input_uuid=input_uuid, annotation_type="second")

        updated_input = get_inputs_example.run(client=client, input_uuids=[input_uuid])[0]

        assert "second" in updated_input.annotation_types

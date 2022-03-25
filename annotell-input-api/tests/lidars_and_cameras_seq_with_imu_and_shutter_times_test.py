from __future__ import absolute_import

from typing import List

import pytest

import annotell.input_api.model as IAM
import \
    examples.lidars_and_cameras_seq_with_imu_and_shutter_times as lidars_cameras_seq_with_imu_and_shutter_times_example
import annotell.input_api.input_api_client as IAC
from tests.utils import TestProjects


class TestLidarsAndCamerasSeqWithImuAndShutterTimes:

    @staticmethod
    def filter_lidar_and_cameras_seq_project(projects: List[IAM.Project]):
        return [p for p in projects if p.project == TestProjects.LidarsAndCamerasSequenceProject]

    def test_validate_lidars_cameras_seq_with_imu_and_shutter_times_example(self, client: IAC.InputApiClient):
        projects = client.project.get_projects()
        project = self.filter_lidar_and_cameras_seq_project(projects)[0].project
        resp = lidars_cameras_seq_with_imu_and_shutter_times_example.run(client=client, project=project)
        assert resp is None

    def test_create_lidars_cameras_seq_with_imu_and_shutter_times_example(self, client: IAC.InputApiClient):
        projects = client.project.get_projects()
        project = self.filter_lidar_and_cameras_seq_project(projects)[0].project
        resp = lidars_cameras_seq_with_imu_and_shutter_times_example.run(client=client, project=project, dryrun=False)
        assert isinstance(resp.input_uuid, str)

        with pytest.raises(AttributeError):
            resp.files

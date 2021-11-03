from __future__ import absolute_import

from typing import List

from click.testing import CliRunner

import annotell.input_api.model as IAM
import annotell.input_api.input_api_client as IAC
import annotell.input_api.annoutil as annoutil
import examples.calibration.create_calibrations as calibration_example
from tests.utils import TestProjects


class TestAnnoUtils:

    @staticmethod
    def filter_lidar_and_cameras_project(projects: List[IAM.Project]):
        return [p for p in projects if p.project == TestProjects.LidarsAndCamerasProject]

    def test_annoutil_projects(self, client: IAC.InputApiClient):
        runner = CliRunner()
        result = runner.invoke(annoutil.projects, obj={'client': client})
        assert result.exit_code == 0, result.output

    def test_annoutil_projects_specific(self, client: IAC.InputApiClient):
        runner = CliRunner()
        result = runner.invoke(annoutil.projects, ['lidars_and_cameras-project'], obj={'client': client})
        assert result.exit_code == 0, result.output

    def test_annoutil_projects_get_batches(self, client: IAC.InputApiClient):
        runner = CliRunner()
        result = runner.invoke(annoutil.projects, ['lidars_and_cameras-project', '--get-batches'], obj={'client': client})
        assert result.exit_code == 0, result.output

    def test_annoutil_inputs(self, client: IAC.InputApiClient):
        runner = CliRunner()
        result = runner.invoke(
            annoutil.inputs, ['--project', 'lidars_and_cameras-project', '--external-ids', 'input1', '--include-invalidated'],
            obj={'client': client}
        )
        assert result.exit_code == 0, result.output

    def test_annoutil_inputs_view(self, client: IAC.InputApiClient):
        runner = CliRunner()
        result = runner.invoke(
            annoutil.inputs, ['--project', 'lidars_and_cameras-project', '--external-ids', 'input1', '--include-invalidated', '--view'],
            obj={'client': client}
        )
        assert result.exit_code == 0, result.output

    def test_annoutil_view(self, client: IAC.InputApiClient):
        runner = CliRunner()
        result = runner.invoke(annoutil.view, ['50bcca91-ac11-423d-b698-f359aefa4da5'], obj={'client': client})
        assert result.exit_code == 0, result.output

    def test_annoutil_calibration(self, client: IAC.InputApiClient):
        runner = CliRunner()
        result = runner.invoke(annoutil.calibration, obj={'client': client})
        assert result.exit_code == 0, result.output

    # def test_annoutil_calibration_id(self, client: IAC.InputApiClient):
    #     runner = CliRunner()
    #     result = runner.invoke(
    #         annoutil.calibration,
    #         ['--id', '001fd72a-b174-4540-918e-3a51cf277cbc'],
    #         obj={'client': client}
    #     )
    #     assert result.exit_code == 0, result.output
    #
    # def test_annoutil_calibration_id_raw(self, client: IAC.InputApiClient):
    #     runner = CliRunner()
    #     result = runner.invoke(
    #         annoutil.calibration,
    #         ['--id', '001fd72a-b174-4540-918e-3a51cf277cbc', '--raw'],
    #         obj={'client': client}
    #     )
    #     assert result.exit_code == 0, result.output

    def test_annoutil_calibration_external_id(self, client: IAC.InputApiClient):
        external_id = "the_external_id"
        try:  # Try creating calibration if it doesn't exist
            calibration_example.run(client, external_id)
        except Exception:  # pylint: disable=broad-except
            pass  # Calibration already exists
        runner = CliRunner()
        result = runner.invoke(annoutil.calibration, ['--external-id', external_id], obj={'client': client})
        assert result.exit_code == 0, result.output

from __future__ import absolute_import

import examples.create_calibrations as create_calibrations_example
import annotell.input_api.input_api_client as IAC
import annotell.input_api.model as IAM


class TestCalibration:

    def test_get_calibration(self, client: IAC.InputApiClient):
        calibration_identifier = "<calibration-identifier>"
        calibrations = create_calibrations_example.run(client, calibration_identifier)
        assert calibrations.external_id == calibration_identifier
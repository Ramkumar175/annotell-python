from __future__ import absolute_import

import examples.get_calibrations as get_calibrations_example
import annotell.input_api.input_api_client as IAC


class TestCalibration:

    def test_get_calibration(self, client: IAC.InputApiClient):
        calibrations = get_calibrations_example.run(client)
        assert isinstance(calibrations, list)

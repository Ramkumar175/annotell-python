from __future__ import absolute_import

from tests.utils import create_input_api_client
import examples.get_calibrations as get_calibrations_example


class TestCalibration:

    def test_get_calibration(self):
        client = create_input_api_client("development", 3)
        calibrations = get_calibrations_example.run(client)
        assert isinstance(calibrations, list)

        assert len(calibrations) >= 1

from __future__ import absolute_import

from annotell.input_api.model.calibration.calib import SensorCalibrationEntry
import examples.calibration.get_calibrations as get_calibrations_example
import examples.calibration.create_calibrations as create_calibrations_example
import annotell.input_api.input_api_client as IAC


class TestCalibration:
    calibration_identifier = "<calibration-123abc"

    def test_create_calibration(self, client: IAC.InputApiClient):
        calibrations = create_calibrations_example.run(client, self.calibration_identifier)
        assert calibrations.external_id == self.calibration_identifier

    def test_get_calibrations(self, client: IAC.InputApiClient):
        calibrations = get_calibrations_example.run(client)
        assert isinstance(calibrations, list)
        assert(all([isinstance(calib, SensorCalibrationEntry) for calib in calibrations])), \
            "Calibrations are not of type SensorCalibrationEntry"

    def test_get_calibration(self, client: IAC.InputApiClient):
        calibration = client.calibration.get_calibrations(external_id=self.calibration_identifier)
        assert len(calibration) == 1
        assert(all([isinstance(calib, SensorCalibrationEntry) for calib in calibration])), \
            "Calibrations are not of type SensorCalibrationEntry"

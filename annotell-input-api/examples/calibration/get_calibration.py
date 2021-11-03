from typing import List

import annotell.input_api.input_api_client as IAC
import annotell.input_api.model as IAM


def run(client: IAC.InputApiClient) -> List[IAM.SensorCalibrationEntry]:
    print("Get One Calibration...")

    calibrations = client.calibration.get_calibrations()
    calibration = client.calibration.get_calibrations(external_id=calibrations[0].external_id)

    return calibration


if __name__ == '__main__':
    client = IAC.InputApiClient()
    run(client)

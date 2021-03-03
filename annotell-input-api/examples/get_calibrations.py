from typing import List

import annotell.input_api.input_api_client as IAC
import annotell.input_api.model as IAM


def run(client: IAC.InputApiClient) -> List[IAM.SensorCalibrationEntry]:
    print("Listing Calibration...")

    calibrations = client.calibration.get_calibrations()
    print(calibrations)

    return calibrations


if __name__ == '__main__':
    client = IAC.InputApiClient()
    run(client)



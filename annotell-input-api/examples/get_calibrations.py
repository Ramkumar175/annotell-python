from typing import List, Union

import annotell.input_api.input_api_client as IAC
import annotell.input_api.model as IAM


def run(client: IAC.InputApiClient) -> Union[List[IAM.CalibrationNoContent], List[IAM.CalibrationWithContent]]:
    print("Listing Calibration...")

    calibrations = client.calibration.get_calibration()
    print(calibrations)

    return calibrations


if __name__ == '__main__':
    client = IAC.InputApiClient()
    run(client)



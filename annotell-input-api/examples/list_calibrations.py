import nnotell.input_api.input_api_client as IAC

def run(client: IAC.InputApiClient):
    print("Listing Calibration...")
    return client.calibration.get_calibrations()

if __name__ == "__main__":

    client = InputApiClient()
    calibraitons = run(client)
    print(calibrations)

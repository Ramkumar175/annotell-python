from typing import List, Optional
from annotell.input_api import model as IAM
import annotell.input_api.input_api_client as IAC


def run(client: IAC.InputApiClient, input_uuids: List[str]) -> List[IAM.Input]:

    print("Listing inputs...")
    return client.input.get_inputs_by_uuids(input_uuids=input_uuids)


if __name__ == '__main__':
    client = IAC.InputApiClient()

    input_uuids = ["input-identifier"]
    run(client, input_uuids)

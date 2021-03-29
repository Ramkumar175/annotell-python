from typing import List
import annotell.input_api.model as IAM
import annotell.input_api.input_api_client as IAC


def run(client: IAC.InputApiClient, input_uuid: str, invalidated_reason: IAM.InvalidatedReasonInput) -> List[IAM.Input]:
    print("Invalidating inputs...")
    return client.input.invalidate_inputs(input_uuids=[input_uuid], invalidated_reason=invalidated_reason)


if __name__ == '__main__':
    client = IAC.InputApiClient()

    # Input-identifier - Available via `client.input.get_inputs()`
    input_uuid = "Input-identifier"
    invalidated_reason = IAM.InvalidatedReasonInput.INCORRECTLY_CREATED
    run(client, input_uuid, invalidated_reason)

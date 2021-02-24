from typing import Optional
import annotell.input_api.input_api_client as IAC

ANNOTELL_ENV = "development"


def get_annotell_env():
    return ANNOTELL_ENV


def create_input_api_client(env: Optional[str] = None, client_organization_id: int = None) -> IAC.InputApiClient:
    """
    Factory to use the Input Api Client
    """

    if env == "development" or env is None:
        auth_host = "http://annotell.org:8001"
        host = "http://annotell.org:8010"
    elif env == "staging":
        auth_host = "http://user.staging.annotell.com"
        host = "http://input.staging.annotell.com"
    else:
        raise 
    return IAC.InputApiClient(auth=None, auth_host=auth_host, host=host, client_organization_id=client_organization_id)

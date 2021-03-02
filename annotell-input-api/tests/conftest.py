import pytest
from typing import Optional, Any
import annotell.input_api.input_api_client as IAC


ORGANIZATION_ID = 1


def pytest_addoption(parser):
    parser.addoption("--env", action="store", default="development", help="env can be staging or development")


@pytest.fixture(scope="session")
def env(request):
    env = request.config.getoption("--env")
    print(env)
    return env


@pytest.fixture(scope="session")
def organization_id():
    return ORGANIZATION_ID


@pytest.fixture(autouse=True, scope="session")
def client(env: str, organization_id: int) -> IAC.InputApiClient:
    """
    Factory to use the Input Api Client
    """

    if env == "development" or env is None:
        auth_host = "http://annotell.org:8001"
        host = "http://annotell.org:8010"
    elif env == "staging":
        auth_host = "https://user.staging.annotell.com"
        host = "https://input.staging.annotell.com"
    else:
        raise RuntimeError(f"ENV: {env} is not supported")
    return IAC.InputApiClient(auth=None, auth_host=auth_host, host=host, client_organization_id=organization_id)

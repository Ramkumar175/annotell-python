from __future__ import absolute_import

from typing import List

import pytest

import annotell.input_api.model as IAM
import annotell.input_api.input_api_client as IAC
from tests.utils import TestProjects


class TestGetAnnotations:

    def test_get_annotations(self, client: IAC.InputApiClient):
        resp = client.annotation.get_annotations(input_uuids=['ee5ace7a-6d6e-4774-89b0-b69d19c91f87'])
        assert isinstance(resp, dict)

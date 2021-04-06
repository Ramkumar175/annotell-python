from __future__ import absolute_import

from typing import List

import pytest

import annotell.input_api.model as IAM
import annotell.input_api.input_api_client as IAC
from tests.utils import TestProjects

#
# class TestGetAnnotations:
#
#     def test_get_annotations(self, client: IAC.InputApiClient):
#         resp = client.annotation.get_annotations(input_uuids=['f9eba8b5-ac71-4ac3-a3c4-d99d865cc929'])
#         assert isinstance(resp, dict)

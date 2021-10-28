from __future__ import absolute_import, annotations

from typing import List

import annotell.input_api.input_api_client as IAC
import annotell.input_api.model as IAM
import examples.get_annotation as get_annotation_example
import pytest
from annotell.input_api.model.annotation.client_annotation import Annotation

#TODO: Add client_annotations to testdata INT-663
class TestGetAnnotations:
    def test_get_annotation(self, client: IAC.InputApiClient):
        annotation = get_annotation_example.run(client=client, input_uuid="9c11cf44-e5a1-4367-a7a5-6ce0bf900763", annotation_type="signs")
        assert isinstance(annotation, Annotation)
        assert annotation.content["test"] == 1

    def test_get_annotation_incorrect_at(self, client: IAC.InputApiClient):
        with pytest.raises(Exception) as exception_info:
            get_annotation_example.run(client=client, input_uuid="71d97ad7-d5c2-4751-a98a-22e17277a9b1", annotation_type="object")

        assert "404 Client Error: Not Found for url:" in exception_info.value.args[0]

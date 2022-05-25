from __future__ import absolute_import

from typing import List

import pytest

import annotell.input_api.input_api_client as IAC
import examples.lidars_and_cameras_seq as lidars_cameras_seq_example


class TestLidarsAndCamerasSeq:

    def test_create_only_scene_lidars_and_cameras_seq(self, client: IAC.InputApiClient):
        resp = lidars_cameras_seq_example.run(client=client, project=None, dryrun=False)
        if resp is not None:
            assert isinstance(resp.input_uuid, str)
        else:
            assert False

        with pytest.raises(AttributeError):
            resp.files

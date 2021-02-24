import logging
from typing import Optional

import annotell.input_api.model.input as InputModel
import annotell.input_api.model.input.cameras_sequence as CamerasSeqModel
from annotell.input_api.resources.abstract import CreateableInputAPIResource

log = logging.getLogger(__name__)


class CamerasSequence(CreateableInputAPIResource):

    path = "cameras-sequence"

    def create(self,
               cameras_sequence: CamerasSeqModel.CamerasSequence,
               project: Optional[str] = None,
               batch: Optional[str] = None,
               input_list_id: Optional[int] = None,
               dryrun: bool = False) -> Optional[InputModel.InputJobCreated]:

        self._set_sensor_settings(cameras_sequence)

        payload = cameras_sequence.to_dict()

        response = self.post_input_request(self.path, payload,
                                           project=project,
                                           batch=batch,
                                           input_list_id=input_list_id,
                                           dryrun=dryrun)
        
        if dryrun:
            return None
        
        log.info(f"Created inputs for files with internal_id={response.internal_id}")
        return response


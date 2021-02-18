"""Client for communicating with the Annotell platform."""
import logging
from typing import List, Optional, Union

import annotell.input_api.model.calibration as CalibrationModel
from annotell.input_api.resources.abstract import InputAPIResource

log = logging.getLogger(__name__)


class CalibrationResource(InputAPIResource):

    def get_calibration(
        self,
        id: Optional[int] = None,
        external_id: Optional[str] = None
    ) -> Union[List[CalibrationModel.CalibrationNoContent], List[CalibrationModel.CalibrationWithContent]]:
        """
        Queries the Input API for either:
        * A list containing a specific calibration (if only the id is given)
        * A list of calibrations connected to an external_id (if only the external_id is given)
        * A list of calibrations connected to the users organization.
        Note that both id and external_id cannot be given at the same time.

        :param id: The id of the calibration to get
        :param external_id: The external id of the calibration(s) to get
        :return List: A list of CalibrationNoContent if an id or external id was given, or a list of
        CalibrationWithContent otherwise.
        """
        json_resp = self.client.get('v1/calibrations', params={
            "id": id,
            "externalId": external_id
        })

        if id is None and external_id is None:
            return [CalibrationModel.CalibrationNoContent.from_json(js) for js in json_resp]
        else:
            return [CalibrationModel.CalibrationWithContent.from_json(js) for js in json_resp]

    def create_calibration(
        self,
        calibration_spec: CalibrationModel.CalibrationSpec
    ) -> CalibrationModel.CalibrationNoContent:
        """
        Creates a new calibration, given the CalibrationSpec
        :param calibration_spec: A CalibrationSpec instance containing everything to create a calibration.
        :return CalibrationNoContent: Class containing the calibration id, external id and time of creation.
        """
        json_resp = self.client.post("v1/calibrations", json=calibration_spec.to_dict())
        return CalibrationModel.CalibrationNoContent.from_json(json_resp)

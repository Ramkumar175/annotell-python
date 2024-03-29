from typing import Optional

from annotell.openlabel.models.models import OpenLabelAnnotation

from annotell.input_api.model.base_serializer import BaseSerializer
from annotell.input_api.resources.abstract import InputAPIResource


class CreatePreannotationRequest(BaseSerializer):
    scene_uuid: str
    pre_annotation: OpenLabelAnnotation


class PreAnnotationResource(InputAPIResource):
    """
    Class exposing Annotell PreAnnotations
    """

    def create(self, scene_uuid: str, pre_annotation: OpenLabelAnnotation, dryrun: bool) -> Optional[dict]:
        """
        Upload pre-annotation to a previously created scene.
        This is not possible to do if the scene already have inputs created for it

        :param scene_uuid: the uuid for the scene. Will be the input uuid when input is created
        :param pre_annotation: PreAnnotation on the OpenLabel format
        :param dryrun: If True the files/metadata will be validated but no pre-annotation will be created
        """
        pre_anno_request = CreatePreannotationRequest(scene_uuid=scene_uuid, pre_annotation=pre_annotation)
        return self._client.post("v1/pre-annotations", json=pre_anno_request.to_dict(), dryrun=dryrun, discard_response=True)

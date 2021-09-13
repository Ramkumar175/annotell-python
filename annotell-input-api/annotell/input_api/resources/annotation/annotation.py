from typing import List, Dict, Optional, Generator

import annotell.input_api.model.annotation as AnnotationModel
from annotell.input_api.util import filter_none
from annotell.input_api.resources.abstract import InputAPIResource


class AnnotationResource(InputAPIResource):
    def get_annotations(
            self,
            input_uuids: List[str]
    ) -> Dict[str, List[AnnotationModel.ExportAnnotation]]:
        """
        Returns the export ready annotations, either

        :param input_uuids: List with input uuid
        :return Dict: A dictionary containing the ready annotations
        """
        external_id_query_param = ",".join(input_uuids) if input_uuids else None
        json_resp = self._client.get("v1/annotations", params=filter_none({
            "inputs": external_id_query_param
        }))

        annotations = dict()
        for k, v in json_resp.items():
            annotations[k] = [
                AnnotationModel.ExportAnnotation.from_json(annotation) for annotation in v
            ]
        return annotations

    def get_project_annotations(self,
                                project: str,
                                annotation_type: str,
                                batch: Optional[str] = None) -> Generator[AnnotationModel.Annotation, None, None]:
        url = f"v1/annotations/projects/{project}/"
        if batch:
            url += f"batch/{batch}/"
        if annotation_type:
            url += f"annotation-type/{annotation_type}"

        annotations = self._client.get(url)
        for js in annotations:
            annotation = AnnotationModel.Annotation.from_json(js)
            yield self.get_annotation(annotation.input_uuid, annotation_type)

    def get_annotation(self,
                       input_uuid: str,
                       annotation_type: str) -> dict:
        annotation = self._client.get(f"v1/annotations/inputs/{input_uuid}/annotation-type/{annotation_type}")
        return annotation

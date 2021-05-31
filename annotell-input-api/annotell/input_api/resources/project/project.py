from typing import List, Optional

import annotell.input_api.model.projects as ProjectModel
import annotell.input_api.model.annotation as AnnotationModel
from annotell.input_api.resources.abstract import InputAPIResource


class ProjectResource(InputAPIResource):
    """
    Project related information
    """

    def get_projects(self) -> List[ProjectModel.Project]:
        """
        Returns all projects connected to the users organization.

        :return List: List containing all projects connected to the user
        """
        json_resp = self._client.get("v1/projects")
        return [ProjectModel.Project.from_json(js) for js in json_resp]

    def get_project_batches(self, project: str) -> List[ProjectModel.ProjectBatch]:
        """
        Returns all `batches` for the `project`.

        :return List: List containing all batches
        """
        json_resp = self._client.get(f"v1/projects/{project}/batches")
        return [ProjectModel.ProjectBatch.from_json(js) for js in json_resp]

    def publish_batch(self, project: str, batch: str) -> ProjectModel.ProjectBatch:
        """
        Publish input batch, marking the input batch ready for annotation.
        After publishing, no more inputs can be added to the input batch

        :return ProjectBatch: Updated input batch
        """
        json_resp = self._client.post(f"v1/projects/{project}/batches/{batch}/publish")
        return ProjectModel.ProjectBatch.from_json(json_resp)

    def get_annotation_types(self, project: str, batch: Optional[str] = None) -> List[str]:
        """
        Returns all available annotation types for the project.
        If batch included all available annotation types for the batch will be returned.
        """
        if batch:
            json_resp = self._client.get(f"v1/projects/{project}/batches/{batch}/annotation-types")
        else:
            json_resp = self._client.get(f"v1/projects/{project}/annotation-types")
        return [anno for anno in json_resp]

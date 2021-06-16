from enum import Enum


class TestProjects(str, Enum):
    CamerasProject = "cameras-project"
    CamerasProjectWithAT = "cameras-project-with-at"
    CamerasSequenceProject = "cameras_sequence-project"
    CamerasSequenceProjectWithAT = "cameras-sequence-project-with-at"
    LidarsAndCamerasProject = "lidars_and_cameras-project"
    LidarsAndCamerasProjectWithAT = "lidars_and_cameras-project-with-at"
    LidarsAndCamerasSequenceProject = "lidars_and_cameras_sequence-project"
    LidarsAndCamerasSequenceProjectWithAT = "lidars_and_cameras_sequence-project-with-at"

TestProjects.__test__ = False

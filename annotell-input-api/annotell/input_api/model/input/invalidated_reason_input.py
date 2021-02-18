from enum import Enum


class InvalidatedReasonInput(str, Enum):
    BAD_CONTENT = "bad-content"
    SLAM_RECORRECTION = "slam-rerun"
    DUPLICATE = "duplicate"
    INCORRECTLY_CREATED = "incorrectly-created"

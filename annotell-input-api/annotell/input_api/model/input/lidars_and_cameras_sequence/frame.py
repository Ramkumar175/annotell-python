from dataclasses import field
from typing import List

from annotell.input_api.model.input.resources import *
from annotell.input_api.model.input.abstract.camera_frame import CameraFrame
from annotell.input_api.model.input.abstract.sequence_frame import SequenceFrame


@dataclass
class Frame(CameraFrame, SequenceFrame):
    frame_id: str
    relative_timestamp: int
    point_clouds: List[PointCloud] = field(default_factory=list)
    images: List[Image] = field(default_factory=list)
    video_frames: List[VideoFrame] = field(default_factory=list)

    def to_dict(self) -> dict:
        return dict(
            frameId=self.frame_id,
            relativeTimestamp=self.relative_timestamp,
            pointClouds=[pc.to_dict() for pc in self.point_clouds] if self.point_clouds else None,
            images=[image.to_dict() for image in self.images] if self.images else None,
            videoFrames=[vf.to_dict() for vf in self.video_frames] if self.video_frames else None
        )

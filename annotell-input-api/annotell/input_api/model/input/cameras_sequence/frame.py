from dataclasses import dataclass, field
from typing import List, Mapping, Any

from annotell.input_api.model.input.resources import Image, VideoFrame
from annotell.input_api.model.input.abstract.camera_frame import CameraFrame
from annotell.input_api.model.input.abstract.sequence_frame import SequenceFrame


@dataclass
class Frame(CameraFrame, SequenceFrame):
    frame_id: str
    relative_timestamp: int
    images: List[Image] = field(default_factory=list)
    video_frames: List[VideoFrame] = field(default_factory=list)
    metadata: Mapping[str, Any] = field(default_factory=dict)

    def to_dict(self) -> dict:
        return dict(
            frameId=self.frame_id,
            relativeTimestamp=self.relative_timestamp,
            images=[image.to_dict() for image in self.images] if self.images else None,
            videoFrames=[vf.to_dict() for vf in self.video_frames] if self.video_frames else None,
            metadata=self.metadata
        )

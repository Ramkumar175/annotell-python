from dataclasses import field
from typing import List

from annotell.input_api.model.input.resource import *


@dataclass
class Frame:
    frame_id: str
    relative_timestamp: int
    images: List[Image] = field(default_factory=list)
    video_frames: List[VideoFrame] = field(default_factory=list)

    def to_dict(self) -> dict:
        return dict(
            frameId=self.frame_id,
            relativeTimestamp=self.relative_timestamp,
            images=[image.to_dict() for image in self.images] if self.images else None,
            videoFrames=[vf.to_dict() for vf in self.video_frames] if self.video_frames else None
        )

from typing import List
from dataclasses import dataclass, field
from annotell.input_api.model.input.resource.image import Image
from annotell.input_api.model.input.resource.video import VideoFrame
from annotell.input_api.model.input.resource.point_cloud import PointCloud


@dataclass
class Frame:
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

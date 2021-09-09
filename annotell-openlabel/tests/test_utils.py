import unittest

from annotell.openlabel.models.data_types import Boolean, Num, Text, Vec
import annotell.openlabel.models.datamodel as od
from annotell.openlabel.models.utils.frame_interval import get_frame_intervals
from annotell.openlabel.models.utils.data_type_parsing import get_openlabel_type


class TestUtils(unittest.TestCase):
    all_timestamps = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    def test_cont_frame_intervals(self):
        expected_frame_intervals = [od.FrameInterval(frame_start=2, frame_end=5)]
        timestamp_interval = [2, 3, 4, 5]
        frame_intervals = get_frame_intervals(all_timestamps=self.all_timestamps, object_timestamps=timestamp_interval)
        assert frame_intervals == expected_frame_intervals

    def test_split_frame_intervals(self):
        expected_frame_intervals = [od.FrameInterval(frame_start=2, frame_end=5), od.FrameInterval(frame_start=7, frame_end=9)]
        timestamp_interval_1 = [2, 3, 4, 5]
        timestamp_interval_2 = [7, 8, 9]
        timestamp_interval = timestamp_interval_1 + timestamp_interval_2
        frame_intervals = get_frame_intervals(all_timestamps=self.all_timestamps, object_timestamps=timestamp_interval)
        assert frame_intervals == expected_frame_intervals

    def test_multi_missing_timestamps(self):
        expected_frame_intervals = [od.FrameInterval(frame_start=2, frame_end=5), od.FrameInterval(frame_start=8, frame_end=9)]
        timestamp_interval_1 = [2, 3, 4, 5]
        timestamp_interval_2 = [8, 9]
        timestamp_interval = timestamp_interval_1 + timestamp_interval_2
        frame_intervals = get_frame_intervals(all_timestamps=self.all_timestamps, object_timestamps=timestamp_interval)
        assert frame_intervals == expected_frame_intervals

    def test_get_openlabel_type(self):
        name = "the name"
        assert get_openlabel_type(name=name, val=1) == ("num", Num(name="the name", val=1))
        assert get_openlabel_type(name=name, val=1.0) == ("num", Num(name="the name", val=1.0))
        assert get_openlabel_type(name=name, val="test text") == ("text", Text(name="the name", val="test text"))
        assert get_openlabel_type(name=name, val=[1, 2, 3, 4]) == ("vec", Vec(name="the name", val=[1, 2, 3, 4]))
        assert get_openlabel_type(name=name, val=[1.0, 2.0, 3.0, 4.0]) == \
               ("vec", Vec(name="the name", val=[1.0, 2.0, 3.0, 4.0]))
        assert get_openlabel_type(name=name, val=True) == ("boolean", Boolean(name=name, val=True))

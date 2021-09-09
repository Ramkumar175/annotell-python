import unittest
from dataclasses import asdict

from annotell.openlabel.models.utils.deserialize import deserialize
from annotell.openlabel.models.datamodel import OpenLabelData
from static.expected_openlabel import expected_openlabel
from static.objects_for_testing import all_attributes, all_basic_types, all_element_objects, all_frames, all_object_datas, all_shapes, \
    openlabel_data


class TestDeserializer(unittest.TestCase):

    def test_deserialize_basic_types(self):
        for obj in all_basic_types:
            data = asdict(obj)
            instance = deserialize(data, type(obj))
            assert instance == obj, f"Failed to deserialize basic type {type(obj)}\n{data}"

    def test_deserialize_attributes(self):
        for obj in all_attributes:
            data = asdict(obj)
            instance = deserialize(data, type(obj))
            assert instance == obj, f"Failed to deserialize attribute {type(obj)}\n{data}"

    def test_deserialize_shapes(self):
        for obj in all_shapes:
            data = asdict(obj)
            instance = deserialize(data, type(obj))
            assert instance == obj, f"Failed to deserialize shape {type(obj)}\n{data}"

    def test_deserialize_object_data(self):
        for obj in all_object_datas:
            data = asdict(obj)
            instance = deserialize(data, type(obj))
            assert instance == obj, f"Failed to deserialize object data {type(obj)}\n{data}"

    def test_deserialize_elements(self):
        for obj in all_element_objects:
            data = asdict(obj)
            instance = deserialize(data, type(obj))
            assert instance == obj, f"Failed to deserialize object data {type(obj)}\n{data}"

    def test_deserialize_frames(self):
        for obj in all_frames:
            data = asdict(obj)
            instance = deserialize(data, type(obj))
            assert instance == obj, f"Failed to deserialize object data {type(obj)}\n{data}"

    def test_deserialize_openlabel_data(self):
        obj = openlabel_data
        data = asdict(obj)
        instance = deserialize(data, type(obj))
        assert instance == obj, f"Failed to deserialize object data {type(obj)}\n{data}"

    def test_deserialize_judgement(self):
        data = OpenLabelData.from_dict(data=expected_openlabel)
        x = data.to_dict()
        assert x == expected_openlabel

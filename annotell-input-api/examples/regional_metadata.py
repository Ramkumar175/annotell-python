from __future__ import absolute_import

from pathlib import Path

import annotell.input_api.model.input as InputModel
import annotell.input_api.model.input.cameras as CamerasModel
from annotell.input_api.logger import setup_logging
from annotell.input_api.model.input.metadata.metadata import MetaData

base_dir = Path(__file__).parent.absolute()


def run() -> CamerasModel.Cameras:

    print("Creating Cameras Input with MetaDataContainer")

    sensor1 = "RFC01"
    sensor2 = "RFC02"

    # A MetaData container can be created by parsing a dictionary
    metadata = MetaData.parse_obj({"region": "EU", "location-lat": 27.986065, "location-long": 86.922623, "vehicle_id": "abg"})

    # It can also be created by initializing with keywords.
    metadata = MetaData(region="EU", location_lat=27.986065, location_long=86.922623, vehicle_id="abg")

    cameras = CamerasModel.Cameras(
        external_id="input1",
        frame=CamerasModel.Frame(
            images=[
                InputModel.Image(str(base_dir) + "/resources/img_RFC01.jpg", sensor_name=sensor1),
                InputModel.Image(str(base_dir) + "/resources/img_RFC02.jpg", sensor_name=sensor2),
            ]
        ),
        metadata=metadata
    )

    return cameras


if __name__ == '__main__':
    setup_logging(level="INFO")
    print(run())

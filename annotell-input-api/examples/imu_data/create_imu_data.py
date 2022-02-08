from typing import List
import random

from datetime import datetime
from annotell.input_api.model import IMUData
from annotell.input_api.model.calibration.common import Position, RotationQuaternion


def create_dummy_imu_data(start_timestamp: float = 123, end_timestamp: float = 130) -> List[IMUData]:

    def randfloat():
        return random.uniform(0, 1)

    start_date = datetime.fromtimestamp(start_timestamp)
    end_date = datetime.fromtimestamp(end_timestamp)

    delta = (end_date - start_date).seconds + 1
    imu_datas = []
    for idx in range(delta):
        pos = Position(x=randfloat(), y=randfloat(), z=randfloat())
        rotation = RotationQuaternion(x=randfloat(), y=randfloat(), z=randfloat(), w=randfloat())
        imu_datas.append(IMUData(position=pos, rotation_quaternion=rotation, timestamp=idx))

    return imu_datas

from annotell.input_api.model.calibration.common import BaseSerializer, Position, RotationQuaternion
from annotell.input_api.model.ego.utils import UnixTimestampNs


class IMUData(BaseSerializer):
    """ Data from the Inertial Measurement Unit, both `position` and `rotation` are with respect to the local
        coordinate system (LCS).
    """
    position: Position
    rotation_quaternion: RotationQuaternion
    timestamp: UnixTimestampNs

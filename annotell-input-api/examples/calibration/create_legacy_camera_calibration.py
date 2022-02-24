import annotell.input_api.model.calibration as CalibrationModel


# Create a camera calibration
def unity_camera_calibration():
    camera_camera_type = CalibrationModel.CameraType.PINHOLE
    camera_position = CalibrationModel.Position(x=0.0, y=0.0, z=0.0)  # similar to Lidar
    camera_rotation = CalibrationModel.RotationQuaternion(w=1.0, x=0.0, y=0.0, z=0.0)  # similar to Lidar
    camera_camera_matrix = CalibrationModel.CameraMatrix(fx=3450, fy=3250, cx=622, cy=400)
    camera_distortion_coefficients = CalibrationModel.DistortionCoefficients(k1=0.0, k2=0.0, p1=0.0, p2=0.0, k3=0.0)
    camera_properties = CalibrationModel.CameraProperty(camera_type=camera_camera_type)
    return CalibrationModel.CameraCalibration(
        position=camera_position,
        rotation_quaternion=camera_rotation,
        camera_matrix=camera_camera_matrix,
        distortion_coefficients=camera_distortion_coefficients,
        camera_properties=camera_properties,
        image_height=1080,
        image_width=1920
    )

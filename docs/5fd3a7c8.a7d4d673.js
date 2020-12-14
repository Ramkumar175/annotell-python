(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{72:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),i=a(7),r=(a(0),a(83)),o={title:"Calibration"},c={unversionedId:"input-api/calibration",id:"input-api/calibration",isDocsHomePage:!1,title:"Calibration",description:"Inputs including both a 2D and 3D representation such as point cloud with images require a calibration relating the camera sensors with the lidar sensors in terms of location and rotation. The calibration should also contain the required information for projecting 3D points into the image plane of the camera.",source:"@site/docs/input-api/calibration.md",slug:"/input-api/calibration",permalink:"/docs/input-api/calibration",editUrl:"https://github.com/annotell/annotell-python/edit/gh-pages/docs-src/docs/input-api/calibration.md",version:"current",sidebar:"docs",previous:{title:"Point Cloud",permalink:"/docs/input-api/inputs/point_cloud"},next:{title:"Errors",permalink:"/docs/input-api/error_handling"}},l=[{value:"Example: Creating a calibration",id:"example-creating-a-calibration",children:[{value:"Creating a lidar calibration",id:"creating-a-lidar-calibration",children:[]},{value:"Creating camera calibrations",id:"creating-camera-calibrations",children:[]},{value:"Creating the full calibration",id:"creating-the-full-calibration",children:[]},{value:"Listing existing calibrations",id:"listing-existing-calibrations",children:[]}]}],b={rightToc:l};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Inputs including both a 2D and 3D representation such as ",Object(r.b)("strong",{parentName:"p"},"point cloud with images")," require a calibration relating the camera sensors with the lidar sensors in terms of location and rotation. The calibration should also contain the required information for projecting 3D points into the image plane of the camera."),Object(r.b)("p",null,"A Calibration object consists of a set of key-value pairs where the key is the name of the source (i.e. sensor name) and the value is either a ",Object(r.b)("em",{parentName:"p"},"LidarCalibrationExplicit")," object or a ",Object(r.b)("em",{parentName:"p"},"CameraCalibrationExplicit")," object depending on the sensor."),Object(r.b)("p",null,"A lidar calibration is represented as a ",Object(r.b)("em",{parentName:"p"},"LidarCalibrationExplicit")," object and consists of a position expressed with three coordinates and a rotation in the form of a ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Quaternions_and_spatial_rotation"}),"Quaternion"),". See the code example below for creating a basic ",Object(r.b)("em",{parentName:"p"},"LidarCalibrationExplicit")," object."),Object(r.b)("p",null,"The Camera calibration format is based on ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.opencv.org/3.4/d4/d94/tutorial_camera_calibration.htm"}),"OpenCVs")," format and this ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.robots.ox.ac.uk/~cmei/articles/single_viewpoint_calib_mei_07.pdf"}),"paper"),". Currently three different camera types are supported: ",Object(r.b)("inlineCode",{parentName:"p"},"PINHOLE"),", ",Object(r.b)("inlineCode",{parentName:"p"},"FISHEYE")," and ",Object(r.b)("inlineCode",{parentName:"p"},"KANNALA"),". The camera calibration consists of the following set of key-value pairs."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Key"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"rotation_quaternion"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A RotationQuaternion object")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"position"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A Position object")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"camera_matrix"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A CameraMatrix object")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"camera_properties"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A CameraProperty object")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"distortion_coefficients"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A DistortionCoefficients object. Please note that the coefficient ",Object(r.b)("em",{parentName:"td"},"k3")," should be equal to None if the camera type is ",Object(r.b)("em",{parentName:"td"},"Kannala"),Object(r.b)("strong",{parentName:"td"},"."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"image_height"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Integer")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"image_width"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Integer")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"undistortion_coefficients"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"(",Object(r.b)("strong",{parentName:"td"},"Optional",")")," An UndistortionCoefficients object. This is only used for ",Object(r.b)("em",{parentName:"td"},"Kannala")," cameras.")))),Object(r.b)("h2",{id:"example-creating-a-calibration"},"Example: Creating a calibration"),Object(r.b)("p",null,"Let's say that we want to create a calibration where we have a single lidar and two cameras - one of type ",Object(r.b)("inlineCode",{parentName:"p"},"PINHOLE")," and the other of type ",Object(r.b)("inlineCode",{parentName:"p"},"KANNALA"),". We will refer to the lidar sensor as ",Object(r.b)("inlineCode",{parentName:"p"},"lidar")," while the camera sensors will be referred to as ",Object(r.b)("inlineCode",{parentName:"p"},"CAM_PINHOLE")," and ",Object(r.b)("inlineCode",{parentName:"p"},"CAM_KANNALA")," respectively - these will be our source names. "),Object(r.b)("h3",{id:"creating-a-lidar-calibration"},"Creating a lidar calibration"),Object(r.b)("p",null,"As a first step we will create a ",Object(r.b)("em",{parentName:"p"},"LidarCalibrationExplicit")," object for our lidar sensor. This amounts to specifying the position and rotation of the sensor."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"import annotell.input_api.model.calibration as Calibration\n\n# Create lidar calibration\nlidar_position = Calibration.Position(x=0.0, y=0.0, z=0.0)\nlidar_rotation = Calibration.RotationQuaternion(w=1.0, x=0.0, y=0.0, z=0.0)\nlidar_calibration = Calibration.LidarCalibrationExplicit(position=lidar_position,\n                                                         rotation_quaternion=lidar_rotation)\n")),Object(r.b)("h3",{id:"creating-camera-calibrations"},"Creating camera calibrations"),Object(r.b)("p",null,"Next, we have to create a ",Object(r.b)("em",{parentName:"p"},"CameraCalibrationExplicit")," object for each of our two cameras."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"cam_pinhole_properties = Calibration.CameraProperty(camera_type=Calibration.CameraType.PINHOLE)\ncam_pinhole_position = Calibration.Position(x=0.0, y=0.0, z=0.0)\ncam_pinhole_rotation = Calibration.RotationQuaternion(w=1.0, x=0.0, y=0.0, z=0.0)\ncam_pinhole_camera_matrix = Calibration.CameraMatrix(fx=3450, fy=3250, cx=622, cy=400)\ncam_pinhole_distortion_coefficients = Calibration.DistortionCoefficients(k1=0.0, k2=0.0, p1=0.0, p2=0.0, k3=0.0)\n\ncam_pinhole_camera_calibration = Calibration.CameraCalibrationExplicit(position=cam_pinhole_position,\n                                                                       rotation_quaternion=cam_pinhole_rotation,\n                                                                       camera_matrix=cam_pinhole_camera_matrix,\n                                                                       distortion_coefficients=cam_pinhole_distortion_coefficients,\n                                                                       camera_properties=cam_pinhole_properties,\n                                                                       image_height=920,\n                                                                       image_width=1244)\n\ncam_kannala_properties = Calibration.CameraProperty(camera_type=Calibration.CameraType.KANNALA)\ncam_kannala_position = Calibration.Position(x=2.05, y=0.00, z=1.12)\ncam_kannala_rotation = Calibration.RotationQuaternion(w=-0.51, x=0.49, y=-0.50, z=0.48)\ncam_kannala_camera_matrix = Calibration.CameraMatrix(fx=1934.23, fy=1132.24, cx=1846.47, cy=1846.47)\n# Note that k3 parameter is not present for cameras of type Kannala\ncam_kannala_distortion_coefficients = Calibration.DistortionCoefficients(k1=-0.01, k2=-0.01, p1=0.02, p2=-0.01)  \n# An extra set of undistortion coefficients are necessary for cameras of type Kannala\ncam_kannala_undistortion_coefficients = Calibration.UndistortionCoefficients(l1=0.01, l2=0.01, l3=-0.03, l4=0.01)\n\ncam_kannala_camera_calibration = Calibration.CameraCalibrationExplicit(position=cam_kannala_position,\n                                                                       rotation_quaternion=cam_kannala_rotation,\n                                                                       camera_matrix=cam_kannala_camera_matrix,\n                                                                       distortion_coefficients=cam_kannala_distortion_coefficients,\n                                                                       undistortion_coefficients=cam_kannala_undistortion_coefficients,\n                                                                       camera_properties=cam_kannala_properties,\n                                                                       image_height=920,\n                                                                       image_width=1244)\n")),Object(r.b)("h3",{id:"creating-the-full-calibration"},"Creating the full calibration"),Object(r.b)("p",null,"At this point we have specified all of the necessary parameters for all of our sensors. The final step is to tie them all together by creating a dictionary mapping the source name to the corresponding calibration. We then create a Calibration object and a CalibrationSpecification object which we then use to create a calibration in the Annotell platform. The external id can be used for querying for the calibration file. "),Object(r.b)("aside",{class:"notice"},"Note that you can, and should, reuse the same calibration for multiple scenes if possible."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'import annotell.input_api.input_api_model as IAM\n\n# Create calibration for the scene\ncalibration_dict = dict(CAM_PINHOLE=cam_pinhole_camera_calibration,\n                        CAM_KANNALA=cam_kannala_camera_calibration,\n                        lidar=lidar_calibration)\n\ncalibration = IAM.Calibration(calibration_dict=calibration_dict)\ncalibration_external_id = "Collection 2020-06-16"\ncalibration_spec = IAM.CalibrationSpec(external_id=calibration_external_id,\n                                       calibration=calibration)\n\n# Create the calibration using the Input API client\nimport annotell.input_api.input_api_client as IAC\nclient = IAC.InputApiClient()\ncreated_calibration = client.create_calibration_data(calibration_spec=calibration_spec)\n')),Object(r.b)("h3",{id:"listing-existing-calibrations"},"Listing existing calibrations"),Object(r.b)("p",null,"As a final step we can fetch the calibration via the external id. This can either be done via the client, or via the CLI annoutil tool. "),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'client.get_calibration_data(external_id="Collection 2020-06-16")\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ annoutil calibration\n")))}p.isMDXComponent=!0},83:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return u}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var b=i.a.createContext({}),p=function(e){var t=i.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=p(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=p(a),d=n,u=s["".concat(o,".").concat(d)]||s[d]||m[d]||r;return a?i.a.createElement(u,c(c({ref:t},b),{},{components:a})):i.a.createElement(u,c({ref:t},b))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var b=2;b<r;b++)o[b]=a[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);
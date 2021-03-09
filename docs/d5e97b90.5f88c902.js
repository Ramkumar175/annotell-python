(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{111:function(e,t,a){"use strict";a.r(t),a.d(t,"MDXContext",(function(){return p})),a.d(t,"MDXProvider",(function(){return u})),a.d(t,"mdx",(function(){return h})),a.d(t,"useMDXComponents",(function(){return s})),a.d(t,"withMDXComponents",(function(){return m}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=i.a.createContext({}),m=function(e){return function(t){var a=s(t.components);return i.a.createElement(e,r({},t,{components:a}))}},s=function(e){var t=i.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=s(a),m=n,u=p["".concat(r,".").concat(m)]||p[m]||b[m]||o;return a?i.a.createElement(u,l(l({ref:t},c),{},{components:a})):i.a.createElement(u,l({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var d=2;d<o;d++)r[d]=a[d];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}f.displayName="MDXCreateElement"},55:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),i=a(8),o=(a(0),a(111)),r={title:"Point Cloud With Images (v0)"},c={unversionedId:"input-api/inputs/point_cloud_with_images",id:"input-api/inputs/point_cloud_with_images",isDocsHomePage:!1,title:"Point Cloud With Images (v0)",description:"Supported point cloud formats are .csv, .pcd or .las",source:"@site/docs/input-api/inputs/point_cloud_with_images.md",slug:"/input-api/inputs/point_cloud_with_images",permalink:"/annotell-python/docs/input-api/inputs/point_cloud_with_images",editUrl:"https://github.com/annotell/annotell-python/edit/gh-pages/docs-src/docs/input-api/inputs/point_cloud_with_images.md",version:"current",sidebar:"docs",previous:{title:"Point Cloud (v0)",permalink:"/annotell-python/docs/input-api/inputs/point_cloud"},next:{title:"Cameras",permalink:"/annotell-python/docs/input-api/inputs/cameras"}},l=[{value:"Single Image and Single Point Cloud Example",id:"single-image-and-single-point-cloud-example",children:[{value:"Adding metadata to the input",id:"adding-metadata-to-the-input",children:[]},{value:"Creating the input",id:"creating-the-input",children:[]},{value:"Full example code",id:"full-example-code",children:[]}]}],d={rightToc:l};function p(e){var t=e.components,a=Object(i.default)(e,["components"]);return Object(o.mdx)("wrapper",Object(n.default)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.mdx)("div",Object(n.default)({parentName:"div"},{className:"admonition-heading"}),Object(o.mdx)("h5",{parentName:"div"},Object(o.mdx)("span",Object(n.default)({parentName:"h5"},{className:"admonition-icon"}),Object(o.mdx)("svg",Object(n.default)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.mdx)("path",Object(n.default)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Supported point cloud formats")),Object(o.mdx)("div",Object(n.default)({parentName:"div"},{className:"admonition-content"}),Object(o.mdx)("p",{parentName:"div"},"Supported point cloud formats are ",Object(o.mdx)("inlineCode",{parentName:"p"},".csv"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},".pcd")," or ",Object(o.mdx)("inlineCode",{parentName:"p"},".las")))),Object(o.mdx)("p",null,"A ",Object(o.mdx)("inlineCode",{parentName:"p"},"PointCloudsWithImages")," input is very similar to the ",Object(o.mdx)("a",Object(n.default)({parentName:"p"},{href:"/annotell-python/docs/input-api/inputs/images"}),Object(o.mdx)("inlineCode",{parentName:"a"},"Images"))," input, except that we in addition to camera images also supply lidar point clouds. In order to relate the lidar representation to the cameras a calibration is needed as well. The calibration enables projection of cuboids in the point cloud down onto the camera images, which can help guide annotators in producing annotations. For more information on how to define and create a calibration, please refer to the ",Object(o.mdx)("a",Object(n.default)({parentName:"p"},{href:"/annotell-python/docs/input-api/calibration"}),"Calibration")," section."),Object(o.mdx)("h2",{id:"single-image-and-single-point-cloud-example"},"Single Image and Single Point Cloud Example"),Object(o.mdx)("p",null,"The first step is to produce an ",Object(o.mdx)("inlineCode",{parentName:"p"},"Image")," object for the camera image, as well as a ",Object(o.mdx)("inlineCode",{parentName:"p"},"PointCloud")," object for the lidar point cloud. It's important to specify the right source name for our image and point cloud, since these source names will need to be present in the calibration as well. In this case the source name of the image is ",Object(o.mdx)("inlineCode",{parentName:"p"},'"RFC01"'),", whereas for the point cloud we will go with the default source name of ",Object(o.mdx)("inlineCode",{parentName:"p"},'"lidar"'),"."),Object(o.mdx)("div",{className:"admonition admonition-info alert alert--info"},Object(o.mdx)("div",Object(n.default)({parentName:"div"},{className:"admonition-heading"}),Object(o.mdx)("h5",{parentName:"div"},Object(o.mdx)("span",Object(n.default)({parentName:"h5"},{className:"admonition-icon"}),Object(o.mdx)("svg",Object(n.default)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.mdx)("path",Object(n.default)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"no multi-lidar support currently")),Object(o.mdx)("div",Object(n.default)({parentName:"div"},{className:"admonition-content"}),Object(o.mdx)("p",{parentName:"div"},"Currently there is only support for supplying a single point cloud"))),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(n.default)({parentName:"pre"},{className:"language-python"}),'import annotell.input_api.input_api_model as IAM\nfrom pathlib import Path\n\nimage1 = IAM.Image(filename="filename_image1.jpg", source="RFC01")\npc = IAM.PointCloud(filename="filename_pc.pcd")\npoint_clouds_with_images = IAM.PointCloudsWithImages(images=[image1],\n                                                     point_clouds=[pc])\nfolder = Path("/home/user_name/example_path/")  # Folder to where the data is\n')),Object(o.mdx)("h3",{id:"adding-metadata-to-the-input"},"Adding metadata to the input"),Object(o.mdx)("p",null,"Next, we need to add metadata to the input. Similarly to ",Object(o.mdx)("a",Object(n.default)({parentName:"p"},{href:"/annotell-python/docs/input-api/inputs/images"}),Object(o.mdx)("inlineCode",{parentName:"a"},"Images"))," inputs, we can specify the ",Object(o.mdx)("inlineCode",{parentName:"p"},"external_id")," and ",Object(o.mdx)("inlineCode",{parentName:"p"},"source_specification"),". However we are also ",Object(o.mdx)("em",{parentName:"p"},"required")," to specify a ",Object(o.mdx)("inlineCode",{parentName:"p"},"calibration_id")," in order to create the input."),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(n.default)({parentName:"pre"},{className:"language-python"}),'scene_external_id = "Scene X collection 2020-06-16"\ncalibration_id = 100\nsource_specification = IAM.SourceSpecification(source_to_pretty_name=dict(RFC01="Front Camera"))\nmetadata = IAM.CalibratedSceneMetaData(external_id=scene_external_id,\n                                       calibration_id=calibration_id,\n                                       source_specification=source_specification)\n')),Object(o.mdx)("table",null,Object(o.mdx)("thead",{parentName:"table"},Object(o.mdx)("tr",{parentName:"thead"},Object(o.mdx)("th",Object(n.default)({parentName:"tr"},{align:null}),"Parameter"),Object(o.mdx)("th",Object(n.default)({parentName:"tr"},{align:null}),"Description"))),Object(o.mdx)("tbody",{parentName:"table"},Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",Object(n.default)({parentName:"tr"},{align:null}),"external_id"),Object(o.mdx)("td",Object(n.default)({parentName:"tr"},{align:null}),"Id which can be used to track progress of annotations with.")),Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",Object(n.default)({parentName:"tr"},{align:null}),"source_specification"),Object(o.mdx)("td",Object(n.default)({parentName:"tr"},{align:null}),"Additional information about sources, includes ",Object(o.mdx)("inlineCode",{parentName:"td"},"source_to_pretty_name")," and ",Object(o.mdx)("inlineCode",{parentName:"td"},"source_order"),". ",Object(o.mdx)("inlineCode",{parentName:"td"},"source_order")," is a list of strings that defines the order in which the sources will be shown in the UI, while ",Object(o.mdx)("inlineCode",{parentName:"td"},"source_to_pretty_name")," can be used to provide a mapping of a source name to a more intuitive name that will be displayed in the UI.")),Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",Object(n.default)({parentName:"tr"},{align:null}),"calibration_id"),Object(o.mdx)("td",Object(n.default)({parentName:"tr"},{align:null}),"Which calibration to use for the input.")))),Object(o.mdx)("p",null,"See the ",Object(o.mdx)("a",Object(n.default)({parentName:"p"},{href:"/annotell-python/docs/input-api/calibration"}),"Calibration")," section for more information on how to retrieve a calibration id."),Object(o.mdx)("h3",{id:"creating-the-input"},"Creating the input"),Object(o.mdx)("p",null,"The final step is to create the input."),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(n.default)({parentName:"pre"},{className:"language-python"}),'import annotell.input_api.input_api_client as IAC\nclient = IAC.InputApiClient()\n\nclient.create_inputs_point_cloud_with_images(folder=folder,\n                                             point_clouds_with_images=point_clouds_with_images,\n                                             metadata=metadata,\n                                             project="my_project")\n')),Object(o.mdx)("h3",{id:"full-example-code"},"Full example code"),Object(o.mdx)("blockquote",null,Object(o.mdx)("p",{parentName:"blockquote"},"Full example for creating an input consisting of a point cloud and one image. Also includes creation of a new calibration. ")),Object(o.mdx)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.mdx)("div",Object(n.default)({parentName:"div"},{className:"admonition-heading"}),Object(o.mdx)("h5",{parentName:"div"},Object(o.mdx)("span",Object(n.default)({parentName:"h5"},{className:"admonition-icon"}),Object(o.mdx)("svg",Object(n.default)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.mdx)("path",Object(n.default)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"reuse calibration")),Object(o.mdx)("div",Object(n.default)({parentName:"div"},{className:"admonition-content"}),Object(o.mdx)("p",{parentName:"div"},"Note that you can, and should, reuse the same calibration for multiple inputs if possible."))),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(n.default)({parentName:"pre"},{className:"language-python"}),'import annotell.input_api.input_api_model as IAM\nimport annotell.input_api.model.calibration as Calibration\nimport annotell.input_api.input_api_client as IAC\nfrom pathlib import Path\nclient = IAC.InputApiClient()\n# Create representation of images and point clouds + source specification images\nimage1 = IAM.Image(filename="filename_image1.jpg", source="RFC01")\npc = IAM.PointCloud(filename="filename_pc.pcd")\npoint_clouds_with_images = IAM.PointCloudsWithImages(images=[image1],\n                                                     point_clouds=[pc])\nfolder = Path("/home/user_name/example_path/")  # Folder to where the data is\n# Create lidar calibration\nlidar_position = Calibration.Position(x=0.0, y=0.0, z=0.0)\nlidar_rotation = Calibration.RotationQuaternion(w=1.0, x=0.0, y=0.0, z=0.0)\nlidar_calibration = Calibration.LidarCalibrationExplicit(position=lidar_position,\n                                                         rotation_quaternion=lidar_rotation)\n# Create a camera calibration\nrfc_01_camera_type = Calibration.CameraType.PINHOLE\nrfc_01_position = Calibration.Position(x=0.0, y=0.0, z=0.0)  # similar to Lidar\nrfc_01_rotation = Calibration.RotationQuaternion(w=1.0, x=0.0, y=0.0, z=0.0)  # similar to Lidar\nrfc_01_camera_matrix = Calibration.CameraMatrix(fx=3450, fy=3250, cx=622, cy=400)\nrfc_01_distortion_coefficients = Calibration.DistortionCoefficients(k1=0.0, k2=0.0, p1=0.0, p2=0.0, k3=0.0)\nrfc_01_properties = Calibration.CameraProperty(camera_type=rfc_01_camera_type)\ncamera_calibration_rfc_01 = Calibration.CameraCalibrationExplicit(\n    position=rfc_01_position,\n    rotation_quaternion=rfc_01_rotation,\n    camera_matrix=rfc_01_camera_matrix,\n    distortion_coefficients=rfc_01_distortion_coefficients,\n    camera_properties=rfc_01_properties,\n    image_height=920,\n    image_width=1244\n)\n\n# Create calibration for the scene\ncalibration_dict = dict(RFC01=camera_calibration_rfc_01,\n                        lidar=lidar_calibration)\ncalibration = IAM.Calibration(calibration_dict=calibration_dict)\ncalibration_external_id = "Collection 2020-06-16"\ncalibration_spec = IAM.CalibrationSpec(external_id=calibration_external_id,\n                                       calibration=calibration)\n# Create the calibration using the Input API client\ncreated_calibration = client.create_calibration_data(calibration_spec=calibration_spec)\n\n# Create metadata\nscene_external_id = "Scene X collection 2020-06-16"\nmetadata = IAM.CalibratedSceneMetaData(external_id=scene_external_id,\n                                       calibration_id=created_calibration.id)\n\n# Add input\nclient.create_inputs_point_cloud_with_images(folder=folder,\n                                             point_clouds_with_images=point_clouds_with_images,\n                                             metadata=metadata,\n                                             project="my_project")\n')))}p.isMDXComponent=!0}}]);
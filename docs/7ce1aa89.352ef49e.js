(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{76:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return o})),t.d(a,"metadata",(function(){return s})),t.d(a,"rightToc",(function(){return c})),t.d(a,"default",(function(){return l}));var n=t(3),i=t(7),r=(t(0),t(91)),o={title:"LidarsAndCamerasSeq"},s={unversionedId:"input-api/inputs/lidars_and_cameras_seq",id:"input-api/inputs/lidars_and_cameras_seq",isDocsHomePage:!1,title:"LidarsAndCamerasSeq",description:"A LidarsAndCamerasSeq input consists of a sequence of camera images and lidar point clouds. Unlike single-frame input types we also have to specify the sequential relationship between our frames, where each frame consists on 1-8 camera images, as well as lidar point clouds.",source:"@site/docs/input-api/inputs/lidars_and_cameras_seq.md",slug:"/input-api/inputs/lidars_and_cameras_seq",permalink:"/annotell-python/docs/input-api/inputs/lidars_and_cameras_seq",editUrl:"https://github.com/annotell/annotell-python/edit/gh-pages/docs-src/docs/input-api/inputs/lidars_and_cameras_seq.md",version:"current",sidebar:"docs",previous:{title:"LidarsSeq \ud83d\udea7",permalink:"/annotell-python/docs/input-api/inputs/lidars_seq"},next:{title:"Calibration",permalink:"/annotell-python/docs/input-api/calibration"}},c=[{value:"Creating a list of frames",id:"creating-a-list-of-frames",children:[]},{value:"Creating the input",id:"creating-the-input",children:[]}],m={rightToc:c};function l(e){var a=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},m,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)("p",null,"A ",Object(r.b)("inlineCode",{parentName:"p"},"LidarsAndCamerasSeq")," input consists of a sequence of camera images and lidar point clouds. Unlike single-frame input types we also have to specify the sequential relationship between our ",Object(r.b)("em",{parentName:"p"},"frames"),", where each frame consists on 1-8 camera images, as well as lidar point clouds."),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"no multi-lidar support currently")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Currently there is only support for supplying a single point cloud per frame."))),Object(r.b)("h2",{id:"creating-a-list-of-frames"},"Creating a list of frames"),Object(r.b)("p",null,"The sequential relationship is expressed via a list of ",Object(r.b)("inlineCode",{parentName:"p"},"Frame")," objects. This representation expresses the ordering of the frames, but it does not include the ",Object(r.b)("em",{parentName:"p"},"relative temporal")," relationship between the frames in the list."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"frame_1 = IAM.Frame(...)\nframe_2 = IAM.Frame(...)\nframes = [frame_1, frame_2]\n")),Object(r.b)("p",null,"In other words, this representation captures that ",Object(r.b)("inlineCode",{parentName:"p"},"frame_1")," comes before ",Object(r.b)("inlineCode",{parentName:"p"},"frame_2"),", but does not express how much time has passed between the two frames. In order to express how much time has passed between the frames we need to specify the field ",Object(r.b)("inlineCode",{parentName:"p"},"relative_timestamp")," for each frame object. If we for example know that we have collected and aggregated our sensor data at 2Hz, then we would express that as"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"frame_1 = IAM.Frame(..., relative_timestamp=0)\nframe_2 = IAM.Frame(..., relative_timestamp=500)\nframes = [frame_1, frame_2]\n")),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Why is relative time important?")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Specifying the time relationship between frames is important in order to enable different types of advanced annotator assistance tools in the Annotell platform. These tools enable a ",Object(r.b)("strong",{parentName:"p"},"significant")," reduction in annotation time, while keeping quality high."))),Object(r.b)("p",null,"In addition to supplying the sequential and temporal information for our ",Object(r.b)("inlineCode",{parentName:"p"},"Frame")," objects we also need to specify the camera images and lidar point clouds that constitute each frame. This is done by passing a list of ",Object(r.b)("inlineCode",{parentName:"p"},"PointCloudFrame")," and ",Object(r.b)("inlineCode",{parentName:"p"},"ImageFrame")," objects, where each of these objects contains the path to the underlying file as well as the sensor name. Finally, we also need to specify the ",Object(r.b)("inlineCode",{parentName:"p"},"frame_id")," of each frame."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'frame_1 = IAM.Frame(\n    frame_id="1",\n    point_cloud_frames=[\n        IAM.PointCloudFrame("~/lidar_RFL01_1.pcd", sensor_name="RFL01"),\n    ],\n    image_frames=[\n        IAM.ImageFrame("~/img_RFC01_1.jpg", sensor_name="RFC01"),\n        IAM.ImageFrame("~/img_RFC02_2.jpg", sensor_name="RFC02"),\n        IAM.ImageFrame("~/img_RFC03_3.jpg", sensor_name="RFC03")\n    ],\n    relative_timestamp=0\n)\nframe_2 = IAM.Frame(\n    frame_id="2",\n    point_cloud_frames=[\n        IAM.PointCloudFrame("~/lidar_RFL01_2.pcd", sensor_name="RFL01"),\n    ],\n    image_frames=[\n        IAM.ImageFrame("~/img_RFC01_2.jpg", sensor_name="RFC01"),\n        IAM.ImageFrame("~/img_RFC02_2.jpg", sensor_name="RFC02"),\n        IAM.ImageFrame("~/img_RFC03_2.jpg", sensor_name="RFC03")\n    ],\n    relative_timestamp=500\n)\nframes = [frame_1, frame_2]\n')),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Be careful with sensor names")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Make sure that the provided sensor names for each image and lidar frame are present in the calibration supplied to the input. Otherwise the input cannot be created. For more information about this see the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/annotell-python/docs/input-api/calibration"}),"Calibration")," section."))),Object(r.b)("h2",{id:"creating-the-input"},"Creating the input"),Object(r.b)("p",null,"In order to create the input we need to use our list of ",Object(r.b)("inlineCode",{parentName:"p"},"Frame")," objects and specify the parameters ",Object(r.b)("inlineCode",{parentName:"p"},"external_id")," and ",Object(r.b)("inlineCode",{parentName:"p"},"calibration_id")," as well as the optional parameter ",Object(r.b)("inlineCode",{parentName:"p"},"sensor_specification"),"."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"external_id"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Id which can be used to track progress of annotations with.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"sensor_specification"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Additional information about sensors, includes ",Object(r.b)("inlineCode",{parentName:"td"},"sensor_to_pretty_name")," and ",Object(r.b)("inlineCode",{parentName:"td"},"sensor_order"),". Defines which sensor that should be shown first, the sensor_order, or a mapping of sensor names to a prettier name version displayed in the Annotell Annotation Tool.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"calibration_id"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Which calibration to use for the input.")))),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"reuse calibration")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Note that you can, and should, reuse the same calibration for multiple inputs if possible."))),Object(r.b)("p",null,"All that is left after creating the ",Object(r.b)("inlineCode",{parentName:"p"},"LidarsAndCamerasSequence")," object is selecting which project to upload the input to and then call the ",Object(r.b)("inlineCode",{parentName:"p"},"create")," method."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'import annotell.input_api.input_api_client as IAC\nimport annotell.input_api.model as IAM\n\nclient = IAC.InputApiClient()\n\n# Get existing calibration\ncalibration_external_id = "<calibration-identifier>"\ncalibration = client.calibration.get_calibration(external_id=calibration_external_id)[-1]\n\nlidar_and_camera_seq = IAM.LidarsAndCamerasSequence(\n    external_id="input1",\n    frames=[\n        IAM.Frame(\n            frame_id="1",\n            relative_timestamp=0,\n            point_cloud_frames=[\n                IAM.PointCloudFrame("~/lidar_1.pcd", sensor_name="lidar"),\n            ],\n            image_frames=[\n                IAM.ImageFrame("~/img_RFC01_1.jpg", sensor_name="RFC01"),\n                IAM.ImageFrame("~/img_RFC02_2.jpg", sensor_name="RFC02"),\n                IAM.ImageFrame("~/img_RFC03_3.jpg", sensor_name="RFC03")\n            ]),\n        IAM.Frame(\n            frame_id="2",\n            relative_timestamp=500,\n            point_cloud_frames=[\n                IAM.PointCloudFrame("~/lidar_2.pcd", sensor_name="lidar"),\n            ],\n            image_frames=[\n                IAM.ImageFrame("~/img_RFC01_2.jpg", sensor_name="RFC01"),\n                IAM.ImageFrame("~/img_RFC02_2.jpg", sensor_name="RFC02"),\n                IAM.ImageFrame("~/img_RFC03_2.jpg", sensor_name="RFC03")\n            ]),\n    ],\n    calibration_id=calibration.id,\n)\n\n# Project - Available via `client.list_projects()`\nproject = "<project-identifier>"\n\n# Add input\nclient.lidar_and_image_sequence.create(lidar_and_camera_seq,\n                                       project=project,\n                                       dryrun=True)\n')),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Use dryrun to validate input")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Setting ",Object(r.b)("inlineCode",{parentName:"p"},"dryrun")," parameter to true in the method call, will validate the input using the Input API but not create any inputs."))))}l.isMDXComponent=!0},91:function(e,a,t){"use strict";t.d(a,"a",(function(){return p})),t.d(a,"b",(function(){return u}));var n=t(0),i=t.n(n);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var m=i.a.createContext({}),l=function(e){var a=i.a.useContext(m),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},p=function(e){var a=l(e.components);return i.a.createElement(m.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return i.a.createElement(i.a.Fragment,{},a)}},b=i.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=l(t),b=n,u=p["".concat(o,".").concat(b)]||p[b]||d[b]||r;return t?i.a.createElement(u,s(s({ref:a},m),{},{components:t})):i.a.createElement(u,s({ref:a},m))}));function u(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,o=new Array(r);o[0]=b;var s={};for(var c in a)hasOwnProperty.call(a,c)&&(s[c]=a[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var m=2;m<r;m++)o[m]=t[m];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);
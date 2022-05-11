(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{114:function(e,t,a){"use strict";a.r(t),a.d(t,"MDXContext",(function(){return d})),a.d(t,"MDXProvider",(function(){return s})),a.d(t,"mdx",(function(){return O})),a.d(t,"useMDXComponents",(function(){return b})),a.d(t,"withMDXComponents",(function(){return p}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),p=function(e){return function(t){var a=b(t.components);return r.a.createElement(e,l({},t,{components:a}))}},b=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=b(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},x={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,o=m(e,["components","mdxType","originalType","parentName"]),d=b(a),p=n,s=d["".concat(l,".").concat(p)]||d[p]||x[p]||i;return a?r.a.createElement(s,c(c({ref:t},o),{},{components:a})):r.a.createElement(s,c({ref:t},o))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var m=2;m<i;m++)l[m]=a[m];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},192:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/camera-calibration-26d5f7d850b37fbdac9dcb1197a74bb5.png"},44:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(8),i=(a(0),a(114)),l={title:"Calibration"},o={unversionedId:"input-api/calibration",id:"input-api/calibration",isDocsHomePage:!1,title:"Calibration",description:"Inputs including both a 2D and 3D representation such as lidars_and_cameras require a calibration relating the camera sensors with the",source:"@site/docs/input-api/calibration.md",slug:"/input-api/calibration",permalink:"/annotell-python/docs/input-api/calibration",editUrl:"https://github.com/annotell/annotell-python/edit/gh-pages/docs-src/docs/input-api/calibration.md",version:"current",sidebar:"docs",previous:{title:"Downloading Annotations",permalink:"/annotell-python/docs/input-api/annotations"},next:{title:"Errors",permalink:"/annotell-python/docs/input-api/error_handling"}},c=[{value:"Pinhole",id:"pinhole",children:[]},{value:"Fisheye",id:"fisheye",children:[]},{value:"Kannala",id:"kannala",children:[]},{value:"Example: Creating a calibration",id:"example-creating-a-calibration",children:[{value:"Listing existing calibrations",id:"listing-existing-calibrations",children:[]}]}],m={rightToc:c};function d(e){var t=e.components,l=Object(r.a)(e,["components"]);return Object(i.mdx)("wrapper",Object(n.default)({},m,l,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"Inputs including both a 2D and 3D representation such as ",Object(i.mdx)("strong",{parentName:"p"},"lidars_and_cameras")," require a calibration relating the camera sensors with the\nlidar sensors in terms of location and rotation. The calibration should also contain the required information for projecting 3D points into\nthe image plane of the camera."),Object(i.mdx)("p",null,"A Calibration object consists of a set of key-value pairs where the key is the name of the sensor (i.e. sensor name) and the value is either\na ",Object(i.mdx)("em",{parentName:"p"},"LidarCalibration")," object or any of the different camera calibrations."),Object(i.mdx)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.mdx)("div",{parentName:"div",className:"admonition-heading"},Object(i.mdx)("h5",{parentName:"div"},Object(i.mdx)("span",{parentName:"h5",className:"admonition-icon"},Object(i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"reuse calibration")),Object(i.mdx)("div",{parentName:"div",className:"admonition-content"},Object(i.mdx)("p",{parentName:"div"},"Note that you can, and should, reuse the same calibration for multiple inputs if possible."))),Object(i.mdx)("h1",{id:"lidar"},"Lidar"),Object(i.mdx)("table",null,Object(i.mdx)("thead",{parentName:"table"},Object(i.mdx)("tr",{parentName:"thead"},Object(i.mdx)("th",{parentName:"tr",align:"left"},"Key"),Object(i.mdx)("th",{parentName:"tr",align:"left"},"Value"),Object(i.mdx)("th",{parentName:"tr",align:"left"},"Parameters"))),Object(i.mdx)("tbody",{parentName:"table"},Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",{parentName:"tr",align:"left"},"rotation_quaternion"),Object(i.mdx)("td",{parentName:"tr",align:"left"},"A RotationQuaternion object"),Object(i.mdx)("td",{parentName:"tr",align:"left"},Object(i.mdx)("inlineCode",{parentName:"td"},"w, x, y, z"))),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",{parentName:"tr",align:"left"},"position"),Object(i.mdx)("td",{parentName:"tr",align:"left"},"A Position object"),Object(i.mdx)("td",{parentName:"tr",align:"left"},Object(i.mdx)("inlineCode",{parentName:"td"},"x, y, z"))))),Object(i.mdx)("p",null,"A lidar calibration is represented as a ",Object(i.mdx)("em",{parentName:"p"},"LidarCalibration")," object and consists of a position expressed with three coordinates and a rotation\nin the form of a ",Object(i.mdx)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Quaternions_and_spatial_rotation"},"Quaternion"),". See the code example below for creating a\nbasic ",Object(i.mdx)("em",{parentName:"p"},"LidarCalibration")," object."),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-python",metastring:"reference",reference:!0},"https://github.com/annotell/annotell-python/blob/master/annotell-input-api/examples/calibration/create_lidar_calibration.py\n")),Object(i.mdx)("h1",{id:"camera"},"Camera"),Object(i.mdx)("p",null,"The Camera calibration format is based on ",Object(i.mdx)("a",{parentName:"p",href:"https://docs.opencv.org/3.4/d4/d94/tutorial_camera_calibration.html"},"OpenCVs")," format and\nthis ",Object(i.mdx)("a",{parentName:"p",href:"http://www.robots.ox.ac.uk/~cmei/articles/single_viewpoint_calib_mei_07.pdf"},"paper"),". Currently, three different camera types are\nsupported: ",Object(i.mdx)("inlineCode",{parentName:"p"},"PINHOLE"),", ",Object(i.mdx)("inlineCode",{parentName:"p"},"FISHEYE")," and ",Object(i.mdx)("inlineCode",{parentName:"p"},"KANNALA"),"."),Object(i.mdx)("p",null,Object(i.mdx)("img",{alt:"Camera Calibrations commonality",src:a(192).default})),Object(i.mdx)("h2",{id:"pinhole"},"Pinhole"),Object(i.mdx)("p",null,"The ",Object(i.mdx)("inlineCode",{parentName:"p"},"PINHOLE")," camera model consists of the following attributes"),Object(i.mdx)("table",null,Object(i.mdx)("thead",{parentName:"table"},Object(i.mdx)("tr",{parentName:"thead"},Object(i.mdx)("th",{parentName:"tr",align:"left"},"Key"),Object(i.mdx)("th",{parentName:"tr",align:"left"},"Value"),Object(i.mdx)("th",{parentName:"tr",align:"left"},"Parameters"))),Object(i.mdx)("tbody",{parentName:"table"},Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",{parentName:"tr",align:"left"},"rotation_quaternion"),Object(i.mdx)("td",{parentName:"tr",align:"left"},"A RotationQuaternion object"),Object(i.mdx)("td",{parentName:"tr",align:"left"},Object(i.mdx)("inlineCode",{parentName:"td"},"w, x, y, z"))),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",{parentName:"tr",align:"left"},"position"),Object(i.mdx)("td",{parentName:"tr",align:"left"},"A Position object"),Object(i.mdx)("td",{parentName:"tr",align:"left"},Object(i.mdx)("inlineCode",{parentName:"td"},"x, y, z"))),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",{parentName:"tr",align:"left"},"camera_matrix"),Object(i.mdx)("td",{parentName:"tr",align:"left"},"A CameraMatrix object"),Object(i.mdx)("td",{parentName:"tr",align:"left"},Object(i.mdx)("inlineCode",{parentName:"td"},"fx, fy, cx, cy"))),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",{parentName:"tr",align:"left"},"distortion_coefficients"),Object(i.mdx)("td",{parentName:"tr",align:"left"},"A DistortionCoefficients object."),Object(i.mdx)("td",{parentName:"tr",align:"left"},Object(i.mdx)("inlineCode",{parentName:"td"},"k1, k2, p1, p2, k3"))),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",{parentName:"tr",align:"left"},"image_height"),Object(i.mdx)("td",{parentName:"tr",align:"left"},"Integer"),Object(i.mdx)("td",{parentName:"tr",align:"left"},"NA")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",{parentName:"tr",align:"left"},"image_width"),Object(i.mdx)("td",{parentName:"tr",align:"left"},"Integer"),Object(i.mdx)("td",{parentName:"tr",align:"left"},"NA")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",{parentName:"tr",align:"left"},"field_of_view"),Object(i.mdx)("td",{parentName:"tr",align:"left"},"Float"),Object(i.mdx)("td",{parentName:"tr",align:"left"},"NA")))),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-python",metastring:"reference",reference:!0},"https://github.com/annotell/annotell-python/blob/master/annotell-input-api/examples/calibration/create_pinhole_calibration.py\n")),Object(i.mdx)("h2",{id:"fisheye"},"Fisheye"),Object(i.mdx)("p",null,"The Fisheye camera model expands the ",Object(i.mdx)("inlineCode",{parentName:"p"},"PINHOLE")," model with the following"),Object(i.mdx)("table",null,Object(i.mdx)("thead",{parentName:"table"},Object(i.mdx)("tr",{parentName:"thead"},Object(i.mdx)("th",{parentName:"tr",align:"left"},"Key"),Object(i.mdx)("th",{parentName:"tr",align:"left"},"Value"),Object(i.mdx)("th",{parentName:"tr",align:"left"},"Parameters"))),Object(i.mdx)("tbody",{parentName:"table"},Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",{parentName:"tr",align:"left"},"xi"),Object(i.mdx)("td",{parentName:"tr",align:"left"},"Float"),Object(i.mdx)("td",{parentName:"tr",align:"left"},"NA")))),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-python",metastring:"reference",reference:!0},"https://github.com/annotell/annotell-python/blob/master/annotell-input-api/examples/calibration/create_fisheye_calibration.py\n")),Object(i.mdx)("h2",{id:"kannala"},"Kannala"),Object(i.mdx)("p",null,"The ",Object(i.mdx)("inlineCode",{parentName:"p"},"KANNALA")," camera model changes and expands the ",Object(i.mdx)("inlineCode",{parentName:"p"},"PINHOLE")," with the following"),Object(i.mdx)("table",null,Object(i.mdx)("thead",{parentName:"table"},Object(i.mdx)("tr",{parentName:"thead"},Object(i.mdx)("th",{parentName:"tr",align:"left"},"Key"),Object(i.mdx)("th",{parentName:"tr",align:"left"},"Value"),Object(i.mdx)("th",{parentName:"tr",align:"left"},"Parameters"))),Object(i.mdx)("tbody",{parentName:"table"},Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",{parentName:"tr",align:"left"},"distortion_coefficients"),Object(i.mdx)("td",{parentName:"tr",align:"left"},"A KannalaDistortionCoefficients object. ",Object(i.mdx)("br",null)," Note that it is a subset of the DistortionCoefficients, omitting the ",Object(i.mdx)("inlineCode",{parentName:"td"},"k3")," parameter"),Object(i.mdx)("td",{parentName:"tr",align:"left"},Object(i.mdx)("inlineCode",{parentName:"td"},"k1, k2, p1, p2"))),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",{parentName:"tr",align:"left"},"undistortion_coefficients"),Object(i.mdx)("td",{parentName:"tr",align:"left"},"A UndistortionCoefficients object."),Object(i.mdx)("td",{parentName:"tr",align:"left"},Object(i.mdx)("inlineCode",{parentName:"td"},"l1, l2, l3, l4"))))),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-python",metastring:"reference",reference:!0},"https://github.com/annotell/annotell-python/blob/master/annotell-input-api/examples/calibration/create_kannala_calibration.py\n")),Object(i.mdx)("h2",{id:"example-creating-a-calibration"},"Example: Creating a calibration"),Object(i.mdx)("p",null,"The following example code shows how you can create a ",Object(i.mdx)("em",{parentName:"p"},"unity")," (i.e. we assume that all sensors are placed at origin and have no rotation)\ncalibration for a lidar sensor and several camera sensors of type ",Object(i.mdx)("inlineCode",{parentName:"p"},"PINHOLE"),"."),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-python",metastring:"reference",reference:!0},"https://github.com/annotell/annotell-python/blob/master/annotell-input-api/examples/calibration/calibration.py\n")),Object(i.mdx)("h3",{id:"listing-existing-calibrations"},"Listing existing calibrations"),Object(i.mdx)("p",null,"As a final step we can fetch the calibration via the external id. This can either be done via the client, or via the CLI annoutil tool."),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-python"},'client.calibration.get_calibration(external_id="Collection 2020-06-16")\n')),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-bash"},'$ annoutil calibration --external-id "Collection 2020-06-16"\n')))}d.isMDXComponent=!0}}]);
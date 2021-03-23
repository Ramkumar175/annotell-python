(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{107:function(e,t,a){"use strict";a.r(t),a.d(t,"MDXContext",(function(){return m})),a.d(t,"MDXProvider",(function(){return b})),a.d(t,"mdx",(function(){return h})),a.d(t,"useMDXComponents",(function(){return s})),a.d(t,"withMDXComponents",(function(){return p}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=r.a.createContext({}),p=function(e){return function(t){var a=s(t.components);return r.a.createElement(e,o({},t,{components:a}))}},s=function(e){var t=r.a.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},b=function(e){var t=s(e.components);return r.a.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),m=s(a),p=n,b=m["".concat(o,".").concat(p)]||m[p]||u[p]||i;return a?r.a.createElement(b,l(l({ref:t},c),{},{components:a})):r.a.createElement(b,l({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var d=2;d<i;d++)o[d]=a[d];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}f.displayName="MDXCreateElement"},42:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a(3),r=(a(0),a(107));const i={title:"Calibration"},o={unversionedId:"input-api/calibration",id:"input-api/calibration",isDocsHomePage:!1,title:"Calibration",description:"Inputs including both a 2D and 3D representation such as lidars_and_cameras require a calibration relating the camera sensors with the lidar sensors in terms of location and rotation. The calibration should also contain the required information for projecting 3D points into the image plane of the camera.",source:"@site/docs/input-api/calibration.md",slug:"/input-api/calibration",permalink:"/annotell-python/docs/input-api/calibration",editUrl:"https://github.com/annotell/annotell-python/edit/gh-pages/docs-src/docs/input-api/calibration.md",version:"current",sidebar:"docs",previous:{title:"LidarsAndCamerasSeq",permalink:"/annotell-python/docs/input-api/inputs/lidars_and_cameras_seq"},next:{title:"Errors",permalink:"/annotell-python/docs/input-api/error_handling"}},c=[{value:"Example: Creating a calibration",id:"example-creating-a-calibration",children:[{value:"Listing existing calibrations",id:"listing-existing-calibrations",children:[]}]}],l={rightToc:c};function d({components:e,...t}){return Object(r.mdx)("wrapper",Object(n.default)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(r.mdx)("p",null,"Inputs including both a 2D and 3D representation such as ",Object(r.mdx)("strong",{parentName:"p"},"lidars_and_cameras")," require a calibration relating the camera sensors with the lidar sensors in terms of location and rotation. The calibration should also contain the required information for projecting 3D points into the image plane of the camera."),Object(r.mdx)("p",null,"A Calibration object consists of a set of key-value pairs where the key is the name of the sensor (i.e. sensor name) and the value is either a ",Object(r.mdx)("em",{parentName:"p"},"LidarCalibration")," object or a ",Object(r.mdx)("em",{parentName:"p"},"CameraCalibration")," object depending on the sensor."),Object(r.mdx)("p",null,"A lidar calibration is represented as a ",Object(r.mdx)("em",{parentName:"p"},"LidarCalibration")," object and consists of a position expressed with three coordinates and a rotation in the form of a ",Object(r.mdx)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Quaternions_and_spatial_rotation"},"Quaternion"),". See the code example below for creating a basic ",Object(r.mdx)("em",{parentName:"p"},"LidarCalibration")," object."),Object(r.mdx)("p",null,"The Camera calibration format is based on ",Object(r.mdx)("a",{parentName:"p",href:"https://docs.opencv.org/3.4/d4/d94/tutorial_camera_calibration.html"},"OpenCVs")," format and this ",Object(r.mdx)("a",{parentName:"p",href:"http://www.robots.ox.ac.uk/~cmei/articles/single_viewpoint_calib_mei_07.pdf"},"paper"),". Currently three different camera types are supported: ",Object(r.mdx)("inlineCode",{parentName:"p"},"PINHOLE"),", ",Object(r.mdx)("inlineCode",{parentName:"p"},"FISHEYE")," and ",Object(r.mdx)("inlineCode",{parentName:"p"},"KANNALA"),". The camera calibration consists of the following set of key-value pairs."),Object(r.mdx)("table",null,Object(r.mdx)("thead",{parentName:"table"},Object(r.mdx)("tr",{parentName:"thead"},Object(r.mdx)("th",{parentName:"tr",align:"left"},"Key"),Object(r.mdx)("th",{parentName:"tr",align:"left"},"Value"))),Object(r.mdx)("tbody",{parentName:"table"},Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:"left"},"rotation_quaternion"),Object(r.mdx)("td",{parentName:"tr",align:"left"},"A RotationQuaternion object")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:"left"},"position"),Object(r.mdx)("td",{parentName:"tr",align:"left"},"A Position object")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:"left"},"camera_matrix"),Object(r.mdx)("td",{parentName:"tr",align:"left"},"A CameraMatrix object")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:"left"},"camera_properties"),Object(r.mdx)("td",{parentName:"tr",align:"left"},"A CameraProperty object")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:"left"},"distortion_coefficients"),Object(r.mdx)("td",{parentName:"tr",align:"left"},"A DistortionCoefficients object. Please note that the coefficient ",Object(r.mdx)("em",{parentName:"td"},"k3")," should be equal to None if the camera type is ",Object(r.mdx)("em",{parentName:"td"},"Kannala"),Object(r.mdx)("strong",{parentName:"td"},"."))),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:"left"},"image_height"),Object(r.mdx)("td",{parentName:"tr",align:"left"},"Integer")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:"left"},"image_width"),Object(r.mdx)("td",{parentName:"tr",align:"left"},"Integer")),Object(r.mdx)("tr",{parentName:"tbody"},Object(r.mdx)("td",{parentName:"tr",align:"left"},"undistortion_coefficients"),Object(r.mdx)("td",{parentName:"tr",align:"left"},"(",Object(r.mdx)("strong",{parentName:"td"},"Optional",")")," An UndistortionCoefficients object. This is only used for ",Object(r.mdx)("em",{parentName:"td"},"Kannala")," cameras.")))),Object(r.mdx)("h2",{id:"example-creating-a-calibration"},"Example: Creating a calibration"),Object(r.mdx)("p",null,"The following example code shows how you can create a ",Object(r.mdx)("em",{parentName:"p"},"unity")," (i.e. we assume that all sensors are placed at origin and have no rotation) calibration for a lidar sensor and several camera sensors of type ",Object(r.mdx)("inlineCode",{parentName:"p"},"PINHOLE"),"."),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-python",metastring:"reference",reference:!0},"https://github.com/annotell/annotell-python/blob/master/annotell-input-api/examples/calibration.py\n")),Object(r.mdx)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.mdx)("div",{parentName:"div",className:"admonition-heading"},Object(r.mdx)("h5",{parentName:"div"},Object(r.mdx)("span",{parentName:"h5",className:"admonition-icon"},Object(r.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"reuse calibration")),Object(r.mdx)("div",{parentName:"div",className:"admonition-content"},Object(r.mdx)("p",{parentName:"div"},"Note that you can, and should, reuse the same calibration for multiple inputs if possible."))),Object(r.mdx)("h3",{id:"listing-existing-calibrations"},"Listing existing calibrations"),Object(r.mdx)("p",null,"As a final step we can fetch the calibration via the external id. This can either be done via the client, or via the CLI annoutil tool. "),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-python"},'client.calibration.get_calibration(external_id="Collection 2020-06-16")\n')),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-bash"},'$ annoutil calibration --external-id "Collection 2020-06-16"\n')))}d.isMDXComponent=!0}}]);
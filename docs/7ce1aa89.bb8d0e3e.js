(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return m})),n.d(t,"MDXProvider",(function(){return u})),n.d(t,"mdx",(function(){return b})),n.d(t,"useMDXComponents",(function(){return l})),n.d(t,"withMDXComponents",(function(){return p}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var m=i.a.createContext({}),p=function(e){return function(t){var n=l(t.components);return i.a.createElement(e,o({},t,{components:n}))}},l=function(e){var t=i.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return i.a.createElement(m.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},v=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),m=l(n),p=a,u=m["".concat(o,".").concat(p)]||m[p]||h[p]||r;return n?i.a.createElement(u,s(s({ref:t},c),{},{components:n})):i.a.createElement(u,s({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=v;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var d=2;d<r;d++)o[d]=n[d];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}v.displayName="MDXCreateElement"},46:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(3),i=(n(0),n(113));const r={title:"Lidars and Cameras Sequence"},o={unversionedId:"input-api/inputs/lidars_and_cameras_seq",id:"input-api/inputs/lidars_and_cameras_seq",isDocsHomePage:!1,title:"Lidars and Cameras Sequence",description:"A LidarsAndCamerasSeq input consists of a sequence of camera images and lidar point clouds, where each frame consists on 1-9 camera images as well as a single cloud. For more documentation on what each field corresponds to in the LidarsAndCamerasSeq object please check the section related to Input Overview.",source:"@site/docs/input-api/inputs/lidars_and_cameras_seq.md",slug:"/input-api/inputs/lidars_and_cameras_seq",permalink:"/annotell-python/docs/input-api/inputs/lidars_and_cameras_seq",editUrl:"https://github.com/annotell/annotell-python/edit/gh-pages/docs-src/docs/input-api/inputs/lidars_and_cameras_seq.md",version:"current",sidebar:"docs",previous:{title:"Lidars Sequence",permalink:"/annotell-python/docs/input-api/inputs/lidars_seq"},next:{title:"Working with Inputs",permalink:"/annotell-python/docs/input-api/working_with_inputs"}},c=[{value:"Providing Ego Vehicle Motion Information",id:"providing-ego-vehicle-motion-information",children:[]}],s={rightToc:c};function d({components:e,...t}){return Object(i.mdx)("wrapper",Object(a.default)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"A ",Object(i.mdx)("inlineCode",{parentName:"p"},"LidarsAndCamerasSeq")," input consists of a sequence of camera images and lidar point clouds, where each frame consists on 1-9 camera images as well as a single cloud. For more documentation on what each field corresponds to in the ",Object(i.mdx)("inlineCode",{parentName:"p"},"LidarsAndCamerasSeq")," object please check the section related to ",Object(i.mdx)("a",{parentName:"p",href:"/docs/input-api/overview"},"Input Overview"),"."),Object(i.mdx)("div",{className:"admonition admonition-info alert alert--info"},Object(i.mdx)("div",{parentName:"div",className:"admonition-heading"},Object(i.mdx)("h5",{parentName:"div"},Object(i.mdx)("span",{parentName:"h5",className:"admonition-icon"},Object(i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"no multi-lidar support currently")),Object(i.mdx)("div",{parentName:"div",className:"admonition-content"},Object(i.mdx)("p",{parentName:"div"},"Currently there is only support for supplying a single point cloud per frame."))),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-python",metastring:"reference",reference:!0},"https://github.com/annotell/annotell-python/blob/master/annotell-input-api/examples/lidars_and_cameras_seq.py\n")),Object(i.mdx)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.mdx)("div",{parentName:"div",className:"admonition-heading"},Object(i.mdx)("h5",{parentName:"div"},Object(i.mdx)("span",{parentName:"h5",className:"admonition-icon"},Object(i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Use dryrun to validate input")),Object(i.mdx)("div",{parentName:"div",className:"admonition-content"},Object(i.mdx)("p",{parentName:"div"},"Setting ",Object(i.mdx)("inlineCode",{parentName:"p"},"dryrun")," parameter to true in the method call, will validate the input using the Input API but not create any inputs."))),Object(i.mdx)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.mdx)("div",{parentName:"div",className:"admonition-heading"},Object(i.mdx)("h5",{parentName:"div"},Object(i.mdx)("span",{parentName:"h5",className:"admonition-icon"},Object(i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"reuse calibration")),Object(i.mdx)("div",{parentName:"div",className:"admonition-content"},Object(i.mdx)("p",{parentName:"div"},"Note that you can, and should, reuse the same calibration for multiple inputs if possible."))),Object(i.mdx)("h2",{id:"providing-ego-vehicle-motion-information"},"Providing Ego Vehicle Motion Information"),Object(i.mdx)("p",null,"Ego vehicle motion (i.e. the position and rotation of the ego vehicle) is optional information that can be provided when creating ",Object(i.mdx)("inlineCode",{parentName:"p"},"LidarsAndCamerasSeq")," inputs. This information can enable a massive reduction in the time it takes to annotate static objects. Ego vehicle motion information is provided by passing a ",Object(i.mdx)("inlineCode",{parentName:"p"},"EgoVehicleMotion")," object to ",Object(i.mdx)("strong",{parentName:"p"},"each")," ",Object(i.mdx)("inlineCode",{parentName:"p"},"Frame")," in the input."),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-python",metastring:"reference",reference:!0},"https://github.com/annotell/annotell-python/blob/master/annotell-input-api/examples/lidars_and_cameras_seq_full.py\n")),Object(i.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.mdx)("div",{parentName:"div",className:"admonition-heading"},Object(i.mdx)("h5",{parentName:"div"},Object(i.mdx)("span",{parentName:"h5",className:"admonition-icon"},Object(i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Coordinate Systems")),Object(i.mdx)("div",{parentName:"div",className:"admonition-content"},Object(i.mdx)("p",{parentName:"div"},"Note that both ",Object(i.mdx)("inlineCode",{parentName:"p"},"position")," and ",Object(i.mdx)("inlineCode",{parentName:"p"},"rotation")," for ego vehicle pose are with respect to the ",Object(i.mdx)("em",{parentName:"p"},"local")," coordinate system."))))}d.isMDXComponent=!0}}]);
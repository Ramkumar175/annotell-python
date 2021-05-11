(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return u})),n.d(t,"MDXProvider",(function(){return d})),n.d(t,"mdx",(function(){return h})),n.d(t,"useMDXComponents",(function(){return l})),n.d(t,"withMDXComponents",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),m=function(e){return function(t){var n=l(t.components);return a.a.createElement(e,i({},t,{components:n}))}},l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,d=u["".concat(i,".").concat(m)]||u[m]||f[m]||o;return n?a.a.createElement(d,s(s({ref:t},c),{},{components:n})):a.a.createElement(d,s({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},39:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(8),o=(n(0),n(106)),i={title:"CamerasSeq"},c={unversionedId:"input-api/inputs/cameras_seq",id:"input-api/inputs/cameras_seq",isDocsHomePage:!1,title:"CamerasSeq",description:"A CamerasSeq input consists of a sequence of camera images, where each frame can contain between 1-8 images from different sensors. For more documentation on what each field corresponds to in the CamerasSeq object please check the section related to Input Overview.",source:"@site/docs/input-api/inputs/cameras_seq.md",slug:"/input-api/inputs/cameras_seq",permalink:"/annotell-python/docs/input-api/inputs/cameras_seq",editUrl:"https://github.com/annotell/annotell-python/edit/gh-pages/docs-src/docs/input-api/inputs/cameras_seq.md",version:"current",sidebar:"docs",previous:{title:"LidarsAndCameras",permalink:"/annotell-python/docs/input-api/inputs/lidars_and_cameras"},next:{title:"LidarsAndCamerasSeq",permalink:"/annotell-python/docs/input-api/inputs/lidars_and_cameras_seq"}},s=[],p={rightToc:s};function u(e){var t=e.components,n=Object(a.default)(e,["components"]);return Object(o.mdx)("wrapper",Object(r.default)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"A ",Object(o.mdx)("inlineCode",{parentName:"p"},"CamerasSeq")," input consists of a sequence of camera images, where each frame can contain between 1-8 images from different sensors. For more documentation on what each field corresponds to in the ",Object(o.mdx)("inlineCode",{parentName:"p"},"CamerasSeq")," object please check the section related to ",Object(o.mdx)("a",{parentName:"p",href:"/docs/input-api/overview"},"Input Overview"),"."),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-python",metastring:"reference",reference:!0},"https://github.com/annotell/annotell-python/blob/master/annotell-input-api/examples/cameras_seq_images.py\n")),Object(o.mdx)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.mdx)("div",{parentName:"div",className:"admonition-heading"},Object(o.mdx)("h5",{parentName:"div"},Object(o.mdx)("span",{parentName:"h5",className:"admonition-icon"},Object(o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Use dryrun to validate input")),Object(o.mdx)("div",{parentName:"div",className:"admonition-content"},Object(o.mdx)("p",{parentName:"div"},"Setting ",Object(o.mdx)("inlineCode",{parentName:"p"},"dryrun")," parameter to true in the method call, will validate the input using the Input API but not create any inputs."))))}u.isMDXComponent=!0}}]);
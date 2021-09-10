(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{110:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return l})),n.d(t,"MDXProvider",(function(){return m})),n.d(t,"mdx",(function(){return b})),n.d(t,"useMDXComponents",(function(){return d})),n.d(t,"withMDXComponents",(function(){return u}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){return function(t){var n=d(t.components);return a.a.createElement(e,o({},t,{components:n}))}},d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),l=d(n),u=r,m=l["".concat(o,".").concat(u)]||l[u]||f[u]||i;return n?a.a.createElement(m,p(p({ref:t},c),{},{components:n})):a.a.createElement(m,p({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},49:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),a=(n(0),n(110));const i={title:"Lidars"},o={unversionedId:"input-api/inputs/lidars",id:"input-api/inputs/lidars",isDocsHomePage:!1,title:"Lidars",description:"A Lidars input consists of a single frame which a single pointcloud. For more documentation on what each field corresponds to in the Lidars object please check the section related to Input Overview.",source:"@site/docs/input-api/inputs/lidars.md",slug:"/input-api/inputs/lidars",permalink:"/annotell-python/docs/input-api/inputs/lidars",editUrl:"https://github.com/annotell/annotell-python/edit/gh-pages/docs-src/docs/input-api/inputs/lidars.md",version:"current",sidebar:"docs",previous:{title:"Cameras",permalink:"/annotell-python/docs/input-api/inputs/cameras"},next:{title:"Lidars and Cameras",permalink:"/annotell-python/docs/input-api/inputs/lidars_and_cameras"}},c=[],p={rightToc:c};function s({components:e,...t}){return Object(a.mdx)("wrapper",Object(r.default)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"A ",Object(a.mdx)("inlineCode",{parentName:"p"},"Lidars")," input consists of a ",Object(a.mdx)("em",{parentName:"p"},"single")," frame which a single pointcloud. For more documentation on what each field corresponds to in the ",Object(a.mdx)("inlineCode",{parentName:"p"},"Lidars")," object please check the section related to ",Object(a.mdx)("a",{parentName:"p",href:"/docs/input-api/overview"},"Input Overview"),"."),Object(a.mdx)("pre",null,Object(a.mdx)("code",{parentName:"pre",className:"language-python",metastring:"reference",reference:!0},"https://github.com/annotell/annotell-python/blob/master/annotell-input-api/examples/lidars.py\n")),Object(a.mdx)("div",{className:"admonition admonition-tip alert alert--success"},Object(a.mdx)("div",{parentName:"div",className:"admonition-heading"},Object(a.mdx)("h5",{parentName:"div"},Object(a.mdx)("span",{parentName:"h5",className:"admonition-icon"},Object(a.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(a.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Use dryrun to validate input")),Object(a.mdx)("div",{parentName:"div",className:"admonition-content"},Object(a.mdx)("p",{parentName:"div"},"Setting ",Object(a.mdx)("inlineCode",{parentName:"p"},"dryrun")," parameter to true in the method call, will validate the input using the Input API but not create any inputs."))))}s.isMDXComponent=!0}}]);
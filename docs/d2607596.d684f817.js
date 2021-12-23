(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return p})),n.d(t,"MDXProvider",(function(){return m})),n.d(t,"mdx",(function(){return b})),n.d(t,"useMDXComponents",(function(){return u})),n.d(t,"withMDXComponents",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),d=function(e){return function(t){var n=u(t.components);return o.a.createElement(e,i({},t,{components:n}))}},u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||f[d]||a;return n?o.a.createElement(m,c(c({ref:t},s),{},{components:n})):o.a.createElement(m,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},56:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(8),a=(n(0),n(113)),i={title:"Point clouds"},s={unversionedId:"input-api/resources/pointclouds",id:"input-api/resources/pointclouds",isDocsHomePage:!1,title:"Point clouds",description:"The Input API allows uploading of annotation project related data such as images and point clouds. Annotell uses a potree format internally to represent and present point clouds, this means that uploaded point cloud data needs to be converted into this format before it can be used as input in the system. We currently support automatic conversion of three formats: pcd, csv and las. The converter does not however exhaustively support all possible versions of these formats, see below for details of each format.",source:"@site/docs/input-api/resources/pointclouds.md",slug:"/input-api/resources/pointclouds",permalink:"/annotell-python/docs/input-api/resources/pointclouds",editUrl:"https://github.com/annotell/annotell-python/edit/gh-pages/docs-src/docs/input-api/resources/pointclouds.md",version:"current",sidebar:"docs",previous:{title:"Images",permalink:"/annotell-python/docs/input-api/resources/images"},next:{title:"OpenLABEL format",permalink:"/annotell-python/docs/openlabel/openlabel-format"}},c=[{value:"PCD",id:"pcd",children:[]},{value:"CSV",id:"csv",children:[]},{value:"LAS",id:"las",children:[]}],l={rightToc:c};function p(e){var t=e.components,n=Object(o.default)(e,["components"]);return Object(a.mdx)("wrapper",Object(r.default)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The Input API allows uploading of annotation project related data such as images and point clouds. Annotell uses a potree format internally to represent and present point clouds, this means that uploaded point cloud data needs to be converted into this format before it can be used as input in the system. We currently support automatic conversion of three formats: ",Object(a.mdx)("strong",{parentName:"p"},"pcd"),", ",Object(a.mdx)("strong",{parentName:"p"},"csv")," and ",Object(a.mdx)("strong",{parentName:"p"},"las"),". The converter does not however exhaustively support all possible versions of these formats, see below for details of each format."),Object(a.mdx)("p",null,"It might also be worth noticing that timestamp, color, and other auxillary data is currently discarded in the conversion. Timestamps because our potree version does not support timestamps, and color because it is currently not used in the system."),Object(a.mdx)("h2",{id:"pcd"},"PCD"),Object(a.mdx)("p",null,"The currently supported format includes the following header:"),Object(a.mdx)("pre",null,Object(a.mdx)("code",{parentName:"pre"},"VERSION .7\nFIELDS x y z intensity\nSIZE 4 4 4 4\nTYPE F F F U\nCOUNT 1 1 1 1\nWIDTH <w>\nHEIGHT <h>\nVIEWPOINT 0 0 0 1 0 0 0\nPOINTS <n>\nDATA ascii\n")),Object(a.mdx)("p",null,"We validate ",Object(a.mdx)("inlineCode",{parentName:"p"},"VERSION"),", ",Object(a.mdx)("inlineCode",{parentName:"p"},"FIELDS"),", ",Object(a.mdx)("inlineCode",{parentName:"p"},"SIZE"),", ",Object(a.mdx)("inlineCode",{parentName:"p"},"TYPE")," and ",Object(a.mdx)("inlineCode",{parentName:"p"},"COUNT")," rows of this header. All other formats will result in an error and the conversion will fail."),Object(a.mdx)("h2",{id:"csv"},"CSV"),Object(a.mdx)("p",null,"We currently only support the following exact header and separation character (where ",Object(a.mdx)("inlineCode",{parentName:"p"},"intensity")," is uint8 and ",Object(a.mdx)("inlineCode",{parentName:"p"},"ts_gps"),", ",Object(a.mdx)("inlineCode",{parentName:"p"},"x"),", ",Object(a.mdx)("inlineCode",{parentName:"p"},"y"),", ",Object(a.mdx)("inlineCode",{parentName:"p"},"z")," are all float32):"),Object(a.mdx)("pre",null,Object(a.mdx)("code",{parentName:"pre"},"ts_gps,x,y,z,intensity\n")),Object(a.mdx)("p",null,"All other formats will fail."),Object(a.mdx)("h2",{id:"las"},"LAS"),Object(a.mdx)("p",null,"We currently support version 1.2 and point format id 3, as defined in the ",Object(a.mdx)("a",{parentName:"p",href:"https://www.asprs.org/a/society/committees/standards/asprs_las_format_v12.pdf"},"las 1.2 specification"),". All other formats will cause the conversion to fail."))}p.isMDXComponent=!0}}]);
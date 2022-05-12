(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{114:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return l})),n.d(t,"MDXProvider",(function(){return f})),n.d(t,"mdx",(function(){return y})),n.d(t,"useMDXComponents",(function(){return d})),n.d(t,"withMDXComponents",(function(){return s}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){return function(t){var n=d(t.components);return o.a.createElement(e,a({},t,{components:n}))}},d=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},f=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),l=d(n),s=r,f=l["".concat(a,".").concat(s)]||l[s]||m[s]||i;return n?o.a.createElement(f,p(p({ref:t},c),{},{components:n})):o.a.createElement(f,p({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=h;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},58:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(8),i=(n(0),n(114)),a={title:"Errors",description:"Dealing with Errors"},c={unversionedId:"input-api/error_handling",id:"input-api/error_handling",isDocsHomePage:!1,title:"Errors",description:"Dealing with Errors",source:"@site/docs/input-api/error_handling.md",slug:"/input-api/error_handling",permalink:"/annotell-python/docs/input-api/error_handling",editUrl:"https://github.com/annotell/annotell-python/edit/gh-pages/docs-src/docs/input-api/error_handling.md",version:"current",sidebar:"docs",previous:{title:"Calibration",permalink:"/annotell-python/docs/input-api/calibration"},next:{title:"FAQ",permalink:"/annotell-python/docs/input-api/FAQ"}},p=[],u={rightToc:p};function l(e){var t=e.components,n=Object(o.default)(e,["components"]);return Object(i.mdx)("wrapper",Object(r.default)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"When the client sends a http request to the Input API and waits until it receives a response. If the response code is ",Object(i.mdx)("inlineCode",{parentName:"p"},"2xx")," ","(","the status code for a successful call",")"," the client converts the received message into a python object which can be viewed or used. However if the Input API responds with an error code ","(",Object(i.mdx)("inlineCode",{parentName:"p"},"4xx")," or ",Object(i.mdx)("inlineCode",{parentName:"p"},"5xx"),")"," the python client will raise an error. It's up to the user to decide if and how they want to handle this error."))}l.isMDXComponent=!0}}]);
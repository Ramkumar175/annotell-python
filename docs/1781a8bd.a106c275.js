(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return p})),n.d(t,"MDXProvider",(function(){return m})),n.d(t,"mdx",(function(){return b})),n.d(t,"useMDXComponents",(function(){return d})),n.d(t,"withMDXComponents",(function(){return s}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){return function(t){var n=d(t.components);return a.a.createElement(e,i({},t,{components:n}))}},d=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=d(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=d(n),s=r,m=p["".concat(i,".").concat(s)]||p[s]||h[s]||o;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},35:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),o=(n(0),n(107)),i={id:"annotell-auth",title:"Annotell Auth",description:"How to authenticate with Annotell APIs"},l={unversionedId:"annotell-auth",id:"annotell-auth",isDocsHomePage:!1,title:"Annotell Auth",description:"How to authenticate with Annotell APIs",source:"@site/docs/annotell_auth.md",slug:"/annotell-auth",permalink:"/annotell-python/docs/annotell-auth",editUrl:"https://github.com/annotell/annotell-python/edit/gh-pages/docs-src/docs/annotell_auth.md",version:"current",sidebar:"docs",next:{title:"Key Concepts",permalink:"/annotell-python/docs/"}},c=[],u={rightToc:c};function p(e){var t=e.components,n=Object(a.default)(e,["components"]);return Object(o.mdx)("wrapper",Object(r.default)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Authentication is handled by ",Object(o.mdx)("a",{parentName:"p",href:"https://pypi.org/project/annotell-auth/"},"annotell-auth"),", a Python 3 library providing foundations for Annotell Authentication on top of the requests library."),Object(o.mdx)("p",null,"Builds on the standard Oauth 2.0 Client Credentials flow. There are a few ways to provide auth credentials to our api clients. Annotell Python clients such as in  annotell-query or annotell-input-api accept an auth parameter that can be set explicitly or you can omit it and use environment variables."),Object(o.mdx)("p",null,"To create an authenticated input-api client, simply do this:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-python"},"from annotell.input_api.input_api_client import InputApiClient\n\napi_client = InputApiClient()\n")),Object(o.mdx)("p",null,"This uses the credentials found in ",Object(o.mdx)("inlineCode",{parentName:"p"},"ANNOTELL_CREDENTIALS")," environment variable. Or override explicitly:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-python"},'from annotell.input_api.input_api_client import InputApiClient\n\napi_client = InputApiClient(auth="~/.config/annotell/credentials.json")\n')),Object(o.mdx)("p",null,"There are a few ways to set your credentials in auth."),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Set the environment variable ",Object(o.mdx)("inlineCode",{parentName:"li"},"ANNOTELL_CREDENTIALS")," to point to your Annotell Credentials file. The credentials will contain the Client Id and Client Secret."),Object(o.mdx)("li",{parentName:"ul"},"Set to the credentials file path like ",Object(o.mdx)("inlineCode",{parentName:"li"},'auth="~/.config/annotell/credentials.json"')),Object(o.mdx)("li",{parentName:"ul"},"Set environment variables ",Object(o.mdx)("inlineCode",{parentName:"li"},"ANNOTELL_CLIENT_ID")," and ",Object(o.mdx)("inlineCode",{parentName:"li"},"ANNOTELL_CLIENT_SECRET")),Object(o.mdx)("li",{parentName:"ul"},"Set to credentials tuple ",Object(o.mdx)("inlineCode",{parentName:"li"},"auth=(client_id, client_secret)"))),Object(o.mdx)("p",null,"API clients such as the InputApiClient accept this auth parameter.\nUnder the hood, they all use the AuthSession class which is implements a requests session with automatic token refresh."))}p.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return u})),n.d(t,"MDXProvider",(function(){return m})),n.d(t,"mdx",(function(){return b})),n.d(t,"useMDXComponents",(function(){return d})),n.d(t,"withMDXComponents",(function(){return l}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),l=function(e){return function(t){var n=d(t.components);return i.a.createElement(e,o({},t,{components:n}))}},d=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=d(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=d(n),l=r,m=u["".concat(o,".").concat(l)]||u[l]||f[l]||a;return n?i.a.createElement(m,s(s({ref:t},c),{},{components:n})):i.a.createElement(m,s({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<a;p++)o[p]=n[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},49:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(8),a=(n(0),n(113)),o={title:"FAQ",description:"FAQ"},c={unversionedId:"input-api/FAQ",id:"input-api/FAQ",isDocsHomePage:!1,title:"FAQ",description:"FAQ",source:"@site/docs/input-api/FAQ.md",slug:"/input-api/FAQ",permalink:"/annotell-python/docs/input-api/FAQ",editUrl:"https://github.com/annotell/annotell-python/edit/gh-pages/docs-src/docs/input-api/FAQ.md",version:"current",sidebar:"docs",previous:{title:"Errors",permalink:"/annotell-python/docs/input-api/error_handling"},next:{title:"Images",permalink:"/annotell-python/docs/input-api/resources/images"}},s=[{value:"Receiving <code>requests.exceptions.HTTPError: 403 Client Error: Forbidden for url: ...</code> when trying to create inputs",id:"receiving-requestsexceptionshttperror-403-client-error-forbidden-for-url--when-trying-to-create-inputs",children:[]},{value:"How do I know that my input was created successfully?",id:"how-do-i-know-that-my-input-was-created-successfully",children:[]},{value:"How can I view my input?",id:"how-can-i-view-my-input",children:[]}],p={rightToc:s};function u(e){var t=e.components,n=Object(i.default)(e,["components"]);return Object(a.mdx)("wrapper",Object(r.default)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("h3",{id:"receiving-requestsexceptionshttperror-403-client-error-forbidden-for-url--when-trying-to-create-inputs"},"Receiving ",Object(a.mdx)("inlineCode",{parentName:"h3"},"requests.exceptions.HTTPError: 403 Client Error: Forbidden for url: ...")," when trying to create inputs"),Object(a.mdx)("p",null,"This implies that the authenticated user does not have access to the endpoint being called. Make sure you're ",Object(a.mdx)("a",{parentName:"p",href:"../annotell-auth"},"authenticating")," correctly. If an Annotell user, make sure ",Object(a.mdx)("inlineCode",{parentName:"p"},"client_organization_id")," is specified on the ",Object(a.mdx)("inlineCode",{parentName:"p"},"InputApiClient"),"."),Object(a.mdx)("h3",{id:"how-do-i-know-that-my-input-was-created-successfully"},"How do I know that my input was created successfully?"),Object(a.mdx)("p",null,"Whenever a ",Object(a.mdx)("inlineCode",{parentName:"p"},".create(...)")," call for an input has been successfully made it's (asynchronously) submitted for pre-processing in the Annotell platform. The input is available only once the pre-processing has been successfully executed. However, pre-processing can also fail, for example if the pointcloud or image files are poorly formatted or corrupt. "),Object(a.mdx)("p",null,"The easiest way to check the status of an input is the ",Object(a.mdx)("a",{parentName:"p",href:"./working_with_inputs#input-status"},"input status")," field present on inputs returned by the methods ",Object(a.mdx)("inlineCode",{parentName:"p"},"get_inputs(...)")," and ",Object(a.mdx)("inlineCode",{parentName:"p"},"get_inputs_by_uuids(...)"),". The input is successfully created and available in the platform once the status is set to ",Object(a.mdx)("inlineCode",{parentName:"p"},"created"),". "),Object(a.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.mdx)("div",{parentName:"div",className:"admonition-heading"},Object(a.mdx)("h5",{parentName:"div"},Object(a.mdx)("span",{parentName:"h5",className:"admonition-icon"},Object(a.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(a.mdx)("div",{parentName:"div",className:"admonition-content"},Object(a.mdx)("p",{parentName:"div"},"Since pre-processing is an asynchronous process it might take a while before the input changes status from ",Object(a.mdx)("inlineCode",{parentName:"p"},"processing")," to either ",Object(a.mdx)("inlineCode",{parentName:"p"},"created")," or ",Object(a.mdx)("inlineCode",{parentName:"p"},"failed"),". "))),Object(a.mdx)("pre",null,Object(a.mdx)("code",{parentName:"pre",className:"language-python"},"# Example code of how to check if an input has been successfully created\nresp = client.cameras.create(...)\nuuid = resp.uuid\n\n[i] = client.input.get_inputs_by_uuids(input_uuids=[uuid])\n\n# Successfully created and available once status is `created`\nprint(f'Input {uuid} status:', i.status)\n")),Object(a.mdx)("h3",{id:"how-can-i-view-my-input"},"How can I view my input?"),Object(a.mdx)("p",null,"Successfully created inputs can be viewed in the Annotell platform via their ",Object(a.mdx)("em",{parentName:"p"},"view-link"),". The view-link can be accessed via the ",Object(a.mdx)("a",{parentName:"p",href:"./working_with_inputs#response"},Object(a.mdx)("inlineCode",{parentName:"a"},"view_link"))," field present on inputs returned by the methods ",Object(a.mdx)("inlineCode",{parentName:"p"},"get_inputs(...)")," and ",Object(a.mdx)("inlineCode",{parentName:"p"},"get_inputs_by_uuids(...)"),"."),Object(a.mdx)("pre",null,Object(a.mdx)("code",{parentName:"pre",className:"language-python"},'# Example code of how to access view-links for all inputs in a project\ninputs = client.input.get_inputs(project="project-identifier")\n\nfor i in inputs:\n    print(f"Input {i.external_id} view-link: {i.view_link}")\n')))}u.isMDXComponent=!0}}]);
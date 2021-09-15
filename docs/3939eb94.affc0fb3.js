(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{111:function(n,t,e){"use strict";e.r(t),e.d(t,"MDXContext",(function(){return u})),e.d(t,"MDXProvider",(function(){return f})),e.d(t,"mdx",(function(){return y})),e.d(t,"useMDXComponents",(function(){return d})),e.d(t,"withMDXComponents",(function(){return s}));var a=e(0),o=e.n(a);function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function i(){return(i=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n}).apply(this,arguments)}function c(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,a)}return e}function p(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?c(Object(e),!0).forEach((function(t){r(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function l(n,t){if(null==n)return{};var e,a,o=function(n,t){if(null==n)return{};var e,a,o={},r=Object.keys(n);for(a=0;a<r.length;a++)e=r[a],t.indexOf(e)>=0||(o[e]=n[e]);return o}(n,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(a=0;a<r.length;a++)e=r[a],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(o[e]=n[e])}return o}var u=o.a.createContext({}),s=function(n){return function(t){var e=d(t.components);return o.a.createElement(n,i({},t,{components:e}))}},d=function(n){var t=o.a.useContext(u),e=t;return n&&(e="function"==typeof n?n(t):p(p({},t),n)),e},f=function(n){var t=d(n.components);return o.a.createElement(u.Provider,{value:t},n.children)},m={inlineCode:"code",wrapper:function(n){var t=n.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(n,t){var e=n.components,a=n.mdxType,r=n.originalType,i=n.parentName,c=l(n,["components","mdxType","originalType","parentName"]),u=d(e),s=a,f=u["".concat(i,".").concat(s)]||u[s]||m[s]||r;return e?o.a.createElement(f,p(p({ref:t},c),{},{components:e})):o.a.createElement(f,p({ref:t},c))}));function y(n,t){var e=arguments,a=t&&t.mdxType;if("string"==typeof n||a){var r=e.length,i=new Array(r);i[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=n,c.mdxType="string"==typeof n?n:a,i[1]=c;for(var l=2;l<r;l++)i[l]=e[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,e)}b.displayName="MDXCreateElement"},42:function(n,t,e){"use strict";e.r(t),e.d(t,"frontMatter",(function(){return i})),e.d(t,"metadata",(function(){return c})),e.d(t,"rightToc",(function(){return p})),e.d(t,"default",(function(){return u}));var a=e(3),o=e(8),r=(e(0),e(111)),i={title:"Downloading Annotations"},c={unversionedId:"input-api/annotations",id:"input-api/annotations",isDocsHomePage:!1,title:"Downloading Annotations",description:"Annotations are made available for each input and annotation type as soon as they are quality assured by the Annotell platform. Information about the format can be found in the Key Concepts section.",source:"@site/docs/input-api/annotations.md",slug:"/input-api/annotations",permalink:"/annotell-python/docs/input-api/annotations",editUrl:"https://github.com/annotell/annotell-python/edit/gh-pages/docs-src/docs/input-api/annotations.md",version:"current",sidebar:"docs",previous:{title:"Working with Inputs",permalink:"/annotell-python/docs/input-api/working_with_inputs"},next:{title:"Calibration",permalink:"/annotell-python/docs/input-api/calibration"}},p=[],l={rightToc:p};function u(n){var t=n.components,e=Object(o.a)(n,["components"]);return Object(r.mdx)("wrapper",Object(a.default)({},l,e,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("p",null,"Annotations are made available for each ",Object(r.mdx)("a",{parentName:"p",href:"overview"},"input")," and ",Object(r.mdx)("a",{parentName:"p",href:"annotation_types"},"annotation type")," as soon as they are quality assured by the Annotell platform. Information about the format can be found in the ",Object(r.mdx)("a",{parentName:"p",href:"../#format"},"Key Concepts")," section."),Object(r.mdx)("h4",{id:"v10x-will-be-deprecated-"},"v1.0.x (Will be deprecated) \ud83d\udea8"),Object(r.mdx)("p",null,"Once annotations are available they can be downloaded by supplying a list of ",Object(r.mdx)("inlineCode",{parentName:"p"},"input_uuid"),"s for the corresponding inputs. A dictonary is returned containing available annotations for each input. Several annotations occur if the project is setup in such a way that each input should be annotated with different annotation types, e.g. Lane Markings and Objects."),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-python"},"client.annotation.get_annotations(input_uuids=[\n    'decf6479-d540-459f-b924-a12c2cecf3b5',\n    '5da4f44b-16cb-414a-8dbd-ff5e5afc309a'\n])\n")),Object(r.mdx)("p",null,"A common use case is downloading all completed annotations a project. This can be performed by first fetching all of the inputs added to the project and then filtering to only include inputs with status ",Object(r.mdx)("inlineCode",{parentName:"p"},'"created"')," (see ",Object(r.mdx)("a",{parentName:"p",href:"working_with_inputs#input-status"},"Input Statuses"),")."),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-python",metastring:"reference",reference:!0},"https://github.com/annotell/annotell-python/blob/f2b941373b1dff4297d7705ef0f2587eadbca7b3/annotell-input-api/examples/download_annotations.py#L10-L12\n")),Object(r.mdx)("h4",{id:"v11x-upcoming-release-"},"v1.1.x (Upcoming release) \ud83d\udea7"),Object(r.mdx)("p",null,"Once annotations are available they can be downloaded individually or by project and batch. In both cases annotations are downloaded per annotation type."),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-python"},"\n## Note - NOT FINAL\nannotation: AnnotationModel.Annotation = \\\n    client.annotation.get_annotation(\n        input_uuid='<input_uuid>',\n        annotation_type='<annotation_type>'\n    )\n")),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-python"},"\n## Note - NOT FINAL\nannotations: List[AnnotationModel.Annotation] = \\\n    client.annotation.get_project_annotations(\n        project='<project>',\n        annotation_type='<annotation_type>',\n        batch='<batch>'\n    )\n")))}u.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{53:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(3),i=n(8),o=(n(0),n(94)),r={id:"annotation_types",title:"Annotation Types"},c={unversionedId:"input-api/annotation_types",id:"input-api/annotation_types",isDocsHomePage:!1,title:"Annotation Types",description:"Annotation Types are something that can be configured for a project either during or after",source:"@site/docs/input-api/annotation_types.md",slug:"/input-api/annotation_types",permalink:"/annotell-python/docs/input-api/annotation_types",editUrl:"https://github.com/annotell/annotell-python/edit/gh-pages/docs-src/docs/input-api/annotation_types.md",version:"current",sidebar:"docs",previous:{title:"LidarsAndCamerasSeq",permalink:"/annotell-python/docs/input-api/inputs/lidars_and_cameras_seq"},next:{title:"Working with Inputs",permalink:"/annotell-python/docs/input-api/usage"}},p=[{value:"Examples",id:"examples",children:[{value:"Get Annotation Types for Project",id:"get-annotation-types-for-project",children:[]},{value:"Get Annotation Types for a specified Project Batch",id:"get-annotation-types-for-a-specified-project-batch",children:[]},{value:"Create inputs for specific Annotation Types",id:"create-inputs-for-specific-annotation-types",children:[]},{value:"Create inputs for all Annotation Types in batch",id:"create-inputs-for-all-annotation-types-in-batch",children:[]}]}],l={rightToc:p};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Annotation Types are something that ",Object(o.b)("strong",{parentName:"p"},"can")," be configured for a project either during or after\nthe Guideline Agreement Process (GAP). During the GAP a set of taxonomies are defined\nwhich will be used in order to annotate all the inputs that are uploaded to the platform."),Object(o.b)("p",null,"Annotation Types are identifiers that each map to one of these taxonomies and allows you\nto programmatically define, for every input that you create, what taxonomies that you\nwould like that input to be annotated with. You do not ",Object(o.b)("strong",{parentName:"p"},"need")," to use annotation types\nin a project but by skipping annotation types your inputs would always be created for all\ntaxonomies available in the specified batch."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Add additional Annotation Types")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"It is possible to add additional Annotation Types after a project is created, and\nmake them available to future batches that you create. If you would like Annotation\nTypes to be added to your project please get in touch with Annotell's Professional\nServices team."))),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("p",null,"For the following examples we will be creating ",Object(o.b)("inlineCode",{parentName:"p"},"cameras_sequence")," inputs, however the\nprocedure would be identical for any other input type. We will also assume that the\nproject ",Object(o.b)("inlineCode",{parentName:"p"},"example_project_id")," is configured with the Annotation Types:\n",Object(o.b)("inlineCode",{parentName:"p"},"static_objects"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"dynamic_objects"),", and that they are also available in the batch\n",Object(o.b)("inlineCode",{parentName:"p"},"example_batch_id"),"."),Object(o.b)("h3",{id:"get-annotation-types-for-project"},"Get Annotation Types for Project"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'from annotell.input_api.input_api_client import InputApiClient\n\nclient = InputApiClient()\nproject_annotation_types = client.project.get_annotation_types(project="example_project_id")\n')),Object(o.b)("p",null,"This will return a list of all Annotation Types available in the project."),Object(o.b)("h3",{id:"get-annotation-types-for-a-specified-project-batch"},"Get Annotation Types for a specified Project Batch"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'from annotell.input_api.input_api_client import InputApiClient\n\nclient = InputApiClient()\nbatch_annotation_types = client.project.get_annotation_types(project="example_project_id",\n                                                             batch="example_batch_id")\n')),Object(o.b)("p",null,"This will return a list of all Annotation Types available in the specified batch.\nNote that this list does not need to contain all Annotation Types in the project."),Object(o.b)("h3",{id:"create-inputs-for-specific-annotation-types"},"Create inputs for specific Annotation Types"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'from annotell.input_api.input_api_client import InputApiClient\nfrom annotell.input_api.model.input.cameras_sequence import CamerasSequence\n\nclient = InputApiClient()\ncamera_input = CamerasSequence(external_id=..., frames=...)\nclient.cameras_sequence.create(camera_input,\n                               project="example_project_id",\n                               batch="example_batch_id",\n                               annotation_types=["static_objects", "dynamic_objects"])\n')),Object(o.b)("p",null,"The above example will create a new input which will be annotated for the annotation\ntypes specified. If one or more of the specified annotation types would not be available\nin the specified batch the validation in the Input API would fail. "),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Specifying batch is optional")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"In these examples we have specified which batch the inputs should be created for, but this is optional. If\nno batch is specified the inputs will be created in the latest batch with status ",Object(o.b)("inlineCode",{parentName:"p"},"open"),". "))),Object(o.b)("h3",{id:"create-inputs-for-all-annotation-types-in-batch"},"Create inputs for all Annotation Types in batch"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'from annotell.input_api.input_api_client import InputApiClient\nfrom annotell.input_api.model.input.cameras_sequence import CamerasSequence\n\nclient = InputApiClient()\ncamera_input = CamerasSequence(external_id=..., frames=...)\nclient.cameras_sequence.create(camera_input,\n                               project="example_project_id",\n                               batch="example_batch_id")\n')),Object(o.b)("p",null,"The above example will create a new input which will be annotated for all Annotation\nTypes available in the batch ",Object(o.b)("inlineCode",{parentName:"p"},"example_batch_id"),". However, this way it is not explicit\nwhat Annotation Types that the inputs will be annotated with, and you would not get an\nerror if e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"static_objects")," was missing from the specified batch. "),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Always specify Annotation Types")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"In order to get the best possible validation it is recommended that you always\nspecify annotation types when you create inputs."))))}s.isMDXComponent=!0},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),s=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=s(n),u=a,m=b["".concat(r,".").concat(u)]||b[u]||d[u]||o;return n?i.a.createElement(m,c(c({ref:t},l),{},{components:n})):i.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var l=2;l<o;l++)r[l]=n[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);
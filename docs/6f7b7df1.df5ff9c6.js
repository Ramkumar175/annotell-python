(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{47:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return o}));var n=a(3),i=a(8),r=(a(0),a(94)),c={title:"Working with Inputs"},b={unversionedId:"input-api/usage",id:"input-api/usage",isDocsHomePage:!1,title:"Working with Inputs",description:"Creating Inputs",source:"@site/docs/input-api/usage.md",slug:"/input-api/usage",permalink:"/annotell-python/docs/input-api/usage",editUrl:"https://github.com/annotell/annotell-python/edit/gh-pages/docs-src/docs/input-api/usage.md",version:"current",sidebar:"docs",previous:{title:"Annotation Types",permalink:"/annotell-python/docs/input-api/annotation_types"},next:{title:"Calibration",permalink:"/annotell-python/docs/input-api/calibration"}},l=[{value:"Creating Inputs",id:"creating-inputs",children:[{value:"Adding inputs to latest open batch for a project",id:"adding-inputs-to-latest-open-batch-for-a-project",children:[]},{value:"Adding inputs to specified batchfor a project",id:"adding-inputs-to-specified-batchfor-a-project",children:[]},{value:"Adding inputs to an input list (deprecated)",id:"adding-inputs-to-an-input-list-deprecated",children:[]}]},{value:"Input Status",id:"input-status",children:[]},{value:"List Inputs",id:"list-inputs",children:[{value:"Response",id:"response",children:[]}]},{value:"Invalidate Inputs",id:"invalidate-inputs",children:[]},{value:"List Invalidated Inputs",id:"list-invalidated-inputs",children:[]},{value:"Downloading Annotations",id:"downloading-annotations",children:[]}],p={rightToc:l};function o(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"creating-inputs"},"Creating Inputs"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"For detailed information about different input modalities, check the Input Types section."))),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Annotell Users")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"As an Annotell user, it is possible to specify ",Object(r.b)("inlineCode",{parentName:"p"},"client_organization_id")," to ",Object(r.b)("inlineCode",{parentName:"p"},"InputApiClient")," constructor to create inputs on behalf of a client organization"))),Object(r.b)("p",null,"In order to create inputs, they need to be associated with a ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"project"}),"project")," and an ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"project#batch"}),"input batch"),". Consider the following project setup:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"organization # root for projects\n\u2514\u2500\u2500 projects\n   \u251c\u2500\u2500 project-a\n       \u251c\u2500\u2500 batch-1 - completed\n       \u251c\u2500\u2500 batch-2 - open\n           \u251c\u2500\u2500 input 0edb8f59-a8ea-4c9b-aebb-a3caaa6f2ba3\n           \u251c\u2500\u2500 input 37d9dda4-3a29-4fcb-8a71-6bf16d5a9c36\n           \u2514\u2500\u2500 ...\n       \u2514\u2500\u2500 batch-3 - pending\n   \u2514\u2500\u2500 project-b\n       \u251c\u2500\u2500 batch-1\n       \u2514\u2500\u2500 ...\n")),Object(r.b)("p",null,"There are 3 ways in order to create inputs"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Adding inputs to latest open batch for a project"),Object(r.b)("li",{parentName:"ul"},"Adding inputs to specified batch for a project"),Object(r.b)("li",{parentName:"ul"},"Adding inputs to an input list (deprecated)")),Object(r.b)("p",null,"The following examples all use an input of type ",Object(r.b)("inlineCode",{parentName:"p"},"Cameras"),", however the interface applies to all input types."),Object(r.b)("h3",{id:"adding-inputs-to-latest-open-batch-for-a-project"},"Adding inputs to latest open batch for a project"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'client.cameras.create(\n    ...,\n    project="project-a")\n')),Object(r.b)("p",null,"Will add inputs to ",Object(r.b)("inlineCode",{parentName:"p"},"project-a")," ",Object(r.b)("inlineCode",{parentName:"p"},"batch-2")," because it's the latest open batch."),Object(r.b)("h3",{id:"adding-inputs-to-specified-batchfor-a-project"},"Adding inputs to specified batchfor a project"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'client.cameras.create(\n    ...,\n    project="project-a",\n    batch="batch-3")\n')),Object(r.b)("p",null,"Will add inputs to ",Object(r.b)("inlineCode",{parentName:"p"},"project-a")," ",Object(r.b)("inlineCode",{parentName:"p"},"batch-3"),"."),Object(r.b)("h3",{id:"adding-inputs-to-an-input-list-deprecated"},"Adding inputs to an input list (deprecated)"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"client.cameras.create(\n    ...,\n    input_list_id=500)\n")),Object(r.b)("p",null,"Will add inputs to input list ",Object(r.b)("inlineCode",{parentName:"p"},"500"),"."),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"deprecated input_list_id")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Using input lists is deprecated and will be removed in future releases"))),Object(r.b)("h2",{id:"input-status"},"Input Status"),Object(r.b)("p",null,"Once an input has been created, it might be preprocessed before being made available for annotation. Also, postprocessing such as conversion to the client-specific format might take place after annotation has been performed. During this process, the status property of an input can be used to keep track of progress."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Status"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"processing"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Input has been received and currently processed by Annotell Platform, potentially performing conversion of file formats")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"created"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Input is created and available for annotation")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"failed"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Conversion of input failed")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"invalidated:broken-input"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Input was invalidated since it did not load")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"invalidated:duplicate"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Input was invalidated due to being uploaded several times")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"invalidated:incorrectly-created"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Input was invalidated because it was incorrectly created")))),Object(r.b)("h2",{id:"list-inputs"},"List Inputs"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'project = "project-identifier"\nclient.input.get_inputs(project=project)\n')),Object(r.b)("p",null,"Inputs can be retrieved via the API by specifying project. Additional filter parameters are also available (see below) for querying inputs."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"project"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Project identifier to filter by")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"batch"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Which batch in the project to return inputs for")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"external_ids"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Return inputs matching the ",Object(r.b)("inlineCode",{parentName:"td"},"external_ids")," supplied")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"include_invalidated"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Filters inputs based on their status, defaults to ",Object(r.b)("inlineCode",{parentName:"td"},"False"))))),Object(r.b)("h3",{id:"response"},"Response"),Object(r.b)("p",null,"The response is a list of ",Object(r.b)("inlineCode",{parentName:"p"},"Input")," objects containing the following properties"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Property"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"uuid"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ID used to identify the input within the Annotell Platform")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"external_id"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"External ID supplied during input creation")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"batch"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Which batch does the input belong to")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"input_type"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Type of input (see ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/annotell-python/docs/"}),"Input Types"),")")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"status"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Input status (see ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#input-status"}),"Input Statuses"),")")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"error_message"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If there is an error during input creation the error message will be included, otherwise it's ",Object(r.b)("inlineCode",{parentName:"td"},"None"))))),Object(r.b)("h2",{id:"invalidate-inputs"},"Invalidate Inputs"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'invalid_ids = ["0edb8f59-a8ea-4c9b-aebb-a3caaa6f2ba3", "37d9dda4-3a29-4fcb-8a71-6bf16d5a9c36"]\nreason = IAM.InvalidatedReasonInput.BAD_CONTENT\nclient.input.invalidate_inputs(invalid_ids, reason)\n')),Object(r.b)("p",null,"If issues are detected upstream related to inputs created, it is possible to invalidate inputs.\nInvalidated inputs will not produce annotations and any completed annotations of the input will be invalidated."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Reason"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bad-content"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Input does not load, or has erroneous metadata such as invalid calibration")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"duplicate"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If same input has been created several times")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"incorrectly-created"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If the input was unintentionally created.")))),Object(r.b)("h2",{id:"list-invalidated-inputs"},"List Invalidated Inputs"),Object(r.b)("p",null,"If errors are detected by Annotell, inputs will be invalidated and a reason will be supplied."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'project = "project-identifier"\nclient.input.get_inputs(project=project, include_invalidated=True)\n')),Object(r.b)("h2",{id:"downloading-annotations"},"Downloading Annotations"),Object(r.b)("p",null,"Once annotations are available they can be downloaded by supplying a list of ",Object(r.b)("inlineCode",{parentName:"p"},"input_uuid"),"s for the corresponding inputs. A dictonary is returned containing available annotations for each input. Several annotations occur if the project is setup in such a way that each input should be annotated with different annotation types, e.g. Lane Markings and Objects."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"client.annotation.get_annotations(input_uuids=[\n    'decf6479-d540-459f-b924-a12c2cecf3b5',\n    '5da4f44b-16cb-414a-8dbd-ff5e5afc309a'\n])\n")),Object(r.b)("p",null,"A common use case is downloading all completed annotations a project. This can be performed by first fetching all of the inputs added to the project and then filtering to only include inputs with status ",Object(r.b)("inlineCode",{parentName:"p"},'"created"')," (see ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#input-status"}),"Input Statuses"),")."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python",metastring:"reference",reference:!0}),"https://github.com/annotell/annotell-python/blob/f2b941373b1dff4297d7705ef0f2587eadbca7b3/annotell-input-api/examples/download_annotations.py#L10-L12\n")))}o.isMDXComponent=!0},94:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return j}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=i.a.createContext({}),o=function(e){var t=i.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},d=function(e){var t=o(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=o(a),u=n,j=d["".concat(c,".").concat(u)]||d[u]||s[u]||r;return a?i.a.createElement(j,b(b({ref:t},p),{},{components:a})):i.a.createElement(j,b({ref:t},p))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=u;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:n,c[1]=b;for(var p=2;p<r;p++)c[p]=a[p];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{113:function(n,e,t){"use strict";t.r(e),t.d(e,"MDXContext",(function(){return d})),t.d(e,"MDXProvider",(function(){return m})),t.d(e,"mdx",(function(){return h})),t.d(e,"useMDXComponents",(function(){return u})),t.d(e,"withMDXComponents",(function(){return s}));var a=t(0),o=t.n(a);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(){return(r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n}).apply(this,arguments)}function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function p(n,e){if(null==n)return{};var t,a,o=function(n,e){if(null==n)return{};var t,a,o={},i=Object.keys(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var d=o.a.createContext({}),s=function(n){return function(e){var t=u(e.components);return o.a.createElement(n,r({},e,{components:t}))}},u=function(n){var e=o.a.useContext(d),t=e;return n&&(t="function"==typeof n?n(e):c(c({},e),n)),t},m=function(n){var e=u(n.components);return o.a.createElement(d.Provider,{value:e},n.children)},b={inlineCode:"code",wrapper:function(n){var e=n.children;return o.a.createElement(o.a.Fragment,{},e)}},f=o.a.forwardRef((function(n,e){var t=n.components,a=n.mdxType,i=n.originalType,r=n.parentName,l=p(n,["components","mdxType","originalType","parentName"]),d=u(t),s=a,m=d["".concat(r,".").concat(s)]||d[s]||b[s]||i;return t?o.a.createElement(m,c(c({ref:e},l),{},{components:t})):o.a.createElement(m,c({ref:e},l))}));function h(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var i=t.length,r=new Array(i);r[0]=f;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=n,l.mdxType="string"==typeof n?n:a,r[1]=l;for(var p=2;p<i;p++)r[p]=t[p];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},42:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return r})),t.d(e,"metadata",(function(){return l})),t.d(e,"rightToc",(function(){return c})),t.d(e,"default",(function(){return d}));var a=t(3),o=t(8),i=(t(0),t(113)),r={title:"Downloading Annotations"},l={unversionedId:"input-api/annotations",id:"input-api/annotations",isDocsHomePage:!1,title:"Downloading Annotations",description:"Annotations are made available for each input and annotation type as soon as they are quality assured by the Annotell platform. Information about the format can be found in the Key Concepts section.",source:"@site/docs/input-api/annotations.md",slug:"/input-api/annotations",permalink:"/annotell-python/docs/input-api/annotations",editUrl:"https://github.com/annotell/annotell-python/edit/gh-pages/docs-src/docs/input-api/annotations.md",version:"current",sidebar:"docs",previous:{title:"Working with Inputs",permalink:"/annotell-python/docs/input-api/working_with_inputs"},next:{title:"Calibration",permalink:"/annotell-python/docs/input-api/calibration"}},c=[{value:"v1.1.x",id:"v11x",children:[{value:"Get Single Annotation",id:"get-single-annotation",children:[]},{value:"Get Annotations for a Project or Batch",id:"get-annotations-for-a-project-or-batch",children:[]}]},{value:"Common use cases",id:"common-use-cases",children:[{value:"Download and convert a single annotation",id:"download-and-convert-a-single-annotation",children:[]},{value:"Download and save annotations to a zip file",id:"download-and-save-annotations-to-a-zip-file",children:[]}]},{value:"v1.0.x (Deprecated) \ud83d\udea8",id:"v10x-deprecated-",children:[]}],p={rightToc:c};function d(n){var e=n.components,t=Object(o.default)(n,["components"]);return Object(i.mdx)("wrapper",Object(a.default)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"Annotations are made available for each ",Object(i.mdx)("a",{parentName:"p",href:"overview"},"input")," and ",Object(i.mdx)("a",{parentName:"p",href:"annotation_types"},"annotation type")," as soon as they are quality assured by the Annotell platform. Information about the format can be found in the ",Object(i.mdx)("a",{parentName:"p",href:"/annotell-python/docs/#annotation"},"Key Concepts")," section."),Object(i.mdx)("h2",{id:"v11x"},"v1.1.x"),Object(i.mdx)("div",{className:"admonition admonition-info alert alert--info"},Object(i.mdx)("div",{parentName:"div",className:"admonition-heading"},Object(i.mdx)("h5",{parentName:"div"},Object(i.mdx)("span",{parentName:"h5",className:"admonition-icon"},Object(i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Contact Annotell before use")),Object(i.mdx)("div",{parentName:"div",className:"admonition-content"},Object(i.mdx)("p",{parentName:"div"},"This feature is currently only available for selected projects. If you would like this to be activated for one of your\nprojects please contact Annotell."))),Object(i.mdx)("p",null,"This section describes how you can fetch annotations on the ",Object(i.mdx)("a",{parentName:"p",href:"../openlabel/openlabel-format"},"OpenLABEL format"),". These\nannotations are automatically available as soon as they are finished and can be downloaded either for an entire\nproject/batch or individually via the methods listed below. All methods return either a single ",Object(i.mdx)("inlineCode",{parentName:"p"},"Annotation")," object or\na generator yielding ",Object(i.mdx)("inlineCode",{parentName:"p"},"Annotation")," objects, which contains indentifiers as well as a dictionary containing the OpenLABEL\njson:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-python",metastring:"reference",reference:!0},"https://github.com/annotell/annotell-python/blob/master/annotell-input-api/annotell/input_api/model/annotation/client_annotation.py#L7-L13\n")),Object(i.mdx)("p",null,"As the ",Object(i.mdx)("inlineCode",{parentName:"p"},"Annotation")," model shows, an annotation is unique for each input and annotation-type.\nThe OpenLABEL json can be used as it is or be converted into a pythonic object using the ",Object(i.mdx)("inlineCode",{parentName:"p"},"annotell-openlabel")," library, described\n",Object(i.mdx)("a",{parentName:"p",href:"../openlabel/python-client"},"here"),"."),Object(i.mdx)("h3",{id:"get-single-annotation"},"Get Single Annotation"),Object(i.mdx)("h4",{id:"using-input-and-annotation-type"},"Using input and annotation type"),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-python",metastring:"reference",reference:!0},"https://github.com/annotell/annotell-python/blob/master/annotell-input-api/examples/get_annotation.py#L7-L10\n")),Object(i.mdx)("p",null,"This method returns a single ",Object(i.mdx)("inlineCode",{parentName:"p"},"Annotation")," object, containing the OpenLABEL json, using an input uuid and an annotation type."),Object(i.mdx)("h3",{id:"get-annotations-for-a-project-or-batch"},"Get Annotations for a Project or Batch"),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-python",metastring:"reference",reference:!0},"https://github.com/annotell/annotell-python/blob/master/annotell-input-api/examples/get_project_annotations.py#L8-L23\n")),Object(i.mdx)("p",null,"This example fetches annotations for an entire project or batch. The ",Object(i.mdx)("inlineCode",{parentName:"p"},"run()")," method returns a generator which will yield ",Object(i.mdx)("inlineCode",{parentName:"p"},"Annotation")," objects for all finished annotations\n, for the given ",Object(i.mdx)("inlineCode",{parentName:"p"},"project"),", ",Object(i.mdx)("inlineCode",{parentName:"p"},"batch")," and ",Object(i.mdx)("inlineCode",{parentName:"p"},"annotation_type"),", and in the end prints all of these annotations."),Object(i.mdx)("h2",{id:"common-use-cases"},"Common use cases"),Object(i.mdx)("h3",{id:"download-and-convert-a-single-annotation"},"Download and convert a single annotation"),Object(i.mdx)("p",null,"This example shows a common workflow where an annotation is fetched, parsed into an ",Object(i.mdx)("inlineCode",{parentName:"p"},"OpenLabelAnnotation")," and then\nconverted into a custom annotation format. "),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-python"},"from annotell.input_api.input_api_client import InputApiClient\nfrom annotell.openlabel.models import OpenLabelAnnotation\nfrom pydantic import BaseModel\n\nclass CustomAnnotationFormat(BaseModel):\n    ...\n    \n    @staticmethod\n    def from_openlabel(openlabel_annotation: OpenLabelAnnotation):\n        pass\n\n    \nclient = InputApiClient()\n\nannotation = client.annotation.get_annotation(\n    input_uuid='<input-uuid-identifier>',\n    annotation_type='<annotation-type>'\n)\n\nopenlabel_annotation = OpenLabelAnnotation.parse_obj(annotation.content) # Create pydantic object\nconverted_annotation = CustomAnnotationFormat.from_openlabel(openlabel_annotation=openlabel_annotation) # Convert annotation\nconverted_dict = converted_annotation.dict(exclude_none=True) # Serialize to dict (or json)\n")),Object(i.mdx)("h3",{id:"download-and-save-annotations-to-a-zip-file"},"Download and save annotations to a zip file"),Object(i.mdx)("p",null,"In this example, all annotations are fetch for a project batch and then converted saved into a zip file. Note that the\nsave_file must have the extension ",Object(i.mdx)("inlineCode",{parentName:"p"},".zip"),". "),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-python"},'import io, json, zipfile\nimport annotell.input_api.input_api_client as IAC\n\nclient = IAC.InputApiClient()\n\nzip_buffer = io.BytesIO()\nwith zipfile.ZipFile(zip_buffer, \'a\', zipfile.ZIP_DEFLATED, False) as zip_file:\n    for annotation in client.annotation.get_project_annotations(\n            project="Project-identifier",\n            batch="Batch-identifier",\n            annotation_type="Annotation-Type-identifier"\n    ):\n        encoded_annotation = io.BytesIO(json.dumps(annotation.content, indent=4).encode())\n        zip_file.writestr(f"{annotation.input_uuid}.json", encoded_annotation.getvalue())\n\nwith open(\'path/to/annotations.zip\', \'wb\') as f:\n    f.write(zip_buffer.getvalue())\n')),Object(i.mdx)("h2",{id:"v10x-deprecated-"},"v1.0.x (Deprecated) \ud83d\udea8"),Object(i.mdx)("p",null,"Once annotations are available they can be downloaded by supplying a list of ",Object(i.mdx)("inlineCode",{parentName:"p"},"input_uuid"),"s for the corresponding inputs. A dictonary is returned containing available annotations for each input. Several annotations occur if the project is setup in such a way that each input should be annotated with different annotation types, e.g. Lane Markings and Objects."),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-python"},"client.annotation.get_annotations(input_uuids=[\n    'decf6479-d540-459f-b924-a12c2cecf3b5',\n    '5da4f44b-16cb-414a-8dbd-ff5e5afc309a'\n])\n")),Object(i.mdx)("p",null,"A common use case is downloading all completed annotations a project. This can be performed by first fetching all of the inputs added to the project and then filtering to only include inputs with status ",Object(i.mdx)("inlineCode",{parentName:"p"},'"created"')," (see ",Object(i.mdx)("a",{parentName:"p",href:"working_with_inputs#input-status"},"Input Statuses"),")."),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-python",metastring:"reference",reference:!0},"https://github.com/annotell/annotell-python/blob/f2b941373b1dff4297d7705ef0f2587eadbca7b3/annotell-input-api/examples/download_annotations.py#L10-L12\n")))}d.isMDXComponent=!0}}]);
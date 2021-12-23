(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return s})),n.d(t,"MDXProvider",(function(){return u})),n.d(t,"mdx",(function(){return f})),n.d(t,"useMDXComponents",(function(){return m})),n.d(t,"withMDXComponents",(function(){return p}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){return function(t){var n=m(t.components);return r.a.createElement(e,i({},t,{components:n}))}},m=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},u=function(e){var t=m(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=m(n),p=a,u=s["".concat(i,".").concat(p)]||s[p]||b[p]||o;return n?r.a.createElement(u,d(d({ref:t},l),{},{components:n})):r.a.createElement(u,d({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},192:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/annotell-domain-c44bba0c2d6d6e72e2ca5cda095ff12b.png"},55:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(8),o=(n(0),n(113)),i={id:"key_concepts",title:"Key Concepts",description:"Annotell Platform Concepts",slug:"/"},l={unversionedId:"key_concepts",id:"key_concepts",isDocsHomePage:!1,title:"Key Concepts",description:"Annotell Platform Concepts",source:"@site/docs/key_concepts.md",slug:"/",permalink:"/annotell-python/docs/",editUrl:"https://github.com/annotell/annotell-python/edit/gh-pages/docs-src/docs/key_concepts.md",version:"current",sidebar:"docs",previous:{title:"Annotell Auth",permalink:"/annotell-python/docs/annotell-auth"},next:{title:"Projects",permalink:"/annotell-python/docs/input-api/project"}},d=[{value:"Project",id:"project",children:[]},{value:"Batch",id:"batch",children:[{value:"Batch Status",id:"batch-status",children:[]}]},{value:"Request",id:"request",children:[{value:"Guideline",id:"guideline",children:[]},{value:"Task Definition",id:"task-definition",children:[]}]},{value:"Input",id:"input",children:[{value:"Input Types",id:"input-types",children:[]}]},{value:"Annotation",id:"annotation",children:[{value:"v1.1.x Format",id:"v11x-format",children:[]},{value:"v1.0.x Format (Deprecated) \ud83d\udea8",id:"v10x-format-deprecated-",children:[]}]}],c={rightToc:d};function s(e){var t=e.components,i=Object(r.default)(e,["components"]);return Object(o.mdx)("wrapper",Object(a.default)({},c,i,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,Object(o.mdx)("img",{alt:"Annotell",src:n(192).default})),Object(o.mdx)("h2",{id:"project"},"Project"),Object(o.mdx)("p",null,"Project is the top-most concept when interfacing with the Annotell Platform. It is possible to have multiple ongoing projects, and they act as a container for other Annotell resources.\nProject setup is performed by the Annotell Professional Services team during the Guideline Agreement Process (GAP) of a new client engagement."),Object(o.mdx)("p",null,"To use projects within the Annotell APIs, they can be identified using an external identifier."),Object(o.mdx)("h2",{id:"batch"},"Batch"),Object(o.mdx)("p",null,"Input batches allow grouping of inputs into smaller batches within a project. By default, every project has at least one input batch."),Object(o.mdx)("p",null,"Ongoing projects can benefit from using batches in two ways"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Group inputs collected at the same time"),Object(o.mdx)("li",{parentName:"ul"},"Perform guideline or task definition changes without the need for retroactive changes.")),Object(o.mdx)("h3",{id:"batch-status"},"Batch Status"),Object(o.mdx)("table",null,Object(o.mdx)("thead",{parentName:"table"},Object(o.mdx)("tr",{parentName:"thead"},Object(o.mdx)("th",{parentName:"tr",align:null},"Status"),Object(o.mdx)("th",{parentName:"tr",align:null},"Description"))),Object(o.mdx)("tbody",{parentName:"table"},Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",{parentName:"tr",align:null},"pending"),Object(o.mdx)("td",{parentName:"tr",align:null},"Batch has been created but is still not fully configured by Annotell. Either during project setup or requested changes")),Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",{parentName:"tr",align:null},"open"),Object(o.mdx)("td",{parentName:"tr",align:null},"Batch is open for new inputs")),Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",{parentName:"tr",align:null},"ready"),Object(o.mdx)("td",{parentName:"tr",align:null},"Batch has been published and no longer open for new inputs.")),Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",{parentName:"tr",align:null},"in-progress"),Object(o.mdx)("td",{parentName:"tr",align:null},"Annotell has started annotation of inputs within the batch.")),Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",{parentName:"tr",align:null},"completed"),Object(o.mdx)("td",{parentName:"tr",align:null},"Annotations has been completed.")))),Object(o.mdx)("h2",{id:"request"},"Request"),Object(o.mdx)("p",null,"During GAP, projects are divided into different annotation types. E.g. a project consisting of images can be divided into lane annotation and object detection. Within Annotell this is represented as a ",Object(o.mdx)("strong",{parentName:"p"},"Request"),".\nA Request can be viewed as a drawing tool - we divide big and complex projects into several independent annotation types.\nThis makes it possible to:"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Reduce the mental strain on annotators"),Object(o.mdx)("li",{parentName:"ul"},"Higher bandwidth - more annotators can work on the same data in parallel"),Object(o.mdx)("li",{parentName:"ul"},"Build simple user interfaces")),Object(o.mdx)("p",null,"All of these contribute to a high level of quality while also reducing the total time needed for producing an annotation."),Object(o.mdx)("h3",{id:"guideline"},"Guideline"),Object(o.mdx)("p",null,'In order for us to produce annotations we need to know what and how to annotate. This type of information is found in something that\'s called a Guideline. A guideline contains information on what to mark (e.g. vehicles and pedestrians) as well as how (e.g. bounding box). A guideline also includes information about how to interpret the data, i.e. what does it mean that a vehicle is "heavily occluded"?'),Object(o.mdx)("h3",{id:"task-definition"},"Task Definition"),Object(o.mdx)("p",null,"Task Definition - Describes what we\u2019re annotating. How many objects? Bounding box, semantic segmentation or lines/splines? What are the properties? Task Definitions are json documents that the Annotell Professional Services team generates from the guideline. The task definition is used by the Annotell App to construct the drawing tool, and can be viewed as the machine readable quivalent of a guideline."),Object(o.mdx)("h2",{id:"input"},"Input"),Object(o.mdx)("p",null,"The Annotell Platform has support for annotating different types of data together, e.g:"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"One (or more) images of the same scene from different cameras"),Object(o.mdx)("li",{parentName:"ul"},"Images from different cameras together with lidar point clouds")),Object(o.mdx)("p",null,"An ",Object(o.mdx)("strong",{parentName:"p"},"input")," specifies how these different resources belong together using metadata about the scene and calibrations (how sensors relate to each other). An important concept related to inputs is that of the ",Object(o.mdx)("em",{parentName:"p"},"frame"),". A frame is a discrete moment in time, consisting of data from several different sensors. Inputs are divided into either being ",Object(o.mdx)("em",{parentName:"p"},"single frame")," or ",Object(o.mdx)("em",{parentName:"p"},"multiple frame"),", where the latter is represented by the input type ending with ",Object(o.mdx)("inlineCode",{parentName:"p"},"Seq"),". In cases where you want to annotate sequences, where temporal information is important for producing the annotation, then inputs types that support multiple frames are preferrable."),Object(o.mdx)("p",null,"Inputs can be created via Annotell's Input API, which has support for several different types of input types."),Object(o.mdx)("h3",{id:"input-types"},"Input Types"),Object(o.mdx)("table",null,Object(o.mdx)("thead",{parentName:"table"},Object(o.mdx)("tr",{parentName:"thead"},Object(o.mdx)("th",{parentName:"tr",align:null},"Type"),Object(o.mdx)("th",{parentName:"tr",align:null},"Description"))),Object(o.mdx)("tbody",{parentName:"table"},Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",{parentName:"tr",align:null},Object(o.mdx)("strong",{parentName:"td"},"Cameras")),Object(o.mdx)("td",{parentName:"tr",align:null},"A single frame consisting of images from 1-9 cameras")),Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",{parentName:"tr",align:null},Object(o.mdx)("strong",{parentName:"td"},"LidarsAndCameras")),Object(o.mdx)("td",{parentName:"tr",align:null},"A single frame consisting of 1-3 lidar point clouds and images from 1-9 cameras")),Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",{parentName:"tr",align:null},Object(o.mdx)("strong",{parentName:"td"},"CamerasSeq")),Object(o.mdx)("td",{parentName:"tr",align:null},"Sequence of frames, each frame consisting of images from 1-9 cameras")),Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",{parentName:"tr",align:null},Object(o.mdx)("strong",{parentName:"td"},"LidarsAndCamerasSeq")),Object(o.mdx)("td",{parentName:"tr",align:null},"Sequence of frames, consisting of 1-3 lidar point clouds and images from 1-9 cameras")))),Object(o.mdx)("h2",{id:"annotation"},"Annotation"),Object(o.mdx)("p",null,"Inputs are annotated in requests, producing ",Object(o.mdx)("em",{parentName:"p"},"annotations"),". Version v1.0.x provide by default annotations in Annotell's annotation format. Version v1.1.x and above provide annotations in the ",Object(o.mdx)("a",{parentName:"p",href:"https://www.asam.net/project-detail/asam-openlabel-v100/"},"ASAM OpenLABEL")," format."),Object(o.mdx)("h3",{id:"v11x-format"},"v1.1.x Format"),Object(o.mdx)("p",null,"Annotations are provided by the ",Object(o.mdx)("inlineCode",{parentName:"p"},"annotell-input-api")," as json objects in the ",Object(o.mdx)("a",{parentName:"p",href:"openlabel/openlabel-format"},"ASAM OpenLABEL")," format.\nMore information on how to download these annotations along with some examples of how to work with them is available\nin the ",Object(o.mdx)("a",{parentName:"p",href:"/annotell-python/docs/input-api/annotations"},"Downloading Annotations")," chapter."),Object(o.mdx)("p",null,"Apart from the ",Object(o.mdx)("inlineCode",{parentName:"p"},"annotell-input-api"),", Annotell also provides a ",Object(o.mdx)("a",{parentName:"p",href:"openlabel/python-client"},"library")," called ",Object(o.mdx)("inlineCode",{parentName:"p"},"annotell-openlabel"),",\nwhich makes it easy to parse and work with the OpenLABEL json."),Object(o.mdx)("p",null,"Any conversion away from the OpenLABEL format will have to occur client-side."),Object(o.mdx)("h3",{id:"v10x-format-deprecated-"},"v1.0.x Format (Deprecated) \ud83d\udea8"),Object(o.mdx)("p",null,"The Annotell annotation format is closely linked to the Annotell task definition. The task definition determines what we are expected to save, where properties are stored and what datatype(s) the properties will be. The Annotell annotation format is saved as a JSON file and will be described according to the data types of JSON."),Object(o.mdx)("p",null,"The Annotell annotation is an object with the following top keys:"),Object(o.mdx)("table",null,Object(o.mdx)("thead",{parentName:"table"},Object(o.mdx)("tr",{parentName:"thead"},Object(o.mdx)("th",{parentName:"tr",align:null},"Property"),Object(o.mdx)("th",{parentName:"tr",align:null},"Description"))),Object(o.mdx)("tbody",{parentName:"table"},Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",{parentName:"tr",align:null},"shapes"),Object(o.mdx)("td",{parentName:"tr",align:null},"contains information needed for drawing the shapes. Follows GeoJson standard for serialising geometric shapes, please see ",Object(o.mdx)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/GeoJSON"},"GeoJSON")," for more information.")),Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",{parentName:"tr",align:null},"shapeProperties"),Object(o.mdx)("td",{parentName:"tr",align:null},"contains the property values for shapes in shapes.")),Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",{parentName:"tr",align:null},"properties"),Object(o.mdx)("td",{parentName:"tr",align:null},"contains the property values for what we want to know about the input, the inputProperties of the task definition.")))),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "shapes": {}\n  "shapeProperties": {}\n  "properties": {}\n}\n')))}s.isMDXComponent=!0}}]);
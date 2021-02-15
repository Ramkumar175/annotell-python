(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{70:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),c=(n(0),n(91)),o={title:"Projects"},l={unversionedId:"input-api/project",id:"input-api/project",isDocsHomePage:!1,title:"Projects",description:"Project",source:"@site/docs/input-api/project.md",slug:"/input-api/project",permalink:"/annotell-python/docs/input-api/project",editUrl:"https://github.com/annotell/annotell-python/edit/gh-pages/docs-src/docs/input-api/project.md",version:"current",sidebar:"docs",previous:{title:"Key Concepts",permalink:"/annotell-python/docs/"},next:{title:"General",permalink:"/annotell-python/docs/input-api/general"}},i=[{value:"Project",id:"project",children:[{value:"List Projects",id:"list-projects",children:[]}]},{value:"Batch",id:"batch",children:[{value:"Batch Status",id:"batch-status",children:[]},{value:"Listing Batches",id:"listing-batches",children:[]},{value:"Publish Batch",id:"publish-batch",children:[]}]}],b={rightToc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"project"},"Project"),Object(c.b)("p",null,"In order to create inputs via the Input API, an Annotell project needs to exist.\nProjects are configured by the Annotell Professional Services team, during the Guideline Agreement Process (GAP) of a new client engagement."),Object(c.b)("h3",{id:"list-projects"},"List Projects"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"projects = client.project.get_projects()\n")),Object(c.b)("p",null,"Or via ",Object(c.b)("inlineCode",{parentName:"p"},"annoutil")," CLI"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"annoutil projects\n")),Object(c.b)("p",null,"Returns all projects."),Object(c.b)("h2",{id:"batch"},"Batch"),Object(c.b)("p",null,"Input batches allow further grouping of inputs into smaller batches within a project. Specifying input batch during input creation is optional, and will otherwise default to the latest open batch."),Object(c.b)("p",null,"Ongoing projects can benefit from using batches in two ways"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Group inputs collected at the same time"),Object(c.b)("li",{parentName:"ul"},"Perform guideline or task definition changes without the need for retroactive changes.")),Object(c.b)("h3",{id:"batch-status"},"Batch Status"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Status"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"pending"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Batch has been created but is still not fully configured by Annotell. Either during project setup or requested changes")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"open"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Batch is open for new inputs")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"ready"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Batch has been published and no longer open for new inputs.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"in-progress"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Annotell has started annotation of inputs within the batch.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"completed"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Annotations has been completed.")))),Object(c.b)("h3",{id:"listing-batches"},"Listing Batches"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'projects = client.project.get_project_batches("project_external_id")\n')),Object(c.b)("p",null,"Or via ",Object(c.b)("inlineCode",{parentName:"p"},"annoutil")," CLI"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"annoutil project <project-external-id> --batches\n")),Object(c.b)("p",null,"Returns all batches for the project"),Object(c.b)("h3",{id:"publish-batch"},"Publish Batch"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'projects = client.project.publish_batch("project_external_id", "batch_external_id")\n')),Object(c.b)("p",null,"Publishes the input batch. Published batches are not open for new inputs."))}p.isMDXComponent=!0},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},j=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),u=p(n),j=r,d=u["".concat(o,".").concat(j)]||u[j]||s[j]||c;return n?a.a.createElement(d,l(l({ref:t},b),{},{components:n})):a.a.createElement(d,l({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=j;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var b=2;b<c;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"}}]);
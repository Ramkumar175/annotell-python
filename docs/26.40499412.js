/*! For license information please see 26.40499412.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[26,27],{111:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return c})),n.d(t,"MDXProvider",(function(){return d})),n.d(t,"mdx",(function(){return v})),n.d(t,"useMDXComponents",(function(){return h})),n.d(t,"withMDXComponents",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),f=function(e){return function(t){var n=h(t.components);return a.a.createElement(e,l({},t,{components:n}))}},h=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=h(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=h(n),f=r,d=c["".concat(l,".").concat(f)]||c[f]||p[f]||o;return n?a.a.createElement(d,i(i({ref:t},s),{},{components:n})):a.a.createElement(d,i({ref:t},s))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},132:function(e,t,n){"use strict";var r=n(31).default,a=n(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(3)),l=r(n(0)),s=a(n(113)),i=r(n(190)),u=a(n(184)),c=a(n(185)),f=a(n(186)),h=a(n(105)),d=n(112),p=/{([\d,-]+)}/,m=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),r=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+r+")\\s*$")},v=/(?:title=")(.*)(?:")/;t.default=function(e){var t=e.children,n=e.className,r=e.metastring,a=(0,d.useThemeConfig)().prism,y=(0,l.useState)(!1),g=y[0],b=y[1],k=(0,l.useState)(!1),j=k[0],O=k[1];(0,l.useEffect)((function(){O(!0)}),[]);var E=(0,l.useRef)(null),x=[],C="",w=(0,f.default)();if(Array.isArray(t)&&(t=t.join("")),r&&p.test(r)){var _=r.match(p)[1];x=(0,c.default)(_).filter((function(e){return e>0}))}r&&v.test(r)&&(C=r.match(v)[1]);var P=n&&n.replace(/language-/,"");!P&&a.defaultLanguage&&(P=a.defaultLanguage);var N=t.replace(/\n$/,"");if(0===x.length&&void 0!==P){for(var S,I="",T=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return m(["js","jsBlock"]);case"jsx":case"tsx":return m(["js","jsBlock","jsx"]);case"html":return m(["js","jsBlock","html"]);case"python":case"py":return m(["python"]);default:return m()}}(P),M=t.replace(/\n$/,"").split("\n"),A=0;A<M.length;){var R=A+1,D=M[A].match(T);if(null!==D){switch(D.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":I+=R+",";break;case"highlight-start":S=R;break;case"highlight-end":I+=S+"-"+(R-1)+","}M.splice(A,1)}else A+=1}x=(0,c.default)(I),N=M.join("\n")}var L=function(){(0,u.default)(N),b(!0),setTimeout((function(){return b(!1)}),2e3)};return l.default.createElement(i.default,(0,o.default)({},i.defaultProps,{key:String(j),theme:w,code:N,language:P}),(function(e){var t,n=e.className,r=e.style,a=e.tokens,i=e.getLineProps,u=e.getTokenProps;return l.default.createElement(l.default.Fragment,null,C&&l.default.createElement("div",{style:r,className:h.default.codeBlockTitle},C),l.default.createElement("div",{className:h.default.codeBlockContent},l.default.createElement("div",{tabIndex:0,className:(0,s.default)(n,h.default.codeBlock,"thin-scrollbar",(t={},t[h.default.codeBlockWithTitle]=C,t))},l.default.createElement("div",{className:h.default.codeBlockLines,style:r},a.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=i({line:e,key:t});return x.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),l.default.createElement("div",(0,o.default)({key:t},n),e.map((function(e,t){return l.default.createElement("span",(0,o.default)({key:t},u({token:e,key:t})))})))})))),l.default.createElement("button",{ref:E,type:"button","aria-label":"Copy code to clipboard",className:(0,s.default)(h.default.copyButton),onClick:L},g?"Copied":"Copy")))}))}},173:function(e,t,n){"use strict";var r=n(31).default,a=n(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(3)),l=a(n(8)),s=r(n(0)),i=a(n(113)),u=n(112),c=a(n(125)),f=a(n(129)),h=r(n(130)),d=a(n(128)),p=a(n(115)),m=a(n(120)),v=a(n(131)),y=a(n(104));var g=function e(t,n){return"link"===t.type?(0,u.isSamePath)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))};function b(e){var t,n,r,a=e.item,u=e.onItemClick,c=e.collapsible,f=e.activePath,h=(0,l.default)(e,["item","onItemClick","collapsible","activePath"]),d=a.items,p=a.label,m=g(a,f),v=(n=m,r=(0,s.useRef)(n),(0,s.useEffect)((function(){r.current=n}),[n]),r.current),b=(0,s.useState)((function(){return!!c&&(!m&&a.collapsed)})),k=b[0],O=b[1],E=(0,s.useRef)(null),x=(0,s.useState)(void 0),C=x[0],w=x[1],_=function(e){var t;void 0===e&&(e=!0),w(e?(null===(t=E.current)||void 0===t?void 0:t.scrollHeight)+"px":void 0)};(0,s.useEffect)((function(){m&&!v&&k&&O(!1)}),[m,v,k]);var P=(0,s.useCallback)((function(e){e.preventDefault(),C||_(),setTimeout((function(){return O((function(e){return!e}))}),100)}),[C]);return 0===d.length?null:s.default.createElement("li",{className:(0,i.default)("menu__list-item",{"menu__list-item--collapsed":k}),key:p},s.default.createElement("a",(0,o.default)({className:(0,i.default)("menu__link",(t={"menu__link--sublist":c,"menu__link--active":c&&m},t[y.default.menuLinkText]=!c,t)),onClick:c?P:void 0,href:c?"#!":void 0},h),p),s.default.createElement("ul",{className:"menu__list",ref:E,style:{height:C},onTransitionEnd:function(){k||_(!1)}},d.map((function(e){return s.default.createElement(j,{tabIndex:k?"-1":"0",key:e.label,item:e,onItemClick:u,collapsible:c,activePath:f})}))))}function k(e){var t=e.item,n=e.onItemClick,r=e.activePath,a=(e.collapsible,(0,l.default)(e,["item","onItemClick","activePath","collapsible"])),u=t.href,c=t.label,f=g(t,r);return s.default.createElement("li",{className:"menu__list-item",key:c},s.default.createElement(p.default,(0,o.default)({className:(0,i.default)("menu__link",{"menu__link--active":f}),to:u},(0,m.default)(u)?{isNavLink:!0,exact:!0,onClick:n}:{target:"_blank",rel:"noreferrer noopener"},a),c))}function j(e){switch(e.item.type){case"category":return s.default.createElement(b,e);case"link":default:return s.default.createElement(k,e)}}var O=function(e){var t,n,r=e.path,a=e.sidebar,o=e.sidebarCollapsible,l=void 0===o||o,p=e.onCollapse,m=e.isHidden,g=(0,s.useState)(!1),b=g[0],k=g[1],O=(0,u.useThemeConfig)(),E=O.navbar.hideOnScroll,x=O.hideableSidebar,C=(0,c.default)().isAnnouncementBarClosed,w=(0,d.default)().scrollY;(0,f.default)(b);var _=(0,h.default)();return(0,s.useEffect)((function(){_===h.windowSizes.desktop&&k(!1)}),[_]),s.default.createElement("div",{className:(0,i.default)(y.default.sidebar,(t={},t[y.default.sidebarWithHideableNavbar]=E,t[y.default.sidebarHidden]=m,t))},E&&s.default.createElement(v.default,{tabIndex:-1,className:y.default.sidebarLogo}),s.default.createElement("div",{className:(0,i.default)("menu","menu--responsive","thin-scrollbar",y.default.menu,(n={"menu--show":b},n[y.default.menuWithAnnouncementBar]=!C&&0===w,n))},s.default.createElement("button",{"aria-label":b?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){k(!b)}},b?s.default.createElement("span",{className:(0,i.default)(y.default.sidebarMenuIcon,y.default.sidebarMenuCloseIcon)},"\xd7"):s.default.createElement("svg",{"aria-label":"Menu",className:y.default.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},s.default.createElement("title",null,"Menu"),s.default.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),s.default.createElement("ul",{className:"menu__list"},a.map((function(e){return s.default.createElement(j,{key:e.label,item:e,onItemClick:function(e){e.target.blur(),k(!1)},collapsible:l,activePath:r})})))),x&&s.default.createElement("button",{type:"button",title:"Collapse sidebar","aria-label":"Collapse sidebar",className:(0,i.default)("button button--secondary button--outline",y.default.collapseSidebarButton),onClick:p}))};t.default=O},174:function(e,t,n){"use strict";var r=n(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(3)),o=r(n(0)),l=r(n(115)),s=r(n(175)),i=r(n(188)),u=r(n(108)),c={code:function(e){var t=e.children;return"string"==typeof t?t.includes("\n")?o.default.createElement(s.default,e):o.default.createElement("code",e):t},a:function(e){return o.default.createElement(l.default,e)},pre:function(e){return o.default.createElement("div",(0,a.default)({className:u.default.mdxCodeBlock},e))},h1:(0,i.default)("h1"),h2:(0,i.default)("h2"),h3:(0,i.default)("h3"),h4:(0,i.default)("h4"),h5:(0,i.default)("h5"),h6:(0,i.default)("h6")};t.default=c},175:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=r(n(0)),o=r(n(176)),l=r(n(132));e.exports=(l.default,e=>e.reference?a.default.createElement(o.default,Object.assign({},e)):a.default.createElement(l.default,Object.assign({},e)))},176:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return a(t,e),t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.parseReference=void 0;const s=n(177),i=o(n(0)),u=l(n(132)),c={code:"loading...",error:null,loading:null},f={textAlign:"right",fontSize:".8em"};function h(e){const t=e.slice(e.indexOf("https"),-1),[n,r]=t.split("#"),a=globalThis||{};a.URL||(a.URL=s.URL);const[o,l,i,u,...c]=new a.URL(n).pathname.split("/").slice(1),[f,h]=r?r.split("-").map((e=>parseInt(e.slice(1),10)-1)):[0,1/0];return{url:`https://raw.githubusercontent.com/${o}/${l}/${u}/${c.join("/")}`,fromLine:f,toLine:h,title:c.join("/")}}function d(e,{type:t,value:n}){switch(t){case"reset":return c;case"loading":return{...e,loading:!0};case"loaded":return{...e,code:n,loading:!1};case"error":return{...e,error:n,loading:!1};default:return e}}t.parseReference=h,t.default=function(e){const[t,n]=i.useReducer(d,c),r=h(e.children);!1!==t.loading&&async function({url:e,fromLine:t,toLine:n},r){let a;try{a=await fetch(e)}catch(s){return r({type:"error",value:s})}if(200!==a.status)return r({type:"error",value:await a.text()});const o=(await a.text()).split("\n").slice(t,(n||t)+1),l=o.reduce(((e,t)=>{if(0===t.length)return e;const n=t.match(/^\s+/);return n?Math.min(e,n[0].length):0}),1/0);r({type:"loaded",value:o.map((e=>e.slice(l))).join("\n")})}(r,n);const a={...e,metastring:` title="${r.title}"`,children:c.code};return i.default.createElement("div",null,i.default.createElement(u.default,Object.assign({},a),t.code),i.default.createElement("div",{style:f},"See full example on ",i.default.createElement("a",{href:e.children,target:"_blank"},"GitHub")))}},177:function(e,t,n){"use strict";var r=n(178),a=n(180);function o(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}t.parse=b,t.resolve=function(e,t){return b(e,!1,!0).resolve(t)},t.resolveObject=function(e,t){return e?b(e,!1,!0).resolveObject(t):t},t.format=function(e){a.isString(e)&&(e=b(e));return e instanceof o?e.format():o.prototype.format.call(e)},t.Url=o;var l=/^([a-z0-9.+-]+:)/i,s=/:[0-9]*$/,i=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,u=["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r","\n","\t"]),c=["'"].concat(u),f=["%","/","?",";","#"].concat(c),h=["/","?","#"],d=/^[+a-z0-9A-Z_-]{0,63}$/,p=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,m={javascript:!0,"javascript:":!0},v={javascript:!0,"javascript:":!0},y={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},g=n(181);function b(e,t,n){if(e&&a.isObject(e)&&e instanceof o)return e;var r=new o;return r.parse(e,t,n),r}o.prototype.parse=function(e,t,n){if(!a.isString(e))throw new TypeError("Parameter 'url' must be a string, not "+typeof e);var o=e.indexOf("?"),s=-1!==o&&o<e.indexOf("#")?"?":"#",u=e.split(s);u[0]=u[0].replace(/\\/g,"/");var b=e=u.join(s);if(b=b.trim(),!n&&1===e.split("#").length){var k=i.exec(b);if(k)return this.path=b,this.href=b,this.pathname=k[1],k[2]?(this.search=k[2],this.query=t?g.parse(this.search.substr(1)):this.search.substr(1)):t&&(this.search="",this.query={}),this}var j=l.exec(b);if(j){var O=(j=j[0]).toLowerCase();this.protocol=O,b=b.substr(j.length)}if(n||j||b.match(/^\/\/[^@\/]+@[^@\/]+/)){var E="//"===b.substr(0,2);!E||j&&v[j]||(b=b.substr(2),this.slashes=!0)}if(!v[j]&&(E||j&&!y[j])){for(var x,C,w=-1,_=0;_<h.length;_++){-1!==(P=b.indexOf(h[_]))&&(-1===w||P<w)&&(w=P)}-1!==(C=-1===w?b.lastIndexOf("@"):b.lastIndexOf("@",w))&&(x=b.slice(0,C),b=b.slice(C+1),this.auth=decodeURIComponent(x)),w=-1;for(_=0;_<f.length;_++){var P;-1!==(P=b.indexOf(f[_]))&&(-1===w||P<w)&&(w=P)}-1===w&&(w=b.length),this.host=b.slice(0,w),b=b.slice(w),this.parseHost(),this.hostname=this.hostname||"";var N="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!N)for(var S=this.hostname.split(/\./),I=(_=0,S.length);_<I;_++){var T=S[_];if(T&&!T.match(d)){for(var M="",A=0,R=T.length;A<R;A++)T.charCodeAt(A)>127?M+="x":M+=T[A];if(!M.match(d)){var D=S.slice(0,_),L=S.slice(_+1),U=T.match(p);U&&(D.push(U[1]),L.unshift(U[2])),L.length&&(b="/"+L.join(".")+b),this.hostname=D.join(".");break}}}this.hostname.length>255?this.hostname="":this.hostname=this.hostname.toLowerCase(),N||(this.hostname=r.toASCII(this.hostname));var q=this.port?":"+this.port:"",B=this.hostname||"";this.host=B+q,this.href+=this.host,N&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==b[0]&&(b="/"+b))}if(!m[O])for(_=0,I=c.length;_<I;_++){var $=c[_];if(-1!==b.indexOf($)){var F=encodeURIComponent($);F===$&&(F=escape($)),b=b.split($).join(F)}}var z=b.indexOf("#");-1!==z&&(this.hash=b.substr(z),b=b.slice(0,z));var H=b.indexOf("?");if(-1!==H?(this.search=b.substr(H),this.query=b.substr(H+1),t&&(this.query=g.parse(this.query)),b=b.slice(0,H)):t&&(this.search="",this.query={}),b&&(this.pathname=b),y[O]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){q=this.pathname||"";var W=this.search||"";this.path=q+W}return this.href=this.format(),this},o.prototype.format=function(){var e=this.auth||"";e&&(e=(e=encodeURIComponent(e)).replace(/%3A/i,":"),e+="@");var t=this.protocol||"",n=this.pathname||"",r=this.hash||"",o=!1,l="";this.host?o=e+this.host:this.hostname&&(o=e+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(o+=":"+this.port)),this.query&&a.isObject(this.query)&&Object.keys(this.query).length&&(l=g.stringify(this.query));var s=this.search||l&&"?"+l||"";return t&&":"!==t.substr(-1)&&(t+=":"),this.slashes||(!t||y[t])&&!1!==o?(o="//"+(o||""),n&&"/"!==n.charAt(0)&&(n="/"+n)):o||(o=""),r&&"#"!==r.charAt(0)&&(r="#"+r),s&&"?"!==s.charAt(0)&&(s="?"+s),t+o+(n=n.replace(/[?#]/g,(function(e){return encodeURIComponent(e)})))+(s=s.replace("#","%23"))+r},o.prototype.resolve=function(e){return this.resolveObject(b(e,!1,!0)).format()},o.prototype.resolveObject=function(e){if(a.isString(e)){var t=new o;t.parse(e,!1,!0),e=t}for(var n=new o,r=Object.keys(this),l=0;l<r.length;l++){var s=r[l];n[s]=this[s]}if(n.hash=e.hash,""===e.href)return n.href=n.format(),n;if(e.slashes&&!e.protocol){for(var i=Object.keys(e),u=0;u<i.length;u++){var c=i[u];"protocol"!==c&&(n[c]=e[c])}return y[n.protocol]&&n.hostname&&!n.pathname&&(n.path=n.pathname="/"),n.href=n.format(),n}if(e.protocol&&e.protocol!==n.protocol){if(!y[e.protocol]){for(var f=Object.keys(e),h=0;h<f.length;h++){var d=f[h];n[d]=e[d]}return n.href=n.format(),n}if(n.protocol=e.protocol,e.host||v[e.protocol])n.pathname=e.pathname;else{for(var p=(e.pathname||"").split("/");p.length&&!(e.host=p.shift()););e.host||(e.host=""),e.hostname||(e.hostname=""),""!==p[0]&&p.unshift(""),p.length<2&&p.unshift(""),n.pathname=p.join("/")}if(n.search=e.search,n.query=e.query,n.host=e.host||"",n.auth=e.auth,n.hostname=e.hostname||e.host,n.port=e.port,n.pathname||n.search){var m=n.pathname||"",g=n.search||"";n.path=m+g}return n.slashes=n.slashes||e.slashes,n.href=n.format(),n}var b=n.pathname&&"/"===n.pathname.charAt(0),k=e.host||e.pathname&&"/"===e.pathname.charAt(0),j=k||b||n.host&&e.pathname,O=j,E=n.pathname&&n.pathname.split("/")||[],x=(p=e.pathname&&e.pathname.split("/")||[],n.protocol&&!y[n.protocol]);if(x&&(n.hostname="",n.port=null,n.host&&(""===E[0]?E[0]=n.host:E.unshift(n.host)),n.host="",e.protocol&&(e.hostname=null,e.port=null,e.host&&(""===p[0]?p[0]=e.host:p.unshift(e.host)),e.host=null),j=j&&(""===p[0]||""===E[0])),k)n.host=e.host||""===e.host?e.host:n.host,n.hostname=e.hostname||""===e.hostname?e.hostname:n.hostname,n.search=e.search,n.query=e.query,E=p;else if(p.length)E||(E=[]),E.pop(),E=E.concat(p),n.search=e.search,n.query=e.query;else if(!a.isNullOrUndefined(e.search)){if(x)n.hostname=n.host=E.shift(),(N=!!(n.host&&n.host.indexOf("@")>0)&&n.host.split("@"))&&(n.auth=N.shift(),n.host=n.hostname=N.shift());return n.search=e.search,n.query=e.query,a.isNull(n.pathname)&&a.isNull(n.search)||(n.path=(n.pathname?n.pathname:"")+(n.search?n.search:"")),n.href=n.format(),n}if(!E.length)return n.pathname=null,n.search?n.path="/"+n.search:n.path=null,n.href=n.format(),n;for(var C=E.slice(-1)[0],w=(n.host||e.host||E.length>1)&&("."===C||".."===C)||""===C,_=0,P=E.length;P>=0;P--)"."===(C=E[P])?E.splice(P,1):".."===C?(E.splice(P,1),_++):_&&(E.splice(P,1),_--);if(!j&&!O)for(;_--;_)E.unshift("..");!j||""===E[0]||E[0]&&"/"===E[0].charAt(0)||E.unshift(""),w&&"/"!==E.join("/").substr(-1)&&E.push("");var N,S=""===E[0]||E[0]&&"/"===E[0].charAt(0);x&&(n.hostname=n.host=S?"":E.length?E.shift():"",(N=!!(n.host&&n.host.indexOf("@")>0)&&n.host.split("@"))&&(n.auth=N.shift(),n.host=n.hostname=N.shift()));return(j=j||n.host&&E.length)&&!S&&E.unshift(""),E.length?n.pathname=E.join("/"):(n.pathname=null,n.path=null),a.isNull(n.pathname)&&a.isNull(n.search)||(n.path=(n.pathname?n.pathname:"")+(n.search?n.search:"")),n.auth=e.auth||n.auth,n.slashes=n.slashes||e.slashes,n.href=n.format(),n},o.prototype.parseHost=function(){var e=this.host,t=s.exec(e);t&&(":"!==(t=t[0])&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)}},178:function(e,t,n){(function(e,r){var a;!function(o){t&&t.nodeType,e&&e.nodeType;var l="object"==typeof r&&r;l.global!==l&&l.window!==l&&l.self;var s,i=2147483647,u=36,c=/^xn--/,f=/[^\x20-\x7E]/,h=/[\x2E\u3002\uFF0E\uFF61]/g,d={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},p=Math.floor,m=String.fromCharCode;function v(e){throw new RangeError(d[e])}function y(e,t){for(var n=e.length,r=[];n--;)r[n]=t(e[n]);return r}function g(e,t){var n=e.split("@"),r="";return n.length>1&&(r=n[0]+"@",e=n[1]),r+y((e=e.replace(h,".")).split("."),t).join(".")}function b(e){for(var t,n,r=[],a=0,o=e.length;a<o;)(t=e.charCodeAt(a++))>=55296&&t<=56319&&a<o?56320==(64512&(n=e.charCodeAt(a++)))?r.push(((1023&t)<<10)+(1023&n)+65536):(r.push(t),a--):r.push(t);return r}function k(e){return y(e,(function(e){var t="";return e>65535&&(t+=m((e-=65536)>>>10&1023|55296),e=56320|1023&e),t+=m(e)})).join("")}function j(e,t){return e+22+75*(e<26)-((0!=t)<<5)}function O(e,t,n){var r=0;for(e=n?p(e/700):e>>1,e+=p(e/t);e>455;r+=u)e=p(e/35);return p(r+36*e/(e+38))}function E(e){var t,n,r,a,o,l,s,c,f,h,d,m=[],y=e.length,g=0,b=128,j=72;for((n=e.lastIndexOf("-"))<0&&(n=0),r=0;r<n;++r)e.charCodeAt(r)>=128&&v("not-basic"),m.push(e.charCodeAt(r));for(a=n>0?n+1:0;a<y;){for(o=g,l=1,s=u;a>=y&&v("invalid-input"),((c=(d=e.charCodeAt(a++))-48<10?d-22:d-65<26?d-65:d-97<26?d-97:u)>=u||c>p((i-g)/l))&&v("overflow"),g+=c*l,!(c<(f=s<=j?1:s>=j+26?26:s-j));s+=u)l>p(i/(h=u-f))&&v("overflow"),l*=h;j=O(g-o,t=m.length+1,0==o),p(g/t)>i-b&&v("overflow"),b+=p(g/t),g%=t,m.splice(g++,0,b)}return k(m)}function x(e){var t,n,r,a,o,l,s,c,f,h,d,y,g,k,E,x=[];for(y=(e=b(e)).length,t=128,n=0,o=72,l=0;l<y;++l)(d=e[l])<128&&x.push(m(d));for(r=a=x.length,a&&x.push("-");r<y;){for(s=i,l=0;l<y;++l)(d=e[l])>=t&&d<s&&(s=d);for(s-t>p((i-n)/(g=r+1))&&v("overflow"),n+=(s-t)*g,t=s,l=0;l<y;++l)if((d=e[l])<t&&++n>i&&v("overflow"),d==t){for(c=n,f=u;!(c<(h=f<=o?1:f>=o+26?26:f-o));f+=u)E=c-h,k=u-h,x.push(m(j(h+E%k,0))),c=p(E/k);x.push(m(j(c,0))),o=O(n,g,r==a),n=0,++r}++n,++t}return x.join("")}s={version:"1.4.1",ucs2:{decode:b,encode:k},decode:E,encode:x,toASCII:function(e){return g(e,(function(e){return f.test(e)?"xn--"+x(e):e}))},toUnicode:function(e){return g(e,(function(e){return c.test(e)?E(e.slice(4).toLowerCase()):e}))}},void 0===(a=function(){return s}.call(t,n,t,e))||(e.exports=a)}()}).call(this,n(179)(e),n(21))},179:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},180:function(e,t,n){"use strict";e.exports={isString:function(e){return"string"==typeof e},isObject:function(e){return"object"==typeof e&&null!==e},isNull:function(e){return null===e},isNullOrUndefined:function(e){return null==e}}},181:function(e,t,n){"use strict";t.decode=t.parse=n(182),t.encode=t.stringify=n(183)},182:function(e,t,n){"use strict";function r(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,n,o){t=t||"&",n=n||"=";var l={};if("string"!=typeof e||0===e.length)return l;var s=/\+/g;e=e.split(t);var i=1e3;o&&"number"==typeof o.maxKeys&&(i=o.maxKeys);var u=e.length;i>0&&u>i&&(u=i);for(var c=0;c<u;++c){var f,h,d,p,m=e[c].replace(s,"%20"),v=m.indexOf(n);v>=0?(f=m.substr(0,v),h=m.substr(v+1)):(f=m,h=""),d=decodeURIComponent(f),p=decodeURIComponent(h),r(l,d)?a(l[d])?l[d].push(p):l[d]=[l[d],p]:l[d]=p}return l};var a=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},183:function(e,t,n){"use strict";var r=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,n,s){return t=t||"&",n=n||"=",null===e&&(e=void 0),"object"==typeof e?o(l(e),(function(l){var s=encodeURIComponent(r(l))+n;return a(e[l])?o(e[l],(function(e){return s+encodeURIComponent(r(e))})).join(t):s+encodeURIComponent(r(e[l]))})).join(t):s?encodeURIComponent(r(s))+n+encodeURIComponent(r(e)):""};var a=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function o(e,t){if(e.map)return e.map(t);for(var n=[],r=0;r<e.length;r++)n.push(t(e[r],r));return n}var l=Object.keys||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t}},184:function(e,t,n){"use strict";const r=(e,{target:t=document.body}={})=>{const n=document.createElement("textarea"),r=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const a=document.getSelection();let o=!1;a.rangeCount>0&&(o=a.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch(s){}return n.remove(),o&&(a.removeAllRanges(),a.addRange(o)),r&&r.focus(),l};e.exports=r,e.exports.default=r},185:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,a,o]=t;if(r&&o){r=parseInt(r),o=parseInt(o);const e=r<o?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(o+=e);for(let t=r;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},186:function(e,t,n){"use strict";var r=n(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(187)),o=r(n(121)),l=n(112),s=function(){var e=(0,l.useThemeConfig)().prism,t=(0,o.default)().isDarkTheme,n=e.theme||a.default,r=e.darkTheme||n;return t?r:n};t.default=s},187:function(e,t,n){"use strict";n.r(t);t.default={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]}},188:function(e,t,n){"use strict";var r=n(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(8)),o=r(n(0)),l=r(n(113)),s=n(112);n(106);var i=r(n(107)),u=function(e){return function(t){var n,r=t.id,u=(0,a.default)(t,["id"]),c=(0,s.useThemeConfig)().navbar.hideOnScroll;return r?o.default.createElement(e,u,o.default.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,l.default)("anchor",(n={},n[i.default.enhancedAnchor]=!c,n)),id:r}),u.children,o.default.createElement("a",{className:"hash-link",href:"#"+r,title:"Direct link to heading"},"#")):o.default.createElement(e,u)}};t.default=u},190:function(e,t,n){"use strict";n.r(t),n.d(t,"Prism",(function(){return r.default})),n.d(t,"defaultProps",(function(){return l}));var r=n(32),a={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},o=n(0),l={Prism:r.default,theme:a};function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=/\r\n|\r|\n/,c=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},f=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},h=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=i({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=i({},n,{backgroundColor:null}),a};function d(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var p=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),s(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?h(e.theme,e.language):void 0;return t.themeDict=n})),s(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=i({},d(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==a&&(o.style=void 0!==o.style?i({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),s(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var l=r?{display:"inline-block"}:{},s=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(s))}})),s(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,l=i({},d(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(l.style=void 0!==l.style?i({},l.style,a):a),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),s(this,"tokenize",(function(e,t,n,r){var a={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",a);var o=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],o=0,l=0,s=[],i=[s];l>-1;){for(;(o=r[l]++)<a[l];){var h=void 0,d=t[l],p=n[l][o];if("string"==typeof p?(d=l>0?d:["plain"],h=p):(d=f(d,p.type),p.alias&&(d=f(d,p.alias)),h=p.content),"string"==typeof h){var m=h.split(u),v=m.length;s.push({types:d,content:m[0]});for(var y=1;y<v;y++)c(s),i.push(s=[]),s.push({types:d,content:m[y]})}else l++,t.push(d),n.push(h),r.push(0),a.push(h.length)}l--,t.pop(),n.pop(),r.pop(),a.pop()}return c(s),i}(void 0!==l?this.tokenize(t,r,l,n):[r]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component);t.default=p},37:function(e,t,n){"use strict";var r=n(4).default,a=n(31).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(0)),l=n(111),s=r(n(30)),i=r(n(34)),u=r(n(118)),c=r(n(173)),f=r(n(174)),h=r(n(93)),d=n(117),p=r(n(113)),m=r(n(109)),v=n(112);function y(e){var t,n,r,a,i=e.currentDocRoute,h=e.versionMetadata,d=e.children,y=(0,s.default)(),g=y.siteConfig,b=y.isClient,k=h.pluginId,j=h.permalinkToSidebar,O=h.docsSidebars,E=h.version,x=j[i.path],C=O[x],w=(0,o.useState)(!1),_=w[0],P=w[1],N=(0,o.useState)(!1),S=N[0],I=N[1],T=(0,o.useCallback)((function(){S&&I(!1),P(!_)}),[S]);return o.default.createElement(u.default,{key:b,searchMetadatas:{version:E,tag:(0,v.docVersionSearchTag)(k,E)}},o.default.createElement("div",{className:m.default.docPage},C&&o.default.createElement("div",{className:(0,p.default)(m.default.docSidebarContainer,(t={},t[m.default.docSidebarContainerHidden]=_,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(m.default.docSidebarContainer)&&_&&I(!0)},role:"complementary"},o.default.createElement(c.default,{key:x,sidebar:C,path:i.path,sidebarCollapsible:null===(n=null===(r=g.themeConfig)||void 0===r?void 0:r.sidebarCollapsible)||void 0===n||n,onCollapse:T,isHidden:S}),S&&o.default.createElement("div",{className:m.default.collapsedDocSidebar,title:"Expand sidebar","aria-label":"Expand sidebar",tabIndex:0,role:"button",onKeyDown:T,onClick:T})),o.default.createElement("main",{className:m.default.docMainContainer},o.default.createElement("div",{className:(0,p.default)("container padding-vert--lg",m.default.docItemWrapper,(a={},a[m.default.docItemWrapperEnhanced]=_,a))},o.default.createElement(l.MDXProvider,{components:f.default},d)))))}var g=function(e){var t=e.route.routes,n=e.versionMetadata,r=e.location,a=t.find((function(e){return(0,d.matchPath)(r.pathname,e)}));return a?o.default.createElement(y,{currentDocRoute:a,versionMetadata:n},(0,i.default)(t)):o.default.createElement(h.default,e)};t.default=g},93:function(e,t,n){"use strict";var r=n(4).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(0)),o=r(n(118));var l=function(){return a.default.createElement(o.default,{title:"Page Not Found"},a.default.createElement("main",{className:"container margin-vert--xl"},a.default.createElement("div",{className:"row"},a.default.createElement("div",{className:"col col--6 col--offset-3"},a.default.createElement("h1",{className:"hero__title"},"Page Not Found"),a.default.createElement("p",null,"We could not find what you were looking for."),a.default.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))};t.default=l}}]);
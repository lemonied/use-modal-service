(self.webpackChunkuse_modal_service=self.webpackChunkuse_modal_service||[]).push([[903],{72269:function(j,F,v){"use strict";var M=v(42630),i=v(67294),T=v(93359),k=v(96057);function E(a){"@babel/helpers - typeof";return E=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(a)}function O(a,t){return B(a)||W(a,t)||g(a,t)||A()}function A(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function g(a,t){if(a){if(typeof a=="string")return b(a,t);var l=Object.prototype.toString.call(a).slice(8,-1);if(l==="Object"&&a.constructor&&(l=a.constructor.name),l==="Map"||l==="Set")return Array.from(a);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return b(a,t)}}function b(a,t){(t==null||t>a.length)&&(t=a.length);for(var l=0,e=new Array(t);l<t;l++)e[l]=a[l];return e}function W(a,t){var l=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(l!=null){var e,n,r,o,s=[],f=!0,p=!1;try{if(r=(l=l.call(a)).next,t===0){if(Object(l)!==l)return;f=!1}else for(;!(f=(e=r.call(l)).done)&&(s.push(e.value),s.length!==t);f=!0);}catch(y){p=!0,n=y}finally{try{if(!f&&l.return!=null&&(o=l.return(),Object(o)!==o))return}finally{if(p)throw n}}return s}}function B(a){if(Array.isArray(a))return a}function R(a,t){var l=Object.keys(a);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(a);t&&(e=e.filter(function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable})),l.push.apply(l,e)}return l}function I(a){for(var t=1;t<arguments.length;t++){var l=arguments[t]!=null?arguments[t]:{};t%2?R(Object(l),!0).forEach(function(e){u(a,e,l[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(l)):R(Object(l)).forEach(function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(l,e))})}return a}function u(a,t,l){return t=d(t),t in a?Object.defineProperty(a,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):a[t]=l,a}function d(a){var t=m(a,"string");return E(t)==="symbol"?t:String(t)}function m(a,t){if(E(a)!=="object"||a===null)return a;var l=a[Symbol.toPrimitive];if(l!==void 0){var e=l.call(a,t||"default");if(E(e)!=="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(a)}function c(a){var t=a.children;return i.createElement("span",{"data-token":t},t)}function h(a){return a.hasQuestionToken&&typeof a.type=="string"&&(a.type=a.type.replace(/\s+\|\s+undefined\s*$/i,"")),a}var _=function(t){var l,e=(0,M.YB)(),n=(0,M.WF)(),r=n.themeConfig;return(l=t.source)!==null&&l!==void 0&&l[0]&&r.sourceLink?i.createElement("a",{className:"dumi-default-api-link",href:e.formatMessage({id:"$internal.api.sourceLink"},I({},t.source[0])),target:"_blank",rel:"noreferrer"},t.className):t.className},P={toNode:function(t){return typeof t.type=="string"&&t.type in this?"enum"in t?this.enum(t):this[t.type](t):t.type?this.getValidClassName(t)||i.createElement("span",null,t.type):"const"in t?i.createElement("span",null,t.const):"oneOf"in t?this.oneOf(t):i.createElement("span",null,"unknown")},string:function(t){return i.createElement("span",null,t.type)},number:function(t){return i.createElement("span",null,t.type)},boolean:function(t){return i.createElement("span",null,t.type)},any:function(t){return i.createElement("span",null,t.type)},object:function(t){var l=this,e=Object.entries(t.properties||{}),n=e.map(function(r,o){var s,f=O(r,2),p=f[0],y=f[1];return i.createElement("span",{key:p},i.createElement("span",null,p),!((s=t.required)!==null&&s!==void 0&&s.includes(p))&&i.createElement(c,null,"?"),i.createElement(c,null,":"),y.type==="object"?i.createElement("span",null,"object"):l.toNode(y),o<e.length-1&&i.createElement(c,null,";"))});return i.createElement("span",null,i.createElement(c,null,"{"),n,i.createElement(c,null,"}"))},array:function(t){var l=i.createElement("span",null,"any");if(t.items){var e=this.getValidClassName(t.items);l=e!=null?e:this.toNode(t.items)}return i.createElement("span",null,l,i.createElement(c,null,"["),i.createElement(c,null,"]"))},element:function(t){return i.createElement("span",null,i.createElement(c,null,"<"),i.createElement("span",null,t.componentName),i.createElement(c,null,">"))},function:function(t){var l=this,e=t.signature;if(!e)return i.createElement("span",null,"Function");var n="oneOf"in e?e.oneOf:[e];return n.map(function(r,o){return i.createElement("span",{key:"".concat(o)},r.isAsync?i.createElement(c,null,"async"):"",i.createElement(c,null,"("),r.arguments.map(function(s,f){return i.createElement("span",{key:"".concat(o).concat(f)},i.createElement("span",null,s.key),s.hasQuestionToken&&i.createElement(c,null,"?"),i.createElement(c,null,":"),l.toNode(s.schema?s.schema:h(s)),f<r.arguments.length-1&&i.createElement(c,null,","))}),i.createElement(c,null,")"),i.createElement(c,null,"=>"),l.toNode(r.returnType),o<n.length-1&&i.createElement(c,null,"|"))})},dom:function(t){return i.createElement("span",null,t.className||"DOM")},enum:function(t){var l=t.enum.map(function(e){return JSON.stringify(e)});return i.createElement("span",null,l.map(function(e,n){return i.createElement("span",{key:n},i.createElement("span",null,e),n<l.length-1&&i.createElement(c,null,"|"))}))},oneOf:function(t){var l=this;return t.oneOf.map(function(e,n){return i.createElement("span",{key:n},l.getValidClassName(e)||l.toNode(e),n<t.oneOf.length-1&&i.createElement(c,null,"|"))})},reference:function(t){var l=this,e=t.typeParameters||[],n=e.map(function(r,o){return i.createElement("span",{key:o},l.toNode(r),o<e.length-1&&i.createElement(c,null,","))});return i.createElement(i.Fragment,null,i.createElement("a",{className:"dumi-default-api-link",href:t.externalUrl,target:"_blank",rel:"noreferrer"},t.name),n.length?i.createElement(i.Fragment,null,i.createElement(c,null,"<"),n,i.createElement(c,null,">")):"")},getValidClassName:function(t){return"className"in t&&typeof t.className=="string"&&t.className!=="__type"?i.createElement(_,t):null}},D=function(t){var l=useState(function(){return P.toNode(t)}),e=O(l,2),n=e[0],r=e[1];return useEffect(function(){r(P.toNode(t))},[t]),React.createElement("code",{className:"dumi-default-api-type"},n)};function C(a){var t={};return Object.entries(a).forEach(function(l){var e,n,r=O(l,2),o=r[0],s=r[1],f=(e=s.tags)===null||e===void 0?void 0:e.modifierTags,p=(n=s.tags)===null||n===void 0?void 0:n.blockTags;f==null||f.forEach(function(y){(y==="alpha"||y==="beta"||y==="experimental")&&(t[o]=[y])}),p==null||p.forEach(function(y){var S=y.tag,w=y.content;if(S==="deprecated"||S==="since"){var x=w.map(function(K){return K.text}).join("");t[o]=[S,x]}})}),t}var L=function(t){var l=t.name,e=t.info,n=useIntl(),r=O(e,2),o=r[0],s=r[1],f=u({className:"dumi-default-api-release-modifer"},"data-release",o);s&&o==="deprecated"&&(f["data-dumi-tooltip"]=s);var p=o==="since"?"".concat(s,"+"):n.formatMessage({id:"api.component.release.".concat(o)});return React.createElement("span",{className:"dumi-default-api-release"},React.createElement("span",{className:"dumi-default-api-release-name","data-release":o},l),React.createElement("span",f,o==="deprecated"?p:React.createElement(Badge,{type:"info"},p)))},H=function(t){var l=useRouteMeta(),e=l.frontmatter,n=useAtomAssets(),r=n.components,o=t.id||e.atomId,s=useIntl();if(!o)throw new Error("`id` properties if required for API component!");var f=r==null?void 0:r[o],p={},y=(t.type||"props").toLowerCase();if(f){var S,w="".concat(y,"Config");p=((S=f[w])===null||S===void 0?void 0:S.properties)||{}}var x=useMemo(function(){return C(p)},[p]);return React.createElement("div",{className:"markdown"},React.createElement(Table,null,React.createElement("thead",null,React.createElement("tr",null,React.createElement("th",null,s.formatMessage({id:"api.component.name"})),React.createElement("th",null,s.formatMessage({id:"api.component.description"})),React.createElement("th",null,s.formatMessage({id:"api.component.type"})),y==="props"&&React.createElement("th",null,s.formatMessage({id:"api.component.default"})))),React.createElement("tbody",null,Object.keys(p).length?Object.entries(p).map(function(K){var V,$=O(K,2),N=$[0],U=$[1];return React.createElement("tr",{key:N},React.createElement("td",null,x[N]?React.createElement(L,{name:N,info:x[N]}):N),React.createElement("td",null,U.description||"--"),React.createElement("td",null,React.createElement(D,U)),y==="props"&&React.createElement("td",null,React.createElement("code",null,(V=f.propsConfig.required)!==null&&V!==void 0&&V.includes(N)?s.formatMessage({id:"api.component.required"}):JSON.stringify(U.default)||"--")))}):React.createElement("tr",null,React.createElement("td",{colSpan:4},s.formatMessage({id:"api.component.".concat(r?"not.found":"unavailable")},{id:o}))))))},z=null},93359:function(j,F,v){"use strict";var M=v(67294);function i(){return i=Object.assign?Object.assign.bind():function(E){for(var O=1;O<arguments.length;O++){var A=arguments[O];for(var g in A)Object.prototype.hasOwnProperty.call(A,g)&&(E[g]=A[g])}return E},i.apply(this,arguments)}var T=function(O){return React.createElement("span",i({className:"dumi-default-badge"},O))},k=null},61788:function(j,F,v){"use strict";var M=v(95470),i=v(24422),T=v(45598),k=v(67294);function E(g){"@babel/helpers - typeof";return E=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(b){return typeof b}:function(b){return b&&typeof Symbol=="function"&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":typeof b},E(g)}function O(g){var b=g.children,W=toArray(b).filter(function(R){var I;return E(R)==="object"&&typeof R.type=="function"&&((I=R.type)===null||I===void 0?void 0:I.name)===SourceCode.name}),B=W.map(function(R,I){var u,d,m=(u=R.props)!==null&&u!==void 0?u:{},c=m.lang,h=m.title;return{key:String((d=R.key)!==null&&d!==void 0?d:I),label:h||c||"txt",children:R}});return React.createElement(Tabs,{className:"dumi-default-code-group",items:B})}var A=null},96057:function(j,F,v){"use strict";var M=v(93096),i=v(67294),T=null;function k(u,d){return b(u)||g(u,d)||O(u,d)||E()}function E(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function O(u,d){if(u){if(typeof u=="string")return A(u,d);var m=Object.prototype.toString.call(u).slice(8,-1);if(m==="Object"&&u.constructor&&(m=u.constructor.name),m==="Map"||m==="Set")return Array.from(u);if(m==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m))return A(u,d)}}function A(u,d){(d==null||d>u.length)&&(d=u.length);for(var m=0,c=new Array(d);m<d;m++)c[m]=u[m];return c}function g(u,d){var m=u==null?null:typeof Symbol!="undefined"&&u[Symbol.iterator]||u["@@iterator"];if(m!=null){var c,h,_,P,D=[],C=!0,L=!1;try{if(_=(m=m.call(u)).next,d===0){if(Object(m)!==m)return;C=!1}else for(;!(C=(c=_.call(m)).done)&&(D.push(c.value),D.length!==d);C=!0);}catch(H){L=!0,h=H}finally{try{if(!C&&m.return!=null&&(P=m.return(),Object(P)!==P))return}finally{if(L)throw h}}return D}}function b(u){if(Array.isArray(u))return u}function W(u,d){if(u==null)return{};var m=B(u,d),c,h;if(Object.getOwnPropertySymbols){var _=Object.getOwnPropertySymbols(u);for(h=0;h<_.length;h++)c=_[h],!(d.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(u,c)&&(m[c]=u[c])}return m}function B(u,d){if(u==null)return{};var m={},c=Object.keys(u),h,_;for(_=0;_<c.length;_++)h=c[_],!(d.indexOf(h)>=0)&&(m[h]=u[h]);return m}var R=function(d){var m=d.children,c=W(d,T),h=useRef(null),_=useState(!1),P=k(_,2),D=P[0],C=P[1],L=useState(!1),H=k(L,2),z=H[0],a=H[1];return useEffect(function(){var t=h.current;if(t){var l=throttle(function(){C(t.scrollLeft>0),a(t.scrollLeft<t.scrollWidth-t.offsetWidth)},100);return l(),t.addEventListener("scroll",l),window.addEventListener("resize",l),function(){t.removeEventListener("scroll",l),window.removeEventListener("resize",l)}}},[]),React.createElement("div",{className:"dumi-default-table"},React.createElement("div",{className:"dumi-default-table-content",ref:h,"data-left-folded":D||void 0,"data-right-folded":z||void 0},React.createElement("table",c,m)))},I=null},85939:function(j,F,v){"use strict";var M=v(70593),i=v(67294);function T(e){"@babel/helpers - typeof";return T=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},T(e)}function k(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),r.push.apply(r,o)}return r}function E(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?k(Object(r),!0).forEach(function(o){O(e,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))})}return e}function O(e,n,r){return n=A(n),n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function A(e){var n=g(e,"string");return T(n)==="symbol"?n:String(n)}function g(e,n){if(T(e)!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var o=r.call(e,n||"default");if(T(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function b(e,n){return R(e)||B(e,n)||d(e,n)||W()}function W(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function B(e,n){var r=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var o,s,f,p,y=[],S=!0,w=!1;try{if(f=(r=r.call(e)).next,n===0){if(Object(r)!==r)return;S=!1}else for(;!(S=(o=f.call(r)).done)&&(y.push(o.value),y.length!==n);S=!0);}catch(x){w=!0,s=x}finally{try{if(!S&&r.return!=null&&(p=r.return(),Object(p)!==p))return}finally{if(w)throw s}}return y}}function R(e){if(Array.isArray(e))return e}function I(e){return c(e)||m(e)||d(e)||u()}function u(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function d(e,n){if(e){if(typeof e=="string")return h(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(e,n)}}function m(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function c(e){if(Array.isArray(e))return h(e)}function h(e,n){(n==null||n>e.length)&&(n=e.length);for(var r=0,o=new Array(n);r<n;r++)o[r]=e[r];return o}function _(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=[];return[].concat(e).forEach(function(o,s){var f="".concat(n?"".concat(n,"-"):"").concat(s);switch(o==null?void 0:o.type){case"ul":{var p,y=((p=r[r.length-1])===null||p===void 0?void 0:p.children)||r,S=_(o.props.children||[],f);y.push.apply(y,I(S));break}case"li":{var w,x,K=(w=o.props.children)===null||w===void 0||(x=w.some)===null||x===void 0?void 0:x.call(w,function(N){var U;return N.type==="ul"&&!((U=N.props.children)!==null&&U!==void 0&&U.length)}),V=[].concat(o.props.children).filter(function(N){return N.type!=="ul"}),$=K?[]:_(o.props.children,f);r.push({title:V,key:f,children:$,isLeaf:!K&&!$.length,switcherIcon:K?React.createElement("span",{className:"tree-switcher-leaf-line"}):void 0});break}default:}}),r}var P=function(n){var r=useState(_(n)),o=b(r,2),s=o[0],f=o[1];return useEffect(function(){f(_(n))},[n]),s},D=function(n){var r,o=n.isLeaf,s=n.expanded,f=n.data;return o?React.createElement("span",{className:"dumi-default-tree-icon"},React.createElement(FileOutlined,{fill:"currentColor"})):!s||!(f!=null&&(r=f.children)!==null&&r!==void 0&&r.length)?React.createElement("span",{className:"dumi-default-tree-icon"},React.createElement(FolderOutlined,{fill:"currentColor"})):React.createElement("span",{className:"dumi-default-tree-icon"},React.createElement(FolderOpenOutlined,{fill:"currentColor"}))},C=function(n){var r=n.isLeaf,o=n.expanded;return r?React.createElement("span",{className:"tree-switcher-leaf-line"}):o?React.createElement("span",{className:"tree-switcher-line-icon"},React.createElement("span",{className:"dumi-default-tree-icon"},React.createElement(MinusSquareOutlined,{fill:"currentColor"}))):React.createElement("span",{className:"tree-switcher-line-icon"},React.createElement("span",{className:"dumi-default-tree-icon"},React.createElement(PlusSquareOutlined,{fill:"currentColor"})))},L=function(){return{height:0,opacity:0}},H=function(n){var r=n.scrollHeight;return{height:r,opacity:1}},z=function(n){return{height:n?n.offsetHeight:0}},a=function(n,r){return(r==null?void 0:r.deadline)===!0||r.propertyName==="height"},t={motionName:"ant-motion-collapse",onAppearStart:L,onEnterStart:L,onAppearActive:H,onEnterActive:H,onLeaveStart:z,onLeaveActive:L,onAppearEnd:a,onEnterEnd:a,onLeaveEnd:a,motionDeadline:500},l=function(e){var n=P(e.children),r=createRef(),o=function(f,p){var y,S=p.isLeaf,w=!S&&!((y=p.children)!==null&&y!==void 0&&y.length);S||w||f.shiftKey||f.metaKey||f.ctrlKey||r.current.onNodeExpand(f,p)};return React.createElement(Tree,{className:"dumi-default-tree",icon:D,ref:r,itemHeight:20,showLine:!0,selectable:!1,virtual:!1,motion:E(E({},t),{},{motionAppear:!1}),onClick:o,treeData:[{key:"0",title:e.title||"<root>",children:n}],defaultExpandAll:!0,switcherIcon:C})}},45598:function(j,F,v){"use strict";var M,i=v(64836).default;M={value:!0},M=E;var T=i(v(67294)),k=v(59864);function E(O){var A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},g=[];return T.default.Children.forEach(O,function(b){b==null&&!A.keepEmpty||(Array.isArray(b)?g=g.concat(E(b)):(0,k.isFragment)(b)&&b.props?g=g.concat(E(b.props.children,A)):g.push(b))}),g}},64836:function(j){function F(v){return v&&v.__esModule?v:{default:v}}j.exports=F,j.exports.__esModule=!0,j.exports.default=j.exports}}]);

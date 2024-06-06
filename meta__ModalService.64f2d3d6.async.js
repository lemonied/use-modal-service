"use strict";(self.webpackChunkuse_modal_service=self.webpackChunkuse_modal_service||[]).push([[629],{82564:function(_,s,e){e.r(s),e.d(s,{demos:function(){return k}});var F=e(15009),O=e.n(F),$=e(99289),L=e.n($),C=e(67294),k={"src-modal-service-demo-commonmodal":{component:C.memo(C.lazy(function(){return e.e(433).then(e.bind(e,40733))})),asset:{type:"BLOCK",id:"src-modal-service-demo-commonmodal",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(63299).Z},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.18.0"},"use-modal-service":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{react:e(67294),antd:e(93268),"use-modal-service":e(3411)},renderOpts:{compile:function(){var T=L()(O()().mark(function R(){var f,n=arguments;return O()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(19).then(e.bind(e,4019));case 2:return o.abrupt("return",(f=o.sent).default.apply(f,n));case 3:case"end":return o.stop()}},R)}));function a(){return T.apply(this,arguments)}return a}()}},"src-modal-service-demo-tablemodal":{component:C.memo(C.lazy(function(){return e.e(433).then(e.bind(e,96988))})),asset:{type:"BLOCK",id:"src-modal-service-demo-tablemodal",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(27450).Z},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.18.0"},"use-modal-service":{type:"NPM",value:"1.0.0"},"./TableEditForm.tsx":{type:"FILE",value:e(22545).Z}},entry:"index.tsx"},context:{react:e(67294),antd:e(93268),"use-modal-service":e(3411),"./TableEditForm.tsx":e(207)},renderOpts:{compile:function(){var T=L()(O()().mark(function R(){var f,n=arguments;return O()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(19).then(e.bind(e,4019));case 2:return o.abrupt("return",(f=o.sent).default.apply(f,n));case 3:case"end":return o.stop()}},R)}));function a(){return T.apply(this,arguments)}return a}()}},"src-modal-service-demo-contextmodal":{component:C.memo(C.lazy(function(){return e.e(433).then(e.bind(e,68265))})),asset:{type:"BLOCK",id:"src-modal-service-demo-contextmodal",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(25433).Z},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.18.0"},"use-modal-service":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{react:e(67294),antd:e(93268),"use-modal-service":e(3411)},renderOpts:{compile:function(){var T=L()(O()().mark(function R(){var f,n=arguments;return O()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(19).then(e.bind(e,4019));case 2:return o.abrupt("return",(f=o.sent).default.apply(f,n));case 3:case"end":return o.stop()}},R)}));function a(){return T.apply(this,arguments)}return a}()}}}},207:function(_,s,e){e.r(s),e.d(s,{EditForm:function(){return B}});var F=e(15009),O=e.n(F),$=e(99289),L=e.n($),C=e(5574),k=e.n(C),T=e(67294),a=e(65520),R=e(38289),f=e(3411),n=e(85893),B=function(V){var M=V.record,N=a.Z.useForm(),K=k()(N,1),W=K[0],P=(0,f.useModalInstance)();return(0,f.useOnOkInject)(L()(O()().mark(function z(){var U;return O()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,W.validateFields();case 2:return U=D.sent,D.next=5,new Promise(function(Y){setTimeout(Y,1e3)});case 5:P==null||P.close(U);case 6:case"end":return D.stop()}},z)}))),T.useEffect(function(){P==null||P.update({title:M?"\u7F16\u8F91":"\u65B0\u589E"})},[P,M]),(0,n.jsxs)(a.Z,{layout:"vertical",form:W,initialValues:M,children:[(0,n.jsx)(a.Z.Item,{label:"\u59D3\u540D",name:"name",children:(0,n.jsx)(R.Z,{})}),(0,n.jsx)(a.Z.Item,{label:"\u5E74\u9F84",name:"age",children:(0,n.jsx)(R.Z,{})})]})}},3411:function(_,s,e){e.r(s),e.d(s,{useModalInstance:function(){return W},useModalService:function(){return le},useOnOkInject:function(){return U}});var F=e(15009),O=e.n(F),$=e(99289),L=e.n($),C=e(13769),k=e.n(C),T=e(97857),a=e.n(T),R=e(19632),f=e.n(R),n=e(67294),B=e(5574),o=e.n(B),V=e(85576),M=e(85893),N=Symbol("hooks"),K=n.createContext(null);function W(){return n.useContext(K)}function P(d){var r={close:d.get("close"),triggerOk:d.get("triggerOk"),update:d.get("update"),getHooks:function(l){if(l===N)return d;throw new Error("getHooks method is for internal use only")}};return r}var z=n.memo(function(d){var r=d.children,c=d.value,l=n.useMemo(function(){return P(c)},[c]);return(0,M.jsx)(K.Provider,{value:l,children:r})}),U=function(r){var c=n.useRef(r);c.current=r;var l=W(),x=l.getHooks,j=x(N);n.useEffect(function(){var v=j.get("onOks"),h=function(){return c.current()};return v.push(h),function(){var E=v.indexOf(h);E>-1&&v.splice(E,1)}},[j])},Q=e(67159),D=function(r){var c=/(\d+)|([a-zA-Z]+)/g,l=r==null?void 0:r.match(c);return(l==null?void 0:l.map(function(x){return/^\d+$/.test(x)?Number(x):x}))||[]},Y=function(){var r=D(Q.Z),c=r[0],l=r[1];return typeof c=="number"&&c>4?!0:c===4?typeof l=="number"&&l>=23:!1},ne=e(52677),ae=e.n(ne),Z=e(73935),re=e.t(Z,2),X=a()({},re);function w(d){var r=X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;r&&ae()(r)==="object"&&(r.usingClientEntryPoint=d)}function oe(d,r){var c=Z.version,l=parseInt(c.split(".")[0],10),x;if(l<18)Z.render(r,d),x=function(){Z.unmountComponentAtNode(d)};else{w(!0);var j=X.createRoot(d);w(!1),j.render(r),x=function(){Promise.resolve().then(function(){return j.unmount()})}}return function(){var v;x(),(v=d.parentNode)===null||v===void 0||v.removeChild(d)}}var te=n.forwardRef(function(d,r){var c=n.useState([]),l=o()(c,2),x=l[0],j=l[1],v=n.useMemo(function(){return Y()},[]);return n.useImperativeHandle(r,function(){return{items:x,setItems:j}},[x,j]),(0,M.jsx)(M.Fragment,{children:x.map(function(h){var E=v?{open:h.open}:{visible:h.open};return(0,M.jsx)(n.Fragment,{children:(0,M.jsx)(z,{value:h.hooks,children:(0,M.jsx)(V.Z,a()(a()(a()({},h.options),E),{},{onOk:h.hooks.get("triggerOk"),onCancel:h.hooks.get("onCancel"),afterClose:h.hooks.get("afterClose"),children:h.options.children}))})},h.key)})})}),q=n.memo(te),de=["onOk"],le=function(){var r=n.useRef(null),c=n.useRef(null),l=n.useRef(0),x=n.useCallback(function(){var v,h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};l.current+=1;var E=l.current,A=r.current?r:c,J={key:E,open:!0,options:h,hooks:new Map},y=J.hooks,ee=function(u){var m;y.get("resolve")(u),(m=A.current)===null||m===void 0||m.setItems(function(I){var t=I.find(function(p){return p.key===E});return t?[].concat(f()(I.filter(function(p){return p!==t})),[a()(a()({},t),{},{open:!1,options:a()(a()({},t.options),{},{confirmLoading:!1})})]):I})};y.set("close",ee),y.set("onOk",h.onOk),y.set("onOks",[]);var b=function(u){var m;(m=A.current)===null||m===void 0||m.setItems(function(I){var t=I.find(function(G){return G.key===E});if(!t)return I;var p=typeof u=="function"?u(a()(a()({},t.options),{},{onOk:t.hooks.get("onOk")})):u,S=p.onOk,H=k()(p,de);return"onOk"in p&&t.hooks.set("onOk",S),[].concat(f()(I.filter(function(G){return G!==t})),[a()(a()({},t),{},{options:a()(a()({},t.options),H)})])})};y.set("update",b);var ue=function(){var i=L()(O()().mark(function u(){var m,I,t,p,S,H;return O()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return b({confirmLoading:!0}),g.prev=1,t=(m=y.get("onOks"))!==null&&m!==void 0?m:[],p=y.get("onOk"),S=(I=t[t.length-1])!==null&&I!==void 0?I:p,g.next=7,S==null?void 0:S();case 7:return H=g.sent,b({confirmLoading:!1}),g.abrupt("return",H);case 12:throw g.prev=12,g.t0=g.catch(1),b({confirmLoading:!1}),g.t0;case 16:case"end":return g.stop()}},u,null,[[1,12]])}));return function(){return i.apply(this,arguments)}}();y.set("triggerOk",ue),y.set("onCancel",function(){var i,u,m;ee();for(var I=arguments.length,t=new Array(I),p=0;p<I;p++)t[p]=arguments[p];return(i=A.current)===null||i===void 0||(i=i.items.find(function(S){return S.key===E}))===null||i===void 0||(u=(m=i.options).onCancel)===null||u===void 0?void 0:u.call.apply(u,[m].concat(t))}),y.set("afterClose",function(){var i,u,m,I;return(i=A.current)===null||i===void 0||i.setItems(function(t){return t.filter(function(p){return p.key!==E})}),(u=A.current)===null||u===void 0||(u=u.items.find(function(t){return t.key===E}))===null||u===void 0||(m=(I=u.options).afterClose)===null||m===void 0?void 0:m.call(I)});var se=new Promise(function(i){y.set("resolve",i)});return(v=A.current)===null||v===void 0||v.setItems(function(i){return[].concat(f()(i),[J])}),a()({afterClose:se},P(J.hooks))},[]);n.useEffect(function(){var v=document.createDocumentFragment();return document.body.appendChild(v),oe(v,(0,M.jsx)(q,{ref:c}))},[]);var j=n.useMemo(function(){return(0,M.jsx)(q,{ref:r},"modal-holder")},[]);return[x,j]}},32198:function(_,s,e){e.r(s),e.d(s,{texts:function(){return F}});const F=[{value:"ModalService",paraId:0},{value:"\u4F9D\u8D56\u4E8E",paraId:0},{value:"antd",paraId:0},{value:"\uFF0C\u76EE\u7684\u662F\u4F7F\u7528\u670D\u52A1\u7684\u65B9\u5F0F\u6765\u8C03\u7528",paraId:0},{value:"Modal",paraId:0},{value:"\u5F39\u7A97\uFF0C\u4F7F\u7528\u8005\u4E0D\u5FC5\u5173\u5FC3\u5F39\u7A97\u7684\u663E\u793A/\u9690\u85CF\u53CA\u786E\u8BA4\u6309\u94AE\u7684\u5F02\u6B65\u5904\u7406\uFF0C\u53EA\u9700\u8981\u5173\u6CE8\u4E1A\u52A1\u903B\u8F91\u5373\u53EF",paraId:0},{value:"\u5728\u5B50\u7EC4\u4EF6\u4E2D\u83B7\u53D6",paraId:1,tocIndex:2},{value:"modal\u5B9E\u4F8B",paraId:1,tocIndex:2},{value:"\u5E76\u6CE8\u5165",paraId:1,tocIndex:2},{value:"onOk",paraId:1,tocIndex:2},{value:"\u7684\u51FD\u6570",paraId:1,tocIndex:2},{value:"\u5728\u5B50\u7EC4\u4EF6\u4E2D\u8C03\u7528",paraId:1,tocIndex:2},{value:"update",paraId:1,tocIndex:2},{value:"\u65B9\u6CD5\u5F02\u6B65\u66F4\u65B0",paraId:1,tocIndex:2},{value:"ModalProps",paraId:1,tocIndex:2},{value:"\u5728\u5B50\u7EC4\u4EF6\u4E2D\u8C03\u7528",paraId:1,tocIndex:2},{value:"close",paraId:1,tocIndex:2},{value:"\u65B9\u6CD5\u5173\u95ED\u5F39\u7A97\u5E76\u5C06\u7ED3\u679C\u56DE\u4F20\u7ED9\u7236\u7EA7",paraId:1,tocIndex:2},{value:"\u4ECE\u8FD9\u4E2A\u4F8B\u5B50\u53EF\u4EE5\u770B\u51FA\u6765",paraId:2},{value:"useModalService",paraId:2},{value:"\u7684\u6838\u5FC3\u4F5C\u7528\uFF1A",paraId:2},{value:"Table",paraId:3},{value:"\u7EC4\u4EF6\u53EA\u8D1F\u8D23",paraId:3},{value:"Modal",paraId:3},{value:"\u7684\u663E\u793A/\u5173\u95ED\uFF0C\u5E76\u4E14\u5904\u7406",paraId:3},{value:"Modal",paraId:3},{value:"\u5173\u95ED\u540E\u7684\u8FD4\u56DE\u503C",paraId:3},{value:"EditForm",paraId:3},{value:"\u7EC4\u4EF6\u53EA\u8D1F\u8D23\u8868\u5355\u7684\u903B\u8F91\uFF0C\u6CE8\u5165\u70B9\u51FB",paraId:3},{value:"OK",paraId:3},{value:"\u7684\u56DE\u8C03\uFF0C\u4EE5\u53CA\u5173\u95ED\u540E\u7684\u8FD4\u56DE\u503C",paraId:3},{value:"\u5F53\u4F60\u7684",paraId:4,tocIndex:3},{value:"Modal",paraId:4,tocIndex:3},{value:"\u9700\u8981\u83B7\u53D6\u4E0A\u4E0B\u6587\u65F6\uFF0C\u8BF7\u5C06",paraId:4,tocIndex:3},{value:"holder",paraId:4,tocIndex:3},{value:"\u63D2\u5165\u5230\u5BF9\u5E94\u4F4D\u7F6E\uFF0C",paraId:4,tocIndex:3},{value:"Modal",paraId:4,tocIndex:3},{value:"\u5185\u7EC4\u4EF6\u5C31\u53EF\u4EE5\u83B7\u53D6",paraId:4,tocIndex:3},{value:"holder",paraId:4,tocIndex:3},{value:"\u6240\u5904\u4F4D\u7F6E\u7684\u4E0A\u4E0B\u6587\uFF08",paraId:4,tocIndex:3},{value:"Context",paraId:4,tocIndex:3},{value:"\u3001",paraId:4,tocIndex:3},{value:"Redux",paraId:4,tocIndex:3},{value:"\u3001",paraId:4,tocIndex:3},{value:"dva",paraId:4,tocIndex:3},{value:"\u7B49\uFF09",paraId:4,tocIndex:3},{value:"useModalService()",paraId:5,tocIndex:5},{value:"\u8FD4\u56DE",paraId:5,tocIndex:5},{value:"[create, holder]",paraId:5,tocIndex:5},{value:"create(options)",paraId:6,tocIndex:6},{value:"\u6253\u5F00\u4E00\u4E2A\u5F39\u7A97\u5E76\u8FD4\u56DE\u5F39\u7A97\u7684\u5B9E\u4F8B",paraId:6,tocIndex:6},{value:`type create = <Result=any>(options?: ModalServiceOptions) => ModalInstance<Result> & { afterClose: Promise<Result | undefined> };
`,paraId:7,tocIndex:6},{value:"create",paraId:8,tocIndex:6},{value:"\u65B9\u6CD5\u8FD4\u56DE\u7684\u5B9E\u4F8B\u4F1A\u989D\u5916\u591A\u51FA\u4E00\u4E2A",paraId:8,tocIndex:6},{value:"afterClose",paraId:8,tocIndex:6},{value:"\u5C5E\u6027\uFF0C\u8FD9\u662F\u4E2A",paraId:8,tocIndex:6},{value:"Promise",paraId:8,tocIndex:6},{value:"\uFF0C\u8FD4\u56DE\u503C\u4E3A\u8C03\u7528",paraId:8,tocIndex:6},{value:"close",paraId:8,tocIndex:6},{value:"\u65B9\u6CD5\u65F6\u4F20\u5165\u7684\u503C\uFF1B",paraId:8,tocIndex:6},{value:"\u5982\u679C\u4E0D\u662F\u901A\u8FC7\u4E3B\u52A8\u8C03\u7528",paraId:8,tocIndex:6},{value:"close",paraId:8,tocIndex:6},{value:"\u65B9\u6CD5\u5173\u95ED\u7684\u5F39\u7A97\uFF08\u70B9\u51FB\u7A7A\u767D\u5904\u3001\u70B9\u51FB\xD7\u53F7\u3001\u70B9\u51FBCancel\u6309\u94AE\uFF09\uFF0C\u5219\u8FD4\u56DE\u503C\u4E3A",paraId:8,tocIndex:6},{value:"undefined",paraId:8,tocIndex:6},{value:"\uFF0C\u53EF\u4EE5\u901A\u8FC7",paraId:8,tocIndex:6},{value:"afterClose",paraId:8,tocIndex:6},{value:"\u7684\u8FD4\u56DE\u503C\u6765\u5224\u65AD\u5F39\u7A97\u5185\u4E1A\u52A1\u662F\u5426\u5904\u7406\u6210\u529F\uFF0C\u5E76\u6839\u636E\u8FD4\u56DE\u503C\u505A\u4E0B\u4E00\u6B65\u7684\u5904\u7406\uFF1B",paraId:8,tocIndex:6},{value:"\u6CE8\u610F\uFF1A",paraId:9,tocIndex:6},{value:" \u8FD9\u91CC\u7684",paraId:9,tocIndex:6},{value:"afterClose",paraId:9,tocIndex:6},{value:"\u8DDF\u914D\u7F6E\u9879\u91CC\u7684",paraId:9,tocIndex:6},{value:"afterClose",paraId:9,tocIndex:6},{value:"\u4E0D\u540C\uFF0C\u914D\u7F6E\u9879\u91CC\u7684",paraId:9,tocIndex:6},{value:"afterClose",paraId:9,tocIndex:6},{value:"\u4EE3\u8868\u5F39\u7A97\u5B8C\u5168\u5173\u95ED\u65F6\u7684\u56DE\u8C03\u51FD\u6570\uFF1B",paraId:9,tocIndex:6},{value:"holder",paraId:10,tocIndex:7},{value:"\u662F\u4E00\u4E2A",paraId:10,tocIndex:7},{value:"ReactElement",paraId:10,tocIndex:7},{value:"\uFF0C\u5982\u679C\u9700\u8981\u83B7\u53D6\u4E0A\u4E0B\u6587\uFF0C\u9700\u8981\u5C06holder\u63D2\u5165\u5230\u9875\u9762\u8282\u70B9\u4E2D\u53BB\uFF1A",paraId:10,tocIndex:7},{value:`const [create, holder] = useModalService();
return (
  <>
    {holder}
    <OtherComponent />
  </>
);
`,paraId:11,tocIndex:7},{value:"holder",paraId:12,tocIndex:7},{value:"\u91CC\u5176\u5B9E\u5C31\u662F",paraId:12,tocIndex:7},{value:"Modal",paraId:12,tocIndex:7},{value:"\u7EC4\u4EF6\uFF0C\u5982\u679C\u63D2\u5165\u4E86",paraId:12,tocIndex:7},{value:"holder",paraId:12,tocIndex:7},{value:"\uFF0C\u90A3\u4E48",paraId:12,tocIndex:7},{value:"Modal",paraId:12,tocIndex:7},{value:"\u5185\u7EC4\u4EF6\u5C31\u80FD\u83B7\u53D6",paraId:12,tocIndex:7},{value:"holder",paraId:12,tocIndex:7},{value:"\u6240\u5904\u4F4D\u7F6E\u7684\u4E0A\u4E0B\u6587\uFF08",paraId:12,tocIndex:7},{value:"Context",paraId:12,tocIndex:7},{value:"\u3001",paraId:12,tocIndex:7},{value:"redux",paraId:12,tocIndex:7},{value:"\u3001",paraId:12,tocIndex:7},{value:"dva",paraId:12,tocIndex:7},{value:"\u7B49\uFF09",paraId:12,tocIndex:7},{value:"\u76F8\u53CD\uFF0C\u5982\u679C\u6CA1\u6709\u63D2\u5165",paraId:12,tocIndex:7},{value:"holder",paraId:12,tocIndex:7},{value:"\uFF0C\u5219",paraId:12,tocIndex:7},{value:"create",paraId:12,tocIndex:7},{value:"\u521B\u5EFA\u7684",paraId:12,tocIndex:7},{value:"Modal",paraId:12,tocIndex:7},{value:"\u4F1A\u88AB\u6CE8\u5165\u5230\u5168\u5C40\uFF0C\u5C31\u65E0\u6CD5\u83B7\u53D6\u4E0A\u4E0B\u6587",paraId:12,tocIndex:7},{value:`type holder = React.ReactElement;
`,paraId:13,tocIndex:7},{value:"\u5728\u5F39\u7A97\u5185\u90E8\u4F7F\u7528\u7684",paraId:14,tocIndex:8},{value:"hook",paraId:14,tocIndex:8},{value:"\uFF0C\u8FD4\u56DE\u503C\u4E3A",paraId:14,tocIndex:8},{value:"ModalInstance",paraId:15,tocIndex:8},{value:"\u5728\u5F39\u7A97\u5185\u7EC4\u4EF6\u6CE8\u5165",paraId:16,tocIndex:9},{value:"onOk",paraId:16,tocIndex:9},{value:"\u7684\u56DE\u8C03\u51FD\u6570",paraId:16,tocIndex:9},{value:"\u6CE8\u610F\uFF1A",paraId:17,tocIndex:9},{value:" \u901A\u8FC7",paraId:17,tocIndex:9},{value:"useOnOkInject",paraId:17,tocIndex:9},{value:"\u6CE8\u5165\u7684\u51FD\u6570\u4F1A\u8986\u76D6",paraId:17,tocIndex:9},{value:"ModalServiceOptions",paraId:17,tocIndex:9},{value:"\u4E2D\u7684",paraId:17,tocIndex:9},{value:"onOk",paraId:17,tocIndex:9},{value:"\u51FD\u6570",paraId:17,tocIndex:9},{value:`// \u53C2\u6570\u540ConOk\uFF0C\u652F\u6301Promise
type useOnOkInject = (onOk: () => any) => void;
`,paraId:18,tocIndex:9},{value:"\u7EE7\u627F\u81EAantd ",paraId:19,tocIndex:11},{value:"ModalProps",paraId:19,tocIndex:11},{value:`export interface ModalServiceOptions extends Omit<ModalProps, 'open' | 'onOk' | 'visible'> {
  // onOk\u51FD\u6570\u8FD4\u56DE\u4E00\u4E2APromise\u65F6\uFF0C\u5C06\u4F1A\u7ED9ok\u6309\u94AE\u81EA\u52A8\u52A0\u4E0Aloading
  onOk?: () => any;
}
`,paraId:20,tocIndex:11},{value:`interface ModalInstance<Result = any> {
  /**
   * \u5173\u95ED\u5F39\u7A97\uFF0C\u4F20\u5165\u7684value\u5C06\u4F5C\u4E3AafterClose\u7684\u8FD4\u56DE\u503C
   */
  close: (value?: Result) => void;
  /**
   * \u624B\u52A8\u89E6\u53D1onOk\u51FD\u6570
   */
  triggerOk: () => Promise<any>;
  /**
   * \u66F4\u65B0ModalProps
   */
  update: (options: ModalServiceOptions | ((pre: ModalServiceOptions) => ModalServiceOptions)) => void;
};
`,paraId:21,tocIndex:12},{value:"destroyOnClose",paraId:22},{value:"forceRender",paraId:22},{value:"ModalService",paraId:23,tocIndex:14},{value:"\u53EA\u6709\u5728\u8C03\u7528",paraId:23,tocIndex:14},{value:"create",paraId:23,tocIndex:14},{value:"\u65F6\u624D\u521B\u5EFA\u5E76\u6253\u5F00\u5F39\u7A97\uFF0C\u5728\u5B8C\u5168\u5173\u95ED\u540E\u9500\u6BC1\uFF1B\u8FD9\u6837\u505A\u7684\u76EE\u7684\u662F\u4E3A\u4E86\u9632\u6B62\u9875\u9762\u591A\u6B21\u8C03\u7528",paraId:23,tocIndex:14},{value:"create",paraId:23,tocIndex:14},{value:"\u4F46\u672A\u53CA\u65F6\u9500\u6BC1\u4ECE\u800C\u9020\u6210\u5E94\u7528\u7684\u6027\u80FD\u635F\u8017\uFF0C\u6240\u4EE5\u5728\u5F39\u7A97\u5173\u95ED\u540E\u9500\u6BC1\u4E86\u5BF9\u5E94\u7684",paraId:23,tocIndex:14},{value:"Modal",paraId:23,tocIndex:14},{value:"\u7EC4\u4EF6",paraId:23,tocIndex:14}]},63299:function(_,s){s.Z=`import React from 'react';
import { Button } from 'antd';
import { useModalService } from 'use-modal-service';

export default () => {

  const [create] = useModalService();

  return (
    <>
      <Button
        onClick={async () => {
          const modal = create<string>({
            title: '\u8FD9\u662F\u4E00\u4E2A\u5F39\u7A97',
            children: '\u5F39\u7A97\u5185\u5BB9',
            async onOk() {
              await new Promise((resolve) => { setTimeout(resolve, 1000); });
              modal.close('\u5F39\u7A97\u5173\u95ED\u4E86');
            },
          });
          const result = await modal.afterClose; // result\u4E3Aclose\u65B9\u6CD5\u4F20\u5165\u7684\u503C
          // eslint-disable-next-line no-console
          console.log(result); // \u70B9\u51FBok\u65F6\uFF0Cresult = "\u5F39\u7A97\u5173\u95ED\u4E86"\uFF0C\u5426\u5219 result = undefined
        }}
      >\u70B9\u51FB\u5F39\u7A97</Button>
    </>
  );
};
`},25433:function(_,s){s.Z=`import React from 'react';
import { Button, Space } from 'antd';
import { useModalService } from 'use-modal-service';

const Context = React.createContext<string>('');

const ModalContent = () => {

  const context = React.useContext(Context);

  return (
    <>{context}</>
  );
};

export default () => {

  const [create, holder] = useModalService();
  const [createWithoutHolder] = useModalService();

  return (
    <Context.Provider value="hello world">
      {holder}
      <Space>
        <Button
          onClick={async () => {
            create({
              title: '\u6709\u4E0A\u4E0B\u6587\u7684Modal',
              children: <ModalContent />,
            });
          }}
        >\u6709\u4E0A\u4E0B\u6587</Button>
        <Button
          onClick={async () => {
            createWithoutHolder({
              title: '\u65E0\u4E0A\u4E0B\u6587\u7684Modal',
              children: <ModalContent />,
            });
          }}
        >\u65E0\u4E0A\u4E0B\u6587</Button>
      </Space>
    </Context.Provider>
  );
};
`},22545:function(_,s){s.Z=`import React from 'react';
import { Form, Input } from 'antd';
import { useModalInstance, useOnOkInject } from 'use-modal-service';

export const EditForm = (props: { record?: Record<string, any> }) => {
  const { record } = props;
  const [form] = Form.useForm();

  const modal = useModalInstance();
  useOnOkInject(async () => {
    const values = await form.validateFields();
    await new Promise((resolve) => { setTimeout(resolve, 1000); }); // \u6A21\u62DF\u5F02\u6B65\u63A5\u53E3\u8C03\u7528
    modal?.close(values); // \u5173\u95ED\u5F39\u7A97\u5E76\u5C06\u6570\u636E\u56DE\u4F20\u7ED9afterClose
  });

  React.useEffect(() => {
    // \u5F02\u6B65\u66F4\u65B0modalProps
    modal?.update({
      title: record ? '\u7F16\u8F91' : '\u65B0\u589E',
    });
  }, [modal, record]);

  return (
    <Form layout="vertical" form={form} initialValues={record} >
      <Form.Item label="\u59D3\u540D" name="name">
        <Input />
      </Form.Item>
      <Form.Item label="\u5E74\u9F84" name="age">
        <Input />
      </Form.Item>
    </Form>
  );
};
`},27450:function(_,s){s.Z=`import React from 'react';
import { Button, Table } from 'antd';
import { useModalService } from 'use-modal-service';
import { EditForm } from './TableEditForm';

export default () => {
  const [data, setData] = React.useState(() => [
    {
      key: '0',
      name: '\u5C0F\u660E',
      age: 18,
    },
    {
      key: '1',
      name: '\u5C0F\u7EA2',
      age: 12,
    },
  ]);
  const [create] = useModalService();

  return (
    <>
      <Table
        dataSource={data}
        pagination={false}
        bordered
        columns={[
          {
            title: '\u59D3\u540D',
            dataIndex: 'name',
          },
          {
            title: '\u5E74\u9F84',
            dataIndex: 'age',
          },
          {
            title: '\u64CD\u4F5C',
            key: 'option',
            render(_, record, index) {
              return (
                <>
                  <Button
                    type="link"
                    onClick={async () => {
                      const modal = create({
                        children: <EditForm record={record} />,
                      });
                      const result = await modal.afterClose; // result\u4E3Aclose\u65B9\u6CD5\u4F20\u5165\u7684\u503C\uFF0C\u5982\u679C\u70B9\u51FB\xD7\u53F7\u6216\u70B9\u51FBCancel\u5173\u95ED\u7684\u5F39\u7A97\uFF0Cresult\u4E3Aundefined
                      if (result) {
                        setData(pre => {
                          const ret = [...pre];
                          ret.splice(index, 1, { ...record, ...result });
                          return ret;
                        });
                      }
                    }}
                  >\u7F16\u8F91</Button>
                </>
              );
            },
          },
        ]}
      />
    </>
  );
};
`}}]);

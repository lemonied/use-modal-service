"use strict";(self.webpackChunkuse_modal_service=self.webpackChunkuse_modal_service||[]).push([[629],{91819:function(E,o,e){e.r(o),e.d(o,{demos:function(){return D}});var c=e(15009),l=e.n(c),j=e(99289),h=e.n(j),m=e(67294),D={"src-modal-service-demo-commonmodal":{component:m.memo(m.lazy(function(){return e.e(433).then(e.bind(e,2044))})),asset:{type:"BLOCK",id:"src-modal-service-demo-commonmodal",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(63299).Z},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.19.4"},"use-modal-service":{type:"NPM",value:"1.1.1"}},entry:"index.tsx"},context:{react:e(67294),antd:e(83722),"use-modal-service":e(79607)},renderOpts:{compile:function(){var O=h()(l()().mark(function d(){var n,r=arguments;return l()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(19).then(e.bind(e,4019));case 2:return a.abrupt("return",(n=a.sent).default.apply(n,r));case 3:case"end":return a.stop()}},d)}));function v(){return O.apply(this,arguments)}return v}()}},"src-modal-service-demo-tablemodal":{component:m.memo(m.lazy(function(){return e.e(433).then(e.bind(e,63108))})),asset:{type:"BLOCK",id:"src-modal-service-demo-tablemodal",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(27450).Z},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.19.4"},"use-modal-service":{type:"NPM",value:"1.1.1"},"./TableEditForm.tsx":{type:"FILE",value:e(22545).Z}},entry:"index.tsx"},context:{react:e(67294),antd:e(83722),"use-modal-service":e(79607),"./TableEditForm.tsx":e(207)},renderOpts:{compile:function(){var O=h()(l()().mark(function d(){var n,r=arguments;return l()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(19).then(e.bind(e,4019));case 2:return a.abrupt("return",(n=a.sent).default.apply(n,r));case 3:case"end":return a.stop()}},d)}));function v(){return O.apply(this,arguments)}return v}()}},"src-modal-service-demo-contextmodal":{component:m.memo(m.lazy(function(){return e.e(433).then(e.bind(e,55400))})),asset:{type:"BLOCK",id:"src-modal-service-demo-contextmodal",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(25433).Z},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.19.4"},"use-modal-service":{type:"NPM",value:"1.1.1"}},entry:"index.tsx"},context:{react:e(67294),antd:e(83722),"use-modal-service":e(79607)},renderOpts:{compile:function(){var O=h()(l()().mark(function d(){var n,r=arguments;return l()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(19).then(e.bind(e,4019));case 2:return a.abrupt("return",(n=a.sent).default.apply(n,r));case 3:case"end":return a.stop()}},d)}));function v(){return O.apply(this,arguments)}return v}()}}}},66238:function(E,o,e){e.d(o,{UB:function(){return O},VN:function(){return v},fF:function(){return D},gD:function(){return m}});var c=e(67294),l=e(85893),j="__MODAL_SERVICE_INTERNAL_TOKEN__",h=c.createContext(null);function m(){return c.useContext(h)}function D(d){var n={close:d.get("close"),triggerOk:d.get("triggerOk"),update:d.get("update"),getHooks:function(x){if(x===j)return d;throw new Error("getHooks method is for internal use only")}};return n}var O=c.memo(function(d){var n=d.children,r=d.value,x=c.useMemo(function(){return D(r)},[r]);return(0,l.jsx)(h.Provider,{value:x,children:n})}),v=function(n){var r=c.useRef(n);r.current=n;var x=m(),a=x.getHooks,k=a(j);c.useEffect(function(){var y=k.get("onOks"),L=function(){return r.current()};return y.push(L),function(){var S=y.indexOf(L);S>-1&&y.splice(S,1)}},[k])}},207:function(E,o,e){e.r(o),e.d(o,{EditForm:function(){return x}});var c=e(15009),l=e.n(c),j=e(99289),h=e.n(j),m=e(5574),D=e.n(m),O=e(67294),v=e(65520),d=e(38289),n=e(66238),r=e(85893),x=function(k){var y=k.record,L=v.Z.useForm(),S=D()(L,1),N=S[0],g=(0,n.gD)();return(0,n.VN)(h()(l()().mark(function _(){var Z;return l()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.next=2,N.validateFields();case 2:return Z=T.sent,T.next=5,new Promise(function(b){setTimeout(b,1e3)});case 5:g==null||g.close(Z);case 6:case"end":return T.stop()}},_)}))),O.useEffect(function(){g==null||g.update({title:y?"\u7F16\u8F91":"\u65B0\u589E"})},[g,y]),(0,r.jsxs)(v.Z,{layout:"vertical",form:N,initialValues:y,children:[(0,r.jsx)(v.Z.Item,{label:"\u59D3\u540D",name:"name",children:(0,r.jsx)(d.Z,{})}),(0,r.jsx)(v.Z.Item,{label:"\u5E74\u9F84",name:"age",children:(0,r.jsx)(d.Z,{})})]})}},19710:function(E,o,e){e.d(o,{k:function(){return T}});var c=e(15009),l=e.n(c),j=e(99289),h=e.n(j),m=e(13769),D=e.n(m),O=e(19632),v=e.n(O),d=e(97857),n=e.n(d),r=e(5574),x=e.n(r),a=e(67294),k=e(85576),y=e(97057),L=e(66238),S=e(67159),N=function(F){var B=/(\d+)|([a-zA-Z]+)/g,C=F==null?void 0:F.match(B);return(C==null?void 0:C.map(function(W){return/^\d+$/.test(W)?Number(W):W}))||[]},g=function(){var F=N(S.Z),B=F[0],C=F[1];return typeof B=="number"&&B>4?!0:B===4?typeof C=="number"&&C>=23:!1},_=e(85893),Z=["onOk"],G=g(),T=function(){var F=(0,y.v)(),B=x()(F,2),C=B[0],W=B[1],H=a.useRef([]),z=a.useRef(0),U=a.useCallback(function(K){var P=typeof K=="function"?K(H.current):K;H.current=P,C((0,_.jsx)(_.Fragment,{children:P.map(function(p){var f=G?{open:p.open}:{visible:p.open};return(0,_.jsx)(L.UB,{value:p.hooks,children:(0,_.jsx)(k.Z,n()(n()(n()({},p.options),f),{},{onOk:p.hooks.get("triggerOk"),onCancel:p.hooks.get("onCancel"),afterClose:p.hooks.get("afterClose"),children:p.options.children}))},p.key)})}))},[C]),Q=a.useCallback(function(){var K=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};z.current+=1;var P=z.current,p={key:P,open:!0,options:K,hooks:new Map},f=p.hooks,J=function(u){f.get("resolve")(u),U(function(s){var t=s.find(function(i){return i.key===P});return t?[].concat(v()(s.filter(function(i){return i!==t})),[n()(n()({},t),{},{open:!1,options:n()(n()({},t.options),{},{confirmLoading:!1})})]):s})};f.set("close",J),f.set("onOk",K.onOk),f.set("onOks",[]);var V=function(u){U(function(s){var t=s.find(function($){return $.key===P});if(!t)return s;var i=typeof u=="function"?u(n()(n()({},t.options),{},{onOk:t.hooks.get("onOk")})):u,R=i.onOk,A=D()(i,Z);return"onOk"in i&&t.hooks.set("onOk",R),[].concat(v()(s.filter(function($){return $!==t})),[n()(n()({},t),{},{options:n()(n()({},t.options),A)})])})};f.set("update",V);var X=function(){var I=h()(l()().mark(function u(){var s,t,i,R,A,$;return l()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return V({confirmLoading:!0}),M.prev=1,i=(s=f.get("onOks"))!==null&&s!==void 0?s:[],R=f.get("onOk"),A=(t=i[i.length-1])!==null&&t!==void 0?t:R,M.next=7,A==null?void 0:A();case 7:return $=M.sent,V({confirmLoading:!1}),M.abrupt("return",$);case 12:throw M.prev=12,M.t0=M.catch(1),V({confirmLoading:!1}),M.t0;case 16:case"end":return M.stop()}},u,null,[[1,12]])}));return function(){return I.apply(this,arguments)}}();f.set("triggerOk",X),f.set("onCancel",function(){var I,u,s;J();for(var t=arguments.length,i=new Array(t),R=0;R<t;R++)i[R]=arguments[R];return(I=H.current.find(function(A){return A.key===P}))===null||I===void 0||(u=(s=I.options).onCancel)===null||u===void 0?void 0:u.call.apply(u,[s].concat(i))}),f.set("afterClose",function(){var I,u,s;return U(function(t){return t.filter(function(i){return i.key!==P})}),(I=H.current.find(function(t){return t.key===P}))===null||I===void 0||(u=(s=I.options).afterClose)===null||u===void 0?void 0:u.call(s)});var Y=new Promise(function(I){f.set("resolve",I)});return U(function(I){return[].concat(v()(I),[p])}),n()({afterClose:Y},(0,L.fF)(p.hooks))},[U]);return[Q,W]}},79607:function(E,o,e){e.r(o),e.d(o,{useModalInstance:function(){return l.gD},useModalService:function(){return c.k},useOnOkInject:function(){return l.VN}});var c=e(19710),l=e(66238)},12918:function(E,o,e){e.r(o),e.d(o,{texts:function(){return c}});const c=[{value:"ModalService",paraId:0},{value:"\u4F9D\u8D56\u4E8E",paraId:0},{value:"antd",paraId:0},{value:"\uFF0C\u76EE\u7684\u662F\u4F7F\u7528\u670D\u52A1\u7684\u65B9\u5F0F\u6765\u8C03\u7528",paraId:0},{value:"Modal",paraId:0},{value:"\u5F39\u7A97\uFF0C\u4F7F\u7528\u8005\u4E0D\u5FC5\u5173\u5FC3\u5F39\u7A97\u7684\u663E\u793A/\u9690\u85CF\u53CA\u786E\u8BA4\u6309\u94AE\u7684\u5F02\u6B65\u5904\u7406\uFF0C\u53EA\u9700\u8981\u5173\u6CE8\u4E1A\u52A1\u903B\u8F91\u5373\u53EF",paraId:0},{value:"\u5728\u5B50\u7EC4\u4EF6\u4E2D\u83B7\u53D6",paraId:1,tocIndex:2},{value:"modal\u5B9E\u4F8B",paraId:1,tocIndex:2},{value:"\u5E76\u6CE8\u5165",paraId:1,tocIndex:2},{value:"onOk",paraId:1,tocIndex:2},{value:"\u7684\u51FD\u6570",paraId:1,tocIndex:2},{value:"\u5728\u5B50\u7EC4\u4EF6\u4E2D\u8C03\u7528",paraId:1,tocIndex:2},{value:"update",paraId:1,tocIndex:2},{value:"\u65B9\u6CD5\u5F02\u6B65\u66F4\u65B0",paraId:1,tocIndex:2},{value:"ModalProps",paraId:1,tocIndex:2},{value:"\u5728\u5B50\u7EC4\u4EF6\u4E2D\u8C03\u7528",paraId:1,tocIndex:2},{value:"close",paraId:1,tocIndex:2},{value:"\u65B9\u6CD5\u5173\u95ED\u5F39\u7A97\u5E76\u5C06\u7ED3\u679C\u56DE\u4F20\u7ED9\u7236\u7EA7",paraId:1,tocIndex:2},{value:"\u4ECE\u8FD9\u4E2A\u4F8B\u5B50\u53EF\u4EE5\u770B\u51FA\u6765",paraId:2},{value:"useModalService",paraId:2},{value:"\u7684\u6838\u5FC3\u4F5C\u7528\uFF1A",paraId:2},{value:"Table",paraId:3},{value:"\u7EC4\u4EF6\u53EA\u8D1F\u8D23",paraId:3},{value:"Modal",paraId:3},{value:"\u7684\u663E\u793A/\u5173\u95ED\uFF0C\u5E76\u4E14\u5904\u7406",paraId:3},{value:"Modal",paraId:3},{value:"\u5173\u95ED\u540E\u7684\u8FD4\u56DE\u503C",paraId:3},{value:"EditForm",paraId:3},{value:"\u7EC4\u4EF6\u53EA\u8D1F\u8D23\u8868\u5355\u7684\u903B\u8F91\uFF0C\u6CE8\u5165\u70B9\u51FB",paraId:3},{value:"OK",paraId:3},{value:"\u7684\u56DE\u8C03\uFF0C\u4EE5\u53CA\u5173\u95ED\u540E\u7684\u8FD4\u56DE\u503C",paraId:3},{value:"\u5F53\u4F60\u7684",paraId:4,tocIndex:3},{value:"Modal",paraId:4,tocIndex:3},{value:"\u9700\u8981\u83B7\u53D6\u4E0A\u4E0B\u6587\u65F6\uFF0C\u8BF7\u5C06",paraId:4,tocIndex:3},{value:"holder",paraId:4,tocIndex:3},{value:"\u63D2\u5165\u5230\u5BF9\u5E94\u4F4D\u7F6E\uFF0C",paraId:4,tocIndex:3},{value:"Modal",paraId:4,tocIndex:3},{value:"\u5185\u7EC4\u4EF6\u5C31\u53EF\u4EE5\u83B7\u53D6",paraId:4,tocIndex:3},{value:"holder",paraId:4,tocIndex:3},{value:"\u6240\u5904\u4F4D\u7F6E\u7684\u4E0A\u4E0B\u6587\uFF08",paraId:4,tocIndex:3},{value:"Context",paraId:4,tocIndex:3},{value:"\u3001",paraId:4,tocIndex:3},{value:"Redux",paraId:4,tocIndex:3},{value:"\u3001",paraId:4,tocIndex:3},{value:"dva",paraId:4,tocIndex:3},{value:"\u7B49\uFF09",paraId:4,tocIndex:3},{value:"useModalService()",paraId:5,tocIndex:5},{value:"\u8FD4\u56DE",paraId:5,tocIndex:5},{value:"[create, holder]",paraId:5,tocIndex:5},{value:"create(options)",paraId:6,tocIndex:6},{value:"\u6253\u5F00\u4E00\u4E2A\u5F39\u7A97\u5E76\u8FD4\u56DE\u5F39\u7A97\u7684\u5B9E\u4F8B",paraId:6,tocIndex:6},{value:`type create = <Result=any>(options?: ModalServiceOptions) => ModalInstance<Result> & { afterClose: Promise<Result | undefined> };
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
`,paraId:21,tocIndex:12},{value:"destroyOnClose",paraId:22},{value:"forceRender",paraId:22},{value:"ModalService",paraId:23,tocIndex:14},{value:"\u53EA\u6709\u5728\u8C03\u7528",paraId:23,tocIndex:14},{value:"create",paraId:23,tocIndex:14},{value:"\u65F6\u624D\u521B\u5EFA\u5E76\u6253\u5F00\u5F39\u7A97\uFF0C\u5728\u5B8C\u5168\u5173\u95ED\u540E\u9500\u6BC1\uFF1B\u8FD9\u6837\u505A\u7684\u76EE\u7684\u662F\u4E3A\u4E86\u9632\u6B62\u9875\u9762\u591A\u6B21\u8C03\u7528",paraId:23,tocIndex:14},{value:"create",paraId:23,tocIndex:14},{value:"\u4F46\u672A\u53CA\u65F6\u9500\u6BC1\u4ECE\u800C\u9020\u6210\u5E94\u7528\u7684\u6027\u80FD\u635F\u8017\uFF0C\u6240\u4EE5\u5728\u5F39\u7A97\u5173\u95ED\u540E\u9500\u6BC1\u4E86\u5BF9\u5E94\u7684",paraId:23,tocIndex:14},{value:"Modal",paraId:23,tocIndex:14},{value:"\u7EC4\u4EF6",paraId:23,tocIndex:14}]},63299:function(E,o){o.Z=`import React from 'react';
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
`},25433:function(E,o){o.Z=`import React from 'react';
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
`},22545:function(E,o){o.Z=`import React from 'react';
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
`},27450:function(E,o){o.Z=`import React from 'react';
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

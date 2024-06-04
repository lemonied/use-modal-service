"use strict";(self.webpackChunkuse_modal_service=self.webpackChunkuse_modal_service||[]).push([[629],{82564:function(T,l,e){e.r(l),e.d(l,{demos:function(){return $}});var D=e(15009),x=e.n(D),A=e(99289),S=e.n(A),y=e(67294),$={"src-modal-service-demo-commonmodal":{component:y.memo(y.lazy(function(){return e.e(433).then(e.bind(e,40733))})),asset:{type:"BLOCK",id:"src-modal-service-demo-commonmodal",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(63299).Z},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.18.0"},"use-modal-service":{type:"NPM",value:"0.0.3"}},entry:"index.tsx"},context:{react:e(67294),antd:e(93268),"use-modal-service":e(30258)},renderOpts:{compile:function(){var P=S()(x()().mark(function g(){var p,n=arguments;return x()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(19).then(e.bind(e,4019));case 2:return t.abrupt("return",(p=t.sent).default.apply(p,n));case 3:case"end":return t.stop()}},g)}));function a(){return P.apply(this,arguments)}return a}()}},"src-modal-service-demo-tablemodal":{component:y.memo(y.lazy(function(){return e.e(433).then(e.bind(e,96988))})),asset:{type:"BLOCK",id:"src-modal-service-demo-tablemodal",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(27450).Z},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.18.0"},"use-modal-service":{type:"NPM",value:"0.0.3"},"./TableEditForm.tsx":{type:"FILE",value:e(22545).Z}},entry:"index.tsx"},context:{react:e(67294),antd:e(93268),"use-modal-service":e(30258),"./TableEditForm.tsx":e(207)},renderOpts:{compile:function(){var P=S()(x()().mark(function g(){var p,n=arguments;return x()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(19).then(e.bind(e,4019));case 2:return t.abrupt("return",(p=t.sent).default.apply(p,n));case 3:case"end":return t.stop()}},g)}));function a(){return P.apply(this,arguments)}return a}()}},"src-modal-service-demo-contextmodal":{component:y.memo(y.lazy(function(){return e.e(433).then(e.bind(e,68265))})),asset:{type:"BLOCK",id:"src-modal-service-demo-contextmodal",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(25433).Z},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.18.0"},"use-modal-service":{type:"NPM",value:"0.0.3"}},entry:"index.tsx"},context:{react:e(67294),antd:e(93268),"use-modal-service":e(30258)},renderOpts:{compile:function(){var P=S()(x()().mark(function g(){var p,n=arguments;return x()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(19).then(e.bind(e,4019));case 2:return t.abrupt("return",(p=t.sent).default.apply(p,n));case 3:case"end":return t.stop()}},g)}));function a(){return P.apply(this,arguments)}return a}()}}}},207:function(T,l,e){e.r(l),e.d(l,{EditForm:function(){return B}});var D=e(15009),x=e.n(D),A=e(99289),S=e.n(A),y=e(5574),$=e.n(y),P=e(67294),a=e(65520),g=e(38289),p=e(30258),n=e(85893),B=function(V){var h=V.record,U=a.Z.useForm(),N=$()(U,1),W=N[0],C=(0,p.useModalInstance)();return(0,p.useOnOkInject)(S()(x()().mark(function z(){var Z;return x()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,W.validateFields();case 2:return Z=j.sent,j.next=5,new Promise(function(Y){setTimeout(Y,1e3)});case 5:C==null||C.close(Z);case 6:case"end":return j.stop()}},z)}))),P.useEffect(function(){C==null||C.update({title:h?"\u7F16\u8F91":"\u65B0\u589E"})},[C,h]),(0,n.jsxs)(a.Z,{layout:"vertical",form:W,initialValues:h,children:[(0,n.jsx)(a.Z.Item,{label:"\u59D3\u540D",name:"name",children:(0,n.jsx)(g.Z,{})}),(0,n.jsx)(a.Z.Item,{label:"\u5E74\u9F84",name:"age",children:(0,n.jsx)(g.Z,{})})]})}},30258:function(T,l,e){e.r(l),e.d(l,{useModalInstance:function(){return W},useModalService:function(){return te},useOnOkInject:function(){return Z}});var D=e(15009),x=e.n(D),A=e(99289),S=e.n(A),y=e(13769),$=e.n(y),P=e(97857),a=e.n(P),g=e(19632),p=e.n(g),n=e(67294),B=e(5574),t=e.n(B),V=e(85576),h=e(85893),U=Symbol("hooks"),N=n.createContext(null);function W(){return n.useContext(N)}function C(m){var c={close:m.get("close"),triggerOk:m.get("triggerOk"),update:m.get("update"),getHooks:function(f){if(f===U)return m;throw new Error("getHooks method is for internal use only")}};return c}var z=n.memo(function(m){var c=m.children,I=m.value,f=I.hooks,O=n.useMemo(function(){return C(f)},[f]);return(0,h.jsx)(N.Provider,{value:O,children:c})}),Z=function(c){var I=n.useRef(c);I.current=c;var f=W(),O=f.getHooks,F=O(U);n.useEffect(function(){var r=F.get("onOks"),L=function(){return I.current()};return r.push(L),function(){var R=r.indexOf(L);R>-1&&r.splice(R,1)}},[F])},Q=n.forwardRef(function(m,c){var I=n.useState([]),f=t()(I,2),O=f[0],F=f[1];return n.useImperativeHandle(c,function(){return{items:O,setItems:F}},[O,F]),(0,h.jsx)(h.Fragment,{children:O.map(function(r){return(0,h.jsx)(n.Fragment,{children:(0,h.jsx)(z,{value:r,children:(0,h.jsx)(V.Z,a()(a()({},r.options),{},{open:r.open,onOk:r.hooks.get("triggerOk"),onCancel:r.hooks.get("onCancel"),afterClose:r.hooks.get("afterClose"),children:r.options.children}))})},r.key)})})}),j=n.memo(Q),Y=e(52677),q=e.n(Y),K=e(73935),ee=e.t(K,2);function X(m){var c=ee,I=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;I&&q()(I)==="object"&&(I.usingClientEntryPoint=m)}function ne(m,c){var I=K.version,f=parseInt(I.split(".")[0],10);if(f<18)return K.render(c,m),function(){K.unmountComponentAtNode(m)};X(!0);var O=K.createRoot(m);return X(!1),O.render(c),function(){return O.unmount()}}var ae=["onOk"],te=function(){var c=n.useRef(null),I=n.useRef(null),f=n.useRef(0),O=n.useCallback(function(){var r,L=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};f.current+=1;var R=f.current,k=c.current?c:I,J={key:R,open:!0,options:L,hooks:new Map},M=J.hooks,w=function(d){var s;M.get("resolve")(d),(s=k.current)===null||s===void 0||s.setItems(function(v){var o=v.find(function(i){return i.key===R});return o?[].concat(p()(v.filter(function(i){return i!==o})),[a()(a()({},o),{},{open:!1,options:a()(a()({},o.options),{},{confirmLoading:!1})})]):v})};M.set("close",w),M.set("onOk",L.onOk),M.set("onOks",[]);var H=function(d){var s;(s=k.current)===null||s===void 0||s.setItems(function(v){var o=v.find(function(G){return G.key===R});if(!o)return v;var i=typeof d=="function"?d(a()(a()({},o.options),{},{onOk:o.hooks.get("onOk")})):d,_=i.onOk,b=$()(i,ae);return"onOk"in i&&o.hooks.set("onOk",_),[].concat(p()(v.filter(function(G){return G!==o})),[a()(a()({},o),{},{options:a()(a()({},o.options),b)})])})};M.set("update",H);var oe=function(){var u=S()(x()().mark(function d(){var s,v,o,i,_,b;return x()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return H({confirmLoading:!0}),E.prev=1,o=(s=M.get("onOks"))!==null&&s!==void 0?s:[],i=M.get("onOk"),_=(v=o[o.length-1])!==null&&v!==void 0?v:i,E.next=7,_==null?void 0:_();case 7:return b=E.sent,H({confirmLoading:!1}),E.abrupt("return",b);case 12:throw E.prev=12,E.t0=E.catch(1),H({confirmLoading:!1}),E.t0;case 16:case"end":return E.stop()}},d,null,[[1,12]])}));return function(){return u.apply(this,arguments)}}();M.set("triggerOk",oe),M.set("onCancel",function(){var u,d,s;w();for(var v=arguments.length,o=new Array(v),i=0;i<v;i++)o[i]=arguments[i];return(u=k.current)===null||u===void 0||(u=u.items.find(function(_){return _.key===R}))===null||u===void 0||(d=(s=u.options).onCancel)===null||d===void 0?void 0:d.call.apply(d,[s].concat(o))}),M.set("afterClose",function(){var u,d,s,v;return(u=k.current)===null||u===void 0||u.setItems(function(o){return o.filter(function(i){return i.key!==R})}),(d=k.current)===null||d===void 0||(d=d.items.find(function(o){return o.key===R}))===null||d===void 0||(s=(v=d.options).afterClose)===null||s===void 0?void 0:s.call(v)});var re=new Promise(function(u){M.set("resolve",u)});return(r=k.current)===null||r===void 0||r.setItems(function(u){return[].concat(p()(u),[J])}),a()({afterClose:re},C(J.hooks))},[]);n.useEffect(function(){var r=document.createDocumentFragment();document.body.appendChild(r);var L=ne(r,(0,h.jsx)(j,{ref:I}));return function(){L(),document.body.removeChild(r)}},[]);var F=n.useMemo(function(){return(0,h.jsx)(j,{ref:c},"modal-holder")},[]);return[O,F]}},32198:function(T,l,e){e.r(l),e.d(l,{texts:function(){return D}});const D=[{value:"ModalService",paraId:0},{value:"\u4F9D\u8D56\u4E8E",paraId:0},{value:"antd",paraId:0},{value:"\uFF0C\u76EE\u7684\u662F\u4F7F\u7528\u670D\u52A1\u7684\u65B9\u5F0F\u6765\u8C03\u7528",paraId:0},{value:"Modal",paraId:0},{value:"\u5F39\u7A97\uFF0C\u4F7F\u7528\u8005\u4E0D\u5FC5\u5173\u5FC3\u5F39\u7A97\u7684\u663E\u793A/\u9690\u85CF\u53CA\u786E\u8BA4\u6309\u94AE\u7684\u5F02\u6B65\u5904\u7406\uFF0C\u53EA\u9700\u8981\u5173\u6CE8\u4E1A\u52A1\u903B\u8F91\u5373\u53EF",paraId:0},{value:"\u5728\u5B50\u7EC4\u4EF6\u4E2D\u83B7\u53D6",paraId:1,tocIndex:2},{value:"modal\u5B9E\u4F8B",paraId:1,tocIndex:2},{value:"\u5E76\u6CE8\u5165",paraId:1,tocIndex:2},{value:"onOk",paraId:1,tocIndex:2},{value:"\u7684\u51FD\u6570",paraId:1,tocIndex:2},{value:"\u5728\u5B50\u7EC4\u4EF6\u4E2D\u8C03\u7528",paraId:1,tocIndex:2},{value:"update",paraId:1,tocIndex:2},{value:"\u65B9\u6CD5\u5F02\u6B65\u66F4\u65B0",paraId:1,tocIndex:2},{value:"ModalProps",paraId:1,tocIndex:2},{value:"\u5728\u5B50\u7EC4\u4EF6\u4E2D\u8C03\u7528",paraId:1,tocIndex:2},{value:"close",paraId:1,tocIndex:2},{value:"\u65B9\u6CD5\u5173\u95ED\u5F39\u7A97\u5E76\u5C06\u7ED3\u679C\u56DE\u4F20\u7ED9\u7236\u7EA7",paraId:1,tocIndex:2},{value:"\u4ECE\u8FD9\u4E2A\u4F8B\u5B50\u53EF\u4EE5\u770B\u51FA\u6765",paraId:2},{value:"useModalService",paraId:2},{value:"\u7684\u6838\u5FC3\u4F5C\u7528\uFF1A",paraId:2},{value:"Table",paraId:3},{value:"\u7EC4\u4EF6\u53EA\u8D1F\u8D23",paraId:3},{value:"Modal",paraId:3},{value:"\u7684\u663E\u793A/\u5173\u95ED\uFF0C\u5E76\u4E14\u5904\u7406",paraId:3},{value:"Modal",paraId:3},{value:"\u5173\u95ED\u540E\u7684\u8FD4\u56DE\u503C",paraId:3},{value:"EditForm",paraId:3},{value:"\u7EC4\u4EF6\u53EA\u8D1F\u8D23\u8868\u5355\u7684\u903B\u8F91\uFF0C\u6CE8\u5165\u70B9\u51FB",paraId:3},{value:"OK",paraId:3},{value:"\u7684\u56DE\u8C03\uFF0C\u4EE5\u53CA\u5173\u95ED\u540E\u7684\u8FD4\u56DE\u503C",paraId:3},{value:"\u5F53\u4F60\u7684",paraId:4,tocIndex:3},{value:"Modal",paraId:4,tocIndex:3},{value:"\u9700\u8981\u83B7\u53D6\u4E0A\u4E0B\u6587\u65F6\uFF0C\u8BF7\u5C06",paraId:4,tocIndex:3},{value:"holder",paraId:4,tocIndex:3},{value:"\u63D2\u5165\u5230\u5BF9\u5E94\u4F4D\u7F6E\uFF0C",paraId:4,tocIndex:3},{value:"Modal",paraId:4,tocIndex:3},{value:"\u5185\u7EC4\u4EF6\u5C31\u53EF\u4EE5\u83B7\u53D6",paraId:4,tocIndex:3},{value:"holder",paraId:4,tocIndex:3},{value:"\u6240\u5904\u4F4D\u7F6E\u7684\u4E0A\u4E0B\u6587\uFF08",paraId:4,tocIndex:3},{value:"Context",paraId:4,tocIndex:3},{value:"\u3001",paraId:4,tocIndex:3},{value:"Redux",paraId:4,tocIndex:3},{value:"\u3001",paraId:4,tocIndex:3},{value:"dva",paraId:4,tocIndex:3},{value:"\u7B49\uFF09",paraId:4,tocIndex:3},{value:"useModalService()",paraId:5,tocIndex:5},{value:"\u8FD4\u56DE",paraId:5,tocIndex:5},{value:"[create, holder]",paraId:5,tocIndex:5},{value:"create(options)",paraId:6,tocIndex:6},{value:"\u6253\u5F00\u4E00\u4E2A\u5F39\u7A97\u5E76\u8FD4\u56DE\u5F39\u7A97\u7684\u5B9E\u4F8B",paraId:6,tocIndex:6},{value:`type create = <Result=any>(options?: ModalServiceOptions) => ModalInstance<Result> & { afterClose: Promise<Result | undefined> };
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
`,paraId:18,tocIndex:9},{value:"\u7EE7\u627F\u81EAantd ",paraId:19,tocIndex:11},{value:"ModalProps",paraId:19,tocIndex:11},{value:`export interface ModalServiceOptions extends Omit<ModalProps, 'open' | 'onOk'> {
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
`,paraId:21,tocIndex:12},{value:"destroyOnClose",paraId:22},{value:"forceRender",paraId:22},{value:"ModalService",paraId:23,tocIndex:14},{value:"\u53EA\u6709\u5728\u8C03\u7528",paraId:23,tocIndex:14},{value:"create",paraId:23,tocIndex:14},{value:"\u65F6\u624D\u521B\u5EFA\u5E76\u6253\u5F00\u5F39\u7A97\uFF0C\u5728\u5B8C\u5168\u5173\u95ED\u540E\u9500\u6BC1\uFF1B\u8FD9\u6837\u505A\u7684\u76EE\u7684\u662F\u4E3A\u4E86\u9632\u6B62\u9875\u9762\u591A\u6B21\u8C03\u7528",paraId:23,tocIndex:14},{value:"create",paraId:23,tocIndex:14},{value:"\u4F46\u672A\u53CA\u65F6\u9500\u6BC1\u4ECE\u800C\u9020\u6210\u5E94\u7528\u7684\u6027\u80FD\u635F\u8017\uFF0C\u6240\u4EE5\u5728\u5F39\u7A97\u5173\u95ED\u540E\u9500\u6BC1\u4E86\u5BF9\u5E94\u7684",paraId:23,tocIndex:14},{value:"Modal",paraId:23,tocIndex:14},{value:"\u7EC4\u4EF6",paraId:23,tocIndex:14}]},63299:function(T,l){l.Z=`import React from 'react';
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
`},25433:function(T,l){l.Z=`import React from 'react';
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
`},22545:function(T,l){l.Z=`import React from 'react';
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
`},27450:function(T,l){l.Z=`import React from 'react';
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

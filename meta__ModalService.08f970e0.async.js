"use strict";(self.webpackChunkuse_modal_service=self.webpackChunkuse_modal_service||[]).push([[629],{82564:function(S,s,e){e.r(s),e.d(s,{demos:function(){return D}});var T=e(15009),O=e.n(T),b=e(99289),A=e.n(b),k=e(67294),D={"src-modal-service-demo-commonmodal":{component:k.memo(k.lazy(function(){return e.e(433).then(e.bind(e,40733))})),asset:{type:"BLOCK",id:"src-modal-service-demo-commonmodal",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(63299).Z},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.17.4"},"use-modal-service":{type:"NPM",value:"0.0.2"}},entry:"index.tsx"},context:{react:e(67294),antd:e(35354),"use-modal-service":e(78715)},renderOpts:{compile:function(){var L=A()(O()().mark(function j(){var r,n=arguments;return O()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.e(19).then(e.bind(e,4019));case 2:return c.abrupt("return",(r=c.sent).default.apply(r,n));case 3:case"end":return c.stop()}},j)}));function M(){return L.apply(this,arguments)}return M}()}},"src-modal-service-demo-tablemodal":{component:k.memo(k.lazy(function(){return e.e(433).then(e.bind(e,96988))})),asset:{type:"BLOCK",id:"src-modal-service-demo-tablemodal",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(27450).Z},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.17.4"},"use-modal-service":{type:"NPM",value:"0.0.2"},"./TableEditForm.tsx":{type:"FILE",value:e(22545).Z}},entry:"index.tsx"},context:{react:e(67294),antd:e(35354),"use-modal-service":e(78715),"./TableEditForm.tsx":e(207)},renderOpts:{compile:function(){var L=A()(O()().mark(function j(){var r,n=arguments;return O()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.e(19).then(e.bind(e,4019));case 2:return c.abrupt("return",(r=c.sent).default.apply(r,n));case 3:case"end":return c.stop()}},j)}));function M(){return L.apply(this,arguments)}return M}()}}}},207:function(S,s,e){e.r(s),e.d(s,{EditForm:function(){return K}});var T=e(15009),O=e.n(T),b=e(99289),A=e.n(b),k=e(5574),D=e.n(k),L=e(67294),M=e(65520),j=e(38289),r=e(78715),n=e(85893),K=function($){var g=$.record,Z=M.Z.useForm(),H=D()(Z,1),W=H[0],B=(0,r.useModalInstance)();return(0,r.useOnOkInject)(A()(O()().mark(function G(){var N;return O()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,W.validateFields();case 2:return N=R.sent,R.next=5,new Promise(function(z){setTimeout(z,1e3)});case 5:B==null||B.close(N);case 6:case"end":return R.stop()}},G)}))),(0,n.jsxs)(M.Z,{layout:"vertical",form:W,initialValues:g,children:[(0,n.jsx)(M.Z.Item,{label:"\u59D3\u540D",name:"name",children:(0,n.jsx)(j.Z,{})}),(0,n.jsx)(M.Z.Item,{label:"\u5E74\u9F84",name:"age",children:(0,n.jsx)(j.Z,{})})]})}},78715:function(S,s,e){e.r(s),e.d(s,{useModalInstance:function(){return W},useModalService:function(){return Q},useOnOkInject:function(){return N}});var T=e(15009),O=e.n(T),b=e(99289),A=e.n(b),k=e(19632),D=e.n(k),L=e(13769),M=e.n(L),j=e(97857),r=e.n(j),n=e(67294),K=e(5574),c=e.n(K),$=e(85576),g=e(85893),Z=Symbol("hooks"),H=n.createContext(null);function W(){return n.useContext(H)}function B(_){var p={close:_.get("close"),triggerOk:_.get("triggerOk"),update:_.get("update"),getHooks:function(d){if(d===Z)return _;throw new Error("getHooks method is for internal use only")}};return p}var G=n.memo(function(_){var p=_.children,E=_.value,d=E.hooks,v=n.useMemo(function(){return B(d)},[d]);return(0,g.jsx)(H.Provider,{value:v,children:p})}),N=function(p){var E=n.useRef(p);E.current=p;var d=W(),v=d.getHooks,y=v(Z);n.useEffect(function(){var i=y.get("onOks"),U=function(){return E.current()};return i.push(U),function(){var f=i.indexOf(U);f>-1&&i.splice(f,1)}},[y])},V=n.forwardRef(function(_,p){var E=n.useState([]),d=c()(E,2),v=d[0],y=d[1];return n.useImperativeHandle(p,function(){return{items:v,setItems:y}},[v,y]),(0,g.jsx)(g.Fragment,{children:v.map(function(i){return(0,g.jsx)(n.Fragment,{children:(0,g.jsx)(G,{value:i,children:(0,g.jsx)($.Z,r()(r()({},i.options),{},{open:i.open,onOk:i.hooks.get("triggerOk"),onCancel:i.hooks.get("onCancel"),afterClose:i.hooks.get("afterClose"),children:i.options.children}))})},i.key)})})}),R=n.memo(V),z=["onOk"],Q=function(){var p=n.useRef(null),E=n.useRef(0),d=n.useCallback(function(){return p.current||console.error("Please insert the holder into the page node, otherwise ModalService will not work properly"),p.current},[]),v=n.useCallback(function(f,u){var o=d();o==null||o.setItems(function(I){var t=I.find(function(m){return m.key===f});if(!t)return I;var a=typeof u=="function"?u(r()(r()({},t.options),{},{onOk:t.hooks.get("onOk")})):u,x=a.onOk,l=M()(a,z);return"onOk"in a&&t.hooks.set("onOk",x),[].concat(D()(I.filter(function(m){return m!==t})),[r()(r()({},t),{},{options:r()(r()({},t.options),l)})])})},[d]),y=n.useCallback(function(f,u){var o=d();o==null||o.setItems(function(I){var t=I.find(function(a){return a.key===f});return t?(t.hooks.get("resolve")(u),[].concat(D()(I.filter(function(a){return a!==t})),[r()(r()({},t),{},{open:!1,options:r()(r()({},t.options),{},{confirmLoading:!1})})])):I})},[d]),i=n.useCallback(function(){var f=A()(O()().mark(function u(o){var I,t,a,x,l,m,C,P,F;return O()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return v(o,{confirmLoading:!0}),h.prev=1,x=d(),l=x==null||(I=x.items.find(function(X){return X.key===o}))===null||I===void 0?void 0:I.hooks,m=(t=l==null?void 0:l.get("onOks"))!==null&&t!==void 0?t:[],C=l==null?void 0:l.get("onOk"),P=(a=m[m.length-1])!==null&&a!==void 0?a:C,h.next=9,P==null?void 0:P();case 9:return F=h.sent,v(o,{confirmLoading:!1}),h.abrupt("return",F);case 14:throw h.prev=14,h.t0=h.catch(1),v(o,{confirmLoading:!1}),h.t0;case 18:case"end":return h.stop()}},u,null,[[1,14]])}));return function(u){return f.apply(this,arguments)}}(),[d,v]),U=n.useCallback(function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};E.current+=1;var u=E.current,o={key:u,open:!0,options:f,hooks:new Map};o.hooks.set("close",function(a){return y(u,a)}),o.hooks.set("onOk",f.onOk),o.hooks.set("onOks",[]),o.hooks.set("triggerOk",function(){return i(u)}),o.hooks.set("update",function(a){return v(u,a)}),o.hooks.set("onCancel",function(){var a=d(),x=a==null?void 0:a.items.find(function(J){return J.key===u});if(x){var l,m;y(u);for(var C=arguments.length,P=new Array(C),F=0;F<C;F++)P[F]=arguments[F];return(l=(m=x.options).onCancel)===null||l===void 0?void 0:l.call.apply(l,[m].concat(P))}}),o.hooks.set("afterClose",function(){var a,x,l=d(),m=l==null?void 0:l.items.find(function(C){return C.key===u});return l==null||l.setItems(function(C){return C.filter(function(P){return P.key!==u})}),m==null||(a=(x=m.options).afterClose)===null||a===void 0?void 0:a.call(x)});var I=new Promise(function(a){o.hooks.set("resolve",a)}),t=d();return t==null||t.setItems(function(a){return[].concat(D()(a),[o])}),r()({afterClose:I},B(o.hooks))},[y,d,i,v]);return n.useMemo(function(){return[U,(0,g.jsx)(R,{ref:p},"modalHolder")]},[U])}},32198:function(S,s,e){e.r(s),e.d(s,{texts:function(){return T}});const T=[{value:"ModalService",paraId:0},{value:"\u4F9D\u8D56\u4E8E",paraId:0},{value:"antd",paraId:0},{value:"\uFF0C\u76EE\u7684\u662F\u4F7F\u7528\u670D\u52A1\u7684\u65B9\u5F0F\u6765\u8C03\u7528",paraId:0},{value:"Modal",paraId:0},{value:"\u5F39\u7A97\uFF0C\u4F7F\u7528\u8005\u4E0D\u5FC5\u5173\u5FC3\u5F39\u7A97\u7684\u663E\u793A/\u9690\u85CF\u53CA\u786E\u8BA4\u6309\u94AE\u7684\u5F02\u6B65\u5904\u7406\uFF0C\u53EA\u9700\u8981\u5173\u6CE8\u4E1A\u52A1\u903B\u8F91\u5373\u53EF",paraId:0},{value:"\u5728\u5B50\u7EC4\u4EF6\u4E2D\u83B7\u53D6",paraId:1,tocIndex:2},{value:"modal\u5B9E\u4F8B",paraId:1,tocIndex:2},{value:"\u5E76\u6CE8\u5165",paraId:1,tocIndex:2},{value:"onOk",paraId:1,tocIndex:2},{value:"\u7684\u51FD\u6570",paraId:1,tocIndex:2},{value:"\u4ECE\u8FD9\u4E2A\u4F8B\u5B50\u53EF\u4EE5\u770B\u51FA\u6765",paraId:2},{value:"useModalService",paraId:2},{value:"\u7684\u6838\u5FC3\u4F5C\u7528\uFF1A",paraId:2},{value:"Table",paraId:3},{value:"\u7EC4\u4EF6\u53EA\u8D1F\u8D23",paraId:3},{value:"Modal",paraId:3},{value:"\u7684\u663E\u793A/\u5173\u95ED\uFF0C\u5E76\u4E14\u5904\u7406",paraId:3},{value:"Modal",paraId:3},{value:"\u5173\u95ED\u540E\u7684\u8FD4\u56DE\u503C",paraId:3},{value:"EditForm",paraId:3},{value:"\u7EC4\u4EF6\u53EA\u8D1F\u8D23\u8868\u5355\u7684\u903B\u8F91\uFF0C\u6CE8\u5165\u70B9\u51FB",paraId:3},{value:"OK",paraId:3},{value:"\u7684\u56DE\u8C03\uFF0C\u4EE5\u53CA\u5173\u95ED\u540E\u7684\u8FD4\u56DE\u503C",paraId:3},{value:"useModalService()",paraId:4,tocIndex:4},{value:"\u8FD4\u56DE",paraId:4,tocIndex:4},{value:"[create, holder]",paraId:4,tocIndex:4},{value:"create(options)",paraId:5,tocIndex:5},{value:"\u6253\u5F00\u4E00\u4E2A\u5F39\u7A97\u5E76\u8FD4\u56DE\u5F39\u7A97\u7684\u5B9E\u4F8B",paraId:5,tocIndex:5},{value:`type create = <Result=any>(options?: ModalServiceOptions) => ModalInstance<Result> & { afterClose: Promise<Result | undefined> };
`,paraId:6,tocIndex:5},{value:"create",paraId:7,tocIndex:5},{value:"\u65B9\u6CD5\u8FD4\u56DE\u7684\u5B9E\u4F8B\u4F1A\u989D\u5916\u591A\u51FA\u4E00\u4E2A",paraId:7,tocIndex:5},{value:"afterClose",paraId:7,tocIndex:5},{value:"\u5C5E\u6027\uFF0C\u8FD9\u662F\u4E2A",paraId:7,tocIndex:5},{value:"Promise",paraId:7,tocIndex:5},{value:"\uFF0C\u8FD4\u56DE\u503C\u4E3A\u8C03\u7528",paraId:7,tocIndex:5},{value:"close",paraId:7,tocIndex:5},{value:"\u65B9\u6CD5\u65F6\u4F20\u5165\u7684\u503C\uFF1B",paraId:7,tocIndex:5},{value:"\u5982\u679C\u4E0D\u662F\u901A\u8FC7\u4E3B\u52A8\u8C03\u7528",paraId:7,tocIndex:5},{value:"close",paraId:7,tocIndex:5},{value:"\u65B9\u6CD5\u5173\u95ED\u7684\u5F39\u7A97\uFF08\u70B9\u51FB\u7A7A\u767D\u5904\u3001\u70B9\u51FB\xD7\u53F7\u3001\u70B9\u51FBCancel\u6309\u94AE\uFF09\uFF0C\u5219\u8FD4\u56DE\u503C\u4E3A",paraId:7,tocIndex:5},{value:"undefined",paraId:7,tocIndex:5},{value:"\uFF0C\u53EF\u4EE5\u901A\u8FC7",paraId:7,tocIndex:5},{value:"afterClose",paraId:7,tocIndex:5},{value:"\u7684\u8FD4\u56DE\u503C\u6765\u5224\u65AD\u5F39\u7A97\u5185\u4E1A\u52A1\u662F\u5426\u5904\u7406\u6210\u529F\uFF0C\u5E76\u6839\u636E\u8FD4\u56DE\u503C\u505A\u4E0B\u4E00\u6B65\u7684\u5904\u7406\uFF1B",paraId:7,tocIndex:5},{value:"\u6CE8\u610F\uFF1A",paraId:8,tocIndex:5},{value:" \u8FD9\u91CC\u7684",paraId:8,tocIndex:5},{value:"afterClose",paraId:8,tocIndex:5},{value:"\u8DDF\u914D\u7F6E\u9879\u91CC\u7684",paraId:8,tocIndex:5},{value:"afterClose",paraId:8,tocIndex:5},{value:"\u4E0D\u540C\uFF0C\u914D\u7F6E\u9879\u91CC\u7684",paraId:8,tocIndex:5},{value:"afterClose",paraId:8,tocIndex:5},{value:"\u4EE3\u8868\u5F39\u7A97\u5B8C\u5168\u5173\u95ED\u65F6\u7684\u56DE\u8C03\u51FD\u6570\uFF1B",paraId:8,tocIndex:5},{value:"holder",paraId:9,tocIndex:6},{value:"\u662F\u4E00\u4E2A",paraId:9,tocIndex:6},{value:"ReactElement",paraId:9,tocIndex:6},{value:"\uFF0C\u9700\u8981\u63D2\u5165\u5230\u5F53\u524D\u9875\u9762\u7684\u8282\u70B9\u4E2D\u53BB\uFF08\u6700\u597D\u653E\u5728\u6700\u5916\u5C42\uFF09\uFF0C\u4F8B\u5982\uFF1A",paraId:9,tocIndex:6},{value:`return (
  <>
    {holder}
    <OtherComponent />
  </>
);
`,paraId:10,tocIndex:6},{value:"\u76EE\u7684\u662F\u4E3A\u4E86\u8BA9",paraId:11,tocIndex:6},{value:"Modal",paraId:11,tocIndex:6},{value:"\u7EC4\u4EF6\u5185\u53EF\u4EE5\u83B7\u53D6\u5230",paraId:11,tocIndex:6},{value:"holder",paraId:11,tocIndex:6},{value:"\u6240\u5904\u4F4D\u7F6E\u7684\u4E0A\u4E0B\u6587\uFF08",paraId:11,tocIndex:6},{value:"Context",paraId:11,tocIndex:6},{value:"\u3001",paraId:11,tocIndex:6},{value:"redux",paraId:11,tocIndex:6},{value:"\u3001",paraId:11,tocIndex:6},{value:"dva",paraId:11,tocIndex:6},{value:"\u7B49\uFF09",paraId:11,tocIndex:6},{value:`type holder = React.ReactElement;
`,paraId:12,tocIndex:6},{value:"\u5728\u5F39\u7A97\u5185\u90E8\u4F7F\u7528\u7684",paraId:13,tocIndex:7},{value:"hook",paraId:13,tocIndex:7},{value:"\uFF0C\u8FD4\u56DE\u503C\u4E3A",paraId:13,tocIndex:7},{value:"ModalInstance",paraId:14,tocIndex:7},{value:"\u5728\u5F39\u7A97\u5185\u7EC4\u4EF6\u6CE8\u5165",paraId:15,tocIndex:8},{value:"onOk",paraId:15,tocIndex:8},{value:"\u7684\u56DE\u8C03\u51FD\u6570",paraId:15,tocIndex:8},{value:"\u6CE8\u610F\uFF1A",paraId:16,tocIndex:8},{value:" \u901A\u8FC7",paraId:16,tocIndex:8},{value:"useOnOkInject",paraId:16,tocIndex:8},{value:"\u6CE8\u5165\u7684\u51FD\u6570\u4F1A\u8986\u76D6",paraId:16,tocIndex:8},{value:"ModalServiceOptions",paraId:16,tocIndex:8},{value:"\u4E2D\u7684",paraId:16,tocIndex:8},{value:"onOk",paraId:16,tocIndex:8},{value:"\u51FD\u6570",paraId:16,tocIndex:8},{value:`// \u53C2\u6570\u540ConOk\uFF0C\u652F\u6301Promise
type useOnOkInject = (onOk: () => any) => void;
`,paraId:17,tocIndex:8},{value:"\u7EE7\u627F\u81EAantd ",paraId:18,tocIndex:10},{value:"ModalProps",paraId:18,tocIndex:10},{value:`export interface ModalServiceOptions extends Omit<ModalProps, 'open' | 'onOk'> {
  // onOk\u51FD\u6570\u8FD4\u56DE\u4E00\u4E2APromise\u65F6\uFF0C\u5C06\u4F1A\u7ED9ok\u6309\u94AE\u81EA\u52A8\u52A0\u4E0Aloading
  onOk?: () => any;
}
`,paraId:19,tocIndex:10},{value:`interface ModalInstance<Result = any> {
  /**
   * \u5173\u95ED\u5F39\u7A97\uFF0C\u4F20\u5165\u7684value\u5C06\u4F5C\u4E3AafterClose\u7684\u8FD4\u56DE\u503C
   */
  close: (value?: Result) => void;
  /**
   * \u624B\u52A8\u89E6\u53D1onOk\u51FD\u6570
   */
  triggerOk: NonNullable<ModalServiceOptions['onOk']>;
  /**
   * \u66F4\u65B0ModalProps
   */
  update: (options: ModalServiceOptions | ((pre: ModalServiceOptions) => ModalServiceOptions)) => void;
};
`,paraId:20,tocIndex:11},{value:"destroyOnClose",paraId:21},{value:"forceRender",paraId:21},{value:"ModalService",paraId:22,tocIndex:13},{value:"\u53EA\u6709\u5728\u8C03\u7528",paraId:22,tocIndex:13},{value:"create",paraId:22,tocIndex:13},{value:"\u65F6\u624D\u521B\u5EFA\u5E76\u6253\u5F00\u5F39\u7A97\uFF0C\u5728\u5B8C\u5168\u5173\u95ED\u540E\u9500\u6BC1\uFF1B\u8FD9\u6837\u505A\u7684\u76EE\u7684\u662F\u4E3A\u4E86\u9632\u6B62\u9875\u9762\u591A\u6B21\u8C03\u7528",paraId:22,tocIndex:13},{value:"create",paraId:22,tocIndex:13},{value:"\u4F46\u672A\u53CA\u65F6\u9500\u6BC1\u4ECE\u800C\u9020\u6210\u5E94\u7528\u7684\u6027\u80FD\u635F\u8017\uFF0C\u6240\u4EE5\u5728\u5F39\u7A97\u5173\u95ED\u540E\u9500\u6BC1\u4E86\u5BF9\u5E94\u7684",paraId:22,tocIndex:13},{value:"Modal",paraId:22,tocIndex:13},{value:"\u7EC4\u4EF6",paraId:22,tocIndex:13}]},63299:function(S,s){s.Z=`import React from 'react';
import { Button } from 'antd';
import { useModalService } from 'use-modal-service';

export default () => {

  const [create, holder] = useModalService();

  return (
    <>
      {holder}
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
`},22545:function(S,s){s.Z=`import React from 'react';
import { Form, Input } from 'antd';
import { useModalInstance, useOnOkInject } from 'use-modal-service';

export const EditForm = (props: { record?: Record<string, any> }) => {
  const { record } = props;
  const [form] = Form.useForm();

  const modal = useModalInstance();
  useOnOkInject(async () => {
    const values = await form.validateFields();
    await new Promise((resolve) => { setTimeout(resolve, 1000); }); // \u6A21\u62DF\u5F02\u6B65\u63A5\u53E3\u8C03\u7528
    modal?.close(values);
  });

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
`},27450:function(S,s){s.Z=`import React from 'react';
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
  const [create, holder] = useModalService();

  return (
    <>
      {holder}
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
                        title: '\u7F16\u8F91',
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

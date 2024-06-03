"use strict";(self.webpackChunkuse_modal_service=self.webpackChunkuse_modal_service||[]).push([[629],{82564:function(A,d,e){e.r(d),e.d(d,{demos:function(){return F}});var D=e(15009),M=e.n(D),W=e(99289),L=e.n(W),C=e(67294),F={"src-modal-service-demo-commonmodal":{component:C.memo(C.lazy(function(){return e.e(433).then(e.bind(e,40733))})),asset:{type:"BLOCK",id:"src-modal-service-demo-commonmodal",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(63299).Z},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.17.4"},"use-modal-service":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:e(67294),antd:e(35354),"use-modal-service":e(78715)},renderOpts:{compile:function(){var B=L()(M()().mark(function k(){var o,n=arguments;return M()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(19).then(e.bind(e,4019));case 2:return u.abrupt("return",(o=u.sent).default.apply(o,n));case 3:case"end":return u.stop()}},k)}));function O(){return B.apply(this,arguments)}return O}()}},"src-modal-service-demo-tablemodal":{component:C.memo(C.lazy(function(){return e.e(433).then(e.bind(e,96988))})),asset:{type:"BLOCK",id:"src-modal-service-demo-tablemodal",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(27450).Z},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.17.4"},"use-modal-service":{type:"NPM",value:"0.0.1"},"./TableEditForm.tsx":{type:"FILE",value:e(22545).Z}},entry:"index.tsx"},context:{react:e(67294),antd:e(35354),"use-modal-service":e(78715),"./TableEditForm.tsx":e(207)},renderOpts:{compile:function(){var B=L()(M()().mark(function k(){var o,n=arguments;return M()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,e.e(19).then(e.bind(e,4019));case 2:return u.abrupt("return",(o=u.sent).default.apply(o,n));case 3:case"end":return u.stop()}},k)}));function O(){return B.apply(this,arguments)}return O}()}}}},207:function(A,d,e){e.r(d),e.d(d,{EditForm:function(){return U}});var D=e(15009),M=e.n(D),W=e(99289),L=e.n(W),C=e(5574),F=e.n(C),B=e(67294),O=e(65520),k=e(38289),o=e(78715),n=e(85893),U=function(z){var y=z.record,N=O.Z.useForm(),$=F()(N,1),Z=$[0],b=(0,o.useModalInstance)();return(0,o.useOnOkInject)(L()(M()().mark(function V(){var G;return M()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.next=2,Z.validateFields();case 2:return G=P.sent,P.next=5,new Promise(function(J){setTimeout(J,1e3)});case 5:b==null||b.close(G);case 6:case"end":return P.stop()}},V)}))),(0,n.jsxs)(O.Z,{layout:"vertical",form:Z,initialValues:y,children:[(0,n.jsx)(O.Z.Item,{label:"\u59D3\u540D",name:"name",children:(0,n.jsx)(k.Z,{})}),(0,n.jsx)(O.Z.Item,{label:"\u5E74\u9F84",name:"age",children:(0,n.jsx)(k.Z,{})})]})}},78715:function(A,d,e){e.r(d),e.d(d,{useModalInstance:function(){return Z},useModalService:function(){return Y},useOnOkInject:function(){return G}});var D=e(15009),M=e.n(D),W=e(99289),L=e.n(W),C=e(19632),F=e.n(C),B=e(13769),O=e.n(B),k=e(97857),o=e.n(k),n=e(67294),U=e(5574),u=e.n(U),z=e(85576),y=e(85893),N=Symbol("hooks"),$=n.createContext(null);function Z(){return n.useContext($)}function b(_){var x={close:_.get("close"),triggerOk:_.get("triggerOk"),update:_.get("update"),getHooks:function(t){if(t===N)return _;throw new Error("getHooks method is for internal use only")}};return x}var V=n.memo(function(_){var x=_.children,E=_.value,t=E.hooks,I=n.useMemo(function(){return b(t)},[t]);return(0,y.jsx)($.Provider,{value:I,children:x})}),G=function(x){var E=n.useRef(x);E.current=x;var t=Z(),I=t.getHooks,j=I(N);n.useEffect(function(){var v=j.get("onOks"),H=function(){return E.current()};return v.push(H),function(){var p=v.indexOf(H);p>-1&&v.splice(p,1)}},[j])},Q=n.forwardRef(function(_,x){var E=n.useState([]),t=u()(E,2),I=t[0],j=t[1];return n.useImperativeHandle(x,function(){return{items:I,setItems:j}}),(0,y.jsx)(y.Fragment,{children:I.map(function(v){return(0,y.jsx)(n.Fragment,{children:(0,y.jsx)(V,{value:v,children:(0,y.jsx)(z.Z,o()(o()({},v.options),{},{open:v.open,onOk:v.hooks.get("triggerOk"),onCancel:v.hooks.get("onCancel"),afterClose:v.hooks.get("afterClose"),children:v.children}))})},v.key)})})}),P=n.memo(Q),J=["onOk"],X=["onOk","children"],Y=function(){var x=n.useRef(null),E=n.useRef(0),t=n.useCallback(function(){return x.current||console.error("Please insert the holder into the page node, otherwise ModalService will not work properly"),x.current},[]),I=n.useCallback(function(p,s){var m=t();m==null||m.setItems(function(f){var l=f.find(function(a){return a.key===p});if(!l)return f;var r=typeof s=="function"?s(o()(o()({},l.options),{},{onOk:l.hooks.get("onOk")})):s,R=r.onOk,h=O()(r,J);return"onOk"in r&&l.hooks.set("onOk",R),[].concat(F()(f.filter(function(a){return a!==l})),[o()(o()({},l),{},{options:o()(o()({},l.options),h)})])})},[t]),j=n.useCallback(function(p,s){var m=t();m==null||m.setItems(function(f){var l=f.find(function(r){return r.key===p});return l?(l.hooks.get("resolve")(s),[].concat(F()(f.filter(function(r){return r!==l})),[o()(o()({},l),{},{open:!1,options:o()(o()({},l.options),{},{confirmLoading:!1})})])):f})},[t]),v=n.useCallback(function(){var p=L()(M()().mark(function s(m){var f,l,r,R,h,a,T,c,g;return M()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return I(m,{confirmLoading:!0}),i.prev=1,R=t(),h=R==null||(f=R.items.find(function(K){return K.key===m}))===null||f===void 0?void 0:f.hooks,a=(l=h==null?void 0:h.get("onOks"))!==null&&l!==void 0?l:[],T=h==null?void 0:h.get("onOk"),c=(r=a[a.length-1])!==null&&r!==void 0?r:T,i.next=9,c==null?void 0:c();case 9:return g=i.sent,I(m,{confirmLoading:!1}),i.abrupt("return",g);case 14:throw i.prev=14,i.t0=i.catch(1),I(m,{confirmLoading:!1}),i.t0;case 18:case"end":return i.stop()}},s,null,[[1,14]])}));return function(s){return p.apply(this,arguments)}}(),[t,I]),H=n.useCallback(function(p){E.current+=1;var s=E.current,m=p.onOk,f=p.children,l=O()(p,X),r={key:s,open:!0,children:f,options:l,hooks:new Map};r.hooks.set("close",function(a){return j(s,a)}),r.hooks.set("onOk",m),r.hooks.set("onOks",[]),r.hooks.set("triggerOk",function(){return v(s)}),r.hooks.set("update",function(a){return I(s,a)}),r.hooks.set("onCancel",function(){var a=t(),T=a==null?void 0:a.items.find(function(w){return w.key===s});if(T){var c,g;j(s);for(var S=arguments.length,i=new Array(S),K=0;K<S;K++)i[K]=arguments[K];return(c=(g=T.options).onCancel)===null||c===void 0?void 0:c.call.apply(c,[g].concat(i))}}),r.hooks.set("afterClose",function(){var a,T,c=t(),g=c==null?void 0:c.items.find(function(S){return S.key===s});return c==null||c.setItems(function(S){return S.filter(function(i){return i.key!==s})}),g==null||(a=(T=g.options).afterClose)===null||a===void 0?void 0:a.call(T)});var R=new Promise(function(a){r.hooks.set("resolve",a)}),h=t();return h==null||h.setItems(function(a){return[].concat(F()(a),[r])}),o()({afterClose:R},b(r.hooks))},[j,t,v,I]);return n.useMemo(function(){return[H,(0,y.jsx)(P,{ref:x},"modalHolder")]},[H])}},32198:function(A,d,e){e.r(d),e.d(d,{texts:function(){return D}});const D=[{value:"ModalService",paraId:0},{value:"\u4F9D\u8D56\u4E8E",paraId:0},{value:"antd",paraId:0},{value:"\uFF0C\u76EE\u7684\u662F\u4F7F\u7528\u670D\u52A1\u7684\u65B9\u5F0F\u6765\u8C03\u7528",paraId:0},{value:"Modal",paraId:0},{value:"\u5F39\u7A97\uFF0C\u4F7F\u7528\u8005\u4E0D\u5FC5\u5173\u5FC3\u5F39\u7A97\u7684\u663E\u793A/\u9690\u85CF\u53CA\u786E\u8BA4\u6309\u94AE\u7684\u5F02\u6B65\u5904\u7406\uFF0C\u53EA\u9700\u8981\u5173\u6CE8\u4E1A\u52A1\u903B\u8F91\u5373\u53EF",paraId:0},{value:"\u5728\u5B50\u7EC4\u4EF6\u4E2D\u83B7\u53D6",paraId:1,tocIndex:2},{value:"modal\u5B9E\u4F8B",paraId:1,tocIndex:2},{value:"\u5E76\u6CE8\u5165",paraId:1,tocIndex:2},{value:"onOk",paraId:1,tocIndex:2},{value:"\u7684\u51FD\u6570",paraId:1,tocIndex:2},{value:"\u4ECE\u8FD9\u4E2A\u4F8B\u5B50\u53EF\u4EE5\u770B\u51FA\u6765",paraId:2},{value:"useModalService",paraId:2},{value:"\u7684\u6838\u5FC3\u4F5C\u7528\uFF1A",paraId:2},{value:"Table",paraId:3},{value:"\u7EC4\u4EF6\u53EA\u8D1F\u8D23",paraId:3},{value:"Modal",paraId:3},{value:"\u7684\u663E\u793A/\u5173\u95ED\uFF0C\u5E76\u4E14\u5904\u7406",paraId:3},{value:"Modal",paraId:3},{value:"\u5173\u95ED\u540E\u7684\u8FD4\u56DE\u503C",paraId:3},{value:"EditForm",paraId:3},{value:"\u7EC4\u4EF6\u53EA\u8D1F\u8D23\u8868\u5355\u7684\u903B\u8F91\uFF0C\u6CE8\u5165\u70B9\u51FB",paraId:3},{value:"OK",paraId:3},{value:"\u7684\u56DE\u8C03\uFF0C\u4EE5\u53CA\u5173\u95ED\u540E\u7684\u8FD4\u56DE\u503C",paraId:3},{value:"useModalService()",paraId:4,tocIndex:4},{value:"\u8FD4\u56DE",paraId:4,tocIndex:4},{value:"[create, holder]",paraId:4,tocIndex:4},{value:"create(options)",paraId:5,tocIndex:5},{value:"\u6253\u5F00\u4E00\u4E2A\u5F39\u7A97\u5E76\u8FD4\u56DE\u5F39\u7A97\u7684\u5B9E\u4F8B",paraId:5,tocIndex:5},{value:`type create = <Result=any>(options: ModalServiceOptions) => ModalInstance<Result> & { afterClose: Promise<any> };
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
   * \u4E3B\u52A8\u89E6\u53D1onOk\u51FD\u6570
   */
  triggerOk: NonNullable<ModalServiceOptions['onOk']>;
  /**
   * \u66F4\u65B0ModalProps
   */
  update: (options: Omit<ModalServiceOptions, 'children'> | ((pre: Omit<ModalServiceOptions, 'children'>) => Omit<ModalServiceOptions, 'children'>)) => void;
};
`,paraId:20,tocIndex:11},{value:"destroyOnClose",paraId:21},{value:"forceRender",paraId:21},{value:"ModalService",paraId:22,tocIndex:13},{value:"\u53EA\u6709\u5728\u8C03\u7528",paraId:22,tocIndex:13},{value:"create",paraId:22,tocIndex:13},{value:"\u65F6\u624D\u521B\u5EFA\u5E76\u6253\u5F00\u5F39\u7A97\uFF0C\u5728\u5B8C\u5168\u5173\u95ED\u540E\u9500\u6BC1\uFF1B\u8FD9\u6837\u505A\u7684\u76EE\u7684\u662F\u4E3A\u4E86\u9632\u6B62\u9875\u9762\u591A\u6B21\u8C03\u7528",paraId:22,tocIndex:13},{value:"create",paraId:22,tocIndex:13},{value:"\u4F46\u672A\u53CA\u65F6\u9500\u6BC1\u4ECE\u800C\u9020\u6210\u5E94\u7528\u7684\u6027\u80FD\u635F\u8017\uFF0C\u6240\u4EE5\u5728\u5F39\u7A97\u5173\u95ED\u540E\u9500\u6BC1\u4E86\u5BF9\u5E94\u7684",paraId:22,tocIndex:13},{value:"Modal",paraId:22,tocIndex:13},{value:"\u7EC4\u4EF6",paraId:22,tocIndex:13}]},63299:function(A,d){d.Z=`import React from 'react';
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
`},22545:function(A,d){d.Z=`import React from 'react';
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
`},27450:function(A,d){d.Z=`import React from 'react';
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

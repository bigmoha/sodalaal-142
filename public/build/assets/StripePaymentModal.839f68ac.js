import{g as E,w as V}from"./stripe.esm.3ed8eaf3.js";import w from"./PsModal.b5929b7c.js";import N from"./PsLabelHeader4.e06a0f87.js";import B from"./PsErrorDialog.d884287b.js";import D from"./PsButton.2af859b4.js";import M from"./PsLoadingDialog.9586f261.js";import{P as x}from"./PsValueStore.db7005b9.js";import{_ as F}from"./plugin-vue_export-helper.21dcd24c.js";import{d as L,i as y,o as P,c as S,b as n,w as r,a as $,q as u,t as d,g as O,F as T,r as a}from"./app.bcb0820c.js";import"./vue-neat-modal.bb68220d.js";import"./PsLine.115a33c3.js";import"./PsLabel.f618b059.js";import"./PsLabelTitle.529f301f.js";const j=L({components:{StripeElement:E,PsModal:w,PsLabelHeader4:N,PsButton:D,PsLoadingDialog:M,PsErrorDialog:B},setup(){const e=y(),l=x();let m,p;function f(t){t=="no"&&p(),e.value.toggle(!1)}function g(t,o){e.value.toggle(!0),m=t,p=o}const s=y(),_=l.getPublishedKey(),{stripe:i,elements:[c]}=V({key:_||"",elements:[{type:"card",options:{}}]});return{psmodal:e,openModal:g,actionClicked:f,event:s,cardElement:c,registerCard:()=>{var t,o,k,C;s.value!=null&&((t=s.value)==null?void 0:t.complete)!=null&&((o=s.value)==null?void 0:o.complete)&&((k=i.value)==null||k.elements().create("card"),(C=i.value)==null||C.createToken(c.value).then(function(h){var b;localStorage.paymentNonce=(b=h.token)==null?void 0:b.id,m(),e.value.toggle(!1)}))}}}}),q={class:"flex flex-col items-center mt-8"},H={class:"flex items-center justify-center mb-4"},K={key:0};function z(e,l,m,p,f,g){const s=a("ps-label-header-4"),_=a("StripeElement"),i=a("ps-button"),c=a("ps-modal"),v=a("ps-loading-dialog"),t=a("ps-error-dialog");return P(),S(T,null,[n(c,{ref:"psmodal",isClickOut:!1},{title:r(()=>[$("div",q,[n(s,{class:"font-bold"},{default:r(()=>[u(d(e.$t("stripe_credit_card_modal__card_entry")),1)]),_:1})])]),body:r(()=>[n(_,{element:e.cardElement,onChange:l[0]||(l[0]=o=>e.event=o)},null,8,["element"])]),footer:r(()=>[$("div",H,[n(i,{class:"text-center w-60 mx-auto",onClick:e.registerCard},{default:r(()=>[u(d(e.$t("stripe_credit_card_modal__save")),1)]),_:1},8,["onClick"]),n(i,{class:"text-center w-60 mx-auto ms-4",theme:"btn-second",onClick:l[1]||(l[1]=o=>e.actionClicked("no"))},{default:r(()=>[u(d(e.$t("stripe_credit_card_modal__cancel")),1)]),_:1})])]),default:r(()=>[e.event&&e.event.error?(P(),S("div",K,d(e.event.error.message),1)):O("",!0)]),_:1},512),n(v,{ref:"psloading",isClickOut:!1},null,512),n(t,{ref:"ps_error_dialog"},null,512)],64)}var oe=F(j,[["render",z]]);export{oe as default};
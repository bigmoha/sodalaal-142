import u from"./PsModal.b5929b7c.js";import g from"./PsLabelTitle.529f301f.js";import b from"./PsLabel.f618b059.js";import{d as v,i as r,B as x,o as $,f as C,w as e,b as i,q as _,t as c,r as a}from"./app.bcb0820c.js";import{_ as M}from"./plugin-vue_export-helper.21dcd24c.js";import"./vue-neat-modal.bb68220d.js";import"./PsLine.115a33c3.js";const P=v({components:{PsModal:u,PsLabel:b,PsLabelTitle:g},setup(){const o=r(),t=r(x("ps_loading_dialog__loading"));function s(){o.value.toggle(!0)}function l(){o.value.toggle(!1)}function n(p){t.value=p}return{psmodal:o,openModal:s,closeModal:l,message:t,setMessage:n}}});function h(o,t,s,l,n,p){const m=a("ps-label-title"),d=a("ps-label"),f=a("ps-modal");return $(),C(f,{ref:"psmodal",maxWidth:"450px",isClickOut:!1,class:"z-50"},{title:e(()=>[i(m,null,{default:e(()=>[_(c(o.$t("ps_loading_dialog__please_wait")),1)]),_:1})]),body:e(()=>[i(d,null,{default:e(()=>[_(c(o.message),1)]),_:1})]),footer:e(()=>[]),_:1},512)}var T=M(P,[["render",h]]);export{T as default};

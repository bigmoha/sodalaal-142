import k from"./PsModal.b5929b7c.js";import b from"./PsLabel.f618b059.js";import h from"./PsButton.2af859b4.js";import{d as C,i as a,B as p,o as B,f as w,w as s,a as l,b as _,q as m,t as u,r as f}from"./app.bcb0820c.js";import{_ as y}from"./plugin-vue_export-helper.21dcd24c.js";import"./vue-neat-modal.bb68220d.js";import"./PsLine.115a33c3.js";const $=C({components:{PsModal:k,PsLabel:b,PsButton:h},setup(){const t=a(),e=a(p("ps_success_dialog__success")),n=a(p("ps_success_dialog__success_message")),i=a(p("ps_confirm_dialog__yes"));let c;function g(){c(),t.value.toggle(!1)}function o(d,r,x,v){e.value=d,n.value=r.toString(),i.value=x,t.value.toggle(!0),c=v}return{psmodal:t,title:e,message:n,openModal:o,actionClicked:g,okButton:i}}}),P={class:"w-full text-start"},N={class:"w-full text-start mt-2"},S={class:"flex justify-end"},V={class:"flex-grow-0"};function z(t,e,n,i,c,g){const o=f("ps-label"),d=f("ps-button"),r=f("ps-modal");return B(),w(r,{ref:"psmodal",maxWidth:"480px",line:"hidden",isClickOut:!1,theme:" px-6 py-6 rounded-sm",class:"z-20"},{title:s(()=>[l("div",P,[_(o,{class:"font-medium text-lg lg:text-xl"},{default:s(()=>[m(u(t.title),1)]),_:1})])]),body:s(()=>[l("div",N,[_(o,{class:"font-light text-sm lg:text-base"},{default:s(()=>[m(u(t.message),1)]),_:1})])]),footer:s(()=>[l("div",S,[l("div",V,[_(d,{rounded:"rounded",onClick:e[0]||(e[0]=x=>t.actionClicked()),textSize:"text-xs lg:text-sm",class:""},{default:s(()=>[m(u(t.okButton),1)]),_:1})])])]),_:1},512)}var T=y($,[["render",z]]);export{T as default};

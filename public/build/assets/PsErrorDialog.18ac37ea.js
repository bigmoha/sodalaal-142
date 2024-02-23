import k from"./PsModal.b5929b7c.js";import b from"./PsLabel.f618b059.js";import y from"./PsButton.2af859b4.js";import{d as C,i as l,B as _,o as w,f as B,w as t,b as s,a,q as g,t as x,r as i}from"./app.bcb0820c.js";import $ from"./PsIcon.c315e2a2.js";import{_ as P}from"./plugin-vue_export-helper.21dcd24c.js";import"./vue-neat-modal.bb68220d.js";import"./PsLine.115a33c3.js";const E=C({components:{PsModal:k,PsLabel:b,PsButton:y,PsIcon:$},setup(){const e=l(),o=l(_("ps_error_dialog__error")),c=l(_("ps_error_dialog__error_message")),f=l(_("ps_confirm_dialog__yes"));let d;function v(){e.value.toggle(!1),d()}function n(m,p,u,h){o.value=m,c.value=p.toString(),f.value=u,e.value.toggle(!0),d=h}function r(){e.value.toggle(!1)}return{psmodal:e,title:o,message:c,openModal:n,actionClicked:v,okButton:f,close:r}}}),S={class:"flex flex-col text-center justify-center items-center text-feAchromatic-300"},j={class:"w-full text-center mt-4"},N={class:"flex justify-center mt-6"},V={class:"flex-grow-0"};function z(e,o,c,f,d,v){const n=i("ps-icon"),r=i("ps-label"),m=i("ps-button"),p=i("ps-modal");return w(),B(p,{ref:"psmodal",maxWidth:"450px",line:"hidden",isClickOut:!1,theme:" px-6 py-7 rounded-lg shadow-xl",class:"z-20"},{title:t(()=>[s(n,{onClick:o[0]||(o[0]=u=>e.close()),name:"close",class:"text-sm text-feSecondary-400 ms-auto my-auto focus:shadow-none hover:text-purple-500 flex justify-end"}),a("div",S,[s(n,{class:"flex-grow-0",name:"alert-triangle",w:"86",h:"86"}),s(r,{class:"font-medium text-xl lg:text-2xl mt-3"},{default:t(()=>[g(x(e.title),1)]),_:1})])]),body:t(()=>[a("div",j,[s(r,{class:"font-light text-sm lg:text-base"},{default:t(()=>[g(x(e.message),1)]),_:1})])]),footer:t(()=>[a("div",N,[a("div",V,[s(m,{rounded:"rounded",onClick:o[1]||(o[1]=u=>e.actionClicked()),textSize:"text-sm",class:"",colors:"bg-feError-500 text-feAchromatic-50",hover:"hover:outline-none hover:ring hover:ring-feError-100",focus:"focus:outline-none focus:ring focus:ring-feError-300"},{default:t(()=>[g(x(e.okButton),1)]),_:1})])])]),_:1},512)}var W=P(E,[["render",z]]);export{W as default};
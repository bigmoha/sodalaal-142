import{d as m,o as i,c as n,b as a,w as d,l as t,a as e,h as c,n as l,g as p,r as u}from"./app.bcb0820c.js";import{J as h}from"./SectionTitle.ab9ccd58.js";import{_ as f}from"./plugin-vue_export-helper.21dcd24c.js";const _=m({emits:["submitted"],components:{JetSectionTitle:h},computed:{hasActions(){return!!this.$slots.actions}}}),g={class:"md:grid md:grid-cols-3 md:gap-6"},$={class:"mt-5 md:mt-0 md:col-span-2"},v={class:"grid grid-cols-6 gap-6"},b={key:0,class:"flex items-center justify-end px-4 py-3 bg-gray-50 text-right sm:px-6 shadow sm:rounded-bl-md sm:rounded-br-md"};function w(s,o,y,C,J,S){const r=u("jet-section-title");return i(),n("div",g,[a(r,null,{title:d(()=>[t(s.$slots,"title")]),description:d(()=>[t(s.$slots,"description")]),_:3}),e("div",$,[e("form",{onSubmit:o[0]||(o[0]=c(j=>s.$emit("submitted"),["prevent"]))},[e("div",{class:l(["px-4 py-5 bg-white sm:p-6 shadow",s.hasActions?"sm:rounded-tl-md sm:rounded-tr-md":"sm:rounded-md"])},[e("div",v,[t(s.$slots,"form")])],2),s.hasActions?(i(),n("div",b,[t(s.$slots,"actions")])):p("",!0)],32)])])}var N=f(_,[["render",w]]);export{N as J};

import{a as m}from"./PsModal.fccd5c23.js";import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";import{o,c as y,a as d,l as i,b as r,f as s,g as u,n as c,r as g}from"./app.bcb0820c.js";const b={name:"PsInputGroup",components:{PsLine:m},props:{value:{type:String,default:""},type:{type:String,default:"text"},theme:{type:String,default:"text-secondary-800"},maxlength:{type:Number,default:99999999},placeholder:{type:String,default:""},disabled:{type:Boolean,default:!1},disabledTheme:{type:String,default:" text-secondary-300 border-secondary-200 shadow-none placeholder-secondary-300"},invalid:{type:String,default:"invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"},focus:{type:String,default:" focus:outline-none focus:ring-0"},onInput:Function,background:{type:String,default:"bg-white dark:bg-blue-100 rounded-md border border-gray-200 shadow-sm"},opacity:{type:String,default:"opacity-100"},line:{type:String,default:"border-gray-200 dark:border-white"},istwoline:{type:Boolean,default:!1}},setup(t,{emit:l}){function e(n){l("update:value",n),t.onInput!=null&&t.onInput(n)}return{handleInput:e}}},p={class:"flex-grow-0 flex flex-row"},x=["type","value","disabled","maxlength","placeholder"],v={class:"flex-grow-0 flex flex-row"};function w(t,l,e,n,k,_){const a=g("ps-line");return o(),y("div",{class:c(["flex flex-row",[e.background]])},[d("div",p,[i(t.$slots,"leftButton"),r(a,{theme:e.line},null,8,["theme"]),e.istwoline?(o(),s(a,{key:0,class:"ms-1",theme:e.line},null,8,["theme"])):u("",!0)]),d("input",{class:c(["flex-grow block w-full px-4 py-2.25 text-sm shadow-sm border border-none placeholder-secondary-500",e.disabled?[e.opacity,e.disabledTheme]:[e.theme,e.invalid,e.focus,e.opacity]]),type:e.type,value:e.value,disabled:e.disabled,maxlength:e.maxlength,placeholder:e.placeholder,onInput:l[0]||(l[0]=f=>n.handleInput(f.target.value))},null,42,x),d("div",v,[r(a,{theme:e.line},null,8,["theme"]),e.istwoline?(o(),s(a,{key:0,class:"ms-1",theme:e.line},null,8,["theme"])):u("",!0),i(t.$slots,"rightButton")])],2)}var N=h(b,[["render",w]]);export{N as P};

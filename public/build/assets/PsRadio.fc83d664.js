import{P as o}from"./PsLabel.ba854ae6.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,f as r,w as d,a as u,n as f,q as m,t as g,r as _}from"./app.bcb0820c.js";const h={name:"PsRadio",components:{PsLabel:o},props:{value:{type:Object},selectedValue:{type:Object},title:{type:String,default:"N.A"},onChange:Function,color:{type:String,default:"text-primary-500 border-gray-300 focus:ring-primary-500 hover:bg-primary-500"}},setup(e,{emit:a}){function n(){let t=!1;return e.selectedValue!=null&&e.value!=null&&e.selectedValue.id==e.value.id&&(t=!0),t}function l(){const t=e.selectedValue;Object.assign(t,e.value),a("update:selectedValue",t),e.onChange!=null&&e.onChange(t)}return{getValue:n,handleInput:l}}},p=["id","checked"];function y(e,a,n,l,t,V){const i=_("ps-label");return s(),r(i,{class:"select-none inline-flex items-center"},{default:d(()=>[u("input",{type:"radio",class:f(["form-check-input focus:ring-1 me-2",n.color]),id:n.title,checked:l.getValue(),onChange:a[0]||(a[0]=b=>l.handleInput())},null,42,p),m(" "+g(n.title),1)]),_:1})}var k=c(h,[["render",y]]);export{k as P};

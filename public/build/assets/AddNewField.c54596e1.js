import{d as g,Z as C,H as E,o as u,c as f,b as s,w as a,a as r,h as I,q as i,t as p,m as v,bz as k,F as b,s as F,u as N,r as n}from"./app.bcb0820c.js";import{P as B}from"./PsLayout.28577d6c.js";import{u as S}from"./Validators.cb85894a.js";import{P as T}from"./PsInput.096bf606.js";import{P as H}from"./PsLabel.ba854ae6.js";import{P as L}from"./PsButton.6e47777c.js";import{P as V}from"./PsTextarea.f8e79b57.js";import{P as M}from"./PsLabelHeader4.6bd3b47b.js";import{P as q}from"./PsLabelCaption.e61a7806.js";import{_ as D}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsIcon.71b0e9da.js";import"./Icons.80b46b2b.js";import"./PsDropdown.d345be0d.js";import"./PsDropdownSelect.65e73a6d.js";import"./PsDangerDialog.45064bba.js";import"./PsModal.fccd5c23.js";import"./vue-neat-modal.bb68220d.js";import"./PsToggle.6d7ca6c8.js";import"./toggle.2d374629.js";import"./PsWarningDialog.89df77bf.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.73b90a8b.js";import"./SidebarSubTab.1a8b9e94.js";import"./PsErrorDialog.d3e814f0.js";import"./PsInputWithRightIcon.29f20201.js";import"./PsSuccessDialog.c18e6651.js";import"./PsLoading.9d8c0dd0.js";import"./PsBannerIcon.6e4a09ea.js";import"./PsIcon1.4226e037.js";import"./PsLoadingCircleDialog.1c2df66f.js";const U=g({name:"AddNewField",components:{Head:C,PsInput:T,PsLabel:H,PsButton:L,PsTextarea:V,PsLabelHeader4:M,PsLabelCaption:q},layout:B,props:["errors","uiTypes"],data(){return{form:E({name:"",ui_type_id:"",mandatory:"0"})}},setup(e){const{isEmpty:t}=S();return{validateEmptyInput:(m,l,y="")=>{e.errors[m]=l?"":t(m,l,y)}}},methods:{handleSubmit(){this.$inertia.post(route("shop.addNewField.store"),this.form,{forceFormData:!0})}}}),A={class:"py-6"},z={class:"bg-white py-3 px-6"},K=i("Name"),Z=i("Type"),j={value:""},G=["value"],J=i("Is Mandatory?"),O={class:"mt-4"};function Q(e,t,P,m,l,y){const h=n("Head"),d=n("ps-label"),c=n("ps-input"),_=n("ps-label-caption"),w=n("ps-button"),$=n("ps-layout");return u(),f(b,null,[s(h,{title:"Create New Field"}),s($,null,{default:a(()=>[r("div",A,[r("div",z,[r("form",{onSubmit:t[7]||(t[7]=I((...o)=>e.handleSubmit&&e.handleSubmit(...o),["prevent"]))},[r("div",null,[s(d,{for:"",class:"me-2 flex items-center"},{default:a(()=>[K]),_:1}),s(c,{type:"text",class:"w-60 me-2 rounded",value:e.form.name,"onUpdate:value":t[0]||(t[0]=o=>e.form.name=o),placeholder:"Please enter custom field name",onKeyup:t[1]||(t[1]=o=>e.validateEmptyInput("name",e.form.name)),onBlur:t[2]||(t[2]=o=>e.validateEmptyInput("name",e.form.name))},null,8,["value"]),s(_,{textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[i(p(e.errors.name),1)]),_:1})]),r("div",null,[s(d,null,{default:a(()=>[Z]),_:1}),v(r("select",{type:"text",class:"w-60 rounded","onUpdate:modelValue":t[3]||(t[3]=o=>e.form.ui_type_id=o),onChange:t[4]||(t[4]=o=>e.validateEmptyInput("ui_type_id",e.form.ui_type_id,"The type field is required.")),onBlur:t[5]||(t[5]=o=>e.validateEmptyInput("ui_type_id",e.form.ui_type_id,"The type field is required."))},[r("option",j,p(e.$t("please_select_label")),1),(u(!0),f(b,null,F(e.uiTypes,o=>(u(),f("option",{value:o.id,key:o.id},p(o.name),9,G))),128))],544),[[k,e.form.ui_type_id]]),s(_,{textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[i(p(e.errors.ui_type_id),1)]),_:1})]),r("div",null,[s(d,{class:"me-2"},{default:a(()=>[J]),_:1}),v(r("input",{type:"checkbox",class:"rounded border",value:"0","onUpdate:modelValue":t[6]||(t[6]=o=>e.form.mandatory=o)},null,512),[[N,e.form.mandatory]])]),r("div",O,[s(w,{class:"hover:bg-gray-100 text-white hover:text-gray-400 py-1 px-6 border rounded bg-indigo-500"},{default:a(()=>[i(p(e.$t("core__be_btn_save")),1)]),_:1})])],32)])])]),_:1})],64)}var Ie=D(U,[["render",Q]]);export{Ie as default};
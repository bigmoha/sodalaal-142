import{d as x,Z as z,i as _,H as S,B as d,o as m,c as k,b as r,w as s,a,q as b,t as n,h as L,f as C,g as f,F as V,r as o}from"./app.bcb0820c.js";import{P as D}from"./PsLayout.28577d6c.js";import{P as F}from"./PsBreadcrumb2.c24fe59b.js";import{u as T}from"./Validators.cb85894a.js";import{P as N}from"./PsInput.096bf606.js";import{P as j}from"./PsLabel.ba854ae6.js";import{P as q}from"./PsButton.6e47777c.js";import{P as K}from"./PsDangerDialog.45064bba.js";import{P as M}from"./PsCard.6a2e47ce.js";import{P as U}from"./PsLoading.9d8c0dd0.js";import{P as Z}from"./PsIcon.71b0e9da.js";import{P as A}from"./PsLabelCaption.e61a7806.js";import{_ as G}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsDropdown.d345be0d.js";import"./PsDropdownSelect.65e73a6d.js";import"./PsToggle.6d7ca6c8.js";import"./toggle.2d374629.js";import"./PsWarningDialog.89df77bf.js";import"./PsModal.fccd5c23.js";import"./vue-neat-modal.bb68220d.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.73b90a8b.js";import"./SidebarSubTab.1a8b9e94.js";import"./PsErrorDialog.d3e814f0.js";import"./PsInputWithRightIcon.29f20201.js";import"./PsSuccessDialog.c18e6651.js";import"./PsBannerIcon.6e4a09ea.js";import"./PsIcon1.4226e037.js";import"./Icons.80b46b2b.js";import"./PsLoadingCircleDialog.1c2df66f.js";const J=x({name:"Create",components:{Head:z,PsInput:N,PsLabel:j,PsButton:q,PsLabelHeader6:K,PsCard:M,PsLoading:U,PsIcon:Z,PsBreadcrumb2:F,PsLabelCaption:A},layout:D,props:["errors","customizeHeader","tableId"],setup(e){const t=_(!1),u=_(!1),g=_(),v=_(),{isEmpty:P}=T(),y=(l,c)=>{e.errors[l]=c?"":P(l,c),l=="name"&&(v.value.isError=e.errors.name!="")};let p=S({tableId:e.tableId,core_keys_id:e.customizeHeader.core_keys_id,name:""});function h(){this.$inertia.post(route("attribute.store",[this.tableId,this.customizeHeader.core_keys_id]),p,{forceFormData:!0,onBefore:()=>{t.value=!0},onSuccess:()=>{t.value=!1,u.value=!0,setTimeout(()=>{u.value=!1},2e3)},onError:()=>{g.value.isError=e.errors.key!="",value.value.isError=e.errors.value!="",t.value=!1}})}return{validateEmptyInput:y,handleSubmit:h,loading:t,success:u,name:v,form:p}},computed:{breadcrumb(){return[{label:d("core__be_dashboard_label"),url:route("admin.index")},{label:d("table_setting_group"),url:route("table.index")},{label:d("core__be_fields_label"),url:route("tables.fields.index",this.tableId)},{label:d("core__be_attribute_label"),url:route("attribute.index",[this.tableId,this.customizeHeader.core_keys_id])},{label:d("core__be_add_attribute"),color:"text-primary-500"}]}},methods:{handleCancel(){this.$inertia.get(route("attribute.index",[this.tableId,this.customizeHeader.core_keys_id]))}}}),O={class:"rounded-xl"},Q={class:"bg-primary-50 dark:bg-primary-900 py-2.5 ps-4 rounded-t-xl"},R={class:"px-4 pt-6 dark:bg-backgroundDark"},W={class:"grid w-full sm:w-1/2 gap-6"},X=a("span",{class:"text-red-800 font-medium ms-1"},"*",-1),Y={class:"flex flex-row justify-end mb-2.5"},ee={key:2,class:"transition-all duration-300"},te={key:3,class:""};function oe(e,t,u,g,v,P){const y=o("Head"),p=o("ps-breadcrumb-2"),h=o("ps-label-header-6"),l=o("ps-label"),c=o("ps-input"),I=o("ps-label-caption"),$=o("ps-button"),w=o("ps-loading"),H=o("ps-icon"),B=o("ps-card"),E=o("ps-layout");return m(),k(V,null,[r(y,{title:e.$t("core__be_add_attribute")},null,8,["title"]),r(E,null,{default:s(()=>[r(p,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),r(B,{class:"w-full h-auto"},{default:s(()=>[a("div",O,[a("div",Q,[r(h,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:s(()=>[b(n(e.$t("core__be_add_attribute")),1)]),_:1})]),a("div",R,[a("form",{onSubmit:t[4]||(t[4]=L(i=>e.handleSubmit(),["prevent"]))},[a("div",W,[a("div",null,[r(l,{class:"text-base mb-2"},{default:s(()=>[b(n(e.$t("core__api_token_label")),1),X]),_:1}),r(c,{type:"text",value:e.form.name,"onUpdate:value":t[0]||(t[0]=i=>e.form.name=i),placeholder:e.$t("core__api_token_placeholder"),onKeyup:t[1]||(t[1]=i=>e.validateEmptyInput("name",e.form.name)),onBlur:t[2]||(t[2]=i=>e.validateEmptyInput("name",e.form.name))},null,8,["value","placeholder"]),r(I,{textColor:"text-red-500 ",class:"mt-2 block"},{default:s(()=>[b(n(e.errors.name),1)]),_:1})]),a("div",Y,[r($,{onClick:t[3]||(t[3]=i=>e.handleCancel()),textSize:"text-base",type:"reset",class:"me-4",colors:"text-primary-500",focus:"",hover:""},{default:s(()=>[b(n(e.$t("core__be_btn_cancel")),1)]),_:1}),r($,{class:"transition-all duration-300 min-w-3xs",padding:"px-7 py-2",rounded:"rounded",hover:"",focus:""},{default:s(()=>[e.loading?(m(),C(w,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):f("",!0),e.success?(m(),C(H,{key:1,name:"check",w:"20",h:"20",class:"me-1.5 transition-all duration-300"})):f("",!0),e.success?(m(),k("span",ee,n(e.$t("core__be_btn_saved")),1)):f("",!0),!e.loading&&!e.success?(m(),k("span",te,n(e.$t("core__be_btn_save")),1)):f("",!0)]),_:1})])])],32)])])]),_:1})]),_:1})],64)}var Ve=G(J,[["render",oe]]);export{Ve as default};

import{d as S,Z as D,H as E,i as $,B as w,o as c,c as L,b as o,w as a,a as l,q as s,t as n,h as V,f as y,g as v,F as H,r as t}from"./app.bcb0820c.js";import{P as F}from"./PsLayout.28577d6c.js";import{u as T}from"./Validators.cb85894a.js";import{P as z}from"./PsInput.096bf606.js";import{P as I}from"./PsLabel.ba854ae6.js";import{P as N}from"./PsButton.6e47777c.js";import{P as U}from"./PsTextarea.f8e79b57.js";import{P as j}from"./PsLabelHeader4.6bd3b47b.js";import{P as q}from"./PsLabelCaption.e61a7806.js";import{E as M}from"./Editor.f05319cd.js";import{P as Z}from"./PsBreadcrumb2.c24fe59b.js";import{P as A}from"./PsIcon.71b0e9da.js";import{P as G}from"./PsLoading.9d8c0dd0.js";import{P as J}from"./PsDangerDialog.45064bba.js";import{P as K}from"./PsLink1.b3ef6332.js";import{_ as O}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsDropdown.d345be0d.js";import"./PsDropdownSelect.65e73a6d.js";import"./PsToggle.6d7ca6c8.js";import"./toggle.2d374629.js";import"./PsWarningDialog.89df77bf.js";import"./PsModal.fccd5c23.js";import"./vue-neat-modal.bb68220d.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.73b90a8b.js";import"./SidebarSubTab.1a8b9e94.js";import"./PsErrorDialog.d3e814f0.js";import"./PsInputWithRightIcon.29f20201.js";import"./PsSuccessDialog.c18e6651.js";import"./PsBannerIcon.6e4a09ea.js";import"./PsIcon1.4226e037.js";import"./Icons.80b46b2b.js";import"./PsLoadingCircleDialog.1c2df66f.js";import"./ckeditor.8a70fc2f.js";const Q=S({name:"Create",components:{Head:D,Editor:M,PsIcon:A,PsLoading:G,PsInput:z,PsLabel:I,PsButton:N,PsTextarea:U,PsLabelHeader4:j,PsLabelCaption:q,PsBreadcrumb2:Z,PsLabelHeader6:J,PsLink1:K},layout:F,props:["errors","privacy_policy","domain","dir"],setup(e){let r=E({content:e.privacy_policy.content,_method:"put"});const p=$(!1),u=$(!1),{isEmpty:g}=T();let k=e.domain,_=e.dir,m="";_?m=k+_+"/":m=k;const h=m+"app_content/privacy",i=(b,d)=>{e.errors[b]=d?"":g(b,d)};function P(){this.$inertia.post(route("privacy_policy.update"),r,{forceFormData:!0,onBefore:()=>{p.value=!0},onSuccess:()=>{p.value=!1,u.value=!0,setTimeout(()=>{u.value=!1},2e3)},onError:()=>{p.value=!1}})}return{validateEmptyInput:i,form:r,handleSubmit:P,loading:p,success:u,privacyurl:h}},computed:{breadcrumb(){return[{label:w("core__be_dashboard_label"),url:route("admin.index")},{label:w("privacy_policy_module"),color:"text-primary-500"}]}}}),R={class:"w-full mt-8 rounded-lg bg-white dark:bg-secondaryDark-black shadow-sm"},W={class:"bg-primary-50 dark:bg-primary-900 py-2.5 ps-4 rounded-t-xl"},X={class:"px-4 py-3"},Y={class:"px-4 py-3"},ee=l("br",null,null,-1),oe={class:"flex flex-row px-4 py-3 justify-end mb-2.5 mt-4"};function te(e,r,p,u,g,k){const _=t("Head"),m=t("ps-breadcrumb-2"),h=t("ps-label-header-6"),i=t("ps-label"),P=t("editor"),b=t("ps-link-1"),d=t("ps-button"),x=t("ps-loading"),C=t("ps-icon"),B=t("ps-layout");return c(),L(H,null,[o(_,{title:e.$t("privacy_policy_module")},null,8,["title"]),o(B,null,{default:a(()=>[o(m,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),l("div",R,[l("div",W,[o(h,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:a(()=>[s(n(e.$t("core__be_privacy_policy")),1)]),_:1})]),l("form",{onSubmit:r[2]||(r[2]=V((...f)=>e.handleSubmit&&e.handleSubmit(...f),["prevent"]))},[l("div",X,[o(i,{class:"text-base"},{default:a(()=>[s(n(e.$t("core__be_content")),1)]),_:1}),o(P,{class:"dark:bg-secondaryDark:black",modelValue:e.form.content,"onUpdate:modelValue":r[0]||(r[0]=f=>e.form.content=f),url:"privacy_policy/ckupload"},null,8,["modelValue"])]),l("div",Y,[o(i,{class:"text-base mb-1"},{default:a(()=>[s(n(e.$t("core__be_privacy_policy_url")),1)]),_:1}),o(b,{target:"_blank",url:e.privacyurl,textColor:"text-blue-500"},{default:a(()=>[s(n(e.privacyurl),1)]),_:1},8,["url"]),ee]),l("div",oe,[o(d,{onClick:r[1]||(r[1]=f=>e.handleCancel()),textSize:"text-base",type:"reset",class:"me-4",colors:"text-primary-500",focus:"",hover:""},{default:a(()=>[s(n(e.$t("core__be_btn_cancel")),1)]),_:1}),o(d,{disabled:!e.privacy_policy.authorizations.update,class:"transition-all duration-300 min-w-3xs",padding:"px-6 py-2",rounded:"rounded",hover:"",focus:""},{default:a(()=>[e.loading?(c(),y(x,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):v("",!0),e.success?(c(),y(C,{key:1,name:"check",w:"20",h:"20",class:"me-1.5 transition-all duration-300"})):v("",!0),e.success?(c(),y(i,{key:2,class:"transition-all duration-300",textColor:"text-white dark:text-secondaryDark-black"},{default:a(()=>[s(n(e.$t("core__be_btn_saved")),1)]),_:1})):v("",!0),!e.loading&&!e.success?(c(),y(i,{key:3,textColor:"text-white dark:text-secondaryDark-black"},{default:a(()=>[s(n(e.$t("core__be_btn_save")),1)]),_:1})):v("",!0)]),_:1},8,["disabled"])])],32)])]),_:1})],64)}var Ne=O(Q,[["render",te]]);export{Ne as default};
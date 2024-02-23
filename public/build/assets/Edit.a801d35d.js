import{d as E,Z as L,p as S,i as $,H as V,B as w,o as c,c as H,b as a,w as s,a as n,q as i,t as d,h as F,f as b,g as f,F as N,r}from"./app.bcb0820c.js";import{P as T}from"./PsLayout.28577d6c.js";import{u as z}from"./Validators.cb85894a.js";import{P as I}from"./PsInput.096bf606.js";import{P as U}from"./PsLabel.ba854ae6.js";import{P as j}from"./PsButton.6e47777c.js";import{P as q}from"./PsTextarea.f8e79b57.js";import{P as M}from"./PsLabelHeader4.6bd3b47b.js";import{P as Z}from"./PsLabelCaption.e61a7806.js";import{P as A}from"./PsIcon.71b0e9da.js";import{P as G}from"./PsLoading.9d8c0dd0.js";import{P as J}from"./PsBreadcrumb2.c24fe59b.js";import{E as K}from"./Editor.f05319cd.js";import{P as O}from"./PsLink1.b3ef6332.js";import{_ as Q}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsDropdown.d345be0d.js";import"./PsDropdownSelect.65e73a6d.js";import"./PsDangerDialog.45064bba.js";import"./PsModal.fccd5c23.js";import"./vue-neat-modal.bb68220d.js";import"./PsToggle.6d7ca6c8.js";import"./toggle.2d374629.js";import"./PsWarningDialog.89df77bf.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.73b90a8b.js";import"./SidebarSubTab.1a8b9e94.js";import"./PsErrorDialog.d3e814f0.js";import"./PsInputWithRightIcon.29f20201.js";import"./PsSuccessDialog.c18e6651.js";import"./PsBannerIcon.6e4a09ea.js";import"./PsIcon1.4226e037.js";import"./Icons.80b46b2b.js";import"./PsLoadingCircleDialog.1c2df66f.js";import"./ckeditor.8a70fc2f.js";const R=E({name:"Edit",components:{Head:L,PsInput:I,PsLabel:U,PsButton:j,PsTextarea:q,PsLabelHeader4:M,PsLabelCaption:Z,PsIcon:A,PsLoading:G,PsBreadcrumb2:J,Editor:K,PsLink1:O,Link:S},layout:T,props:["errors","data_deletion_policy","status","domain","dir"],setup(e){const t=$(!1),u=$(!1);let y=V({content:e.data_deletion_policy.content,_method:"put"}),k=e.domain,h=e.dir,m="";h?m=k+h+"/":m=k;const v=m+"app_content/datadelection",{isEmail:P}=z(),p=(o,l)=>{e.errors[o]=l?P(o,l):""},g=o=>{let l=o.keyCode?o.keyCode:o.which;(l<48||l>57)&&o.preventDefault()};function x(){this.$inertia.get(route("data_deletion_policy.index"))}function _(o){this.$inertia.post(route("data_deletion_policy.update",o),y,{forceFormData:!0,onBefore:()=>{t.value=!0},onSuccess:()=>{t.value=!1,u.value=!0,setTimeout(()=>{u.value=!1},2e3)},onError:()=>{t.value=!1}})}return{validateEmailInput:p,handleCancel:x,onlyNumber:g,form:y,handleSubmit:_,loading:t,success:u,datadeletionurl:v}},computed:{breadcrumb(){return[{label:w("core__be_dashboard_label"),url:route("admin.index")},{label:w("data_deletion_policy_module"),color:"text-primary-500"}]}}}),W={class:"rounded-xl"},X={class:"bg-primary-50 dark:bg-primary-900 py-2.5 ps-4 rounded-t-xl"},Y={class:"px-4 pt-6 dark:bg-backgroundDark"},ee={class:"px-4 py-3"},te={class:"px-4 py-3"},oe=n("br",null,null,-1),ae={class:"flex flex-row px-4 py-3 justify-end mb-2.5 mt-4"};function re(e,t,u,y,k,h){const m=r("Head"),v=r("ps-breadcrumb-2"),P=r("ps-label-header-6"),p=r("ps-label"),g=r("editor"),x=r("ps-link-1"),_=r("ps-button"),o=r("ps-loading"),l=r("ps-icon"),B=r("ps-card"),D=r("ps-layout");return c(),H(N,null,[a(m,{title:e.$t("edit_data_deletion_policy")},null,8,["title"]),a(D,null,{default:s(()=>[a(v,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),a(B,{class:"w-full h-auto"},{default:s(()=>[n("div",W,[n("div",X,[a(P,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:s(()=>[i(d(e.$t("core__be_data_deletion_policy")),1)]),_:1})]),n("div",Y,[n("form",{onSubmit:t[2]||(t[2]=F(C=>e.handleSubmit(e.data_deletion_policy.id),["prevent"]))},[n("div",ee,[a(p,{class:"text-base mb-1"},{default:s(()=>[i(d(e.$t("core__be_content")),1)]),_:1}),a(g,{class:"dark:bg-secondaryDark:black",modelValue:e.form.content,"onUpdate:modelValue":t[0]||(t[0]=C=>e.form.content=C),url:"data_deletion_policy/ckupload"},null,8,["modelValue"])]),n("div",te,[a(p,{class:"text-base mb-1"},{default:s(()=>[i(d(e.$t("core__be_data_deletion_policy_url"))+" : ",1)]),_:1}),a(x,{target:"_blank",url:e.datadeletionurl,textColor:"text-blue-500"},{default:s(()=>[i(d(e.datadeletionurl),1)]),_:1},8,["url"]),oe]),n("div",ae,[a(_,{onClick:t[1]||(t[1]=C=>e.handleCancel()),textSize:"text-base",type:"reset",class:"me-4",colors:"text-primary-500",focus:"",hover:""},{default:s(()=>[i(d(e.$t("core__be_btn_cancel")),1)]),_:1}),a(_,{disabled:!e.data_deletion_policy.authorizations.update,class:"transition-all duration-300 min-w-3xs",padding:"px-6 py-2",rounded:"rounded",hover:"",focus:""},{default:s(()=>[e.loading?(c(),b(o,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):f("",!0),e.success?(c(),b(l,{key:1,name:"check",w:"20",h:"20",class:"me-1.5 transition-all duration-300"})):f("",!0),e.success?(c(),b(p,{key:2,class:"transition-all duration-300",textColor:"text-white dark:text-secondaryDark-black"},{default:s(()=>[i(d(e.$t("core__be_btn_saved")),1)]),_:1})):f("",!0),!e.loading&&!e.success?(c(),b(p,{key:3,textColor:"text-white dark:text-secondaryDark-black"},{default:s(()=>[i(d(e.$t("core__be_btn_save")),1)]),_:1})):f("",!0)]),_:1},8,["disabled"])])],32)])])]),_:1})]),_:1})],64)}var je=Q(R,[["render",re]]);export{je as default};
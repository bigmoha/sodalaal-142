import{P as S}from"./PsLayout.28577d6c.js";import{d as D,Z as H,p as T,i as m,H as z,B as E,o as u,c as $,b as o,w as a,a as s,q as d,t as i,g as _,f as w,F as L,s as F,n as V,r as l}from"./app.bcb0820c.js";import{u as q}from"./Validators.cb85894a.js";import{P as N}from"./PsBreadcrumb2.c24fe59b.js";import{P as R}from"./PsLabelHeader4.6bd3b47b.js";import{P as K}from"./PsTooltip.e7dc1603.js";import{P as U}from"./PsIcon.71b0e9da.js";import{P as W}from"./PsInput.096bf606.js";import{P as Z}from"./PsInputWithRightIcon.29f20201.js";import{P as A}from"./PsLabel.ba854ae6.js";import{P as G}from"./PsLabelCaption.e61a7806.js";import{P as J}from"./PsButton.6e47777c.js";import{P as M}from"./PsLoading.9d8c0dd0.js";import{_ as O}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsDropdown.d345be0d.js";import"./PsDropdownSelect.65e73a6d.js";import"./PsDangerDialog.45064bba.js";import"./PsModal.fccd5c23.js";import"./vue-neat-modal.bb68220d.js";import"./PsToggle.6d7ca6c8.js";import"./toggle.2d374629.js";import"./PsWarningDialog.89df77bf.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.73b90a8b.js";import"./SidebarSubTab.1a8b9e94.js";import"./PsErrorDialog.d3e814f0.js";import"./PsSuccessDialog.c18e6651.js";import"./PsBannerIcon.6e4a09ea.js";import"./PsIcon1.4226e037.js";import"./Icons.80b46b2b.js";import"./PsLoadingCircleDialog.1c2df66f.js";const Q=D({name:"Edit",components:{Head:H,Link:T,PsBreadcrumb2:N,PsLabelHeader6:R,PsTooltip:K,PsIcon:U,PsInput:W,PsInputWithRightIcon:Z,PsLabel:A,PsLabelCaption:G,PsButton:J,PsLoading:M},layout:S,props:["builder_setting","errors"],setup(e){const t=m(!1),f=m(!1),C=m(!0),k=m(!0);let P=z({project_url:e.builder_setting.project_url,token:e.builder_setting.token});const c=[{label:"builder_setting_module",docu:"https://doc.clickup.com/24312566/p/h/q5yqp-167764/af19f3c3f0ff989"}],y=m(c[0].label),v=m(c[0].docu),{isEmpty:b}=q(),x=(n,h,B="")=>{e.errors[n]=h?"":b(n,h,B)};async function p(n){k.value=!1,await navigator.clipboard.writeText(n),setInterval(()=>{k.value=!0},1e3)}function I(n){y.value=n.label,v.value=n.docu}function g(){this.$inertia.get(route("builder_setting.index"))}function j(n){this.$inertia.post(route("builder_setting.update",n),P,{forceFormData:!0,onBefore:()=>{t.value=!0},onSuccess:()=>{t.value=!1,f.value=!0,setTimeout(()=>{f.value=!1,C.value=!1,setTimeout(()=>{C.value=!0},200)},1e3)},onError:()=>{t.value=!1}})}return{title:y,docu:v,loading:t,success:f,copied:k,form:P,settingColumn:c,copy:p,changeSection:I,validateEmptyInput:x,handleCancel:g,handleSubmit:j}},computed:{breadcrumb(){return[{label:E("core__be_dashboard_label"),url:route("admin.index")},{label:E("builder_setting_module"),color:"text-primary-500"}]}}}),X={class:"w-full h-auto"},Y={class:"bg-background dark:bg-secondaryDark-black rounded-lg mb-20"},ee={class:"bg-primary-50 flex items-center dark:bg-primary-900 py-2.5 ps-4 rounded-t-lg"},te={class:"h-8 flex items-center"},oe=d(" For more details: "),re=["href"],se={class:"grid grid-cols-1 md:grid-cols-2 gap-2 mt-4"},ae={key:0},ne={class:"px-4 py-3"},le={class:"px-4 py-3"},ie={class:"px-4 py-3"},de={href:"https://www.docs.panacea-soft.com/psx-mpc/setup/setup-admin-panel/setup-your-own-api-token",target:"_blank",class:"underline underline-offset-2 text-primary-500 mt-2 inline-block cursor-pointer"},pe={class:"flex flex-row px-4 py-3 justify-end mb-2.5 mt-4"},ue={class:"px-4"},me=["onClick"];function ce(e,t,f,C,k,P){const c=l("Head"),y=l("ps-breadcrumb-2"),v=l("ps-label-header-6"),b=l("ps-icon"),x=l("ps-tooltip"),p=l("ps-label"),I=l("ps-input"),g=l("ps-label-caption"),j=l("ps-input-with-right-icon"),n=l("ps-button"),h=l("ps-loading"),B=l("ps-layout");return u(),$(L,null,[o(c,{title:e.$t("builder_setting_module")},null,8,["title"]),o(B,null,{default:a(()=>[s("div",null,[o(y,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),s("div",X,[s("div",Y,[s("div",ee,[o(v,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:a(()=>[d(i(e.$t(e.title)),1)]),_:1}),o(x,{tooltiptext:"absolute z-50 bottom-full ms-0.5"},{content:a(()=>[s("div",te,[o(b,{name:"info",w:"20",h:"20",class:"ms-2.5 transition-all duration-300 text-primary-500"})])]),tooltips:a(()=>[oe,s("a",{target:"_blank",href:e.docu,class:"underline"},"Refer to this doc",8,re)]),_:1})]),s("div",null,[s("div",se,[s("div",null,[e.title==e.settingColumn[0].label?(u(),$("div",ae,[s("div",ne,[o(p,{class:"text-base flex flex-row"},{default:a(()=>[d(i(e.$t("core_be__domain")),1)]),_:1}),o(I,{type:"text",disabled:"",value:e.form.project_url,"onUpdate:value":t[0]||(t[0]=r=>e.form.project_url=r),placeholder:e.$t("core_be__domain"),onKeyup:t[1]||(t[1]=r=>e.validateEmptyInput("project_url",e.form.project_url)),onBlur:t[2]||(t[2]=r=>e.validateEmptyInput("project_url",e.form.project_url))},null,8,["value","placeholder"]),o(g,{textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[d(i(e.errors.project_url),1)]),_:1})]),s("div",le,[o(p,{class:"text-base flex flex-row"},{default:a(()=>[d(i(e.$t("core_be__api_token")),1)]),_:1}),o(j,{type:"text",value:e.form.token,"onUpdate:value":t[4]||(t[4]=r=>e.form.token=r),placeholder:e.$t("core_be__api_token"),theme:"pe-12 dark:bg-secondaryDark-black text-secondary-700 dark:text-secondary-700 dark:border-secondary-800",rounded:"rounded",onKeyup:t[5]||(t[5]=r=>e.validateEmptyInput("token",e.form.token)),onBlur:t[6]||(t[6]=r=>e.validateEmptyInput("token",e.form.token))},{icon:a(()=>[o(b,{class:"dark:text-secondary-700",name:e.copied?"clipboard-icon":"check",w:"24",h:"24",onClick:t[3]||(t[3]=r=>e.copy(e.form.token))},null,8,["name"])]),_:1},8,["value","placeholder"]),o(g,{textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[d(i(e.errors.token),1)]),_:1})]),s("div",ie,[o(p,{class:"text-base flex flex-row"},{default:a(()=>[d(i(e.$t("core_be__guide_link")),1)]),_:1}),s("a",de,i(e.$t("core_be__create_and_update_api_token")),1)])])):_("",!0),s("div",pe,[o(n,{onClick:t[7]||(t[7]=r=>e.handleCancel()),textSize:"text-base",type:"reset",class:"me-4",colors:"text-primary-500",focus:"",hover:""},{default:a(()=>[d(i(e.$t("core__be_btn_cancel")),1)]),_:1}),o(n,{onClick:t[8]||(t[8]=r=>e.handleSubmit(e.$page.props.builder_setting.id)),class:"transition-all duration-300 min-w-3xs",padding:"px-8 py-0",rounded:"rounded",hover:"",focus:""},{default:a(()=>[e.loading?(u(),w(h,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):_("",!0),e.success?(u(),w(b,{key:1,name:"check",w:"20",h:"20",class:"me-1.5 transition-all duration-300"})):_("",!0),e.success?(u(),w(p,{key:2,class:"transition-all duration-300",textColor:"text-white dark:text-secondaryDark-black"},{default:a(()=>[d(i(e.$t("core__be_btn_saved")),1)]),_:1})):_("",!0),!e.loading&&!e.success?(u(),w(p,{key:3,textColor:"text-white dark:text-secondaryDark-black"},{default:a(()=>[d(i(e.$t("core__be_btn_save")),1)]),_:1})):_("",!0)]),_:1})])]),s("div",ue,[(u(!0),$(L,null,F(e.settingColumn,r=>(u(),$("div",{key:r.id},[s("div",{onClick:be=>e.changeSection(r),class:V([e.title==r.label?"border-l border-s-primary-500":"border-l border-s-secondary-300","px-2 py-3 cursor-pointer"])},[o(p,{textColor:e.title==r.label?"text-primary-500 dark:text-primary-500":"text-secondary-800 dark:text-white"},{default:a(()=>[d(i(e.$t(r.label)),1)]),_:2},1032,["textColor"])],10,me)]))),128))])])])])])])]),_:1})],64)}var Ge=O(Q,[["render",ce]]);export{Ge as default};

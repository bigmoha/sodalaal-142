import{d as g,Z as $,H as k,B as p,o as w,c as B,b as o,w as s,a as r,q as d,t as l,F as H,O as U,r as n}from"./app.bcb0820c.js";import{P as C}from"./PsLayout.28577d6c.js";import{P as I}from"./PsBreadcrumb2.c24fe59b.js";import{P as O}from"./PsDangerDialog.45064bba.js";import{P as j}from"./PsButton.6e47777c.js";import{P as E}from"./PsLabel.ba854ae6.js";import{P as L}from"./PsInput.096bf606.js";import{P as N}from"./PsTextarea.f8e79b57.js";import{P as T}from"./PsInputWithRightIcon.29f20201.js";import{P as V}from"./PsIcon.71b0e9da.js";import{_ as F}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsDropdown.d345be0d.js";import"./PsDropdownSelect.65e73a6d.js";import"./PsToggle.6d7ca6c8.js";import"./toggle.2d374629.js";import"./PsWarningDialog.89df77bf.js";import"./PsModal.fccd5c23.js";import"./vue-neat-modal.bb68220d.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.73b90a8b.js";import"./SidebarSubTab.1a8b9e94.js";import"./PsErrorDialog.d3e814f0.js";import"./PsSuccessDialog.c18e6651.js";import"./PsLoading.9d8c0dd0.js";import"./PsLabelCaption.e61a7806.js";import"./PsBannerIcon.6e4a09ea.js";import"./PsIcon1.4226e037.js";import"./Icons.80b46b2b.js";import"./PsLoadingCircleDialog.1c2df66f.js";const q=g({name:"Edit",components:{Head:$,PsBreadcrumb2:I,PsLabelHeader6:O,PsButton:j,PsLabel:E,PsInput:L,PsTextarea:N,PsInputWithRightIcon:T,PsIcon:V},layout:C,props:{vendor:Object,application:Object},setup(e){let t=k({id:e.vendor.id,name:e.vendor.name,status:e.vendor.status});function u(){U.get(route("pending_vendor.index"))}return{form:t,back:u}},computed:{breadcrumb(){return[{label:p("core__be_dashboard_label"),url:route("admin.index")},{label:p("pending_vendor_module"),url:route("pending_vendor.index")},{label:p("core_be__vendor_details"),color:"text-primary-500"}]}}}),D={class:""},R={class:"bg-primary-50 px-4 py-2 rounded-t dark:bg-primary-900"},S={class:"grid grid-cols-2 gap-10 p-4"},W={class:""},Z={class:"mt-4"},z={class:"mt-4"},A={class:"mt-4"},G={class:"mt-4"},J=["href"],K={class:"mt-4"};function M(e,t,u,Q,X,Y){const _=n("Head"),c=n("ps-breadcrumb-2"),b=n("ps-label-header-6"),i=n("ps-label"),m=n("ps-input"),v=n("ps-icon"),f=n("ps-input-with-right-icon"),h=n("ps-textarea"),P=n("ps-button"),y=n("ps-layout");return w(),B(H,null,[o(_,{title:e.$t("pending_vendor_module")},null,8,["title"]),o(y,null,{default:s(()=>[o(c,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),r("div",D,[r("div",R,[o(b,null,{default:s(()=>[d(l(e.$t("core_be__approval_vendor_details")),1)]),_:1})]),r("div",S,[r("div",W,[r("div",Z,[o(i,{class:"text-base font-medium mb-2"},{default:s(()=>[d(l(e.$t("core__be_vendor_user_name")),1)]),_:1}),o(m,{disabled:!0,type:"text",ref:"symbol",value:e.vendor.owner.name,"onUpdate:value":t[0]||(t[0]=a=>e.vendor.owner.name=a)},null,8,["value"])]),r("div",z,[o(i,{class:"text-base font-medium mb-2"},{default:s(()=>[d(l(e.$t("core__be_vendor_user_email")),1)]),_:1}),o(m,{disabled:!0,type:"email",ref:"symbol",value:e.vendor.email,"onUpdate:value":t[1]||(t[1]=a=>e.vendor.email=a),placeholder:e.$t("")},null,8,["value","placeholder"])]),r("div",A,[o(i,{class:"text-base font-medium mb-2"},{default:s(()=>[d(l(e.$t("core__be_vendor_name")),1)]),_:1}),o(m,{disabled:!0,type:"text",ref:"symbol",value:e.vendor.name,"onUpdate:value":t[2]||(t[2]=a=>e.vendor.name=a)},null,8,["value"])]),r("div",G,[o(i,{class:"text-base font-medium mb-2"},{default:s(()=>[d(l(e.$t("core__be_business_document")),1)]),_:1}),o(f,{rounded:"rounded",disabled:!0,value:e.application.document,"onUpdate:value":t[3]||(t[3]=a=>e.application.document=a),placeholder:e.$t("")},{icon:s(()=>[r("a",{href:e.route("reject_vendor.download_document",e.application.vendor_id),class:"font-medium transition duration-150 ease-in-out py-2 px-4 text-dark dark:text-white text-sm cursor-pointer opacity-100"},[o(v,{name:"import"})],8,J)]),_:1},8,["value","placeholder"])]),r("div",K,[o(i,{class:"text-base font-medium mb-2"},{default:s(()=>[d(l(e.$t("core__be_cover_letter")),1)]),_:1}),o(h,{disabled:!0,rows:"4",value:e.application.cover_letter,"onUpdate:value":t[4]||(t[4]=a=>e.application.cover_letter=a),placeholder:e.$t("")},null,8,["value","placeholder"])]),o(P,{onClick:t[5]||(t[5]=a=>e.back()),class:"float-end mt-4"},{default:s(()=>[d(l(e.$t("core_be__back")),1)]),_:1})])])])]),_:1})],64)}var Ie=F(q,[["render",M]]);export{Ie as default};

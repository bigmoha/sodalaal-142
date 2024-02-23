import{d as $,Z as g,H as j,B as p,o as w,c as k,b as t,w as s,a,q as l,t as i,F as B,r as n}from"./app.bcb0820c.js";import{P as I}from"./PsLayout.28577d6c.js";import{P as H}from"./PsInputWithRightIcon.29f20201.js";import{P as U}from"./PsBreadcrumb2.c24fe59b.js";import{P as C}from"./PsDangerDialog.45064bba.js";import{P as E}from"./PsButton.6e47777c.js";import{P as L}from"./PsLabel.ba854ae6.js";import{P as N}from"./PsInput.096bf606.js";import{P as T}from"./PsTextarea.f8e79b57.js";import{P as V}from"./PsIcon.71b0e9da.js";import{_ as F}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsDropdown.d345be0d.js";import"./PsDropdownSelect.65e73a6d.js";import"./PsToggle.6d7ca6c8.js";import"./toggle.2d374629.js";import"./PsWarningDialog.89df77bf.js";import"./PsModal.fccd5c23.js";import"./vue-neat-modal.bb68220d.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.73b90a8b.js";import"./SidebarSubTab.1a8b9e94.js";import"./PsErrorDialog.d3e814f0.js";import"./PsSuccessDialog.c18e6651.js";import"./PsLoading.9d8c0dd0.js";import"./PsLabelCaption.e61a7806.js";import"./PsBannerIcon.6e4a09ea.js";import"./PsIcon1.4226e037.js";import"./Icons.80b46b2b.js";import"./PsLoadingCircleDialog.1c2df66f.js";const O=$({name:"Edit",components:{Head:g,PsBreadcrumb2:U,PsLabelHeader6:C,PsButton:E,PsLabel:L,PsInput:N,PsTextarea:T,PsInputWithRightIcon:H,PsIcon:V},layout:I,props:{vendor:Object,application:Object},setup(e){let o=j({id:e.vendor.id,name:e.vendor.name,status:e.vendor.status});console.log(e.vendor),console.log(e.application);function u(){this.$inertia.get(route("reject_vendor.index"))}return{form:o,toIndexPage:u}},computed:{breadcrumb(){return[{label:p("core__be_dashboard_label"),url:route("admin.index")},{label:p("reject_vendor_module"),url:route("reject_vendor.index")},{label:p("core_be__reject_vendor_details"),color:"text-primary-500"}]}}}),q={class:""},x={class:"bg-primary-50 px-4 py-2 rounded-t dark:bg-primary-900"},D={class:"grid grid-cols-2 gap-10 p-4"},R={class:""},S={class:"mt-4"},W={class:"mt-4"},Z={class:"mt-4"},z={class:"mt-4"},A=["href"],G={class:"mt-4"};function J(e,o,u,K,M,Q){const _=n("Head"),c=n("ps-breadcrumb-2"),b=n("ps-label-header-6"),d=n("ps-label"),m=n("ps-input"),v=n("ps-icon"),f=n("ps-input-with-right-icon"),P=n("ps-textarea"),h=n("ps-button"),y=n("ps-layout");return w(),k(B,null,[t(_,{title:e.$t("reject_vendor_module")},null,8,["title"]),t(y,null,{default:s(()=>[t(c,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),a("div",q,[a("div",x,[t(b,null,{default:s(()=>[l(i(e.$t("core_be__reject_vendor_details")),1)]),_:1})]),a("div",D,[a("div",R,[a("div",S,[t(d,{class:"text-base font-medium mb-2"},{default:s(()=>[l(i(e.$t("core__be_vendor_user_name")),1)]),_:1}),t(m,{disabled:!0,type:"text",ref:"symbol",value:e.vendor.owner.name,"onUpdate:value":o[0]||(o[0]=r=>e.vendor.owner.name=r)},null,8,["value"])]),a("div",W,[t(d,{class:"text-base font-medium mb-2"},{default:s(()=>[l(i(e.$t("core__be_vendor_user_email")),1)]),_:1}),t(m,{disabled:!0,type:"email",ref:"symbol",value:e.vendor.email,"onUpdate:value":o[1]||(o[1]=r=>e.vendor.email=r),placeholder:e.$t("")},null,8,["value","placeholder"])]),a("div",Z,[t(d,{class:"text-base font-medium mb-2"},{default:s(()=>[l(i(e.$t("core__be_vendor_name")),1)]),_:1}),t(m,{disabled:!0,type:"text",ref:"symbol",value:e.vendor.name,"onUpdate:value":o[2]||(o[2]=r=>e.vendor.name=r)},null,8,["value"])]),a("div",z,[t(d,{class:"text-base font-medium mb-2"},{default:s(()=>[l(i(e.$t("core__be_business_document")),1)]),_:1}),t(f,{rounded:"rounded",disabled:!0,value:e.application.document,"onUpdate:value":o[3]||(o[3]=r=>e.application.document=r),placeholder:e.$t("")},{icon:s(()=>[a("a",{href:e.route("reject_vendor.download_document",e.application.vendor_id),class:"font-medium transition duration-150 ease-in-out py-2 px-4 text-dark dark:text-white text-sm cursor-pointer opacity-100"},[t(v,{name:"import"})],8,A)]),_:1},8,["value","placeholder"])]),a("div",G,[t(d,{class:"text-base font-medium mb-2"},{default:s(()=>[l(i(e.$t("core__be_cover_letter")),1)]),_:1}),t(P,{disabled:!0,rows:"4",value:e.application.cover_letter,"onUpdate:value":o[4]||(o[4]=r=>e.application.cover_letter=r),placeholder:e.$t("")},null,8,["value","placeholder"])]),t(h,{onClick:o[5]||(o[5]=r=>e.toIndexPage()),class:"float-end mt-4"},{default:s(()=>[l(i(e.$t("core_be__back")),1)]),_:1})])])])]),_:1})],64)}var He=F(O,[["render",J]]);export{He as default};

import{P as I}from"./PsLayout.28577d6c.js";import{d as x,Z as B,H as D,B as d,o as p,c,b as t,w as r,a as o,q as l,t as n,m as f,f as y,F as L,r as a,E as T}from"./app.bcb0820c.js";import{P as H}from"./PsBreadcrumb2.c24fe59b.js";import{P as E}from"./PsInput.096bf606.js";import{P as V}from"./PsLabel.ba854ae6.js";import{P as M}from"./PsButton.6e47777c.js";import{P as N,d as S}from"./PsDangerDialog.45064bba.js";import{P as z}from"./PsCard.6a2e47ce.js";import{P as F}from"./PsIcon.71b0e9da.js";import{P as j}from"./PsLoading.9d8c0dd0.js";import{P as q}from"./PsCheckboxValue.d67e394b.js";import{a as A,P as R}from"./PsActionModal.619893d0.js";import{P as Z}from"./PsImageUpload.feb8acc0.js";import{P as G}from"./PsLabelCaption.e61a7806.js";import{P as J}from"./PsLabelTitle3.857bf4b8.js";import{P as K}from"./PsTextarea.f8e79b57.js";import O from"./RoleCheckbox.99aad223.js";import{_ as Q}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsDropdown.d345be0d.js";import"./PsDropdownSelect.65e73a6d.js";import"./PsToggle.6d7ca6c8.js";import"./toggle.2d374629.js";import"./PsWarningDialog.89df77bf.js";import"./PsModal.fccd5c23.js";import"./vue-neat-modal.bb68220d.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.73b90a8b.js";import"./SidebarSubTab.1a8b9e94.js";import"./PsErrorDialog.d3e814f0.js";import"./PsInputWithRightIcon.29f20201.js";import"./PsSuccessDialog.c18e6651.js";import"./PsBannerIcon.6e4a09ea.js";import"./PsIcon1.4226e037.js";import"./Icons.80b46b2b.js";import"./PsLoadingCircleDialog.1c2df66f.js";import"./PsLabelHeader4.6bd3b47b.js";import"./PsDraggable.b90e2bf9.js";const W=x({name:"Edit",components:{Head:B,PsBreadcrumb2:H,PsInput:E,PsLabel:V,PsButton:M,PsLabelHeader6:N,PsCard:z,PsIcon:F,PsLoading:j,PsCheckboxValue:q,PsActionModal:A,PsImageIconModal:R,PsImageUpload:Z,PsDangerDialog:S,PsLabelCaption:G,PsLabelTitle3:J,PsTextarea:K,RoleCheckbox:O},layout:I,props:["errors","category"],setup(e){let s=D({name:e.category.name,status:e.category.status==1});function _({data:u}){s.permissions=u.toString()}return{handleUserMultiSelect:_,form:s}},computed:{breadcrumb(){return[{label:d("core__be_dashboard_label"),url:route("admin.index")},{label:d("category_report_module"),url:route("category_report.index")},{label:d("core__be_category_report_detail"),color:"text-primary-500"}]}},methods:{handleCancel(){this.$inertia.get(route("category_report.index"))}}}),X={class:"rounded-xl"},Y={class:"bg-primary-50 dark:bg-primary-900 py-2.5 ps-4 rounded-t-xl"},ee={class:"px-4 pt-6 dark:bg-backgroundDark"},oe={class:"grid w-full sm:w-1/2 gap-6"},te=o("span",{class:"text-red-800 font-medium ms-1"},"*",-1),ae=o("span",{class:"text-red-800 font-medium ms-1"},"*",-1),se={key:0,class:"flex items-end pt-4"},re={class:"w-96 h-48",alt:"category cover"},le=o("span",{class:"text-red-800 font-medium ms-1"},"*",-1),ne={key:0,class:"flex items-end pt-4"},pe={class:"w-48 h-48",alt:"category icon"},ie={class:"mb-2.5 flex flex-row justify-end"};function me(e,s,_,u,de,ce){const h=a("Head"),P=a("ps-breadcrumb-2"),v=a("ps-label-header-6"),i=a("ps-label"),$=a("ps-input"),b=a("ps-image-upload"),k=a("ps-checkbox-value"),C=a("ps-button"),w=a("ps-card"),U=a("ps-layout"),g=T("lazy");return p(),c(L,null,[t(h,{title:e.$t("core__be_category_detail")},null,8,["title"]),t(U,null,{default:r(()=>[t(P,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),t(w,{class:"w-full h-auto"},{default:r(()=>[o("div",X,[o("div",Y,[t(v,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:r(()=>[l(n(e.$t("core__be_category_info")),1)]),_:1})]),o("div",ee,[o("form",null,[o("div",oe,[o("div",null,[t(i,{class:"text-base mb-2"},{default:r(()=>[l(n(e.$t("core__category_label")),1),te]),_:1}),t($,{disabled:!0,type:"text",value:e.form.name,"onUpdate:value":s[0]||(s[0]=m=>e.form.name=m),placeholder:e.$t("core__category_placeholder")},null,8,["value","placeholder"])]),o("div",null,[t(i,{class:"text-base mb-2"},{default:r(()=>[l(n(e.$t("core__category_photo_label")),1),ae]),_:1}),e.category.cover?(p(),c("div",se,[f(o("img",re,null,512),[[g,{src:e.$page.props.uploadUrl+"/"+e.category.cover.img_path,loading:e.$page.props.sysImageUrl+"/loading_gif.gif",error:e.$page.props.sysImageUrl+"/default_photo.png"}]])])):(p(),y(b,{key:1,uploadType:"image",disabled:!0}))]),o("div",null,[t(i,{class:"text-base mb-2"},{default:r(()=>[l(n(e.$t("core__category_icon_label")),1),le]),_:1}),e.category.icon?(p(),c("div",ne,[f(o("img",pe,null,512),[[g,{src:e.$page.props.uploadUrl+"/"+e.category.icon.img_path,loading:e.$page.props.sysImageUrl+"/loading_gif.gif",error:e.$page.props.sysImageUrl+"/default_photo.png"}]])])):(p(),y(b,{key:1,class:"w-72",uploadType:"icon",disabled:!0}))]),o("div",null,[t(i,{class:"text-base mb-2"},{default:r(()=>[l(n(e.$t("core__status_label")),1)]),_:1}),t(k,{disabled:!0,value:e.form.status,"onUpdate:value":s[1]||(s[1]=m=>e.form.status=m),class:"font-normal",title:e.$t("core__publish_label")},null,8,["value","title"])]),o("div",ie,[t(C,{type:"button",onClick:s[2]||(s[2]=m=>e.handleCancel())},{default:r(()=>[l(n(e.$t("core__be_btn_back")),1)]),_:1})])])])])])]),_:1})]),_:1})],64)}var We=Q(W,[["render",me]]);export{We as default};

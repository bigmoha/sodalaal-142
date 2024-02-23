import{P as y}from"./PsLayout.28577d6c.js";import{d as g,Z as k,H as C,B as p,o as w,c as U,b as o,w as t,a,q as n,t as d,F as B,r as s}from"./app.bcb0820c.js";import{P as L}from"./PsBreadcrumb2.c24fe59b.js";import{P as H}from"./PsInput.096bf606.js";import{P as D}from"./PsLabel.ba854ae6.js";import{P as I}from"./PsButton.6e47777c.js";import{P as T,d as V}from"./PsDangerDialog.45064bba.js";import{P as x}from"./PsCard.6a2e47ce.js";import{P as E}from"./PsIcon.71b0e9da.js";import{P as M}from"./PsLoading.9d8c0dd0.js";import{P as N}from"./PsCheckboxValue.d67e394b.js";import{a as S,P as F}from"./PsActionModal.619893d0.js";import{P as j}from"./PsLabelCaption.e61a7806.js";import{P as q}from"./PsLabelTitle3.857bf4b8.js";import{P as A}from"./PsTextarea.f8e79b57.js";import R from"./RoleCheckbox.99aad223.js";import{_ as Z}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsDropdown.d345be0d.js";import"./PsDropdownSelect.65e73a6d.js";import"./PsToggle.6d7ca6c8.js";import"./toggle.2d374629.js";import"./PsWarningDialog.89df77bf.js";import"./PsModal.fccd5c23.js";import"./vue-neat-modal.bb68220d.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.73b90a8b.js";import"./SidebarSubTab.1a8b9e94.js";import"./PsErrorDialog.d3e814f0.js";import"./PsInputWithRightIcon.29f20201.js";import"./PsSuccessDialog.c18e6651.js";import"./PsBannerIcon.6e4a09ea.js";import"./PsIcon1.4226e037.js";import"./Icons.80b46b2b.js";import"./PsLoadingCircleDialog.1c2df66f.js";import"./PsLabelHeader4.6bd3b47b.js";import"./PsDraggable.b90e2bf9.js";const z=g({name:"Edit",components:{Head:k,PsBreadcrumb2:L,PsInput:H,PsLabel:D,PsButton:I,PsLabelHeader6:T,PsCard:x,PsIcon:E,PsLoading:M,PsCheckboxValue:N,PsActionModal:S,PsImageIconModal:F,PsDangerDialog:V,PsLabelCaption:j,PsLabelTitle3:q,PsTextarea:A,RoleCheckbox:R},layout:y,props:["errors","user"],setup(e){let r=C({name:e.user.name,email:e.user.email,user_phone:e.user.user_phone,user_address:e.user.user_address,user_about_me:e.user.user_about_me,role_id:e.user.role.name,permissions:""});function i({data:_}){r.permissions=_.toString()}return{handleUserMultiSelect:i,form:r}},computed:{breadcrumb(){return[{label:p("core__be_dashboard_label"),url:route("admin.index")},{label:p("seller_report_module"),url:route("seller_report.index")},{label:p("core__be_seller_report_detail"),color:"text-primary-500"}]}},methods:{handleCancel(){this.$inertia.get(route("seller_report.index"))}}}),G={class:"rounded-xl"},J={class:"bg-primary-50 dark:bg-primary-900 py-2.5 ps-4 rounded-t-xl"},K={class:"px-4 pt-6 dark:bg-backgroundDark"},O={class:"grid w-full sm:w-1/2 gap-6"},Q={class:"mb-2.5 flex flex-row justify-end"};function W(e,r,i,_,X,Y){const f=s("Head"),c=s("ps-breadcrumb-2"),v=s("ps-label-header-6"),m=s("ps-label"),u=s("ps-input"),b=s("ps-textarea"),P=s("ps-button"),h=s("ps-card"),$=s("ps-layout");return w(),U(B,null,[o(f,{title:e.$t("core__be_seller_report_detail")},null,8,["title"]),o($,null,{default:t(()=>[o(c,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),o(h,{class:"w-full h-auto"},{default:t(()=>[a("div",G,[a("div",J,[o(v,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:t(()=>[n(d(e.$t("core__be_user_info")),1)]),_:1})]),a("div",K,[a("form",null,[a("div",O,[a("div",null,[o(m,{class:"text-base"},{default:t(()=>[n(d(e.$t("user_name_label")),1)]),_:1}),o(u,{disabled:!0,type:"text",value:e.form.name,"onUpdate:value":r[0]||(r[0]=l=>e.form.name=l),placeholder:e.$t("user_name_label")},null,8,["value","placeholder"])]),a("div",null,[o(m,{class:"text-base"},{default:t(()=>[n(d(e.$t("email_label")),1)]),_:1}),o(u,{disabled:!0,type:"text",value:e.form.email,"onUpdate:value":r[1]||(r[1]=l=>e.form.email=l),placeholder:e.$t("email_label")},null,8,["value","placeholder"])]),a("div",null,[o(m,{class:"text-base"},{default:t(()=>[n(d(e.$t("phone_label")),1)]),_:1}),o(u,{disabled:!0,type:"text",value:e.form.user_phone,"onUpdate:value":r[2]||(r[2]=l=>e.form.user_phone=l),placeholder:e.$t("phone_label")},null,8,["value","placeholder"])]),a("div",null,[o(m,{class:"text-base"},{default:t(()=>[n(d(e.$t("core__be_address_label")),1)]),_:1}),o(b,{disabled:!0,rows:"3",value:e.form.user_address,"onUpdate:value":r[3]||(r[3]=l=>e.form.user_address=l),placeholder:e.$t("core__be_address_label")},null,8,["value","placeholder"])]),a("div",null,[o(m,{class:"text-base"},{default:t(()=>[n(d(e.$t("core__be_user_role_label")),1)]),_:1}),o(u,{disabled:!0,type:"text",value:e.form.role_id,"onUpdate:value":r[4]||(r[4]=l=>e.form.role_id=l),placeholder:e.$t("role_lable")},null,8,["value","placeholder"])]),a("div",null,[o(m,{class:"text-base"},{default:t(()=>[n(d(e.$t("core__be_about_me")),1)]),_:1}),o(b,{disabled:!0,rows:"3",value:e.form.user_about_me,"onUpdate:value":r[5]||(r[5]=l=>e.form.user_about_me=l),placeholder:e.$t("about_me")},null,8,["value","placeholder"])]),a("div",Q,[o(P,{type:"button",onClick:r[6]||(r[6]=l=>e.handleCancel())},{default:t(()=>[n(d(e.$t("core__be_btn_back")),1)]),_:1})])])])])])]),_:1})]),_:1})],64)}var Ne=Z(z,[["render",W]]);export{Ne as default};

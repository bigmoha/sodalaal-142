import{d as b,Z as h,B as m,o as f,c as g,b as t,w as r,a as e,q as s,t as P,h as x,F as y,r as o}from"./app.bcb0820c.js";import{P as v}from"./PsLayout.28577d6c.js";import{P as k}from"./PsBreadcrumb2.c24fe59b.js";import{P as $}from"./PsInput.096bf606.js";import{P as w}from"./PsLabel.ba854ae6.js";import{P as B}from"./PsButton.6e47777c.js";import{P as T}from"./PsTextarea.f8e79b57.js";import{P as C}from"./PsLabelHeader4.6bd3b47b.js";import{_ as H}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsIcon.71b0e9da.js";import"./Icons.80b46b2b.js";import"./PsDropdown.d345be0d.js";import"./PsDropdownSelect.65e73a6d.js";import"./PsDangerDialog.45064bba.js";import"./PsModal.fccd5c23.js";import"./vue-neat-modal.bb68220d.js";import"./PsToggle.6d7ca6c8.js";import"./toggle.2d374629.js";import"./PsWarningDialog.89df77bf.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.73b90a8b.js";import"./SidebarSubTab.1a8b9e94.js";import"./PsErrorDialog.d3e814f0.js";import"./PsInputWithRightIcon.29f20201.js";import"./PsSuccessDialog.c18e6651.js";import"./PsLoading.9d8c0dd0.js";import"./PsLabelCaption.e61a7806.js";import"./PsBannerIcon.6e4a09ea.js";import"./PsIcon1.4226e037.js";import"./PsLoadingCircleDialog.1c2df66f.js";const I=b({name:"Edit",components:{Head:h,PsInput:$,PsLabel:w,PsButton:B,PsTextarea:T,PsLabelHeader4:C,PsBreadcrumb2:k},layout:v,props:["errors","status"],computed:{breadcrumb(){return[{label:m("core__be_dashboard_label"),url:route("admin.index")},{label:m("thumbnail_generator_module"),color:"text-primary-500"}]}},methods:{handleThumbnail(){this.$inertia.put(route("thumbnail_generator.update"))}}}),L={class:"rounded-xl"},N={class:"bg-primary-50 dark:bg-primary-900 py-2.5 ps-4"},V={class:"px-4 pt-6 dark:bg-backgroundDark"},D={class:"grid gap-6"},E=s("It will generate the thumbnails images for each item. Please take note that this process will take some time based on your data."),F=s("Thumbnail(1x, 2x, 3x) Generate");function S(a,n,q,G,M,Z){const i=o("Head"),l=o("ps-breadcrumb-2"),p=o("ps-label-header-6"),d=o("ps-label"),u=o("ps-button"),_=o("ps-card"),c=o("ps-layout");return f(),g(y,null,[t(i,{title:a.$t("thumbnail_generator_module")},null,8,["title"]),t(c,null,{default:r(()=>[t(l,{items:a.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),t(_,{class:"w-full h-auto"},{default:r(()=>[e("div",L,[e("div",N,[t(p,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:r(()=>[s(P(a.$t("thumbnail_generator_module")),1)]),_:1})]),e("div",V,[e("form",{onSubmit:n[0]||(n[0]=x(j=>a.handleThumbnail(),["prevent"]))},[e("div",D,[e("div",null,[t(d,null,{default:r(()=>[E]),_:1})]),e("div",null,[t(u,null,{default:r(()=>[F]),_:1})])])],32)])])]),_:1})]),_:1})],64)}var xt=H(I,[["render",S]]);export{xt as default};
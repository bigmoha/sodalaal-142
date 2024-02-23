import{P as q}from"./PsLayout.28577d6c.js";import{P as z}from"./PsBreadcrumb2.c24fe59b.js";import{d as I,i as p,B as i,H as L,r as a,o as v,f as O,w as s,a as t,b as o,q as r,t as l,Z as R,c as P,g as D,F as N,s as W}from"./app.bcb0820c.js";import{P as E}from"./PsInput.096bf606.js";import{P as T}from"./PsLabel.ba854ae6.js";import{P as H}from"./PsButton.6e47777c.js";import{P as F}from"./PsTextarea.f8e79b57.js";import{P as A}from"./PsLabelHeader4.6bd3b47b.js";import{P as j}from"./PsIcon.71b0e9da.js";import{P as U}from"./PsTable2.945a4e74.js";import{P as Z}from"./PsModal.fccd5c23.js";import{_ as M}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsDropdown.d345be0d.js";import"./PsDropdownSelect.65e73a6d.js";import"./PsDangerDialog.45064bba.js";import"./PsToggle.6d7ca6c8.js";import"./toggle.2d374629.js";import"./PsWarningDialog.89df77bf.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.73b90a8b.js";import"./SidebarSubTab.1a8b9e94.js";import"./PsErrorDialog.d3e814f0.js";import"./PsInputWithRightIcon.29f20201.js";import"./PsSuccessDialog.c18e6651.js";import"./PsLoading.9d8c0dd0.js";import"./PsLabelCaption.e61a7806.js";import"./PsBannerIcon.6e4a09ea.js";import"./PsIcon1.4226e037.js";import"./Icons.80b46b2b.js";import"./PsLoadingCircleDialog.1c2df66f.js";import"./PsTableSearch.e2c5eca7.js";import"./moment.9709ab41.js";import"./vue-neat-modal.bb68220d.js";const G=I({name:"PsDangerDialogWithInput",components:{PsModal:Z,PsLabel:T,PsButton:H,PsIcon:j,PsInput:E},setup(){const e=p(),n=p(i("ps_danger_dialog__danger")),b=p(i("ps_danger_dialog__danger_message")),d=p(!0),y=p(),w=p(i("ps_confirm_dialog__yes")),g=p(i("ps_confirm_dialog__no"));let c,u=L({name:""});function m(){y.value==u.name?d.value=!1:d.value=!0}function x(f){f=="yes"?d.value||c():C(),d.value||e.value.toggle(!1)}function _(f,k,h,$,B,V,ge){f!=null&&f.trim()!=""&&(n.value=f),k!=null&&k.trim()!=""&&(b.value=k),B!=null&&B.trim()!=""&&(y.value=B),$!=null&&$.trim()!=""&&(g.value=$),h!=null&&h.trim()!=""&&(w.value=h),e.value.toggle(!0),c=V}function C(){e.value.toggle(!1)}return{psmodal:e,openModal:_,closeModal:C,title:n,actionClicked:x,okButton:w,cancelButton:g,message:b,okBtnIsDisable:d,checkNameEqualOrNot:m,form:u,projectName:y}}}),J={class:"flex flex-row items-center"},K={class:"w-full text-start mt-2"},Q={class:"flex flex-row justify-end"};function X(e,n,b,d,y,w){const g=a("ps-icon"),c=a("ps-label"),u=a("ps-input"),m=a("ps-button"),x=a("ps-modal");return v(),O(x,{ref:"psmodal",maxWidth:"370px",line:"hidden",isClickOut:!1,theme:" px-6 py-6 rounded-lg shadow-xl me-3",class:"z-20"},{title:s(()=>[t("div",J,[o(g,{name:"info",class:"text-red-500 me-2.5"}),o(c,{class:"text-lg font-semibold"},{default:s(()=>[r(l(e.title),1)]),_:1})])]),body:s(()=>[t("div",K,[o(c,{class:"font-light text-sm lg:text-base mb-2"},{default:s(()=>[r(l(e.message),1)]),_:1}),o(c,{class:"font-weight-bold text-sm lg:text-base"},{default:s(()=>[r(l(e.$t("confirm_info1"))+' "'+l(e.projectName)+'" '+l(e.$t("confirm_info2")),1)]),_:1}),o(u,{type:"text",value:e.form.name,"onUpdate:value":n[0]||(n[0]=_=>e.form.name=_),onInput:e.checkNameEqualOrNot,placeholder:e.$t("type_here")},null,8,["value","onInput","placeholder"])])]),footer:s(()=>[t("div",Q,[o(m,{rounded:"rounded",onClick:n[1]||(n[1]=_=>e.actionClicked("no")),textSize:"text-xs lg:text-sm",class:"me-4",border:"border border-gray-200",colors:"bg-none",hover:"hover:outline-none hover:ring hover:ring-gray-100"},{default:s(()=>[r(l(e.cancelButton),1)]),_:1}),o(m,{disabled:e.okBtnIsDisable,rounded:"rounded",onClick:n[2]||(n[2]=_=>e.actionClicked("yes")),textSize:"text-xs lg:text-sm",class:"",colors:"bg-red-500 text-white",hover:"hover:outline-none hover:ring hover:ring-red-100",focus:"focus:outline-none focus:ring focus:ring-red-300"},{default:s(()=>[r(l(e.okButton),1)]),_:1},8,["disabled"])])]),_:1},512)}var Y=M(G,[["render",X]]);const S=I({name:"Edit",components:{Head:R,PsInput:E,PsLabel:T,PsButton:H,PsTextarea:F,PsLabelHeader4:A,PsBreadcrumb2:z,PsIcon:j,PsTable2:U,PsDangerDialogWithInput:Y},layout:q,props:["errors","menus","status","activityLogs","can"],setup(){const e=p();let n=L({confirmText:""});function b(d){e.value.openModal(i("delete"),i("data_reset_info"),i("btn_confirm"),i("btn_cancel"),d,()=>{this.$inertia.put(route("demo_data_deletion.destroy"))},()=>{})}return{ps_danger_dialog_with_input:e,handleDataReset:b,form:n}},computed:{breadcrumb(){return[{label:i("core__be_dashboard_label"),url:route("admin.index")},{label:i("demo_data_deletion_module"),color:"text-primary-500"}]}}}),ee={class:"rounded-xl"},te={class:"bg-primary-50 dark:bg-primary-900 py-2.5 ps-4 rounded-t-xl"},oe={class:"mt-6"},se={class:""},ne={class:"border border-1 rounded p-4 w-1/2"},ae={class:"h-auto"},le={class:"mb-2"},re={key:0,class:"flex flex-row justify-start mt-6"},ie={key:0,class:"mt-4 ms-1"},de={class:"table-auto w-1/2"},ce={class:"bg-primary-500 dark:bg-primary-100 text-white dark:text-blacktext-2xl"},me={scope:"col",class:"text-start px-4 py-2"},pe={class:"flex flex-row items-center p-1.5"},ue={class:""},_e={class:""},fe=t("hr",{class:"bg-dark"},null,-1);function be(e,n,b,d,y,w){const g=a("Head"),c=a("ps-breadcrumb-2"),u=a("ps-label-header-6"),m=a("ps-label"),x=a("ps-button"),_=a("ps-icon"),C=a("ps-card"),f=a("ps-danger-dialog-with-input"),k=a("ps-layout");return v(),P(N,null,[o(g,{title:e.$t("demo_data_deletion_module")},null,8,["title"]),o(k,null,{default:s(()=>[o(c,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),o(C,{class:"w-full h-auto"},{default:s(()=>[t("div",ee,[t("div",te,[o(u,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:s(()=>[r(l(e.$t("demo_data_deletion_module")),1)]),_:1})]),t("div",oe,[t("div",se,[t("div",ne,[t("div",ae,[t("div",le,[o(u,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:s(()=>[r(l(e.$t("demo_data_deletion_desc_title")),1)]),_:1})]),t("div",null,[o(m,{class:"text-gray-800 font-medium"},{default:s(()=>[r(l(e.$t("demo_data_deletion_desc")),1)]),_:1})]),e.can.deleteDataReset?(v(),P("div",re,[o(x,{onClick:n[0]||(n[0]=h=>e.handleDataReset("DELETE")),class:"bg-red-500 hover:bg-red-500"},{default:s(()=>[r(l(e.$t("delete_btn")),1)]),_:1})])):D("",!0)])])]),e.activityLogs?(v(),P("div",ie,[t("table",de,[t("thead",ce,[t("tr",null,[t("th",me,[o(m,{textColor:"text-white"},{default:s(()=>[r(l(e.$t("activity_logs")),1)]),_:1})])])]),t("tbody",null,[t("tr",null,[t("td",null,[(v(!0),P(N,null,W(e.activityLogs,(h,$)=>(v(),P("div",{class:"",key:$},[t("div",pe,[t("div",ue,[o(_,{name:"check",w:"20",h:"20",class:"me-4 p-0.5 inline-block font-semibold bg-green-500 border rounded-full text-white"})]),t("div",_e,[o(m,null,{default:s(()=>[r(l(h),1)]),_:2},1024)])]),fe]))),128))])])])])])):D("",!0)])])]),_:1}),o(f,{ref:"ps_danger_dialog_with_input"},null,512)]),_:1})],64)}var Ye=M(S,[["render",be]]);export{Ye as default};
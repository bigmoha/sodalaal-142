import{d as T,p as z,Z as E,i as n,B as M,o as r,c as _,b as l,w as a,f,q as i,t as d,g as m,a as b,F as R,s as N,n as V,O as U,r as p}from"./app.bcb0820c.js";import{P as q}from"./PsLayout.28577d6c.js";import{P as Z}from"./PsLabel.ba854ae6.js";import{P as G}from"./PsButton.6e47777c.js";import{d as J,c as K}from"./PsDangerDialog.45064bba.js";import{P as Q}from"./PsTable2.945a4e74.js";import{P as W}from"./PsAlert.43832e70.js";import{P as X}from"./PsBreadcrumb2.c24fe59b.js";import{P as Y}from"./PsToggle.6d7ca6c8.js";import{P as x}from"./PsIcon.71b0e9da.js";import{P as ee}from"./PsCsvModal.13268042.js";import{P as te}from"./PsBannerIcon.6e4a09ea.js";import{D as ae}from"./PsTableSearch.e2c5eca7.js";import{P as oe}from"./PsIconButton.6eb3a27f.js";import{P as le}from"./PsDropdownSelect.65e73a6d.js";import{P as re}from"./PsDropdown.d345be0d.js";import{D as se}from"./DatePicker.30ccdba0.js";import{h as ne}from"./moment.9709ab41.js";import{_ as ie}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsWarningDialog.89df77bf.js";import"./PsModal.fccd5c23.js";import"./vue-neat-modal.bb68220d.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.73b90a8b.js";import"./SidebarSubTab.1a8b9e94.js";import"./PsErrorDialog.d3e814f0.js";import"./PsInputWithRightIcon.29f20201.js";import"./PsSuccessDialog.c18e6651.js";import"./PsLoading.9d8c0dd0.js";import"./PsInput.096bf606.js";import"./PsLabelCaption.e61a7806.js";import"./PsLoadingCircleDialog.1c2df66f.js";import"./PsIcon1.4226e037.js";import"./Icons.80b46b2b.js";import"./toggle.2d374629.js";import"./PsLabelHeader4.6bd3b47b.js";import"./PsLink1.b3ef6332.js";import"./PsDraggable.b90e2bf9.js";import"./main.7d6b6908.js";import"./index.edd1d404.js";const de=T({name:"Index",components:{PsDropdownSelect:le,Link:z,Head:E,PsLabel:Z,PsButton:G,PsTable2:Q,PsAlert:W,PsBreadcrumb2:X,PsDangerDialog:J,PsToggle:Y,PsIcon:x,PsCsvModal:ee,PsBannerIcon:te,Dropdown:ae,PsIconButton:oe,PsTextButton:K,DatePicker:se,PsDropdown:re},layout:q,props:{can:Object,status:Object,paidItems:Object,payment_methods:Object,statusList:Object,selectedStatus:{type:String,default:""},selectedPaymentMethod:{type:String,default:""},selectedDate:Object,sort_field:{type:String,default:""},sort_order:{type:String,default:"desc"},search:String},setup(e){const u=n(!1);let F=e.search?n(e.search):n(""),P=e.sort_field?n(e.sort_field):n(""),I=e.sort_order?n(e.sort_order):n("desc"),v=e.selectedDate?n(e.selectedDate):n(""),h=e.selectedStatus?n(e.selectedStatus):n(""),g=e.selectedPaymentMethod?n(e.selectedPaymentMethod):n("");const w=n(!0),k=[{label:"item_module",field:"item_id@@title",type:"String"},{label:"core__be_start_date_label",field:"start_date",type:"Date",action:"Action"},{label:"core__be_end_date_label",field:"end_date",type:"Date",action:"Action"},{label:"core__be_status_label",field:"status",type:"Integer",action:"Action"},{label:"core__be_amount_label",field:"amount",type:"Integer",action:"Action"},{label:"core__be_paymend_method_label",field:"payment_method",type:"String",action:"Action"},{label:"detail_label",field:"detail",type:"Action"}];function S(o,c){let y=new Date,A=new Date(o*1e3),L=new Date(c*1e3),D=0;return y>=A&&y<=L&&(D="1"),y>A&&y>L&&(D="2"),y<A&&y<L&&(D="3"),D}function O(o){P.value=o.field,I.value=o.sort_order,t()}function $(o){F.value=o,t(1)}function s(o){t(1,o)}function C(o){h.value=o,t(1)}function B(o){g.value=o,t(1)}function H(o){v.value=o,t(1)}function j(){v.value="",g.value="",h.value="",t(1),w.value=!1,setTimeout(()=>{w.value=!0},500)}function t(o=null,c=null){U.get(route("paid_item.index"),{sort_field:P.value,sort_order:I.value,page:o!=null?o:e.paidItems.meta.current_page,row:c!=null?c:e.paidItems.meta.per_page,search:F.value,date_filter:v.value,status_filter:h.value,payment_method_filter:g.value},{preserveScroll:!0,preserveState:!0})}return{reRenderDate:w,handleStatusfilter:C,dateFilter:H,handlePaymentMethodfilter:B,selected_date:v,selected_status:h,selected_payment_method:g,handleRow:s,handleSearchingSorting:t,handleSearching:$,handleSorting:O,columns:k,getStatus:S,showFilter:u,handleClearFilter:j,moment:ne}},computed:{breadcrumb(){return[{label:M("core__be_dashboard_label"),url:route("admin.index")},{label:M("promotion_report_module"),color:"text-primary-500"}]}},methods:{handleEdit(e){this.$inertia.get(route("paid_item.edit",e))}}}),me=["href"],ue={class:"rounded-md shadow-xs w-56"},pe={class:"pt-2 z-30"},ce=["onClick"],_e={class:"rounded-md shadow-xs w-56"},fe={class:"pt-2 z-30"},be=["onClick"],he={key:0,class:"flex flex-row"},ge={key:1},ye={key:2},ve={key:3};function we(e,u,F,P,I,v){const h=p("Head"),g=p("ps-breadcrumb-2"),w=p("ps-banner-icon"),k=p("ps-icon"),S=p("ps-text-button"),O=p("ps-icon-button"),$=p("ps-dropdown-select"),s=p("ps-label"),C=p("ps-dropdown"),B=p("date-picker"),H=p("ps-table2"),j=p("ps-layout");return r(),_(R,null,[l(h,{title:e.$t("promotion_report_module")},null,8,["title"]),l(j,null,{default:a(()=>[l(g,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),e.visible?(r(),f(w,{key:0,visible:e.visible,theme:e.status.flag=="danger"?"bg-red-500":e.status.flag=="warning"?"bg-yellow-500":"bg-green-500",iconName:e.status.flag=="danger"?"close-circle":e.status.flag=="warning"?"alert-triangle":"rightalert",class:"text-white mb-4",iconColor:"white"},{default:a(()=>[i(d(e.status.msg),1)]),_:1},8,["visible","theme","iconName"])):m("",!0),l(H,{row:e.row,search:e.search,object:e.paidItems,columns:e.columns,sort_field:e.sort_field,sort_order:e.sort_order,onFilterOptionshandle:e.FilterOptionshandle,onHandleSort:e.handleSorting,onHandleSearch:e.handleSearching,onHandleRow:e.handleRow,searchable:e.showFilter,eye_filter:!1},{searchLeft:a(()=>[b("div",null,[b("a",{href:e.route("paid_item_report.csv.export"),class:"font-medium transition duration-150 ease-in-out px-4 py-1.75 ms-1 rounded text-primary-500 border border-primary-500 hover:outline-none hover:ring hover:ring-blue-100 focus:outline-none focus:ring focus:ring-blue-300 opacity-100 flex items-center"},[l(k,{name:"fileUpload",class:"me-2 font-semibold"}),i(d(e.$t("core__be_export_btn")),1)],8,me)])]),searchRight:a(()=>[e.showFilter?(r(),f(S,{key:0,onClick:u[0]||(u[0]=t=>e.handleClearFilter()),class:"flex text-sm items-center text-red-400 dark:text-red-400",padding:"py-2 px-4"},{default:a(()=>[l(k,{theme:"dark:text-red-400",name:"cross",class:"me-3"}),i(" "+d(e.$t("core__be_clear_filter")),1)]),_:1})):m("",!0),l(O,{colors:e.showFilter?"bg-primary-500 text-white dark:text-secondary-800":"",focus:"",padding:"py-1 px-4",hover:"hover:bg-primary-500 hover:text-white",border:e.showFilter?"border border-primary-500":" border border-secondary-200",leftIcon:"filter",onClick:u[1]||(u[1]=t=>e.showFilter=!e.showFilter)},{default:a(()=>[i(d(e.$t("core__be_filter")),1)]),_:1},8,["colors","border"])]),Filter:a(()=>[l(C,{align:"",class:"h-10"},{select:a(()=>[l($,{placeholder:e.$t("core__be_status_label"),selectedValue:e.selected_status==""||e.selected_status=="all"?"":e.statusList.filter(t=>t.id==e.selected_status)[0].name},null,8,["placeholder","selectedValue"])]),list:a(()=>[b("div",ue,[b("div",pe,[b("div",{class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:u[2]||(u[2]=t=>e.handleStatusfilter("all"))},[l(s,{class:"text-gray-200 ms-2"},{default:a(()=>[i(d(e.$t("core__be_select_all")),1)]),_:1})]),(r(!0),_(R,null,N(e.statusList,t=>(r(),_("div",{key:t.id,class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:o=>e.handleStatusfilter(t.id)},[l(s,{class:V(["ms-2",t.id==e.selected_status?" font-bold":""])},{default:a(()=>[i(d(t.name),1)]),_:2},1032,["class"])],8,ce))),128))])])]),_:1}),l(C,{class:"h-10"},{select:a(()=>[l($,{placeholder:e.$t("core__be_payment_method_label"),selectedValue:e.selected_payment_method==""||e.selected_payment_method=="all"?"":e.payment_methods.filter(t=>t.id==e.selected_payment_method)[0].name},null,8,["placeholder","selectedValue"])]),list:a(()=>[b("div",_e,[b("div",fe,[b("div",{class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:u[3]||(u[3]=t=>e.handlePaymentMethodfilter("all"))},[l(s,{class:"text-gray-200 ms-2"},{default:a(()=>[i(d(e.$t("core__be_select_all")),1)]),_:1})]),(r(!0),_(R,null,N(e.payment_methods,t=>(r(),_("div",{key:t.id,class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:o=>e.handlePaymentMethodfilter(t.id)},[l(s,{class:V(["ms-2",t.id==e.selected_payment_method?" font-bold":""])},{default:a(()=>[i(d(t.name),1)]),_:2},1032,["class"])],8,be))),128))])])]),_:1}),e.reRenderDate?(r(),f(B,{key:0,class:V(["rounded shadow-sm pt-0.5 focus:outline-none focus:ring-1 focus:ring-primary-500",(e.selected_date==null||e.selected_date=="","w-full")]),placeholder:e.$t("core__be_promotion_date"),value:e.selected_date,"onUpdate:value":u[4]||(u[4]=t=>e.selected_date=t),onDatepick:e.dateFilter,range:!1,inline:!1,autoApply:!1},null,8,["placeholder","class","value","onDatepick"])):m("",!0)]),tableRow:a(t=>[t.field=="detail"?(r(),_("div",he,[l(S,{onClick:o=>e.handleEdit(t.row.id)},{default:a(()=>[i(d(e.$t("core__be_btn_detail")),1)]),_:2},1032,["onClick"])])):m("",!0),t.field=="start_date"?(r(),_("span",ge,[l(s,null,{default:a(()=>[i(d(t.row.start_timestamp?e.moment(new Date(t.row.start_timestamp*1e3)).format(e.$page.props.dateFormat):""),1)]),_:2},1024)])):m("",!0),t.field=="end_date"?(r(),_("span",ye,[l(s,null,{default:a(()=>[i(d(t.row.end_timestamp?e.moment(new Date(t.row.end_timestamp*1e3)).format(e.$page.props.dateFormat):""),1)]),_:2},1024)])):m("",!0),t.field=="status"?(r(),_("div",ve,[l(s,{class:"whitespace-nowrap dark:text-white"},{default:a(()=>[e.getStatus(t.row.start_timestamp,t.row.end_timestamp)==2?(r(),f(s,{key:0,class:"flex flex-row",textColor:"text-green-600"},{default:a(()=>[e.getStatus(t.row.start_timestamp,t.row.end_timestamp)==2?(r(),f(s,{key:0,class:"w-2 h-2 my-auto rounded-full me-2",textColor:"bg-green-600"})):m("",!0),i(" "+d(e.$t("core__be_compleated_status")),1)]),_:2},1024)):m("",!0),e.getStatus(t.row.start_timestamp,t.row.end_timestamp)==1?(r(),f(s,{key:1,class:"flex flex-row",textColor:"text-yellow-500"},{default:a(()=>[e.getStatus(t.row.start_timestamp,t.row.end_timestamp)==1?(r(),f(s,{key:0,class:"w-2 h-2 my-auto rounded-full me-2",textColor:"bg-yellow-500"})):m("",!0),i(" "+d(e.$t("core__be_ongoing_status")),1)]),_:2},1024)):m("",!0),e.getStatus(t.row.start_timestamp,t.row.end_timestamp)==3?(r(),f(s,{key:2,class:"flex flex-row",textColor:"text-gray-500"},{default:a(()=>[e.getStatus(t.row.start_timestamp,t.row.end_timestamp)==3?(r(),f(s,{key:0,class:"w-2 h-2 my-auto rounded-full me-2",textColor:"bg-gray-500"})):m("",!0),i(" "+d(e.$t("core__be_not_yet_start_status")),1)]),_:2},1024)):m("",!0)]),_:2},1024)])):m("",!0)]),_:1},8,["row","search","object","columns","sort_field","sort_order","onFilterOptionshandle","onHandleSort","onHandleSearch","onHandleRow","searchable"])]),_:1})],64)}var dt=ie(de,[["render",we]]);export{dt as default};

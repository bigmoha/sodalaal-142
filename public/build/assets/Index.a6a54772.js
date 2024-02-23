import{P as V}from"./PsLayout.28577d6c.js";import{d as z,Z as H,i as n,B as d,O as S,o,f as l,w as a,b as s,q as $,t as O,g as i,c as D,r as h}from"./app.bcb0820c.js";import{P as T}from"./PsButton.6e47777c.js";import{c as I,d as E}from"./PsDangerDialog.45064bba.js";import{P as N}from"./PsBannerIcon.6e4a09ea.js";import{P as L}from"./PsBreadcrumb2.c24fe59b.js";import{P as U}from"./PsIcon.71b0e9da.js";import{P as q}from"./PsDropdown.d345be0d.js";import{P as M}from"./PsDropdownSelect.65e73a6d.js";import{D as Z}from"./PsTableSearch.e2c5eca7.js";import{P as G}from"./PsIconButton.6eb3a27f.js";import{P as J}from"./PsLabel.ba854ae6.js";import{P as K}from"./PsLink1.b3ef6332.js";import{P as Q}from"./PsToggle.6d7ca6c8.js";import{P as W}from"./PsTable2.945a4e74.js";import{P as X}from"./PsRating.66722b29.js";import{D as Y}from"./DatePicker.30ccdba0.js";import{_ as x}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsWarningDialog.89df77bf.js";import"./PsModal.fccd5c23.js";import"./vue-neat-modal.bb68220d.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.73b90a8b.js";import"./SidebarSubTab.1a8b9e94.js";import"./PsErrorDialog.d3e814f0.js";import"./PsInputWithRightIcon.29f20201.js";import"./PsSuccessDialog.c18e6651.js";import"./PsLoading.9d8c0dd0.js";import"./PsInput.096bf606.js";import"./PsLabelCaption.e61a7806.js";import"./PsLoadingCircleDialog.1c2df66f.js";import"./PsIcon1.4226e037.js";import"./Icons.80b46b2b.js";import"./toggle.2d374629.js";import"./moment.9709ab41.js";import"./main.7d6b6908.js";import"./index.edd1d404.js";const ee=z({name:"Index",components:{Head:H,PsButton:T,PsTextButton:I,PsBannerIcon:N,PsBreadcrumb2:L,PsDangerDialog:E,PsIcon:U,PsDropdown:q,PsDropdownSelect:M,Dropdown:Z,PsIconButton:G,PsLabel:J,PsLink1:K,PsToggle:Q,PsTable2:W,PsRating:X,DatePicker:Y},layout:V,props:{can:Object,status:Object,roles:Object,customizeHeaders:Object,customizeDetails:Object,hideShowFieldForFilterArr:Object,showCoreAndCustomFieldArr:Object,selectedRole:{type:String,default:""},authUser:Object,uis:Object,sort_field:{type:String,default:""},sort_order:{type:String,default:"desc"},search:String},setup(e){const p=n(!1),F=n(!1);let g=n(!1);const A=[1,2];let y=e.search?n(e.search):n(""),v=e.sort_field?n(e.sort_field):n(""),k=e.sort_order?n(e.sort_order):n("desc");const u=n();let c=n();function w(r){v.value=r.field,k.value=r.sort_order,b()}function _(r){y.value=r,b(1)}function C(r){b(1,r)}function b(r=null,m=null){S.get(route("user_role.index"),{sort_field:v.value,sort_order:k.value,page:r!=null?r:e.roles.meta.current_page,row:m!=null?m:e.roles.meta.per_page,search:y.value},{preserveScroll:!0,preserveState:!0})}const t=n();function f(r){t.value.openModal(d("core__be_delete_role"),d("delete_role"),d("core__be_btn_confirm"),d("core__be_btn_cancel"),()=>{S.delete(route("user_role.destroy",r),{onSuccess:()=>{g.value=!0,setTimeout(()=>{g.value=!1},3e3)},onError:()=>{g.value=!0,setTimeout(()=>{g.value=!1},3e3)}})},()=>{})}function P(r){this.$inertia.get(route("user_role.edit",r))}function j(){this.$inertia.get(route("user_role.create"))}function R(r,m){m&&this.$inertia.put(route("user_role.statusChange",r))}function B(r,m){m&&this.$inertia.put(route("user_role.updateAdminPanelAccess",r))}return{showFilter:p,handleAdminPanelAccess:B,clearFilter:F,columns:c,colFilterOptions:u,visible:g,handleSorting:w,handleSearchingSorting:b,handleRow:C,handleSearching:_,handleEdit:P,handleCreate:j,ps_danger_dialog:t,confirmDeleteClicked:f,handlePublish:R,roleIDArr:A}},computed:{breadcrumb(){return[{label:d("core__be_dashboard_label"),url:route("admin.index")},{label:d("user_role_module"),color:"text-primary-500"}]}},methods:{FilterOptionshandle(e){S.post(route("user_role.screenDisplayUiSetting.store"),{value:e,sort_field:this.sort_field,sort_order:this.sort_order,row:this.roles.per_page,search:this.search.value,current_page:this.roles.current_page},{preserveScroll:!0,preserveState:!0})}},created(){this.columns=this.showCoreAndCustomFieldArr.map(e=>({action:e.action,field:e.field,label:d(e.label),sort:e.sort,type:e.type})),this.colFilterOptions=this.hideShowFieldForFilterArr.map(e=>({hidden:e.hidden,id:e.id,key:d(e.key),key_id:e.key_id,label:d(e.label),module_name:e.module_name}))}}),te={key:0,class:"flex flex-row"},re={key:0},oe={key:1};function ne(e,p,F,g,A,y){const v=h("ps-breadcrumb-2"),k=h("ps-banner-icon"),u=h("ps-icon"),c=h("ps-button"),w=h("ps-danger-dialog"),_=h("ps-toggle"),C=h("ps-table2"),b=h("ps-layout");return o(),l(b,{can:e.can},{default:a(()=>[s(v,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),e.visible?(o(),l(k,{key:0,visible:e.visible,theme:e.status.flag=="danger"?"bg-red-500":e.status.flag=="warning"?"bg-yellow-500":"bg-green-500",iconName:e.status.flag=="danger"?"close-circle":e.status.flag=="warning"?"alert-triangle":"rightalert",class:"text-white mb-5 sm:mb-6 lg:mb-8",iconColor:"white"},{default:a(()=>[$(O(e.status.msg),1)]),_:1},8,["visible","theme","iconName"])):i("",!0),s(C,{row:e.row,search:e.search,object:this.roles,colFilterOptions:e.colFilterOptions,columns:e.columns,sort_field:e.sort_field,sort_order:e.sort_order,globalSearchPlaceholder:e.$t("core__be_search"),onFilterOptionshandle:e.FilterOptionshandle,onHandleSort:e.handleSorting,onHandleSearch:e.handleSearching,onHandleRow:e.handleRow,searchable:e.showFilter},{button:a(()=>[e.can.createRole?(o(),l(c,{key:0,onClick:p[0]||(p[0]=t=>e.handleCreate()),rounded:"rounded-lg",type:"button",class:"flex flex-wrap items-center"},{default:a(()=>[s(u,{name:"plus",class:"me-1 font-semibold"}),$(" "+O(e.$t("core__be_add_user_role")),1)]),_:1})):i("",!0)]),responsive_button:a(()=>[e.can.createRole?(o(),l(c,{key:0,onClick:p[1]||(p[1]=t=>e.handleCreate()),rounded:"rounded-lg",type:"button",class:"flex flex-wrap items-center"},{default:a(()=>[s(u,{name:"plus",class:"me-1 font-semibold"}),$(" "+O(e.$t("core__be_add_user_role")),1)]),_:1})):i("",!0)]),tableActionRow:a(t=>[t.field=="action"?(o(),D("div",te,[t.row.id!=1?(o(),l(c,{key:0,disabled:!t.row.authorizations.update,onClick:f=>e.handleEdit(t.row.id),class:"me-2",rounded:"rounded-lg",colors:"bg-green-400 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-green-100",focus:"focus:outline-none focus:ring focus:ring-green-200"},{default:a(()=>[s(u,{theme:"text-white dark:text-primary-900",name:"editPencil",w:"16",h:"16"})]),_:2},1032,["disabled","onClick"])):i("",!0),t.row.id!=1&&t.row.id!=2?(o(),l(c,{key:1,disabled:!t.row.authorizations.delete,onClick:f=>e.confirmDeleteClicked(t.row.id),rounded:"rounded-lg",colors:"bg-red-400 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-red-100",focus:"focus:outline-none focus:ring focus:ring-red-200"},{default:a(()=>[s(u,{theme:"text-white dark:text-primary-900",name:"trash",w:"16",h:"16"})]),_:2},1032,["disabled","onClick"])):i("",!0),t.row.id==1?(o(),l(c,{key:2,disabled:e.authUser.id!=1,onClick:f=>e.handleEdit(t.row.id),class:"me-2",rounded:"rounded-lg",colors:"bg-green-400 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-green-100",focus:"focus:outline-none focus:ring focus:ring-green-200"},{default:a(()=>[s(u,{theme:"text-white dark:text-primary-900",name:"editPencil",w:"16",h:"16"})]),_:2},1032,["disabled","onClick"])):i("",!0),t.row.id==1||t.row.id==2?(o(),l(c,{key:3,disabled:!0,onClick:f=>e.confirmDeleteClicked(t.row.id),rounded:"rounded-lg",colors:"bg-red-400 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-red-100",focus:"focus:outline-none focus:ring focus:ring-red-200"},{default:a(()=>[s(u,{theme:"text-white dark:text-primary-900",name:"trash",w:"16",h:"16"})]),_:2},1032,["onClick"])):i("",!0),s(w,{ref:"ps_danger_dialog"},null,512)])):i("",!0)]),tableRow:a(t=>[t.field=="status"?(o(),D("div",re,[t.row.id!=1&&t.row.id!=2?(o(),l(_,{key:0,disabled:!t.row.authorizations.update,selectedValue:t.row.status==1,onClick:f=>e.handlePublish(t.row.id,t.row.authorizations.update),toggleOnTheme:"bg-primary-500 border-primary-500 "},null,8,["disabled","selectedValue","onClick"])):i("",!0),t.row.id==1||t.row.id==2?(o(),l(_,{key:1,disabled:!0,selectedValue:t.row.status==1},null,8,["selectedValue"])):i("",!0)])):i("",!0),t.field=="can_access_admin_panel"?(o(),D("div",oe,[s(_,{disabled:!t.row.authorizations.update,selectedValue:t.row.can_access_admin_panel==1,onClick:f=>e.handleAdminPanelAccess(t.row.id,t.row.authorizations.update),toggleOnTheme:"bg-primary-500 border-primary-500 "},null,8,["disabled","selectedValue","onClick"])])):i("",!0)]),_:1},8,["row","search","object","colFilterOptions","columns","sort_field","sort_order","globalSearchPlaceholder","onFilterOptionshandle","onHandleSort","onHandleSearch","onHandleRow","searchable"])]),_:1},8,["can"])}var qe=x(ee,[["render",ne]]);export{qe as default};

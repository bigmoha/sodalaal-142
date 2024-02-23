import{d as j,p as H,Z as z,i as r,B as l,O as $,o as m,c as D,b as i,w as s,f,q as b,t as g,g as h,F as A,H as B,r as a}from"./app.bcb0820c.js";import{P as R}from"./PsLayout.28577d6c.js";import{P as L}from"./PsLabel.ba854ae6.js";import{P as T}from"./PsButton.6e47777c.js";import{P as V}from"./PsTable2.945a4e74.js";import{P as E}from"./PsAlert.43832e70.js";import{P as I}from"./PsBreadcrumb2.c24fe59b.js";import{d as N}from"./PsDangerDialog.45064bba.js";import{P as U}from"./PsToggle.6d7ca6c8.js";import{P as M}from"./PsIcon.71b0e9da.js";import{P as Q}from"./PsCsvModal.13268042.js";import{P as q}from"./PsBannerIcon.6e4a09ea.js";import{D as K}from"./PsTableSearch.e2c5eca7.js";import{P as G}from"./PsIconButton.6eb3a27f.js";import{_ as Y}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsDropdown.d345be0d.js";import"./PsDropdownSelect.65e73a6d.js";import"./PsWarningDialog.89df77bf.js";import"./PsModal.fccd5c23.js";import"./vue-neat-modal.bb68220d.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.73b90a8b.js";import"./SidebarSubTab.1a8b9e94.js";import"./PsErrorDialog.d3e814f0.js";import"./PsInputWithRightIcon.29f20201.js";import"./PsSuccessDialog.c18e6651.js";import"./PsLoading.9d8c0dd0.js";import"./PsInput.096bf606.js";import"./PsLabelCaption.e61a7806.js";import"./PsLoadingCircleDialog.1c2df66f.js";import"./moment.9709ab41.js";import"./PsIcon1.4226e037.js";import"./Icons.80b46b2b.js";import"./toggle.2d374629.js";import"./PsLabelHeader4.6bd3b47b.js";import"./PsLink1.b3ef6332.js";import"./PsDraggable.b90e2bf9.js";const Z=j({name:"Index",components:{Link:H,Head:z,PsLabel:L,PsButton:T,PsTable2:V,PsAlert:E,PsBreadcrumb2:I,PsDangerDialog:N,PsToggle:U,PsIcon:M,PsCsvModal:Q,PsBannerIcon:q,Dropdown:K,PsIconButton:G},layout:R,props:{status:Object,can:Object,cities:Object,hideShowFieldForFilterArr:Object,showCoreAndCustomFieldArr:Object,selectedOwner:{type:String,default:""},authUser:Object,uis:Object,sort_field:{type:String,default:""},sort_order:{type:String,default:"desc"},search:String,customizeDetails:Object,customizeHeaders:Object},setup(e){let n=e.search?r(e.search):r(""),v=e.sort_field?r(e.sort_field):r(""),y=e.sort_order?r(e.sort_order):r("desc");e.selectedOwner?r(e.selectedOwner):r("");const w=r(),C=r();let d=r(!1);const _=r(),k=r();function c(o){w.value.openModal(l("core__delete"),l("delete_city_msg"),l("core__be_btn_confirm"),l("core__be_btn_cancel"),()=>{this.$inertia.delete(route("city.destroy",o),{onSuccess:()=>{d.value=!0,setTimeout(()=>{d.value=!1},3e3)},onError:()=>{d.value=!0,setTimeout(()=>{d.value=!1},3e3)}})},()=>{})}function u(){C.value.openModal(o=>{let t=B({csvFile:o,_method:"put"});$.post(route("city.import.csv"),t)})}function S(o){v.value=o.field,y.value=o.sort_order,p()}function P(o){n.value=o,p(1)}function O(o){p(1,o)}function p(o=null,t=null){$.get(route("city.index"),{sort_field:v.value,sort_order:y.value,page:o!=null?o:e.cities.meta.current_page,row:t!=null?t:e.cities.meta.per_page,search:n.value},{preserveScroll:!0,preserveState:!0})}return{visible:d,columns:k,ps_danger_dialog:w,confirmDeleteClicked:c,ps_csv_modal:C,csvUploadClicked:u,colFilterOptions:_,colFilterOptions:_,handleSorting:S,handleSearchingSorting:p,handleRow:O,handleSearching:P}},computed:{breadcrumb(){return[{label:l("core__be_dashboard_label"),url:route("admin.index")},{label:l("city_module"),color:"text-primary-500"}]}},methods:{handleCreate(){this.$inertia.get(route("city.create"))},handleEdit(e){this.$inertia.get(route("city.edit",e))},handlePublish(e,n){n&&this.$inertia.put(route("city.statusChange",e))},FilterOptionshandle(e){$.put(route("city.screenDisplayUiSetting.store"),{value:e,sort_field:this.sort_field,sort_order:this.sort_order,row:this.cities.per_page,search:this.search.value,current_page:this.cities.current_page},{preserveScroll:!0,preserveState:!0})}},created(){this.columns=this.showCoreAndCustomFieldArr.map(e=>({action:e.action,field:e.field,label:l(e.label),sort:e.sort,type:e.type})),this.colFilterOptions=this.hideShowFieldForFilterArr.map(e=>({hidden:e.hidden,id:e.id,key:l(e.key),key_id:e.key_id,label:l(e.label),module_name:e.module_name}))}}),J={key:0,class:"flex flex-row"};function W(e,n,v,y,w,C){const d=a("Head"),_=a("ps-breadcrumb-2"),k=a("ps-banner-icon"),c=a("ps-icon"),u=a("ps-button"),S=a("ps-csv-modal"),P=a("ps-danger-dialog"),O=a("ps-toggle"),p=a("ps-table2"),o=a("ps-layout");return m(),D(A,null,[i(d,{title:e.$t("city_module")},null,8,["title"]),i(o,null,{default:s(()=>[i(_,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),e.visible?(m(),f(k,{key:0,visible:e.visible,theme:e.status.flag=="danger"?"bg-red-500":e.status.flag=="warning"?"bg-yellow-500":"bg-green-500",iconName:e.status.flag=="danger"?"close-circle":e.status.flag=="warning"?"alert-triangle":"rightalert",class:"text-white mb-5 sm:mb-6 lg:mb-8",iconColor:"white"},{default:s(()=>[b(g(e.status.msg),1)]),_:1},8,["visible","theme","iconName"])):h("",!0),i(p,{customizeDetails:e.customizeDetails,row:e.row,search:e.search,object:this.cities,colFilterOptions:e.colFilterOptions,columns:e.columns,sort_field:e.sort_field,sort_order:e.sort_order,onFilterOptionshandle:e.FilterOptionshandle,onHandleSort:e.handleSorting,onHandleSearch:e.handleSearching,onHandleRow:e.handleRow,searchable:e.showFilter,globalSearchPlaceholder:e.$t("core__be_search_city")},{searchLeft:s(()=>[e.can.createLocationCity?(m(),f(u,{key:0,onClick:e.csvUploadClicked,rounded:"rounded",class:"flex flex-wrap items-center ms-3"},{default:s(()=>[i(c,{name:"plus",class:"me-2 font-semibold"}),b(" "+g(e.$t("core__be_import_file")),1)]),_:1},8,["onClick"])):h("",!0),i(S,{ref:"ps_csv_modal",url:"https://drive.google.com/file/d/1s8Ah8RY0v8n2fznEGKn3KmS4QRVqT9QQ/view?usp=sharing"},null,512)]),button:s(()=>[e.can.createLocationCity?(m(),f(u,{key:0,onClick:n[0]||(n[0]=t=>e.handleCreate()),rounded:"rounded-lg",type:"button",class:"flex flex-wrap items-center"},{default:s(()=>[i(c,{name:"plus",class:"me-2 font-semibold"}),b(g(e.$t("core__be_add_city")),1)]),_:1})):h("",!0)]),responsive_button:s(()=>[e.can.createLocationCity?(m(),f(u,{key:0,onClick:n[1]||(n[1]=t=>e.handleCreate()),rounded:"rounded-lg",type:"button",class:"flex flex-wrap items-center"},{default:s(()=>[i(c,{name:"plus",class:"me-2 font-semibold"}),b(g(e.$t("core__be_add_city")),1)]),_:1})):h("",!0)]),tableActionRow:s(t=>[t.field=="action"?(m(),D("div",J,[i(u,{disabled:!t.row.authorization.update,onClick:F=>e.handleEdit(t.row.id),class:"me-2",colors:"bg-green-400 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-green-100",focus:"focus:outline-none focus:ring focus:ring-green-200"},{default:s(()=>[i(c,{theme:"text-white dark:text-primary-900",name:"editPencil",w:"16",h:"16"})]),_:2},1032,["disabled","onClick"]),i(u,{disabled:!t.row.authorization.delete,onClick:F=>e.confirmDeleteClicked(t.row.id),colors:"bg-red-400 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-red-100",focus:"focus:outline-none focus:ring focus:ring-red-200"},{default:s(()=>[i(c,{theme:"text-white dark:text-primary-900",name:"trash",w:"16",h:"16"})]),_:2},1032,["disabled","onClick"]),i(P,{ref:"ps_danger_dialog"},null,512)])):h("",!0)]),tableRow:s(t=>[t.field=="status"?(m(),f(O,{key:0,disabled:!t.row.authorization.update,selectedValue:t.row.status==1,onClick:F=>e.handlePublish(t.row.id,t.row.authorization.update)},null,8,["disabled","selectedValue","onClick"])):h("",!0)]),_:1},8,["customizeDetails","row","search","object","colFilterOptions","columns","sort_field","sort_order","onFilterOptionshandle","onHandleSort","onHandleSearch","onHandleRow","searchable","globalSearchPlaceholder"])]),_:1})],64)}var Le=Y(Z,[["render",W]]);export{Le as default};

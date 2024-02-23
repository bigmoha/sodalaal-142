import{d as B,Z as L,B as n,i as s,O as $,o as u,c as A,b as r,w as o,f as m,q as p,t as v,g as c,a as y,F as N,H as x,r as l}from"./app.bcb0820c.js";import{P as T}from"./PsLayout.28577d6c.js";import{P as D}from"./PsLabel.ba854ae6.js";import{P as E}from"./PsButton.6e47777c.js";import{N as I}from"./NewPsDataTable.939da72f.js";import{P as z}from"./PsAlert.43832e70.js";import{P as R}from"./PsBreadcrumb2.c24fe59b.js";import{d as U}from"./PsDangerDialog.45064bba.js";import{P as V}from"./PsToggle.6d7ca6c8.js";import{P as G}from"./PsIcon.71b0e9da.js";import{P as M}from"./PsBannerIcon.6e4a09ea.js";import{P as q}from"./PsIconButton.6eb3a27f.js";import{P as J}from"./PsCsvModal.13268042.js";import{P as Y}from"./PsTable2.945a4e74.js";import{_ as Z}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsDropdown.d345be0d.js";import"./PsDropdownSelect.65e73a6d.js";import"./PsWarningDialog.89df77bf.js";import"./PsModal.fccd5c23.js";import"./vue-neat-modal.bb68220d.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.73b90a8b.js";import"./SidebarSubTab.1a8b9e94.js";import"./PsErrorDialog.d3e814f0.js";import"./PsInputWithRightIcon.29f20201.js";import"./PsSuccessDialog.c18e6651.js";import"./PsLoading.9d8c0dd0.js";import"./PsInput.096bf606.js";import"./PsLabelCaption.e61a7806.js";import"./PsLoadingCircleDialog.1c2df66f.js";import"./PsTableSearch.e2c5eca7.js";import"./moment.9709ab41.js";import"./PsIcon1.4226e037.js";import"./Icons.80b46b2b.js";import"./toggle.2d374629.js";import"./PsLabelHeader4.6bd3b47b.js";import"./PsLink1.b3ef6332.js";import"./PsDraggable.b90e2bf9.js";const K=B({name:"Index",components:{Head:L,PsLabel:D,PsButton:E,NewPsDataTable:I,PsAlert:z,PsBreadcrumb2:R,PsDangerDialog:U,PsToggle:V,PsIcon:G,PsBannerIcon:M,PsIconButton:q,PsCsvModal:J,PsTable2:Y},layout:T,props:{status:Object,language:Object,language_strings:Object,checkPermission:Object,showLanguageCols:Object,showCoreAndCustomFieldArr:Object,hideShowFieldForFilterArr:Object,sort_field:{type:String,default:""},sort_order:{type:String,default:"desc"},search:String,can:Object},setup(e){const g=["key","value"],j=n("lang_search"),w=s(),k=s(),H=s(),C=s();let h=e.search?s(e.search):s(""),b=e.sort_field?s(e.sort_field):s(""),i=e.sort_order?s(e.sort_order):s("desc"),a=s(!1);function _(t){w.value.openModal(n("core__be_delete_languagestring"),n("core__be_delete_languagestring_info"),n("core__be_btn_confirm"),n("btn_cancel"),()=>{this.$inertia.delete(route("language_string.destroy",[e.language,t]),{onSuccess:()=>{a.value=!0,setTimeout(()=>{a.value=!1},3e3)},onError:()=>{a.value=!0,setTimeout(()=>{a.value=!1},3e3)}})},()=>{})}function S(){k.value.openModal(t=>{let d=x({csvFile:t,_method:"put"});$.post(route("language_string.import.csv",e.language),d,{onSuccess:()=>{window.location.reload()}})})}function P(t){b.value=t.field,i.value=t.sort_order,f()}function F(t){h.value=t,f(1)}function O(t){f(1,t)}function f(t=null,d=null){$.get(route("language_string.index",e.language.id),{sort_field:b.value,sort_order:i.value,page:t!=null?t:e.language_strings.meta.current_page,row:d!=null?d:e.language_strings.meta.per_page,search:h.value},{preserveScroll:!0,preserveState:!0})}return{globalSearchFields:g,globalSearchPlaceholder:j,csvUploadClicked:S,ps_csv_modal:k,columns:C,ps_danger_dialog:w,confirmDeleteClicked:_,colFilterOptions:H,handleSorting:P,handleSearching:F,handleRow:O,visible:a}},computed:{breadcrumb(){return[{label:n("core__be_dashboard_label"),url:route("admin.index")},{label:n("language_module"),url:route("language.index")},{label:n("language_string_module"),color:"text-primary-500"}]}},methods:{handleCreate(){this.$inertia.get(route("language_string.create",this.language.id))},handleEdit(e){this.$inertia.get(route("language_string.edit",[this.language,e]))},FilterOptionshandle(e){$.post(route("language_string.screenDisplayUiSetting.store"),{value:e,sort_field:this.sort_field,sort_order:this.sort_order,row:this.language_strings.per_page,search:this.search.value,current_page:this.language_strings.current_page},{preserveScroll:!0,preserveState:!0})}},created(){this.columns=this.showCoreAndCustomFieldArr.map(e=>({action:e.action,field:e.field,label:n(e.label),sort:e.sort,type:e.type})),this.colFilterOptions=this.hideShowFieldForFilterArr.map(e=>({hidden:e.hidden,id:e.id,key:n(e.key),key_id:e.key_id,label:n(e.label),module_name:e.module_name}))}}),Q=y("div",{class:"hidden sm:flex justify-end"},[y("div",{class:"flex"})],-1),W=["href"],X=p("Export Json"),ee=["href"],te=p("Export CSV"),re={key:0,class:"flex flex-row"};function oe(e,g,j,w,k,H){const C=l("Head"),h=l("ps-breadcrumb-2"),b=l("ps-banner-icon"),i=l("ps-icon"),a=l("ps-button"),_=l("ps-label"),S=l("ps-csv-modal"),P=l("ps-danger-dialog"),F=l("ps-table2"),O=l("ps-action-modal"),f=l("ps-layout");return u(),A(N,null,[r(C,{title:e.$t("language_string_module")},null,8,["title"]),r(f,null,{default:o(()=>[r(h,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),e.visible?(u(),m(b,{key:0,visible:e.visible,theme:e.status.flag=="danger"?"bg-red-500":e.status.flag=="warning"?"bg-yellow-500":"bg-green-500",iconName:e.status.flag=="danger"?"close-circle":e.status.flag=="warning"?"alert-triangle":"rightalert",class:"text-white mb-5 sm:mb-6 lg:mb-8",iconColor:"white"},{default:o(()=>[p(v(e.status.msg),1)]),_:1},8,["visible","theme","iconName"])):c("",!0),Q,r(F,{row:e.row,search:e.search,object:e.language_strings,colFilterOptions:e.colFilterOptions,columns:e.columns,sort_field:e.sort_field,sort_order:e.sort_order,onFilterOptionshandle:e.FilterOptionshandle,onHandleSort:e.handleSorting,onHandleSearch:e.handleSearching,onHandleRow:e.handleRow,searchable:e.showFilter},{button:o(()=>[e.can.createLanguageString?(u(),m(a,{key:0,onClick:g[0]||(g[0]=t=>e.handleCreate()),rounded:"rounded-lg",type:"button",class:"flex flex-wrap items-center"},{default:o(()=>[r(i,{name:"plus",class:"me-1 font-semibold"}),p(" "+v(e.$t("create_language_string")),1)]),_:1})):c("",!0)]),responsive_button:o(()=>[e.can.createLanguageString?(u(),m(a,{key:0,onClick:g[1]||(g[1]=t=>e.handleCreate()),rounded:"rounded-lg",type:"button",class:"flex flex-wrap items-center"},{default:o(()=>[r(i,{name:"plus",class:"me-1 font-semibold"}),p(" "+v(e.$t("create_language_string")),1)]),_:1})):c("",!0)]),searchLeft:o(()=>[e.can.createLanguageString?(u(),m(a,{key:0,rounded:"rounded",onClick:e.csvUploadClicked,class:"ms-3 flex flex-wrap items-center"},{default:o(()=>[r(i,{name:"plus",class:"me-2 font-semibold"}),r(_,{textColor:"text-white dark:text-secondary-800"},{default:o(()=>[p(v(e.$t("core__be_import_data")),1)]),_:1})]),_:1},8,["onClick"])):c("",!0),y("a",{href:e.route("language_string.export.json",e.language.id)},[e.can.createLanguageString?(u(),m(a,{key:0,rounded:"rounded",colors:"text-primary-500",border:"border border-primary-500",class:"ms-4 flex flex-wrap items-center"},{default:o(()=>[r(i,{name:"fileUpload",class:"me-2 font-semibold"}),r(_,{textColor:"text-primary-500"},{default:o(()=>[X]),_:1})]),_:1})):c("",!0)],8,W),y("a",{href:e.route("language_string.export.csv",e.language.id)},[e.can.createLanguageString?(u(),m(a,{key:0,rounded:"rounded",colors:"text-primary-500",border:"border border-primary-500",class:"ms-4 flex flex-wrap items-center"},{default:o(()=>[r(i,{name:"fileUpload",class:"me-2 font-semibold"}),r(_,{textColor:"text-primary-500"},{default:o(()=>[te]),_:1})]),_:1})):c("",!0)],8,ee),r(S,{ref:"ps_csv_modal",url:"https://drive.google.com/file/d/1zqO4n2zlroGITAblYyGGCdNfoepxiz62/view?usp=sharing"},null,512)]),tableActionRow:o(t=>[t.field=="action"?(u(),A("div",re,[r(a,{disabled:!t.row.authorizations.update,onClick:d=>e.handleEdit(t.row.id),class:"me-2",colors:"bg-green-400 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-green-100",focus:"focus:outline-none focus:ring focus:ring-green-200"},{default:o(()=>[r(i,{theme:"text-white dark:text-primary-900",name:"editPencil",w:"16",h:"16"})]),_:2},1032,["disabled","onClick"]),r(a,{disabled:!t.row.authorizations.delete,onClick:d=>e.confirmDeleteClicked(t.row.id),colors:"bg-red-400 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-red-100",focus:"focus:outline-none focus:ring focus:ring-red-200"},{default:o(()=>[r(i,{theme:"text-white dark:text-primary-900",name:"trash",w:"16",h:"16"})]),_:2},1032,["disabled","onClick"]),r(P,{ref:"ps_danger_dialog"},null,512)])):c("",!0)]),_:1},8,["row","search","object","colFilterOptions","columns","sort_field","sort_order","onFilterOptionshandle","onHandleSort","onHandleSearch","onHandleRow","searchable"]),r(O,{ref:"ps_action_modal"},null,512)]),_:1})],64)}var Ve=Z(K,[["render",oe]]);export{Ve as default};

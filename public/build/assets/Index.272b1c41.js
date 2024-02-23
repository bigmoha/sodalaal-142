import{d as T,p as V,Z as R,i as l,B as a,O as F,o as p,c as v,b as r,w as n,f as w,q as f,t as g,g as b,a as j,F as H,s as I,n as K,r as s}from"./app.bcb0820c.js";import{P as N}from"./PsLayout.28577d6c.js";import{P as z}from"./PsLabel.ba854ae6.js";import{P as E}from"./PsButton.6e47777c.js";import{P as L}from"./PsTable2.945a4e74.js";import{P as U}from"./PsAlert.43832e70.js";import{P as q}from"./PsBreadcrumb2.c24fe59b.js";import{d as M}from"./PsDangerDialog.45064bba.js";import{P as Z}from"./PsToggle.6d7ca6c8.js";import{P as G}from"./PsIcon.71b0e9da.js";import{P as J}from"./PsBannerIcon.6e4a09ea.js";import{P as Q}from"./PsIconButton.6eb3a27f.js";import{P as W}from"./PsDropdown.d345be0d.js";import{P as X}from"./PsDropdownSelect.65e73a6d.js";import{_ as Y}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsWarningDialog.89df77bf.js";import"./PsModal.fccd5c23.js";import"./vue-neat-modal.bb68220d.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.73b90a8b.js";import"./SidebarSubTab.1a8b9e94.js";import"./PsErrorDialog.d3e814f0.js";import"./PsInputWithRightIcon.29f20201.js";import"./PsSuccessDialog.c18e6651.js";import"./PsLoading.9d8c0dd0.js";import"./PsInput.096bf606.js";import"./PsLabelCaption.e61a7806.js";import"./PsLoadingCircleDialog.1c2df66f.js";import"./PsTableSearch.e2c5eca7.js";import"./moment.9709ab41.js";import"./PsIcon1.4226e037.js";import"./Icons.80b46b2b.js";import"./toggle.2d374629.js";const x=T({name:"Index",components:{Link:V,Head:R,PsLabel:z,PsButton:E,PsTable2:L,PsAlert:U,PsBreadcrumb2:q,PsDangerDialog:M,PsToggle:Z,PsIcon:G,PsBannerIcon:J,PsIconButton:Q,PsDropdown:W,PsDropdownSelect:X},layout:N,props:{can:Object,status:Object,types:Object,currencies:Object,inAppPurchases:Object,hideShowFieldForFilterArr:Object,showCoreAndCustomFieldArr:Object,authUser:Object,dayKey:String,typeKey:String,statusKey:String,selected_type:Object,sort_field:{type:String,default:""},sort_order:{type:String,default:"desc"},search:String},setup(e){const i=l();let u=l(!1);const B=l();let S=e.search?l(e.search):l(""),P=e.sort_field?l(e.sort_field):l(""),y=e.sort_order?l(e.sort_order):l("desc"),h=e.selected_type?l(e.selected_type):l("");function k(o){P.value=o.field,y.value=o.sort_order,d()}function _(o){h.value=o,d(1)}function m(o){S.value=o,d(1)}function C(o){d(1,o)}function d(o=null,c=null){F.get(route("promotion_in_app_purchase.index"),{sort_field:P.value,sort_order:y.value,page:o!=null?o:e.inAppPurchases.meta.current_page,row:c!=null?c:e.inAppPurchases.meta.per_page,search:S.value,type_filter:h.value},{preserveScroll:!0,preserveState:!0})}const $=[{label:a("action_label"),field:"action",type:"Action"},{label:a("payment__iap_prd_id"),field:"in_app_purchase_prd_id",type:"String",action:"Action",sort:!1},{label:a("payment__iap_desc"),field:"description",type:"String",action:"Action",sort:!1},{label:a("payment__iap_day"),field:e.dayKey,type:"Integer",action:"Action"},{label:a("payment__iap_type"),field:e.typeKey,type:"String",action:"Action"},{label:a("payment__iap_status"),field:e.statusKey,type:"String",action:"Action"}];function O(o){i.value.openModal(a("core__be_delete_promotion_iap"),a("core__be_delete_promotion_iap_info"),a("core__be_btn_confirm"),a("core__be_btn_cancel"),()=>{F.delete(route("promotion_in_app_purchase.destroy",o),{onSuccess:()=>{u.value=!0,setTimeout(()=>{u.value=!1},3e3)},onError:()=>{u.value=!0,setTimeout(()=>{u.value=!1},3e3)}})},()=>{})}return{columns:$,ps_danger_dialog:i,confirmDeleteClicked:O,colFilterOptions:B,visible:u,handleSorting:k,handleSearchingSorting:d,handleRow:C,handleSearching:m,handleTypefilter:_,selected_type:h}},computed:{breadcrumb(){return[{label:a("core__be_dashboard_label"),url:route("admin.index")},{label:a("promotion_in_app_purchase_module"),color:"text-primary-500"}]}},methods:{handleCreate(){this.$inertia.get(route("promotion_in_app_purchase.create"))},handleEdit(e){this.$inertia.get(route("promotion_in_app_purchase.edit",e))},handlePublish(e){this.$inertia.put(route("promotion_in_app_purchase.statusChange",e))},FilterOptionshandle(e){F.put(route("promotion_in_app_purchase.screenDisplayUiSetting.store"),{value:e,sort_field:this.sort_field,sort_order:this.sort_order,row:this.inAppPurchases.per_page,search:this.search.value,current_page:this.inAppPurchases.current_page},{preserveScroll:!0,preserveState:!0})}}}),ee={class:"rounded-md shadow-xs w-56"},te={class:"pt-2 z-30"},oe=["onClick"],re={key:0,class:"flex flex-row"};function ne(e,i,u,B,S,P){const y=s("Head"),h=s("ps-breadcrumb-2"),k=s("ps-banner-icon"),_=s("ps-icon"),m=s("ps-button"),C=s("ps-dropdown-select"),d=s("ps-label"),$=s("ps-dropdown"),O=s("ps-danger-dialog"),o=s("ps-toggle"),c=s("ps-table2"),D=s("ps-layout");return p(),v(H,null,[r(y,{title:e.$t("promotion_in_app_purchase_module")},null,8,["title"]),r(D,null,{default:n(()=>[r(h,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),e.visible?(p(),w(k,{key:0,visible:e.visible,theme:e.status.flag=="danger"?"bg-red-500":e.status.flag=="warning"?"bg-yellow-500":"bg-green-500",iconName:e.status.flag=="danger"?"close-circle":e.status.flag=="warning"?"alert-triangle":"rightalert",class:"text-white mb-4",iconColor:"white"},{default:n(()=>[f(g(e.status.msg),1)]),_:1},8,["visible","theme","iconName"])):b("",!0),r(c,{row:e.row,search:e.search,object:this.inAppPurchases,colFilterOptions:e.colFilterOptions,columns:e.columns,sort_field:e.sort_field,sort_order:e.sort_order,onFilterOptionshandle:e.FilterOptionshandle,onHandleSort:e.handleSorting,onHandleSearch:e.handleSearching,onHandleRow:e.handleRow,searchable:e.showFilter,globalSearchPlaceholder:e.$t("payment__be_search_iap_prd_id"),eye_filter:!1},{button:n(()=>[r(m,{onClick:i[0]||(i[0]=t=>e.handleCreate()),rounded:"rounded-lg",type:"button",class:"flex flex-wrap items-center"},{default:n(()=>[r(_,{name:"plus",class:"me-1 font-semibold"}),f(" "+g(e.$t("core__be_add_promotion_in_app_purchase")),1)]),_:1})]),responsive_button:n(()=>[r(m,{onClick:i[1]||(i[1]=t=>e.handleCreate()),rounded:"rounded-lg",type:"button",class:"flex flex-wrap items-center"},{default:n(()=>[r(_,{name:"plus",class:"me-1 font-semibold"}),f(" "+g(e.$t("core__be_add_promotion_in_app_purchase")),1)]),_:1})]),searchRight:n(()=>[r($,{align:"",class:"h-10"},{select:n(()=>[r(C,{class:"w-56",placeholder:e.$t("payment__be_type"),selectedValue:e.selected_type==""||e.selected_type=="all"?"":e.types.filter(t=>t.name==e.selected_type)[0].name},null,8,["placeholder","selectedValue"])]),list:n(()=>[j("div",ee,[j("div",te,[j("div",{class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:i[2]||(i[2]=t=>e.handleTypefilter("all"))},[r(d,{class:"text-gray-200 ms-2"},{default:n(()=>[f(g(e.$t("core__be_select_all")),1)]),_:1})]),(p(!0),v(H,null,I(e.types,t=>(p(),v("div",{key:t.id,class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:A=>e.handleTypefilter(t.name)},[r(d,{class:K(["ms-2",t.id==e.selected_type?" font-bold":""])},{default:n(()=>[f(g(t.name),1)]),_:2},1032,["class"])],8,oe))),128))])])]),_:1})]),tableActionRow:n(t=>[t.field=="action"?(p(),v("div",re,[t.row.authorizations.update?(p(),w(m,{key:0,onClick:A=>e.handleEdit(t.row.id),class:"me-2",rounded:"rounded-lg",colors:"bg-green-400 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-green-100",focus:"focus:outline-none focus:ring focus:ring-green-200"},{default:n(()=>[r(_,{theme:"text-white dark:text-primary-900",name:"editPencil",w:"16",h:"16"})]),_:2},1032,["onClick"])):b("",!0),t.row.authorizations.delete?(p(),w(m,{key:1,onClick:A=>e.confirmDeleteClicked(t.row.id),rounded:"rounded-lg",colors:"bg-red-400 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-red-100",focus:"focus:outline-none focus:ring focus:ring-red-200"},{default:n(()=>[r(_,{theme:"text-white dark:text-primary-900",name:"trash",w:"16",h:"16"})]),_:2},1032,["onClick"])):b("",!0),r(O,{ref:"ps_danger_dialog"},null,512)])):b("",!0)]),tableRow:n(t=>[t.field=="status"?(p(),w(o,{key:0,selectedValue:t.row.status==1,onClick:A=>e.handlePublish(t.row.core_keys_id)},null,8,["selectedValue","onClick"])):b("",!0)]),_:1},8,["row","search","object","colFilterOptions","columns","sort_field","sort_order","onFilterOptionshandle","onHandleSort","onHandleSearch","onHandleRow","searchable","globalSearchPlaceholder"])]),_:1})],64)}var Ne=Y(x,[["render",ne]]);export{Ne as default};

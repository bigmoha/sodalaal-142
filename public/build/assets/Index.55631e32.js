import{d as q,p as G,Z as W,H as N,i as s,I as J,B as h,O as T,o as c,c as F,b as r,w as o,f as C,q as b,t as v,g as y,a as S,F as L,s as K,n as Q,m as X,v as Y,r as i}from"./app.bcb0820c.js";import{P as x}from"./PsLayout.28577d6c.js";import{P as ee}from"./PsLabel.ba854ae6.js";import{P as te}from"./PsButton.6e47777c.js";import{P as oe}from"./PsTable2.945a4e74.js";import{P as re}from"./PsAlert.43832e70.js";import{P as ae}from"./PsBreadcrumb2.c24fe59b.js";import{d as se,c as le}from"./PsDangerDialog.45064bba.js";import{P as ne}from"./PsToggle.6d7ca6c8.js";import{P as ie}from"./PsIcon.71b0e9da.js";import{P as de}from"./PsCsvModal.13268042.js";import{P as ce}from"./PsBannerIcon.6e4a09ea.js";import{D as ue}from"./PsTableSearch.e2c5eca7.js";import{P as me}from"./PsDropdown.d345be0d.js";import{P as pe}from"./PsDropdownSelect.65e73a6d.js";import{P as he}from"./PsIconButton.6eb3a27f.js";import{a as fe}from"./psApiService.f68724c2.js";import{P as ge}from"./PsInput.096bf606.js";import{P as _e}from"./PsInputWithRightIcon.29f20201.js";import{_ as be}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsWarningDialog.89df77bf.js";import"./PsModal.fccd5c23.js";import"./vue-neat-modal.bb68220d.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.73b90a8b.js";import"./SidebarSubTab.1a8b9e94.js";import"./PsErrorDialog.d3e814f0.js";import"./PsSuccessDialog.c18e6651.js";import"./PsLoading.9d8c0dd0.js";import"./PsLabelCaption.e61a7806.js";import"./PsLoadingCircleDialog.1c2df66f.js";import"./moment.9709ab41.js";import"./PsIcon1.4226e037.js";import"./Icons.80b46b2b.js";import"./toggle.2d374629.js";import"./PsLabelHeader4.6bd3b47b.js";import"./PsLink1.b3ef6332.js";import"./PsDraggable.b90e2bf9.js";const ve=q({name:"Index",components:{PsDropdown:me,PsDropdownSelect:pe,Link:G,Head:W,PsLabel:ee,PsButton:te,PsTable2:oe,PsAlert:re,PsBreadcrumb2:ae,PsDangerDialog:se,PsToggle:ne,PsIcon:ie,PsCsvModal:de,PsBannerIcon:ce,Dropdown:ue,PsIconButton:he,PsTextButton:le,PsInput:ge,PsInputWithRightIcon:_e},layout:x,props:{can:Object,status:Object,categories:Object,subcategories:Object,owners:Object,hideShowFieldForFilterArr:Object,showCoreAndCustomFieldArr:Object,selectedCategory:{type:String,default:""},authUser:Object,sort_field:{type:String,default:""},sort_order:{type:String,default:"desc"},search:String},data(){return{form:N({csvFile:""})}},setup(e){const l=s(!1),U=s(!1);let O=e.search?s(e.search):s(""),D=e.sort_field?s(e.sort_field):s(""),j=e.sort_order?s(e.sort_order):s("desc"),w=e.selectedCategory?s(e.selectedCategory.id):s(""),f=s([]),P=s(!1),d=s(),u=s(!1);const $=s(),m=s();let g=s(!1);const B=s(),H=s();function A(a){$.value.openModal(h("core__delete"),h("core__comfirm_to_delete_subcategory"),h("core__be_btn_confirm"),h("core__be_btn_cancel"),()=>{this.$inertia.delete(route("subcategory.destroy",a),{onSuccess:()=>{g.value=!0,setTimeout(()=>{g.value=!1},3e3)},onError:()=>{g.value=!0,setTimeout(()=>{g.value=!1},3e3)}})},()=>{})}function I(a){D.value=a.field,j.value=a.sort_order,k()}function R(){w.value="all",k()}function V(a){w.value=a,k(1)}function t(){m.value.openModal(a=>{let n=N({csvFile:a,_method:"put"});T.post(route("subcategory.import.csv"),n)})}function p(a){O.value=a,k(1)}function M(a){k(1,a)}function k(a=null,n=null){T.get(route("subcategory.index"),{sort_field:D.value,sort_order:j.value,page:a!=null?a:e.subcategories.meta.current_page,row:n!=null?n:e.subcategories.meta.per_page,search:O.value,category_filter:w.value},{preserveScroll:!0,preserveState:!0})}function E(a){P.value=!0,u.value=!0,fe(a,d.value,e.authUser.id).then(n=>{n.data.length?n.data.forEach(z=>{f.value.push(z)}):P.value=!1,u.value=!1})}function Z(a=null){let n=f.value?f.value.length:0;(n==0||a==!0)&&E(n)}return J(d,_.debounce((a,n)=>{let z=0;f.value=[],E(z)},500)),{columns:H,ps_danger_dialog:$,confirmDeleteClicked:A,ps_csv_modal:m,csvUploadClicked:t,colFilterOptions:B,visible:g,showFilter:l,clearFilter:U,handleSorting:I,handleSearchingSorting:k,handleCategoryfilter:V,handleClearFilter:R,handleRow:M,handleSearching:p,selected_cat:w,dropdownClick:Z,categories:f,category_loadmore_visible:P,catSearch:d,is_loading:u}},created(){this.columns=this.showCoreAndCustomFieldArr.map(e=>({action:e.action,field:e.field,label:h(e.label),sort:e.sort,type:e.type})),this.colFilterOptions=this.hideShowFieldForFilterArr.map(e=>({hidden:e.hidden,id:e.id,key:h(e.key),key_id:e.key_id,label:h(e.label),module_name:e.module_name}))},computed:{breadcrumb(){return[{label:h("core__be_dashboard_label"),url:route("admin.index")},{label:h("subcategory_module"),color:"text-primary-500"}]}},methods:{handleCreate(){this.$inertia.get(route("subcategory.create"))},handleEdit(e){this.$inertia.get(route("subcategory.edit",e))},handlePublish(e,l){l&&this.$inertia.put(route("subcategory.statusChange",e))},FilterOptionshandle(e){T.put(route("subcategory.screenDisplayUiSetting.store"),{value:e,sort_field:this.sort_field,sort_order:this.sort_order,row:this.categories.per_page,search:this.search.value,current_page:this.categories.current_page},{preserveScroll:!0,preserveState:!0})}}}),ye={class:"rounded-md shadow-xs w-56"},we={class:"pt-2 z-30"},ke=["onClick"],Ce={class:"flex flex-row items-center justify-between"},Se={class:"mt-1 mx-1"},Pe={class:"flex flex-row"};function $e(e,l,U,O,D,j){const w=i("Head"),f=i("ps-breadcrumb-2"),P=i("ps-banner-icon"),d=i("ps-icon"),u=i("ps-button"),$=i("ps-dropdown-select"),m=i("ps-label"),g=i("ps-input-with-right-icon"),B=i("ps-dropdown"),H=i("ps-csv-modal"),A=i("ps-danger-dialog"),I=i("ps-toggle"),R=i("ps-table2"),V=i("ps-layout");return c(),F(L,null,[r(w,{title:e.$t("subcategory_module")},null,8,["title"]),r(V,null,{default:o(()=>[r(f,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),e.visible?(c(),C(P,{key:0,visible:e.visible,theme:e.status.flag=="danger"?"bg-red-500":e.status.flag=="warning"?"bg-yellow-500":"bg-green-500",iconName:e.status.flag=="danger"?"close-circle":e.status.flag=="warning"?"alert-triangle":"rightalert",class:"text-white mb-5 sm:mb-6 lg:mb-8",iconColor:"white"},{default:o(()=>[b(v(e.status.msg),1)]),_:1},8,["visible","theme","iconName"])):y("",!0),r(R,{row:e.row,search:e.search,object:this.subcategories,colFilterOptions:e.colFilterOptions,columns:e.columns,sort_field:e.sort_field,sort_order:e.sort_order,onFilterOptionshandle:e.FilterOptionshandle,onHandleSort:e.handleSorting,onHandleSearch:e.handleSearching,onHandleRow:e.handleRow,globalSearchPlaceholder:e.$t("core__be_search_subcategory"),searchable:e.showFilter},{button:o(()=>[e.can.createSubcategory?(c(),C(u,{key:0,onClick:l[0]||(l[0]=t=>e.handleCreate()),rounded:"rounded-lg",type:"button",class:"flex flex-wrap items-center"},{default:o(()=>[r(d,{name:"plus",class:"me-2 font-semibold"}),b(v(e.$t("core__be_add_subcategory")),1)]),_:1})):y("",!0)]),responsive_button:o(()=>[e.can.createSubcategory?(c(),C(u,{key:0,onClick:l[1]||(l[1]=t=>e.handleCreate()),rounded:"rounded-lg",type:"button",class:"flex flex-wrap items-center"},{default:o(()=>[r(d,{name:"plus",class:"me-2 font-semibold"}),b(v(e.$t("core__be_add_subcategory")),1)]),_:1})):y("",!0)]),searchRight:o(()=>[r(B,{onOnClick:e.dropdownClick,align:"",class:"lg:w-56 md:40 h-10 sm:w-full"},{select:o(()=>[r($,{placeholder:e.$t("core__be_category"),border:e.selected_cat!==""&&e.selected_cat!=="all"?"border border-indigo-500/100":"border border-1 border-secondary-200",selectedValue:e.selected_cat==""||e.selected_cat=="all"?"":e.selectedCategory.name},null,8,["placeholder","border","selectedValue"])]),list:o(()=>[S("div",ye,[S("div",we,[S("div",{class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:l[2]||(l[2]=t=>e.handleCategoryfilter("all"))},[r(m,{class:"text-gray-200 ms-2"},{default:o(()=>[b(v(e.$t("core__be_select_all")),1)]),_:1})]),(c(!0),F(L,null,K(e.categories,t=>(c(),F("div",{key:t.id,class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:p=>e.handleCategoryfilter(t.id)},[r(m,{class:Q(["ms-2",t.id==e.selected_cat?" font-bold":""])},{default:o(()=>[b(v(t.name),1)]),_:2},1032,["class"])],8,ke))),128))])])]),loadmore:o(()=>[e.category_loadmore_visible?(c(),F("div",{key:0,onClick:l[3]||(l[3]=t=>e.dropdownClick(!0)),class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center"},[S("div",Ce,[r(m,{class:"ms-2"},{default:o(()=>[b(v(e.is_loading?e.$t("core__be_loading"):e.$t("core__be_load_more")),1)]),_:1}),r(d,{theme:"text-black dark:text-primary-900",name:"load",w:"16",h:"16"})])])):y("",!0)]),filter:o(()=>[S("div",Se,[r(g,{class:"w-full h-10",rounded:"rounded-lg",value:e.catSearch,"onUpdate:value":l[4]||(l[4]=t=>e.catSearch=t),placeholder:e.$t("core__be_search")},{icon:o(()=>[r(d,{name:"search",class:"cursor-pointer"})]),_:1},8,["value","placeholder"])])]),_:1},8,["onOnClick"])]),searchLeft:o(()=>[e.can.createSubcategory?(c(),C(u,{key:0,onClick:e.csvUploadClicked,rounded:"rounded",class:"flex flex-wrap items-center ms-3"},{default:o(()=>[r(d,{name:"plus",class:"me-2 font-semibold"}),r(m,{textColor:"text-white dark:text-secondary-800"},{default:o(()=>[b(v(e.$t("core__be_import_file")),1)]),_:1})]),_:1},8,["onClick"])):y("",!0),r(H,{ref:"ps_csv_modal",url:"https://drive.google.com/file/d/1PtFk3RrBH5AhMZzo-6Ga_tP8yE3flwUm/view?usp=sharing"},null,512)]),tableActionRow:o(t=>[t.field=="action"?(c(),C(m,{key:0},{default:o(()=>[S("div",Pe,[r(u,{disabled:!t.row.authorization.update,onClick:p=>e.handleEdit(t.row.id),class:"me-2",colors:"bg-green-400 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-green-100",focus:"focus:outline-none focus:ring focus:ring-green-200"},{default:o(()=>[r(d,{theme:"text-white dark:text-primary-900",name:"editPencil",w:"16",h:"16"})]),_:2},1032,["disabled","onClick"]),r(u,{disabled:!t.row.authorization.delete,onClick:p=>e.confirmDeleteClicked(t.row.id),colors:"bg-red-400 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-red-100",focus:"focus:outline-none focus:ring focus:ring-red-200"},{default:o(()=>[r(d,{theme:"text-white dark:text-primary-900",name:"trash",w:"16",h:"16"})]),_:2},1032,["disabled","onClick"]),r(A,{ref:"ps_danger_dialog"},null,512)])]),_:2},1024)):y("",!0)]),tableRow:o(t=>[t.field=="status"?X((c(),C(m,{key:0},{default:o(()=>[r(I,{disabled:!t.row.authorization.update,selectedValue:t.row.status==1,onClick:p=>e.handlePublish(t.row.id,t.row.authorization.update)},null,8,["disabled","selectedValue","onClick"])]),_:2},1536)),[[Y,e.colFilterOptions.filter(p=>p.key=="status").length==0?!0:!e.colFilterOptions.filter(p=>p.key=="status")[0].hidden]]):y("",!0)]),_:1},8,["row","search","object","colFilterOptions","columns","sort_field","sort_order","onFilterOptionshandle","onHandleSort","onHandleSearch","onHandleRow","globalSearchPlaceholder","searchable"])]),_:1})],64)}var mt=be(ve,[["render",$e]]);export{mt as default};

import{a as K,b as Q,P as X}from"./PsLayout.28577d6c.js";import{d as ee,Z as oe,p as se,i as n,I as re,B as e,o as l,c as _,b as t,w as i,a as d,q as g,t as y,f as k,F as T,s as x,n as z,g as V,H as C,O as b,r as c}from"./app.bcb0820c.js";import{h as te}from"./moment.9709ab41.js";import{P as ae}from"./PsBannerIcon.6e4a09ea.js";import{P as le}from"./PsInput.096bf606.js";import{P as ie}from"./PsLabel.ba854ae6.js";import{P as ne}from"./PsButton.6e47777c.js";import{P as ce}from"./PsTextarea.f8e79b57.js";import{P as de}from"./PsLabelHeader4.6bd3b47b.js";import{P as _e}from"./PsIcon.71b0e9da.js";import{d as pe}from"./PsDangerDialog.45064bba.js";import{P as ue}from"./PsErrorDialog.d3e814f0.js";import{P as me}from"./PsToggle.6d7ca6c8.js";import{P as be}from"./PsBreadcrumb2.c24fe59b.js";import{P as ge}from"./PsCard.6a2e47ce.js";import{P as fe}from"./PsInputWithRightIcon.29f20201.js";import{P as he}from"./PsLoadingCircleDialog.1c2df66f.js";import{P as ve}from"./PsSuccessDialog.c18e6651.js";import{P as ye}from"./PsWarningDialog.89df77bf.js";import{P as ke}from"./PsDropdown.d345be0d.js";import{P as we}from"./PsDropdownSelect.65e73a6d.js";import{_ as Me}from"./plugin-vue_export-helper.21dcd24c.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.73b90a8b.js";import"./SidebarSubTab.1a8b9e94.js";import"./PsModal.fccd5c23.js";import"./vue-neat-modal.bb68220d.js";import"./PsLoading.9d8c0dd0.js";import"./PsLabelCaption.e61a7806.js";import"./PsIcon1.4226e037.js";import"./Icons.80b46b2b.js";import"./toggle.2d374629.js";const Pe=ee({name:"Index",components:{Head:oe,Link:se,PsInput:le,PsLabel:ie,PsErrorDialog:ue,PsBannerIcon:ae,PsButton:ne,PsTextarea:ce,PsLabelHeader4:de,PsIcon:_e,PsConfirmDialog:K,PsWarningDialog:ye,PsDangerDialog:pe,PsToggle:me,PsBreadcrumb2:be,PsCard:ge,PsInputWithRightIcon:fe,PsSuccessDialog:ve,PsLoadingCircleDialog:he,PsDropdownSelect:we,PsDropdown:ke,PsLicenseActivateModal:Q},layout:X,props:["purchaseCodeOrUrlNotSame","project","builderApiOverwrite","errors","replace_status","replace_message","purchased_code","status","logMessages","needRefresh","hasError","activatedFileName","selectedZipFileName","zipFileName","can","tableUsedTypes","tableUsedTypeId","status","tables","importSuccessMsg","importedFileName","diffIds","recentImportedFileName","search","loadMore","sorting","baseProjectSameMsg","baseProjectNotSameMsg"],setup(o){const f=n(),N=o.sorting==0?n(!1):n(!0),w=o.search?n(o.search):n(""),F=o.loadMore==0?n(!1):n(!0),j=n(),a=n(),M=n(),u=n(),p=n(),m=o.tableUsedTypeId?n(o.tableUsedTypeId):n(99);let P=n();const S=n(),I=n();function B(){let r=e("core__be_btn_reload");M.value.openModal(e("core__be_awesome_title"),e("core__be_impport_success_note"),r,()=>{location.reload(!0)},!1)}function L(r){const v=r.target.files;P.value=v[0],u.value.openModal(e("core__be_import_confimation_title"),e("core__be_import_confimation_note"),e("core__be_btn_confirm"),e("btn_cancel"),()=>{E(P.value)},()=>{})}function A(r){u.value.openModal(e("core__be_import_confirmation"),e("core__be_want_import_zip_file"),e("core__be_btn_confirm"),e("core__be_btn_cancel"),()=>{D(r)},()=>{})}function D(r){let v=C({selectedFileName:r});a.value.openModal(e("core__be_importing_title"),e("core__be_importing_note")),b.post(route("table.import.zip"),v,{onBefore:()=>{a.value.openModal(e("core__be_importing_title"),e("core__be_importing_note"))},onSuccess:J=>{a.value.closeModal()},onError:()=>{a.value.closeModal()}})}function E(r){let v=C({zipFile:r,zipFileName:r.name});a.value.openModal(e("core__be_importing_title"),e("core__be_importing_note")),b.post(route("table.import.zip"),v,{onBefore:()=>{a.value.openModal(e("core__be_importing_title"),e("core__be_importing_note"))},onSuccess:J=>{a.value.closeModal()},onError:()=>{a.value.closeModal()}})}function $(){M.value.openModal(e("license_activation_success"),e("license_activation_success_finish_msg"),e("setup_project"),()=>{let r=C({zipFileName:o.zipFileName});this.$inertia.get(route("table.index"),r)},!1)}function U(r){S.value.openModal(e("core__be_error_import_title"),r,e("core__be_btn_ok"),()=>{})}function O(){p.value.openModal(e("core__be_overwrite_table_title"),e("core__be_overwrite_table_note"),e("core__be_btn_confirm"),e("btn_cancel"),()=>{let r=C({diffIds:o.diffIds,recentImportedFileName:o.recentImportedFileName});b.post(route("table.field.override"),r,{onBefore:()=>{a.value.openModal(e("core__be_importing_title"),e("core__be_importing_note"))},onSuccess:v=>{a.value.closeModal()},onError:()=>{a.value.closeModal()}})},()=>{let r=C({recentImportedFileName:o.recentImportedFileName});b.post(route("table.field.override"),r,{onBefore:()=>{a.value.openModal(e("core__be_importing_title"),e("core__be_importing_note"))},onSuccess:()=>{a.value.closeModal()},onError:()=>{a.value.closeModal()}})})}function s(r){this.$inertia.get(route("tables.fields.index",[r]),{symbol:localStorage.activeLanguage?localStorage.activeLanguage:"en"})}function h(){p.value.openModal(e("core__be_replace_table_title"),e("core__be_replace_table_note"),e("core__be_btn_confirm"),e("btn_cancel"),()=>{let r=C({importedFileName:o.importedFileName});a.value.openModal(e("core__be_importing_title"),e("core__be_importing_note")),b.post(route("table.field.handleProjectNotSame"),r,{onBefore:()=>{a.value.openModal(e("core__be_importing_title"),e("core__be_importing_note"))},onSuccess:v=>{a.value.closeModal()},onError:()=>{a.value.closeModal()}})},()=>{})}function R(){b.get(route("table.index"),{sorting:N.value==!1?0:1,loading:F.value==!1?0:1,search:w.value,tableUsedTypeId:m.value})}function H(){u.value.openModal(e("core__be_replace_project_title"),e("core__be_replace_project_confirmation"),e("core__be_btn_confirm"),e("core__be_btn_cancel"),()=>{a.value.openModal(e("core__be_importing_title"),e("core__be_importing_note")),b.get(route("table.do_replace"))},()=>{},e("core__be_replace_project_warning"))}function Z(){I.value.openModal(e("pls_activate_your_app"),"You have successfully imported the file.","Back",()=>{},!1)}re(w,r=>{setTimeout(()=>{b.get(route("table.index"),{sorting:N.value==!1?0:1,loading:F.value==!1?0:1,search:w.value,tableUsedTypeId:m.value})},2e3)});function W(r){m.value=r,b.get(route("table.index"),{sorting:N.value==!1?0:1,loading:F.value==!1?0:1,search:w.value,tableUsedTypeId:m.value})}function q(){j.value.click()}function Y(r){S.value.openModal(e("ps_error_dialog__error"),r,e("core__be_btn_ok"),()=>{})}function G(r){M.value.openModal(e("ps_success_dialog__success"),r,e("core__be_btn_ok"),()=>{location.reload(!0)})}return{showErrorDialog:Y,showSuccessDialog:G,moment:te,handleImport:L,usedTypeClicked:W,handleBaseProjectNotSame:U,ps_danger_dialog:f,ps_error_dialog:S,route,handleOverride:O,handleDetail:s,sortingClicked:R,isSorting:N,search:w,importClicked:q,importFile:j,ps_success_dialog:M,ps_loading_circle_dialog:a,handleBaseProjectSame:h,openSuccessDialog:B,ps_confirm_dialog:u,ps_warning_dialog:p,usedTypeSearch:m,handleAlreadySelectedImport:A,doAlreadySelectedImport:D,openLicenseActivateModal:Z,confirmToReplaceModal:H,ps_license_activate_modal:I,openLicenseActivateSuccessDialog:$}},created(){},mounted(){this.zipFileName&&this.handleAlreadySelectedImport(this.zipFileName),this.purchaseCodeOrUrlNotSame&&this.openLicenseActivateModal(),this.builderApiOverwrite&&this.confirmToReplaceModal(),this.replace_status&&(this.replace_status=="error"?this.showErrorDialog(this.replace_message):this.showSuccessDialog(this.replace_message)),this.hasError===0&&this.openLicenseActivateSuccessDialog()},beforeUpdate(){this.diffIds&&this.diffIds.length&&this.handleOverride(),this.purchaseCodeOrUrlNotSame&&this.openLicenseActivateModal(),this.builderApiOverwrite&&this.confirmToReplaceModal(),this.replace_status&&(this.replace_status=="error"?this.showErrorDialog(this.replace_message):this.showSuccessDialog(this.replace_message)),this.hasError===0&&this.openLicenseActivateSuccessDialog(),this.baseProjectNotSameMsg&&this.handleBaseProjectNotSame(this.baseProjectNotSameMsg),this.baseProjectSameMsg&&this.handleBaseProjectSame(),this.importSuccessMsg&&this.openSuccessDialog(),this.zipFileName&&this.handleAlreadySelectedImport(this.zipFileName)},computed:{breadcrumb(){return[{label:e("core__be_dashboard_label"),url:route("admin.index")},{label:e("table_setting_group"),color:"text-primary-500"}]}}}),Se={class:"min-h-screen"},Ce={class:"mt-4 sm:mt-6 lg:mt-10 mb-4 lg:mb-6 flex flex-col sm:flex-row justify-between"},Ne={class:"flex flex-row justify-between mb-4 sm:mb-0"},Te={class:"flex sm:hidden"},Fe={class:"rounded-md shadow-xs w-40"},Ie={class:"pt-2"},De={key:0},xe=g("Create new currency"),je={key:1},Be=["onClick"],Le={class:"flex flex-row"},Ae={class:"sm:flex hidden me-4"},Ee={class:"rounded-md shadow-xs w-40"},$e={class:"pt-2"},Ue={key:0},Oe=g("Create new currency"),ze={key:1},Ve=["onClick"],Re={class:"w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-6"},He=["onClick"],Ze={class:"pe-4 border-r border-secondary-200 flex items-center justify-center"},We={class:"flex-grow px-4"},qe={class:"flex rtl:space-x-reverse space-x-1 mt-1"},Ye={key:0,class:"mt-6 lg:mt-8 flex items-center justify-end rtl:space-x-reverse space-x-1"},Ge={class:"flex"};function Je(o,f,N,w,F,j){const a=c("Head"),M=c("ps-breadcrumb-2"),u=c("ps-icon"),p=c("ps-label"),m=c("ps-button"),P=c("ps-dropdown-select"),S=c("ps-dropdown"),I=c("ps-input-with-right-icon"),B=c("Link"),L=c("ps-loading-circle-dialog"),A=c("ps-success-dialog"),D=c("ps-confirm-dialog"),E=c("ps-warning-dialog"),$=c("ps-error-dialog"),U=c("ps-license-activate-modal"),O=c("ps-layout");return l(),_(T,null,[t(a,{title:o.$t("table_setting_group")},null,8,["title"]),t(O,null,{default:i(()=>[d("div",Se,[t(M,{items:o.breadcrumb,class:"mb-4 sm:mb-0"},null,8,["items"]),d("div",Ce,[d("div",Ne,[t(m,{onClick:o.sortingClicked,colors:"bg-background dark:bg-backgroundDark",border:"border-secondary-200 border dark:border-secondary-100",shadow:"shadow-sm",focus:"focus:outline-none",hover:"hover:outline-none hover:bg-secondary-200"},{default:i(()=>[t(u,{name:"sort",class:"cursor-pointer me-2"}),t(p,{textColor:"text-secondary-800 dark:text-secondary-100 text-sm"},{default:i(()=>[g(y(o.$t("core__be_sort_by_name")),1)]),_:1})]),_:1},8,["onClick"]),d("div",Te,[t(S,{align:"",class:"w-40 h-10"},{select:i(()=>[o.usedTypeSearch==99?(l(),k(P,{key:0,class:"w-40",placeholder:"Choose Table Used Type",showCenter:!0,selectedValue:"Null (temp)"})):(l(),k(P,{key:1,class:"w-40",placeholder:"Choose Table Used Type",showCenter:!0,selectedValue:o.usedTypeSearch==""?"":o.tableUsedTypes.filter(s=>s.id==o.usedTypeSearch)[0].name},null,8,["selectedValue"]))]),list:i(()=>[d("div",Fe,[d("div",Ie,[o.tableUsedTypes.length==null?(l(),_("div",De,[t(p,{class:"p-2 flex",onClick:f[0]||(f[0]=s=>o.route("core_key_type.index"))},{default:i(()=>[xe]),_:1})])):(l(),_("div",je,[(l(!0),_(T,null,x(o.tableUsedTypes,s=>(l(),_("div",{key:s.id,class:"w-40 flex py-4 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:h=>o.usedTypeClicked(s.id)},[t(p,{class:z(["ms-2",s.id==o.usedTypeSearch?" font-bold":""])},{default:i(()=>[g(y(s.name),1)]),_:2},1032,["class"])],8,Be))),128))]))])])]),_:1})])]),d("div",Le,[d("div",Ae,[t(S,{align:"",class:"w-40 h-10"},{select:i(()=>[t(P,{class:"w-40",placeholder:"Choose Table Used Type",showCenter:!0,selectedValue:o.usedTypeSearch==""?"":o.tableUsedTypes.filter(s=>s.id==o.usedTypeSearch)[0].name},null,8,["selectedValue"])]),list:i(()=>[d("div",Ee,[d("div",$e,[o.tableUsedTypes.length==null?(l(),_("div",Ue,[t(p,{class:"p-2 flex",onClick:f[1]||(f[1]=s=>o.route("core_key_type.index"))},{default:i(()=>[Oe]),_:1})])):(l(),_("div",ze,[(l(!0),_(T,null,x(o.tableUsedTypes,s=>(l(),_("div",{key:s.id,class:"w-40 flex py-4 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:h=>o.usedTypeClicked(s.id)},[t(p,{class:z(["ms-2",s.id==o.usedTypeSearch?" font-bold":""])},{default:i(()=>[g(y(s.name),1)]),_:2},1032,["class"])],8,Ve))),128))]))])])]),_:1})]),t(I,{value:o.search,"onUpdate:value":f[2]||(f[2]=s=>o.search=s),class:"w-full sm:w-80",rounded:"rounded-lg",placeholder:o.$t("core__be_search")},{icon:i(()=>[t(u,{name:"search",class:"cursor-pointer"})]),_:1},8,["value","placeholder"])])]),d("div",Re,[(l(!0),_(T,null,x(o.tables.data,s=>(l(),_("div",{onClick:h=>o.handleDetail(s.id),key:s.id,class:"cursor-pointer border border-secondary-200 shadow-sm rounded flex flex-row p-4"},[d("div",Ze,[t(u,{name:"box",theme:"text-secondary-800 dark:text-secondary-50"})]),d("div",We,[t(p,{class:"text-lg"},{default:i(()=>[g(y(s.name),1)]),_:2},1024),d("div",qe,[t(p,{class:"bg-blue-100 dark:bg-primary-800 p-1 rounded text-xs",textColor:"text-blue-800 dark:text-blue-100"},{default:i(()=>[g(y(o.$t("core__be_core_fields")),1)]),_:1}),s.is_only_for_core_field!=1?(l(),k(p,{key:0,class:"bg-yellow-100 p-1 rounded text-xs",textColor:"text-yellow-800"},{default:i(()=>[g(y(o.$t("core__be_custom_fields")),1)]),_:1})):V("",!0)])])],8,He))),128))]),Object.keys(o.tables.data).length>0?(l(),_("div",Ye,[(l(!0),_(T,null,x(o.tables.meta.links,(s,h)=>(l(),k(B,{key:h,href:s.url?s.url:"",class:"h-8 rounded bg-white dark:bg-secondaryDark-black"},{default:i(()=>[d("div",Ge,[h==0?(l(),k(m,{key:0,hover:"",focus:"",colors:"bg-background dark:bg-backgroundDark hover:bg-secondary-100",class:"mt-0.5",padding:"py-2 px-2",border:"border border-secodnary-200 dark:border-secodnary-100 "},{default:i(()=>[t(u,{name:"doubleArrowLeft",w:"16",h:"16"})]),_:1})):h==Object.keys(o.tables.meta.links).length-1?(l(),k(m,{key:1,colors:"bg-background dark:bg-backgroundDark hover:bg-secondary-100",class:"mt-0.5",padding:"py-2 px-2",hover:"",focus:"",border:"border border-secodnary-200  dark:border-secodnary-100"},{default:i(()=>[t(u,{name:"doubleArrowRight",w:"16",h:"16"})]),_:1})):(l(),k(m,{key:2,rounded:"rounded",colors:"bg-white",border:"border border-gray-200 rounded",class:z(s.active?"bg-indigo-500 text-white":"hover:text-gray-500 dark:bg-backgroundDark hover:bg-gray-200"),padding:"py-2 px-4"},{default:i(()=>[g(y(s.label),1)]),_:2},1032,["class"]))])]),_:2},1032,["href"]))),128))])):V("",!0)]),t(L,{ref:"ps_loading_circle_dialog"},null,512),t(A,{ref:"ps_success_dialog"},null,512),t(D,{ref:"ps_confirm_dialog"},null,512),t(E,{ref:"ps_warning_dialog"},null,512),t($,{ref:"ps_error_dialog"},null,512),t(U,{selectedZipFileName:o.selectedZipFileName,isCountDownShow:!1,hasError:o.hasError,logMessages:o.logMessages,status:o.status,purchased_code:o.purchased_code,project:o.project,errors:o.errors,systemCode2:o.systemCode2,ref:"ps_license_activate_modal"},null,8,["selectedZipFileName","hasError","logMessages","status","purchased_code","project","errors","systemCode2"])]),_:1})],64)}var Do=Me(Pe,[["render",Je]]);export{Do as default};

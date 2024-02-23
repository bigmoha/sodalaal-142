import{d as E,Z as H,H as z,y as N,i as V,B as A,o as a,c as r,b as l,w as n,a as m,q as c,t as p,h as K,F as y,s as h,g as b,f as k,m as D,u as U,r as i}from"./app.bcb0820c.js";import{P as q}from"./PsLayout.28577d6c.js";import O from"./CheckBox.d8d52ed8.js";import{P as R}from"./PsRadioValue.ef17e547.js";import{D as Z}from"./DatePicker.30ccdba0.js";import{P as G}from"./PsInput.096bf606.js";import{P as J}from"./PsLabel.ba854ae6.js";import{P as Q}from"./PsButton.6e47777c.js";import{P as W}from"./PsTextarea.f8e79b57.js";import{P as X,d as Y}from"./PsDangerDialog.45064bba.js";import{P as F}from"./PsBreadcrumb2.c24fe59b.js";import{P as ee}from"./PsDropdown.d345be0d.js";import{P as te}from"./PsDropdownSelect.65e73a6d.js";import{P as oe}from"./PsCard.6a2e47ce.js";import{P as se}from"./PsLabelCaption.e61a7806.js";import{P as ae}from"./PsVideoUpload.fd32e847.js";import{P as le}from"./PsLabelTitle3.857bf4b8.js";import{P as re}from"./PsIcon.71b0e9da.js";import{P as ne}from"./PsLoading.9d8c0dd0.js";import{P as ie}from"./PsCheckboxValue.d67e394b.js";import{a as de,P as me}from"./PsActionModal.619893d0.js";import{P as ue}from"./PsImageUpload.feb8acc0.js";import{P as pe}from"./PsToggle.6d7ca6c8.js";import{_ as ce}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsWarningDialog.89df77bf.js";import"./PsModal.fccd5c23.js";import"./vue-neat-modal.bb68220d.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.73b90a8b.js";import"./SidebarSubTab.1a8b9e94.js";import"./PsErrorDialog.d3e814f0.js";import"./PsInputWithRightIcon.29f20201.js";import"./PsSuccessDialog.c18e6651.js";import"./PsBannerIcon.6e4a09ea.js";import"./PsIcon1.4226e037.js";import"./Icons.80b46b2b.js";import"./PsLoadingCircleDialog.1c2df66f.js";import"./main.7d6b6908.js";import"./index.edd1d404.js";import"./PsDraggable.b90e2bf9.js";import"./PsLabelHeader4.6bd3b47b.js";import"./toggle.2d374629.js";const fe=E({name:"Edit",components:{Head:H,CheckBox:O,PsToggle:pe,DatePicker:Z,PsInput:G,PsRadioValue:R,PsLabel:J,PsButton:Q,PsTextarea:W,PsLabelHeader6:X,PsDropdown:ee,PsDropdownSelect:te,PsCard:oe,PsBreadcrumb2:F,PsLabelCaption:se,PsImageUpload:ue,PsIcon:re,PsLoading:ne,PsCheckboxValue:ie,PsActionModal:de,PsImageIconModal:me,PsDangerDialog:Y,PsVideoUpload:ae,PsLabelTitle3:le},layout:q,props:["errors","coreFieldFilterSettings","role","modules","customizeHeaders","customizeDetails","permissions","rolePermissions"],setup(e){let o=z({name:e.role.name,description:e.role.description,can_access_admin_panel:e.role.can_access_admin_panel,permissions:[],_method:"put"}),g=N([]),w=V(!1);const P=V(!1),v=V(!1);for(let s=0;s<e.modules.length;s++)g[e.modules[s].id]=[];for(let s=0;s<e.modules.length;s++)for(let d=0;d<e.rolePermissions.length;d++)e.rolePermissions[d].module_id==e.modules[s].id&&(g[e.modules[s].id]=e.rolePermissions[d].permission_id.split(","),o.permissions[e.modules[s].id]=e.rolePermissions[d].permission_id);function $(s){o.permissions[s]=g[s].toString()}function S(){this.$inertia.get(route("user_role.index"))}function C(){this.$inertia.post(route("user_role.update",e.role.id),o,{forceFormData:!0,onBefore:()=>{P.value=!0},onSuccess:()=>{P.value=!1,v.value=!0,setTimeout(()=>{v.value=!1},2e3)},onError:()=>{P.value=!1}})}function f(){for(let s=0;s<e.modules.length;s++){for(let d=0;d<e.permissions.length;d++)w.value?g[e.modules[s].id][d]=e.permissions[d].id:g[e.modules[s].id]=[];o.permissions[e.modules[s].id]=g[e.modules[s].id].toString()}}function x(){o.can_access_admin_panel=!o.can_access_admin_panel}return{handleUserMultiSelect:$,handleAdminPanelAccess:x,handleSubmit:C,toogleSelectAll:f,form:o,booleanPermission:g,selectAll:w,handleCancel:S,loading:P,success:v}},computed:{breadcrumb(){return[{label:A("core__be_dashboard_label"),url:route("admin.index")},{label:A("user_role_module"),url:route("user_role.index")},{label:A("core__be_edit_user_role"),color:"text-primary-500"}]}}}),_e={class:"rounded-xl"},be={class:"bg-primary-50 dark:bg-primary-900 py-2.5 ps-4 rounded-t-xl"},ge={class:"px-4 pt-6 dark:bg-backgroundDark"},ye={class:"grid w-full sm:w-1/2 gap-6"},Pe={key:0,class:"text-red-800 font-medium ms-1"},he={key:0,class:"text-red-800 font-medium ms-1"},ve={key:0,class:"text-red-800 font-medium ms-1"},ke={class:"px-4 pb-6 flex flex-row justify-between items-center"},we=c("Allow Modules"),$e={class:"flex flex-row items-center"},Se=c("Select all "),Ce={class:"flex flex-row items-center"},xe=["onUpdate:modelValue","onChange","id","value"],Ve={class:"flex flex-row justify-end mb-2.5"},Ae={key:2,class:"transition-all duration-300"},Be={key:3,class:""};function De(e,o,g,w,P,v){const $=i("Head"),S=i("ps-breadcrumb-2"),C=i("ps-label-header-6"),f=i("ps-label"),x=i("ps-input"),s=i("ps-label-caption"),d=i("ps-textarea"),I=i("ps-toggle"),B=i("ps-button"),L=i("ps-loading"),M=i("ps-icon"),T=i("ps-card"),j=i("ps-layout");return a(),r(y,null,[l($,{title:e.$t("core__be_edit_user_role")},null,8,["title"]),l(j,null,{default:n(()=>[l(S,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),l(T,{class:"w-full h-auto"},{default:n(()=>[m("div",_e,[m("div",be,[l(C,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:n(()=>[c(p(e.$t("core__be_user_role_info")),1)]),_:1})]),m("div",ge,[m("form",{onSubmit:o[6]||(o[6]=K((...t)=>e.handleSubmit&&e.handleSubmit(...t),["prevent"]))},[m("div",ye,[(a(!0),r(y,null,h(e.coreFieldFilterSettings.filter(t=>t.original_field_name==="name"&&t.enable===1&&t.is_delete===0),(t,u)=>(a(),r("div",{key:u},[l(f,{class:"text-base"},{default:n(()=>[c(p(e.$t(t.label_name))+" ",1),(t.mandatory=1)?(a(),r("span",Pe,"*")):b("",!0)]),_:2},1024),l(x,{ref_for:!0,ref:"name",type:"text",value:e.form.name,"onUpdate:value":o[0]||(o[0]=_=>e.form.name=_),placeholder:e.$t(t.placeholder),onKeyup:_=>t.mandatory==1?e.validateEmptyInput("name",e.form.name):"",onBlur:_=>t.mandatory==1?e.validateEmptyInput("name",e.form.name):""},null,8,["value","placeholder","onKeyup","onBlur"]),t.mandatory==1?(a(),k(s,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:n(()=>[c(p(e.errors.name),1)]),_:1})):b("",!0)]))),128)),(a(!0),r(y,null,h(e.coreFieldFilterSettings.filter(t=>t.original_field_name==="description"&&t.enable===1&&t.is_delete===0),(t,u)=>(a(),r("div",{key:u},[l(f,{class:"text-base"},{default:n(()=>[c(p(e.$t(t.label_name))+" ",1),t.mandatory==1?(a(),r("span",he,"*")):b("",!0)]),_:2},1024),l(d,{rows:"4",value:e.form.description,"onUpdate:value":o[1]||(o[1]=_=>e.form.description=_),placeholder:e.$t(t.description)},null,8,["value","placeholder"]),t.mandatory==1?(a(),k(s,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:n(()=>[c(p(e.errors.description),1)]),_:1})):b("",!0)]))),128)),(a(!0),r(y,null,h(e.coreFieldFilterSettings.filter(t=>t.original_field_name==="can_access_admin_panel"&&t.enable===1&&t.is_delete===0),(t,u)=>(a(),r("div",{class:"flex justify-between items-center",key:u},[l(f,{class:"text-base"},{default:n(()=>[c(p(e.$t(t.label_name))+" ",1),t.mandatory==1?(a(),r("span",ve,"*")):b("",!0)]),_:2},1024),l(I,{onClick:o[2]||(o[2]=_=>e.handleAdminPanelAccess()),selectedValue:e.form.can_access_admin_panel==1,toggleOnTheme:"bg-primary-500 border-primary-500 "},null,8,["selectedValue"])]))),128)),m("div",ke,[l(f,{class:"text-base font-medium"},{default:n(()=>[we]),_:1}),m("div",$e,[D(m("input",{"onUpdate:modelValue":o[3]||(o[3]=t=>e.selectAll=t),onChange:o[4]||(o[4]=t=>e.toogleSelectAll()),class:"me-2 border-1 border-secondary-200 rounded",type:"checkbox"},null,544),[[U,e.selectAll]]),l(f,{class:"text-base font-light"},{default:n(()=>[Se]),_:1})])]),m("div",null,[(a(!0),r(y,null,h(e.modules,t=>(a(),r("div",{class:"px-4 pb-5 flex flex-row justify-between items-center",key:t.id},[l(f,{class:"text-sm"},{default:n(()=>[c(p(e.$t(t.lang_key)),1)]),_:2},1024),m("div",Ce,[(a(!0),r(y,null,h(e.permissions,u=>(a(),r("div",{class:"flex flex-row me-2 items-center",key:u.id},[D(m("input",{"onUpdate:modelValue":_=>e.booleanPermission[t.id]=_,onChange:_=>e.handleUserMultiSelect(t.id),class:"me-2 border-1 border-secondary-200 rounded",type:"checkbox",id:u.id,value:u.id},null,40,xe),[[U,e.booleanPermission[t.id]]]),l(f,{class:"text-base font-light",for:u.id},{default:n(()=>[c(p(u.title),1)]),_:2},1032,["for"])]))),128))])]))),128))]),m("div",Ve,[l(B,{onClick:o[5]||(o[5]=t=>e.handleCancel()),textSize:"text-base",type:"reset",class:"me-4",colors:"text-primary-500",focus:"",hover:""},{default:n(()=>[c(p(e.$t("core__be_btn_cancel")),1)]),_:1}),l(B,{class:"transition-all duration-300 min-w-3xs",padding:"px-7 py-2",rounded:"rounded",hover:"",focus:""},{default:n(()=>[e.loading?(a(),k(L,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):b("",!0),e.success?(a(),k(M,{key:1,name:"check",w:"20",h:"20",class:"me-1.5 transition-all duration-300"})):b("",!0),e.success?(a(),r("span",Ae,p(e.$t("core__be_btn_saved")),1)):b("",!0),!e.loading&&!e.success?(a(),r("span",Be,p(e.$t("core__be_btn_save")),1)):b("",!0)]),_:1})])])],32)])])]),_:1})]),_:1})],64)}var vt=ce(fe,[["render",De]]);export{vt as default};

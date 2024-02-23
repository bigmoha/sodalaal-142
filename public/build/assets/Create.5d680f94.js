import{d as j,Z as E,H as z,i as V,y as N,B as A,o as s,c as n,b as a,w as l,a as d,q as p,t as u,h as K,F as g,s as h,g as _,f as k,m as D,u as U,r as i}from"./app.bcb0820c.js";import{P as q}from"./PsLayout.28577d6c.js";import O from"./CheckBox.d8d52ed8.js";import{P as R}from"./PsRadioValue.ef17e547.js";import{D as Z}from"./DatePicker.30ccdba0.js";import{P as G}from"./PsInput.096bf606.js";import{P as J}from"./PsLabel.ba854ae6.js";import{P as Q}from"./PsButton.6e47777c.js";import{P as W}from"./PsTextarea.f8e79b57.js";import{P as X,d as Y}from"./PsDangerDialog.45064bba.js";import{P as F}from"./PsBreadcrumb2.c24fe59b.js";import{P as ee}from"./PsDropdown.d345be0d.js";import{P as te}from"./PsDropdownSelect.65e73a6d.js";import{P as oe}from"./PsCard.6a2e47ce.js";import{P as se}from"./PsLabelCaption.e61a7806.js";import{P as ae}from"./PsVideoUpload.fd32e847.js";import{P as re}from"./PsLabelTitle3.857bf4b8.js";import{P as ne}from"./PsIcon.71b0e9da.js";import{P as le}from"./PsLoading.9d8c0dd0.js";import{P as ie}from"./PsCheckboxValue.d67e394b.js";import{a as de,P as me}from"./PsActionModal.619893d0.js";import{P as ue}from"./PsImageUpload.feb8acc0.js";import{P as pe}from"./PsToggle.6d7ca6c8.js";import{_ as ce}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsWarningDialog.89df77bf.js";import"./PsModal.fccd5c23.js";import"./vue-neat-modal.bb68220d.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.73b90a8b.js";import"./SidebarSubTab.1a8b9e94.js";import"./PsErrorDialog.d3e814f0.js";import"./PsInputWithRightIcon.29f20201.js";import"./PsSuccessDialog.c18e6651.js";import"./PsBannerIcon.6e4a09ea.js";import"./PsIcon1.4226e037.js";import"./Icons.80b46b2b.js";import"./PsLoadingCircleDialog.1c2df66f.js";import"./main.7d6b6908.js";import"./index.edd1d404.js";import"./PsDraggable.b90e2bf9.js";import"./PsLabelHeader4.6bd3b47b.js";import"./toggle.2d374629.js";const fe=j({name:"Edit",components:{Head:E,PsToggle:pe,CheckBox:O,DatePicker:Z,PsInput:G,PsRadioValue:R,PsLabel:J,PsButton:Q,PsTextarea:W,PsLabelHeader6:X,PsDropdown:ee,PsDropdownSelect:te,PsCard:oe,PsBreadcrumb2:F,PsLabelCaption:se,PsImageUpload:ue,PsIcon:ne,PsLoading:le,PsCheckboxValue:ie,PsActionModal:de,PsImageIconModal:me,PsDangerDialog:Y,PsVideoUpload:ae,PsLabelTitle3:re},layout:q,props:["errors","coreFieldFilterSettings","modules","customizeHeaders","customizeDetails","permissions"],setup(e){let o=z({name:"",description:"",can_access_admin_panel:0,permissions:[]});const P=V(!1),v=V(!1);let b=N([]);for(let r=0;r<e.modules.length;r++)b[e.modules[r].id]=[];let w=V(!1);function $(r){o.permissions[r]=b[r].toString()}function C(){this.$inertia.get(route("user_role.index"))}function S(){this.$inertia.post(route("user_role.store"),o,{forceFormData:!0,onBefore:()=>{P.value=!0},onSuccess:()=>{P.value=!1,v.value=!0,setTimeout(()=>{v.value=!1},2e3)},onError:()=>{P.value=!1}})}function c(){for(let r=0;r<e.modules.length;r++){for(let y=0;y<e.permissions.length;y++)w.value?b[e.modules[r].id][y]=e.permissions[y].id:b[e.modules[r].id]=[];o.permissions[e.modules[r].id]=b[e.modules[r].id].toString()}}function x(){o.can_access_admin_panel=!o.can_access_admin_panel}return{handleUserMultiSelect:$,handleAdminPanelAccess:x,handleSubmit:S,toogleSelectAll:c,form:o,booleanPermission:b,selectAll:w,handleCancel:C,loading:P,success:v}},computed:{breadcrumb(){return[{label:A("core__be_dashboard_label"),url:route("admin.index")},{label:A("user_role_module"),url:route("user_role.index")},{label:A("core__be_add_user_role"),color:"text-primary-500"}]}}}),_e={class:"rounded-xl"},be={class:"bg-primary-50 dark:bg-primary-900 py-2.5 ps-4 rounded-t-xl"},ye={class:"px-4 pt-6 dark:bg-backgroundDark"},ge={class:"grid w-full sm:w-1/2 gap-6"},Pe={key:0,class:"text-red-800 font-medium ms-1"},he={key:0,class:"text-red-800 font-medium ms-1"},ve={key:0,class:"text-red-800 font-medium ms-1"},ke={class:"px-4 pb-6 flex flex-row justify-between items-center"},we=p("Allow Modules"),$e={class:"flex flex-row items-center"},Ce=p("Select all "),Se={class:"flex flex-row items-center"},xe=["onUpdate:modelValue","onChange","id","value"],Ve={class:"flex flex-row justify-end mb-2.5"},Ae={key:2,class:"transition-all duration-300"},Be={key:3,class:""};function De(e,o,P,v,b,w){const $=i("Head"),C=i("ps-breadcrumb-2"),S=i("ps-label-header-6"),c=i("ps-label"),x=i("ps-input"),r=i("ps-label-caption"),y=i("ps-textarea"),I=i("ps-toggle"),B=i("ps-button"),L=i("ps-loading"),M=i("ps-icon"),T=i("ps-card"),H=i("ps-layout");return s(),n(g,null,[a($,{title:e.$t("core__be_add_user_role")},null,8,["title"]),a(H,null,{default:l(()=>[a(C,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),a(T,{class:"w-full h-auto"},{default:l(()=>[d("div",_e,[d("div",be,[a(S,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:l(()=>[p(u(e.$t("core__be_user_role_info")),1)]),_:1})]),d("div",ye,[d("form",{onSubmit:o[6]||(o[6]=K((...t)=>e.handleSubmit&&e.handleSubmit(...t),["prevent"]))},[d("div",ge,[(s(!0),n(g,null,h(e.coreFieldFilterSettings.filter(t=>t.original_field_name==="name"&&t.enable===1&&t.is_delete===0),(t,m)=>(s(),n("div",{key:m},[a(c,{class:"text-base"},{default:l(()=>[p(u(e.$t(t.label_name))+" ",1),(t.mandatory=1)?(s(),n("span",Pe,"*")):_("",!0)]),_:2},1024),a(x,{ref_for:!0,ref:"name",type:"text",value:e.form.name,"onUpdate:value":o[0]||(o[0]=f=>e.form.name=f),placeholder:e.$t(t.placeholder),onKeyup:f=>t.mandatory==1?e.validateEmptyInput("name",e.form.name):"",onBlur:f=>t.mandatory==1?e.validateEmptyInput("name",e.form.name):""},null,8,["value","placeholder","onKeyup","onBlur"]),t.mandatory==1?(s(),k(r,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:l(()=>[p(u(e.errors.name),1)]),_:1})):_("",!0)]))),128)),(s(!0),n(g,null,h(e.coreFieldFilterSettings.filter(t=>t.original_field_name==="description"&&t.enable===1&&t.is_delete===0),(t,m)=>(s(),n("div",{key:m},[a(c,{class:"text-base"},{default:l(()=>[p(u(e.$t(t.label_name))+" ",1),t.mandatory==1?(s(),n("span",he,"*")):_("",!0)]),_:2},1024),a(y,{rows:"4",value:e.form.description,"onUpdate:value":o[1]||(o[1]=f=>e.form.description=f),placeholder:e.$t(t.description)},null,8,["value","placeholder"]),t.mandatory==1?(s(),k(r,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:l(()=>[p(u(e.errors.description),1)]),_:1})):_("",!0)]))),128)),(s(!0),n(g,null,h(e.coreFieldFilterSettings.filter(t=>t.original_field_name==="can_access_admin_panel"&&t.enable===1&&t.is_delete===0),(t,m)=>(s(),n("div",{class:"flex justify-between items-center",key:m},[a(c,{class:"text-base"},{default:l(()=>[p(u(e.$t(t.label_name))+" ",1),t.mandatory==1?(s(),n("span",ve,"*")):_("",!0)]),_:2},1024),a(I,{onClick:o[2]||(o[2]=f=>e.handleAdminPanelAccess()),selectedValue:e.form.can_access_admin_panel==1,toggleOnTheme:"bg-primary-500 border-primary-500 "},null,8,["selectedValue"])]))),128)),d("div",ke,[a(c,{class:"text-base font-medium"},{default:l(()=>[we]),_:1}),d("div",$e,[D(d("input",{"onUpdate:modelValue":o[3]||(o[3]=t=>e.selectAll=t),onChange:o[4]||(o[4]=t=>e.toogleSelectAll()),class:"me-2 border-1 border-secondary-200 rounded",type:"checkbox"},null,544),[[U,e.selectAll]]),a(c,{class:"text-base font-light"},{default:l(()=>[Ce]),_:1})])]),d("div",null,[(s(!0),n(g,null,h(e.modules,t=>(s(),n("div",{class:"px-4 pb-5 flex flex-row justify-between items-center",key:t.id},[a(c,{class:"text-sm"},{default:l(()=>[p(u(e.$t(t.lang_key)),1)]),_:2},1024),d("div",Se,[(s(!0),n(g,null,h(e.permissions,m=>(s(),n("div",{class:"flex flex-row me-2 items-center",key:m.id},[D(d("input",{"onUpdate:modelValue":f=>e.booleanPermission[t.id]=f,onChange:f=>e.handleUserMultiSelect(t.id),class:"me-2 border-1 border-secondary-200 rounded",type:"checkbox",id:m.id,value:m.id},null,40,xe),[[U,e.booleanPermission[t.id]]]),a(c,{class:"text-base font-light",for:m.id},{default:l(()=>[p(u(m.title),1)]),_:2},1032,["for"])]))),128))])]))),128))]),d("div",Ve,[a(B,{onClick:o[5]||(o[5]=t=>e.handleCancel()),textSize:"text-base",type:"reset",class:"me-4",colors:"text-primary-500",focus:"",hover:""},{default:l(()=>[p(u(e.$t("core__be_btn_cancel")),1)]),_:1}),a(B,{class:"transition-all duration-300 min-w-3xs",padding:"px-7 py-2",rounded:"rounded",hover:"",focus:""},{default:l(()=>[e.loading?(s(),k(L,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):_("",!0),e.success?(s(),k(M,{key:1,name:"check",w:"20",h:"20",class:"me-1.5 transition-all duration-300"})):_("",!0),e.success?(s(),n("span",Ae,u(e.$t("core__be_btn_saved")),1)):_("",!0),!e.loading&&!e.success?(s(),n("span",Be,u(e.$t("core__be_btn_save")),1)):_("",!0)]),_:1})])])],32)])])]),_:1})]),_:1})],64)}var vt=ce(fe,[["render",De]]);export{vt as default};

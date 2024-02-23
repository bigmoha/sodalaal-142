import{d as D,Z as T,i as v,H as z,B as k,o,c as l,b as r,w as u,a as i,q as _,t as n,h as U,F as C,s as I,g as m,f as h,r as s}from"./app.bcb0820c.js";import{P as j}from"./PsLayout.28577d6c.js";import{P as q}from"./PsBreadcrumb2.c24fe59b.js";import{u as M}from"./Validators.cb85894a.js";import{P as N}from"./PsInput.096bf606.js";import{P as Z}from"./PsLabel.ba854ae6.js";import{P as x}from"./PsButton.6e47777c.js";import{P as A}from"./PsDangerDialog.45064bba.js";import{P as G}from"./PsCard.6a2e47ce.js";import{P as J}from"./PsLoading.9d8c0dd0.js";import{P as O}from"./PsIcon.71b0e9da.js";import{P as Q}from"./PsLabelCaption.e61a7806.js";import{_ as R}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsDropdown.d345be0d.js";import"./PsDropdownSelect.65e73a6d.js";import"./PsToggle.6d7ca6c8.js";import"./toggle.2d374629.js";import"./PsWarningDialog.89df77bf.js";import"./PsModal.fccd5c23.js";import"./vue-neat-modal.bb68220d.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.73b90a8b.js";import"./SidebarSubTab.1a8b9e94.js";import"./PsErrorDialog.d3e814f0.js";import"./PsInputWithRightIcon.29f20201.js";import"./PsSuccessDialog.c18e6651.js";import"./PsBannerIcon.6e4a09ea.js";import"./PsIcon1.4226e037.js";import"./Icons.80b46b2b.js";import"./PsLoadingCircleDialog.1c2df66f.js";const W=D({name:"Create",components:{Head:T,PsInput:N,PsLabel:Z,PsButton:x,PsLabelHeader6:A,PsCard:G,PsLoading:J,PsIcon:O,PsBreadcrumb2:q,PsLabelCaption:Q},layout:j,props:["errors","language","coreFieldFilterSettings"],setup(e){const a=v(!1),c=v(!1),g=v(),b=v(),{isEmpty:E}=M(),$=(d,f)=>{e.errors[d]=f?"":E(d,f),d=="key"&&(g.value.isError=!!Boolean(e.errors.key)),d=="value"&&(b.value.isError=!!Boolean(e.errors.value))};let y=z({symbol:"",name:"",language_id:e.language.id});function P(){this.$inertia.post(route("fe_language_string.store",e.language),y,{forceFormData:!0,onBefore:()=>{a.value=!0},onSuccess:()=>{a.value=!1,c.value=!0,setTimeout(()=>{c.value=!1,window.location.reload()},2e3)},onError:()=>{a.value=!1,g.value.isError=!!Boolean(e.errors.key),b.value.isError=!!Boolean(e.errors.value)}})}return{validateEmptyInput:$,handleSubmit:P,loading:a,success:c,value:b,key:g,form:y}},computed:{breadcrumb(){return[{label:k("core__be_dashboard_label"),url:route("admin.index")},{label:k("fe_language_module"),url:route("fe_language.index")},{label:k("fe_language_string_module"),url:route("fe_language_string.index",this.language.id)},{label:k("create_fe_language_string"),color:"text-primary-500"}]}},methods:{handleCancel(){this.$inertia.get(route("fe_language_string.index",this.language.id))}}}),X={class:"rounded-xl"},Y={class:"bg-primary-50 dark:bg-primary-900 py-2.5 ps-4 rounded-t-xl"},F={class:"px-4 pt-6 dark:bg-backgroundDark"},ee={class:"grid w-1/2 gap-6"},te={class:"text-primary-500"},ae={key:0,class:"text-red-800 font-medium ms-1"},oe={key:0,class:"text-red-800 font-medium ms-1"},re={class:"flex flex-row justify-end mb-2.5"},se={key:2,class:"transition-all duration-300"},ne={key:3,class:""};function le(e,a,c,g,b,E){const $=s("Head"),y=s("ps-breadcrumb-2"),P=s("ps-label-header-6"),d=s("ps-label"),f=s("ps-input"),w=s("ps-label-caption"),S=s("ps-button"),L=s("ps-loading"),H=s("ps-icon"),K=s("ps-card"),V=s("ps-layout");return o(),l(C,null,[r($,{title:e.$t("create_fe_language_string")},null,8,["title"]),r(V,null,{default:u(()=>[r(y,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),r(K,{class:"w-full h-auto"},{default:u(()=>[i("div",X,[i("div",Y,[r(P,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:u(()=>[_(n(e.$t("create_language_string")),1)]),_:1})]),i("div",F,[i("form",{onSubmit:a[3]||(a[3]=U(t=>e.handleSubmit(),["prevent"]))},[i("div",ee,[i("div",null,[_(n(e.$t("core__be_selected_language"))+" : ",1),i("span",te,n(e.language.name),1)]),(o(!0),l(C,null,I(e.coreFieldFilterSettings.filter(t=>t.original_field_name==="key"&&t.enable===1&&t.is_delete===0),(t,B)=>(o(),l("div",{key:B},[r(d,{class:"text-base mb-1"},{default:u(()=>[_(n(e.$t(t.label_name))+" ",1),(t.mandatory=1)?(o(),l("span",ae,"*")):m("",!0)]),_:2},1024),r(f,{ref_for:!0,ref:"key",type:"text",value:e.form.key,"onUpdate:value":a[0]||(a[0]=p=>e.form.key=p),placeholder:e.$t(t.placeholder),onKeyup:p=>t.mandatory==1?e.validateEmptyInput("key",e.form.key):"",onBlur:p=>t.mandatory==1?e.validateEmptyInput("key",e.form.key):""},null,8,["value","placeholder","onKeyup","onBlur"]),t.mandatory==1?(o(),h(w,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:u(()=>[_(n(e.errors.key),1)]),_:1})):m("",!0)]))),128)),(o(!0),l(C,null,I(e.coreFieldFilterSettings.filter(t=>t.original_field_name==="value"&&t.enable===1&&t.is_delete===0),(t,B)=>(o(),l("div",{key:B},[r(d,{class:"text-base mb-1"},{default:u(()=>[_(n(e.$t(t.label_name))+" ",1),(t.mandatory=1)?(o(),l("span",oe,"*")):m("",!0)]),_:2},1024),r(f,{ref_for:!0,ref:"value",type:"text",value:e.form.value,"onUpdate:value":a[1]||(a[1]=p=>e.form.value=p),placeholder:e.$t(t.placeholder),onKeyup:p=>t.mandatory==1?e.validateEmptyInput("value",e.form.value):"",onBlur:p=>t.mandatory==1?e.validateEmptyInput("value",e.form.value):""},null,8,["value","placeholder","onKeyup","onBlur"]),t.mandatory==1?(o(),h(w,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:u(()=>[_(n(e.errors.value),1)]),_:1})):m("",!0)]))),128)),i("div",re,[r(S,{onClick:a[2]||(a[2]=t=>e.handleCancel()),textSize:"text-base",type:"reset",class:"me-4",colors:"text-primary-500",focus:"",hover:""},{default:u(()=>[_(n(e.$t("core__be_btn_cancel")),1)]),_:1}),r(S,{class:"transition-all duration-300 min-w-3xs",padding:"px-7 py-2",rounded:"rounded",hover:"",focus:""},{default:u(()=>[e.loading?(o(),h(L,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):m("",!0),e.success?(o(),h(H,{key:1,name:"check",w:"20",h:"20",class:"me-1.5 transition-all duration-300"})):m("",!0),e.success?(o(),l("span",se,n(e.$t("core__be_btn_saved")),1)):m("",!0),!e.loading&&!e.success?(o(),l("span",ne,n(e.$t("core__be_btn_save")),1)):m("",!0)]),_:1})])])],32)])])]),_:1})]),_:1})],64)}var qe=R(W,[["render",le]]);export{qe as default};
import{d as H,Z as V,H as B,i as b,B as k,o as m,c as h,b as a,w as i,a as o,q as u,t as s,h as x,f as C,g as f,F as D,r}from"./app.bcb0820c.js";import{P as F}from"./PsLayout.28577d6c.js";import{P as K}from"./PsBreadcrumb2.c24fe59b.js";import{u as T}from"./Validators.cb85894a.js";import{P as z}from"./PsInput.096bf606.js";import{P as U}from"./PsLabel.ba854ae6.js";import{P as j}from"./PsButton.6e47777c.js";import{P as q}from"./PsDangerDialog.45064bba.js";import{P as M}from"./PsCard.6a2e47ce.js";import{P as N}from"./PsLoading.9d8c0dd0.js";import{P as Z}from"./PsIcon.71b0e9da.js";import{P as A}from"./PsLabelCaption.e61a7806.js";import{_ as G}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsDropdown.d345be0d.js";import"./PsDropdownSelect.65e73a6d.js";import"./PsToggle.6d7ca6c8.js";import"./toggle.2d374629.js";import"./PsWarningDialog.89df77bf.js";import"./PsModal.fccd5c23.js";import"./vue-neat-modal.bb68220d.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.73b90a8b.js";import"./SidebarSubTab.1a8b9e94.js";import"./PsErrorDialog.d3e814f0.js";import"./PsInputWithRightIcon.29f20201.js";import"./PsSuccessDialog.c18e6651.js";import"./PsBannerIcon.6e4a09ea.js";import"./PsIcon1.4226e037.js";import"./Icons.80b46b2b.js";import"./PsLoadingCircleDialog.1c2df66f.js";const J=H({name:"Edit",components:{Head:V,PsInput:z,PsLabel:U,PsButton:j,PsLabelHeader6:q,PsCard:M,PsLoading:N,PsIcon:Z,PsBreadcrumb2:K,PsLabelCaption:A},layout:F,props:["errors","language_string","language"],data(){return{form:B({key:this.language_string.key,value:this.language_string.value,language_id:this.language.id,_method:"put"})}},setup(e){const t=b(!1),p=b(!1),g=b(),_=b(),{isEmpty:P}=T(),v=(n,d)=>{e.errors[n]=d?"":P(n,d),n=="key"&&(g.value.isError=!!Boolean(e.errors.key)),n=="value"&&(_.value.isError=!!Boolean(e.errors.value))};let c=B({key:e.language_string.key,value:e.language_string.value,language_id:e.language.id,id:e.language_string.id,_method:"put"});function y(n){this.$inertia.post(route("language_string.update",[e.language,n]),c,{forceFormData:!0,onBefore:()=>{t.value=!0},onSuccess:()=>{t.value=!1,p.value=!0,setTimeout(()=>{p.value=!1,window.location.reload()},2e3)},onError:()=>{t.value=!1,g.value.isError=!!Boolean(e.errors.key),_.value.isError=!!Boolean(e.errors.value)}})}return{validateEmptyInput:v,handleSubmit:y,loading:t,success:p,value:_,key:g,form:c}},computed:{breadcrumb(){return[{label:k("core__be_dashboard_label"),url:route("admin.index")},{label:k("language_module"),url:route("language.index")},{label:k("language_string_module"),url:route("language_string.index",this.language.id)},{label:"Edit Language String",color:"text-primary-500"}]}},methods:{handleCancel(){this.$inertia.get(route("language_string.index",this.language.id))}}}),O={class:"rounded-xl"},Q={class:"bg-primary-50 dark:bg-primary-900 py-2.5 ps-4 rounded-t-xl"},R={class:"px-4 pt-6 dark:bg-backgroundDark"},W={class:"grid w-1/2 gap-6"},X={class:"text-primary-500"},Y=o("span",{class:"text-red-800 font-medium ms-1"},"*",-1),ee=o("span",{class:"text-red-800 font-medium ms-1"},"*",-1),te={class:"flex flex-row justify-end mb-2.5"},ae={key:2,class:"transition-all duration-300"},oe={key:3,class:""};function re(e,t,p,g,_,P){const v=r("Head"),c=r("ps-breadcrumb-2"),y=r("ps-label-header-6"),n=r("ps-label"),d=r("ps-input"),$=r("ps-label-caption"),E=r("ps-button"),w=r("ps-loading"),S=r("ps-icon"),I=r("ps-card"),L=r("ps-layout");return m(),h(D,null,[a(v,{title:e.$t("edit_language_string")},null,8,["title"]),a(L,null,{default:i(()=>[a(c,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),a(I,{class:"w-full h-auto"},{default:i(()=>[o("div",O,[o("div",Q,[a(y,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:i(()=>[u(s(e.$t("edit_language_string")),1)]),_:1})]),o("div",R,[o("form",{onSubmit:t[7]||(t[7]=x(l=>e.handleSubmit(this.language_string.id),["prevent"]))},[o("div",W,[o("div",null,[u(s(e.$t("core__be_selected_language"))+" : ",1),o("span",X,s(e.language.name),1)]),o("div",null,[a(n,{class:"text-base mb-1"},{default:i(()=>[u(s(e.$t("core__be_key_label")),1),Y]),_:1}),a(d,{disabled:!0,type:"text",value:e.form.key,"onUpdate:value":t[0]||(t[0]=l=>e.form.key=l),placeholder:"Key",onKeyup:t[1]||(t[1]=l=>e.validateEmptyInput("key",e.form.key)),onBlur:t[2]||(t[2]=l=>e.validateEmptyInput("key",e.form.key))},null,8,["value"]),a($,{textColor:"text-red-500 ",class:"mt-2 block"},{default:i(()=>[u(s(e.errors.key),1)]),_:1})]),o("div",null,[a(n,{class:"text-base mb-1"},{default:i(()=>[u(s(e.$t("core__be_value_label")),1),ee]),_:1}),a(d,{type:"text",value:e.form.value,"onUpdate:value":t[3]||(t[3]=l=>e.form.value=l),placeholder:"Value",onKeyup:t[4]||(t[4]=l=>e.validateEmptyInput("value",e.form.value)),onBlur:t[5]||(t[5]=l=>e.validateEmptyInput("value",e.form.value))},null,8,["value"]),a($,{textColor:"text-red-500 ",class:"mt-2 block"},{default:i(()=>[u(s(e.errors.value),1)]),_:1})]),o("div",te,[a(E,{onClick:t[6]||(t[6]=l=>e.handleCancel()),textSize:"text-base",type:"reset",class:"me-4",colors:"text-primary-500",focus:"",hover:""},{default:i(()=>[u(s(e.$t("core__be_btn_cancel")),1)]),_:1}),a(E,{class:"transition-all duration-300 min-w-3xs",padding:"px-7 py-2",rounded:"rounded",hover:"",focus:""},{default:i(()=>[e.loading?(m(),C(w,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):f("",!0),e.success?(m(),C(S,{key:1,name:"check",w:"20",h:"20",class:"me-1.5 transition-all duration-300"})):f("",!0),e.success?(m(),h("span",ae,s(e.$t("core__be_btn_saved")),1)):f("",!0),!e.loading&&!e.success?(m(),h("span",oe,s(e.$t("core__be_btn_save")),1)):f("",!0)]),_:1})])])],32)])])]),_:1})]),_:1})],64)}var Ke=G(J,[["render",re]]);export{Ke as default};
import{d as z,Z as F,i as c,H as O,B as L,o as m,c as v,b as o,w as a,a as l,q as i,t as p,h as W,F as K,s as A,n as H,f as E,g as B,r as d}from"./app.bcb0820c.js";import{P as j}from"./PsLayout.28577d6c.js";import{P as q}from"./PsBreadcrumb2.c24fe59b.js";import{u as M}from"./Validators.cb85894a.js";import{P as Z}from"./PsInput.096bf606.js";import{P as G}from"./PsLabel.ba854ae6.js";import{P as J}from"./PsButton.6e47777c.js";import{P as Q}from"./PsDangerDialog.45064bba.js";import{P as R}from"./PsCard.6a2e47ce.js";import{P as X}from"./PsLoading.9d8c0dd0.js";import{P as Y}from"./PsIcon.71b0e9da.js";import{P as N}from"./PsCheckboxValue.d67e394b.js";import{P as x}from"./PsLabelCaption.e61a7806.js";import{P as ee}from"./PsLabelTitle3.857bf4b8.js";import{P as re}from"./PsTextarea.f8e79b57.js";import{P as te}from"./PsDropdown.d345be0d.js";import{P as oe}from"./PsDropdownSelect.65e73a6d.js";import{_ as se}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsToggle.6d7ca6c8.js";import"./toggle.2d374629.js";import"./PsWarningDialog.89df77bf.js";import"./PsModal.fccd5c23.js";import"./vue-neat-modal.bb68220d.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.73b90a8b.js";import"./SidebarSubTab.1a8b9e94.js";import"./PsErrorDialog.d3e814f0.js";import"./PsInputWithRightIcon.29f20201.js";import"./PsSuccessDialog.c18e6651.js";import"./PsBannerIcon.6e4a09ea.js";import"./PsIcon1.4226e037.js";import"./Icons.80b46b2b.js";import"./PsLoadingCircleDialog.1c2df66f.js";const ae=z({name:"Create",components:{Head:F,PsBreadcrumb2:q,PsInput:Z,PsLabel:G,PsButton:J,PsLabelHeader6:Q,PsCard:R,PsLoading:X,PsIcon:Y,PsCheckboxValue:N,PsLabelCaption:x,PsLabelTitle3:ee,PsTextarea:re,PsDropdown:te,PsDropdownSelect:oe},layout:j,props:["errors","availableCurrencies"],setup(e){const t=c(!1),h=c(!1),k=c(),P=c(),C=c(),f=c(),{isEmpty:b,minLength:S}=M(),u=(s,n)=>{e.errors[s]=n?S(s,n,3):b(s,n),s=="in_app_purchase_prd_id"&&(k.value.isError=e.errors.in_app_purchase_prd_id!="")},y=(s,n)=>{e.errors[s]=n?"":b(s,n),s=="count"&&(P.value.isError=e.errors.count!=""),s=="type"&&(f.value.isError=e.errors.type!="")},_=s=>{let n=s.keyCode?s.keyCode:s.which;(n<48||n>57)&&s.preventDefault()};let g=O({in_app_purchase_prd_id:"",description:"",count:"",price:"",type:"",status:!0,currency_id:""}),$=[{id:"Android",name:"Android"},{id:"IOS",name:"IOS"}];const w=(s,n)=>{e.errors[s]=n?isPrice(s,n):b(s,n),s=="price"&&(C.value.isError=e.errors.price!="")},D=s=>{let n=s.keyCode?s.keyCode:s.which;(n<48||n>57)&&n!==46&&n!==45&&n!==44&&s.preventDefault()};function I(){this.$inertia.post(route("package_in_app_purchase.store"),g,{forceFormData:!0,onBefore:()=>{t.value=!0},onSuccess:()=>{t.value=!1,h.value=!0,setTimeout(()=>{h.value=!1},2e3)},onError:()=>{k.value.isError=e.errors.in_app_purchase_prd_id!="",P.value.isError=e.errors.count!="",C.value.isError=e.errors.price!="",f.value.isError=e.errors.type!="",t.value=!1}})}return{count:P,type:f,price:C,onlyNumber:_,onlyNumberWithCustom:D,validatePriceInput:w,validateEmptyInput:y,validateInAppPurchasePrdIdInput:u,handleSubmit:I,form:g,loading:t,success:h,in_app_purchase_prd_id:k,types:$}},computed:{breadcrumb(){return[{label:L("core__be_dashboard_label"),url:route("admin.index")},{label:L("package_in_app_purchase_module"),url:route("package_in_app_purchase.index")},{label:L("core__be_add_package_in_app_purchase"),color:"text-primary-500"}]}},methods:{handleCancel(){this.$inertia.get(route("package_in_app_purchase.index"))}}}),ne={class:"rounded-xl"},le={class:"bg-primary-50 dark:bg-primary-900 py-2.5 ps-4"},pe={class:"px-4 pt-6 dark:bg-backgroundDark"},ie={class:"grid w-full sm:w-1/2 gap-6"},de=l("span",{class:"text-red-500 ms-1"},"*",-1),ue=l("span",{class:"text-red-800 font-medium ms-1"},"*",-1),me=l("span",{class:"text-red-800 font-medium ms-1"},"*",-1),_e={class:"rounded-md shadow-xs"},ce={class:"pt-2 z-30"},fe=["onClick"],be=l("span",{class:"text-red-800 font-medium ms-1"},"*",-1),ye={class:"rounded-md shadow-xs w-56"},ve={class:"pt-2 z-30"},he=["onClick"],ke={class:"flex flex-row justify-end mb-2.5"};function Pe(e,t,h,k,P,C){const f=d("Head"),b=d("ps-breadcrumb-2"),S=d("ps-label-header-6"),u=d("ps-label"),y=d("ps-input"),_=d("ps-label-caption"),g=d("ps-textarea"),$=d("ps-dropdown-select"),w=d("ps-dropdown"),D=d("ps-checkbox-value"),I=d("ps-button"),s=d("ps-loading"),n=d("ps-icon"),T=d("ps-card"),U=d("ps-layout");return m(),v(K,null,[o(f,{title:e.$t("edit_package_in_app_purchase")},null,8,["title"]),o(U,null,{default:a(()=>[o(b,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),o(T,{class:"w-full h-auto"},{default:a(()=>[l("div",ne,[l("div",le,[o(S,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:a(()=>[i(p(e.$t("payment__be_package_iap_info")),1)]),_:1})]),l("div",pe,[l("form",{onSubmit:t[14]||(t[14]=W((...r)=>e.handleSubmit&&e.handleSubmit(...r),["prevent"]))},[l("div",ie,[l("div",null,[o(u,{class:"text-base"},{default:a(()=>[i(p(e.$t("payment__be_iap_prod_id")),1),de]),_:1}),o(y,{ref:"in_app_purchase_prd_id",type:"text",value:e.form.in_app_purchase_prd_id,"onUpdate:value":t[0]||(t[0]=r=>e.form.in_app_purchase_prd_id=r),placeholder:e.$t("payment__be_iap_prod_id"),onKeyup:t[1]||(t[1]=r=>e.validateInAppPurchasePrdIdInput("in_app_purchase_prd_id",e.form.in_app_purchase_prd_id)),onBlur:t[2]||(t[2]=r=>e.validateInAppPurchasePrdIdInput("in_app_purchase_prd_id",e.form.in_app_purchase_prd_id))},null,8,["value","placeholder"]),o(_,{textColor:"text-red-500 text-xs",class:"mt-2 block"},{default:a(()=>[i(p(e.errors.in_app_purchase_prd_id),1)]),_:1})]),l("div",null,[o(u,{class:"text-base"},{default:a(()=>[i(p(e.$t("payment__be__description")),1)]),_:1}),o(g,{ref:"description",rows:"4",value:e.form.description,"onUpdate:value":t[3]||(t[3]=r=>e.form.description=r),placeholder:e.$t("payment__be__description")},null,8,["value","placeholder"])]),l("div",null,[o(u,{class:"text-base"},{default:a(()=>[i(p(e.$t("payment__be_post_count")),1),ue]),_:1}),o(y,{ref:"count",type:"text",value:e.form.count,"onUpdate:value":t[4]||(t[4]=r=>e.form.count=r),placeholder:e.$t("payment__be_post_count"),onKeyup:t[5]||(t[5]=r=>e.validateEmptyInput("count",e.form.count)),onBlur:t[6]||(t[6]=r=>e.validateEmptyInput("count",e.form.count)),onKeypress:e.onlyNumber},null,8,["value","placeholder","onKeypress"]),o(_,{textColor:"text-red-500 text-xs",class:"mt-2 block"},{default:a(()=>[i(p(e.errors.count),1)]),_:1})]),l("div",null,[o(u,{class:"text-base"},{default:a(()=>[i(p(e.$t("payment__be_iap_price")),1),me]),_:1}),o(y,{ref:"price",type:"text",value:e.form.price,"onUpdate:value":t[7]||(t[7]=r=>e.form.price=r),placeholder:e.$t("payment__be_iap_price"),onKeyup:t[8]||(t[8]=r=>e.validatePriceInput("price",e.form.price)),onBlur:t[9]||(t[9]=r=>e.validatePriceInput("price",e.form.price)),onKeypress:e.onlyNumberWithCustom},null,8,["value","placeholder","onKeypress"]),o(_,{textColor:"text-red-500 text-xs",class:"mt-2 block"},{default:a(()=>[i(p(e.errors.price),1)]),_:1})]),l("div",null,[o(u,{class:"text-base"},{default:a(()=>[i(p(e.$t("payment__be_currency")),1)]),_:1}),o(w,{align:"left",class:"lg:mt-2 mt-1 w-full"},{select:a(()=>[o($,{placeholder:e.$t("payment__be_select_currency"),selectedValue:e.form.currency_id==""?"":e.availableCurrencies.filter(r=>r.id==e.form.currency_id)[0].name+"( "+e.availableCurrencies.filter(r=>r.id==e.form.currency_id)[0].currency_symbol+","+e.availableCurrencies.filter(r=>r.id==e.form.currency_id)[0].currency_short_form+" )"},null,8,["placeholder","selectedValue"])]),list:a(()=>[l("div",_e,[l("div",ce,[(m(!0),v(K,null,A(e.availableCurrencies,r=>(m(),v("div",{key:r.id,class:"flex py-4 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:V=>[e.form.currency_id=r.id]},[o(u,{class:H(["ms-2",r.id==e.form.currency_id?" font-bold":""])},{default:a(()=>[i(p(r.name)+"("+p(r.currency_symbol)+", "+p(r.currency_short_form)+") ",1)]),_:2},1032,["class"])],8,fe))),128))])])]),_:1})]),l("div",null,[o(u,{class:"text-base"},{default:a(()=>[i(p(e.$t("payment__be_type")),1),be]),_:1}),o(w,{align:"left",class:"lg:mt-2 mt-1 w-full"},{select:a(()=>[o($,{placeholder:e.$t("payment__be_select_type"),selectedValue:e.form.type==""?"":e.types.filter(r=>r.id==e.form.type)[0].name,onChange:t[10]||(t[10]=r=>e.validateEmptyInput("type",e.form.type)),onBlur:t[11]||(t[11]=r=>e.validateEmptyInput("type",e.form.type))},null,8,["placeholder","selectedValue"])]),list:a(()=>[l("div",ye,[l("div",ve,[(m(!0),v(K,null,A(e.types,r=>(m(),v("div",{key:r.id,class:"w-56 flex py-4 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:V=>[e.form.type=r.id,e.validateEmptyInput("type",e.form.type)]},[o(u,{class:H(["ms-2",r.id==e.form.type?" font-bold":""])},{default:a(()=>[i(p(r.name),1)]),_:2},1032,["class"])],8,he))),128))])])]),_:1}),o(_,{textColor:"text-red-500 text-xs",class:"mt-2 block"},{default:a(()=>[i(p(e.errors.type),1)]),_:1})]),l("div",null,[o(u,{class:"text-base mb-2"},{default:a(()=>[i(p(e.$t("payment__be_status")),1)]),_:1}),o(D,{value:e.form.status,"onUpdate:value":t[12]||(t[12]=r=>e.form.status=r),title:e.$t("payment__be_publish")},null,8,["value","title"])]),l("div",ke,[o(I,{onClick:t[13]||(t[13]=r=>e.handleCancel()),type:"reset",class:"me-4",colors:"text-primary-500",hover:""},{default:a(()=>[i(p(e.$t("core__be_btn_cancel")),1)]),_:1}),o(I,{class:"transition-all duration-300 min-w-3xs",padding:"px-7 py-2",rounded:"rounded",hover:"",focus:""},{default:a(()=>[e.loading?(m(),E(s,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):B("",!0),e.success?(m(),E(n,{key:1,name:"check",w:"20",h:"20",class:"me-1.5 transition-all duration-300"})):B("",!0),e.success?(m(),E(u,{key:2,class:"transition-all duration-300",textColor:"text-white dark:text-secondaryDark-black"},{default:a(()=>[i(p(e.$t("core__be_btn_saved")),1)]),_:1})):B("",!0),!e.loading&&!e.success?(m(),E(u,{key:3,textColor:"text-white dark:text-secondaryDark-black"},{default:a(()=>[i(p(e.$t("core__be_btn_save")),1)]),_:1})):B("",!0)]),_:1})])])],32)])])]),_:1})]),_:1})],64)}var tr=se(ae,[["render",Pe]]);export{tr as default};

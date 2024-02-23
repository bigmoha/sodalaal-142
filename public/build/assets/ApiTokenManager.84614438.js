import{J as $}from"./ActionMessage.593b27b5.js";import{J as S}from"./ActionSection.b245feef.js";import{J as w}from"./Button.35c70f5b.js";import{J as B}from"./ConfirmationModal.c35c9981.js";import{J as D}from"./DangerButton.e271e8f4.js";import{J as I}from"./DialogModal.aeec2fc1.js";import{J as V}from"./FormSection.cc2f4cdc.js";import{J as M}from"./Input.896546e7.js";import{J as N}from"./Checkbox.a80d39d5.js";import{J as L}from"./InputError.f9db5de3.js";import{J as U}from"./Label.c4df88e9.js";import{J as E}from"./SecondaryButton.0d94802e.js";import{J as q}from"./SectionBorder.f0fb3d5b.js";import{_ as z}from"./plugin-vue_export-helper.21dcd24c.js";import{d as Y,c as l,b as s,w as o,a,g as c,r,o as m,F as _,s as k,t as d,n as g,q as i}from"./app.bcb0820c.js";import"./SectionTitle.ab9ccd58.js";import"./Modal.84f4a032.js";const G=Y({components:{JetActionMessage:$,JetActionSection:S,JetButton:w,JetConfirmationModal:B,JetDangerButton:D,JetDialogModal:I,JetFormSection:V,JetInput:M,JetCheckbox:N,JetInputError:L,JetLabel:U,JetSecondaryButton:E,JetSectionBorder:q},props:["tokens","availablePermissions","defaultPermissions"],data(){return{createApiTokenForm:this.$inertia.form({name:"",permissions:this.defaultPermissions}),updateApiTokenForm:this.$inertia.form({permissions:[]}),deleteApiTokenForm:this.$inertia.form(),displayingToken:!1,managingPermissionsFor:null,apiTokenBeingDeleted:null}},methods:{createApiToken(){this.createApiTokenForm.post(route("api-tokens.store"),{preserveScroll:!0,onSuccess:()=>{this.displayingToken=!0,this.createApiTokenForm.reset()}})},manageApiTokenPermissions(e){this.updateApiTokenForm.permissions=e.abilities,this.managingPermissionsFor=e},updateApiToken(){this.updateApiTokenForm.put(route("api-tokens.update",this.managingPermissionsFor),{preserveScroll:!0,preserveState:!0,onSuccess:()=>this.managingPermissionsFor=null})},confirmApiTokenDeletion(e){this.apiTokenBeingDeleted=e},deleteApiToken(){this.deleteApiTokenForm.delete(route("api-tokens.destroy",this.apiTokenBeingDeleted),{preserveScroll:!0,preserveState:!0,onSuccess:()=>this.apiTokenBeingDeleted=null})}}}),H=i(" Create API Token "),K=i(" API tokens allow third-party services to authenticate with our application on your behalf. "),O={class:"col-span-6 sm:col-span-4"},Q={key:0,class:"col-span-6"},R={class:"mt-2 grid grid-cols-1 md:grid-cols-2 gap-4"},W={class:"flex items-center"},X={class:"ms-2 text-sm text-gray-600"},Z=i(" Created. "),x=i(" Create "),ee={key:0},oe={class:"mt-10 sm:mt-0"},te=i(" Manage API Tokens "),se=i(" You may delete any of your existing tokens if they are no longer needed. "),ne={class:"space-y-6"},ie={class:"flex items-center"},re={key:0,class:"text-sm text-gray-400"},ae=["onClick"],le=["onClick"],me=i(" API Token "),de=a("div",null," Please copy your new API token. For your security, it won't be shown again. ",-1),pe={key:0,class:"mt-4 bg-gray-100 px-4 py-2 rounded font-mono text-sm text-gray-500"},ce=i(" Close "),ue=i(" API Token Permissions "),_e={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},ke={class:"flex items-center"},ge={class:"ms-2 text-sm text-gray-600"};function fe(e,n,he,Te,be,ve){const f=r("jet-label"),v=r("jet-input"),y=r("jet-input-error"),h=r("jet-checkbox"),A=r("jet-action-message"),T=r("jet-button"),F=r("jet-form-section"),j=r("jet-section-border"),J=r("jet-action-section"),u=r("jet-secondary-button"),b=r("jet-dialog-modal"),P=r("jet-danger-button"),C=r("jet-confirmation-modal");return m(),l("div",null,[s(F,{onSubmitted:e.createApiToken},{title:o(()=>[H]),description:o(()=>[K]),form:o(()=>[a("div",O,[s(f,{for:"name",value:"Name"}),s(v,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:e.createApiTokenForm.name,"onUpdate:modelValue":n[0]||(n[0]=t=>e.createApiTokenForm.name=t),autofocus:""},null,8,["modelValue"]),s(y,{message:e.createApiTokenForm.errors.name,class:"mt-2"},null,8,["message"])]),e.availablePermissions.length>0?(m(),l("div",Q,[s(f,{for:"permissions",value:"Permissions"}),a("div",R,[(m(!0),l(_,null,k(e.availablePermissions,t=>(m(),l("div",{key:t},[a("label",W,[s(h,{value:t,checked:e.createApiTokenForm.permissions,"onUpdate:checked":n[1]||(n[1]=p=>e.createApiTokenForm.permissions=p)},null,8,["value","checked"]),a("span",X,d(t),1)])]))),128))])])):c("",!0)]),actions:o(()=>[s(A,{on:e.createApiTokenForm.recentlySuccessful,class:"me-3"},{default:o(()=>[Z]),_:1},8,["on"]),s(T,{class:g({"opacity-25":e.createApiTokenForm.processing}),disabled:e.createApiTokenForm.processing},{default:o(()=>[x]),_:1},8,["class","disabled"])]),_:1},8,["onSubmitted"]),e.tokens.length>0?(m(),l("div",ee,[s(j),a("div",oe,[s(J,null,{title:o(()=>[te]),description:o(()=>[se]),content:o(()=>[a("div",ne,[(m(!0),l(_,null,k(e.tokens,t=>(m(),l("div",{class:"flex items-center justify-between",key:t.id},[a("div",null,d(t.name),1),a("div",ie,[t.last_used_ago?(m(),l("div",re," Last used "+d(t.last_used_ago),1)):c("",!0),e.availablePermissions.length>0?(m(),l("button",{key:1,class:"cursor-pointer ms-6 text-sm text-gray-400 underline",onClick:p=>e.manageApiTokenPermissions(t)}," Permissions ",8,ae)):c("",!0),a("button",{class:"cursor-pointer ms-6 text-sm text-red-500",onClick:p=>e.confirmApiTokenDeletion(t)}," Delete ",8,le)])]))),128))])]),_:1})])])):c("",!0),s(b,{show:e.displayingToken,onClose:n[3]||(n[3]=t=>e.displayingToken=!1)},{title:o(()=>[me]),content:o(()=>[de,e.$page.props.jetstream.flash.token?(m(),l("div",pe,d(e.$page.props.jetstream.flash.token),1)):c("",!0)]),footer:o(()=>[s(u,{onClick:n[2]||(n[2]=t=>e.displayingToken=!1)},{default:o(()=>[ce]),_:1})]),_:1},8,["show"]),s(b,{show:e.managingPermissionsFor,onClose:n[6]||(n[6]=t=>e.managingPermissionsFor=null)},{title:o(()=>[ue]),content:o(()=>[a("div",_e,[(m(!0),l(_,null,k(e.availablePermissions,t=>(m(),l("div",{key:t},[a("label",ke,[s(h,{value:t,checked:e.updateApiTokenForm.permissions,"onUpdate:checked":n[4]||(n[4]=p=>e.updateApiTokenForm.permissions=p)},null,8,["value","checked"]),a("span",ge,d(t),1)])]))),128))])]),footer:o(()=>[s(u,{onClick:n[5]||(n[5]=t=>e.managingPermissionsFor=null)},{default:o(()=>[i(d(e.$t("core__be_btn_cancel")),1)]),_:1}),s(T,{class:g(["ms-3",{"opacity-25":e.updateApiTokenForm.processing}]),onClick:e.updateApiToken,disabled:e.updateApiTokenForm.processing},{default:o(()=>[i(d(e.$t("core__be_btn_save")),1)]),_:1},8,["onClick","class","disabled"])]),_:1},8,["show"]),s(C,{show:e.apiTokenBeingDeleted,onClose:n[8]||(n[8]=t=>e.apiTokenBeingDeleted=null)},{title:o(()=>[i(d(e.$t("core__be_delete_api_token")),1)]),content:o(()=>[i(d(e.$t("core__be_delete_api_token_info")),1)]),footer:o(()=>[s(u,{onClick:n[7]||(n[7]=t=>e.apiTokenBeingDeleted=null)},{default:o(()=>[i(d(e.$t("core__be_btn_cancel")),1)]),_:1}),s(P,{class:g(["ms-3",{"opacity-25":e.deleteApiTokenForm.processing}]),onClick:e.deleteApiToken,disabled:e.deleteApiTokenForm.processing},{default:o(()=>[i(d(e.$t("core__be_btn_delete")),1)]),_:1},8,["onClick","class","disabled"])]),_:1},8,["show"])])}var Ue=z(G,[["render",fe]]);export{Ue as default};
import{d as f,f as _,w as o,r as s,o as h,a as r,b as n,Y as y,n as w,q as t}from"./app.bcb0820c.js";import{J as g}from"./ActionSection.b245feef.js";import{J as C}from"./DialogModal.aeec2fc1.js";import{J as D}from"./DangerButton.e271e8f4.js";import{J as j}from"./Input.896546e7.js";import{J}from"./InputError.f9db5de3.js";import{J as U}from"./SecondaryButton.0d94802e.js";import{_ as b}from"./plugin-vue_export-helper.21dcd24c.js";import"./SectionTitle.ab9ccd58.js";import"./Modal.84f4a032.js";const k=f({components:{JetActionSection:g,JetDangerButton:D,JetDialogModal:C,JetInput:j,JetInputError:J,JetSecondaryButton:U},data(){return{confirmingUserDeletion:!1,form:this.$inertia.form({password:""})}},methods:{confirmUserDeletion(){this.confirmingUserDeletion=!0,setTimeout(()=>this.$refs.password.focus(),250)},deleteUser(){this.form.delete(route("current-user.destroy"),{preserveScroll:!0,onSuccess:()=>this.closeModal(),onError:()=>this.$refs.password.focus(),onFinish:()=>this.form.reset()})},closeModal(){this.confirmingUserDeletion=!1,this.form.reset()}}}),$=t(" Delete Account "),v=t(" Permanently delete your account. "),A=r("div",{class:"max-w-xl text-sm text-gray-600"}," Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain. ",-1),B={class:"mt-5"},V=t(" Delete Account "),M=t(" Delete Account "),S=t(" Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. "),K={class:"mt-4"},N=t(" Cancel "),P=t(" Delete Account ");function E(e,a,F,I,O,T){const l=s("jet-danger-button"),i=s("jet-input"),c=s("jet-input-error"),d=s("jet-secondary-button"),m=s("jet-dialog-modal"),u=s("jet-action-section");return h(),_(u,null,{title:o(()=>[$]),description:o(()=>[v]),content:o(()=>[A,r("div",B,[n(l,{onClick:e.confirmUserDeletion},{default:o(()=>[V]),_:1},8,["onClick"])]),n(m,{show:e.confirmingUserDeletion,onClose:e.closeModal},{title:o(()=>[M]),content:o(()=>[S,r("div",K,[n(i,{type:"password",class:"mt-1 block w-3/4",placeholder:"Password",ref:"password",modelValue:e.form.password,"onUpdate:modelValue":a[0]||(a[0]=p=>e.form.password=p),onKeyup:y(e.deleteUser,["enter"])},null,8,["modelValue","onKeyup"]),n(c,{message:e.form.errors.password,class:"mt-2"},null,8,["message"])])]),footer:o(()=>[n(d,{onClick:e.closeModal},{default:o(()=>[N]),_:1},8,["onClick"]),n(l,{class:w(["ms-3",{"opacity-25":e.form.processing}]),onClick:e.deleteUser,disabled:e.form.processing},{default:o(()=>[P]),_:1},8,["onClick","class","disabled"])]),_:1},8,["show","onClose"])]),_:1})}var Z=b(k,[["render",E]]);export{Z as default};

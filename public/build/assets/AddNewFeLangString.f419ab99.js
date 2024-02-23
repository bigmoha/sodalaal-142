import{U as v}from"./UpdaterLayout.58f2184e.js";import{P as S}from"./PsButton.6e47777c.js";import{P as w}from"./PsLoadingCircleDialog.1c2df66f.js";import{d as x,p as y,i as l,Q as g,O as p,o as M,c as P,b as o,w as u,a as d,t as m,q as U,B as n,r as s}from"./app.bcb0820c.js";import{P as $}from"./PsErrorDialog.d3e814f0.js";import{P as B}from"./PsSuccessDialog.c18e6651.js";import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsIcon.71b0e9da.js";import"./Icons.80b46b2b.js";import"./PsModal.fccd5c23.js";import"./vue-neat-modal.bb68220d.js";import"./PsLabel.ba854ae6.js";import"./PsLoading.9d8c0dd0.js";const C=x({components:{UpdaterLayout:v,Link:y,PsButton:S,PsLoadingCircleDialog:w,PsErrorDialog:$,PsSuccessDialog:B},setup(t){const e=l(),_=l(),r=l();let i=g().props.logMessages;i=="fe_lang_sync_success"&&p.get(route("NextLaravelUpdater::addNewMobileLangString"));function c(){p.post(route("NextLaravelUpdater::addNewFeLangString"),{},{onBefore:()=>{r.value.openModal(n("core__be_importing_title2_be"),n("core__be_importing_note2_fe"))},onSuccess:a=>{g().props.logMessages=="fe_lang_sync_success"&&p.get(route("NextLaravelUpdater::addNewMobileLangString"))},onError:a=>{r.value.closeModal(),e.value.openModal(n("ps_error_dialog__error"),n(a.message),"OK")}})}return{toAddNewMobileLangString:c,ps_loading_circle_dialog:r,ps_error_dialog:e,ps_success_dialog:_,go_next:i}}}),k={class:"paragraph text-center"},D=d("div",{class:"",style:{"margin-bottom":"5px"}},null,-1),F={class:"buttons"};function A(t,e,_,r,i,c){const a=s("ps-button"),f=s("UpdaterLayout"),L=s("ps-error-dialog"),b=s("ps-success-dialog"),N=s("ps-loading-circle-dialog");return M(),P("div",null,[o(f,{title:"installer_messages.updater.addNewFeLangString.title"},{container:u(()=>[d("p",k,m(t.$t("installer_messages.updater.addNewFeLangString.message2")),1),D,d("div",F,[o(a,{onClick:e[0]||(e[0]=E=>t.toAddNewMobileLangString()),class:"button",type:"reset",padding:"px-7 py-2",rounded:"rounded",hover:""},{default:u(()=>[U(m(t.$t("btn_update")),1)]),_:1})])]),_:1}),o(L,{ref:"ps_error_dialog"},null,512),o(b,{ref:"ps_success_dialog"},null,512),o(N,{ref:"ps_loading_circle_dialog"},null,512)])}var W=h(C,[["render",A]]);export{W as default};
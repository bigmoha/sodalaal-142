import{bD as N,y as v,i as L,Z as z,B as b,o as U,c as S,b as g,w as P,a as B,F as M,s as A,f as h,q as H,t as I,n as E,g as O,r as f}from"./app.bcb0820c.js";import q from"./PsContentContainer.baf5d5b4.js";import T from"./PsLabelHeader4.e06a0f87.js";import Z from"./PsLabel.f618b059.js";import j from"./PsButton.2af859b4.js";import G from"./PsIcon.c315e2a2.js";import J from"./PsLoadingDialog.9586f261.js";import K from"./PsConfirmDialog.e09010a6.js";import Q from"./PsRouteLink.e985dbfe.js";import W from"./PsBreadcrumb2.ae081895.js";import X from"./PsNoResult.08b86bf7.js";import{a as V,P as k,b as R}from"./PsApiService.664f5104.js";import{B as C}from"./BlockedUser.0d78d6f8.js";import{m as F}from"./PsSepetetedStore.9a31ac47.js";import{U as Y,u as $}from"./UserStore.6fc60c2b.js";import D from"./BlockUserListHorizontal.9618725e.js";import{P as ee}from"./PsValueStore.db7005b9.js";import{U as y}from"./User.450a868b.js";import{A as x}from"./ApiStatus.5720ba0b.js";import{U as oe}from"./UserBlockParameterHolder.5aa06675.js";import{P as te}from"./PsUtils.eb7a8002.js";import se from"./PsFrontendLayout.c6e64cf5.js";import{_ as re}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsModal.b5929b7c.js";import"./vue-neat-modal.bb68220d.js";import"./PsLine.115a33c3.js";import"./PsLabelTitle.529f301f.js";import"./PsObject.a17ef38f.js";import"./RatingDetail.291ad5d1.js";import"./DefaultPhoto.cc755f93.js";import"./ps_constants.115f3686.js";import"./UserListParameterHolder.d110b747.js";import"./PsCard.748116f2.js";import"./Rating.f4588020.js";import"./PsLabelCaption.c39c43ba.js";import"./ProductRelation.4bf64f0e.js";import"./FooterView.68cf7b8a.js";import"./FooterLinkSection.3f744e23.js";import"./PsLink.dea1f7ef.js";import"./ProductParameterHolder.e481cecf.js";import"./AppInfoStore.e1ca82ff.js";import"./PsNavTabBar.0d828f1e.js";import"./PsDropdown.b0f6436e.js";import"./PsDropdownSelect.1e4537ad.js";import"./PsIconToggle.b913bae4.js";import"./PsInputWithLeftIcon.432593fa.js";import"./LocationModal.5b725b64.js";import"./LocationParameterHolder.df629adc.js";import"./ItemLocationTownship.94979fe0.js";import"./ItemLocationTownshipStore.652895d4.js";import"./AppInfoParameterHolder.e24d894d.js";import"./PsNavBar.f99c6cb9.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./UserUnReadMessageParameterHolder.9d1f58f0.js";import"./PsNotificationBox.5b80e886.js";import"./ProductStore.53a7e111.js";import"./Product.ccea159e.js";import"./Category.7c65464b.js";import"./DefaultIcon.e76b39a5.js";import"./SubCategory.1b4176e0.js";import"./Vendor.c037b10d.js";import"./UserDeleteItemParameterHolder.5d816aba.js";import"./NotificationStore.2c3becfc.js";import"./NotiUnRegisterHolder.eefb692e.js";import"https://unpkg.com/delayed-scroll-restoration-polyfill@0.1.1/index.js";const le=F(m=>N(`blockUserStore/${m}`,()=>{const n=v({value:!1}),e=v(new V),t=v({value:!1});let r=L(4),a=0;function u(o){var l,s;e!=null&&e.data!=null&&e.data.length>0&&a!=0?(o.data!=null&&o.data.length>0?(((l=o.data)==null?void 0:l.length)<r.value?n.value=!0:n.value=!1,e.data.push(...o.data)):n.value=!0,e.code=o.code,e.status=o.status,e.message=o.message):(((s=o.data)==null?void 0:s.length)<r.value||o.data==null?n.value=!0:n.value=!1,e.data=o.data,e.code=o.code,e.status=o.status,e.message=o.message),e!=null&&e.data!=null&&(a=e.data.length)}async function c(o){t.value=!0;const l=await k.getBlockedUserList(new C,o,r.value,a);u(l),t.value=!1}async function d(o){a=0,t.value=!0;const l=await k.getBlockedUserList(new C,o,r.value,a);u(l),t.value=!1}async function p(o){t.value=!0;const l=0,s=e.data.length,i=await k.getBlockedUserList(new C,o,s,l);e.data=i.data,e.code=i.code,e.status=i.status,e.message=i.message,t.value=!1}return{isNoMoreRecord:n,blockUserList:e,loading:t,limit:r,offset:a,updateBlockedUserList:u,loadBlockedUserList:c,resetBlockedUserList:d,refreshBlockedUserList:p}})),ae=F(m=>N(`otherUserStore/${m}`,()=>{const n=v(new V),e=v({value:!1});let t=L(30),r=0,a="",u=v(new Y);async function c(s){e.value=!0,await k.getOtherUser(new y,t.value,r,s.toMap()),e.value=!1}async function d(s){e.value=!0,await k.postUserFollow(new y,s.toMap(),s.userId),e.value=!1}async function p(s){r=0,e.value=!0,await k.getOtherUser(new y,t.value,r,s.toMap()),e.value=!1}async function o(s){e.value=!0;const i=await k.blockUser(new x,s.toMap());return e.value=!1,i}async function l(s,i){e.value=!0;const _=await k.postUnBlockUser(new x,s,i.toMap());return e.value=!1,_}return{user:n,loading:e,limit:t,offset:r,id:a,paramHolder:u,loadUser:c,postUserFollow:d,resetUser:p,blockUser:o,postUnBlockUser:l}})),ie={name:"BlockedUserListView",components:{PsContentContainer:q,PsLabelHeader4:T,BlockUserListHorizontal:D,PsLabel:Z,PsButton:j,PsIcon:G,PsLoadingDialog:J,PsConfirmDialog:K,PsRouteLink:Q,PsBreadcrumb2:W,PsNoResult:X,Head:z},props:["mobileSetting"],layout:se,setup(m){var s,i;const n=L(),e=L(),t=ee(),r=le(),a=$(),u=ae();r.limit=(i=(s=m.mobileSetting)==null?void 0:s.default_loading_limit)!=null?i:12;const c=t.getLoginUserId(),d=new oe;r.loadBlockedUserList(c),a.loadUser(c);function p(){r.loadBlockedUserList(c)}function o(_){n.value.openModal(b("blocked_user_list__confirm"),b("blocked_user_list__confirm_to_unblock_user"),b("blocked_user_list__unblock"),b("blocked_user_list__cancel"),()=>{l(_.userId)},()=>{te.log("Cancel")})}async function l(_){d.loginUserId=c,d.addedUserId=_,e.value.openModal();const w=await u.postUnBlockUser(c,d);if(w.status==R.ERROR){e.value.closeModal();return}else w.status==R.SUCCESS&&(r.refreshBlockedUserList(c),e.value.closeModal())}return{blockUserStore:r,loadMore:p,breadcrumbuserProvider:a,unBlockClicked:o,doUnBlock:l,ps_confirm_dialog:n,psloading:e}},computed:{breadcrumb(){return[{label:b("ps_nav_bar__profile"),url:route("fe_profile")},{label:b("blockd_user_list__blockd_user_list"),color:"text-fePrimary-500"}]}}},ne={class:"mt-32 mb-10"},ce={class:"mb-6"},me={class:"mt-4"},ue={key:0,class:"w-full"},de={class:"grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6"},pe={class:"flex flex-col items-center"};function _e(m,n,e,t,r,a){const u=f("Head"),c=f("ps-breadcrumb-2"),d=f("block-user-list-horizontal"),p=f("ps-button"),o=f("ps-no-result"),l=f("ps-content-container"),s=f("ps-confirm-dialog"),i=f("ps-loading-dialog");return U(),S(M,null,[g(u,{title:m.$t("blockd_user_list__blockd_user_list")},null,8,["title"]),g(l,null,{content:P(()=>{var _;return[B("div",ne,[B("div",ce,[g(c,{items:a.breadcrumb,class:""},null,8,["items"])]),B("div",me,[t.blockUserStore.blockUserList.data!=null?(U(),S("div",ue,[B("div",de,[(U(!0),S(M,null,A(t.blockUserStore.blockUserList.data,w=>(U(),S("div",{class:"w-full",key:w.userId},[g(d,{block:w,onClick:t.unBlockClicked},null,8,["block","onClick"])]))),128))]),B("div",pe,[t.blockUserStore.loading.value==!1?(U(),h(p,{key:0,class:E(["font-medium mx-auto mt-6",t.blockUserStore.isNoMoreRecord.value?"hidden":""]),onClick:t.loadMore},{default:P(()=>[H(I(m.$t("follower_list__load_more")),1)]),_:1},8,["onClick","class"])):(U(),h(p,{key:1,class:"font-medium mx-auto mt-6",onClick:t.loadMore,disabled:!0},{default:P(()=>[H(I(m.$t("follower_list__loading")),1)]),_:1},8,["onClick"]))])])):O("",!0),t.blockUserStore.loading.value==!1&&((_=t.blockUserStore.blockUserList)==null?void 0:_.data)==null?(U(),h(o,{key:1,onOnClick:t.loadMore},null,8,["onOnClick"])):O("",!0)])])]}),_:1}),g(s,{ref:"ps_confirm_dialog"},null,512),g(i,{ref:"psloading",isClickOut:!1},null,512)],64)}var yo=re(ie,[["render",_e]]);export{yo as default};

import{j as y,o as e,c as i,a as m,b as l,w as n,q as c,t as d,F as f,s as g,f as h,h as P,g as L,r as a}from"./app.bcb0820c.js";import I from"./PsLabelHeader4.e06a0f87.js";import H from"./PsLabel.f618b059.js";import z from"./PsButton.2af859b4.js";import C from"./PsRouteLink.e985dbfe.js";import N from"./PsAdSense.9b378c33.js";import A from"./ItemHorizontalItem.62813273.js";import j from"./ItemHorizontalSkeletorItem.e166b4e0.js";import{u as B}from"./ProductStore.53a7e111.js";import{u as M}from"./UserStore.6fc60c2b.js";import{P as V}from"./ProductParameterHolder.e481cecf.js";import{_ as D}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsValueStore.db7005b9.js";import"./AppInfoStore.e1ca82ff.js";import"./PsApiService.664f5104.js";import"./PsObject.a17ef38f.js";import"./DefaultPhoto.cc755f93.js";import"./ps_constants.115f3686.js";import"./AppInfoParameterHolder.e24d894d.js";import"./PsLabelTitle4.02ed3a91.js";import"./PsCard.748116f2.js";import"./PsIcon.c315e2a2.js";import"./PsLoadingDialog.9586f261.js";import"./PsModal.b5929b7c.js";import"./vue-neat-modal.bb68220d.js";import"./PsLine.115a33c3.js";import"./PsLabelTitle.529f301f.js";import"./format.min.378730c4.js";import"./Product.ccea159e.js";import"./Category.7c65464b.js";import"./DefaultIcon.e76b39a5.js";import"./SubCategory.1b4176e0.js";import"./ItemLocationTownship.94979fe0.js";import"./ProductRelation.4bf64f0e.js";import"./User.450a868b.js";import"./RatingDetail.291ad5d1.js";import"./Vendor.c037b10d.js";import"./PsValueHolder.00f22b51.js";import"./FavouriteItemStore.f5a1d999.js";import"./PsSepetetedStore.9a31ac47.js";import"./FollowItemParameterHolder.09b3e491.js";import"./PsUtils.eb7a8002.js";import"./moment.9709ab41.js";/* empty css                                                                       */import"./ApiStatus.5720ba0b.js";import"./UserDeleteItemParameterHolder.5d816aba.js";import"./vue-skeletor.esm.e6de6abe.js";/* empty css                     */import"./UserListParameterHolder.d110b747.js";const F={name:"ProfileLatestItemGrid",components:{PsLabelHeader4:I,PsLabel:H,PsButton:z,PsRouteLink:C,PsAdSense:N,ItemHorizontalItem:A,ItemHorizontalSkeletorItem:j},props:{userId:{type:String}},setup(o){const r=B();let p=M("other");r.paramHolder=new V().getLatestParameterHolder(),r.paramHolder.addedUserId=o.userId;function t(){r.loadItemList(o.userId,r.paramHolder)}return y(async()=>{setTimeout(async()=>{window.popStateDetected?window.popStateDetected=!1:r.resetProductList(o.userId,r.paramHolder)},1e3)}),{itemStore:r,userStore:p,loadMoreActivePost:t}}},q={key:0,class:"w-full col-span-4 sm:col-span-6 lg:col-span-9"},R={class:"w-full sm:mt-2"},T={class:"w-full h-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"},U={key:0,class:"flex justify-center mt-6 mb-4"},E={class:"mx-auto"},G={key:1,class:"w-full col-span-4 sm:col-span-6 lg:col-span-9 mt-4 mb-6"},J={class:"w-full"},K={class:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"},O={key:2,class:"col-span-4 sm:col-span-6 lg:col-span-9 mt-2 mb-6 w-full flex justify-center"};function Q(o,r,p,t,W,X){var u;const k=a("ps-label-header-4"),x=a("item-horizontal-item"),v=a("ps-route-link"),_=a("ps-button"),w=a("ps-ad-sense"),S=a("item-horizontal-skeletor-item"),b=a("ps-label");return((u=t.itemStore.itemList)==null?void 0:u.data)!=null?(e(),i("div",q,[m("div",R,[l(k,{class:"mt-8 mb-6 sm:mt-0 font-medium"},{default:n(()=>[c(d(t.userStore.user.data?t.userStore.user.data.userName+"'s":"")+" "+d(o.$t("other_profile__active_post")),1)]),_:1}),m("div",T,[(e(!0),i(f,null,g(t.itemStore.itemList.data,s=>(e(),i("div",{class:"w-full h-full",key:s.id},[l(v,{to:{name:"item",params:{itemName:s.title.split(" ").join("-").toLowerCase(),imgName:s.defaultPhoto.imgPath},query:{item_id:s.id,item_name:s.title.split(" ").join("-").toLowerCase()}}},{default:n(()=>[l(x,{item:s},null,8,["item"])]),_:2},1032,["to"])]))),128))])]),t.itemStore.isNoMoreRecord.value==!1?(e(),i("div",U,[t.itemStore.loading.value==!1?(e(),h(_,{key:0,onClick:P(t.loadMoreActivePost,["prevent"]),class:"flex flex-row",theme:"bg-fePrimary-500 dark:bg-feAccent-500 text-feAchromatic-50 dark:text-feAchromatic-900 capitalize px-4 py-1"},{default:n(()=>[c(d(o.$t("blog_list__load_more")),1)]),_:1},8,["onClick"])):(e(),h(_,{key:1,class:"mx-auto mt-8",disabled:!0},{default:n(()=>[c(d(o.$t("list__loading")),1)]),_:1}))])):L("",!0),m("div",E,[l(w,{adFormat:"horizontal"})])])):t.itemStore.itemList!=null&&t.itemStore.loading.value?(e(),i("div",G,[m("div",J,[m("div",K,[(e(),i(f,null,g(6,s=>m("div",{class:"w-full",key:s},[l(S)])),64))])])])):(e(),i("div",O,[l(b,{textColor:"text-feSecondary-500 dark:text-feAchromatic-50 lg:text-xl sm:text-lg text-base font-medium",class:"mt-10 flex-grow-0 mx-auto"},{default:n(()=>[c(d(o.$t("list__no_result")),1)]),_:1})]))}var Kt=D(F,[["render",Q]]);export{Kt as default};

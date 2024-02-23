import g from"./PsLabel.f618b059.js";import L from"./ItemHorizontalSwiper.6726a100.js";import y from"./PsLabelHeader5.9e9e29bf.js";import k from"./PsButton.2af859b4.js";import w from"./PsRouteLink.e985dbfe.js";import v from"./PsIcon.c315e2a2.js";import{u as S}from"./ProductStore.53a7e111.js";import{P as x}from"./PsValueStore.db7005b9.js";import{P as s}from"./ProductParameterHolder.e481cecf.js";import{_ as H}from"./plugin-vue_export-helper.21dcd24c.js";import{j as C,o as N,c as V,a as I,b as e,w as i,q as p,t as c,g as z,r}from"./app.bcb0820c.js";import"./vue-splide.esm.0da4dbfa.js";/* empty css                        */import"./ItemHorizontalItem.62813273.js";import"./PsLabelTitle4.02ed3a91.js";import"./PsCard.748116f2.js";import"./ps_constants.115f3686.js";import"./PsAdSense.9b378c33.js";import"./AppInfoStore.e1ca82ff.js";import"./PsApiService.664f5104.js";import"./PsObject.a17ef38f.js";import"./DefaultPhoto.cc755f93.js";import"./AppInfoParameterHolder.e24d894d.js";import"./PsLoadingDialog.9586f261.js";import"./PsModal.b5929b7c.js";import"./vue-neat-modal.bb68220d.js";import"./PsLine.115a33c3.js";import"./PsLabelTitle.529f301f.js";import"./format.min.378730c4.js";import"./Product.ccea159e.js";import"./Category.7c65464b.js";import"./DefaultIcon.e76b39a5.js";import"./SubCategory.1b4176e0.js";import"./ItemLocationTownship.94979fe0.js";import"./ProductRelation.4bf64f0e.js";import"./User.450a868b.js";import"./RatingDetail.291ad5d1.js";import"./Vendor.c037b10d.js";import"./PsValueHolder.00f22b51.js";import"./FavouriteItemStore.f5a1d999.js";import"./PsSepetetedStore.9a31ac47.js";import"./FollowItemParameterHolder.09b3e491.js";import"./PsUtils.eb7a8002.js";import"./moment.9709ab41.js";/* empty css                                                                       */import"./ItemHorizontalSkeletorItem.e166b4e0.js";import"./vue-skeletor.esm.e6de6abe.js";/* empty css                     */import"./ApiStatus.5720ba0b.js";import"./UserDeleteItemParameterHolder.5d816aba.js";const B={name:"DashboardItemHorizontalList",components:{ItemHorizontalSwiper:L,PsLabel:g,PsLabelHeader5:y,PsButton:k,PsRouteLink:w,PsIcon:v},props:{item_list_name:{type:String,default:"dashboard_recent"},limit:{type:Number,default:12}},setup(o){const m=x().getLoginUserId(),t=S(o.item_list_name);let a="";switch(o.item_list_name){case"dashboard_recent":t.paramHolder=new s().getLatestParameterHolder(),a="home__fe_recently_added";break;case"dashboard_popular":t.paramHolder=new s().getPopularParameterHolder(),a="dashboard__popular";break;case"dashboard_discount":t.paramHolder=new s().getDiscountParameterHolder(),a="dashboard__discount";break}t.limit=o.limit;let n=t.paramHolder.getUrlParamsAndQuery();return console.log(t.itemList),C(()=>{t.resetProductList(m,t.paramHolder)}),{title:a,itemListProvider:t,params:n}}},D={key:0},q={class:"flex justify-between items-center mt-10"};function U(o,_,m,t,a,n){var l;const f=r("ps-label-header-5"),u=r("ps-label"),d=r("ps-icon"),b=r("ps-button"),h=r("ps-route-link"),P=r("item-horizontal-swiper");return t.itemListProvider.hasData()!=null||t.itemListProvider.loading.value?(N(),V("div",D,[I("div",q,[e(f,{class:"font-semibold"},{default:i(()=>[p(c(o.$t(t.title)),1)]),_:1}),e(h,{to:{name:"fe_item_list",query:t.params.query}},{default:i(()=>[e(b,{class:"flex flex-row",padding:"p-2 sm:px-4 sm:py-2",shadow:"shadow-sm",rounded:"rounded",hover:"",focus:"",border:"border border-feSecondary-200 dark:border-feSecondary-800",colors:"bg-feAchromatic-50 text-feSecondary-800 dark:bg-feSecondary-800 dark:text-feSecondary-200"},{default:i(()=>[e(u,{class:"hidden sm:inline"},{default:i(()=>[p(c(o.$t("list_fe__view_all_label")),1)]),_:1}),e(d,{class:"sm:ms-2 block rtl:hidden",textColor:"dark:text-feSecondary-200",name:"rightChervon",h:"24",w:"24"}),e(d,{class:"sm:ms-2 hidden rtl:block",textColor:"dark:text-feSecondary-200",name:"leftChervon",h:"24",w:"24"})]),_:1})]),_:1},8,["to"])]),e(P,{class:"mt-6 mb-26 sm:mb-0",itemList:(l=t.itemListProvider.itemList)==null?void 0:l.data,isLoading:t.itemListProvider.loading.value,storeName:m.item_list_name},null,8,["itemList","isLoading","storeName"])])):z("",!0)}var Bt=H(B,[["render",U]]);export{Bt as default};
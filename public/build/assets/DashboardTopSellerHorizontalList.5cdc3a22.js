import L from"./PsLabel.f618b059.js";import v from"./PsLabelHeader5.9e9e29bf.js";import w from"./PsButton.2af859b4.js";import C from"./PsRouteLink.e985dbfe.js";import P from"./PsIcon.c315e2a2.js";import V from"./UserListHorizontal.14c4c0f6.js";import{P as N}from"./PsValueStore.db7005b9.js";import{u as R}from"./UserListStore.657d822e.js";import{_ as z}from"./plugin-vue_export-helper.21dcd24c.js";import{j as B,o as r,c as s,a as u,b as e,w as a,q as f,t as h,F as b,s as S,g as H,r as o}from"./app.bcb0820c.js";import"./PsCard.748116f2.js";import"./RatingShow.238fb877.js";import"./PsLabelCaption.c39c43ba.js";import"./PsLoadingDialog.9586f261.js";import"./PsModal.b5929b7c.js";import"./vue-neat-modal.bb68220d.js";import"./PsLine.115a33c3.js";import"./PsLabelTitle.529f301f.js";import"./User.450a868b.js";import"./PsObject.a17ef38f.js";import"./RatingDetail.291ad5d1.js";import"./ProductRelation.4bf64f0e.js";import"./UserStore.6fc60c2b.js";import"./PsApiService.664f5104.js";import"./DefaultPhoto.cc755f93.js";import"./ps_constants.115f3686.js";import"./PsSepetetedStore.9a31ac47.js";import"./UserListParameterHolder.d110b747.js";import"./ApiStatus.5720ba0b.js";import"./UserFollowHolder.8b598f9e.js";import"./ProductStore.53a7e111.js";import"./ProductParameterHolder.e481cecf.js";import"./Product.ccea159e.js";import"./Category.7c65464b.js";import"./DefaultIcon.e76b39a5.js";import"./SubCategory.1b4176e0.js";import"./ItemLocationTownship.94979fe0.js";import"./Vendor.c037b10d.js";import"./UserDeleteItemParameterHolder.5d816aba.js";const T={name:"DashboardTopSellerHorizontalList",components:{PsLabel:L,PsLabelHeader5:v,PsButton:w,PsRouteLink:C,PsIcon:P,UserListHorizontal:V},setup(){const m=N().getLoginUserId(),i=R("top_rated_seller");return B(()=>{i.resetTopRatedSellerList(m)}),{topRatedSellerStore:i}}},U={key:0},D={class:"flex justify-between items-center mt-10"},I={class:"mt-6 mb-26 sm:gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6"};function $(l,m,i,n,j,F){var c,_;const g=o("ps-label-header-5"),k=o("ps-label"),d=o("ps-icon"),x=o("ps-button"),y=o("ps-route-link"),p=o("user-list-horizontal");return n.topRatedSellerStore.hasData()?(r(),s("div",U,[u("div",D,[e(g,{class:"font-semibold"},{default:a(()=>[f(h(l.$t("core_fe__top_rated_seller")),1)]),_:1}),e(y,{to:{name:"fe_top_rated_seller_list"}},{default:a(()=>[e(x,{class:"flex flex-row",padding:"p-2 sm:px-4 sm:py-2",shadow:"shadow-sm",rounded:"rounded",hover:"",focus:"",border:"border border-feSecondary-200 dark:border-feSecondary-800",colors:"bg-feAchromatic-50 text-feSecondary-800 dark:bg-feSecondary-800 dark:text-feSecondary-200"},{default:a(()=>[e(k,{class:"hidden sm:inline"},{default:a(()=>[f(h(l.$t("list_fe__view_all_label")),1)]),_:1}),e(d,{class:"sm:ms-2 block rtl:hidden",textColor:"dark:text-feSecondary-200",name:"rightChervon",h:"24",w:"24"}),e(d,{class:"sm:ms-2 hidden rtl:block",textColor:"dark:text-feSecondary-200",name:"leftChervon",h:"24",w:"24"})]),_:1})]),_:1})]),u("div",I,[(r(!0),s(b,null,S((c=n.topRatedSellerStore.userList)==null?void 0:c.data.slice(0,3),t=>(r(),s("div",{key:t.id,class:"hidden md:block"},[e(p,{user:t,storeName:"top_rated_seller"},null,8,["user"])]))),128)),(r(!0),s(b,null,S((_=n.topRatedSellerStore.userList)==null?void 0:_.data.slice(0,2),t=>(r(),s("div",{key:t.id,class:"block md:hidden"},[e(p,{user:t,storeName:"top_rated_seller"},null,8,["user"])]))),128))])])):H("",!0)}var Ce=z(T,[["render",$]]);export{Ce as default};
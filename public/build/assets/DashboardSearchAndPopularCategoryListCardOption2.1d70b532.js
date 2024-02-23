import S from"./PsLabel.f618b059.js";import P from"./PsButton.2af859b4.js";import w from"./PsRouteLink.e985dbfe.js";import I from"./PsIcon.c315e2a2.js";import k from"./SearchForLargeScreenOption2.2e638df2.js";import{P as L}from"./PsValueStore.db7005b9.js";import{u as N}from"./CategoryStore.3a2fd25c.js";import{u as j}from"./TouchCountStore.d1e3c225.js";import{T}from"./TouchCountParameterHolder.9ce47d98.js";import{_ as A}from"./plugin-vue_export-helper.21dcd24c.js";import{i as V,y as B,j as D,o as n,c,a as t,m as b,g as x,b as l,w as p,q as d,t as u,F as H,s as U,r as f,E as O,R as $,S as z}from"./app.bcb0820c.js";import"./PsLabelCaption.c39c43ba.js";import"./PsInputWithLeftIcon.432593fa.js";import"./PsDropdown.b0f6436e.js";import"./PsInputWithRightIcon.2791a941.js";import"./PsLoadingDialog.9586f261.js";import"./PsModal.b5929b7c.js";import"./vue-neat-modal.bb68220d.js";import"./PsLine.115a33c3.js";import"./PsLabelTitle.529f301f.js";import"./LocationParameterHolder.df629adc.js";import"./PsApiService.664f5104.js";import"./ItemLocationTownship.94979fe0.js";import"./PsObject.a17ef38f.js";import"./PsSepetetedStore.9a31ac47.js";import"./ps_constants.115f3686.js";import"./ProductStore.53a7e111.js";import"./ProductParameterHolder.e481cecf.js";import"./Product.ccea159e.js";import"./DefaultPhoto.cc755f93.js";import"./Category.7c65464b.js";import"./DefaultIcon.e76b39a5.js";import"./SubCategory.1b4176e0.js";import"./ProductRelation.4bf64f0e.js";import"./User.450a868b.js";import"./RatingDetail.291ad5d1.js";import"./Vendor.c037b10d.js";import"./ApiStatus.5720ba0b.js";import"./UserDeleteItemParameterHolder.5d816aba.js";import"./AppInfoParameterHolder.e24d894d.js";import"./AppInfoStore.e1ca82ff.js";import"./PsStore.dc51d097.js";const F={name:"DashboardSearchAndPopularCategoryListCardOption2",components:{PsLabel:S,PsButton:P,PsRouteLink:w,PsIcon:I,SearchForLargeScreem:k},props:{bannerImgPath:{type:String,default:""},limit:{type:Number,default:12},showSubCat:{type:Boolean,default:!0}},setup(e){const i=L().getLoginUserId(),o=V(!0),h=B({lifecycle:{loading:()=>{o.value=!0},error:()=>{o.value=!1},loaded:()=>{o.value=!1}}}),g=j(),r=new T;r.typeName="category",r.userId=i;const a=N("dashboard_popular_cat");a.limit=e.limit,a.paramHolder.keyword="",a.paramHolder.orderType="desc",a.paramHolder.orderBy="category_touch_count";function _(m){r.typeId=m,g.postTouchCount(i,r)}return D(()=>{a.resetCategoryList(i,a.paramHolder)}),{lazyOptions:h,is_banner_loading:o,popularCategoryStore:a,updateCategoryTouchCount:_}}},v=e=>($("data-v-460db0fd"),e=e(),z(),e),q={class:"mt-24 w-full"},E={class:"bg-feAchromatic-900 relative"},R={class:"w-full h-[680px] sm:h-[680px] object-cover relative flex justify-center items-center"},M={alt:"Placeholder",class:"w-full opacity-60 h-[680px] sm:h-[680px] object-cover"},G={key:0,class:"opacity-60 w-full h-full flex flex-col justify-center items-center gap-10 absolute bg-gray-300"},J=v(()=>t("span",{class:"loader"},null,-1)),K=v(()=>t("span",{class:"text-3xl text-gray-500 font-semibold"},"Loading",-1)),Q=[J,K],W={class:"absolute top-0 w-full h-full flex flex-col justify-center gap-5 sm:gap-8"},X={class:"text-center"},Y={class:"bg-feAchromatic-50 dark:bg-feSecondary-800 rounded-3xl px-4 py-4 sm:py-2 mx-auto"},Z={class:""},ee={key:0,class:"flex justify-center flex-wrap gap-x-1 sm:gap-x-1 gap-y-1"},te={class:"text-center cursor-pointer w-26 overflow-hidden bg-feAchromatic-50 dark:bg-feSecondary-700 border border-feAchromatic-400 sm:rounded-md lg:rounded-md hover:bg-fePrimary-50 hover:border-fePrimary-500 hover:dark:bg-fePrimary-900"},oe={class:"relative flex justify-center"},re={alt:"Placeholder",class:"w-10 h-10 pt-2 transform transition duration-500 hover:text-fePrimary-500 object-contain"};function ae(e,C,i,o,h,g){var y;const r=f("ps-label"),a=f("search-for-large-screem"),_=f("ps-route-link"),m=O("lazy");return n(),c("div",q,[t("div",E,[t("div",R,[b(t("img",M,null,512),[[m,{src:e.$page.props.uploadUrl+"/"+i.bannerImgPath,error:e.$page.props.sysImageUrl+"/default_photo.png",lifecycle:o.lazyOptions.lifecycle}]]),o.is_banner_loading?(n(),c("div",G,Q)):x("",!0)]),t("div",W,[t("div",X,[l(r,{class:"text-xl font-semibold mb-4 sm:text-4xl xl:text-5xl",textColor:"text-fePrimary-50"},{default:p(()=>[d(u(e.$t("home__banner_header")),1)]),_:1}),l(r,{class:"text-base font-normal px-10",textColor:"text-fePrimary-50"},{default:p(()=>[d(u(e.$t("home__banner_desc")),1)]),_:1})]),t("div",Y,[l(a)]),t("div",Z,[l(r,{class:"text-center text-sm font-normal mb-4",textColor:"text-fePrimary-50"},{default:p(()=>[d(u(e.$t("home__popular_categories")),1)]),_:1}),((y=o.popularCategoryStore.itemList)==null?void 0:y.data)!=null?(n(),c("div",ee,[(n(!0),c(H,null,U(o.popularCategoryStore.itemList.data.slice(0,6),s=>(n(),c("div",{key:s.catId,class:""},[l(_,{to:{name:i.showSubCat?"fe_sub_category":"fe_item_list",query:{cat_id:s.catId,cat_name:s.catName,status:1}},onClick:se=>o.updateCategoryTouchCount(s.catId)},{default:p(()=>[t("div",te,[t("div",oe,[b(t("img",re,null,512),[[m,{src:e.$page.props.thumb2xUrl+"/"+s.defaultIcon.imgPath,error:e.$page.props.sysImageUrl+"/default_photo.png"}]])]),l(r,{class:"text-sm pt-1 pb-4 font-normal",textColor:"text-fePrimary-500"},{default:p(()=>[d(u(s.catName.length>8?s.catName.slice(0,8)+"...":s.catName),1)]),_:2},1024)])]),_:2},1032,["to","onClick"])]))),128))])):x("",!0)])])])])}var Ke=A(F,[["render",ae],["__scopeId","data-v-460db0fd"]]);export{Ke as default};
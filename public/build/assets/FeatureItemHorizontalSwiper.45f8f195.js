import{S as w,a as S,b as h}from"./vue-splide.esm.0da4dbfa.js";/* empty css                   */import k from"./ItemHorizontalItem.62813273.js";import b from"./PsRouteLink.e985dbfe.js";import v from"./PsButton.2af859b4.js";import y from"./PsIcon.c315e2a2.js";import{_ as x}from"./plugin-vue_export-helper.21dcd24c.js";import{o as a,c,b as t,w as i,F as P,s as N,f as d,g as B,a as p,n as z,r as o}from"./app.bcb0820c.js";import"./PsLabel.f618b059.js";import"./PsLabelTitle4.02ed3a91.js";import"./PsCard.748116f2.js";import"./ps_constants.115f3686.js";import"./PsAdSense.9b378c33.js";import"./PsValueStore.db7005b9.js";import"./AppInfoStore.e1ca82ff.js";import"./PsApiService.664f5104.js";import"./PsObject.a17ef38f.js";import"./DefaultPhoto.cc755f93.js";import"./AppInfoParameterHolder.e24d894d.js";import"./PsLoadingDialog.9586f261.js";import"./PsModal.b5929b7c.js";import"./vue-neat-modal.bb68220d.js";import"./PsLine.115a33c3.js";import"./PsLabelTitle.529f301f.js";import"./format.min.378730c4.js";import"./Product.ccea159e.js";import"./Category.7c65464b.js";import"./DefaultIcon.e76b39a5.js";import"./SubCategory.1b4176e0.js";import"./ItemLocationTownship.94979fe0.js";import"./ProductRelation.4bf64f0e.js";import"./User.450a868b.js";import"./RatingDetail.291ad5d1.js";import"./Vendor.c037b10d.js";import"./PsValueHolder.00f22b51.js";import"./ProductStore.53a7e111.js";import"./ProductParameterHolder.e481cecf.js";import"./ApiStatus.5720ba0b.js";import"./UserDeleteItemParameterHolder.5d816aba.js";import"./PsSepetetedStore.9a31ac47.js";import"./FavouriteItemStore.f5a1d999.js";import"./FollowItemParameterHolder.09b3e491.js";import"./PsUtils.eb7a8002.js";import"./moment.9709ab41.js";/* empty css                                                                       */const I={name:"FeatureItemHorizontalSwiper",components:{Splide:w,SplideSlide:S,SplideTrack:h,ItemHorizontalItem:k,PsRouteLink:b,PsButton:v,PsIcon:y},props:{itemList:Object,notShowTitle:{type:Boolean,default:!1},storeName:{type:String,default:""}},setup(_){const n={rewind:!0,gap:"1.5rem",perPage:4,focus:0,omitEnd:!0,pagination:!1,direction:e(),breakpoints:{1536:{perPage:4,gap:"1.5rem"},1280:{perPage:4,gap:".75rem"},1024:{perPage:3,gap:".75rem"},768:{perPage:2,gap:".75rem"},640:{perPage:2,gap:".5rem"},200:{perPage:2}}};function e(){return localStorage.activeLanguage!=null&&localStorage.activeLanguage!=null&&localStorage.activeLanguage=="ar"?"rtl":"ltr"}return{options:n,getDir:e}}},L={class:""},C={class:"bg-feSecondary-50 dark:bg-feSecondary-800 w-10 h-10 rounded shadow-sm p-2 splide__arrow--prev",type:"button","aria-label":"Previous slide","aria-controls":"splide01-track"},F={class:"bg-feSecondary-50 dark:bg-feSecondary-800 w-10 h-10 rounded shadow-sm p-2 splide__arrow--next",type:"button","aria-label":"Next slide","aria-controls":"splide01-track"};function T(_,n,e,s,H,R){const m=o("item-horizontal-item"),u=o("splide-slide"),g=o("splide-track"),l=o("ps-icon"),f=o("splide");return a(),c("div",L,[t(f,{options:s.options,"has-track":!1},{default:i(()=>[t(g,null,{default:i(()=>[(a(!0),c(P,null,N(e.itemList,r=>(a(),d(u,{key:r.id},{default:i(()=>[r.title==""?(a(),d(m,{key:0,item:r},null,8,["item"])):B("",!0),t(m,{item:r,notShowTitle:e.notShowTitle,storeName:e.storeName},null,8,["item","notShowTitle","storeName"])]),_:2},1024))),128))]),_:1}),p("div",{class:z("splide__arrows splide__arrows--"+s.getDir())},[p("button",C,[t(l,{textColor:"dark:text-feSecondary-200",name:"arrowNarrowRight",h:"23",w:"23",viewBox:"0 -3 9 20"})]),p("button",F,[t(l,{textColor:"dark:text-feSecondary-200",name:"arrowNarrowRight",h:"23",w:"23",viewBox:"0 -3 9 20"})])],2)]),_:1},8,["options"])])}var Be=x(I,[["render",T],["__scopeId","data-v-c309b066"]]);export{Be as default};
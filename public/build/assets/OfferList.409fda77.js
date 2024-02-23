import{Z as I,O as T,i as w,o,c as r,b as s,a as i,w as a,q as b,t as n,F as v,s as y,g as S,r as d}from"./app.bcb0820c.js";import O from"./PsIcon.c315e2a2.js";import E from"./PsLabelCaption3.02c6b01e.js";import H from"./PsButton.2af859b4.js";import R from"./PsRouteLink.e985dbfe.js";import U from"./PsLabel.f618b059.js";import{u as A}from"./OfferStore.0beb1cb3.js";import{P as F}from"./PsValueStore.db7005b9.js";import{P as p}from"./ps_constants.115f3686.js";import B from"./ChatHorizontalItem.d53170e8.js";import Y from"./OfferHorizontalItem.8424db88.js";import V from"./ChatBuyerHorizontalItem.ece52ea0.js";import N from"./ChatSkeletorItem.453f0bfd.js";import z from"./PsFrontendLayout.c6e64cf5.js";import{_ as q}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsApiService.664f5104.js";import"./PsObject.a17ef38f.js";import"./Product.ccea159e.js";import"./DefaultPhoto.cc755f93.js";import"./Category.7c65464b.js";import"./DefaultIcon.e76b39a5.js";import"./SubCategory.1b4176e0.js";import"./ItemLocationTownship.94979fe0.js";import"./ProductRelation.4bf64f0e.js";import"./User.450a868b.js";import"./RatingDetail.291ad5d1.js";import"./Vendor.c037b10d.js";import"./ApiStatus.5720ba0b.js";import"./PsSepetetedStore.9a31ac47.js";import"./PsCard.748116f2.js";import"./AppInfoStore.e1ca82ff.js";import"./AppInfoParameterHolder.e24d894d.js";import"./PsValueHolder.00f22b51.js";import"./ChatHistory.1573b0ab.js";import"./moment.9709ab41.js";import"./format.min.378730c4.js";import"./vue-skeletor.esm.e6de6abe.js";/* empty css                     */import"./FooterView.68cf7b8a.js";import"./FooterLinkSection.3f744e23.js";import"./PsLink.dea1f7ef.js";import"./PsLabelCaption.c39c43ba.js";import"./ProductParameterHolder.e481cecf.js";import"./PsNavTabBar.0d828f1e.js";import"./PsDropdown.b0f6436e.js";import"./PsDropdownSelect.1e4537ad.js";import"./PsIconToggle.b913bae4.js";import"./PsInputWithLeftIcon.432593fa.js";import"./LocationModal.5b725b64.js";import"./PsModal.b5929b7c.js";import"./vue-neat-modal.bb68220d.js";import"./PsLine.115a33c3.js";import"./LocationParameterHolder.df629adc.js";import"./ItemLocationTownshipStore.652895d4.js";import"./PsNavBar.f99c6cb9.js";import"./UserStore.6fc60c2b.js";import"./UserListParameterHolder.d110b747.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./UserUnReadMessageParameterHolder.9d1f58f0.js";import"./PsConfirmDialog.e09010a6.js";import"./PsUtils.eb7a8002.js";import"./PsNotificationBox.5b80e886.js";import"./ProductStore.53a7e111.js";import"./UserDeleteItemParameterHolder.5d816aba.js";import"./NotificationStore.2c3becfc.js";import"./NotiUnRegisterHolder.eefb692e.js";import"https://unpkg.com/delayed-scroll-restoration-polyfill@0.1.1/index.js";class M{constructor(){this.userId="",this.returnType=""}OfferParameterHolder(){this.userId="",this.returnType=""}getOfferSentList(){return this.userId="",this.returnType=p.CHAT_TYPE_SELLER,this}getOfferReceivedList(){return this.userId="",this.returnType=p.CHAT_TYPE_BUYER,this}resetParameterHolder(){return this.userId="",this.returnType="",this}toMap(){const u={};return u.user_id=this.userId,u.return_type=this.returnType,u}}const D={name:"ChatListView",components:{PsButton:H,PsLabel:U,PsLabelCaption3:E,PsIcon:O,ChatHorizontalItem:B,ChatBuyerHorizontalItem:V,ChatSkeletorItem:N,PsRouteLink:R,OfferHorizontalItem:Y,Head:I},props:["mobileSetting"],layout:z,setup(l){const u=F(),g=A(),t=A(),m=u.getLoginUserId();(m==null||m==""||m==p.NO_LOGIN_USER)&&T.get(route("login"));const c=new M().getOfferSentList(),f=w(!0),_=w(!1);c.userId=m,c.returnType=p.CHAT_TYPE_SELLER,x();async function x(){await g.resetOfferList(c,m),console.log(g.offerList.data),f.value=!1}async function k(){_.value=!0,f.value=!0,c.userId=m,c.returnType=p.CHAT_TYPE_BUYER,await g.resetOfferList(c,m),console.log(g.offerList.data),f.value=!1}async function h(){_.value=!1,f.value=!0,c.userId=m,c.returnType=p.CHAT_TYPE_SELLER,await t.resetOfferList(c,m),console.log(t.offerList.data),f.value=!1}return{offerListProvider:g,offerReceivedListProvider:t,sellerClicked:k,buyerClicked:h,ps_loading:f,PsConst:p,isSellerFocus:_}}},G={class:"sm:mt-32 lg:mt-36 mt-28 mb-16 px-5 xl:px-52 mx-auto"},Z={class:"grid lg:grid-cols-12 sm:grid-cols-8 grid-cols-4 gap-4 sm:gap-3.5 lg:gap-10"},j={class:"col-start-0 col-span-4 sm:col-span-2 lg:col-span-3"},J={class:""},K={key:0,class:"flex flex-row rtl:space-x-reverse space-x-2 sm:space-x-0 space-y-0 sm:space-y-2 sm:flex-col",id:"sellerbtn",disabled:!0},Q={class:"me-2 md:me-4"},W={class:"me-2 md:me-4"},X={key:1,class:"flex flex-row rtl:space-x-reverse space-x-2 sm:space-x-0 space-y-0 sm:space-y-2 sm:flex-col",id:"buyerbtn",disabled:!0},$={class:"me-2 md:me-4"},ee={class:"me-2 md:me-4"},te={class:"col-span-4 sm:col-span-6 lg:col-span-9"},oe={key:0,class:"col-span-4 sm:col-span-6 lg:col-span-9 mb-2"},re={key:1,class:"col-span-4 sm:col-span-6 lg:col-span-9 mb-2"},se={key:2},ie={id:"seller",class:"w-full flex flex-col bg-fePrimary-50 dark:bg-feAchromatic-800 lg:p-4 p-2 sm:p-3 rounded-2xl"},le={class:"w-full"},ae={class:"flex flex-col"},me={key:3,id:"seller",class:"flex flex-row mb-16"},ce={key:0,class:"w-full flex flex-col bg-fePrimary-50 dark_bg-feAchromatic-800 lg:p-4 p-2 sm:p-3 rounded-2xl"},ne={key:1,class:"w-full flex flex-col bg-fePrimary-50 dark:bg-feAchromatic-800 lg:p-4 p-2 sm:p-3 rounded-2xl"},fe={class:"flex flex-wrap"},de={key:4,id:"buyer",class:"flex flex-row mb-16"},_e={key:0,class:"w-full flex flex-col bg-fePrimary-50 dark_bg-feAchromatic-800 lg:p-4 p-2 sm:p-3 rounded-2xl"},pe={key:1,class:"w-full"},ue={class:"w-full flex flex-col bg-fePrimary-50 dark_bg-feAchromatic-800 lg:p-4 p-2 sm:p-3 rounded-2xl"};function ge(l,u,g,t,m,c){const f=d("Head"),_=d("ps-label"),x=d("ps-button"),k=d("chat-skeletor-item"),h=d("ps-icon"),L=d("ps-label-caption-3"),C=d("offer-horizontal-item"),P=d("ps-route-link");return o(),r(v,null,[s(f,{title:l.$t("chat_list__messages")},null,8,["title"]),i("div",G,[i("div",Z,[i("div",j,[s(_,{class:"text-xl sm:text-3xl font-medium mb-5"},{default:a(()=>[b(n(l.$t("core__fe_offers")),1)]),_:1}),i("div",J,[t.isSellerFocus?(o(),r("div",X,[s(x,{class:"w-full",colors:"bg-feAchromatic-50 dark_bg-feAchromatic-800 dark_text-feAchromatic-200 hover_text-feAchromatic-50",border:"border border-feAchromatic-300 dark_border-feAchromatic-500",rounded:"rounded",onClick:t.buyerClicked},{default:a(()=>[i("span",$,n(l.$t("offer_list__offer_sent")),1)]),_:1},8,["onClick"]),s(x,{class:"w-full",onClick:t.sellerClicked},{default:a(()=>[i("span",ee,n(l.$t("offer_list__offer_received")),1)]),_:1},8,["onClick"])])):(o(),r("div",K,[s(x,{class:"w-full",onClick:t.buyerClicked},{default:a(()=>[i("span",Q,n(l.$t("offer_list__offer_sent")),1)]),_:1},8,["onClick"]),s(x,{class:"w-full",colors:"bg-feAchromatic-50 dark_bg-feAchromatic-800 dark_text-feAchromatic-200 hover_text-feAchromatic-50",border:"border border-feAchromatic-300 dark_border-feAchromatic-500",rounded:"rounded",onClick:t.sellerClicked},{default:a(()=>[i("span",W,n(l.$t("offer_list__offer_received")),1)]),_:1},8,["onClick"])]))])]),i("div",te,[t.isSellerFocus?(o(),r("div",oe,[s(_,{class:"text-sm sm:text-xl font-medium"},{default:a(()=>[b(n(l.$t("offer_list__offer_received")),1)]),_:1})])):(o(),r("div",re,[s(_,{class:"text-sm sm:text-xl font-medium"},{default:a(()=>[b(n(l.$t("offer_list__offer_sent")),1)]),_:1})])),t.ps_loading?(o(),r("div",se,[i("div",ie,[i("div",le,[i("div",ae,[(o(),r(v,null,y(3,e=>i("div",{class:"w-full mt-2",key:e},[s(k)])),64))])])])])):S("",!0),t.isSellerFocus&&t.ps_loading==!1?(o(),r("div",me,[t.offerListProvider.offerList.data==null?(o(),r("div",ce,[s(h,{name:"mailOpen",textColor:"text-feSecondary-400 dark_text-feAchromatic-500",class:"mt-2 w-full mx-auto",w:"80",h:"80"}),s(L,{class:"text-center mb-2"},{default:a(()=>[b(n(l.$t("offer_list__nothing_in_offer_received")),1)]),_:1})])):(o(),r("div",ne,[i("div",fe,[(o(!0),r(v,null,y(t.offerListProvider.offerList.data,e=>(o(),r("div",{class:"mt-2 w-full",key:e.id},[s(P,{to:{name:"chat",query:{buyer_user_id:e.buyerUserId,seller_user_id:e.sellerUserId,item_name:e.item.title,item_id:e.itemId,item_image_name:e.item.defaultPhoto.imgPath,item_price:e.item.price,currency:e.item.itemCurrency.currencySymbol,chat_flag:t.PsConst.CHAT_FROM_SELLER.toString(),is_sold_out:e.item.isSoldOut}}},{default:a(()=>[s(C,{chathistory:e},null,8,["chathistory"])]),_:2},1032,["to"])]))),128))])]))])):t.ps_loading==!1?(o(),r("div",de,[t.offerReceivedListProvider.offerList.data==null?(o(),r("div",_e,[s(h,{name:"mailOpen",textColor:"text-feSecondary-400 dark_text-feAchromatic-500",class:"mt-2 w-full mx-auto",w:"80",h:"80"}),s(L,{class:"text-center mb-2"},{default:a(()=>[b(n(l.$t("offer_list__nothing_in_offer_sent")),1)]),_:1})])):(o(),r("div",pe,[i("div",ue,[(o(!0),r(v,null,y(t.offerReceivedListProvider.offerList.data,e=>(o(),r("div",{class:"w-full mt-2",key:e.id},[s(P,{to:{name:"chat",query:{buyer_user_id:e.buyerUserId,seller_user_id:e.sellerUserId,item_name:e.item.title,item_id:e.itemId,item_image_name:e.item.defaultPhoto.imgPath,item_price:e.item.price,currency:e.item.itemCurrency.currencySymbol,chat_flag:t.PsConst.CHAT_FROM_BUYER.toString(),is_sold_out:e.item.isSoldOut}}},{default:a(()=>[s(C,{chathistory:e},null,8,["chathistory"])]),_:2},1032,["to"])]))),128))])]))])):S("",!0)])])])],64)}var Ot=q(D,[["render",ge]]);export{Ot as default};

import E from"./PsLabel.f618b059.js";import R from"./PaidAdItemPaidStatus.14b777d8.js";import j from"./PsCard.748116f2.js";import B from"./PsIcon.c315e2a2.js";import H from"./PsRouteLink.e985dbfe.js";import O from"./PsLoadingDialog.9586f261.js";import{i as z,o as w,c as k,a,b as r,w as s,m as D,n as T,q as f,t as o,f as M,g as C,F as q,B as A,O as G,r as h,E as J}from"./app.bcb0820c.js";import{f as K}from"./format.min.378730c4.js";import{P as F}from"./ps_constants.115f3686.js";import{P as Q,u as W}from"./PaidAdItemStore.beaa3f99.js";import{P as U}from"./PsValueStore.db7005b9.js";import{u as X}from"./PsValueHolder.00f22b51.js";import{u as Y}from"./AppInfoStore.e1ca82ff.js";import{u as Z}from"./FavouriteItemStore.f5a1d999.js";import{A as $}from"./AppInfoParameterHolder.e24d894d.js";import{h as ee}from"./moment.9709ab41.js";import{_ as te}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsLabelCaption.c39c43ba.js";import"./PsModal.b5929b7c.js";import"./vue-neat-modal.bb68220d.js";import"./PsLine.115a33c3.js";import"./PsLabelTitle.529f301f.js";import"./PsApiService.664f5104.js";import"./PsObject.a17ef38f.js";import"./Product.ccea159e.js";import"./DefaultPhoto.cc755f93.js";import"./Category.7c65464b.js";import"./DefaultIcon.e76b39a5.js";import"./SubCategory.1b4176e0.js";import"./ItemLocationTownship.94979fe0.js";import"./ProductRelation.4bf64f0e.js";import"./User.450a868b.js";import"./RatingDetail.291ad5d1.js";import"./Vendor.c037b10d.js";import"./PsSepetetedStore.9a31ac47.js";const ae={name:"PaidAdItemHorizontalItem",components:{PsLabel:E,PsCard:j,PsRouteLink:H,PsIcon:B,PaidAdItemPaidStatus:R,PsLoadingDialog:O},props:{paiditem:{type:Q},onClick:Function},setup(){var S,x,g;U.psValueStore=X();const i=W(),p=U(),e=Z(),t=p.getLoginUserId(),N=new $;N.userId=t;const m=Y(),_=z(!1);((g=(x=(S=m==null?void 0:m.appInfo)==null?void 0:S.data)==null?void 0:x.mobileSetting)==null?void 0:g.is_show_owner_info)=="1"&&(_.value=!0);const u=z();function n(d){var l,c,y,v,V;if(d.toString()=="0")return A("item_price__free");if(((c=(l=m.appInfo.data)==null?void 0:l.psAppSetting)==null?void 0:c.SelectedPriceType)==F.PRICE_RANGE){const L=parseFloat(d),b=parseInt(L);return b>5?"$".repeat(5):b<1?"$".repeat(1):"$".repeat(b)}else return K((V=(v=(y=m==null?void 0:m.appInfo)==null?void 0:y.data)==null?void 0:v.mobileSetting)==null?void 0:V.price_format,d)}async function P(d){t&&t!=F.NO_LOGIN_USER?(u.value.openModal(),d.isFavourited=="1"?u.value.message=A("item_detail__removing_item_from_favourite"):u.value.message=A("item_detail__adding_item_to_favourite"),await e.postFavourite(d.id,t),await I(),u.value.closeModal()):G.get(route("login"))}async function I(){await i.refleshPaidAdItemList(t)}return{itempaidProvider:i,formatPrice:n,psValueStore:p,PsConst:F,appInfoStore:m,favouriteClicked:P,ps_loading_dialog:u,showProfile:_,moment:ee}}},ie={class:"relative"},oe={class:"overflow-hidden lg:h-56 h-36 w-full"},re={alt:"Placeholder",class:"overflow-hidden transform transition duration-500 hover:scale-110 block object-cover w-screen lg:h-56 h-36",width:"640px",height:"360px"},se={class:"flex items-center gap-2"},me={class:"grow ms-1"},ne={class:"float-end"},de={class:"grow ms-3"},le={class:"float-end"},ce={class:"grow ms-1"},fe={key:0,class:"pt-1 pb-2 flex flex-row items-center no-underline justify-between text-feAchromatic-900 leading-none px-2 rounded-b-xl lg:rounded-b-2xl"},pe={class:"relative"},ue={alt:"Placeholder",class:"rounded-full bg-transparent lg:w-8 lg:h-8 w-6 h-6 flex items-center justify-center object-cover",width:"50px",height:"50px"},_e={key:0,class:"w-3 h-3 bg-feInfo-500 rounded-full flex justify-center items-center absolute bottom-0 right-0"},ge={class:"flex truncate text-xs text-feSecondary-800 dark:text-feSecondary-300"},he={class:"font-light text-xs text-feSecondary-500 dark:text-feSecondary-500"};function xe(i,p,e,t,N,m){const _=h("ps-icon"),u=h("paid-ad-item-paid-status"),n=h("ps-label"),P=h("ps-route-link"),I=h("ps-card"),S=h("ps-loading-dialog"),x=J("lazy");return w(),k(q,null,[a("div",{class:"cursor-pointer sm:w-full md:w-full",onClick:p[1]||(p[1]=g=>e.onClick!=null?e.onClick(e.paiditem):null)},[r(I,{class:"lg:rounded-lg rounded-lg shadow-sm relative z-0",enabledHover:!0},{default:s(()=>{var g,d;return[a("div",{class:"absolute z-10 bg-feAchromatic-50 dark:bg-feSecondary-800 rounded w-10 h-10 flex justify-center items-center right-2 top-2",onClick:p[0]||(p[0]=l=>t.favouriteClicked(e.paiditem.item))},[r(_,{textColor:"text-fePrimary-500 dark:text-feAchromatic-50",name:e.paiditem.item.isFavourited=="1"?"heart":"heart-outline",h:"24",w:"24"},null,8,["name"])]),r(P,{to:{name:"fe_item_detail",query:{item_id:e.paiditem.item.id}}},{default:s(()=>{var l,c;return[a("div",ie,[a("div",oe,[D(a("img",re,null,512),[[x,{src:i.$page.props.thumb2xUrl+"/"+e.paiditem.item.defaultPhoto.imgPath,loading:i.$page.props.sysImageUrl+"/loading_gif.gif",error:i.$page.props.sysImageUrl+"/default_photo.png"}]])]),r(u,{status:e.paiditem?e.paiditem.paidStatus:""},null,8,["status"])]),a("div",{class:T([t.showProfile?"pb-0":"pb-2","pt-2 px-2 flex flex-col gap-2"])},[r(n,{textColor:"text-feSecondary-600 dark:text-feSecondary-200 text-sm"},{default:s(()=>[f(o(e.paiditem.item.title),1)]),_:1}),((c=(l=t.appInfoStore.appInfo.data)==null?void 0:l.psAppSetting)==null?void 0:c.SelectedPriceType)!=t.PsConst.NO_PRICE?(w(),M(n,{key:0,textColor:"font-semibold text-fePrimary-500 text-base"},{default:s(()=>{var y,v;return[f(o(e.paiditem&&((v=(y=t.appInfoStore.appInfo.data)==null?void 0:y.psAppSetting)==null?void 0:v.SelectedPriceType)=="NORMAL_PRICE"?e.paiditem.item.itemCurrency.currencySymbol:"")+" "+o(t.formatPrice(e.paiditem?e.paiditem.item.price:"")),1)]}),_:1})):C("",!0),a("div",se,[r(_,{name:"location",w:"14",h:"14",viewBox:"0 0 14 14"}),r(n,{textColor:"text-feSecondary-600 dark:text-feSecondary-200 text-sm"},{default:s(()=>[f(o(e.paiditem.item.itemLocation.name),1)]),_:1})]),r(n,{textColor:"flex items-center text-feSecondary-600 dark:text-feSecondary-200 text-sm sm:text-xs md:text-sm"},{default:s(()=>[f(o(i.$t("paid_item_horizontal_item__start"))+" ",1),a("span",me,[f(": "+o(e.paiditem?t.moment(e.paiditem.startDate.split(" ")[0]).format(i.$page.props.dateFormat):"")+" ",1),a("span",ne,o(e.paiditem?e.paiditem.startDate.split(" ")[1]:""),1)])]),_:1}),r(n,{textColor:"flex items-center text-feSecondary-600 dark:text-feSecondary-200 text-sm sm:text-xs md:text-sm"},{default:s(()=>[f(o(i.$t("paid_item_horizontal_item__end"))+" ",1),a("span",de,[f(": "+o(e.paiditem?t.moment(e.paiditem.endDate.split(" ")[0]).format(i.$page.props.dateFormat):"")+" ",1),a("span",le,o(e.paiditem?e.paiditem.endDate.split(" ")[1]:""),1)])]),_:1}),r(n,{textColor:"flex items-center text-feSecondary-600 dark:text-feSecondary-200 text-sm sm:text-xs md:text-sm"},{default:s(()=>[f(o(i.$t("paid_item_horizontal_item__total_spending"))+" ",1),a("span",ce,": "+o(e.paiditem?e.paiditem.item.itemCurrency.currencySymbol:"")+" "+o(e.paiditem?e.paiditem.amount:""),1)]),_:1})],2)]}),_:1},8,["to"]),r(P,{to:{name:"fe_other_profile",params:{userId:(d=(g=e.paiditem.item)==null?void 0:g.user)==null?void 0:d.userId}}},{default:s(()=>{var l,c;return[t.showProfile?(w(),k("div",fe,[a("div",pe,[D(a("img",ue,null,512),[[x,{src:i.$page.props.thumb1xUrl+"/"+((c=(l=e.paiditem.item)==null?void 0:l.user)==null?void 0:c.userCoverPhoto),loading:i.$page.props.sysImageUrl+"/loading_gif.gif",error:i.$page.props.sysImageUrl+"/default_photo.png"}]]),e.paiditem.item.user.isVerifybluemark=="1"?(w(),k("div",_e,[r(_,{name:"bluemark",textColor:"text-feSecondary-50",w:"8",h:"8"})])):C("",!0)]),r(n,{class:"ms-2 mt-1 text-sm flex-grow"},{default:s(()=>[a("span",ge,o(e.paiditem.item.user.userName.length>12?e.paiditem.item.user.userName.slice(0,12)+" ...":e.paiditem.item.user.userName),1),a("span",he,o(e.paiditem.item?t.moment(e.paiditem.item.addedDate).format(i.$page.props.dateFormat):""),1)]),_:1})])):C("",!0)]}),_:1},8,["to"])]}),_:1})]),r(S,{ref:"ps_loading_dialog"},null,512)],64)}var et=te(ae,[["render",xe]]);export{et as default};

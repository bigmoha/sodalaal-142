import Z from"./PsLabel.f618b059.js";import $ from"./PsLabelTitle4.02ed3a91.js";import ee from"./PsCard.748116f2.js";import te from"./PsIcon.c315e2a2.js";import{P as U}from"./ps_constants.115f3686.js";import oe from"./PsAdSense.9b378c33.js";import ie from"./PsLoadingDialog.9586f261.js";import{f as ae}from"./format.min.378730c4.js";import re from"./PsRouteLink.e985dbfe.js";import{i as H,o as i,c as d,a as f,f as w,w as a,n as M,b as r,m as B,g as c,q as n,t as s,F as se,B as G,O as le,r as A,E as ne,R as me,S as de}from"./app.bcb0820c.js";import{P as Q}from"./PsValueStore.db7005b9.js";import{P as ce}from"./Product.ccea159e.js";import{u as fe}from"./PsValueHolder.00f22b51.js";import{u as ue}from"./AppInfoStore.e1ca82ff.js";import{u as _e}from"./ProductStore.53a7e111.js";import{u as X}from"./FavouriteItemStore.f5a1d999.js";import{u as xe,F as ge}from"./FollowItemParameterHolder.09b3e491.js";import{A as he}from"./AppInfoParameterHolder.e24d894d.js";import{h as ye}from"./moment.9709ab41.js";/* empty css                                                                       */import{_ as pe}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsApiService.664f5104.js";import"./PsObject.a17ef38f.js";import"./DefaultPhoto.cc755f93.js";import"./PsModal.b5929b7c.js";import"./vue-neat-modal.bb68220d.js";import"./PsLine.115a33c3.js";import"./PsLabelTitle.529f301f.js";import"./Category.7c65464b.js";import"./DefaultIcon.e76b39a5.js";import"./SubCategory.1b4176e0.js";import"./ItemLocationTownship.94979fe0.js";import"./ProductRelation.4bf64f0e.js";import"./User.450a868b.js";import"./RatingDetail.291ad5d1.js";import"./Vendor.c037b10d.js";import"./ProductParameterHolder.e481cecf.js";import"./ApiStatus.5720ba0b.js";import"./UserDeleteItemParameterHolder.5d816aba.js";import"./PsSepetetedStore.9a31ac47.js";import"./PsUtils.eb7a8002.js";const Se={name:"ItemHorizontalItem",components:{PsLabel:Z,PsLabelTitle4:$,PsCard:ee,PsIcon:te,PsAdSense:oe,PsRouteLink:re,PsLoadingDialog:ie},props:{item:{type:ce},notShowTitle:{type:Boolean,default:!1},onClick:Function,storeName:{type:String,default:""}},setup(o){var C,F,z;const p=H();Q.psValueStore=fe();const e=_e(o.storeName),t=X(),q=X("favourite"),W=xe(),I=Q(),x=I.getLoginUserId(),l=new he,T=new ge;l.userId=x;const u=ue(),j=H(!1),N=H(o.item.user.userId==x);((z=(F=(C=u==null?void 0:u.appInfo)==null?void 0:C.data)==null?void 0:F.mobileSetting)==null?void 0:z.is_show_owner_info)=="1"&&(j.value=!0);function E(S){var L,R,O,g,h,b,v,_,m,y;if(S.toString()=="0"&&((R=(L=u.appInfo.data)==null?void 0:L.psAppSetting)==null?void 0:R.SelectedPriceType)==U.NORMAL_PRICE)return G("item_price__free");if(((g=(O=u.appInfo.data)==null?void 0:O.psAppSetting)==null?void 0:g.SelectedPriceType)==U.PRICE_RANGE){const P=parseFloat(S),k=parseInt(P);return k>5?"$".repeat(5):k<1?"$".repeat(1):"$".repeat(k)}else return((v=(b=(h=u==null?void 0:u.appInfo)==null?void 0:h.data)==null?void 0:b.mobileSetting)==null?void 0:v.price_format)==="###,###"?new Intl.NumberFormat("en-FR",{style:"decimal",useGrouping:!0,minimumFractionDigits:0}).format(S).replace(","," "):ae((y=(m=(_=u==null?void 0:u.appInfo)==null?void 0:_.data)==null?void 0:m.mobileSetting)==null?void 0:y.price_format,S)}async function D(S){x&&x!=U.NO_LOGIN_USER?(p.value.openModal(),o.item.isFavourited=="1"?p.value.message=G("item_detail__removing_item_from_favourite"):p.value.message=G("item_detail__adding_item_to_favourite"),await t.postFavourite(S,x),await V(),p.value.closeModal()):le.get(route("login"))}async function V(){o.storeName==""?await W.refleshFollowerItemList(x,T):o.storeName=="favourite"?await q.refleshFavouriteItemList(x):await e.refleshProductList(x,e.paramHolder)}return{appInfoStore:u,formatPrice:E,PsConst:U,psValueStore:I,favouriteClicked:D,ps_loading_dialog:p,showProfile:j,moment:ye,isOwner:N}}},Y=o=>(me("data-v-4dec16db"),o=o(),de(),o),be={class:"h-44 relative z-0"},ve={class:"overflow-hidden h-44 w-full"},Pe={alt:"Placeholder",class:"overflow-hidden transform transition duration-500 hover:scale-110 rounded-t-lg object-cover w-screen h-44",width:"640px",height:"360px"},we={key:1,class:"absolute bg-feWarning-500 rounded px-2 py-1 flex justify-center items-center left-2 top-2 z-20"},Ie={key:2,class:"absolute bg-fePrimary-500 rounded px-2 py-1 flex justify-center items-center left-2 top-2 z-20"},Ce={key:0,class:"absolute bg-feSuccess-500 rounded px-2 py-1 left-0 top-8"},ke={key:3,class:"absolute bg-feSuccess-500 rounded px-2 py-1 flex justify-center items-center left-2 top-2 z-20"},Ae={key:4,class:"absolute bg-feSecondary-300 rounded px-2 py-1 flex justify-center items-center left-2 top-2 z-20"},Ne={key:5,class:"absolute bg-feError-500 rounded px-2 py-1 flex justify-center items-center left-2 top-2 z-20"},Fe={class:"absolute left-2 bottom-2 z-20"},ze=Y(()=>f("div",{class:"relative lg:pt-48 pt-28"},null,-1)),Le={key:0,class:"ps-1 pt-1"},Re={key:1},Oe={key:0},Te={key:1,class:"ps-1"},je={key:0,class:"pt-1 pb-2 flex items-center justify-between leading-none px-2 rounded-b-xl lg:rounded-b-2xl"},Ee={class:"flex flex-row relative items-center no-underline text-feAchromatic-900"},De={alt:"Placeholder",class:"rounded-full bg-transparent lg:w-8 lg:h-8 w-6 h-6 flex items-center justify-center object-cover",width:"50px",height:"50px"},Ve={key:0,class:"absolute top-0 left-0"},Ue=Y(()=>f("div",{class:"lg:w-8 lg:h-8 w-6 h-6 rounded-full absolute top-0 left-0 bg-feAchromatic-900 opacity-60"},null,-1)),He={class:"lg:w-8 lg:h-8 w-6 h-6 flex items-center justify-center absolute"},Me={class:"ms-2 mt-1 text-sm flex-grow"},Be={class:"flex flex-row w-full"},Ge={key:0,class:"pt-1 pb-2 flex items-center justify-between leading-none px-2 rounded-b-xl lg:rounded-b-2xl"},qe={class:"flex flex-row relative items-center no-underline text-feAchromatic-900"},We={alt:"Placeholder",class:"rounded-full bg-transparent lg:w-8 lg:h-8 w-6 h-6 flex items-center justify-center object-cover",width:"50px",height:"50px"},Je={class:"ms-2 mt-1 text-sm flex-grow"},Ke={class:"w-full lg:h-72 h-52 mx-auto lg:mt-12 lg:mb-12 mt-8 mb-6"};function Qe(o,p,e,t,q,W){var E,D,V;const I=A("ps-route-link"),x=A("ps-icon"),l=A("ps-label"),T=A("ps-card"),u=A("ps-ad-sense"),j=A("ps-loading-dialog"),N=ne("lazy");return i(),d(se,null,[f("div",{class:"cursor-pointer w-full h-full pb-3",onClick:p[1]||(p[1]=C=>e.onClick!=null?e.onClick(e.item):null)},[((E=e.item)==null?void 0:E.adType)==t.PsConst.NORMAL_AD||((D=e.item)==null?void 0:D.adType)==t.PsConst.PAID_AD?(i(),w(T,{key:0,class:"flex w-full bg-feAchromatic-50 flex-col lg:rounded-lg shadow-sm",enabledHover:!0},{default:a(()=>{var C,F,z,S,L,R,O;return[f("div",{class:M(["lg:px-0 lg:py-0 px-1",t.showProfile?"rounded-b-xl lg:rounded-b-2xl":"rounded-xl lg:rounded-2xl"])},[f("div",be,[r(I,{to:{name:"fe_item_detail",query:{item_id:e.item.id}},class:"absolute z-10"},{default:a(()=>[f("div",ve,[B(f("img",Pe,null,512),[[N,{src:o.$page.props.thumb2xUrl+"/"+e.item.defaultPhoto.imgPath,loading:o.$page.props.sysImageUrl+"/loading_gif.gif",error:o.$page.props.sysImageUrl+"/default_photo.png"}]])])]),_:1},8,["to"]),!e.notShowTitle&&!t.isOwner?(i(),d("div",{key:0,class:"absolute z-10 bg-feAchromatic-50 dark:bg-feSecondary-800 rounded w-10 h-10 flex justify-center items-center right-2 top-2",onClick:p[0]||(p[0]=g=>t.favouriteClicked(e.item.id))},[e.item.isFavourited=="1"?(i(),w(x,{key:0,textColor:"text-fePrimary-500 dark:text-feAchromatic-50",class:"",name:"heart",h:"24",w:"24"})):(i(),w(x,{key:1,textColor:"text-fePrimary-500 dark:text-feAchromatic-50",class:"",name:"heart-outline",h:"24",w:"24"}))])):c("",!0),e.item.status=="0"?(i(),d("div",we,[r(l,{class:"text-xs lg:text-sm text-center font-medium",textColor:"text-feAchromatic-50 "},{default:a(()=>[n(s(o.$t("core_fe__pending")),1)]),_:1})])):c("",!0),e.item.isDiscount=="1"&&e.item.status=="1"?(i(),d("div",Ie,[r(l,{class:"text-xs lg:text-sm text-center font-medium",textColor:"text-feAchromatic-50 "},{default:a(()=>[n(s(e.item.percent)+s(o.$t("item_horizontal_item__discount")),1)]),_:1}),e.item.isPaid=="1"&&e.item.paidStatus==t.PsConst.paidItemProgressStatus&&e.item.status=="1"?(i(),d("div",Ce,[r(l,{class:"text-xs lg:text-sm font-medium text-center",textColor:"text-feAchromatic-50 "},{default:a(()=>[n(s(o.$t("item_horizontal_item__featured")),1)]),_:1})])):c("",!0)])):e.item.isPaid=="1"&&e.item.paidStatus==t.PsConst.paidItemProgressStatus&&e.item.status=="1"?(i(),d("div",ke,[r(l,{class:"text-xs lg:text-sm text-center font-medium",textColor:"text-feAchromatic-50 "},{default:a(()=>[n(s(o.$t("item_horizontal_item__featured")),1)]),_:1})])):c("",!0),e.item.status=="2"?(i(),d("div",Ae,[r(l,{class:"text-xs lg:text-sm text-center font-medium",textColor:"text-feSecondary-500 "},{default:a(()=>[n(s(o.$t("core_fe__disabled")),1)]),_:1})])):c("",!0),e.item.status=="3"?(i(),d("div",Ne,[r(l,{class:"text-xs lg:text-sm text-center font-medium",textColor:"text-feAchromatic-50 "},{default:a(()=>[n(s(o.$t("core_fe__rejected")),1)]),_:1})])):c("",!0),f("div",Fe,[e.item&&e.item.isSoldOut=="1"?(i(),w(l,{key:0,class:"py-1 px-2 text-sm rounded bg-fePrimary-500 font-medium",textColor:"text-feAchromatic-50 "},{default:a(()=>[n(s(o.$t("item_horizontal_item__sold_out")),1)]),_:1})):c("",!0)]),ze]),r(I,{to:{name:"fe_item_detail",query:{item_id:e.item.id}}},{default:a(()=>{var g,h,b,v;return[e.notShowTitle?c("",!0):(i(),d("div",Le,[r(l,{class:"truncate-2-lines mb-0.5 font-normal text-sm",textColor:"text-feSecondary-600 dark:text-feSecondary-200"},{default:a(()=>[n(s(e.item?e.item.title:""),1)]),_:1})])),((h=(g=t.appInfoStore.appInfo.data)==null?void 0:g.psAppSetting)==null?void 0:h.SelectedPriceType)!=t.PsConst.NO_PRICE?(i(),d("div",Re,[e.item.isDiscount=="1"&&((v=(b=t.appInfoStore.appInfo.data)==null?void 0:b.mobileSetting)==null?void 0:v.is_show_discount)=="1"&&!e.notShowTitle?(i(),d("div",{key:0,class:M(["ps-1 flex justify-start",t.formatPrice(e.item?e.item.originalPrice:"").length>10?"flex-col":"flex-row  items-center"])},[r(l,{class:"line-through me-2 font-semibold text-xs",textColor:"text-feSecondary-500 "},{default:a(()=>{var _,m,y,P;return[n(s(e.item&&((m=(_=t.appInfoStore.appInfo.data)==null?void 0:_.psAppSetting)==null?void 0:m.SelectedPriceType)==t.PsConst.NORMAL_PRICE?e.item.itemCurrency.currencySymbol:"")+" ",1),e.item&&((P=(y=t.appInfoStore.appInfo.data)==null?void 0:y.psAppSetting)==null?void 0:P.SelectedPriceType)==t.PsConst.NORMAL_PRICE?(i(),d("span",Oe,s(t.formatPrice(e.item?e.item.originalPrice:"")),1)):c("",!0)]}),_:1}),r(l,{class:"font-semibold text-xs lg:text-base",textColor:"text-fePrimary-500 "},{default:a(()=>{var _,m;return[n(s(e.item&&((m=(_=t.appInfoStore.appInfo.data)==null?void 0:_.psAppSetting)==null?void 0:m.SelectedPriceType)==t.PsConst.NORMAL_PRICE?e.item.itemCurrency.currencySymbol:"")+" "+s(t.formatPrice(e.item?e.item.price:"")),1)]}),_:1})],2)):(i(),d("div",Te,[r(l,{class:"font-semibold text-base",textColor:"text-fePrimary-500 "},{default:a(()=>{var _,m;return[n(s(e.item&&((m=(_=t.appInfoStore.appInfo.data)==null?void 0:_.psAppSetting)==null?void 0:m.SelectedPriceType)==t.PsConst.NORMAL_PRICE?e.item.itemCurrency.currencySymbol:"")+" "+s(t.formatPrice(e.item?e.item.originalPrice:"")),1)]}),_:1})]))])):c("",!0),e.notShowTitle?c("",!0):(i(),d("div",{key:2,class:M([t.showProfile?"pb-0":"pb-2","ps-1 flex items-center"])},[r(x,{textColor:"text-feSecondary-400 dark_text-feAchromatic-500",name:"location-marker",h:"14",w:"14",class:"text-feSecondary-400 me-3",viewBox:"0 0 14 14"}),r(l,{class:"truncate font-normal text-sm",textColor:"text-feSecondary-400 dark:text-feSecondary-200"},{default:a(()=>[n(s(e.item?e.item.itemLocation.name:""),1)]),_:1})],2))]}),_:1},8,["to"])],2),((C=t.appInfoStore)==null?void 0:C.isVendorSettingOn())&&((z=(F=e.item)==null?void 0:F.vendor)==null?void 0:z.id)!=""?(i(),w(I,{key:0,to:{name:"fe_vendor_info",params:{vendorId:(L=(S=e.item)==null?void 0:S.vendor)==null?void 0:L.id}}},{default:a(()=>{var g,h,b,v,_;return[t.showProfile?(i(),d("div",je,[f("div",Ee,[B(f("img",De,null,512),[[N,{src:o.$page.props.thumb1xUrl+"/"+((b=(h=(g=e.item)==null?void 0:g.vendor)==null?void 0:h.logo)==null?void 0:b.imgPath),loading:o.$page.props.sysImageUrl+"/loading_gif.gif",error:o.$page.props.sysImageUrl+"/default_vendor_shop.png"}]]),((_=(v=e.item)==null?void 0:v.vendor)==null?void 0:_.expireStatus)==t.PsConst.VendorExpiryExpiredStatus?(i(),d("div",Ve,[Ue,f("div",He,[r(l,{textColor:"text-[8px] text-feAchromatic-50 font-semibold"},{default:a(()=>[n(s(o.$t("Closed")),1)]),_:1})])])):c("",!0)]),f("p",Me,[f("div",Be,[r(l,{class:"text-xs",textColor:"text-feSecondary-800 dark:text-feSecondary-300"},{default:a(()=>{var m,y,P,k,J,K;return[n(s(((y=(m=e.item)==null?void 0:m.vendor)==null?void 0:y.name.length)>24?((k=(P=e.item)==null?void 0:P.vendor)==null?void 0:k.name.slice(0,24))+" ...":(K=(J=e.item)==null?void 0:J.vendor)==null?void 0:K.name),1)]}),_:1}),r(l,{class:"p-1 ms-2 text-xxs rounded-sm bg-feWarning-500",textColor:"text-feAchromatic-50"},{default:a(()=>[n(s(o.$t("core_fe__vendor_indicator")),1)]),_:1})]),r(l,{class:"font-light text-xs",textColor:"text-feSecondary-500 dark:text-feSecondary-500"},{default:a(()=>{var m,y;return[n(s((m=e.item)!=null&&m.vendor?t.moment((y=e.item)==null?void 0:y.vendor.addedDate).format(o.$page.props.dateFormat):""),1)]}),_:1})])])):c("",!0)]}),_:1},8,["to"])):(i(),w(I,{key:1,to:{name:"fe_other_profile",params:{userId:(O=(R=e.item)==null?void 0:R.user)==null?void 0:O.userId}}},{default:a(()=>{var g,h;return[t.showProfile?(i(),d("div",Ge,[f("div",qe,[B(f("img",We,null,512),[[N,{src:o.$page.props.thumb1xUrl+"/"+((h=(g=e.item)==null?void 0:g.user)==null?void 0:h.userCoverPhoto),loading:o.$page.props.sysImageUrl+"/loading_gif.gif",error:o.$page.props.sysImageUrl+"/default_photo.png"}]]),e.item.user.isVerifybluemark=="1"?(i(),w(x,{key:0,class:"bg-feInfo-500 rounded-full absolute bottom-1 left-6",name:"bluemark",textColor:"text-feSecondary-50",w:"10",h:"10"})):c("",!0)]),f("p",Je,[r(l,{class:"truncate text-xs",textColor:"text-feSecondary-800 dark:text-feSecondary-300"},{default:a(()=>[n(s(e.item.user.userName.length>12?e.item.user.userName.slice(0,12)+" ...":e.item.user.userName),1)]),_:1}),r(l,{class:"font-light text-xs",textColor:"text-feSecondary-500 dark:text-feSecondary-500"},{default:a(()=>[n(s(e.item?t.moment(e.item.addedDate).format(o.$page.props.dateFormat):""),1)]),_:1})])])):c("",!0)]}),_:1},8,["to"]))]}),_:1})):c("",!0),((V=e.item)==null?void 0:V.adType)==t.PsConst.GOOGLE_AD?(i(),w(T,{key:1,class:"flex w-full flex-col"},{default:a(()=>[f("div",Ke,[r(u,{adFormat:"square",adStyle:"display:inline-block; width: 160px; height: 160px;",adStyleSm:"display:inline-block; width: 160px; height: 160px;",adStyleLg:"display:inline-block; width: 160px; height: 160px;"})])]),_:1})):c("",!0)]),r(j,{ref:"ps_loading_dialog"},null,512)],64)}var Et=pe(Se,[["render",Qe],["__scopeId","data-v-4dec16db"]]);export{Et as default};
import{Z as Pt,o as r,c as i,b as a,w as d,a as t,q as gt,t as o,m as x,g as c,r as l,E as kt}from"./app.bcb0820c.js";import Ut from"./PsLabel.f618b059.js";import wt from"./PsLabelTitle4.02ed3a91.js";import At from"./PsLabelCaption.c39c43ba.js";import Ct from"./PsLabelHeader4.e06a0f87.js";import jt from"./PsAdSense.9b378c33.js";import It from"./PsContentContainer.baf5d5b4.js";import{u as qt}from"./AboutUsStore.d9029d91.js";import bt from"./PsFrontendLayout.c6e64cf5.js";import{P as Lt}from"./PsValueStore.db7005b9.js";import Vt from"./PsIcon.c315e2a2.js";import{u as Dt}from"./AppInfoStore.e1ca82ff.js";import{_ as Tt}from"./plugin-vue_export-helper.21dcd24c.js";import"./AppInfoParameterHolder.e24d894d.js";import"./PsApiService.664f5104.js";import"./PsObject.a17ef38f.js";import"./DefaultPhoto.cc755f93.js";import"./PsSepetetedStore.9a31ac47.js";import"./FooterView.68cf7b8a.js";import"./FooterLinkSection.3f744e23.js";import"./PsLink.dea1f7ef.js";import"./PsRouteLink.e985dbfe.js";import"./ProductParameterHolder.e481cecf.js";import"./ps_constants.115f3686.js";import"./PsNavTabBar.0d828f1e.js";import"./PsDropdown.b0f6436e.js";import"./PsDropdownSelect.1e4537ad.js";import"./PsIconToggle.b913bae4.js";import"./PsInputWithLeftIcon.432593fa.js";import"./LocationModal.5b725b64.js";import"./PsModal.b5929b7c.js";import"./vue-neat-modal.bb68220d.js";import"./PsLine.115a33c3.js";import"./PsButton.2af859b4.js";import"./LocationParameterHolder.df629adc.js";import"./ItemLocationTownship.94979fe0.js";import"./ItemLocationTownshipStore.652895d4.js";import"./PsNavBar.f99c6cb9.js";import"./UserStore.6fc60c2b.js";import"./User.450a868b.js";import"./RatingDetail.291ad5d1.js";import"./ProductRelation.4bf64f0e.js";import"./UserListParameterHolder.d110b747.js";import"./ApiStatus.5720ba0b.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./UserUnReadMessageParameterHolder.9d1f58f0.js";import"./PsConfirmDialog.e09010a6.js";import"./PsUtils.eb7a8002.js";import"./PsNotificationBox.5b80e886.js";import"./ProductStore.53a7e111.js";import"./Product.ccea159e.js";import"./Category.7c65464b.js";import"./DefaultIcon.e76b39a5.js";import"./SubCategory.1b4176e0.js";import"./Vendor.c037b10d.js";import"./UserDeleteItemParameterHolder.5d816aba.js";import"./NotificationStore.2c3becfc.js";import"./NotiUnRegisterHolder.eefb692e.js";import"https://unpkg.com/delayed-scroll-restoration-polyfill@0.1.1/index.js";const Ht={name:"AboutView",components:{PsContentContainer:It,PsLabel:Ut,PsLabelTitle4:wt,PsLabelCaption:At,PsLabelHeader4:Ct,PsAdSense:jt,PsIcon:Vt,Head:Pt},layout:bt,data(){return{fillColor:"#fffff"}},layout:bt,setup(){const s=qt(),u=Dt(),e=Lt().getLoginUserId();return s.loadAboutUs(e),{aboutUsStore:s,appInfoStore:u,localStorage}}},Nt={class:"mt-36 flex flex-col"},Wt={class:"flex flex-col"},Bt={class:"w-auto cursor-pointer my-2"},zt={alt:"Placeholder",width:"15px",height:"10px",class:"block w-full h-128 object-cover mt-4"},Et={class:"mt-4"},Mt={key:0,class:"mt-4"},Ft={class:"object-cover relative flex justify-center items-center mt-6"},Zt={class:"h-96 w-full"},Gt={class:"w-full h-96 object-cover dark:hidden block",alt:""},Jt={class:"w-full h-96 object-cover hidden dark:block",alt:""},Kt={class:"absolute"},Ot=gt(" Connect With Us "),Qt={class:"mx-8 grid grid-cols-2 sm:grid-cols-3 gap-y-8 gap-x-24 pb-10"},Rt={key:0,class:"rtl:space-x-reverse space-x-2 flex items-center mt-2"},Xt={class:"w-6 h-6 rounded flex bg-fePrimary-500 justify-center items-center"},Yt={class:"px-2 hover:text-fePrimary-500 dark:hover:text-fePrimary-500 dark:text-feSecondary-300"},$t={class:"lg:text-sm sm:text-xs text-xxs font-medium"},te={class:"leading-normal lg:text-xs sm:text-xxs text-3xs"},ee={key:1,class:"rtl:space-x-reverse space-x-2 flex items-center mt-2"},oe={class:"w-6 h-6 rounded flex justify-center items-center"},se={class:"px-2 hover:text-fePrimary-500 dark:hover:text-fePrimary-500 dark:text-feSecondary-300"},ae={class:"lg:text-sm sm:text-xs text-xxs font-medium"},re={class:"leading-normal lg:text-xs sm:text-xxs text-3xs"},ie={key:2,class:"rtl:space-x-reverse space-x-2 flex items-center mt-2"},ce={class:"w-6 h-6 rounded flex justify-center items-center"},ne={class:"px-2 hover:text-fePrimary-500 dark:hover:text-fePrimary-500 dark:text-feSecondary-300"},le={class:"lg:text-sm sm:text-xs text-xxs font-medium"},me={class:"leading-normal lg:text-xs sm:text-xxs text-3xs"},de={key:3,class:"rtl:space-x-reverse space-x-2 flex items-center mt-2"},xe={class:"w-6 h-6 rounded flex bg-fePrimary-500 justify-center items-center"},ue={class:"px-2 hover:text-fePrimary-500 dark:hover:text-fePrimary-500 dark:text-feSecondary-300"},pe={class:"lg:text-sm sm:text-xs text-xxs font-medium"},_e={class:"leading-normal lg:text-xs sm:text-xxs text-3xs"},he={key:4,class:"rtl:space-x-reverse space-x-2 flex items-center mt-2"},fe={class:"w-6 h-6 rounded flex bg-fePrimary-500 justify-center items-center"},be={class:"px-2 hover:text-fePrimary-500 dark:hover:text-fePrimary-500 dark:text-feSecondary-300"},ge={class:"lg:text-sm sm:text-xs text-xxs font-medium"},ye={class:"leading-normal lg:text-xs sm:text-xxs text-3xs"},ve={key:5,class:"rtl:space-x-reverse space-x-2 flex items-center mt-2"},Se={class:"w-6 h-6 rounded flex bg-fePrimary-500 justify-center items-center"},Pe={class:"px-2 hover:text-fePrimary-500 dark:hover:text-fePrimary-500 dark:text-feSecondary-300"},ke={class:"lg:text-sm sm:text-xs text-xxs font-medium"},Ue={class:"leading-normal lg:text-xs sm:text-xxs text-3xs"},we={key:6,class:"rtl:space-x-reverse space-x-2 flex items-center mt-2"},Ae={class:"w-6 h-6 rounded flex bg-fePrimary-500 justify-center items-center"},Ce={class:"px-2 hover:text-fePrimary-500 dark:hover:text-fePrimary-500 dark:text-feSecondary-300"},je={class:"lg:text-sm sm:text-xs text-xxs font-medium"},Ie={class:"leading-normal lg:text-xs sm:text-xxs text-3xs"},qe={key:7,class:"rtl:space-x-reverse space-x-2 flex items-center mt-2"},Le={class:"w-6 h-6 rounded flex bg-fePrimary-500 justify-center items-center"},Ve={class:"px-2 hover:text-fePrimary-500 dark:hover:text-fePrimary-500 dark:text-feSecondary-300"},De={class:"lg:text-sm sm:text-xs text-xxs font-medium"},Te={class:"leading-normal lg:text-xs sm:text-xxs text-3xs"};function He(s,u,yt,e,Ne,We){var _,h,f,b,g,y,v,S,P,k,U,w,A,C,j,I,q,L,V,D,T,H,N,W,B,z,E,M,F,Z,G,J,K,O,Q,R,X,Y,$,tt,et,ot,st,at,rt,it,ct,nt;const p=l("ps-label"),vt=l("ps-content-container"),St=l("ps-label-header-4"),n=l("ps-icon"),m=kt("lazy");return r(),i("div",null,[a(vt,null,{content:d(()=>{var lt,mt,dt,xt,ut,pt,_t;return[t("div",Nt,[t("div",Wt,[t("div",Bt,[a(p,{class:"text-center"},{default:d(()=>{var ht,ft;return[gt(o((ft=(ht=e.aboutUsStore.aboutus)==null?void 0:ht.data)==null?void 0:ft.aboutTitle),1)]}),_:1}),x(t("img",zt,null,512),[[m,{src:s.$page.props.uploadUrl+"/"+((dt=(mt=(lt=e.aboutUsStore.aboutus)==null?void 0:lt.data)==null?void 0:mt.defaultPhoto)==null?void 0:dt.imgPath),loading:s.$page.props.sysImageUrl+"/loading_gif.gif",error:s.$page.props.sysImageUrl+"/default_photo.png"}]]),t("div",Et,[((ut=(xt=e.aboutUsStore.aboutus)==null?void 0:xt.data)==null?void 0:ut.aboutDescription)!=""?(r(),i("p",Mt,[a(p,{innerHTML:(_t=(pt=e.aboutUsStore.aboutus)==null?void 0:pt.data)==null?void 0:_t.aboutDescription},null,8,["innerHTML"])])):c("",!0)])])])])]}),_:1}),t("div",Ft,[t("div",Zt,[x(t("img",Gt,null,512),[[m,{src:s.$page.props.sysImageUrl+"/connect_with_us_light.png"}]]),x(t("img",Jt,null,512),[[m,{src:s.$page.props.sysImageUrl+"/connect_with_us_dark.png"}]])]),t("div",Kt,[a(St,{class:"text-center mt-12 mb-8"},{default:d(()=>[Ot]),_:1}),t("div",Qt,[((h=(_=e.aboutUsStore.aboutus)==null?void 0:_.data)==null?void 0:h.aboutPhone)!=null&&((b=(f=e.aboutUsStore.aboutus)==null?void 0:f.data)==null?void 0:b.aboutPhone)!=""?(r(),i("div",Rt,[t("div",Xt,[a(n,{name:"phoneSquare",w:"35",h:"35",textColor:"text-feAchromatic-50 dark:text-feAchromatic-800"})]),t("p",Yt,[t("p",$t,o(s.$t("about__phone")),1),t("p",te,o((y=(g=e.aboutUsStore.aboutus)==null?void 0:g.data)==null?void 0:y.aboutPhone),1)])])):c("",!0),((S=(v=e.aboutUsStore.aboutus)==null?void 0:v.data)==null?void 0:S.aboutWebsite)!=null&&((k=(P=e.aboutUsStore.aboutus)==null?void 0:P.data)==null?void 0:k.aboutWebsite)!=""?(r(),i("div",ee,[t("div",oe,[a(n,{name:"globe",w:"35",h:"35",textColor:"text-fePrimary-500"})]),t("p",se,[t("p",ae,o(s.$t("about__website")),1),t("p",re,o((w=(U=e.aboutUsStore.aboutus)==null?void 0:U.data)==null?void 0:w.aboutWebsite),1)])])):c("",!0),((C=(A=e.aboutUsStore.aboutus)==null?void 0:A.data)==null?void 0:C.facebook)!=null&&((I=(j=e.aboutUsStore.aboutus)==null?void 0:j.data)==null?void 0:I.facebook)!=""?(r(),i("div",ie,[t("div",ce,[a(n,{name:"facebookSquare",w:"36",h:"36",textColor:"text-fePrimary-500"})]),t("p",ne,[t("p",le,o(s.$t("about__facebook")),1),t("p",me,o((L=(q=e.aboutUsStore.aboutus)==null?void 0:q.data)==null?void 0:L.facebook),1)])])):c("",!0),((D=(V=e.aboutUsStore.aboutus)==null?void 0:V.data)==null?void 0:D.twitter)!=null&&((H=(T=e.aboutUsStore.aboutus)==null?void 0:T.data)==null?void 0:H.twitter)!=""?(r(),i("div",de,[t("div",xe,[a(n,{name:"twitterSquare",w:"35",h:"35",textColor:"text-feAchromatic-50 dark:text-feAchromatic-800"})]),t("p",ue,[t("p",pe,o(s.$t("about__twitter")),1),t("p",_e,o((W=(N=e.aboutUsStore.aboutus)==null?void 0:N.data)==null?void 0:W.twitter),1)])])):c("",!0),((z=(B=e.aboutUsStore.aboutus)==null?void 0:B.data)==null?void 0:z.instagram)!=null&&((M=(E=e.aboutUsStore.aboutus)==null?void 0:E.data)==null?void 0:M.instagram)!=""?(r(),i("div",he,[t("div",fe,[a(n,{name:"instagramSquare",w:"35",h:"35",textColor:"text-feAchromatic-50 dark:text-feAchromatic-800"})]),t("p",be,[t("p",ge,o(s.$t("about__instagram")),1),t("p",ye,o((Z=(F=e.aboutUsStore.aboutus)==null?void 0:F.data)==null?void 0:Z.instagram),1)])])):c("",!0),((J=(G=e.aboutUsStore.aboutus)==null?void 0:G.data)==null?void 0:J.googlePlus)!=null&&((O=(K=e.aboutUsStore.aboutus)==null?void 0:K.data)==null?void 0:O.googlePlus)!=""?(r(),i("div",ve,[t("div",Se,[a(n,{name:"googlePlusSquare",w:"35",h:"35",textColor:"text-feAchromatic-50 dark:text-feAchromatic-800"})]),t("p",Pe,[t("p",ke,o(s.$t("about__google_plus")),1),t("p",Ue,o((R=(Q=e.aboutUsStore.aboutus)==null?void 0:Q.data)==null?void 0:R.googlePlus),1)])])):c("",!0),((Y=(X=e.aboutUsStore.aboutus)==null?void 0:X.data)==null?void 0:Y.youtube)!=null&&((tt=($=e.aboutUsStore.aboutus)==null?void 0:$.data)==null?void 0:tt.youtube)!=""?(r(),i("div",we,[t("div",Ae,[a(n,{name:"youtubeSquare",w:"35",h:"35",textColor:"text-feAchromatic-50 dark:text-feAchromatic-800"})]),t("p",Ce,[t("p",je,o(s.$t("about__youtube")),1),t("p",Ie,o((ot=(et=e.aboutUsStore.aboutus)==null?void 0:et.data)==null?void 0:ot.youtube),1)])])):c("",!0),((at=(st=e.aboutUsStore.aboutus)==null?void 0:st.data)==null?void 0:at.pinterest)!=null&&((it=(rt=e.aboutUsStore.aboutus)==null?void 0:rt.data)==null?void 0:it.pinterest)!=""?(r(),i("div",qe,[t("div",Le,[a(n,{name:"pinterestSquare",w:"35",h:"35",textColor:"text-feAchromatic-50 dark:text-feAchromatic-800"})]),t("p",Ve,[t("p",De,o(s.$t("about__pinterest")),1),t("p",Te,o((nt=(ct=e.aboutUsStore.aboutus)==null?void 0:ct.data)==null?void 0:nt.pinterest),1)])])):c("",!0)])])])])}var Jo=Tt(Ht,[["render",He]]);export{Jo as default};
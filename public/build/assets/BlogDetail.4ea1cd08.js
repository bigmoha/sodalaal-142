import x from"./PsContentContainer.baf5d5b4.js";import B from"./PsRouteLink.e985dbfe.js";import k from"./PsLabelHeader3.2200c388.js";import I from"./PsAdSense.9b378c33.js";import{u as D}from"./BlogStore.76a6768d.js";import V from"./PsFrontendLayout.c6e64cf5.js";import{P as C}from"./PsValueStore.db7005b9.js";import{Z as H,B as i,o as u,c as b,b as r,w as f,a as t,q as l,t as h,m as L,g as F,F as U,r as s,E as $,R as j,S as N}from"./app.bcb0820c.js";import z from"./PsBreadcrumb2.ae081895.js";import{h as A}from"./moment.9709ab41.js";import{c as E}from"./PsApiService.664f5104.js";import{_ as T}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsLabel.f618b059.js";import"./AppInfoStore.e1ca82ff.js";import"./PsObject.a17ef38f.js";import"./DefaultPhoto.cc755f93.js";import"./ps_constants.115f3686.js";import"./AppInfoParameterHolder.e24d894d.js";import"./PsSepetetedStore.9a31ac47.js";import"./FooterView.68cf7b8a.js";import"./FooterLinkSection.3f744e23.js";import"./PsLink.dea1f7ef.js";import"./PsLabelCaption.c39c43ba.js";import"./PsIcon.c315e2a2.js";import"./ProductParameterHolder.e481cecf.js";import"./PsNavTabBar.0d828f1e.js";import"./PsDropdown.b0f6436e.js";import"./PsDropdownSelect.1e4537ad.js";import"./PsIconToggle.b913bae4.js";import"./PsInputWithLeftIcon.432593fa.js";import"./LocationModal.5b725b64.js";import"./PsModal.b5929b7c.js";import"./vue-neat-modal.bb68220d.js";import"./PsLine.115a33c3.js";import"./PsButton.2af859b4.js";import"./LocationParameterHolder.df629adc.js";import"./ItemLocationTownship.94979fe0.js";import"./ItemLocationTownshipStore.652895d4.js";import"./PsNavBar.f99c6cb9.js";import"./UserStore.6fc60c2b.js";import"./User.450a868b.js";import"./RatingDetail.291ad5d1.js";import"./ProductRelation.4bf64f0e.js";import"./UserListParameterHolder.d110b747.js";import"./ApiStatus.5720ba0b.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./UserUnReadMessageParameterHolder.9d1f58f0.js";import"./PsConfirmDialog.e09010a6.js";import"./PsUtils.eb7a8002.js";import"./PsNotificationBox.5b80e886.js";import"./ProductStore.53a7e111.js";import"./Product.ccea159e.js";import"./Category.7c65464b.js";import"./DefaultIcon.e76b39a5.js";import"./SubCategory.1b4176e0.js";import"./Vendor.c037b10d.js";import"./UserDeleteItemParameterHolder.5d816aba.js";import"./NotificationStore.2c3becfc.js";import"./NotiUnRegisterHolder.eefb692e.js";import"https://unpkg.com/delayed-scroll-restoration-polyfill@0.1.1/index.js";const M={name:"BlogDetailView",components:{PsBreadcrumb2:z,PsContentContainer:x,PsRouteLink:B,PsLabelHeader3:k,PsAdSense:I,Head:H},props:["blog"],layout:V,setup(o){const a=C().getLoginUserId(),e=D();return E.checkIsEmpty(o.blog)?e.loadBlogProps(o.blog):e.loadBlog(o.blog.blogId,a),{blogStore:e,moment:A}},computed:{breadcrumb(){return[{label:i("item_list__home"),url:route("dashboard")},{label:i("blogblog_list__blog"),url:route("fe_blog")},{label:i("blogblog_list__blogDetail"),color:"text-fePrimary-500"}]}}},R=o=>(j("data-v-3215581a"),o=o(),N(),o),q={class:"lg:mt-36 sm:mt-36 mt-28"},Z={class:"flex flex-col justify-items-center"},G={class:"lg:my-12 mt-7 mb-12"},J={class:"text-center sm:mb-10 mb-6 grid justify-items-center"},K={class:"text-sm font-medium text-feSecondary-500 dark:text-feSecondary-400"},O=l("Admin "),Q=R(()=>t("span",{class:"mx-6"},"|",-1)),W={class:"w-auto cursor-pointer grid justify-items-center"},X={alt:"Placeholder",width:"300px",height:"200px",class:"block w-full rounded-lg lg:h-96 h-56 sm:h-72 object-cover"},Y={class:"lg:mt-8 mt-6 w-full lg:w-2/3"},oo={key:0},to=["innerHTML"],eo={class:"w-mobile sm:w-median lg:w-large h-auto mx-auto"};function ro(o,S){const a=s("Head"),e=s("ps-breadcrumb-2"),y=s("ps-label-header-3"),v=s("ps-content-container"),w=s("ps-ad-sense"),P=$("lazy");return u(),b(U,null,[r(a,{title:o.$t("blogblog_list__blogDetail")},null,8,["title"]),r(v,null,{content:f(()=>{var m,n,p,d,c;return[t("div",q,[r(e,{items:o.breadcrumb,class:""},null,8,["items"]),t("div",Z,[t("div",G,[t("div",J,[r(y,{textColor:"dark:text-feSecondary-200 text-feSecondary-800",class:"w-full lg:w-2/3 truncate-3-lines font-semibold sm:mb-8 mb-4"},{default:f(()=>{var _,g;return[l(h((g=(_=o.blogStore.blog)==null?void 0:_.data)==null?void 0:g.name),1)]}),_:1}),t("p",K,[O,Q,l(" "+h(o.moment((n=(m=o.blogStore.blog)==null?void 0:m.data)==null?void 0:n.addedDate).format(o.$page.props.dateFormat)),1)])]),t("div",W,[L(t("img",X,null,512),[[P,{src:o.$page.props.uploadUrl+"/"+((c=(d=(p=o.blogStore.blog)==null?void 0:p.data)==null?void 0:d.defaultPhoto)==null?void 0:c.imgPath),loading:o.$page.props.sysImageUrl+"/loading_gif.gif",error:o.$page.props.sysImageUrl+"/default_photo.png"}]]),t("div",Y,[o.blogStore.blog.data!=null?(u(),b("p",oo,[t("span",{class:"font-normal font-18 text-lg text-feSecondary-600 dark:text-feSecondary-200",innerHTML:o.blogStore.blog.data.description},null,8,to)])):F("",!0)])])])])])]}),_:1}),t("div",eo,[r(w,{adFormat:"horizontal"})])],64)}var ct=T(M,[["render",ro],["__scopeId","data-v-3215581a"]]);export{ct as default};
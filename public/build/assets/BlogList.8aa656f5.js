import{Z as N,i as S,G as V,j as F,B as R,o as r,c as s,b as l,w as f,a as m,F as P,s as w,g as x,f as M,q as z,t as I,n as D,r as e}from"./app.bcb0820c.js";import A from"./PsContentContainer.baf5d5b4.js";import E from"./PsButton.2af859b4.js";import T from"./PsLabel.f618b059.js";import U from"./PsLabelHeader4.e06a0f87.js";import j from"./PsRouteLink.e985dbfe.js";import q from"./PsAdSense.9b378c33.js";import G from"./PsBreadcrumb2.ae081895.js";import O from"./PsNoDataList.6a0b6910.js";import Z from"./PsLoadingDialog.9586f261.js";import{u as J}from"./BlogStore.76a6768d.js";import K from"./BlogHorizontalItem.4c49e239.js";import Q from"./BlogCard.f08d5118.js";import{P as W}from"./PsValueStore.db7005b9.js";import X from"./PsFrontendLayout.c6e64cf5.js";import{c as Y}from"./PsApiService.664f5104.js";import{_ as $}from"./plugin-vue_export-helper.21dcd24c.js";import"./AppInfoStore.e1ca82ff.js";import"./PsObject.a17ef38f.js";import"./DefaultPhoto.cc755f93.js";import"./ps_constants.115f3686.js";import"./AppInfoParameterHolder.e24d894d.js";import"./PsIcon.c315e2a2.js";import"./PsModal.b5929b7c.js";import"./vue-neat-modal.bb68220d.js";import"./PsLine.115a33c3.js";import"./PsLabelTitle.529f301f.js";import"./PsSepetetedStore.9a31ac47.js";import"./moment.9709ab41.js";import"./FooterView.68cf7b8a.js";import"./FooterLinkSection.3f744e23.js";import"./PsLink.dea1f7ef.js";import"./PsLabelCaption.c39c43ba.js";import"./ProductParameterHolder.e481cecf.js";import"./PsNavTabBar.0d828f1e.js";import"./PsDropdown.b0f6436e.js";import"./PsDropdownSelect.1e4537ad.js";import"./PsIconToggle.b913bae4.js";import"./PsInputWithLeftIcon.432593fa.js";import"./LocationModal.5b725b64.js";import"./LocationParameterHolder.df629adc.js";import"./ItemLocationTownship.94979fe0.js";import"./ItemLocationTownshipStore.652895d4.js";import"./PsNavBar.f99c6cb9.js";import"./UserStore.6fc60c2b.js";import"./User.450a868b.js";import"./RatingDetail.291ad5d1.js";import"./ProductRelation.4bf64f0e.js";import"./UserListParameterHolder.d110b747.js";import"./ApiStatus.5720ba0b.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./UserUnReadMessageParameterHolder.9d1f58f0.js";import"./PsConfirmDialog.e09010a6.js";import"./PsUtils.eb7a8002.js";import"./PsNotificationBox.5b80e886.js";import"./ProductStore.53a7e111.js";import"./Product.ccea159e.js";import"./Category.7c65464b.js";import"./DefaultIcon.e76b39a5.js";import"./SubCategory.1b4176e0.js";import"./Vendor.c037b10d.js";import"./UserDeleteItemParameterHolder.5d816aba.js";import"./NotificationStore.2c3becfc.js";import"./NotiUnRegisterHolder.eefb692e.js";import"https://unpkg.com/delayed-scroll-restoration-polyfill@0.1.1/index.js";const oo={name:"BlogListView",components:{PsAdSense:q,PsContentContainer:A,BlogHorizontalItem:K,PsButton:E,PsLabel:T,PsLabelHeader4:U,PsRouteLink:j,PsBreadcrumb2:G,BlogCard:Q,PsNoData:O,Head:N,PsLoadingDialog:Z},layout:X,props:["mobileSetting","blogs"],setup(i){var u,p;const t=J(),b=W(),o=S(b.locationId),g=b.getLoginUserId(),d=S(!0),c=S();t.limit=(p=(u=i.mobileSetting)==null?void 0:u.default_loading_limit)!=null?p:9,t.paramHolder.locationId=o.value,setTimeout(async()=>{await h()});async function h(){await Y.checkIsEmpty(i.blogs)?await t.resetBlogListProps(i.blogs):await t.resetBlogList(g,t.paramHolder),c.value.closeModal(),d.value=!1}const v=V(()=>k());function B(){t.loadBlogList(g,t.paramHolder)}function L(){t.resetBlogList(g,t.paramHolder)}function k(){var _;const n=t.blogList.data.length,y=Math.floor(Math.random()*n);return(_=t.blogList.data[y])!=null?_:null}return F(()=>{var n;d.value==!0&&((n=t.blogList)==null?void 0:n.data)==null&&c.value.openModal()}),{blogStore:t,getRandomBlog:v,loadMore:B,handleRefresh:L,initial:d,ps_loading_dialog:c}},computed:{breadcrumb(){return[{label:R("ps_nav_bar__home"),url:route("dashboard")},{label:R("blog_list__blog")+"s",color:"text-fePrimary-500"}]}}},to={class:"mt-32 mb-10"},lo={class:"w-full mt-6"},eo={key:0},ao={class:"grid grid-cols-4 sm:grid-cols-4 md:grid-cols-9 gap-6 mt-6"},ro={key:1},io={class:"grid lg:grid-cols-12 sm:grid-cols-8 grid-cols-4 gap-4 sm:gap-3.5 lg:gap-4"},no={key:2,class:"flex text-center content-center flex-col"},so={class:""},mo={class:""};function co(i,t,b,o,g,d){const c=e("Head"),h=e("ps-breadcrumb-2"),v=e("blog-card"),B=e("blog-horizontal-item"),L=e("ps-route-link"),k=e("item-horizontal-skeletor-item"),u=e("ps-no-data"),p=e("ps-button"),n=e("ps-ad-sense"),y=e("ps-content-container"),C=e("ps-loading-dialog");return r(),s(P,null,[l(c,{title:i.$t("blog_list__blog")},null,8,["title"]),l(y,null,{content:f(()=>{var _,H;return[m("div",to,[l(h,{items:d.breadcrumb},null,8,["items"]),m("div",lo,[((_=o.blogStore.blogList)==null?void 0:_.data)!=null&&o.initial==!1?(r(),s("div",eo,[l(v,{blog:o.getRandomBlog},null,8,["blog"]),m("div",ao,[(r(!0),s(P,null,w(o.blogStore.blogList.data,a=>(r(),s("div",{class:"w-full col-span-4 sm:col-span-2 md:col-span-3",key:a.id},[l(L,{to:{name:"fe_blog_detail",params:{blogId:a.id,blogName:a.name}}},{default:f(()=>[l(B,{blog:a},null,8,["blog"])]),_:2},1032,["to"])]))),128))])])):o.blogStore.loading.value==!0&&o.initial==!1?(r(),s("div",ro,[m("div",io,[(r(),s(P,null,w(3,a=>m("div",{class:"w-full col-span-4 sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-3",key:a},[l(k)])),64))])])):o.initial==!1?(r(),s("div",no,[l(u,{onHandleRefresh:o.handleRefresh,name:"list__blogs_no_result"},null,8,["onHandleRefresh"])])):x("",!0),o.blogStore.loading.value==!1&&o.initial==!1?(r(),M(p,{key:3,class:D(["mx-auto mt-6",o.blogStore.isNoMoreRecord.value||((H=o.blogStore.blogList)==null?void 0:H.data)==null?"hidden":""]),onClick:o.loadMore},{default:f(()=>{var a;return[z(I(((a=o.blogStore.blogList)==null?void 0:a.data)!=null?i.$t("list__load_more"):i.$t("refresh")),1)]}),_:1},8,["onClick","class"])):o.initial==!1?(r(),M(p,{key:4,class:"mx-auto mt-6",onClick:o.loadMore,disabled:!0},{default:f(()=>[z(I(i.$t("list__loading")),1)]),_:1},8,["onClick"])):x("",!0)]),m("div",so,[l(n,{adFormat:"horizontal"})])])]}),_:1}),m("div",mo,[l(n,{adFormat:"horizontal"})]),l(C,{ref:"ps_loading_dialog"},null,512)],64)}var St=$(oo,[["render",co]]);export{St as default};
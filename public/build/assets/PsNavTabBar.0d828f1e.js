import{d as O,i as h,Q as A,j as H,A as T,z,C as j,o as l,c,a as r,h as U,b as a,f as N,w as t,q as g,t as m,g as P,F as $,s as F,n as x,D as R,r as u}from"./app.bcb0820c.js";import Y from"./PsIcon.c315e2a2.js";import q from"./PsDropdown.b0f6436e.js";import E from"./PsDropdownSelect.1e4537ad.js";import G from"./PsIconToggle.b913bae4.js";import D from"./PsInputWithLeftIcon.432593fa.js";import Q from"./PsLabel.f618b059.js";import W from"./LocationModal.5b725b64.js";import{P as J}from"./PsValueStore.db7005b9.js";import{u as X}from"./AppInfoStore.e1ca82ff.js";import{u as Z}from"./ItemLocationTownshipStore.652895d4.js";import{L as oo,u as eo}from"./LocationParameterHolder.df629adc.js";import{A as ao}from"./AppInfoParameterHolder.e24d894d.js";import{_ as to}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsModal.b5929b7c.js";import"./vue-neat-modal.bb68220d.js";import"./PsLine.115a33c3.js";import"./PsButton.2af859b4.js";import"./PsLabelCaption.c39c43ba.js";import"./ps_constants.115f3686.js";import"./PsApiService.664f5104.js";import"./PsObject.a17ef38f.js";import"./DefaultPhoto.cc755f93.js";import"./ItemLocationTownship.94979fe0.js";import"./PsSepetetedStore.9a31ac47.js";const no=O({components:{PsIcon:Y,PsIconToggle:G,PsDropdown:q,PsLabel:Q,PsDropdownSelect:E,LocationModal:W,PsInputWithLeftIcon:D},props:{topOfPage:{type:Boolean,default:!1}},setup(o){const n=R(),k=h(localStorage.activeLanguage),f=J(),L=X(),b=f.getLoginUserId(),d=new oo().getDefaultParameterHolder(),s=new ao;s.userId=b,L.loadAppInfo(s);const _=h(A().props.languages),w=h(""),S=eo("navtab-location"),v=Z("navtab-township"),e=h(!0),p=h();function M(i){this.filteredLanguage=A().props.languages.filter(y=>y.name.toLowerCase().includes(i.toLowerCase()))}function V(i){j(i.symbol),n.dispatch("handleActiveLanguage",i.symbol)}function B(){p.value.openModal()}async function I(){var y,C;await S.resetItemLocationList(b,d);let i=(C=(y=L.appInfo.data)==null?void 0:y.psAppSetting)==null?void 0:C.isSubLocation;(localStorage.locationName===""||localStorage.locationName===void 0)&&(localStorage.locationName="Select Your Location",localStorage.locationId="",localStorage.locationLat="",localStorage.locationLng=""),i=="1"&&(localStorage.subLocationName===""||localStorage.subLocationName===void 0)?(localStorage.subLocationId="",localStorage.subLocationName="All"):i!="1"&&(localStorage.subLocationName!==""||localStorage.subLocationName!==void 0)&&(localStorage.subLocationId="",localStorage.subLocationName=""),f.replaceLocation(localStorage.locationId,localStorage.locationName,localStorage.locationLat,localStorage.locationLng),f.replaceSubLocation(localStorage.subLocationId,localStorage.subLocationName)}function K(){window.location.pathname.includes("item-list")?location.replace(window.location.origin+window.location.pathname+`?item_location_id=${localStorage.locationId}&item_location_township_id=${localStorage.subLocationId}&order_by=added_date&order_type=desc&status=1`):window.location.reload()}return H(()=>{I()}),{handleLanguage:V,activeLanguage:k,dataReady:e,ps_location_modal:p,itemLocationTownshipStore:v,itemLocationStore:S,openLocationModal:B,changeLocation:K,loadLocationData:I,languageSearch:M,appInfoStore:L,psValueStore:f,PsInputWithLeftIcon:D,filteredLanguage:_,languageKeys:w}},methods:{...T(["toggleDarkMode"])},computed:{...z(["isDarkMode"])}}),so={class:"xl:w-feLarge lg:w-large w-full flex justify-between mx-4 sm:mx-6 lg:mx-auto"},lo={key:0,class:"flex gap-4"},ro={class:""},io=["id"],co={key:0},po=r("hr",{class:"bg-feSecondary-400 h-0.5"},null,-1),mo={class:"pt-1 z-30"},uo={key:0},go={key:1},fo=["onClick"],ho={class:"flex items-center gap-3"},Lo=g("Dark");function So(o,n,k,f,L,b){const d=u("ps-icon"),s=u("ps-label"),_=u("ps-input-with-left-icon"),w=u("ps-dropdown"),S=u("ps-icon-toggle"),v=u("location-modal");return l(),c($,null,[r("nav",{class:x(["fixed z-50 w-full h-10 flex items-center bg-feSecondary-900",o.topOfPage?" ":"hidden"])},[r("div",so,[r("div",{class:"flex items-center cursor-pointer",onClick:n[0]||(n[0]=U((...e)=>o.openLocationModal&&o.openLocationModal(...e),["prevent"]))},[a(d,{name:"locationBig",class:"text-feSecondary-100 me-2"}),o.psValueStore.locationName!="Select Your Location"?(l(),N(s,{key:0,textColor:"text-feSecondary-200 dark:text-feAchromatic-50",class:"text-sm hidden md:block"},{default:t(()=>{var e,p;return[g(m(o.psValueStore.locationName)+m(((p=(e=o.appInfoStore.appInfo.data)==null?void 0:e.psAppSetting)==null?void 0:p.isSubLocation)=="1"?`,${o.psValueStore.subLocationName}`:""),1)]}),_:1})):(l(),N(s,{key:1,textColor:"text-feSecondary-200 dark:text-feAchromatic-50",class:"text-sm hidden md:block"},{default:t(()=>[g(m(o.$t("select_your_location")),1)]),_:1}))]),o.dataReady?(l(),c("div",lo,[r("div",ro,[a(w,{h:"h-64",align:"left"},{select:t(()=>[a(s,{class:""},{default:t(()=>[r("button",{type:"button",class:"inline-flex items-center content-start justify-between w-full leading-5 font-medium text-sm focus:outline-none transition ease-in-out duration-150 btn-focus text-feAchromatic-50",id:o.$page.props.languages.filter(e=>e.symbol==o.activeLanguage)[0].name,"aria-haspopup":"true","aria-expanded":"true"},[g(m(o.$page.props.languages.filter(e=>e.symbol==o.activeLanguage)[0].name)+" ",1),a(d,{name:"downArrow",textColor:"text-feAchromatic-50",class:"ms-2",w:"24",h:"24"})],8,io)]),_:1})]),filter:t(()=>[r("div",null,[a(_,{class:"bg-feSecondary-100 dark:bg-transparent shadow-none",rounded:"rounded-none",theme:"border-none  focus:ring-0 focus:ring-transparent text-feSecondary-500 dark:text-feAchromatic-50",height:"h-10",placeholderColor:"placeholder-feSecondary-300",onKeyup:n[2]||(n[2]=e=>o.languageSearch(o.languageKeys)),value:o.languageKeys,"onUpdate:value":n[3]||(n[3]=e=>o.languageKeys=e),placeholder:o.$t("search_language"),style:{width:"14.5rem"}},{icon:t(()=>[a(d,{textColor:"text-fePrimary-500 dark:text-feAchromatic-500",name:"search",class:"cursor-pointer"})]),removeIcon:t(()=>[o.languageKeys!=""?(l(),c("div",co,[a(d,{textColor:"text-feAchromatic-500 dark:text-feAchromatic-500",name:"close",class:"cursor-pointer",onClick:n[1]||(n[1]=e=>[o.languageKeys="",o.filteredLanguage=o.$page.props.languages])})])):P("",!0)]),_:1},8,["value","placeholder"])]),po]),list:t(()=>[r("div",mo,[o.filteredLanguage.length===0?(l(),c("div",uo,[a(s,{class:"ms-2"},{default:t(()=>[g(m(o.$t("no_result_found")),1)]),_:1})])):(l(),c("div",go,[(l(!0),c($,null,F(o.filteredLanguage,e=>(l(),c("div",{key:e.id,class:"w-56 flex py-4 px-2 hover:bg-fePrimary-50 dark:hover:bg-fePrimary-900 cursor-pointer items-center",onClick:p=>o.handleLanguage(e)},[a(s,{class:x(["ms-2",e.symbol==o.activeLanguage?" font-bold":""])},{default:t(()=>[g(m(e.name),1)]),_:2},1032,["class"])],8,fo))),128))]))])]),_:1})]),r("div",ho,[a(s,{textColor:"text-feAchromatic-50"},{default:t(()=>[Lo]),_:1}),a(S,{toggleOffIcon:"day",selectedValue:o.isDarkMode,onOnChange:o.toggleDarkMode},null,8,["selectedValue","onOnChange"])])])):P("",!0)])],2),a(v,{onChangeLocation:o.changeLocation,ref:"ps_location_modal"},null,8,["onChangeLocation"])],64)}var Ro=to(no,[["render",So]]);export{Ro as default};

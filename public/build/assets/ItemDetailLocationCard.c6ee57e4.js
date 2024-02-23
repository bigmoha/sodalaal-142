import{aJ as N,bC as V,o as e,c as w,a as B,b as F,w as h,q as E,t as O,f as n,g as a,r}from"./app.bcb0820c.js";import{P as M}from"./ps_constants.115f3686.js";import A from"./PsLabel.f618b059.js";import{_ as T}from"./plugin-vue_export-helper.21dcd24c.js";const j=N(()=>V(()=>import("./MapWithPinPicker.d97bd4e3.js"),["assets/MapWithPinPicker.d97bd4e3.js","assets/index.280f91bb.js","assets/app.bcb0820c.js","assets/app.1224310b.css","assets/AppInfoStore.e1ca82ff.js","assets/PsApiService.664f5104.js","assets/PsObject.a17ef38f.js","assets/DefaultPhoto.cc755f93.js","assets/PsValueStore.db7005b9.js","assets/ps_constants.115f3686.js","assets/AppInfoParameterHolder.e24d894d.js","assets/plugin-vue_export-helper.21dcd24c.js"])),R=N(()=>V(()=>import("./OpenStreetMap.68d9e786.js"),["assets/OpenStreetMap.68d9e786.js","assets/OpenStreetMap.6eb160be.css","assets/Control.Geocoder.863fa98d.js","assets/Control.Geocoder.80a0276c.css","assets/app.bcb0820c.js","assets/app.1224310b.css","assets/plugin-vue_export-helper.21dcd24c.js"])),q={name:"ItemDetailLocationCard",components:{PsLabel:A,MapWithPinPicker:j,OpenStreetMap:R},props:{appInfoProvider:Object,productStore:Object,mapContainer:{type:String,default:"mapContainer"}},setup(){return{PsConst:M}}},z={key:0,class:"mt-6 px-2 py-6 lg:p-4 bg-feSecondary-50 dark:bg-feSecondary-800 rounded-lg"},J={class:"flex flex-col gap-2 mb-6"};function U(d,W,t,o,G,H){var p,l,s,c,m,_,f,g,u,C,S,P,x,y,k,b;const i=r("ps-label"),L=r("map-with-pin-picker"),D=r("open-street-map");return(p=t.productStore.item)!=null&&p.data?(e(),w("div",z,[B("div",J,[F(i,{textColor:"text-xl font-semibold text-feSecondary-800 dark:text-feSecondary-50"},{default:h(()=>[E(O(d.$t("item_detail__location")),1)]),_:1}),((c=(s=(l=t.appInfoProvider)==null?void 0:l.appInfo)==null?void 0:s.data.psItemUploadConfig)==null?void 0:c.address)==o.PsConst.ONE?(e(),n(i,{key:0,class:"text-feSecondary-800 dark:text-feSecondary-200 font-normal text-sm"},{default:h(()=>{var I,v;return[E(O((v=(I=t.productStore.item)==null?void 0:I.data)==null?void 0:v.itemLocation.name),1)]}),_:1})):a("",!0)]),((_=(m=t.appInfoProvider)==null?void 0:m.appInfo)==null?void 0:_.data.frontendConfigSetting.googleMap)==o.PsConst.ONE?(e(),n(L,{key:0,lat:parseFloat(((g=(f=t.productStore.item)==null?void 0:f.data)==null?void 0:g.lat)+"0"),lng:parseFloat(((C=(u=t.productStore.item)==null?void 0:u.data)==null?void 0:C.lng)+"0"),draggable:!1},null,8,["lat","lng"])):a("",!0),((P=(S=t.appInfoProvider)==null?void 0:S.appInfo)==null?void 0:P.data.frontendConfigSetting.openStreetMap)==o.PsConst.ONE?(e(),n(D,{key:1,mapContainer:t.mapContainer,dir:d.$page.props.dir,mapSize:"h-68",lat:parseFloat(((y=(x=t.productStore.item)==null?void 0:x.data)==null?void 0:y.lat)+"0"),lng:parseFloat(((b=(k=t.productStore.item)==null?void 0:k.data)==null?void 0:b.lng)+"0"),dragValue:!1},null,8,["mapContainer","dir","lat","lng"])):a("",!0)])):a("",!0)}var Z=T(q,[["render",U]]);export{Z as default};

import X from"./PsLabel.f618b059.js";import Y from"./PsIcon.c315e2a2.js";import{u as Z}from"./ProductStore.53a7e111.js";import{u as $}from"./CustomFieldStore.ad94a411.js";import{o as d,c as l,b as o,w as a,q as i,t as s,a as n,F as _,s as p,f as ee,g as y,r as U}from"./app.bcb0820c.js";import{_ as te}from"./plugin-vue_export-helper.21dcd24c.js";import"./ProductParameterHolder.e481cecf.js";import"./ps_constants.115f3686.js";import"./PsApiService.664f5104.js";import"./Product.ccea159e.js";import"./PsObject.a17ef38f.js";import"./DefaultPhoto.cc755f93.js";import"./Category.7c65464b.js";import"./DefaultIcon.e76b39a5.js";import"./SubCategory.1b4176e0.js";import"./ItemLocationTownship.94979fe0.js";import"./ProductRelation.4bf64f0e.js";import"./User.450a868b.js";import"./RatingDetail.291ad5d1.js";import"./Vendor.c037b10d.js";import"./ApiStatus.5720ba0b.js";import"./UserDeleteItemParameterHolder.5d816aba.js";import"./PsSepetetedStore.9a31ac47.js";import"./PsStore.dc51d097.js";const oe={name:"ItemDetailInfoCard",components:{PsLabel:X,PsIcon:Y},props:{productRelation:[]},setup(){const m=Z("detail"),u=$("detail");return{productStore:m,itemCustomFieldStore:u}}},re={key:0,class:"flex items-center gap-3 mt-4"},de={key:1,class:"flex items-center gap-3 mt-4"},ae={class:"bg-feSecondary-50 dark:bg-feSecondary-800 rounded-lg px-2 py-4 lg:p-4 mt-6"},ie={class:"grid grid-cols-2 sm:grid-cols-4 gap-6"},se={class:""},le={class:"mt-6 px-2 py-4 lg:p-4 rounded-lg bg-feSecondary-50 dark:bg-feSecondary-800"},ce={class:"mt-6"},me={key:2},ne={class:"col-span-8 mt-6"},fe={class:"bg-feSecondary-50 dark:bg-feSecondary-800 rounded-lg px-2 py-4 lg:p-4 flex flex-col"},_e={key:0},pe={key:0},ye={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"};function ue(m,u,W,t,xe,Se){var S,k,I,g,h,K,b,v,C,V,P,F,R,N,w,B,D,L,q,E,O,T,j,z,A,G,H,J,M;const x=U("ps-icon"),r=U("ps-label");return d(),l(_,null,[((k=(S=t.productStore.item)==null?void 0:S.data)==null?void 0:k.productRelation.filter(e=>e.coreKeysId=="ps-itm00008").length)!=0&&((K=(h=(g=(I=t.productStore.item)==null?void 0:I.data)==null?void 0:g.productRelation.filter(e=>e.coreKeysId=="ps-itm00008")[0])==null?void 0:h.selectedValue[0])==null?void 0:K.value)!=""?(d(),l("div",re,[o(x,{textColor:"text-fePrimary-500 dark:text-fePrimary-500",name:"case",w:"24",h:"24"}),o(r,{textColor:"text-base font-semibold text-feSecondary-600 dark:text-feSecondary-50"},{default:a(()=>[i(s(m.$t("item_detail__multi_item")),1)]),_:1})])):(d(),l("div",de,[o(x,{textColor:"text-fePrimary-500 dark:text-fePrimary-500",name:"case",w:"24",h:"24"}),o(r,{textColor:"text-base font-semibold text-feSecondary-600 dark:text-feSecondary-50"},{default:a(()=>[i(s(m.$t("item_detail__single_item")),1)]),_:1})])),n("div",ae,[o(r,{textColor:"text-xl font-semibold text-feSecondary-800 dark:text-feSecondary-50"},{default:a(()=>[i(s(m.$t("item_detail__details")),1)]),_:1}),n("div",ie,[(d(!0),l(_,null,p(W.productRelation,e=>(d(),l("div",{key:e.id,class:""},[o(r,{textColor:"text-base font-medium text-feSecondary-800 dark:text-feSecondary-50"},{default:a(()=>{var c,f;return[i(s((f=(c=t.itemCustomFieldStore.customField.data)==null?void 0:c.customList.filter(Q=>Q.coreKeysId==e.coreKeysId&&Q.isVisible=="1")[0])==null?void 0:f.name),1)]}),_:2},1024),o(r,{textColor:"text-sm font-normal text-feSecondary-600 dark:text-feSecondary-200"},{default:a(()=>[i(s(e.selectedValue[0].value),1)]),_:2},1024)]))),128)),n("div",se,[o(r,{textColor:"text-base font-medium text-feSecondary-800 dark:text-feSecondary-50"},{default:a(()=>[i(s(m.$t("item_detail__stock")),1)]),_:1}),o(r,{textColor:"text-sm font-normal text-feSecondary-600 dark:text-feSecondary-200"},{default:a(()=>{var e,c;return[i(s(((c=(e=t.productStore.item)==null?void 0:e.data)==null?void 0:c.isSoldOut)=="1"?m.$t("item_list__sold_item"):m.$t("item_detail__available")),1)]}),_:1})])])]),n("div",le,[o(r,{textColor:"text-xl font-semibold text-feSecondary-800 dark:text-feSecondary-50"},{default:a(()=>[i(s(m.$t("item_detail__description")),1)]),_:1}),n("div",ce,[o(r,{textColor:"text-sm font-normal text-feSecondary-600 dark:text-feSecondary-200"},{default:a(()=>{var e,c,f;return[i(s((e=t.productStore.item)!=null&&e.data?(f=(c=t.productStore.item)==null?void 0:c.data)==null?void 0:f.description:""),1)]}),_:1})])]),((v=(b=t.productStore.item)==null?void 0:b.data)==null?void 0:v.productRelation.filter(e=>e.coreKeysId=="ps-itm-rpt00005"||e.coreKeysId=="ps-itm00003").lenght)!=0&&((F=(P=(V=(C=t.productStore.item)==null?void 0:C.data)==null?void 0:V.productRelation.filter(e=>e.coreKeysId=="ps-itm-rpt00005"||e.coreKeysId=="ps-itm00003")[0])==null?void 0:P.selectedValue[0])==null?void 0:F.value)!=""||((N=(R=t.productStore.item)==null?void 0:R.data)==null?void 0:N.productRelation.filter(e=>e.coreKeysId!="ps-itm-rpt00005"&&e.coreKeysId!="ps-itm00003"&&e.coreKeysId!="ps-itm00002"&&e.coreKeysId!="ps-itm00004"&&e.coreKeysId!="ps-itm00007"&&e.coreKeysId!="ps-itm00008"&&e.coreKeysId!="ps-itm00009").length)!=0&&((L=(D=(B=(w=t.productStore.item)==null?void 0:w.data)==null?void 0:B.productRelation.filter(e=>e.coreKeysId!="ps-itm-rpt00005"&&e.coreKeysId!="ps-itm00003"&&e.coreKeysId!="ps-itm00002"&&e.coreKeysId!="ps-itm00004"&&e.coreKeysId!="ps-itm00007"&&e.coreKeysId!="ps-itm00008"&&e.coreKeysId!="ps-itm00009")[0])==null?void 0:D.selectedValue[0])==null?void 0:L.value)!=""||((E=(q=t.productStore.item)==null?void 0:q.data)==null?void 0:E.phone)!=null&&((T=(O=t.productStore.item)==null?void 0:O.data)==null?void 0:T.phone)!=""?(d(),l("div",me,[n("div",ne,[n("div",fe,[o(r,{textColor:"text-xl font-semibold text-feSecondary-800 dark:text-feSecondary-50"},{default:a(()=>[i(s(m.$t("item_detail__other_info")),1)]),_:1}),(d(!0),l(_,null,p((z=(j=t.productStore.item)==null?void 0:j.data)==null?void 0:z.productRelation.filter(e=>e.coreKeysId!="ps-itm00002"&&e.coreKeysId!="ps-itm00004"&&e.coreKeysId!="ps-itm00007"),e=>(d(),l("div",{key:e.id},[e.isVisible=="1"?(d(),l("div",_e,[o(r,{textColor:"text-base font-medium text-feSecondary-800 dark:text-feSecondary-50 mt-6"},{default:a(()=>[i(s(e.coreKeyName),1)]),_:2},1024),(d(!0),l(_,null,p(e.selectedValue,(c,f)=>(d(),ee(r,{key:f,textColor:"text-sm font-normal text-feSecondary-600 dark:text-feSecondary-200 mt-2"},{default:a(()=>[i(s(c.value),1)]),_:2},1024))),128))])):y("",!0)]))),128)),((G=(A=t.productStore.item)==null?void 0:A.data)==null?void 0:G.phone)!=null&&((J=(H=t.productStore.item)==null?void 0:H.data)==null?void 0:J.phone)!=""?(d(),l("div",pe,[o(r,{textColor:"text-base font-medium text-feSecondary-800 dark:text-feSecondary-50 mt-6"},{default:a(()=>[i(s(m.$t("item_detail__contact_numbers")),1)]),_:1}),n("div",ye,[(d(!0),l(_,null,p((M=t.productStore.item)==null?void 0:M.data.phone.split("#"),(e,c)=>(d(),l("div",{key:c},[o(r,{textColor:"text-sm font-normal text-feSecondary-600 dark:text-feSecondary-200 mt-2"},{default:a(()=>[i(s(e),1)]),_:2},1024)]))),128))])])):y("",!0)])])])):y("",!0)],64)}var Ge=te(oe,[["render",ue]]);export{Ge as default};

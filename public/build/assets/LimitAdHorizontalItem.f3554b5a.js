import p from"./PsLabel.f618b059.js";import{o as c,c as y,b as r,w as m,q as u,t,a as o,n as b,B as _,r as g}from"./app.bcb0820c.js";import{f as x}from"./format.min.378730c4.js";import{L as k}from"./LimitAdTransaction.e736dae3.js";import{u as S}from"./AppInfoStore.e1ca82ff.js";import{A as I}from"./AppInfoParameterHolder.e24d894d.js";import{P as f}from"./PsValueStore.db7005b9.js";import{u as P}from"./PsValueHolder.00f22b51.js";import{h as w}from"./moment.9709ab41.js";import{_ as C}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsObject.a17ef38f.js";import"./User.450a868b.js";import"./RatingDetail.291ad5d1.js";import"./ProductRelation.4bf64f0e.js";import"./Package.5254ef20.js";import"./PaymentInfo.5aa268a0.js";import"./PsApiService.664f5104.js";import"./DefaultPhoto.cc755f93.js";import"./ps_constants.115f3686.js";const A={name:"LimitAdHorizontalItem",components:{PsLabel:p},props:{buyad:{type:k},onClick:Function,padding:{type:String,default:"py-10 px-10 lg:px-3"}},setup(){f.psValueStore=P();const a=f(),l=a.getLoginUserId(),e=new I;e.userId=l;const s=S();function d(i){var n;return i.toString()=="0"?_("item_price__free"):x((n=s.appInfo.data.mobileSetting)==null?void 0:n.price_format,i)}return{formatPrice:d,psValueStore:a,moment:w}}};function V(a,l,e,s,d,i){const n=g("ps-label");return c(),y("div",{class:"sm:w-full md:w-full flex flex-col rounded-t-3xl bg-fePrimary-300 px-0",onClick:l[0]||(l[0]=L=>e.onClick!=null?e.onClick(e.buyad):null)},[r(n,{textColor:"text-base text-center font-medium text-feSecondary-800 mt-6"},{default:m(()=>[u(t(e.buyad?e.buyad.package.paymentInfo.value:"")+" "+t(a.$t("package__packages")),1)]),_:1}),r(n,{textColor:"text-base text-center font-medium text-feSecondary-800"},{default:m(()=>[u(t(e.buyad?e.buyad.package.paymentAttributes.currencySymbol:"")+t(e.buyad?e.buyad.package.paymentAttributes.price:""),1)]),_:1}),o("div",{class:b(["bg-fePrimary-50 rounded-t-3xl mt-4 text-feSecondary-800 flex flex-col gap-4",e.padding])},[r(n,{class:"flex justify-between items-center text-sm font-medium"},{default:m(()=>[o("span",null,t(a.$t("package__total_post")),1),o("span",null,t(e.buyad?e.buyad.user.remainingPost:"")+" "+t(a.$t("package__posts")),1)]),_:1}),r(n,{class:"flex justify-between items-center text-sm font-medium"},{default:m(()=>[o("span",null,t(a.$t("package__purchased_date")),1),o("span",null,t(e.buyad?s.moment(e.buyad.addedDate.split(" ")[0]).format(a.$page.props.dateFormat):""),1)]),_:1}),r(n,{class:"flex justify-between items-center text-sm font-medium"},{default:m(()=>[o("span",null,t(a.$t("package__purchased_time")),1),o("span",null,t(e.buyad?e.buyad.addedDate.split(" ")[1]:""),1)]),_:1}),r(n,{class:"flex justify-between items-center text-sm font-medium"},{default:m(()=>[o("span",null,t(a.$t("package__payment_type")),1),o("span",null,t(e.buyad?e.buyad.paymentMethod:""),1)]),_:1})],2)])}var R=C(A,[["render",V]]);export{R as default};

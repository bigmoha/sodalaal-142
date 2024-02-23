import d from"./PsLabel.f618b059.js";import _ from"./PsLabelHeader3.2200c388.js";import f from"./PsLabelHeader6.be5597a7.js";import u from"./PsButton.2af859b4.js";import v from"./VendorApplicationModal.725abe9e.js";import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";import{d as b,i as g,o as w,c as x,a as o,m as $,b as r,w as a,q as s,t as i,F as V,r as p,E as k}from"./app.bcb0820c.js";import"./AppInfoStore.e1ca82ff.js";import"./PsApiService.664f5104.js";import"./PsObject.a17ef38f.js";import"./DefaultPhoto.cc755f93.js";import"./PsValueStore.db7005b9.js";import"./ps_constants.115f3686.js";import"./UserStore.6fc60c2b.js";import"./User.450a868b.js";import"./RatingDetail.291ad5d1.js";import"./ProductRelation.4bf64f0e.js";import"./PsSepetetedStore.9a31ac47.js";import"./UserListParameterHolder.d110b747.js";import"./ApiStatus.5720ba0b.js";import"./vendorStore.616ef870.js";import"./Vendor.c037b10d.js";import"./PsModal.b5929b7c.js";import"./vue-neat-modal.bb68220d.js";import"./PsLine.115a33c3.js";import"./PsIcon.c315e2a2.js";import"./PsInput.e94383d0.js";import"./VendorChooseSubscriptionPlanModal.dd402863.js";import"./PaymentInfo.5aa268a0.js";import"./VendorChooseSubscriptionPlanItem.8d58ad0a.js";import"./VendorPlanBoughtModal.e571b1c1.js";import"https://checkout.razorpay.com/v1/checkout.js";import"./PsRadio.8a89bc8f.js";import"./PsRadio2.1f79459d.js";import"./PsErrorDialog.d884287b.js";import"./PsLabelTitle.529f301f.js";import"./PsWarningDialog2.772141bb.js";import"./StripePaymentModal.839f68ac.js";import"./stripe.esm.3ed8eaf3.js";import"./PsLabelHeader4.e06a0f87.js";import"./PsLoadingDialog.9586f261.js";import"./PaypalPaymentModal.f164e654.js";import"./dropin.58c78cb4.js";import"./OfflinePaymentModal.3db0917a.js";import"./PsLabelTitle3.65d5f52c.js";import"./OfflinePaymentStore.6c0ea097.js";import"./DefaultIcon.e76b39a5.js";import"./InputEmailModal.15b78e4e.js";import"./AppInfoParameterHolder.e24d894d.js";import"./inline.d0ef9675.js";import"./PsUtils.eb7a8002.js";import"./format.min.378730c4.js";import"./ItemLimitParameterHolder.a3bfbb51.js";import"./PsFileUpload.fcb0b929.js";import"./PrivacyModal.7cfe4c9d.js";import"./AboutUsStore.d9029d91.js";const y=b({name:"DashboardHowItWorksCard",components:{PsLabel:d,PsLabelHeader3:_,PsLabelHeader6:f,PsButton:u,VendorApplicationModal:v},setup(){const t=g();function e(){t.value.openModal()}return{vendor_application_modal:t,addNewVendor:e}}}),C={class:"w-full"},A={class:"w-full bg-feWarning-100 rounded-lg mx-auto py-0 p-3 mb-4 dark:bg-feWarning-700"},N={class:"w-full grid grid-cols-4 p-5"},P={class:"w-full h-full flex justify-center items-center col-span-4 md:col-span-1 lg:col-span-1"},B={alt:"",class:"w-36 object-contain"},D={class:"w-full col-span-4 md:col-span-3 lg:col-span-3"},H={class:"space-y-2 flex flex-col items-center md:items-start pt-3"},L={class:"text-feAchromatic-500 whitespace-wrap text-center md:text-left dark:text-feAchromatic-200"},W={class:"mt-4"};function j(t,e,z,E,F,I){const m=p("ps-label-header6"),n=p("ps-button"),l=p("vendor-application-modal"),c=k("lazy");return w(),x(V,null,[o("div",C,[o("div",A,[o("div",N,[o("div",P,[$(o("img",B,null,512),[[c,{src:t.$page.props.sysImageUrl+"/VendorAnnouement-2.png"}]])]),o("div",D,[o("div",H,[r(m,{textColor:"text-feAchromatic-800 dark:text-feAchromatic-100"},{default:a(()=>[s(i(t.$t("core__fe_profile_vendor_header")),1)]),_:1}),o("span",L,i(t.$t("core__fe_profile_vendor_text")),1),o("div",W,[r(n,{onClick:e[0]||(e[0]=M=>t.addNewVendor())},{default:a(()=>[s(i(t.$t("core__fe_button_become_a_vendor")),1)]),_:1})])])])])])]),r(l,{ref:"vendor_application_modal"},null,512)],64)}var Uo=h(y,[["render",j]]);export{Uo as default};

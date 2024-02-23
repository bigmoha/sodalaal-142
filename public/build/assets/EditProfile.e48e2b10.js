import{Z as xe,O as ye,y as pe,i as x,H as Ie,j as Ke,B as K,o as l,c as d,b as t,w as n,a as p,F as P,s as E,q as u,t as f,g as v,f as W,Y as Ce,n as ve,m as L,v as R,u as Se,ad as Pe,r as g}from"./app.bcb0820c.js";import Ue from"./PsDropdown.b0f6436e.js";import Ee from"./PsDropdownSelect.1e4537ad.js";import{u as Ve}from"./UserStore.6fc60c2b.js";import{P as Le}from"./PsValueStore.db7005b9.js";import{u as Ne}from"./PhoneStore.bbff37ba.js";import{u as Me}from"./CustomFieldStore.ad94a411.js";import{u as _e}from"./CustomizeUiStore.c4750726.js";import De from"./PsInputWithRightIcon.2791a941.js";import Te from"./PsContentContainer.baf5d5b4.js";import Ae from"./PsLabelHeader4.e06a0f87.js";import ze from"./PsButton.2af859b4.js";import Re from"./PsIcon.c315e2a2.js";import Be from"./PsInput.e94383d0.js";import Oe from"./PsTextarea.205aa5a8.js";import je from"./PsCheckboxValue.9445713f.js";import{P as qe}from"./ProfileUpdateViewHolder.3e643083.js";import{b as he}from"./PsApiService.664f5104.js";import Ye from"./PsLoadingDialog.6cfddf3a.js";import We from"./PsErrorDialog.18ac37ea.js";import Ge from"./PsSuccessDialog.b1e632e6.js";import Ze from"./UserPhoneLoginVerificationModal.ddf1eb34.js";import Je from"./PsLabel.f618b059.js";import Qe from"./PsLabelTitle3.65d5f52c.js";import Xe from"./DatePicker.165d712d.js";import $e from"./PsRadioValue2.94334aa6.js";import He from"./CheckBox.8558a7eb.js";import Fe from"./PsBreadcrumb2.ae081895.js";import eo from"./PsRouteLink.e985dbfe.js";import{f as be}from"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import{P as ae}from"./PsUtils.eb7a8002.js";import{P as ge}from"./ps_constants.115f3686.js";import oo from"./PsFrontendLayout.c6e64cf5.js";import{_ as to}from"./plugin-vue_export-helper.21dcd24c.js";import"./User.450a868b.js";import"./PsObject.a17ef38f.js";import"./RatingDetail.291ad5d1.js";import"./ProductRelation.4bf64f0e.js";import"./DefaultPhoto.cc755f93.js";import"./PsSepetetedStore.9a31ac47.js";import"./UserListParameterHolder.d110b747.js";import"./ApiStatus.5720ba0b.js";import"./ProductParameterHolder.e481cecf.js";import"./ProductStore.53a7e111.js";import"./Product.ccea159e.js";import"./Category.7c65464b.js";import"./DefaultIcon.e76b39a5.js";import"./SubCategory.1b4176e0.js";import"./ItemLocationTownship.94979fe0.js";import"./Vendor.c037b10d.js";import"./UserDeleteItemParameterHolder.5d816aba.js";import"./PsStore.dc51d097.js";import"./PsModal.b5929b7c.js";import"./vue-neat-modal.bb68220d.js";import"./PsLine.115a33c3.js";import"./PsLabelTitle.529f301f.js";import"./main.7d6b6908.js";import"./index.edd1d404.js";import"./FooterView.68cf7b8a.js";import"./FooterLinkSection.3f744e23.js";import"./PsLink.dea1f7ef.js";import"./PsLabelCaption.c39c43ba.js";import"./AppInfoStore.e1ca82ff.js";import"./PsNavTabBar.0d828f1e.js";import"./PsIconToggle.b913bae4.js";import"./PsInputWithLeftIcon.432593fa.js";import"./LocationModal.5b725b64.js";import"./LocationParameterHolder.df629adc.js";import"./ItemLocationTownshipStore.652895d4.js";import"./AppInfoParameterHolder.e24d894d.js";import"./PsNavBar.f99c6cb9.js";import"./UserUnReadMessageParameterHolder.9d1f58f0.js";import"./PsConfirmDialog.e09010a6.js";import"./PsNotificationBox.5b80e886.js";import"./NotificationStore.2c3becfc.js";import"./NotiUnRegisterHolder.eefb692e.js";import"https://unpkg.com/delayed-scroll-restoration-polyfill@0.1.1/index.js";const ro={name:"EditProfileView",components:{PsContentContainer:Te,PsButton:ze,PsLabelHeader4:Ae,PsIcon:Re,PsInput:Be,PsTextarea:Oe,PsCheckboxValue:je,PsLabelTitle3:Qe,PsLoadingDialog:Ye,PsErrorDialog:We,UserPhoneLoginVerificationModal:Ze,PsLabel:Je,PsRouteLink:eo,Head:xe,PsDropdownSelect:Ee,PsDropdown:Ue,PsInputWithRightIcon:De,DatePicker:Xe,PsRadioValue2:$e,CheckBox:He,PsBreadcrumb2:Fe,PsSuccessDialog:Ge},layout:oo,setup(){const a=Ve(),m=Le(),D=m.getLoginUserId();(D==null||D==""||D==ge.NO_LOGIN_USER)&&ye.get(route("login"));const o=pe({data:[]});let Q;const h=pe(new qe),ie=x(!1),X=new Date;X.setFullYear(X.getFullYear()-18);const ne=x(),_=x(X),T=x(),de=x(""),w=x(),B=x(),$=x(),H=x();let ce;const A=Ne(),fe=x(""),z=x("+1"),V=x(""),j=Me("user_edit"),q=pe({data:[{id:"default",provider:_e("default")}]});let C=Ie({product_relation:{}}),G=x({});const F=x(!1),ee=x(!1),Z=x(!1),oe=x(!1),te=x(!1);Ke(async()=>{var i;await j.loadUserCustomFieldList(D);for(const r of(i=j.customField.data)==null?void 0:i.customList)r.isVisible=="1"&&r.isDelete=="0"&&r.uiType.coreKeysId=="uit00001"&&q.data.push({id:r.coreKeysId,provider:_e(r.coreKeysId)}),r.isVisible=="1"&&r.isDelete=="0"&&r.uiType.coreKeysId=="uit00003"&&(q.data.push({id:r.coreKeysId,provider:_e(r.coreKeysId)}),Y(r.coreKeysId)),r.isVisible=="1"&&r.isDelete=="0"&&r.uiType.coreKeysId=="uit00008"&&(q.data.push({id:r.coreKeysId,provider:_e(r.coreKeysId)}),Y(r.coreKeysId));ue(),N()});function re(i){G.value[i]=""}function Y(i){q.data.filter(r=>r.id===i)[0].provider.loadCustomFieldList("1",i)}async function ue(){w.value.openModal();const i=await a.loadUser(D);if(ce=i.data,w.value.closeModal(),i.status==he.SUCCESS){const r=i.data;if(h.userId=r.userId,h.userName=r.username,h.name=r.userName,h.userEmail=r.userEmail,h.city=r.city,h.userAboutMe=r.userAboutMe,h.userAddress=r.userAddress,h.isShowEmail=r.isShowEmail,h.isShowEmailBool=h.isShowEmail=="1",h.isShowPhone=r.isShowPhone,h.isShowPhoneBool=h.isShowPhone=="1",de.value=r.userCoverPhoto.toString(),r.userPhone!=""){const s=r.userPhone.split("-");s.length>1?(z.value=s[0],V.value=s[1]):V.value=s[0]}h.userPhone=z.value+""+V.value;const I=r.userRelation;I!=null&&I.length>0&&I.forEach(s=>{s.uiTypeId=="uit00004"?s.value==1?C.product_relation[s.coreKeysId]=!0:C.product_relation[s.coreKeysId]=!1:s.uiTypeId=="uit00005"||s.uiTypeId=="uit00011"?C.product_relation[s.coreKeysId]=new Date(s.value):C.product_relation[s.coreKeysId]=s.value,s.uiTypeId=="uit00001"&&Y(s.coreKeysId)}),ie.value=!0}else B.value.openModal(K("ps_error_dialog__error"),i.message,K("edit_profile__ok"),()=>{})}function e(i){i=i||window.event;const r=i.which?i.which:i.keyCode;if(r<42||r>57)i.preventDefault();else return Z.value=!1,!0}function b(i){i=i||window.event;const r=i.which?i.which:i.keyCode;if(r>31&&(r<48||r>57)&&r!==46)i.preventDefault();else return!0}function y(i){const r=i.target.files;if(r&&r.length>1)window.alert("Over 5");else{o.data=[];for(let I=0;I<r.length;I++){const s=new FileReader;s.onload=U=>{o.data.push(U.target&&U.target.result?U.target.result.toString():"")},s.readAsDataURL(r[I]),Q=r[I]}}}function le(){T.value.click()}function me(){a.postImageUpload(m.getLoginUserId(),"web",Q,"")}async function J(){h.userRelation=[],Object.keys(C.product_relation).forEach(I=>{h.userRelation.push({core_keys_id:I,value:C.product_relation[I]})}),h.isShowEmail=h.isShowEmailBool?"1":"0",h.isShowPhone=h.isShowPhoneBool?"1":"0",w.value.openModal(),w.value.setMessage(K("edit_profile__updating_profile"));const r=await a.postProfileUpdate(h,D);Q!=null&&(w.value.setMessage(K("edit_profile__uploading_profile_image")),await a.postImageUpload(m.getLoginUserId(),"web",Q,"")),w.value.closeModal(),r.status==he.SUCCESS?$.value.openModal(K("edit_profile__success"),K("edit_profile__profile_updated"),K("edit_profile__ok"),()=>{}):r.status==he.ERROR&&B.value.openModal(K("ps_error_dialog__error"),r.message,K("edit_profile__ok"),()=>{})}function c(){var r,I;let i=!0;if((r=j.customField.data)==null||r.coreList.forEach(s=>{s.fieldName==="username"&&(h.userName==""||h.userName==null)&&s.isVisible=="1"&&s.mandatory==1&&(F.value=!0,i=!1),s.fieldName==="email"&&(h.userEmail==""||h.userEmail==null)&&s.isVisible=="1"&&s.mandatory==1&&(ee.value=!0,i=!1),s.fieldName==="name"&&(h.name==""||h.name==null)&&s.isVisible=="1"&&s.mandatory==1&&(te.value=!0,i=!1),s.fieldName==="user_phone"&&(V.value==""||V.value==null)&&s.isVisible=="1"&&s.mandatory==1&&(Z.value=!0,i=!1),s.fieldName==="user_about_me"&&(h.userAboutMe==""||h.userAboutMe==null)&&s.isVisible=="1"&&s.mandatory==1&&(oe.value=!0,i=!1)}),(I=j.customField.data)==null||I.customList.forEach(s=>{(C.product_relation[s.coreKeysId]==""||C.product_relation[s.coreKeysId]==null)&&s.isVisible=="1"&&s.mandatory=="1"&&s.isDelete=="0"?(G.value[s.coreKeysId]=s.name+K("item_entry__field_is_reqiured"),i=!1):C.product_relation[s.coreKeysId]!=""&&C.product_relation[s.coreKeysId]!=null&&s.coreKeysId==ge.WHATSAPP_CORE_KEY_Id&&!/^\+\d{2,}/.test(C.product_relation[s.coreKeysId])&&(G.value[s.coreKeysId]=K("whatsapp_required_countrycode"),i=!1)}),i!=!0){window.scrollTo(0,0);return}V.value==""?h.userPhone="":h.userPhone=z.value+"-"+V.value,h.userPhone==ce.userPhone?J():M(z.value+""+V.value)}let S;function N(){w.value.openModal(),setTimeout(()=>{window.recaptchaVerifier=new be.auth.RecaptchaVerifier("recaptcha-container",{size:"invisible",callback:i=>{ae.log("Callback"),ae.log(i)},"expired-callback":()=>{ae.log("expiry callback")}}),S=window.recaptchaVerifier,w.value.closeModal()},500)}async function M(i){w.value.openModal();const r=S,I=await be.auth().signInWithPhoneNumber(i,r).catch(s=>{w.value.closeModal(),B.value.openModal(K("edit_profile__error_in_changing_phone_number"),s==null?void 0:s.message,K("edit_profile__ok"),()=>{})});w.value.closeModal(),I!=null&&H.value.openModal(K("phone_no_verification_modal__title"),"","Submit","Cancel",async s=>{w.value.openModal(),I.confirm(s).then(async U=>{U!=null&&U.user!=null&&U.user.uid!=null&&U.user.uid!=""?(w.value.closeModal(),J()):ae.log("ERROR")}).catch(U=>{w.value.closeModal(),B.value.openModal(K("edit_profile__error_in_changing_phone_number"),U==null?void 0:U.message,K("edit_profile__ok"),()=>{})})},()=>{ae.log("Cancel")})}function k(){A.loadPhoneCountryCode(D,A.phoneparamHolder)}function se(i){A.phoneparamHolder.keyword=i,A.filterPhoneUpdate(D,A.phoneparamHolder)}function O(i){z.value=i.country_code}function we(){ye.get(route("fe_profile"))}function ke(i,r){C.product_relation[i]=r,re(i)}return{phoneFilterClicked:O,filterPhoneUpdate:se,loadPhone:k,phoneStore:A,previewImage:o,onImageSelected:y,uploadImage:me,userStore:a,submit:J,holder:h,date_picker:ie,pickedDate:ne,image:T,onImageClick:le,profilePhoto:de,ps_loading_dialog:w,ps_error_dialog:B,ps_success_dialog:$,upperDate:_,phoneNumber:e,isNumber:b,user_phone_login_verification_modal:H,isPhoneVerified:c,phoneKeyword:fe,countryCode:z,tempPhone:V,form:C,customFieldStore:j,customizeUiStoreList:q,userNameStatus:F,emailStatus:ee,aboutStatus:oe,phoneStatus:Z,nameStatus:te,validateCustom:re,product_relation_errors:G,cancelClicked:we,loadCustomField:Y,selectCustomDropdown:ke}},computed:{breadcrumb(){var a;return[{label:(a=this.userStore.user.data)==null?void 0:a.userName,url:route("fe_profile")},{label:K("edit_profile__edit_profile"),color:"text-fePrimary-500"}]}}},lo={class:"sm:mt-32 lg:mt-36 mt-28 mb-16"},so={class:"w-full mb-6"},ao={class:""},io={class:"w-full flex flex-col border rounded-md border-feSecondary-400 dark:border-feAchromatic-500 py-6 sm:py-6 md:py-6 lg:py-6 px-6 sm:px-10 md:px-12 lg:px-24"},no={class:"flex w-full items-center justify-center sm:items-start sm:justify-start"},co={class:"mx-2 w-48 h-44 sm:w-52 sm:h-48 rounded-full relative"},uo={class:"w-44 h-44 sm:w-48 sm:h-48 rounded-full overflow-hidden flex items-center justify-center"},mo=["src"],_o=["src"],fo={class:"sm:grid grid-cols-2 w-full mt-10 sm:mt-12 gap-6"},po={class:"flex flex-col w-full"},ho={key:0,class:"text-feError-800 font-medium ms-1"},yo={key:0,class:"text-feError-800 font-medium ms-1"},vo={key:0,class:"text-feError-800 font-medium ms-1"},bo={class:"flex flex-row"},go={class:"me-1"},wo={class:"w-56"},ko={class:"rounded-md shadow-xs w-56"},xo={class:"pt-2 z-30"},Io={key:0},Ko={key:1},Co=["onClick"],So={class:"mb-2 w-56"},Po={key:0,class:"mt-4 ms-4 flex"},Uo=p("div",{id:"recaptcha-container"},null,-1),Eo=u(),Vo=p("br",null,null,-1),Lo={class:"flex flex-col w-full"},No={key:0,class:"text-feError-800 font-medium ms-1"},Mo={key:0,class:"text-feError-800 font-medium ms-1"},Do={key:0,class:"mb-6"},To={class:"text-feError-800 font-medium ms-1"},Ao={class:"rounded-md shadow-xs w-56"},zo={class:"pt-2 z-30"},Ro={key:0},Bo={key:1},Oo=["onClick"],jo={class:"mb-2 w-56"},qo={key:0,class:"mt-4 ms-4 flex"},Yo={key:1,class:"mb-6"},Wo={class:"text-feError-800 font-medium ms-1"},Go={key:2,class:"mb-6"},Zo={class:"text-feError-800 font-medium ms-1"},Jo={class:"flex flex-col"},Qo={key:3,class:"mb-6"},Xo={class:"flex flex-row"},$o={class:"me-2 flex"},Ho=["onUpdate:modelValue","onChange"],Fo={key:4,class:"mb-6"},et={class:"text-feError-800 font-medium ms-1"},ot={key:0},tt={key:5,class:"mb-6"},rt={class:"text-feError-800 font-medium ms-1"},lt={key:6,class:"mb-6"},st={class:"text-feError-800 font-medium ms-1"},at={key:7,class:"mb-6"},it={class:"text-feError-800 font-medium ms-1"},nt={class:"flex flex-col"},dt={key:8,class:"mb-6"},ct={class:"text-feError-800 font-medium ms-1"},ut=["onUpdate:modelValue","onKeypress"],mt={key:9,class:"mb-6"},_t={class:"text-feError-800 font-medium ms-1"},ft={key:0},pt={class:"flex flex-col sm:flex-row items-center justify-end mt-4 sm:mt-12 md:mt-16 lg:mt-20 mb-6 sm:mb-8"};function ht(a,m,D,o,Q,h){const ie=g("Head"),X=g("ps-breadcrumb-2"),ne=g("ps-icon"),_=g("ps-label"),T=g("ps-input"),de=g("ps-input-with-right-icon"),w=g("ps-dropdown-select"),B=g("ps-dropdown"),$=g("ps-checkbox-value"),H=g("ps-textarea"),ce=g("ps-radio-value-2"),A=g("date-picker"),fe=g("CheckBox"),z=g("ps-button"),V=g("ps-content-container"),j=g("ps-loading-dialog"),q=g("user-phone-login-verification-modal"),C=g("ps-error-dialog"),G=g("ps-success-dialog");return l(),d(P,null,[t(ie,{title:a.$t("edit_profile__edit_profile")},null,8,["title"]),t(V,null,{content:n(()=>{var F,ee,Z,oe,te,re,Y,ue;return[p("div",lo,[p("div",so,[t(X,{items:h.breadcrumb,class:""},null,8,["items"])]),p("div",ao,[p("div",io,[p("div",no,[p("div",co,[p("div",{class:"absolute end-0 mt-18 sm:mt-20 cursor-pointer bg-feAchromatic-900 text-feAchromatic-50 p-2 rounded-full",onClick:m[0]||(m[0]=(...e)=>o.onImageClick&&o.onImageClick(...e)),for:"upload-image1"},[t(ne,{name:"pancel_dash",w:"19",h:"21",viewBox:"0 0 19 21"})]),p("input",{class:"relative",type:"file",size:"1",max:"1",accept:".jpg,.jpeg,.png",onChange:m[1]||(m[1]=e=>o.onImageSelected(e)),ref:"image",id:"upload-image1",style:{display:"none"},ordering:1},null,544),p("div",uo,[o.previewImage.data==""?(l(),d("img",{key:0,alt:"Placeholder",width:"300px",height:"300px",class:"w-44 h-44 sm:w-48 sm:h-48 object-cover",src:a.$page.props.thumb3xUrl+"/"+o.profilePhoto,onError:m[2]||(m[2]=(...e)=>o.userStore.defaultProfileImage&&o.userStore.defaultProfileImage(...e))},null,40,mo)):(l(!0),d(P,{key:1},E(o.previewImage.data,e=>(l(),d("img",{key:e,alt:"Placeholder",width:"300px",height:"300px",class:"w-44 h-44 sm:w-48 sm:h-48 object-cover",src:e,onClick:m[3]||(m[3]=(...b)=>o.onImageClick&&o.onImageClick(...b))},null,8,_o))),128))])])]),p("div",fo,[p("div",po,[(l(!0),d(P,null,E((F=o.customFieldStore.customField.data)==null?void 0:F.coreList.filter(e=>e.fieldName==="username"&&e.isVisible==="1"),(e,b)=>(l(),d("div",{class:"mb-6",key:b},[t(_,{class:"text-base"},{default:n(()=>[u(f(a.$t(e.labelName))+" ",1),(e.mandatory=1)?(l(),d("span",ho,"*")):v("",!0)]),_:2},1024),t(T,{ref_for:!0,ref:"userName",type:"text",value:o.holder.userName,"onUpdate:value":m[4]||(m[4]=y=>o.holder.userName=y),class:"dark:bg-transparent",placeholder:a.$t(e.placeholder),onKeypress:m[5]||(m[5]=y=>o.userNameStatus=!1)},null,8,["value","placeholder"]),o.userNameStatus?(l(),W(_,{key:0,class:"lg:mt-2 mt-1 w-full text-xs",textColor:"text-feError-500"},{default:n(()=>[u(f(a.$t("item_entry__username_required_error")),1)]),_:1})):v("",!0)]))),128)),(l(!0),d(P,null,E((ee=o.customFieldStore.customField.data)==null?void 0:ee.coreList.filter(e=>e.fieldName==="email"&&e.isVisible==="1"),(e,b)=>(l(),d("div",{class:"mb-6",key:b},[t(_,{class:"text-base"},{default:n(()=>[u(f(a.$t(e.labelName))+" ",1),(e.mandatory=1)?(l(),d("span",yo,"*")):v("",!0)]),_:2},1024),t(T,{ref_for:!0,ref:"email",type:"email",value:o.holder.userEmail,"onUpdate:value":m[6]||(m[6]=y=>o.holder.userEmail=y),class:"dark:bg-transparent",placeholder:a.$t(e.placeholder),onKeypress:m[7]||(m[7]=y=>o.emailStatus=!1)},null,8,["value","placeholder"]),o.emailStatus?(l(),W(_,{key:0,class:"lg:mt-2 mt-1 w-full text-xs",textColor:"text-feError-500"},{default:n(()=>[u(f(a.$t("item_entry__email_required_error")),1)]),_:1})):v("",!0)]))),128)),(l(!0),d(P,null,E((Z=o.customFieldStore.customField.data)==null?void 0:Z.coreList.filter(e=>e.fieldName==="user_phone"&&e.isVisible==="1"),(e,b)=>(l(),d("div",{class:"mb-6",key:b},[t(_,{class:"text-base"},{default:n(()=>[u(f(a.$t(e.labelName))+" ",1),(e.mandatory=1)?(l(),d("span",vo,"*")):v("",!0)]),_:2},1024),p("div",bo,[p("div",go,[t(B,{align:"left",class:"",onOnClick:o.loadPhone},{filter:n(()=>[p("div",wo,[t(de,{class:"rounded-xl flex-1",onKeyup:m[9]||(m[9]=Ce(y=>o.filterPhoneUpdate(o.phoneKeyword),["enter"])),value:o.phoneKeyword,"onUpdate:value":m[10]||(m[10]=y=>o.phoneKeyword=y),placeholder:a.$t("phone_code_by_country")},{icon:n(()=>[t(ne,{textColor:"text-feSecondary-400 dark:text-feAchromatic-500",name:"search",class:"cursor-pointer",onClick:m[8]||(m[8]=y=>o.filterPhoneUpdate(o.phoneKeyword))})]),_:1},8,["value","placeholder"])])]),select:n(()=>[t(w,{showCenter:!0,selectedValue:o.countryCode},null,8,["selectedValue"])]),list:n(()=>[p("div",ko,[p("div",xo,[o.phoneStore.phoneList.data==null?(l(),d("div",Io,[t(_,{class:"p-2 flex",onClick:o.loadPhone},{default:n(()=>[u(f(a.$t("item_entry__loading")),1)]),_:1},8,["onClick"])])):(l(),d("div",Ko,[(l(!0),d(P,null,E(o.phoneStore.phoneList.data,y=>(l(),d("div",{key:y.id,class:"w-56 flex py-4 px-2 hover:bg-fePrimary-50 dark:hover:bg-fePrimary-900 cursor-pointer items-center",onClick:le=>o.phoneFilterClicked(y)},[t(_,{class:ve(["ms-2",y.country_code==o.countryCode?" font-bold":""])},{default:n(()=>[u(f(y.country_code),1)]),_:2},1032,["class"])],8,Co))),128))]))])])]),loadmore:n(()=>[p("div",So,[o.phoneStore.phoneList.data!=null&&o.phoneStore.loading.value==!0?(l(),d("div",Po,[t(_,null,{default:n(()=>[u(f(a.$t("item_entry__loading")),1)]),_:1})])):v("",!0),o.phoneStore.isNoMoreRecord.value?v("",!0):(l(),W(_,{key:1,class:"flex mt-4 ms-4 mb-2 underline font-bold cursor-pointer",onClick:o.loadPhone},{default:n(()=>[u(f(a.$t("item_entry__load_more")),1)]),_:1},8,["onClick"]))])]),_:1},8,["onOnClick"])]),t(T,{type:"text",placeholder:a.$t("edit_profile__phone_placeholder"),value:o.tempPhone,"onUpdate:value":m[11]||(m[11]=y=>o.tempPhone=y),onKeypress:m[12]||(m[12]=y=>o.phoneNumber(y))},null,8,["placeholder","value"]),Uo,Eo,Vo]),o.phoneStatus?(l(),W(_,{key:0,class:"lg:mt-2 mt-1 w-full text-xs",textColor:"text-feError-500"},{default:n(()=>[u(f(a.$t("item_entry__phone_required_error")),1)]),_:1})):v("",!0)]))),128)),(l(!0),d(P,null,E((oe=o.customFieldStore.customField.data)==null?void 0:oe.coreList.filter(e=>e.fieldName==="is_show_email"&&e.isVisible==="1"),(e,b)=>(l(),d("div",{class:"mb-6",key:b},[t($,{title:a.$t(e.labelName),class:"",value:o.holder.isShowEmailBool,"onUpdate:value":m[13]||(m[13]=y=>o.holder.isShowEmailBool=y)},null,8,["title","value"])]))),128)),(l(!0),d(P,null,E((te=o.customFieldStore.customField.data)==null?void 0:te.coreList.filter(e=>e.fieldName==="is_show_phone"&&e.isVisible==="1"),(e,b)=>(l(),d("div",{class:"mb-6",key:b},[t($,{title:a.$t(e.labelName),class:"",value:o.holder.isShowPhoneBool,"onUpdate:value":m[14]||(m[14]=y=>o.holder.isShowPhoneBool=y)},null,8,["title","value"])]))),128))]),p("div",Lo,[(l(!0),d(P,null,E((re=o.customFieldStore.customField.data)==null?void 0:re.coreList.filter(e=>e.fieldName==="name"&&e.isVisible==="1"),(e,b)=>(l(),d("div",{class:"mb-6",key:b},[t(_,{class:"text-base"},{default:n(()=>[u(f(a.$t(e.labelName))+" ",1),(e.mandatory=1)?(l(),d("span",No,"*")):v("",!0)]),_:2},1024),t(T,{ref_for:!0,ref:"name",type:"text",value:o.holder.name,"onUpdate:value":m[15]||(m[15]=y=>o.holder.name=y),class:"dark:bg-transparent",placeholder:a.$t(e.placeholder),onKeypress:m[16]||(m[16]=y=>o.nameStatus=!1)},null,8,["value","placeholder"]),o.nameStatus?(l(),W(_,{key:0,class:"lg:mt-2 mt-1 w-full text-xs",textColor:"text-feError-500"},{default:n(()=>[u(f(a.$t("item_entry__name_required_error")),1)]),_:1})):v("",!0)]))),128)),(l(!0),d(P,null,E((Y=o.customFieldStore.customField.data)==null?void 0:Y.coreList.filter(e=>e.fieldName==="user_about_me"&&e.isVisible==="1"),(e,b)=>(l(),d("div",{class:"mb-6",key:b},[t(_,{class:"text-base"},{default:n(()=>[u(f(a.$t(e.labelName))+" ",1),(e.mandatory=1)?(l(),d("span",Mo,"*")):v("",!0)]),_:2},1024),t(H,{rows:"4",value:o.holder.userAboutMe,"onUpdate:value":m[17]||(m[17]=y=>o.holder.userAboutMe=y),class:"dark:bg-transparent",placeholder:a.$t(e.placeholder),onKeypress:m[18]||(m[18]=y=>o.aboutStatus=!1)},null,8,["value","placeholder"]),o.aboutStatus?(l(),W(_,{key:0,class:"lg:mt-2 mt-1 w-full text-xs",textColor:"text-feError-500"},{default:n(()=>[u(f(a.$t("item_entry__about_me_required_error")),1)]),_:1})):v("",!0)]))),128)),(l(!0),d(P,null,E((ue=o.customFieldStore.customField.data)==null?void 0:ue.customList,e=>{var b,y,le,me,J;return l(),d("div",{key:e.id},[e.uiType.coreKeysId==="uit00001"&&e.isVisible==="1"&&e.isDelete==="0"?(l(),d("div",Do,[t(_,{class:"text-base"},{default:n(()=>[u(f(a.$t(e.name)),1),L(p("span",To,"*",512),[[R,e.mandatory==1]])]),_:2},1024),t(B,{align:"left",class:"lg:mt-2 mt-1 w-full",onOnClick:c=>o.loadCustomField(e.coreKeysId)},{select:n(()=>{var c,S,N,M;return[t(w,{showCenter:!0,selectedValue:(M=(N=(S=(c=o.customizeUiStoreList.data.filter(k=>k.id===e.coreKeysId)[0])==null?void 0:c.provider)==null?void 0:S.customizeUiList.data)==null?void 0:N.filter(k=>k.id===o.form.product_relation[e.coreKeysId])[0])==null?void 0:M.name},null,8,["selectedValue"])]}),list:n(()=>{var c,S,N,M;return[p("div",Ao,[p("div",zo,[((S=(c=o.customizeUiStoreList.data.filter(k=>k.id===e.coreKeysId)[0])==null?void 0:c.provider)==null?void 0:S.customizeUiList.data)==null?(l(),d("div",Ro,[t(_,{class:"p-2 flex",onClick:k=>o.loadCustomField(e.coreKeysId)},{default:n(()=>[u(f(a.$t("item_entry__loading")),1)]),_:2},1032,["onClick"])])):(l(),d("div",Bo,[(l(!0),d(P,null,E((M=(N=o.customizeUiStoreList.data.filter(k=>k.id===e.coreKeysId)[0])==null?void 0:N.provider)==null?void 0:M.customizeUiList.data,k=>(l(),d("div",{key:k.coreKeysId,class:"w-56 flex py-4 px-2 hover:bg-fePrimary-50 dark:hover:bg-fePrimary-900 cursor-pointer items-center",onClick:se=>o.selectCustomDropdown(e.coreKeysId,k.id)},[t(_,{class:ve(["ms-2",o.form.product_relation[e.coreKeysId]==k.id?"font-bold":""])},{default:n(()=>[u(f(k.name),1)]),_:2},1032,["class"])],8,Oo))),128))]))])])]}),loadmore:n(()=>{var c,S,N,M,k,se;return[p("div",jo,[((S=(c=o.customizeUiStoreList.data.filter(O=>O.id===e.coreKeysId)[0])==null?void 0:c.provider)==null?void 0:S.customizeUiList.data)!=null&&((M=(N=o.customizeUiStoreList.data.filter(O=>O.id===e.coreKeysId)[0])==null?void 0:N.provider)==null?void 0:M.loading.value)==!0?(l(),d("div",qo,[t(_,null,{default:n(()=>[u(f(a.$t("item_entry__loading")),1)]),_:1})])):v("",!0),(se=(k=o.customizeUiStoreList.data.filter(O=>O.id===e.coreKeysId)[0])==null?void 0:k.provider)!=null&&se.isNoMoreRecord?v("",!0):(l(),W(_,{key:1,class:"flex mt-4 ms-4 mb-2 underline font-bold cursor-pointer",onClick:O=>o.loadCustomField(e.coreKeysId)},{default:n(()=>[u(f(a.$t("item_entry__load_more")),1)]),_:2},1032,["onClick"]))])]}),_:2},1032,["onOnClick"]),t(_,{class:"lg:mt-2 mt-1 w-full text-xs",textColor:"text-feError-500"},{default:n(()=>[u(f(o.product_relation_errors&&o.product_relation_errors[e.coreKeysId]),1)]),_:2},1024)])):v("",!0),e.uiType.coreKeysId==="uit00002"&&e.isVisible==="1"&&e.isDelete==="0"?(l(),d("div",Yo,[t(_,null,{default:n(()=>[u(f(a.$t(e.name)),1),L(p("span",Wo,"*",512),[[R,e.mandatory=="1"]])]),_:2},1024),t(T,{type:"text",class:"w-full dark:bg-transparent rounded",placeholder:a.$t(e.placeholder),value:o.form.product_relation[e.coreKeysId],"onUpdate:value":c=>o.form.product_relation[e.coreKeysId]=c,onKeypress:c=>o.validateCustom(e.coreKeysId)},null,8,["placeholder","value","onUpdate:value","onKeypress"]),t(_,{class:"lg:mt-2 mt-1 w-full text-xs",textColor:"text-feError-500"},{default:n(()=>[u(f(o.product_relation_errors&&o.product_relation_errors[e.coreKeysId]),1)]),_:2},1024)])):v("",!0),e.uiType.coreKeysId==="uit00003"&&e.isVisible==="1"&&e.isDelete==="0"?(l(),d("div",Go,[t(_,{class:"text-base"},{default:n(()=>[u(f(a.$t(e.name)),1),L(p("span",Zo,"*",512),[[R,e.mandatory=="1"]])]),_:2},1024),p("div",Jo,[(l(!0),d(P,null,E((y=(b=o.customizeUiStoreList.data.filter(c=>c.id===e.coreKeysId)[0])==null?void 0:b.provider)==null?void 0:y.customizeUiList.data,c=>(l(),d("div",{class:"mb-1",key:c.id},[t(ce,{color:"text-purple-600 border-purple-300",onChange:S=>o.validateCustom(e.coreKeysId),value:o.form.product_relation[e.coreKeysId],"onUpdate:value":S=>o.form.product_relation[e.coreKeysId]=S,title:c.name},null,8,["onChange","value","onUpdate:value","title"]),t(_,{for:c.id},{default:n(()=>[u(f(c.attribute),1)]),_:2},1032,["for"])]))),128))]),t(_,{textColor:"text-feError-500 ",class:"lg:mt-2 mt-1 w-full text-xs"},{default:n(()=>[u(f(o.product_relation_errors&&o.product_relation_errors[e.coreKeysId]),1)]),_:2},1024)])):v("",!0),e.uiType.coreKeysId==="uit00004"&&e.isVisible==="1"&&e.isDelete==="0"&&e.coreKeysId!="ps-usr00002"?(l(),d("div",Qo,[t(_,{class:"mb-1"},{default:n(()=>[u(f(a.$t(e.name)),1)]),_:2},1024),p("div",Xo,[p("div",$o,[L(p("input",{type:"checkbox",class:"rounded border",value:"0","onUpdate:modelValue":c=>o.form.product_relation[e.coreKeysId]=c,onChange:c=>o.validateCustom(e.coreKeysId)},null,40,Ho),[[Se,o.form.product_relation[e.coreKeysId]]]),t(_,{class:"ms-2"},{default:n(()=>[u(f(a.$t(e.placeholder)),1)]),_:2},1024)])]),t(_,{textColor:"text-feError-500 ",class:"lg:mt-2 mt-1 w-full text-xs"},{default:n(()=>[u(f(o.product_relation_errors&&o.product_relation_errors[e.coreKeysId]),1)]),_:2},1024)])):v("",!0),e.uiType.coreKeysId==="uit00005"&&e.isVisible==="1"&&e.isDelete==="0"?(l(),d("div",Fo,[t(_,{class:"text-base"},{default:n(()=>[u(f(a.$t(e.name)),1),L(p("span",et,"*",512),[[R,e.mandatory=="1"]])]),_:2},1024),o.date_picker?(l(),d("div",ot,[t(A,{value:o.form.product_relation[e.coreKeysId],"onUpdate:value":c=>o.form.product_relation[e.coreKeysId]=c,onChange:c=>o.validateCustom(e.coreKeysId),enableTimePicker:!0,inline:!1,autoApply:!1},null,8,["value","onUpdate:value","onChange"])])):v("",!0),t(_,{textColor:"text-feError-500 ",class:"lg:mt-2 mt-1 w-full text-xs"},{default:n(()=>[u(f(o.product_relation_errors&&o.product_relation_errors[e.coreKeysId]),1)]),_:2},1024)])):v("",!0),e.uiType.coreKeysId==="uit00006"&&e.isVisible==="1"&&e.isDelete==="0"&&e.coreKeysId!="ps-usr00003"?(l(),d("div",tt,[t(_,{class:"text-base"},{default:n(()=>[u(f(a.$t(e.name)),1),L(p("span",rt,"*",512),[[R,e.mandatory=="1"]])]),_:2},1024),t(H,{rows:"4",placeholder:a.$t(e.placeholder),value:o.form.product_relation[e.coreKeysId],"onUpdate:value":c=>o.form.product_relation[e.coreKeysId]=c,onKeypress:c=>o.validateCustom(e.coreKeysId)},null,8,["placeholder","value","onUpdate:value","onKeypress"]),t(_,{textColor:"text-feError-500 ",class:"lg:mt-2 mt-1 w-full text-xs"},{default:n(()=>[u(f(o.product_relation_errors&&o.product_relation_errors[e.coreKeysId]),1)]),_:2},1024)])):v("",!0),e.uiType.coreKeysId==="uit00007"&&e.isVisible==="1"&&e.isDelete==="0"?(l(),d("div",lt,[t(_,{class:"text-base"},{default:n(()=>[u(f(a.$t(e.name)),1),L(p("span",st,"*",512),[[R,e.mandatory=="1"]])]),_:2},1024),t(T,{type:"number",class:"w-full rounded",placeholder:a.$t(e.placeholder),value:o.form.product_relation[e.coreKeysId],"onUpdate:value":c=>o.form.product_relation[e.coreKeysId]=c,onKeypress:c=>o.validateCustom(e.coreKeysId)},null,8,["placeholder","value","onUpdate:value","onKeypress"]),t(_,{textColor:"text-feError-500 ",class:"lg:mt-2 mt-1 w-full text-xs"},{default:n(()=>[u(f(o.product_relation_errors&&o.product_relation_errors[e.coreKeysId]),1)]),_:2},1024)])):v("",!0),e.uiType.coreKeysId==="uit00008"&&e.isVisible==="1"&&e.isDelete==="0"?(l(),d("div",at,[t(_,{class:"text-base"},{default:n(()=>[u(f(a.$t(e.name)),1),L(p("span",it,"*",512),[[R,e.mandatory=="1"]])]),_:2},1024),p("div",nt,[t(fe,{oldData:o.form.product_relation[e.coreKeysId],onToParent:a.handleMultiSelect,customizeDetails:(J=(me=(le=o.customizeUiStoreList.data)==null?void 0:le.filter(c=>(c==null?void 0:c.id)===(e==null?void 0:e.coreKeysId))[0])==null?void 0:me.provider)==null?void 0:J.customizeUiList.data,customizeHeader:e},null,8,["oldData","onToParent","customizeDetails","customizeHeader"])]),t(_,{textColor:"text-feError-500 ",class:"lg:mt-2 mt-1 w-full text-xs"},{default:n(()=>[u(f(o.product_relation_errors&&o.product_relation_errors[e.coreKeysId]),1)]),_:2},1024)])):v("",!0),e.uiType.coreKeysId==="uit00010"&&e.isVisible==="1"&&e.isDelete==="0"?(l(),d("div",dt,[t(_,{class:"text-base"},{default:n(()=>[u(f(a.$t(e.name)),1),L(p("span",ct,"*",512),[[R,e.mandatory=="1"]])]),_:2},1024),L(p("input",{type:"time",class:"w-full rounded","onUpdate:modelValue":c=>o.form.product_relation[e.coreKeysId]=c,onKeypress:c=>o.validateCustom(e.coreKeysId)},null,40,ut),[[Pe,o.form.product_relation[e.coreKeysId]]]),t(_,{textColor:"text-feError-500 ",class:"lg:mt-2 mt-1 w-full text-xs"},{default:n(()=>[u(f(o.product_relation_errors&&o.product_relation_errors[e.coreKeysId]),1)]),_:2},1024)])):v("",!0),e.uiType.coreKeysId==="uit00011"&&e.isVisible==="1"&&e.isDelete==="0"?(l(),d("div",mt,[t(_,{class:"text-base"},{default:n(()=>[u(f(a.$t(e.name)),1),L(p("span",_t,"*",512),[[R,e.mandatory=="1"]])]),_:2},1024),o.date_picker?(l(),d("div",ft,[t(A,{value:o.form.product_relation[e.coreKeysId],"onUpdate:value":c=>o.form.product_relation[e.coreKeysId]=c,onChange:c=>o.validateCustom(e.coreKeysId),inline:!1,autoApply:!1},null,8,["value","onUpdate:value","onChange"])])):v("",!0),t(_,{textColor:"text-feError-500 ",class:"lg:mt-2 mt-1 w-full text-xs"},{default:n(()=>[u(f(o.product_relation_errors&&o.product_relation_errors[e.coreKeysId]),1)]),_:2},1024)])):v("",!0)])}),128))])])])]),p("div",pt,[t(z,{class:"text-center w-52 me-0 sm:me-6 text-feSecondary-800 dark:text-feSecondary-50",border:"border",colors:"border border-feSecondary-200 dark:border-feAchromatic-500",hover:"hover:bg-feSecondary-50 hover:dark:bg-feAchromatic-900 hover:dark:border-feAchromatic-200 active:bg-feSecondary-50 active:dark:border-feAchromatic-500",onClick:o.cancelClicked},{default:n(()=>[u(f(a.$t("edit_profile__cancel")),1)]),_:1},8,["onClick"]),t(z,{class:"text-center w-52 mt-4 sm:mt-0",onClick:o.isPhoneVerified},{default:n(()=>[u(f(a.$t("edit_profile__update")),1)]),_:1},8,["onClick"])])])]}),_:1}),t(j,{ref:"ps_loading_dialog"},null,512),t(q,{ref:"user_phone_login_verification_modal"},null,512),t(C,{ref:"ps_error_dialog"},null,512),t(G,{ref:"ps_success_dialog"},null,512)],64)}var Or=to(ro,[["render",ht]]);export{Or as default};

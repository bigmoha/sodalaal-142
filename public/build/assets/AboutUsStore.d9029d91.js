import{a as A,P as r}from"./PsApiService.664f5104.js";import{P as M}from"./PsObject.a17ef38f.js";import{D as n}from"./DefaultPhoto.cc755f93.js";import{bD as S,y as p}from"./app.bcb0820c.js";import{m as U}from"./PsSepetetedStore.9a31ac47.js";class o extends M{constructor(){super(...arguments),this.aboutId="",this.aboutTitle="",this.aboutDescription="",this.aboutEmail="",this.aboutPhone="",this.aboutWebsite="",this.facebook="",this.googlePlus="",this.instagram="",this.youtube="",this.pinterest="",this.twitter="",this.privacypolicy="",this.gdpr="",this.uploadPoint="",this.safetyTips="",this.faqPage="",this.termsAndConditions="",this.defaultPhoto=new n}init(t,a,s,u,i,e,l,d,f,m,g,y,_,c,P,b,w,v,D){return this.aboutId=t,this.aboutTitle=a,this.aboutDescription=s,this.aboutEmail=u,this.aboutPhone=i,this.aboutWebsite=e,this.facebook=l,this.googlePlus=d,this.instagram=f,this.youtube=m,this.pinterest=g,this.twitter=y,this.privacypolicy=_,this.gdpr=c,this.uploadPoint=P,this.safetyTips=b,this.faqPage=w,this.termsAndConditions=v,this.defaultPhoto=D,this}getPrimaryKey(){return this.aboutId}fromMap(t){return new o().init(t.id,t.about_title,t.about_description,t.about_email,t.about_phone,t.about_website,t.facebook,t.google_plus,t.instagram,t.youtube,t.pinterest,t.twitter,t.privacy_policy,t.GDPR,t.upload_point,t.safety_tips,t.faq_pages,t.terms_and_conditions,new n().fromMap(t.default_photo))}fromMapList(t){const a=[];for(const s in t)s!=null&&a.push(this.fromMap(s));return a}toMap(t){const a={};return a.id=t.aboutId,a.about_title=t.aboutTitle,a.about_description=t.aboutDescription,a.about_email=t.aboutEmail,a.about_phone=t.aboutPhone,a.about_website=t.aboutWebsite,a.facebook=t.facebook,a.google_plus=t.googlePlus,a.instagram=t.instagram,a.youtube=t.youtube,a.pinterest=t.pinterest,a.twitter=t.twitter,a.privacy_policy=t.privacypolicy,a.GDPR=t.gdpr,a.upload_point=t.uploadPoint,a.safety_tips=t.safetyTips,a.faq_pages=t.faqPage,a.terms_and_conditions=t.termsAndConditions,a.default_photo=new n().toMap(t.defaultPhoto),a}toMapList(t){const a=[];for(let s=0;s<t.length;s++)t[s]!=null&&a.push(this.toMap(t[s]));return a}}const E=U(h=>S(`aboutUsStore/${h}`,()=>{const t=p(new A),a=p({value:!1});async function s(i){a.value=!0;const e=await r.getAboutUsDataList(new o,i);t.code=e.code,t.status=e.status,t.message=e.message,t.data=e.data,a.value=!1}async function u(){a.value=!0;const i=await r.getAboutUsDataList(new o,"1");i.data!=null&&i.data.length>0&&(t.data=i.data[0]),a.value=!1}return{aboutus:t,loading:a,loadAboutUs:s,resetAboutUs:u}}));export{E as u};

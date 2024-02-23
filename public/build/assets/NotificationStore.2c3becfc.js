import{a as P,P as r}from"./PsApiService.664f5104.js";import{P as A}from"./PsObject.a17ef38f.js";import{D as I}from"./DefaultPhoto.cc755f93.js";import{A as M}from"./ApiStatus.5720ba0b.js";import{bD as C,y as f,i as T}from"./app.bcb0820c.js";import{m as F}from"./PsSepetetedStore.9a31ac47.js";class u extends A{constructor(){super(...arguments),this.id="",this.description="",this.message="",this.addedDate="",this.addedUserId="",this.isRead="",this.addedDateStr="",this.type="",this.chatFlag="",this.buyerUserId="",this.sellerUserId="",this.senderName="",this.senderCoverPhoto="",this.itemId="",this.defaultPhoto=new I}init(e,t,d,a,l,n,m,c,p,g,v,_,y,w,N){return this.id=e,this.description=t,this.message=d,this.addedDate=a,this.addedUserId=l,this.isRead=n,this.addedDateStr=m,this.type=c,this.chatFlag=p,this.buyerUserId=g,this.sellerUserId=v,this.senderName=_,this.senderCoverPhoto=y,this.itemId=w,this.defaultPhoto=N,this}getPrimaryKey(){return this.id}toMap(e){const t={};return t.id=e.id,t.description=e.description,t.message=e.message,t.added_date=e.addedDate,t.added_user_id=e.addedUserId,t.is_read=e.isRead,t.added_date_str=e.addedDateStr,t.type=e.type,t.chat_flag=e.chatFlag,t.buyer_user_id=e.buyerUserId,t.seller_user_id=e.sellerUserId,t.sender_name=e.senderName,t.sender_cover_photo=e.senderCoverPhoto,t.item_id=e.itemId,t.default_photo=new I().toMap(e.defaultPhoto),t}toMapList(e){const t=[];for(let d=0;d<e.length;d++)e[d]!=null&&t.push(this.toMap(e[d]));return t}fromMap(e){return new u().init(e.id,e.description,e.message,e.added_date,e.added_user_id,e.is_read,e.added_date_str,e.type,e.chat_flag,e.buyer_user_id,e.seller_user_id,e.sender_name,e.sender_cover_photo,e.item_id,new I().fromMap(e.default_photo))}fromMapList(e){const t=[];for(const d in e)d!=null&&t.push(this.fromMap(d));return t}}class x{constructor(){this.itemId="",this.buyerUserId="",this.sellerUserId="",this.message="",this.type=""}ChatNotiPrameterHolder(){this.itemId="",this.buyerUserId="",this.sellerUserId="",this.message="",this.type=""}toMap(){const e={};return e.item_id=this.itemId,e.buyer_user_id=this.buyerUserId,e.seller_user_id=this.sellerUserId,e.message=this.message,e.type=this.type,e}}const z=F(U=>C(`notiStore/${U}`,()=>{const e=f({value:!1}),t=f(new P),d=f(new P),a=f({value:!1});let l=T(30),n=0;function m(s){var i,o;t!=null&&t.data!=null&&t.data.length>0&&n!=0?(s.data!=null&&s.data.length>0?(((i=s.data)==null?void 0:i.length)<l.value?e.value=!0:e.value=!1,t.data.push(...s.data)):e.value=!0,t.code=s.code,t.status=s.status,t.message=s.message):(((o=s.data)==null?void 0:o.length)<l.value||s.data==null?e.value=!0:e.value=!1,t.data=s.data,t.code=s.code,t.status=s.status,t.message=s.message),t!=null&&t.data!=null&&(n=t.data.length)}async function c(s){a.value=!0;const i=await r.getNotificationList(new u,l.value,n,s.toMap());m(i),a.value=!1}async function p(s){n=0,a.value=!0;const i=await r.getNotificationList(new u,l.value,n,s.toMap());m(i),a.value=!1}async function g(s){n=0,a.value=!0,await r.postNoti(new u,s.toMap()),a.value=!1}async function v(s,i){a.value=!0;const o=await r.getNotiDetail(new u,s,i);d.data=o.data,d.code=o.code,d.status=o.status,d.message=o.message,a.value=!1}async function _(s,i,o,k,L){const h=new x;h.itemId=s,h.sellerUserId=i,h.buyerUserId=o,h.message=k,h.type=L,await r.postChatNoti(new M,h.toMap())}async function y(s){a.value=!0;const i=await r.rawRegisterNotiToken(new M,s.toMap());return a.value=!1,i}async function w(s){a.value=!0;const i=await r.rawUnRegisterNotiToken(new M,s.toMap());return a.value=!1,i}async function N(s,i){a.value=!0,await r.notiMarkAsRead(new u,i,s.toMap()),a.value=!1}async function R(s,i){a.value=!0,await r.notiMarkAsUnRead(new u,i,s.toMap()),a.value=!1}async function S(s,i){a.value=!0,await r.deleteNoti(new u,i,s.toMap()),a.value=!1}return{isNoMoreRecord:e,notiList:t,noti:d,loading:a,limit:l,offset:n,loadNotiList:c,resetNotiList:p,postNoti:g,loadNoti:v,postChatNoti:_,registerNotiToken:y,unRegisterNotiToken:w,markAsRead:N,markAsUnRead:R,deleteNoti:S}}));export{u as N,z as u};

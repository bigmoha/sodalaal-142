import{a as M,P as o}from"./PsApiService.664f5104.js";import{P as w}from"./PsObject.a17ef38f.js";import{P as g}from"./Product.ccea159e.js";import{bD as y,y as I,i as L}from"./app.bcb0820c.js";import{m as D}from"./PsSepetetedStore.9a31ac47.js";class l extends w{constructor(){super(...arguments),this.id="",this.itemId="",this.startDate="",this.startTimeStamp="",this.endDate="",this.endTimeStamp="",this.amount="",this.paymentMethod="",this.transCode="",this.status="",this.addedDate="",this.addedUserId="",this.updatedDate="",this.updatedUserId="",this.updatedFlag="",this.addedDateStr="",this.paidStatus="",this.item=new g}init(t,a,d,i,u,h,n,p,f,_,e,s,m,r,S,c,P,A){return this.id=t,this.itemId=a,this.startDate=d,this.startTimeStamp=i,this.endTimeStamp=h,this.endDate=u,this.amount=n,this.paymentMethod=p,this.transCode=f,this.status=_,this.addedDate=e,this.addedUserId=s,this.updatedDate=m,this.updatedUserId=r,this.updatedFlag=S,this.addedDateStr=c,this.paidStatus=P,this.item=A,this}getPrimaryKey(){return this.id}toMap(t){const a={};return a.id=t.id,a.item_id=t.itemId,a.start_date=t.startDate,a.start_timestamp=t.startTimeStamp,a.end_timestamp=t.endTimeStamp,a.end_date=t.endDate,a.amount=t.amount,a.payment_method=t.paymentMethod,a.trans_code=t.transCode,a.status=t.status,a.added_date=t.addedDate,a.added_user_id=t.addedUserId,a.updated_date=t.updatedDate,a.updated_user_id=t.updatedUserId,a.updated_flag=t.updatedFlag,a.added_date_str=t.addedDateStr,a.paid_status=t.paidStatus,a.item=new g().toMap(t.item),a}toMapList(t){const a=[];for(let d=0;d<t.length;d++)t[d]!=null&&a.push(this.toMap(t[d]));return a}fromMap(t){return new l().init(t.id,t.item_id,t.start_date,t.start_timestamp,t.end_date,t.end_timestamp,t.amount,t.payment_method,t.trans_code,t.status,t.added_date,t.added_user_id,t.updated_date,t.updated_user_id,t.updated_flag,t.added_date_str,t.paid_status,new g().fromMap(t.item))}fromMapList(t){const a=[];for(const d in t)d!=null&&a.push(this.fromMap(d));return a}}const O=D(v=>y(`aidAdItemStore/${v}`,()=>{const t=I(new M),a=I({value:!1});let d=L(4),i=0;const u=I({value:!1});let h="";function n(e){var s,m;t!=null&&t.data!=null&&t.data.length>0&&i!=0?(e.data!=null&&e.data.length>0?(((s=e.data)==null?void 0:s.length)<d.value?u.value=!0:u.value=!1,t.data.push(...e.data)):u.value=!0,t.code=e.code,t.status=e.status,t.message=e.message):(((m=e.data)==null?void 0:m.length)<d.value?u.value=!0:u.value=!1,t.data=e.data,t.code=e.code,t.status=e.status,t.message=e.message),t!=null&&t.data!=null&&(i=t.data.length)}async function p(e){a.value=!0;const s=await o.getPaidAdItemList(new l,e,d.value,i);n(s),a.value=!1}async function f(e){i=0,a.value=!0;const s=await o.getPaidAdItemList(new l,e,d.value,i);n(s),a.value=!1}async function _(e){a.value=!0;const s=0,m=t.data.length,r=await o.getPaidAdItemList(new l,e,m,s);t.data=r.data,t.code=r.code,t.status=r.status,t.message=r.message,a.value=!1}return{isNoMoreRecord:u,paidAdItemList:t,loading:a,limit:d,offset:i,id:h,loadPaidAdItemList:p,resetPaidAdItemList:f,updatePaidAdItemList:n,refleshPaidAdItemList:_}}));export{l as P,O as u};

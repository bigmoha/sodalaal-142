import{a as w,P as f}from"./PsApiService.664f5104.js";import{I as m}from"./ItemLocationTownship.94979fe0.js";import{bD as k,y as h,i as p}from"./app.bcb0820c.js";import{m as M}from"./PsSepetetedStore.9a31ac47.js";class y{constructor(){this.keyword="",this.orderBy="name",this.orderType="asc",this.locationId=""}LocationTownshipParameterHolder(){this.keyword="",this.orderBy="name",this.orderType="asc",this.locationId=""}toMap(){const e={};return e.keyword=this.keyword,e.order_by=this.orderBy,e.order_type=this.orderType,e.city_id=this.locationId,e}}const H=M(v=>k(`ItemLocationTownshipStore/${v}`,()=>{const e=h(new w),u=p(""),g=p(""),i=h({value:!1});let l=p(30),s=0;const n=h({value:!1});function c(t){var a,o;e!=null&&e.data!=null&&e.data.length>0&&s!=0?(t.data!=null&&t.data.length>0?(((a=t.data)==null?void 0:a.length)<l.value?n.value=!0:n.value=!1,e.data.push(...t.data)):n.value=!0,e.code=t.code,e.status=t.status,e.message=t.message):(((o=t.data)==null?void 0:o.length)<l.value||t.data==null?n.value=!0:n.value=!1,e.code=t.code,e.status=t.status,e.message=t.message,e.data=t.data),e!=null&&e.data!=null&&(s=e.data.length)}function T(t,a){L(a.locationId,a.keyword)}async function S(t,a){s=0,i.value=!0;const o=await f.getLocationTownshipList(new m,l.value,s,t,a.toMap());c(o),i.value=!1}async function I(t){if(u.value!=t){const r=h(new w);e.code=r.code,e.status=r.status,e.message=r.message,e.data=r.data,s=0,n.value=!1,u.value=t}t=t.toString();let a=new y;a.locationId=t,i.value=!0;const o=await f.getLocationTownshipList(new m,l.value,s,a.toMap());i.value=!1,c(o)}async function L(t,a){if(u.value!=t){const d=new w;e.code=d.code,e.status=d.status,e.message=d.message,e.data=d.data}s=0,t=t.toString();let o=new y;o.locationId=t,o.keyword=a,i.value=!0;const r=await f.getLocationTownshipList(new m,l.value,s,o.toMap());c(r),i.value=!1}return{locationTownshipList:e,cityId:u,loading:i,limit:l,offset:s,isNoMoreRecord:n,updateItemLocationTownshipList:c,filtersubLocationUpdate:T,resetLocationTownshipList:S,loadItemLocationTownshipList:I,resetItemLocationTownshipList:L,filterKeyword:g}}));export{y as L,H as u};

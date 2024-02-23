import{P as c}from"./PsObject.a17ef38f.js";import{R as t}from"./RatingDetail.291ad5d1.js";import{P as r}from"./ProductRelation.4bf64f0e.js";class a extends c{constructor(){super(...arguments),this.userId="",this.userIsSysAdmin="",this.facebookId="",this.googleId="",this.phoneId="",this.userName="",this.username="",this.userEmail="",this.userPhone="",this.userAddress="",this.userLat="",this.userLng="",this.city="",this.userPassword="",this.userAboutMe="",this.isShowEmail="",this.isShowPhone="",this.userCoverPhoto="",this.userProfilePhoto="",this.roleId="",this.status="",this.isBanned="",this.addedDate="",this.addedDateTimeStamp="",this.deviceToken="",this.hasCode="",this.needVerify="",this.overallRating="",this.whatsapp="",this.messenger="",this.followerCount="",this.followingCount="",this.emailVerify="",this.appleId="",this.appleVerify="",this.facebookVerify="",this.googleVerify="",this.phoneVerify="",this.ratingCount="",this.isFollowed="",this.ratingDetail=new t,this.isFavourited="",this.isOwner="",this.isVerifybluemark="",this.postCount="",this.remainingPost="",this.activeItemCount="",this.userRelation=[new r]}init(s,e,i,n,h,o,u,d,l,_,p,f,m,g,w,y,v,P,I,C,V,k,M,S,R,D,L,A,E,F,T,O,B,N,x,K,U,q,z,G,H,J,Q,W,X,Y,Z,$){return this.userId=s,this.userIsSysAdmin=e,this.facebookId=i,this.googleId=n,this.phoneId=h,this.userName=o,this.username=u,this.userEmail=d,this.userPhone=l,this.userAddress=_,this.userLat=p,this.userLng=f,this.city=m,this.userPassword=g,this.userAboutMe=w,this.isShowEmail=y,this.isShowPhone=v,this.userCoverPhoto=P,this.userProfilePhoto=I,this.roleId=C,this.status=V,this.isBanned=k,this.addedDate=M,this.addedDateTimeStamp=S,this.deviceToken=R,this.hasCode=D,this.needVerify=L,this.overallRating=A,this.whatsapp=E,this.messenger=F,this.followerCount=T,this.followingCount=O,this.emailVerify=B,this.appleId=N,this.appleVerify=x,this.facebookVerify=K,this.googleVerify=U,this.phoneVerify=q,this.ratingCount=z,this.isFollowed=G,this.ratingDetail=H,this.isFavourited=J,this.isOwner=Q,this.isVerifybluemark=W,this.postCount=X,this.remainingPost=Y,this.activeItemCount=Z,this.userRelation=$,this}getPrimaryKey(){return this.userId}toMap(s){const e={};return e.id=s.userId,e.user_is_sys_admin=s.userIsSysAdmin,e.facebook_id=s.facebookId,e.google_id=s.googleId,e.phone_id=s.phoneId,e.name=s.userName,e.username=s.username,e.email=s.userEmail,e.user_phone=s.userPhone,e.user_address=s.userAddress,e.user_lat=s.userLat,e.user_lng=s.userLng,e.city=s.city,e.user_password=s.userPassword,e.user_about_me=s.userAboutMe,e.is_show_email=s.isShowEmail,e.is_show_phone=s.isShowPhone,e.user_cover_photo=s.userCoverPhoto,e.user_profile_photo=s.userProfilePhoto,e.role_id=s.roleId,e.status=s.status,e.is_banned=s.isBanned,e.added_date=s.addedDate,e.added_date_timestamp=s.addedDateTimeStamp,e.device_token=s.deviceToken,e.has_code=s.hasCode,e.need_verify=s.needVerify,e.overall_rating=s.overallRating,e.whatsapp=s.whatsapp,e.messenger=s.messenger,e.follower_count=s.followerCount,e.following_count=s.followingCount,e.email_verify=s.emailVerify,e.apple_id=s.appleId,e.apple_verify=s.appleVerify,e.facebook_verify=s.facebookVerify,e.google_verify=s.googleVerify,e.phone_verify=s.phoneVerify,e.rating_count=s.ratingCount,e.is_followed=s.isFollowed,e.rating_details=new t().toMap(s.ratingDetail),e.is_favourited=s.isFavourited,e.is_owner=s.isOwner,e.is_verify_blue_mark=s.isVerifybluemark,e.post_count=s.postCount,e.remaining_post=s.remainingPost,e.active_item_count=s.activeItemCount,e.userRelation=new r().toMapList(s.userRelation),e}toMapList(s){const e=[];for(let i=0;i<s.length;i++)s[i]!=null&&e.push(this.toMap(s[i]));return e}fromMap(s){return new a().init(s.id,s.user_is_sys_admin,s.facebook_id,s.google_id,s.phone_id,s.name,s.username,s.email,s.user_phone,s.user_address,s.user_lat,s.user_lng,s.city,s.user_password,s.user_about_me,s.is_show_email,s.is_show_phone,s.user_cover_photo,s.user_profile_photo,s.role_id,s.status,s.is_banned,s.added_date,s.added_date_timestamp,s.device_token,s.has_code,s.need_verify,s.overall_rating,s.whatsapp,s.messenger,s.follower_count,s.following_count,s.email_verify,s.apple_id,s.apple_verify,s.facebook_verify,s.google_verify,s.phone_verify,s.rating_count,s.is_followed,new t().fromMap(s.rating_details),s.is_favourited,s.is_owner,s.is_verify_blue_mark,s.post_count,s.remaining_post,s.active_item_count,new r().fromMapList(s.userRelation))}fromMapList(s){const e=[];for(const i of s)i!=null&&e.push(this.fromMap(i));return e}}export{a as U};
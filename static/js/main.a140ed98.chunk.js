(this["webpackJsonpreact-practice"]=this["webpackJsonpreact-practice"]||[]).push([[0],{102:function(e,t,n){e.exports={item:"MyPosts_item__2I4_Q",postsBlock:"MyPosts_postsBlock__1nECW",posts:"MyPosts_posts__1WqQi"}},103:function(e,t,n){e.exports={spinner:"preloader_spinner__32uHf","sk-rotateplane":"preloader_sk-rotateplane__3aE82",spinnerWrapper:"preloader_spinnerWrapper__2vfhl"}},105:function(e,t,n){e.exports={item:"FriendsItem_item__2Y3u0"}},106:function(e,t,n){e.exports={header:"Header_header__2EaHN",loginBlock:"Header_loginBlock__2Ljlk"}},145:function(e,t,n){e.exports={item:"Post_item__15xbh",likeImg:"Post_likeImg__2dmke"}},147:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__1Lf-f",selectedPage:"Users_selectedPage__1_937",page:"Users_page__22_Oc"}},148:function(e,t,n){e.exports={FriendsBlock:"Friends_FriendsBlock__2ARrC"}},179:function(e,t,n){},180:function(e,t,n){},21:function(e,t,n){e.exports={nav:"NavBar_nav__1q0oH",item:"NavBar_item__2WpxC",active:"NavBar_active__2AzHW"}},31:function(e,t,n){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__2mY0S",status:"ProfileInfo_status__2nWlf",disabledWords:"ProfileInfo_disabledWords__1QaiY"}},336:function(e,t,n){"use strict";n.r(t);var a=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,337)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),r(e),c(e)}))},s=n(1),r=n.n(s),c=n(73),i=n.n(c),o=(n(179),n(27)),u=n(28),l=n(30),d=n(29),p=(n(180),n(5)),j=n(11),b=n(12),h=n.n(b),g=n(20),f=n(47),m=n(144),O=n.n(m).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"889b0439-35ec-4778-b91d-221b807651f5"}}),x={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;return O.get("users?count=".concat(t,"&page=").concat(e)).then((function(e){return e.data}))},unfollowDelete:function(e){return O.delete("follow/".concat(e)).then((function(e){return e.data}))},followPost:function(e){return O.post("follow/".concat(e)).then((function(e){return e.data}))},authGet:function(){return O.get("auth/me").then((function(e){return e.data}))},getProfile:function(e){return console.warn("old method, pls use profileApi"),v.getProfile(e)},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return O.post("auth/login",{email:e,password:t,rememberMe:n}).then((function(e){return e.data}))},logout:function(){return O.delete("auth/login").then((function(e){return e.data}))}},v={getProfile:function(e){return O.get("profile/".concat(e))},getProfileStatus:function(e){return O.get("profile/status/".concat(e)).then((function(e){return e.data}))},updateProfileStatus:function(e){return O.put("profile/status",{status:e}).then((function(e){return e.data}))}},_="addPosta",w="SET_USER_PROFILE",k="SET_STATUS",P="DELETE_POST",y={postData:[{id:1,message:"Hello, how r u?",count:15},{id:2,message:"Do you love me?",count:20}],newPostText:"IT-Kamasutra",profile:null,status:""},C=function(e){return{type:k,status:e}},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:var n=Object(p.a)({},e),a={id:n.postData.length+1,message:t.mypoststextarea,count:0};return n.postData=Object(f.a)(e.postData),n.postData.push(a),n;case w:return Object(p.a)(Object(p.a)({},e),{},{profile:t.profile});case k:return Object(p.a)(Object(p.a)({},e),{},{status:t.status});case P:return Object(p.a)(Object(p.a)({},e),{},{postData:e.postData.filter((function(e){return e.postId!==t.postId}))});default:return e}},S=n(77),U=n.n(S),I=n(78),D=n.n(I),A=function(e){if(!e)return"Field is required"},L=function(e){if(e.length>30)return"max length must be 30 symbols"},F=function(e){if(e.length<2)return"min length must be 2 symbols"},B=function(e){if(e.length>100)return"max length must be 100 symbols"},E=n(49),T=n(59),M=n.n(T),R=n(0),G=["input","meta"],W=["input","meta","child"],z=["input","meta","child"],H=function(e){e.input;var t=e.meta,n=Object(E.a)(e,G),a=t.touched&&t.error;return Object(R.jsxs)("div",{className:M.a.formControl+" "+(a?M.a.error:""),children:[Object(R.jsx)("div",{children:n.children}),a&&Object(R.jsx)("span",{children:t.error})]})},Y=function(e){var t=e.input,n=(e.meta,e.child,Object(E.a)(e,W));return Object(R.jsx)(H,Object(p.a)(Object(p.a)({},e),{},{children:Object(R.jsx)("textarea",Object(p.a)(Object(p.a)({},n),t))}))},X=function(e){var t=e.input,n=(e.meta,e.child,Object(E.a)(e,z));return Object(R.jsx)(H,Object(p.a)(Object(p.a)({},e),{},{children:Object(R.jsx)("input",Object(p.a)(Object(p.a)({},n),t))}))},q=n(102),J=n.n(q),K=n(145),Q=n.n(K),Z=function(e){return Object(R.jsxs)("div",{className:Q.a.item,children:[Object(R.jsx)("img",{src:"https://n1s2.starhit.ru/6a/46/ae/6a46aeed947a183d67d1bc48211151bf/480x496_0_2bbde84177c9ff1c2299a26a0f69f69c@480x496_0xac120003_4430520541578509619.jpg",alt:"img"}),e.message,Object(R.jsx)("div",{children:Object(R.jsxs)("span",{children:["Like ",e.count]})})]})},V=r.a.memo((function(e){var t=e.postData.map((function(e){return Object(R.jsx)(Z,{message:e.message,count:e.count})})),n=D()({form:"MyPosts"})((function(e){var t=e.handleSubmit;return Object(R.jsxs)("form",{onSubmit:t,children:[Object(R.jsx)("div",{children:Object(R.jsx)(U.a,{component:Y,name:"mypoststextarea",validate:[A,L,F]})}),Object(R.jsx)("div",{children:Object(R.jsx)("button",{children:"Add post"})})]})}));return Object(R.jsxs)("div",{className:J.a.postsBlock,children:[Object(R.jsx)("h3",{children:"My posts"}),Object(R.jsx)(n,{onSubmit:function(t){e.addPost(t.mypoststextarea)}}),Object(R.jsx)("div",{className:J.a.posts,children:t})]})})),$=Object(j.connect)((function(e){return{postData:e.profilePage.postData,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(function(e){return{type:_,mypoststextarea:e}}(t))}}}))(V),ee=n(103),te=n.n(ee),ne=function(){return Object(R.jsxs)("div",{className:te.a.spinnerWrapper,children:[Object(R.jsx)("div",{className:te.a.spinner}),";"]})},ae=n(31),se=n.n(ae),re=n(60),ce=function(e){var t=Object(s.useState)(!1),n=Object(re.a)(t,2),a=n[0],r=n[1],c=Object(s.useState)(e.status),i=Object(re.a)(c,2),o=i[0],u=i[1];Object(s.useEffect)((function(){u(e.status)}),[e.status]);return Object(R.jsxs)("div",{children:[!a&&Object(R.jsxs)("div",{onDoubleClick:function(){r(!0)},children:[Object(R.jsx)("span",{className:se.a.status,children:"Check(click) my Status: "}),Object(R.jsx)("span",{className:(se.a.status,se.a.statusBorder),children:e.status||"-------"})]}),a&&Object(R.jsxs)("div",{onBlur:function(){r(!1)},children:[Object(R.jsx)("span",{className:se.a.status,children:"Check(click) my Status: "}),Object(R.jsx)("input",{className:se.a.status,autoFocus:!0,onChange:function(t){u(t.currentTarget.value),e.thunkUpdateStatus(o)},value:o})]})]})},ie=function(e){var t=e.profile,n=e.status,a=e.thunkUpdateStatus;return t?Object(R.jsx)("div",{className:se.a.content,children:Object(R.jsxs)("div",{className:se.a.descriptionBlock,children:[Object(R.jsx)("img",{src:t.photos.large,alt:"asd"}),Object(R.jsxs)("div",{children:[Object(R.jsx)("span",{children:t.fullName}),Object(R.jsx)("br",{}),Object(R.jsx)(ce,{status:n,thunkUpdateStatus:a}),Object(R.jsx)("span",{className:se.a.status,children:t.aboutMe}),Object(R.jsx)("br",{}),Object(R.jsx)("br",{}),Object(R.jsx)("span",{children:"\u041c\u043e\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u044b:"}),Object(R.jsx)("br",{}),Object(R.jsx)("br",{}),Object(R.jsxs)("span",{children:["facebook: ",t.contacts.facebook]}),Object(R.jsx)("br",{}),Object(R.jsxs)("span",{children:["website:"," ",t.contacts.website?t.contacts.website:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043d\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0430"]}),Object(R.jsx)("br",{}),Object(R.jsxs)("span",{children:["vk:"," ",t.contacts.vk?t.contacts.vk:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043d\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0430"]}),Object(R.jsx)("br",{}),Object(R.jsxs)("span",{children:["twitter:"," ",t.contacts.twitter?t.contacts.twitter:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043d\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0430"]}),Object(R.jsx)("br",{}),Object(R.jsxs)("span",{children:["instagram:"," ",t.contacts.instagram?t.contacts.instagram:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043d\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0430"]}),Object(R.jsx)("br",{}),Object(R.jsxs)("span",{children:["youtube:"," ",t.contacts.youtube?t.contacts.youtube:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043d\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0430"]}),Object(R.jsx)("br",{}),Object(R.jsxs)("span",{children:["github:"," ",t.contacts.github?t.contacts.github:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043d\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0430"]}),Object(R.jsx)("br",{}),Object(R.jsxs)("span",{children:["mainLink:"," ",t.contacts.mainLink?t.contacts.mainLink:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043d\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0430"]}),Object(R.jsx)("br",{}),Object(R.jsx)("br",{}),Object(R.jsx)("br",{}),Object(R.jsxs)("span",{children:[" ","\u0412 \u043f\u043e\u0438\u0441\u043a\u0435 \u0440\u0430\u0431\u043e\u0442\u044b: ",t.lookingForAJob?"\u041d\u0415\u0422":"\u0414\u0410"]}),Object(R.jsx)("br",{}),Object(R.jsxs)("span",{children:[" \u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435: ",t.lookingForAJobDescription]})]})]})}):Object(R.jsx)(ne,{})},oe=function(e){return Object(R.jsxs)("div",{children:[Object(R.jsx)(ie,{profile:e.profile,status:e.status,thunkUpdateStatus:e.thunkUpdateStatus}),Object(R.jsx)($,{})]})},ue=n(7),le=function(e){return{isAuth:e.auth.isAuth}},de=function(e){var t=function(t){Object(l.a)(a,t);var n=Object(d.a)(a);function a(){return Object(o.a)(this,a),n.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return this.props.isAuth?Object(R.jsx)(e,Object(p.a)({},this.props)):Object(R.jsx)(ue.Redirect,{to:"/Login"})}}]),a}(r.a.Component);return Object(j.connect)(le)(t)},pe=n(9),je=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=21081),this.props.thunkGetProfile(e),this.props.thunkGetStatus(e)}},{key:"render",value:function(){return Object(R.jsx)("div",{children:Object(R.jsx)(oe,Object(p.a)(Object(p.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,thunkUpdateStatus:this.props.thunkUpdateStatus}))})}}]),n}(r.a.Component),be=Object(pe.compose)(Object(j.connect)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{thunkGetProfile:function(e){return function(){var t=Object(g.a)(h.a.mark((function t(n){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.getProfile(e);case 2:a=t.sent,n((s=a.data,{type:w,profile:s}));case 4:case"end":return t.stop()}var s}),t)})));return function(e){return t.apply(this,arguments)}}()},thunkGetStatus:function(e){return function(){var t=Object(g.a)(h.a.mark((function t(n){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.getProfileStatus(e);case 2:a=t.sent,n(C(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},thunkUpdateStatus:function(e){return function(){var t=Object(g.a)(h.a.mark((function t(n){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.updateProfileStatus(e);case 2:0===t.sent.resultCode&&n(C(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),ue.withRouter,de)(je),he=n(16),ge=n(21),fe=n.n(ge),me=function(){return Object(R.jsxs)("nav",{className:fe.a.nav,children:[Object(R.jsx)("div",{className:fe.a.item,children:Object(R.jsx)(he.b,{to:"/Profile",activeClassName:fe.a.active,children:"Profile"})}),Object(R.jsx)("div",{className:fe.a.item,children:Object(R.jsx)(he.b,{to:"/Dialogs",activeClassName:fe.a.active,children:"Messages"})}),Object(R.jsx)("div",{className:fe.a.item,children:Object(R.jsx)(he.b,{to:"/Users",activeClassName:fe.a.active,children:"Users"})}),Object(R.jsx)("div",{className:fe.a.item,children:Object(R.jsx)(he.b,{to:"/News",activeClassName:fe.a.active,children:"News"})}),Object(R.jsx)("div",{className:fe.a.item,children:Object(R.jsx)(he.b,{to:"/Settings",activeClassName:fe.a.active,children:"Settings"})}),Object(R.jsx)("div",{className:fe.a.item,children:Object(R.jsx)(he.b,{to:"/Friends",activeClassName:fe.a.active,children:"Friends"})})]})},Oe=function(e){return Object(R.jsx)("div",{children:"Settings"})},xe="sendMessageText",ve={dialogsData:[{id:1,name:"Dimych",ava:"https://cdn.maximonline.ru/0a/dd/68/0add6885352bd545197842b6b82ba44a/728x728_1_4ab39e35ca1d60eb8fac6ccf337c8083@1024x1024_0xac120002_17152158281550233735.jpg",message:"Hi"},{id:2,name:"Nadia",ava:"https://klike.net/uploads/posts/2019-06/1560150840_2.jpg",message:"How r u?"},{id:3,name:"Gle",ava:"https://www.liga.net/images/general/2019/02/14/20190214174619-9721.png",message:"what is the different between me and u?"},{id:4,name:"Lia",ava:"https://i.pinimg.com/originals/18/e8/c7/18e8c7c7cca213f03a28148189d4599e.jpg",message:"What does it mean Bro???"}]},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;if(t.type===xe){var n=t.newMessageBody,a=e.dialogsData.length;return Object(p.a)(Object(p.a)({},e),{},{dialogsData:[].concat(Object(f.a)(e.dialogsData),[{id:a+1,message:n}])})}return e},we=n(48),ke=n.n(we),Pe=n(82),ye=n.n(Pe),Ce=function(e){var t="/dialogs/"+e.id;return Object(R.jsx)("div",{className:ye.a.dialog+" "+ye.a.active+" "+ye.a.item,children:Object(R.jsx)("div",{children:Object(R.jsx)(he.b,{to:t,children:e.name})})})},Ne=function(e){return Object(R.jsx)("div",{children:Object(R.jsx)("div",{className:ke.a.message,children:e.message})})},Se=D()({form:"dialogAddMessageForm"})((function(e){return Object(R.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(R.jsx)("div",{children:Object(R.jsx)(U.a,{component:Y,placeholder:"Enter your message",name:"newMessageBody",validate:[A,F,B]})}),Object(R.jsx)("div",{children:Object(R.jsx)("button",{children:"Send"})})]})})),Ue=function(e){var t=e.dialogsPage,n=t.dialogsData.map((function(e){return Object(R.jsx)(Ce,{id:e.id,name:e.name,ava:e.ava})})),a=t.dialogsData.map((function(t){return Object(R.jsx)(Ne,{message:t.message,dispatch:e.dispatch})}));return Object(R.jsxs)("div",{className:ke.a.dialogs,children:[Object(R.jsx)("div",{className:ke.a.dialogsItems,children:n}),Object(R.jsxs)("div",{className:ke.a.messages,children:[a,Object(R.jsx)("div",{children:Object(R.jsx)(Se,{onSubmit:function(t){e.onSendMessageClick(t.newMessageBody)}})})]})]})},Ie=Object(pe.compose)(Object(j.connect)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{onSendMessageClick:function(t){e(function(e){return{type:xe,newMessageBody:e}}(t))}}})),de)(Ue),De=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(p.a)(Object(p.a)({},e),a):e}))},Ae="FOLLOW",Le="UNFOLLOW",Fe="SET_USERS",Be="SET_CURRENT_PAGE",Ee="SET_TOTAL_USERS_COUNT",Te="TOGGLE_IS_FETCHING",Me="TOGGLE_IS_FOLLOW",Re={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},Ge=function(e){return{type:Ae,usersId:e}},We=function(e){return{type:Le,usersId:e}},ze=function(e){return{type:Fe,users:e}},He=function(e){return{type:Be,currentPage:e}},Ye=function(e){return{type:Te,isFetching:e}},Xe=function(e,t){return{type:Me,isFetching:e,userId:t}},qe=function(){var e=Object(g.a)(h.a.mark((function e(t,n,a,s){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Xe(!0,n)),e.next=3,s(n);case 3:0===e.sent.resultCode&&t(a(n)),t(Xe(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,s){return e.apply(this,arguments)}}(),Je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ae:var n=Object(p.a)(Object(p.a)({},e),{},{users:De(e.users,t.usersId,"id",{followed:!0})});return n;case Le:var a=Object(p.a)(Object(p.a)({},e),{},{users:De(e.users,t.usersId,"id",{followed:!1})});return a;case Fe:return Object(p.a)(Object(p.a)({},e),{},{users:t.users});case Be:return Object(p.a)(Object(p.a)({},e),{},{currentPage:t.currentPage});case Ee:return Object(p.a)(Object(p.a)({},e),{},{totalUsersCount:t.totalUsersCount});case Te:return Object(p.a)(Object(p.a)({},e),{},{isFetching:t.isFetching});case Me:return Object(p.a)(Object(p.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(f.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},Ke=n(83),Qe=n.n(Ke),Ze=function(e){for(var t=e.currentPage,n=e.onPageChanged,a=e.pageSize,r=e.totalItemsCount,c=[],i=Math.ceil(r/a),o=1;o<=i;o++)c.push(o);var u=Math.ceil(i/10),l=Object(s.useState)(1),d=Object(re.a)(l,2),p=d[0],j=d[1],b=10*(p-1)+1,h=10*p;return Object(R.jsxs)("div",{className:Qe.a.pages,children:[p>1&&Object(R.jsx)("button",{onClick:function(){j(p-1)},children:"PREV"}),c.filter((function(e){return e>=b&&e<=h})).map((function(e){return Object(R.jsx)("span",{id:Qe.a.page,onClick:function(t){n(e)},className:t===e&&Qe.a.selectedPage,children:e})})),u>p&&Object(R.jsx)("button",{onClick:function(){j(p+1)},children:"NEXT"})]})},Ve=n(147),$e=n.n(Ve),et=n.p+"static/media/user.769c19e1.png",tt=function(e){var t=e.user,n=e.followingInProgress,a=e.thunkFollowCreator,s=e.thunkUnfollowCreator,r=t;return Object(R.jsxs)("div",{children:[Object(R.jsxs)("span",{children:[Object(R.jsx)("div",{children:Object(R.jsx)(he.b,{to:"/profile/"+r.id,children:Object(R.jsx)("img",{src:null!=r.photos.small?r.photos.small:et,className:$e.a.userPhoto,alt:"userPhoto"})})}),Object(R.jsx)("div",{children:r.followed?Object(R.jsx)("button",{disabled:n.some((function(e){return e===r.id})),onClick:function(){a(r.id)},children:"Unfollow"}):Object(R.jsx)("button",{disabled:n.some((function(e){return e===r.id})),onClick:function(){s(r.id)},children:"Follow"})})]}),Object(R.jsxs)("span",{children:[Object(R.jsxs)("span",{children:[Object(R.jsx)("div",{children:r.name}),Object(R.jsx)("div",{children:r.status})]}),Object(R.jsxs)("span",{children:[Object(R.jsx)("div",{children:"u.location.country"}),Object(R.jsx)("div",{children:"u.location.city"})]})]})]})},nt=["totalUsersCount","pageSize","currentPage","onPageChanged","users"],at=function(e){var t=e.totalUsersCount,n=e.pageSize,a=e.currentPage,s=e.onPageChanged,r=e.users,c=Object(E.a)(e,nt);return Object(R.jsxs)("div",{children:[Object(R.jsx)(Ze,{totalItemsCount:t,pageSize:n,currentPage:a,onPageChanged:s}),r.map((function(e){return Object(R.jsx)(tt,{user:e,followingInProgress:c.followingInProgress,thunkFollowCreator:c.thunkFollowCreator,thunkUnfollowCreator:c.thunkUnfollowCreator},e.id)}))]})},st=function(e){return e.usersPage.users},rt=function(e){return e.usersPage.pageSize},ct=function(e){return e.usersPage.totalUsersCount},it=function(e){return e.usersPage.currentPage},ot=function(e){return e.usersPage.isFetching},ut=function(e){return e.usersPage.followingInProgress},lt=function(e){return e.usersPage.isAuth},dt=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).onPageChanged=function(t){e.props.thunkGetUsersOnPageChangedCreator(t,e.props.pageSize)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.thunkGetUsersFirstCreator(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return this.props.isAuth?Object(R.jsxs)(R.Fragment,{children:[this.props.isFetching?Object(R.jsx)(ne,{}):null,Object(R.jsx)(at,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,toggleIsFollow:this.props.toggleIsFollow,followingInProgress:this.props.followingInProgress,thunkFollowCreator:this.props.thunkFollowCreator,thunkUnfollowCreator:this.props.thunkUnfollowCreator})]}):Object(R.jsx)(ue.Redirect,{to:"/Login"})}}]),n}(r.a.Component),pt=Object(pe.compose)(Object(j.connect)((function(e){return{users:st(e),pageSize:rt(e),totalUsersCount:ct(e),currentPage:it(e),isFetching:ot(e),followingInProgress:ut(e),isAuth:lt(e)}}),{follow:Ge,unfollow:We,setCurrentPage:He,toggleIsFollow:Xe,thunkGetUsersFirstCreator:function(e,t){return function(){var n=Object(g.a)(h.a.mark((function n(a){var s;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(Ye(!0)),n.next=3,x.getUsers(e,t);case 3:s=n.sent,a(Ye(!1)),a(ze(s.items)),a((r=s.totalCount,{type:Ee,totalUsersCount:r}));case 7:case"end":return n.stop()}var r}),n)})));return function(e){return n.apply(this,arguments)}}()},thunkGetUsersOnPageChangedCreator:function(e,t){return function(){var n=Object(g.a)(h.a.mark((function n(a){var s;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(Ye(!0)),a(He(e)),n.next=4,x.getUsers(e,t);case 4:s=n.sent,a(Ye(!1)),a(ze(s.items));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},thunkFollowCreator:function(e){return function(){var t=Object(g.a)(h.a.mark((function t(n){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:qe(n,e,We,x.unfollowDelete.bind(x));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},thunkUnfollowCreator:function(e){return function(){var t=Object(g.a)(h.a.mark((function t(n){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:qe(n,e,Ge,x.followPost.bind(x));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),de)(dt),jt=n(148),bt=n.n(jt),ht=n(105),gt=n.n(ht),ft=function(e){return Object(R.jsx)("div",{className:gt.a.FriendsItemBlock,children:Object(R.jsxs)("div",{className:gt.a.item,children:[Object(R.jsx)("img",{src:"".concat(e.ava),alt:"boom"}),Object(R.jsx)("div",{children:e.name})]})})},mt=function(e){var t=e.friendsData.map((function(e){return Object(R.jsx)(ft,{ava:e.ava,name:e.name})}));return Object(R.jsx)("div",{className:bt.a.FriendsBlock,children:t})},Ot=Object(j.connect)((function(e){return{friendsData:e.friendsPage.friendsData}}),(function(e){return{}}))(mt),xt=n(41),vt=n.n(xt),_t=function(e){return e.isAuth?Object(R.jsxs)("div",{children:[e.newsData.map((function(e){return Object(R.jsxs)("div",{className:vt.a.main,children:[Object(R.jsx)("div",{children:Object(R.jsx)("img",{src:e.resourceLogo,alt:"resourcePic",className:vt.a.resourceLogo})}),Object(R.jsxs)("div",{children:[Object(R.jsx)("span",{children:e.description}),Object(R.jsxs)("div",{children:[Object(R.jsx)("br",{}),Object(R.jsx)("span",{children:e.description1}),Object(R.jsx)("br",{})]}),Object(R.jsx)("div",{children:Object(R.jsx)("a",{href:e.linkUrl,children:Object(R.jsx)("span",{className:vt.a.cage,children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435..."})})})]}),Object(R.jsx)("div",{children:Object(R.jsx)("img",{src:e.photoUrl,alt:"publicPhoto",className:vt.a.photoUrl})})]},e.id)})),Object(R.jsx)("div",{className:vt.a.buttonWrapper,children:Object(R.jsx)("button",{className:vt.a.button,children:"\u0414\u0430\u043b\u0435\u0435"})})]}):Object(R.jsx)(ue.Redirect,{to:"/Login"})},wt=Object(j.connect)((function(e){return{newsData:e.newsPage.newsData,isAuth:e.auth.isAuth}}),(function(e){return{}}))(_t),kt=n(106),Pt=n.n(kt),yt=function(e){return Object(R.jsxs)("header",{className:Pt.a.header,children:[Object(R.jsx)("img",{src:"https://genlogo.com/u_ajax.php?handler=GenLogo&command=ajax_site_get_colors&t=Connect&s=Connect%20to%20connect&g=315&l=79&f=264&c=250&x=1637844578&oid=278732",alt:"logo"}),Object(R.jsx)("div",{className:Pt.a.loginBlock,children:e.isAuth?Object(R.jsxs)("div",{children:[e.login," - ",Object(R.jsx)("button",{onClick:e.logout,children:"Log out"})]}):Object(R.jsx)(he.b,{to:"/login",children:"Login"})})]})},Ct=n(74),Nt="auth/SET_USER_DATA",St={userId:null,email:null,login:null,isAuth:!1},Ut=function(e,t,n,a){return{type:Nt,payload:{id:e,email:t,login:n,isAuth:a}}},It=function(){return function(){var e=Object(g.a)(h.a.mark((function e(t){var n,a,s,r,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.authGet();case 2:0===(n=e.sent).resultCode&&(a=n.data,s=a.id,r=a.login,c=a.email,t(Ut(s,c,r,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Dt=function(){return function(){var e=Object(g.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.logout();case 2:0===e.sent.resultCode&&t(Ut(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},At=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:St,t=arguments.length>1?arguments[1]:void 0;return t.type===Nt?Object(p.a)(Object(p.a)({},e),t.payload):e},Lt=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(R.jsx)(yt,Object(p.a)({},this.props))}}]),n}(r.a.Component),Ft=Object(j.connect)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login,id:e.auth.userId,email:e.auth.email}}),{logout:Dt})(Lt),Bt=n(140),Et=n(141),Tt=function(e){var t=e.handleSubmit,n=e.error;return Object(R.jsxs)("form",{onSubmit:t,children:[Object(R.jsx)("div",{children:Object(R.jsx)(Bt.a,{name:"email",component:X,type:"text",placeholder:"E-mail",validate:[A]})}),Object(R.jsx)("div",{children:Object(R.jsx)(Bt.a,{name:"password",component:X,type:"password",placeholder:"password",validate:[A]})}),Object(R.jsx)("div",{children:Object(R.jsxs)("label",{children:[Object(R.jsx)(Bt.a,{name:"rememberMe",component:X,type:"checkbox"}),"Remember me"]})}),n&&Object(R.jsx)("div",{className:M.a.formSummaryError,children:n}),Object(R.jsx)("div",{children:Object(R.jsx)("button",{children:"LogIn"})})]})},Mt=Tt=Object(Et.a)({form:"login"})(Tt),Rt=n(81),Gt=Object(j.connect)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var a=Object(g.a)(h.a.mark((function a(s){return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,x.login(e,t,n);case 2:0===a.sent.resultCode?s(It()):s(Object(Ct.a)("login",{_error:"e-mail or password is wrong"}));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},logout:Dt})((function(e){var t=e.login;return e.isAuth?Object(R.jsx)(Rt.Redirect,{to:"profile"}):Object(R.jsxs)("div",{children:[Object(R.jsx)("h1",{children:"LoginPage"}),Object(R.jsx)(Mt,{onSubmit:function(e){t(e.email,e.password,e.rememberMe)}})]})})),Wt="INITIALIZED_SUCCESS",zt={initialized:!1},Ht=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:zt,t=arguments.length>1?arguments[1]:void 0;return t.type===Wt?Object(p.a)(Object(p.a)({},e),{},{initialized:!0}):e},Yt={friendsData:[{id:1,name:"Dimych",ava:"https://cdn.maximonline.ru/0a/dd/68/0add6885352bd545197842b6b82ba44a/728x728_1_4ab39e35ca1d60eb8fac6ccf337c8083@1024x1024_0xac120002_17152158281550233735.jpg"},{id:2,name:"Nadia",ava:"https://klike.net/uploads/posts/2019-06/1560150840_2.jpg"},{id:3,name:"Gle",ava:"https://www.liga.net/images/general/2019/02/14/20190214174619-9721.png"},{id:4,name:"Lia",ava:"https://i.pinimg.com/originals/18/e8/c7/18e8c7c7cca213f03a28148189d4599e.jpg"},{id:5,name:"Polina",ava:"https://cdn.maximonline.ru/0a/dd/68/0add6885352bd545197842b6b82ba44a/728x728_1_4ab39e35ca1d60eb8fac6ccf337c8083@1024x1024_0xac120002_17152158281550233735.jpg"},{id:6,name:"Gregory",ava:"https://i.pinimg.com/236x/98/2a/a2/982aa268f3532bbb0b6f7ed2014f8af7--gerhard-enrico.jpg"},{id:7,name:"Yakov",ava:"https://likeyou.io/wp-content/uploads/2019/07/TiOa5ytjq-k.jpg"},{id:8,name:"Max",ava:"https://klukva35.ru/800/600/https/sun9-36.userapi.com/OZsdCMDY-BBpo48a-BAg7cLX1T-NgWH4BgmawQ/d45n8vWvB1w.jpg"},{id:9,name:"Sasha",ava:"https://i.pinimg.com/736x/1b/55/aa/1b55aaa52cc2613c5dd342bb9f3fd622.jpg"},{id:10,name:"Andrey",ava:"https://most-beauty.ru/wp-content/uploads/2017/08/Hardi.jpg"},{id:11,name:"Dimych",ava:"https://cdn.maximonline.ru/0a/dd/68/0add6885352bd545197842b6b82ba44a/728x728_1_4ab39e35ca1d60eb8fac6ccf337c8083@1024x1024_0xac120002_17152158281550233735.jpg"},{id:12,name:"Nadia",ava:"https://klike.net/uploads/posts/2019-06/1560150840_2.jpg"},{id:13,name:"Gle",ava:"https://www.liga.net/images/general/2019/02/14/20190214174619-9721.png"},{id:14,name:"Lia",ava:"https://i.pinimg.com/originals/18/e8/c7/18e8c7c7cca213f03a28148189d4599e.jpg"},{id:15,name:"Polina",ava:"https://cdn.maximonline.ru/0a/dd/68/0add6885352bd545197842b6b82ba44a/728x728_1_4ab39e35ca1d60eb8fac6ccf337c8083@1024x1024_0xac120002_17152158281550233735.jpg"},{id:16,name:"Gregory",ava:"https://i.pinimg.com/236x/98/2a/a2/982aa268f3532bbb0b6f7ed2014f8af7--gerhard-enrico.jpg"},{id:17,name:"Yakov",ava:"https://likeyou.io/wp-content/uploads/2019/07/TiOa5ytjq-k.jpg"},{id:18,name:"Max",ava:"https://klukva35.ru/800/600/https/sun9-36.userapi.com/OZsdCMDY-BBpo48a-BAg7cLX1T-NgWH4BgmawQ/d45n8vWvB1w.jpg"},{id:19,name:"Sasha",ava:"https://i.pinimg.com/736x/1b/55/aa/1b55aaa52cc2613c5dd342bb9f3fd622.jpg"},{id:20,name:"Andrey",ava:"https://most-beauty.ru/wp-content/uploads/2017/08/Hardi.jpg"},{id:21,name:"Dimych",ava:"https://cdn.maximonline.ru/0a/dd/68/0add6885352bd545197842b6b82ba44a/728x728_1_4ab39e35ca1d60eb8fac6ccf337c8083@1024x1024_0xac120002_17152158281550233735.jpg"},{id:22,name:"Nadia",ava:"https://klike.net/uploads/posts/2019-06/1560150840_2.jpg"},{id:23,name:"Gle",ava:"https://www.liga.net/images/general/2019/02/14/20190214174619-9721.png"},{id:24,name:"Lia",ava:"https://i.pinimg.com/originals/18/e8/c7/18e8c7c7cca213f03a28148189d4599e.jpg"},{id:25,name:"Polina",ava:"https://cdn.maximonline.ru/0a/dd/68/0add6885352bd545197842b6b82ba44a/728x728_1_4ab39e35ca1d60eb8fac6ccf337c8083@1024x1024_0xac120002_17152158281550233735.jpg"},{id:26,name:"Gregory",ava:"https://i.pinimg.com/236x/98/2a/a2/982aa268f3532bbb0b6f7ed2014f8af7--gerhard-enrico.jpg"},{id:27,name:"Yakov",ava:"https://likeyou.io/wp-content/uploads/2019/07/TiOa5ytjq-k.jpg"},{id:28,name:"Max",ava:"https://klukva35.ru/800/600/https/sun9-36.userapi.com/OZsdCMDY-BBpo48a-BAg7cLX1T-NgWH4BgmawQ/d45n8vWvB1w.jpg"},{id:29,name:"Sasha",ava:"https://i.pinimg.com/736x/1b/55/aa/1b55aaa52cc2613c5dd342bb9f3fd622.jpg"},{id:30,name:"Andrey",ava:"https://most-beauty.ru/wp-content/uploads/2017/08/Hardi.jpg"}]},Xt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Yt;return e},qt={newsData:[{id:1,resourceName:"Onliner",description:"\u0427\u0435\u0440\u043d\u0430\u044f \u043f\u044f\u0442\u043d\u0438\u0446\u0430. \u041b\u0443\u0447\u0448\u0438\u0435 \u0442\u0435\u043b\u0435\u0432\u0438\u0437\u043e\u0440\u044b \u0438 \u0430\u043a\u0443\u0441\u0442\u0438\u043a\u0430 \u044d\u0442\u043e\u0439 \u043f\u044f\u0442\u043d\u0438\u0446\u044b",resourceLogo:"https://gc.onliner.by/images/logo/onliner_logo.v3.png?token=1637668848",linkUrl:"https://tech.onliner.by/2021/11/24/televizory-i-akustika-chernoj-pyatnicy",photoUrl:"https://content.onliner.by/news/970x485/1c12fa9e0638dc7179b996705e421df2.jpeg"},{id:2,resourceName:"Onliner",resourceLogo:"https://gc.onliner.by/images/logo/onliner_logo.v3.png?token=1637668848",description:"4 \u043f\u0440\u0438\u0447\u0438\u043d\u044b \u043a\u0443\u043f\u0438\u0442\u044c Lada X-RAY",description1:"\u0421\u0442\u0438\u043b\u044c\u043d\u044b\u0435 \u0438 \u0434\u0438\u043d\u0430\u043c\u0438\u0447\u043d\u044b\u0435 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u0435\u0440\u044b LADA XRAY \u0438 LADA XRAY Cross \u0443\u0436\u0435 \u0434\u0430\u0432\u043d\u043e \u043f\u043e\u043b\u044e\u0431\u0438\u043b\u0438\u0441\u044c \u0431\u0435\u043b\u043e\u0440\u0443\u0441\u0430\u043c. \u042d\u0442\u0438 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u0438 \u0437\u0430\u0441\u043b\u0443\u0436\u0438\u043b\u0438 \u043d\u0430\u0440\u043e\u0434\u043d\u0443\u044e \u043b\u044e\u0431\u043e\u0432\u044c \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u0431\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f \u0441\u0432\u043e\u0435\u043c\u0443 \u0441\u0442\u0438\u043b\u044c\u043d\u043e\u043c\u0443 \u0432\u043d\u0435\u0448\u043d\u0435\u043c\u0443 \u0432\u0438\u0434\u0443, \u043d\u043e \u0438 \u0431\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f \u0441\u0432\u043e\u0435\u0439 \u043f\u0440\u0430\u043a\u0442\u0438\u0447\u043d\u043e\u0441\u0442\u0438. \u0412 \u0430\u0432\u0442\u043e\u0446\u0435\u043d\u0442\u0440\u0435 \u041c\u0438\u043d\u0441\u043a-\u041b\u0430\u0434\u0430 \u043d\u0430 \u043f\u043e\u043a\u0443\u043f\u043a\u0443 \u043c\u043e\u0434\u0435\u043b\u0435\u0439 \u0441\u0435\u043c\u0435\u0439\u0441\u0442\u0432\u0430 LADA XRAY \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044e\u0442 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u0432\u044b\u0433\u043e\u0434\u043d\u044b\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f. \u041c\u044b \u0441\u043e\u0431\u0440\u0430\u043b\u0438 \u0422\u041e\u041f-4 \u043f\u0440\u0438\u0447\u0438\u043d, \u043f\u043e\u0447\u0435\u043c\u0443 \u0441\u0442\u043e\u0438\u0442 \u043f\u0440\u044f\u043c\u043e \u0441\u0435\u0439\u0447\u0430\u0441 \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c\u0441\u044f \u043d\u0430 \u0421\u0435\u0440\u043e\u0432\u0430, 1 \u0437\u0430 \u043f\u043e\u043a\u0443\u043f\u043a\u043e\u0439 \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0433\u043e \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u0435\u0440\u0430 \u043e\u0442 LADA:",linkUrl:"https://autodealers.onliner.by/minsklada/?utm_source=onliner&utm_medium=main_page&utm_campaign=lada2511&utm_content=plitka2511",photoUrl:"https://cdn.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://autodealers.onliner.by/wp-content/uploads/2021/11/xray_cross_2.jpg"},{id:3,resourceName:"Sostav",resourceLogo:"https://www.sostav.ru/app/public/design/logo2918-05v3.svg",description:"\u041c\u0430\u0440\u0438\u044f \u0414\u043e\u043d\u0441\u043a\u0438\u0445, dentsu: \xab\u041b\u044e\u0434\u0438 \u0431\u043e\u043b\u044c\u0448\u0435 \u0434\u0443\u043c\u0430\u044e\u0442 \u043f\u0440\u043e \u043e\u043f\u044b\u0442 \u0438 \u0446\u0435\u043d\u043d\u043e\u0441\u0442\u044c, \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u044d\u0442\u043e\u0442 \u043e\u043f\u044b\u0442 \u043f\u0440\u0438\u043d\u043e\u0441\u0438\u0442\xbb",linkUrl:"https://www.sostav.ru/publication/dentsu-rekonfa-51501.html",photoUrl:"https://www.sostav.ru/images/news/2021/11/25/fcj34tid.jpg"}]},Jt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qt;return e},Kt=n(149),Qt=n(142),Zt=Object(pe.combineReducers)({dialogsPage:_e,profilePage:N,friendsPage:Xt,usersPage:Je,newsPage:Jt,auth:At,form:Qt.a,app:Ht}),Vt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||pe.compose,$t=Object(pe.createStore)(Zt,Vt(Object(pe.applyMiddleware)(Kt.a)));window.__store__=$t;var en=$t,tn=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(R.jsxs)("div",{className:"app-wrapper spinnerWrapper",children:[Object(R.jsx)(Ft,{}),Object(R.jsx)(me,{}),Object(R.jsxs)("div",{className:"app-wrapper-content",children:[Object(R.jsx)(ue.Route,{path:"/Dialogs",render:function(){return Object(R.jsx)(Ie,{})}}),Object(R.jsx)(ue.Route,{path:"/Profile/:userId?",render:function(){return Object(R.jsx)(be,{})}}),Object(R.jsx)(ue.Route,{path:"/Users",component:pt}),Object(R.jsx)(ue.Route,{path:"/News",component:wt}),Object(R.jsx)(ue.Route,{path:"/Login",component:function(){return Object(R.jsx)(Gt,{})}}),Object(R.jsx)(ue.Route,{path:"/Settings",component:Oe}),Object(R.jsx)(ue.Route,{path:"/Friends",render:function(){return Object(R.jsx)(Ot,{})}})]})]}):Object(R.jsx)(ne,{})}}]),n}(s.Component),nn=Object(pe.compose)(Rt.withRouter,Object(j.connect)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(It());Promise.all([t]).then((function(){e({type:Wt})}))}}}))(tn),an=function(e){return Object(R.jsx)(he.a,{children:Object(R.jsx)(j.Provider,{store:en,children:Object(R.jsx)(nn,{})})})};i.a.render(Object(R.jsx)(r.a.StrictMode,{children:Object(R.jsx)(an,{})}),document.getElementById("root")),a()},41:function(e,t,n){e.exports={resourceLogo:"News_resourceLogo__5xmyP",photoUrl:"News_photoUrl__3eRGA",main:"News_main__13aq4",buttonWrapper:"News_buttonWrapper__JFw1p",button:"News_button__3vJh1"}},48:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__enoLK",dialogsItems:"Dialogs_dialogsItems__2KbRK",active:"Dialogs_active__3oo-H",messages:"Dialogs_messages__3rZxL",message:"Dialogs_message__3xtIx"}},59:function(e,t,n){e.exports={formControl:"FormsControls_formControl__3e0-L",error:"FormsControls_error__1WVdY",formSummaryError:"FormsControls_formSummaryError__28_AK"}},82:function(e,t,n){e.exports={item:"DialogItem_item__2FvXz"}},83:function(e,t,n){e.exports={selectedPage:"Paginator_selectedPage__23xxw",page:"Paginator_page__2ImPQ",paginator:"Paginator_paginator__aKadT",pageNumber:"Paginator_pageNumber__2ptcT",pages:"Paginator_pages__1J8xU"}}},[[336,1,2]]]);
//# sourceMappingURL=main.a140ed98.chunk.js.map
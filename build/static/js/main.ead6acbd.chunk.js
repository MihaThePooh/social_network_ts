(this.webpackJsonpsocial_network_tsjsx=this.webpackJsonpsocial_network_tsjsx||[]).push([[0],{11:function(e,s,a){e.exports={appWrapper:"App_appWrapper__1bX5t",appWrapperContent:"App_appWrapperContent__3s6_c"}},14:function(e,s,a){e.exports={avaWallpaper:"ProfileInfo_avaWallpaper__1qztJ",discriptionBlock:"ProfileInfo_discriptionBlock__BYc_c"}},15:function(e,s,a){e.exports={postsBlock:"MyPosts_postsBlock__2p8sP",posts:"MyPosts_posts__EgXkj"}},16:function(e,s,a){e.exports={avaPost:"Post_avaPost__2_k3a"}},20:function(e,s,a){e.exports={header:"Header_header__3JMbQ",loginBlock:"Header_loginBlock__2lSx2"}},22:function(e,s,a){},33:function(e,s,a){"use strict";a.r(s);a(22);var t=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,34)).then((function(s){var a=s.getCLS,t=s.getFID,i=s.getFCP,c=s.getLCP,n=s.getTTFB;a(e),t(e),i(e),c(e),n(e)}))},i=a(0),c=a(19),n=a.n(c),o=a(1),r=a.n(o),l=a(11),d=a.n(l),j=a(20),g=a.n(j);var m=function(){return Object(i.jsx)("header",{className:g.a.header,children:Object(i.jsx)("img",{alt:"logo"})})},p=a(5),b=a.n(p),x=a(7);var u=function(){return Object(i.jsxs)("nav",{className:b.a.nav,children:[Object(i.jsx)("div",{className:b.a.item,children:Object(i.jsx)(x.b,{to:"/profile",activeClassName:b.a.active,children:"Profile"})}),Object(i.jsx)("div",{className:b.a.item,children:Object(i.jsx)(x.b,{to:"/dialogs",activeClassName:b.a.active,children:"Messages"})}),Object(i.jsx)("div",{className:b.a.item,children:Object(i.jsx)("a",{children:"Users"})}),Object(i.jsx)("div",{className:b.a.item,children:Object(i.jsx)("a",{children:"News"})}),Object(i.jsx)("div",{className:b.a.item,children:Object(i.jsx)("a",{children:"Music"})}),Object(i.jsx)("div",{className:b.a.item,children:Object(i.jsx)("a",{children:"Settings"})})]})},v=a(14),O=a.n(v),h=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{children:Object(i.jsx)("img",{className:O.a.avaWallpaper,src:"",alt:"avaWallpaper"})}),Object(i.jsxs)("div",{className:O.a.discriptionBlock,children:[Object(i.jsx)("img",{src:"",alt:"ava"}),Object(i.jsx)("br",{}),Object(i.jsx)("label",{children:"aboutMe: props.profile.aboutMe"}),Object(i.jsx)("br",{}),Object(i.jsx)("label",{children:"fullName: props.profile.fullName"})]})]})},_=a(15),f=a.n(_),P=a(16),N=a.n(P);var k=function(e){return Object(i.jsxs)("div",{className:N.a.item,children:[Object(i.jsx)("img",{className:N.a.avaPost}),e.message,Object(i.jsx)("div",{children:Object(i.jsxs)("span",{children:["likes: ",e.likesCount]})})]})};var C=function(e){var s=e.posts.map((function(e){return Object(i.jsx)(k,{message:e.message,likesCount:e.likesCount})}));return Object(i.jsxs)("div",{className:f.a.postsBlock,children:[Object(i.jsx)("h3",{children:"My posts"}),Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{children:Object(i.jsx)("textarea",{value:e.message,onChange:function(s){e.onPostChange(s.currentTarget.value)}})}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{onClick:function(){e.addPost(e.message)},children:"Add post"})})]}),Object(i.jsx)("div",{className:f.a.posts,children:s})]})};var w=function(e){return Object(i.jsxs)("div",{children:[Object(i.jsx)(h,{}),Object(i.jsx)(C,{posts:e.profilePage.posts,addPost:e.addPost,message:e.message,onPostChange:e.onPostChange})]})},B=a(6),W=a.n(B),D=function(e){return Object(i.jsx)("div",{className:W.a.dialog,children:Object(i.jsx)(x.b,{to:"/dialogs/"+e.id,activeClassName:W.a.active,children:e.name})})},M=function(e){return Object(i.jsx)("div",{className:W.a.message,children:e.message})};var F=function(e){var s=e.dialogsPage.dialogs.map((function(e){return Object(i.jsx)(D,{name:e.name,id:e.id})})),a=e.dialogsPage.messages.map((function(e){return Object(i.jsx)(M,{message:e.message,id:e.id})}));return Object(i.jsxs)("div",{className:W.a.dialogs,children:[Object(i.jsx)("div",{className:W.a.dialogsItems,children:s}),Object(i.jsxs)("div",{className:W.a.messages,children:[Object(i.jsx)("div",{children:a}),Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{children:Object(i.jsx)("textarea",{placeholder:"enter your message"})}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{children:"Send"})})]})]})]})},I=a(2);var y=function(){return Object(i.jsx)(x.a,{children:Object(i.jsxs)("div",{className:d.a.appWrapper,children:[Object(i.jsx)(m,{}),Object(i.jsx)(u,{}),Object(i.jsxs)("div",{className:d.a.appWrapperContent,children:[Object(i.jsx)(I.a,{path:"/profile",render:function(){return Object(i.jsx)(w,{profilePage:Y.profilePage,addPost:J,message:Y.profilePage.messageForNewPost,onPostChange:T})}}),Object(i.jsx)(I.a,{path:"/dialogs",render:function(){return Object(i.jsx)(F,{dialogsPage:Y.dialogsPage})}})]})]})})},H=function(e){n.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(y,{})}),document.getElementById("root"))},S={profilePage:{messageForNewPost:"",posts:[{id:1,message:"Hi, how are you?",likesCount:45},{id:2,message:"Programming.....",likesCount:18}]},dialogsPage:{dialogs:[{id:1,name:"\u0414\u0438\u043c\u044b\u0447"},{id:2,name:"\u0410\u043d\u0434\u0440\u0435\u0439"},{id:3,name:"\u0421\u0432\u0435\u0442\u0430"},{id:4,name:"\u0421\u0430\u0448\u0430"},{id:5,name:"\u0412\u0430\u043b\u0435\u0440\u0430"},{id:6,name:"\u041c\u0430\u0448\u0430"}],messages:[{id:1,message:"Hi"},{id:2,message:"Hello"},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"}]}},J=function(){var e={id:(new Date).getTime(),message:S.profilePage.messageForNewPost,likesCount:0};S.profilePage.posts.push(e),S.profilePage.messageForNewPost="",H()},T=function(e){S.profilePage.messageForNewPost=e,H()},Y=S;H(),t()},5:function(e,s,a){e.exports={nav:"Navbar_nav__3-fqW",item:"Navbar_item__32DLS",active:"Navbar_active__fB4gH"}},6:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__Vo8vD",dialogsItems:"Dialogs_dialogsItems__gwdRO",dialog:"Dialogs_dialog__3E4tW",active:"Dialogs_active__2tRUx",messages:"Dialogs_messages__1vjJi",message:"Dialogs_message__3Mc-D"}}},[[33,1,2]]]);
//# sourceMappingURL=main.ead6acbd.chunk.js.map
(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{115:function(e,t,n){},116:function(e,t,n){"use strict";n.r(t);var a=n(5),r=n(0),c=n(9),i=n.n(c),s=n(18),o=n(23),l=n(66),u=n(22),d=n(157),p=n(160),j=n(156),b=n(14),f=n.n(b),h=n(24),m=n(35),x=n.n(m),O="https://chase-social.herokuapp.com/posts",g=function(e){return x.a.patch("".concat(O,"/").concat(e,"/likePost"))},v=function(e,t){return x.a.patch("".concat(O,"/").concat(e),t)},y=function(e){return x.a.delete("".concat(O,"/").concat(e))},C=function(e){return function(){var t=Object(h.a)(f.a.mark((function t(n){var a,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c=e,x.a.post(O,c);case 3:a=t.sent,r=a.data,n({type:"CREATE",payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}var c}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},w=function(e,t){return function(){var n=Object(h.a)(f.a.mark((function n(a){var r,c;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,v(e,t);case 3:r=n.sent,c=r.data,a({type:"UPDATE",payload:c}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()},k=n(155),E=n(149),I=n(151),N=n(152),T=n(159),S=n(153),A=n(154),D=n(72),L=n.n(D),_=n(73),z=n.n(_),W=n(71),F=n.n(W),B=n(69),M=n.n(B),R=n(146),H=Object(R.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),P=function(e){var t=e.post,n=e.setCurrentId,r=Object(s.b)(),c=H();return Object(a.jsxs)(E.a,{className:c.card,children:[Object(a.jsx)(I.a,{className:c.media,image:t.selectedFile||"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",title:t.title}),Object(a.jsxs)("div",{className:c.overlay,children:[Object(a.jsx)(N.a,{variant:"h6",children:t.creator}),Object(a.jsx)(N.a,{variant:"body2",children:M()(t.createdAt).fromNow()})]}),Object(a.jsx)("div",{className:c.overlay2,children:Object(a.jsx)(T.a,{style:{color:"white"},size:"small",onClick:function(){return n(t._id)},children:Object(a.jsx)(F.a,{fontSize:"default"})})}),Object(a.jsx)("div",{className:c.details,children:Object(a.jsx)(N.a,{variant:"body2",color:"textSecondary",component:"h2",children:t.tags.map((function(e){return"#".concat(e," ")}))})}),Object(a.jsx)(N.a,{className:c.title,gutterBottom:!0,variant:"h5",component:"h2",children:t.title}),Object(a.jsx)(S.a,{children:Object(a.jsx)(N.a,{variant:"body2",color:"textSecondary",component:"p",children:t.message})}),Object(a.jsxs)(A.a,{className:c.cardActions,children:[Object(a.jsxs)(T.a,{size:"small",color:"primary",onClick:function(){return r((e=t._id,function(){var t=Object(h.a)(f.a.mark((function t(n){var a,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g(e);case 3:a=t.sent,r=a.data,n({type:"LIKE",payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:[Object(a.jsx)(L.a,{fontSize:"small"})," Like ",t.likeCount," "]}),Object(a.jsxs)(T.a,{size:"small",color:"primary",onClick:function(){return r((e=t._id,function(){var t=Object(h.a)(f.a.mark((function t(n){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y(e);case 3:n({type:"DELETE",payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:[Object(a.jsx)(z.a,{fontSize:"small"})," Delete"]})]})]})},J=Object(R.a)((function(e){return{mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}})),K=function(e){var t=e.setCurrentId,n=Object(s.c)((function(e){return e.posts})),r=J();return n.length?Object(a.jsx)(j.a,{className:r.container,container:!0,alignItems:"stretch",spacing:3,children:n.map((function(e){return Object(a.jsx)(j.a,{item:!0,xs:12,sm:6,md:6,children:Object(a.jsx)(P,{post:e,setCurrentId:t})},e._id)}))}):Object(a.jsx)(k.a,{})},U=n(19),V=n(118),q=n(158),G=n(74),Q=n.n(G),X=Object(R.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),Y=function(e){var t=e.currentId,n=e.setCurrentId,c=Object(r.useState)({creator:"",title:"",message:"",tags:"",selectedFile:""}),i=Object(u.a)(c,2),o=i[0],l=i[1],d=Object(s.c)((function(e){return t?e.posts.find((function(e){return e._id===t})):null})),p=Object(s.b)(),j=X();Object(r.useEffect)((function(){d&&l(d)}),[d]);var b=function(){n(0),l({creator:"",title:"",message:"",tags:"",selectedFile:""})},m=function(){var e=Object(h.a)(f.a.mark((function e(n){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),0===t?(p(C(o)),b()):(p(w(t,o)),b());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)(V.a,{className:j.paper,children:Object(a.jsxs)("form",{autoComplete:"off",noValidate:!0,className:"".concat(j.root," ").concat(j.form),onSubmit:m,children:[Object(a.jsx)(N.a,{variant:"h6",children:t?'Editing "'.concat(d.title,'"'):"Creating a Memory"}),Object(a.jsx)(q.a,{name:"creator",variant:"outlined",label:"Creator",fullWidth:!0,value:o.creator,onChange:function(e){return l(Object(U.a)(Object(U.a)({},o),{},{creator:e.target.value}))}}),Object(a.jsx)(q.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:o.title,onChange:function(e){return l(Object(U.a)(Object(U.a)({},o),{},{title:e.target.value}))}}),Object(a.jsx)(q.a,{name:"message",variant:"outlined",label:"Message",fullWidth:!0,multiline:!0,rows:4,value:o.message,onChange:function(e){return l(Object(U.a)(Object(U.a)({},o),{},{message:e.target.value}))}}),Object(a.jsx)(q.a,{name:"tags",variant:"outlined",label:"Tags (coma separated)",fullWidth:!0,value:o.tags,onChange:function(e){return l(Object(U.a)(Object(U.a)({},o),{},{tags:e.target.value.split(",")}))}}),Object(a.jsx)("div",{className:j.fileInput,children:Object(a.jsx)(Q.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return l(Object(U.a)(Object(U.a)({},o),{},{selectedFile:t}))}})}),Object(a.jsx)(T.a,{className:j.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0,children:"Submit"}),Object(a.jsx)(T.a,{variant:"contained",color:"secondary",size:"small",onClick:b,fullWidth:!0,children:"Clear"})]})})},Z=(n.p,Object(R.a)((function(){return{appBar:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},heading:{color:"rgba(0,183,255, 1)"},image:{marginLeft:"15px"}}})));function $(){var e=Object(r.useState)(0),t=Object(u.a)(e,2),n=t[0],c=t[1],i=(Z(),Object(s.b)());return Object(r.useEffect)((function(){i(function(){var e=Object(h.a)(f.a.mark((function e(t){var n,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get(O);case 3:n=e.sent,a=n.data,t({type:"FETCH_ALL",payload:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[n,i]),Object(a.jsx)(d.a,{maxWidth:"lg",children:Object(a.jsx)(p.a,{in:!0,children:Object(a.jsx)(d.a,{children:Object(a.jsxs)(j.a,{container:!0,justify:"space-between",alignItems:"stretch",spacing:3,children:[Object(a.jsx)(j.a,{item:!0,xs:12,sm:7,children:Object(a.jsx)(K,{setCurrentId:c})}),Object(a.jsx)(j.a,{item:!0,xs:12,sm:4,children:Object(a.jsx)(Y,{currentId:n,setCurrentId:c})})]})})})})}n(115);var ee=n(21),te=Object(o.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ALL":return t.payload;case"CREATE":return[].concat(Object(ee.a)(e),[t.payload]);case"UPDATE":case"LIKE":return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case"DELETE":return e.filter((function(e){return e._id!==t.payload}));default:return e}}}),ne=Object(o.e)(te,Object(o.d)(Object(o.a)(l.a)));i.a.render(Object(a.jsx)(s.a,{store:ne,children:Object(a.jsx)($,{})}),document.getElementById("root"))}},[[116,1,2]]]);
//# sourceMappingURL=main.64b73914.chunk.js.map
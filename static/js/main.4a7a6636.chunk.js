(this.webpackJsonplivescore=this.webpackJsonplivescore||[]).push([[0],{53:function(e,t,c){},54:function(e,t,c){},61:function(e,t,c){"use strict";c.r(t);var n=c(3),i=c(0),a=c.n(i),r=c(8),s=c.n(r),o=(c(53),c(24)),l=(c.p,c(54),c(41)),j=c(85),d=c(78),h=c(81),b=c(82),u=c(38),O=c.n(u),x=function(){return Object(n.jsx)(d.a,{children:Object(n.jsxs)(h.a,{children:[Object(n.jsx)(b.a,{color:"inherit",children:Object(n.jsx)(O.a,{})}),Object(n.jsx)(l.a,{variant:"h6",children:"Live Score"})]})})},f=c(83),m=c(84),p=c(86),g=c(87),y=c(92),v=c(88),S=c(89),F=c(90),T=c(91),k=function(e){var t=e.match,c=Object(i.useState)({}),a=Object(o.a)(c,2),r=a[0],s=a[1],d=Object(i.useState)(!1),h=Object(o.a)(d,2),b=h[0],u=h[1],O=function(e){(function(e){var t="http://cricapi.com/api/cricketScore?unique_id=".concat(e,"&apikey=").concat("Y4RIa6rPIKaKsLFMOcdRy1RlVeZ2");return fetch(t).then((function(e){return e.json()})).catch((function(e){return console.log("Error ",e)}))})(e).then((function(e){console.log("match data",e),s(e),x()})).catch((function(e){return console.log("Error ",e)}))},x=function(){u(!0)},k=function(){u(!1)};return Object(n.jsxs)(i.Fragment,{children:[Object(n.jsxs)(f.a,{style:{marginTop:25},children:[Object(n.jsx)(m.a,{children:Object(n.jsxs)(j.a,{container:!0,justify:"center",alignItems:"center",spacing:4,children:[Object(n.jsx)(j.a,{item:!0,children:Object(n.jsx)(l.a,{variant:"h5",children:t["team-1"]})}),Object(n.jsx)(j.a,{item:!0,children:Object(n.jsx)("img",{style:{width:85},src:"img/vs.png",alt:""})}),Object(n.jsx)(j.a,{item:!0,children:Object(n.jsx)(l.a,{variant:"h5",children:t["team-2"]})})]})}),Object(n.jsx)(p.a,{children:Object(n.jsxs)(j.a,{container:!0,justify:"center",children:[Object(n.jsx)(g.a,{onClick:function(){O(t.unique_id)},variant:"contained",color:"primary",children:"Show Details"}),Object(n.jsxs)(g.a,{style:{marginLeft:5},variant:"contained",color:"primary",children:["Start Time ",new Date(t.dateTimeGMT).toLocaleString()]})]})})]}),Object(n.jsxs)(y.a,{open:b,onClose:k,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(n.jsx)(v.a,{id:"alert-dialog-title",children:"Match Detail..."}),Object(n.jsx)(S.a,{children:Object(n.jsxs)(F.a,{id:"alert-dialog-description",children:[Object(n.jsx)(l.a,{children:r.stat}),Object(n.jsxs)(l.a,{children:["Match:",Object(n.jsxs)("span",{style:{fontStyle:"italic",fontWeight:"bold"},children:[r.matchStarted?"Started":"Still not started","y"]})]}),Object(n.jsxs)(l.a,{children:["Score:",Object(n.jsxs)("span",{style:{fontStyle:"italic",fontWeight:"bold"},children:[" ",r.score]})]})]})}),Object(n.jsx)(T.a,{children:Object(n.jsx)(g.a,{onClick:k,color:"primary",autoFocus:!0,children:"Close"})})]})]})};var C=function(){var e=Object(i.useState)([]),t=Object(o.a)(e,2),c=t[0],a=t[1];return Object(i.useEffect)((function(){fetch("https://cricapi.com/api/matches?apikey=Y4RIa6rPIKaKsLFMOcdRy1RlVeZ2").then((function(e){return e.json()})).catch((function(e){return console.log("Error ",e)})).then((function(e){a(e.matches),console.log(e.matches)})).catch((function(e){return alert("could not load data")}))}),[]),Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(x,{}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)(l.a,{variant:"h4",style:{marginTop:50},children:"Welcome to my live score App"}),Object(n.jsxs)(j.a,{container:!0,children:[Object(n.jsx)(j.a,{sm:"2"}),Object(n.jsx)(j.a,{sm:"8",children:c.map((function(e){return Object(n.jsx)(i.Fragment,{children:"Twenty20"==e.type?Object(n.jsx)(k,{match:e}):""},e.unique_id)}))})]})]})},I=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,94)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),i(e),a(e),r(e)}))};s.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(C,{})}),document.getElementById("root")),I()}},[[61,1,2]]]);
//# sourceMappingURL=main.4a7a6636.chunk.js.map
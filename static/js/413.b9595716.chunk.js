"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[413],{676:function(t,e,r){r.d(e,{O:function(){return c}});var n=r(689),a=r(87),u=r(184),c=function(t){var e=t.movies,r=(0,n.TH)();return(0,u.jsx)("ul",{children:e.map((function(t){var e=t.original_title,n=t.id;return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{to:"/movies/".concat(n),state:{from:r},children:e})},n)}))})}},413:function(t,e,r){r.r(e),r.d(e,{default:function(){return l}});var n=r(861),a=r(439),u=r(757),c=r.n(u),i=r(791),s=r(390),o=r(596),p=r(691),f=r(676),h="home_title__cojxH",d=r(184),l=function(){var t=(0,i.useState)([]),e=(0,a.Z)(t,2),r=e[0],u=e[1],l=(0,i.useState)(!0),v=(0,a.Z)(l,2),m=v[0],w=v[1],x=(0,i.useState)(""),g=(0,a.Z)(x,2),k=g[0],y=g[1];return(0,i.useEffect)((function(){var t=function(){var t=(0,n.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return y(""),t.prev=1,t.next=4,(0,s.e2)();case 4:e=t.sent,u(e.results),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),y("There is something wrong in your action");case 11:return t.prev=11,w(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,i.useEffect)((function(){k&&o.Am.error(k)}),[k]),(0,d.jsxs)("section",{children:[(0,d.jsx)("h1",{className:h,children:"Tranding today"}),r.length>0&&(0,d.jsx)(f.O,{movies:r}),m&&(0,d.jsx)(p.Y8,{ariaLabel:"loading-indicator",height:100,width:100,strokeWidth:5,strokeWidthSecondary:1,color:"blue",secondaryColor:"white"})]})}},390:function(t,e,r){r.d(e,{IQ:function(){return d},Jh:function(){return v},Ph:function(){return o},YJ:function(){return f},e2:function(){return i}});var n=r(861),a=r(757),u=r.n(a),c=r(243);function i(){return s.apply(this,arguments)}function s(){return(s=(0,n.Z)(u().mark((function t(){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/trending/movie/week");case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function o(t){return p.apply(this,arguments)}function p(){return p=(0,n.Z)(u().mark((function t(e){var r,n,a,i,s=arguments;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=s.length>1&&void 0!==s[1]?s[1]:1,n={query:e,language:"en-US",page:r},t.next=4,c.Z.get("/search/movie",{params:n});case 4:return a=t.sent,i=a.data,t.abrupt("return",i);case 7:case"end":return t.stop()}}),t)}))),p.apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(e));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(e,"/credits"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n.cast);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return m.apply(this,arguments)}function m(){return(m=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(e,"/reviews"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.params={api_key:"259df17d3f26a67b233d16c7dad06e96"}}}]);
//# sourceMappingURL=413.b9595716.chunk.js.map
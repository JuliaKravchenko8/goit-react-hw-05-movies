"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[126],{4126:function(e,n,r){r.r(n),r.d(n,{default:function(){return P}});var t,a,o,c=r(5861),s=r(3433),i=r(9439),u=r(7757),p=r.n(u),l=r(2791),f=r(1087),h=r(7689),g=r(8407),d={movieItem:"home_movieItem__MmdJy",loading:"home_loading__ko1Ql"},v=r(168),m=r(6444),x=(0,m.ZP)(f.rU)(t||(t=(0,v.Z)(["\n  color: blue;\n  text-decoration: none;\n  &:hover {\n    color: lightblue;\n  }\n"]))),b=m.ZP.ul(a||(a=(0,v.Z)(["\n  list-style-type: none;\n  margin-bottom: 10px;\n  font-size: 20px;\n  margin-left: 100px;\n"]))),w=m.ZP.li(o||(o=(0,v.Z)(["\n  position: relative;\n  display: flex;\n  padding: 5px 10px;\n"]))),y=r(184),Z=function(e){var n=e.movies,r=e.location;return(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(b,{children:n.map((function(e){var n=e.title,t=e.id;return(0,y.jsx)(w,{children:(0,y.jsx)(x,{to:"/movies/".concat(t),state:{from:r},children:n})},t)}))})})},k=r(8081),j=r(8402),P=function(){var e=(0,l.useState)(!0),n=(0,i.Z)(e,2),r=n[0],t=n[1],a=(0,l.useState)([]),o=(0,i.Z)(a,2),u=o[0],v=o[1],m=(0,f.lr)({page:1}),x=(0,i.Z)(m,2),b=x[0],w=x[1],P=(0,h.TH)(),_=(0,l.useMemo)((function(){return Object.fromEntries((0,s.Z)(b))}),[b]),C=Number(_.page||1),S=(0,l.useState)(0),F=(0,i.Z)(S,2),L=F[0],M=F[1];return(0,l.useEffect)((function(){var e=function(){var e=(0,c.Z)(p().mark((function e(){var n;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(!0),e.next=4,(0,g.Df)(C);case 4:n=e.sent,v(n.results),M(n.total_pages),t(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),alert(e.t0.message);case 13:return e.prev=13,t(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}),[C]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("h2",{className:d.title,children:"Trending movies:"}),r?(0,y.jsx)("div",{className:d.loading,children:(0,y.jsx)(j.Yt,{visible:!0,height:"80",width:"80",ariaLabel:"MagnifyingGlass-loading",wrapperStyle:{margin:"0 auto"},wrapperClass:"MagnifyingGlass-wrapper",glassColor:"#c0efff",color:"#e15b64"})}):(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(Z,{movies:u,location:P})}),(0,y.jsx)(k.Z,{totalPages:L,setSearchParams:w,params:_,currentPage:Number((null===_||void 0===_?void 0:_.page)-1)||0})]})}},8081:function(e,n,r){r.d(n,{Z:function(){return f}});var t,a=r(8683),o=r(168),c=r(6444),s=r(6048),i=r.n(s),u=(0,c.ZP)(i())(t||(t=(0,o.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 15px;\n  margin: 10px 0;\n  font-size: 18px;\n  .selected {\n    color: white;\n    background-color: orange;\n    &:hover {\n      background-color: orangered;\n    }\n  }\n\n  a {\n    display: block;\n    padding: 5px 10px;\n    cursor: pointer;\n  }\n\n  li {\n    list-style-type: none;\n    border: 1px solid orange;\n    border-radius: 7px;\n    &:hover {\n      background-color: #fff555;\n      color: #000;\n    }\n  }\n"]))),p=r(3061),l=r(184);var f=function(e){var n=e.totalPages,r=e.setSearchParams,t=e.params,o=e.currentPage;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(u,{breakLabel:"...",previousLabel:(0,l.jsx)(p.u1R,{}),nextLabel:(0,l.jsx)(p.hjJ,{}),onPageChange:function(e){r((0,a.Z)((0,a.Z)({},t),{},{page:e.selected+1}))},pageRangeDisplayed:4,marginPagesDisplayed:2,pageCount:n,renderOnZeroPageCount:null,forcePage:o})})}},8407:function(e,n,r){r.d(n,{Df:function(){return s},M1:function(){return l},TP:function(){return u},qF:function(){return d},tx:function(){return h}});var t=r(5861),a=r(7757),o=r.n(a),c=r(1912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"13e949714959e6b204127682b184b526",language:"en-US"}});function s(e){return i.apply(this,arguments)}function i(){return(i=(0,t.Z)(o().mark((function e(n){var r,t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/trending/movie/week",e.prev=1,e.next=4,c.get("/trending/movie/week",{params:{page:n}});case 4:return r=e.sent,t=r.data,e.abrupt("return",t);case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function u(e){return p.apply(this,arguments)}function p(){return(p=(0,t.Z)(o().mark((function e(n){var r,t,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/movie/".concat(n),e.prev=1,e.next=4,c.get(r);case 4:return t=e.sent,a=t.data,e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function l(e){return f.apply(this,arguments)}function f(){return(f=(0,t.Z)(o().mark((function e(n){var r,t,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/movie/".concat(n,"/credits"),e.prev=1,e.next=4,c.get(r);case 4:return t=e.sent,a=t.data,e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function h(e){return g.apply(this,arguments)}function g(){return(g=(0,t.Z)(o().mark((function e(n){var r,t,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/movie/".concat(n,"/reviews"),e.prev=1,e.next=4,c.get(r);case 4:return t=e.sent,a=t.data,e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function d(e,n){return v.apply(this,arguments)}function v(){return(v=(0,t.Z)(o().mark((function e(n,r){var t,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="/search/movie?query=".concat(n),e.prev=1,e.next=4,c.get(t,{params:{page:r}});case 4:return a=e.sent,e.abrupt("return",a);case 8:throw e.prev=8,e.t0=e.catch(1),e.t0;case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=126.5fe44976.chunk.js.map
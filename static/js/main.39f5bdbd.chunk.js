(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},48:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(18),r=n.n(i),o=(n(28),n(29),n(4)),s=n.n(o),l=n(6),d=n(5),u=n(19),h=n.n(u).a.create({baseURL:"https://api.themoviedb.org/3"}),b=(n(48),n(20)),f=n(23),v=n.n(f),j=n(0);var p=function(e){var t=e.title,n=e.fetchUrl,a=e.isLargeRow,i=Object(c.useState)([]),r=Object(d.a)(i,2),o=r[0],u=r[1],f=Object(c.useState)(""),p=Object(d.a)(f,2),m=p[0],g=p[1];return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get(n);case 2:return t=e.sent,u(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("h2",{children:t}),Object(j.jsx)("div",{className:"row_posters",children:o.map((function(e){return Object(j.jsx)("img",{onClick:function(){return function(e){m?g(""):v()((null===e||void 0===e?void 0:e.name)||"").then((function(e){var t=new URLSearchParams(new URL(e).search);g(t.get("v"))})).catch((function(e){return console.log(e)}))}(e)},className:"row_poster ".concat(a&&"row_posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original").concat(a?e.poster_path:e.backdrop_path),alt:e.name},e.id)}))}),m&&Object(j.jsx)(b.a,{videoId:m,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}})]})},m="46eb4d1ebac589d0c687033d20fbc5ca",g={fetchTrending:"/trending/all/week?api_key=".concat(m,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(m,"&with_network=123"),fetchTopRated:"/movie/top_rated?api_key=".concat(m,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(m,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(m,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(m,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(m,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(m,"&with_genres=99")};n(71);var O=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get(g.fetchNetflixOriginals);case 2:return t=e.sent,a(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(j.jsxs)("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url(\n            "https://image.tmdb.org/t/p/original/'.concat(null===n||void 0===n?void 0:n.backdrop_path,'"\n            )'),backgroundPosition:"center center"},children:[Object(j.jsxs)("div",{className:"banner_contents",children:[Object(j.jsx)("h1",{className:"banner_title",children:(null===n||void 0===n?void 0:n.title)||(null===n||void 0===n?void 0:n.name)||(null===n||void 0===n?void 0:n.original_name)}),Object(j.jsxs)("div",{className:"banner_buttons",children:[Object(j.jsx)("button",{className:"banner_button",children:"Play"}),Object(j.jsx)("button",{className:"banner_button",children:"My List"})]}),Object(j.jsx)("h1",{className:"banner_description",children:null===n||void 0===n?void 0:n.overview})]}),Object(j.jsx)("div",{className:"banner--fadeBottom"})]})};n(72);var x=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?a(!0):a(!1)})),function(){window.removeEventListener("scroll")}}),[]),Object(j.jsxs)("div",{className:"nav ".concat(n&&"nav_black"),children:[Object(j.jsx)("img",{className:"nav_logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png",alt:"Netflix Logo"}),Object(j.jsx)("img",{className:"nav_avatar",src:"https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png",alt:"Netflix Logo"})]})};var _=function(){return Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)(x,{}),Object(j.jsx)(O,{}),Object(j.jsx)(p,{title:"NETFLIX ORIGINALS",fetchUrl:g.fetchNetflixOriginals,isLargeRow:!0}),Object(j.jsx)(p,{title:"Trending Now",fetchUrl:g.fetchTrending}),Object(j.jsx)(p,{title:"Top Rated",fetchUrl:g.fetchTopRated}),Object(j.jsx)(p,{title:"Action Movies",fetchUrl:g.fetchActionMovies}),Object(j.jsx)(p,{title:"Comedy Movies",fetchUrl:g.fetchComedyMovies}),Object(j.jsx)(p,{title:"Horror Movies",fetchUrl:g.fetchHorrorMovies}),Object(j.jsx)(p,{title:"Romance Movies",fetchUrl:g.fetchRomanceMovies}),Object(j.jsx)(p,{title:"Documentaries",fetchUrl:g.fetchDocumentaries})]})};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(_,{})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.39f5bdbd.chunk.js.map
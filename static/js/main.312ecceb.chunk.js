(this.webpackJsonpstarships=this.webpackJsonpstarships||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports={item:"CatalogItem_item__3nAVJ",title:"CatalogItem_title__rBGlT",name:"CatalogItem_name__2NeHN",manufacturer:"CatalogItem_manufacturer__35EX0",model:"CatalogItem_model__3HlwH",cost:"CatalogItem_cost__N_fqV"}},,,,,,,,,function(e,t,a){e.exports={catalog:"Catalog_catalog__2GpC_",main:"Catalog_main__1Iq83"}},,function(e,t,a){e.exports={header:"Header_header__1uccA",title:"Header_title__3MWEh"}},,,,,,,,function(e,t,a){e.exports={compare:"Button_compare__2-xYs"}},function(e,t,a){e.exports={ldsRing:"Loader_ldsRing__371ER"}},function(e,t,a){e.exports={item:"CompareItem_item__ftzF4",fields:"CompareItem_fields__2vqey"}},function(e,t,a){e.exports={titles:"Fields_titles__gWEDG"}},function(e,t,a){e.exports={cell:"Cell_cell__g5hIQ"}},function(e,t,a){e.exports={items:"Compare_items__1wZii"}},function(e,t,a){e.exports={App:"App_App__3rjn-"}},function(e,t,a){e.exports=a(48)},,,,,,,,,function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),o=a.n(c),s=a(9),i=a(12),l=a(4),u=a(28),m=(a(45),a(7)),p=a(19),f=a.n(p),d=a(14),h=a.n(d),_=a(20),E=a(10),v=a.n(E),b=a(29),g=a.n(b),O=function(e){var t=e.onClick,a=e.text;return r.a.createElement("button",{onClick:t,className:g.a.compare},a)},j=function(e){if(isNaN(+e))return e;for(var t="",a=0,n=e.length-1;n>=0;n--)a++,t+=e[n],3===a&&(t+=" ",a=0);return"".concat(t.split("").reverse().join("")," $")},y=function(e){var t=e.starship,a=Object(l.c)(),n=t.isCompared?"Remove from compare":"Add to compare";return r.a.createElement("div",{className:v.a.item},r.a.createElement("div",{className:v.a.title,style:{background:t.color}},r.a.createElement("span",{className:v.a.name},t.name)),r.a.createElement("div",{className:v.a.manufacturer},t.manufacturer),r.a.createElement("div",{className:v.a.model},t.model),r.a.createElement("div",{className:v.a.cost},j(t.cost_in_credits)),r.a.createElement(O,{onClick:function(){return a({type:"TOGGLE_COMPARE",payload:t.id})},text:n}))},x=a(30),C=a.n(x),w=function(){return r.a.createElement("div",{className:C.a.ldsRing},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},N=function(){var e=Object(l.d)((function(e){return e.starships})),t=Object(l.d)((function(e){return e.error})),a=null===e||void 0===e?void 0:e.map((function(e){return r.a.createElement(y,{starship:Object(m.a)({},e),key:e.id})}));return r.a.createElement("main",{className:f.a.main},(null===e||void 0===e?void 0:e.length)?r.a.createElement("div",{className:f.a.catalog},a):t?r.a.createElement("h1",null,"Something went wrong :("):r.a.createElement(w,null))},k=a(24),A=a(31),R=a.n(A),S=a(32),I=a.n(S),T=a(33),G=a.n(T),P=function(e){return r.a.createElement("div",{className:"cell ".concat(G.a.cell),"data-row":e.row,style:e.style},e.content)},H=function(e){return(t=e.replace(/_/g," ")).charAt(0).toUpperCase()+t.slice(1);var t},M=function(e){var t=e.starship,a=e.fieldsTitles,n=Object.keys(t).map((function(e,n){var c=t[e];return Array.isArray(c)&&(c=c.length?c.join(", "):"-"),r.a.createElement("div",{className:"name"===e?"compare-header":"",key:n},r.a.createElement(P,{content:a?H(e):"",style:{fontSize:"14px",color:"rgba(0, 0, 0, 0.5)",position:"name"===e?"sticky":"static"}}),r.a.createElement(P,{row:n,content:c||"-"}))}));return r.a.createElement("div",{className:I.a.fields},n)},q=function(e){var t=Object(m.a)({},e.starship),a=["created","edited","url","id","color","isCompared"];for(var n in t)t.hasOwnProperty(n)&&a.includes(n)&&delete t[n];return r.a.createElement("div",{className:R.a.item},r.a.createElement(M,{starship:t,fieldsTitles:e.fieldsTitles}))},B=a(34),W=a.n(B),J=function(){var e=document.querySelectorAll(".cell"),t={};for(var a in e.forEach((function(e){var a=e.dataset.row;t[a]=t[a]?[].concat(Object(k.a)(t[a]),[e.offsetHeight]):[]})),t)if(t.hasOwnProperty(a)){var n=t[a];t[a]=Math.max.apply(Math,Object(k.a)(n))+"px"}e.forEach((function(e){e.style.height=t[e.dataset.row]}))},L=function(){var e=Object(l.d)((function(e){return e.starships})).filter((function(e){return e.isCompared})),t=e.length>1?e.map((function(e,t){return r.a.createElement(q,{starship:e,fieldsTitles:0===t,key:t})})):r.a.createElement("h1",null,"Choose at least 2 starsheeps to compare");return Object(n.useEffect)(J),r.a.createElement("div",{className:W.a.items},t)},z=a(35),F=a.n(z),V=a(2),$=a(21),D=a.n($),Q=Object(V.e)((function(e){return r.a.createElement("header",{className:D.a.header},r.a.createElement(s.b,{className:D.a.title,to:"/"},r.a.createElement("h1",null,"Starships")),"/compare/"===e.location.pathname?r.a.createElement(s.b,{to:"/"},r.a.createElement(O,{text:"Catalog"})):r.a.createElement(s.b,{to:"/compare/"},r.a.createElement(O,{text:"Compare"})))}));var U=Object(l.b)((function(e){return e}))((function(){var e=Object(l.c)();return null===Object(l.d)((function(e){return e.starships}))&&e(function(){var e=Object(_.a)(h.a.mark((function e(t){var a,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"GET_STARSHIPS",payload:[]}),e.next=3,fetch("https://swapi.dev/api/starships/").then((function(e){return e.json()})).catch((function(){t({type:"ERROR"})}));case 3:if(!(a=e.sent)){e.next=9;break}return e.next=7,Promise.all(a.results.map(function(){var e=Object(_.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.films.map((function(e){return fetch(e.replace(/http:/,"https:")).then((function(e){return e.json()})).then((function(e){return e.title}))})));case 2:return t.films=e.sent,e.next=5,Promise.all(t.pilots.map((function(e){return fetch(e.replace(/http:/,"https:")).then((function(e){return e.json()})).then((function(e){return e.name}))})));case 5:return t.pilots=e.sent,e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 7:n=e.sent,t({type:"GET_STARSHIPS",payload:n});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),r.a.createElement("div",{className:F.a.App},r.a.createElement(Q,null),r.a.createElement(V.a,{path:"/",exact:!0,component:N}),r.a.createElement(V.a,{path:"/compare",exact:!0,component:L}))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var X={starships:null,error:!1},Y=function(){return"#"+Math.floor(16777215*Math.random()).toString(16)},Z=Object(i.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_STARSHIPS":var a=t.payload.map((function(e,t){return Object(m.a)(Object(m.a)({},e),{},{id:t,color:Y(),isCompared:!1})}));return Object(m.a)(Object(m.a)({},e),{},{starships:a});case"TOGGLE_COMPARE":var n=e.starships.map((function(e){return e.id===t.payload&&(e.isCompared=!e.isCompared),e}));return Object(m.a)(Object(m.a)({},e),{},{starships:n});case"ERROR":return Object(m.a)(Object(m.a)({},e),{},{error:!0});default:return e}}),Object(i.c)(Object(i.a)(u.a)));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,{store:Z},r.a.createElement(s.a,{basename:"/starships"},r.a.createElement(U,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[36,1,2]]]);
//# sourceMappingURL=main.312ecceb.chunk.js.map
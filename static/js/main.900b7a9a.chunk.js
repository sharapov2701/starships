(this.webpackJsonpstarships=this.webpackJsonpstarships||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports={item:"CatalogItem_item__1xaNj",title:"CatalogItem_title__333ZR",name:"CatalogItem_name__1rFhi",manufacturer:"CatalogItem_manufacturer__13-U-",model:"CatalogItem_model__mxzBU",cost:"CatalogItem_cost__3EAeA"}},,,,,,,,function(e,t,a){e.exports={catalog:"Catalog_catalog__ZpGEr",main:"Catalog_main__3lhip"}},function(e,t,a){e.exports={cell:"Cell_cell__3Z03p",title:"Cell_title__151oA"}},function(e,t,a){e.exports={header:"Header_header__aImUz",title:"Header_title__2fayc"}},,,,,,,,function(e,t,a){e.exports={compare:"Button_compare__2Tt06"}},function(e,t,a){e.exports={ldsRing:"Loader_ldsRing__3w340"}},function(e,t,a){e.exports={item:"CompareItem_item__Lo8r-",fields:"CompareItem_fields__3idiP"}},function(e,t,a){e.exports={titles:"Fields_titles__3BTxA"}},function(e,t,a){e.exports={items:"Compare_items__2pszZ"}},function(e,t,a){e.exports={App:"App_App__1FeME"}},function(e,t,a){e.exports=a(44)},,,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),o=a.n(c),l=a(26),i=a(5),s=a(9),m=a(12),u=a(3),p={starships:[],hasErrored:!1,isLoading:!0},d=a(2),f=a(28),h=a.n(f),_=function(e){var t=e.onClick,a=e.text;return r.a.createElement("button",{onClick:t,className:h.a.compare},a)},E=a(10),v=a.n(E),O=function(e){if(isNaN(+e))return e;for(var t="",a=0,n=e.length-1;n>=0;n--)a++,t+=e[n],3===a&&(t+=" ",a=0);return"".concat(t.split("").reverse().join("")," $")},b=function(e){var t=e.starship,a=Object(i.c)(),n=t.isCompared?"Remove from compare":"Add to compare";return r.a.createElement("div",{className:v.a.item},r.a.createElement("div",{className:v.a.title,style:{background:t.color}},r.a.createElement("span",{className:v.a.name},t.name)),r.a.createElement("div",{className:v.a.manufacturer},t.manufacturer),r.a.createElement("div",{className:v.a.model},t.model),r.a.createElement("div",{className:v.a.cost},O(t.cost_in_credits)),r.a.createElement(_,{onClick:function(){return a({type:"TOGGLE_COMPARE",payload:t.id})},text:n}))},g=a(29),j=a.n(g),y=function(){return r.a.createElement("div",{className:j.a.ldsRing},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},C=a(18),N=a.n(C),x=function(){var e=Object(i.d)((function(e){return e.starships})),t=Object(i.d)((function(e){return e.isLoading})),a=Object(i.d)((function(e){return e.hasErrored})),n=null===e||void 0===e?void 0:e.map((function(e){return r.a.createElement(b,{starship:Object(u.a)({},e),key:e.id})}));return r.a.createElement("main",{className:N.a.main},e.length>0?r.a.createElement("div",{className:N.a.catalog},n):a?r.a.createElement("h1",null,"Something went wrong :("):t?r.a.createElement(y,null):r.a.createElement("h1",null,"There are no starships"))},A=a(23),w=a(30),I=a.n(w),S=a(19),R=a.n(S),T=function(e){return r.a.createElement("div",{className:"cell ".concat(R.a.cell," ").concat(e.isTitle?R.a.title:""),"data-row":e.row},e.content)},k=a(31),G=a.n(k),L=function(e){return(t=e.replace(/_/g," ")).charAt(0).toUpperCase()+t.slice(1);var t},M=function(e){var t=e.starship,a=e.showTitle,n=Object.keys(t).map((function(e,n){var c=t[e];return Array.isArray(c)&&(c=c.length?c.join(", "):"-"),r.a.createElement("div",{className:"name"===e?"compare-header":"",key:n},r.a.createElement(T,{content:a?L(e):"",isTitle:!0}),r.a.createElement(T,{row:n,content:c||"-"}))}));return r.a.createElement("div",{className:G.a.fields},n)},H=function(e){var t=Object(u.a)({},e.starship),a=["created","edited","url","id","color","isCompared"];for(var n in t)t.hasOwnProperty(n)&&a.includes(n)&&delete t[n];return r.a.createElement("div",{className:I.a.item},r.a.createElement(M,{starship:t,showTitle:e.showTitle}))},P=a(32),D=a.n(P),B=function(){var e=document.querySelectorAll(".cell"),t={};for(var a in e.forEach((function(e){var a=e.dataset.row;t[a]=t[a]?[].concat(Object(A.a)(t[a]),[e.offsetHeight]):[]})),t)if(t.hasOwnProperty(a)){var n=t[a];t[a]=Math.max.apply(Math,Object(A.a)(n))+"px"}e.forEach((function(e){e.style.height=t[e.dataset.row]}))},U=function(){var e=Object(i.d)((function(e){return e.starships})).filter((function(e){return e.isCompared})),t=e.map((function(e,t){return r.a.createElement(H,{starship:e,showTitle:0===t,key:t})}));return Object(n.useEffect)(B,[]),r.a.createElement("div",{className:D.a.items},e.length>1?t:r.a.createElement("h1",null,"Choose at least 2 starsheeps to compare"))},Z=a(20),z=a.n(Z),F=Object(d.e)((function(e){return r.a.createElement("header",{className:z.a.header},r.a.createElement(s.b,{className:z.a.title,to:"/"},r.a.createElement("h1",null,"Starships")),"/compare/"===e.location.pathname?r.a.createElement(s.b,{to:"/"},r.a.createElement(_,{text:"Catalog"})):r.a.createElement(s.b,{to:"/compare/"},r.a.createElement(_,{text:"Compare"})))})),J=a(33),q=a.n(J);var $=Object(i.b)((function(e){return e}))((function(){var e=Object(i.c)();return Object(n.useEffect)((function(){e((function(e){e({type:"IS_LOADING",payload:!0}),fetch("https://swapi.dev/api/starships/").then((function(e){return e.json()})).then((function(t){return e({type:"GET_STARSHIPS",payload:t.results})})).catch((function(){return e({type:"HAS_ERRORED"})})).finally((function(){return e({type:"IS_LOADING",payload:!1})}))}))}),[e]),r.a.createElement("div",{className:q.a.App},r.a.createElement(F,null),r.a.createElement(d.a,{path:"/",exact:!0,component:x}),r.a.createElement(d.a,{path:"/compare",exact:!0,component:U}))})),K=Object(m.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_STARSHIPS":var a=t.payload.map((function(e,t){return Object(u.a)(Object(u.a)({},e),{},{id:t,color:"#"+Math.ceil(16777215*Math.random()).toString(16),isCompared:!1})}));return Object(u.a)(Object(u.a)({},e),{},{starships:a});case"IS_LOADING":return Object(u.a)(Object(u.a)({},e),{},{isLoading:t.payload});case"HAS_ERRORED":return Object(u.a)(Object(u.a)({},e),{},{hasErrored:t.payload});case"TOGGLE_COMPARE":var n=e.starships.map((function(e){return e.id===t.payload&&(e.isCompared=!e.isCompared),e}));return Object(u.a)(Object(u.a)({},e),{},{starships:n});default:return e}}),Object(m.c)(Object(m.a)(l.a)));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,{store:K},r.a.createElement(s.a,{basename:"/starships"},r.a.createElement($,null)))),document.getElementById("root"))}],[[34,1,2]]]);
//# sourceMappingURL=main.900b7a9a.chunk.js.map
(this["webpackJsonpmonsters-rolodex-app"]=this["webpackJsonpmonsters-rolodex-app"]||[]).push([[0],{16:function(e,t,n){e.exports={cardList:"cardList_cardList__2Owgu"}},17:function(e,t,n){e.exports={cardContainer:"card_cardContainer__1Ay2g"}},18:function(e,t,n){e.exports={search:"searchBox_search__FXgku"}},19:function(e,t,n){e.exports=n(44)},24:function(e,t,n){},3:function(e,t,n){e.exports={App:"App_App__16ZpL",title:"App_title__-GfWs"}},44:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(14),c=n.n(o),s=(n(24),n(2)),i=n.n(s),l=n(4),u=n(15),m=n.n(u),p=n(16),d=n.n(p),h=n(17),f=n.n(h),v=function(e){var t=e.monster,n=e.imageKey;return r.a.createElement("div",{className:f.a.cardContainer},r.a.createElement("img",{alt:"monster",src:"https://robohash.org/".concat(n,"/?set=set2&size=180x180")}),r.a.createElement("h1",null,t.name),r.a.createElement("p",{style:{textAlign:"center"}},t.email))},g=function(e){var t=e.monsters;return r.a.createElement("div",{className:d.a.cardList},t.map((function(e,t){return r.a.createElement(v,{key:e.id,monster:e,imageKey:t+1})})))},_=n(18),E=n.n(_),w=function(e){var t=e.placeholder,n=e.handleChange;return r.a.createElement("input",{className:E.a.search,type:"search",placeholder:t,onChange:n})},x=n(3),y=n.n(x);var b=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(""),s=Object(l.a)(c,2),u=s[0],p=s[1];Object(a.useEffect)((function(){!function(){var e;i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.awrap(m()("https://jsonplaceholder.typicode.com/users").then((function(e){return e.data})));case 2:e=t.sent,o(e);case 4:case"end":return t.stop()}}))}()}),[]);var d=n.filter((function(e){return e.name.toLowerCase().includes(u.toLowerCase())}));return r.a.createElement("div",{className:y.a.App},r.a.createElement("h1",{className:y.a.title},"Monsters Rolodex"),r.a.createElement(w,{placeholder:"search monsters",handleChange:function(e){return p(e.target.value)}}),r.a.createElement(g,{monsters:d}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.c0164fad.chunk.js.map
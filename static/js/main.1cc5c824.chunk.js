(this.webpackJsonpbingo=this.webpackJsonpbingo||[]).push([[0],{11:function(e,t,a){e.exports=a(24)},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(10),o=a.n(i),s=(a(16),a(1)),c=a(2),l=a(4),u=a(3),m=(a(17),a(18),a(19),a(25)),d=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).SelectNumber=function(){var e=n.props.cookies,t=n.props,a=t.id,r=t.row,i=JSON.parse(e.cookies.board);i.selected[a][r]=!i.selected[a][r],e.set("board",i,{path:"/"})},n.state={select:!1},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.cookies,t=this.props,a=t.id,n=t.row,i=JSON.parse(e.cookies.board);return!0===this.props.free?r.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2  bw2 shadow-5 fl w-100"},"FR"):i.selected[a][n]?r.a.createElement("div",{onClick:this.SelectNumber,className:"bg-light-green dib br3 pa3 ma2  bw2 shadow-5 fl w-100"},this.props.num):r.a.createElement("div",{onClick:this.SelectNumber,className:"bg-light-white dib br3 pa3 ma2  bw2 shadow-5 fl w-100"},this.props.num)}}]),a}(r.a.Component),p=Object(m.a)(d);function b(e,t){var a=Math.ceil(e),n=Math.floor(t);return Math.floor(Math.random()*(n-a))+a}var h=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).UpdateCookie=function(e,t,a){var r=n.props.cookies;t.numbers[a]=e,t.selected[a]=[!1,!1,!1,!1,!1],t.initialized[a]=!0,r.set("board",t,{path:"/"})},n.GenerateNumber=function(){var e=n.props.cookies,t=n.props.id,a=JSON.parse(e.cookies.board);if(!a.initialized[t]){for(var r=[],i=4;i>-1;){var o=b(n.props.min,n.props.max);0===o&&(o=1),r.includes(o)||(r[i]=o,i-=1)}n.UpdateCookie(r,a,t)}},n.GenerateNumber(),n}return Object(c.a)(a,[{key:"shouldComponentUpdate",value:function(){var e=this.props.cookies,t=this.props.id;return JSON.parse(e.cookies.board).initialized[t]||this.GenerateNumber(),!0}},{key:"render",value:function(){var e=this.props.cookies,t=this.props.id,a=JSON.parse(e.cookies.board);return r.a.createElement("div",{className:"fl w-20"},r.a.createElement("h1",null,this.props.letter),r.a.createElement(p,{id:t,row:"0",num:a.numbers[t][0],sel:a.selected[t][0],free:!1}),r.a.createElement(p,{id:t,row:"1",num:a.numbers[t][1],sel:a.selected[t][1],free:!1}),r.a.createElement(p,{id:t,row:"2",num:a.numbers[t][2],sel:a.selected[t][2],free:this.props.free}),r.a.createElement(p,{id:t,row:"3",num:a.numbers[t][3],sel:a.selected[t][3],free:!1}),r.a.createElement(p,{id:t,row:"4",num:a.numbers[t][4],sel:a.selected[t][4],free:!1}))}}]),a}(r.a.Component),f=Object(m.a)(h),v=function(){return r.a.createElement("div",null,r.a.createElement(f,{id:"0",letter:"B",min:"1",max:"15",free:!1}),r.a.createElement(f,{id:"1",letter:"I",min:"16",max:"30",free:!1}),r.a.createElement(f,{id:"2",letter:"N",min:"31",max:"45",free:!0}),r.a.createElement(f,{id:"3",letter:"G",min:"46",max:"60",free:!1}),r.a.createElement(f,{id:"4",letter:"O",min:"61",max:"75",free:!1}))},k=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("button",{className:"bg-light-blue dib br3 pa3 ma2  bw2 shadow-5 grow",onClick:this.props.onClick},"New Game"))}}]),a}(r.a.Component);var w=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).Initialize=function(){var e=n.props.cookies;e.cookies.initialized||e.set("initialized",!1,{path:"/"}),e.cookies.initialized||(e.set("board",'\n { \n   "numbers": [[],[],[],[],[]],\n   "selected":  [[],[],[],[],[]],\n   "initialized": [false,false,false,false]\n}\n  ',{path:"/"}),e.set("initialized",!0,{path:"/"}))},n.onClick=function(){n.props.cookies.set("initialized",!1,{path:"/"}),n.Initialize()},n.Initialize(),n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,null),r.a.createElement(k,{onClick:this.onClick}))}}]),a}(r.a.Component),E=Object(m.a)(w);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(23);var O=a(26);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O.a,null,r.a.createElement(E,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.1cc5c824.chunk.js.map
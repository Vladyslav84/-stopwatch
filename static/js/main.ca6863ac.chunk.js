(this["webpackJsonp-stopwatch"]=this["webpackJsonp-stopwatch"]||[]).push([[0],{28:function(t,e,c){"use strict";c.r(e);var n=c(8),a=c.n(n),s=c(22),i=c.n(s),r=c(20),o=c(3),l=c.n(o),b=c(34),u=c(6),j=c(31),d=c(33),h=c(15),m=c(32),O=c(2);var f=function(){var t=Object(n.useState)(0),e=Object(r.a)(t,2),c=e[0],a=e[1],s=Object(n.useState)(!1),i=Object(r.a)(s,2),o=i[0],f=i[1],p=Object(n.useState)(!1),v=Object(r.a)(p,2),_=v[0],x=v[1];function N(t){return String(t).padStart(2,"0")}var k=N(Math.floor(c%864e5/36e5)),S=N(Math.floor(c%36e5/6e4)),w=N(Math.floor(c%6e4/1e3));return Object(n.useEffect)((function(){var t=Object(b.a)(document.getElementById("clickMe"),"click");t.pipe(Object(j.a)(t.pipe(Object(d.a)(300))),Object(h.a)((function(t){return t.length})),Object(m.a)((function(t){return 2===t}))).subscribe((function(){x(!1),f(!1)}))}),[]),Object(n.useEffect)((function(){var t=null;o?new u.a((function(e){return t=setInterval((function(){return e.next(1e3)}),1e3)})).subscribe((function(t){return a((function(e){return e+t}))})):clearInterval(t);return function(){return clearInterval(t)}}),[o]),Object(O.jsxs)("div",{className:l.a.container,children:[Object(O.jsxs)("div",{className:l.a.timer,children:[Object(O.jsxs)("div",{className:l.a.timer_block,children:[Object(O.jsx)("div",{className:l.a.time,children:k}),Object(O.jsx)("div",{className:l.a.title,children:"HH"})]}),Object(O.jsxs)("div",{className:l.a.timer_block,children:[Object(O.jsx)("div",{className:l.a.time,children:S}),Object(O.jsx)("div",{className:l.a.title,children:"MM"})]}),Object(O.jsxs)("div",{className:l.a.timer_block,children:[Object(O.jsx)("div",{className:l.a.time,children:w}),Object(O.jsx)("div",{className:l.a.title,children:"SS"})]})]}),Object(O.jsxs)("div",{className:l.a.buttons,children:[Object(O.jsx)("button",{type:"button",className:l.a.button,onClick:function(){_?o&&_&&(f(!1),x(!1),a(0)):(f(!0),x(!0))},children:"Start/Stop"}),Object(O.jsx)("button",{type:"button",id:"clickMe",className:l.a.button,children:"Wait"}),Object(O.jsx)("button",{type:"button",className:l.a.button,onClick:function(){a(0),f(!0),x(!0)},children:"Reset"})]})]})};i.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(f,{})}),document.getElementById("root"))},3:function(t,e,c){t.exports={container:"stopwatch_container__VlvDT",timer:"stopwatch_timer__1Cr_z",timer_block:"stopwatch_timer_block__1gPAN",buttons:"stopwatch_buttons__3iSTu",button:"stopwatch_button__2cLBL"}}},[[28,1,2]]]);
//# sourceMappingURL=main.ca6863ac.chunk.js.map
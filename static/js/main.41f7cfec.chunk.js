(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[0],{32:function(e,t,a){},62:function(e,t,a){e.exports=a(71)},67:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(8),r=a.n(c),l=(a(67),a(43)),o=a(11),s=a(17),u=a(16),m=(a(32),a(116)),d=function(e){var t=Object(n.useState)(!1),a=Object(u.a)(t,2),c=a[0],r=a[1],l=Object(n.useState)(e.title),o=Object(u.a)(l,2),s=o[0],d=o[1];return c?i.a.createElement(m.a,{className:"inputField",id:"standard-basic",label:e.title,onBlur:function(){r(!1),e.changeTitle(s)},autoFocus:!0,value:s,onChange:function(e){d(e.currentTarget.value)}}):i.a.createElement("span",{className:"projectTitle",onDoubleClick:function(){return r(!0)}},e.title)},f=a(104),b=a(105),T=function(e){return i.a.createElement("h3",{className:"headerTitle"},i.a.createElement(d,{title:e.title,changeTitle:e.changeToDoListTitle}),i.a.createElement(f.a,{"aria-label":"delete",onClick:e.removeTodoList},i.a.createElement(b.a,null)))},k=a(117);var h=function(e){return i.a.createElement("div",{className:"tasksDiv"},i.a.createElement(k.a,{size:"medium",checked:e.isDone,onChange:function(t){e.changeTaskStatus(e.id,t.currentTarget.checked)}}),i.a.createElement("span",{className:e.isDone?"taskDisable":"taskEnable"},i.a.createElement(d,{title:e.title,changeTitle:function(t){e.changeTaskTitle(e.id,t)}})),i.a.createElement(f.a,{className:e.isDone?"taskCheck":"",size:"small",onClick:function(){return e.removeTask(e.id)}},i.a.createElement(b.a,{fontSize:"medium"})))},j=function(e){var t=e.task.map((function(t){return i.a.createElement(h,Object.assign({key:t.id},t,{removeTask:e.removeTask,changeTaskStatus:e.changeTaskStatus,changeTaskTitle:e.changeTaskTitle}))}));return t.length?i.a.createElement(i.a.Fragment,null,t):i.a.createElement("div",{className:"errorMsg"},"Please add task or change task filter!")},E=a(106),O=function(e){var t=function(t){return function(){return e.changeFilter(t)}};return i.a.createElement("div",{className:"btnsGroup"},i.a.createElement(E.a,{color:"all"===e.filter?"secondary":"primary",onClick:t("all")},"All"),i.a.createElement(E.a,{color:"active"===e.filter?"secondary":"primary",onClick:t("active")},"Active"),i.a.createElement(E.a,{color:"completed"===e.filter?"secondary":"primary",onClick:t("completed")},"Completed"))},v=a(107),g=function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),c=a[0],r=a[1],l=Object(n.useState)(!1),o=Object(u.a)(l,2),s=o[0],d=o[1],b=function(){var t=c.trim();t?e.addItem(t):d(!0),r("")},T=s?i.a.createElement("div",{className:"errorMsg"},"Title is require!"):null;return i.a.createElement("div",null,i.a.createElement(m.a,{required:!0,id:"standard-required",label:"Title is required!",onChange:function(e){r(e.currentTarget.value),d(!1)},onKeyPress:function(e){"Enter"===e.key&&b()},variant:"outlined",className:s?"error":""}),i.a.createElement(f.a,{size:"medium",onClick:b},i.a.createElement(v.a,null)),T)},p=function(e){var t=function(t){e.changeFilter(t,e.id)};return i.a.createElement("div",{className:"toDoLists"},i.a.createElement(T,{title:e.title,addTask:e.addTask,filter:e.filter,removeTodoList:function(){e.removeTodoList(e.id)},changeToDoListTitle:function(t){e.changeToDoListTitle(e.id,t)}}),i.a.createElement(g,{addItem:function(t){return e.addTask(t,e.id)}}),i.a.createElement(j,{task:e.task,removeTask:function(t){e.removeTask(t,e.id)},changeFilter:t,filter:e.filter,changeTaskStatus:function(t,a){e.changeTaskStatus(t,a,e.id)},changeTaskTitle:function(t,a){e.changeTaskTitle(t,a,e.id)}}),i.a.createElement(O,{changeFilter:t,filter:e.filter}))},D=a(118),y=a(108),S=a(73),C=a(109),N=a(110),L=a(112),w=a(113),F=a(111);var B=function(){var e,t=Object(D.a)(),a=Object(D.a)(),c=Object(n.useState)([{id:t,title:"What to learn",filter:"all"},{id:a,title:"What to buy",filter:"all"}]),r=Object(u.a)(c,2),m=r[0],d=r[1],b=Object(n.useState)((e={},Object(s.a)(e,t,[{id:Object(D.a)(),title:"HTML",isDone:!0},{id:Object(D.a)(),title:"CSS",isDone:!1},{id:Object(D.a)(),title:"JS/TS",isDone:!0}]),Object(s.a)(e,a,[{id:Object(D.a)(),title:"Bread",isDone:!0},{id:Object(D.a)(),title:"Meat",isDone:!1},{id:Object(D.a)(),title:"Milk",isDone:!0}]),e)),T=Object(u.a)(b,2),k=T[0],h=T[1],j=function(e,t){var a=k[t];k[t]=a.filter((function(t){return t.id!==e})),h(Object(o.a)({},k))},O=function(e,t){var a=[{id:Object(D.a)(),title:e,isDone:!1}].concat(Object(l.a)(k[t]));h(Object(o.a)(Object(o.a)({},k),{},Object(s.a)({},t,a)))},v=function(e,t,a){h(Object(o.a)(Object(o.a)({},k),{},Object(s.a)({},a,k[a].map((function(a){return a.id===e?Object(o.a)(Object(o.a)({},a),{},{isDone:t}):a})))))},B=function(e,t){d(m.map((function(a){return a.id===t?Object(o.a)(Object(o.a)({},a),{},{filter:e}):a})))},I=function(e){d(m.filter((function(t){return t.id!==e}))),delete k[e]},M=function(e,t,a){console.log(e,t,a),h(Object(o.a)(Object(o.a)({},k),{},Object(s.a)({},a,k[a].map((function(a){return a.id===e?Object(o.a)(Object(o.a)({},a),{},{title:t}):a})))))},q=function(e,t){d(m.map((function(a){return a.id===e?Object(o.a)(Object(o.a)({},a),{},{title:t}):a})))},z=m.map((function(e){var t=function(e){switch(e.filter){case"completed":return k[e.id].filter((function(e){return e.isDone}));case"active":return k[e.id].filter((function(e){return!e.isDone}));default:return k[e.id]}}(e);return i.a.createElement(y.a,{item:!0},i.a.createElement(S.a,{className:"paperBlock",elevation:8},i.a.createElement(p,{key:e.id,id:e.id,title:e.title,task:t,removeTask:j,changeFilter:B,addTask:O,filter:e.filter,changeTaskStatus:v,removeTodoList:I,changeTaskTitle:M,changeToDoListTitle:q})))}));return i.a.createElement("div",{className:"App"},i.a.createElement(C.a,{position:"static"},i.a.createElement(N.a,{style:{justifyContent:"space-between"}},i.a.createElement(f.a,{edge:"start",color:"inherit","aria-label":"menu"},i.a.createElement(F.a,null)),i.a.createElement(L.a,{variant:"h6"},"Todolists"),i.a.createElement(E.a,{color:"inherit",variant:"outlined"},"Login"))),i.a.createElement(w.a,{fixed:!0},i.a.createElement(y.a,{container:!0,className:"addItem"},i.a.createElement(g,{addItem:function(e){var t=Object(D.a)(),a={id:t,title:e,filter:"all"},n=[].concat(Object(l.a)(m),[a]);d(n),h(Object(o.a)(Object(o.a)({},k),{},Object(s.a)({},t,[])))}})),i.a.createElement(y.a,{container:!0,spacing:5},z)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var I=a(54),M=a(114),q=a(115),z=Object(I.a)({palette:{primary:{main:"#ff6e40"},secondary:{main:"#ff8a65"},type:"dark"}});r.a.render(i.a.createElement(M.a,{theme:z},i.a.createElement(q.a,null),i.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[62,1,2]]]);
//# sourceMappingURL=main.41f7cfec.chunk.js.map
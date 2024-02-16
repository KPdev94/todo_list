(()=>{"use strict";var e={904:(e,t,n)=>{n.d(t,{c:()=>d});var a=n(500),s=n.n(a),i=n(312),r=n.n(i)()(s());r.push([e.id,"* {\n    font-family: Arial, Helvetica, sans-serif;\n    box-sizing: border-box;\n}\nbody {\n    display: flex;\n    height: 100%;\n    width: 100%;\n    margin: 0;\n}\n#content {\n    padding: 12px;\n}\n.heading {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n}\n\n.heading h1, .heading h2 {\n    margin: 0;\n}\n.heading h2 {\n    font-size: 15px;\n}\n.tasks-div {\n    margin-top: 10px;\n}\n.in-progress-tasks {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(min-content, 0));\n    gap: 20px;\n    margin-bottom: 15px;\n}\n\n.task-div {\n    display: grid;\n    border: 2px solid black;\n    border-radius: 8px;\n    grid-template-columns: repeat(3, fit-content(10px));\n    grid-template-rows: repeat(2, 1fr);\n    gap: 10px;\n    padding: 6px;\n    width: fit-content;\n    font-size: 12px;\n}\n\n.task-subheading {\n    text-decoration: underline;\n    margin-bottom: 0;\n    display: flex;\n    justify-content: center;\n}\n.task-info {\n    margin-top: 0;\n    display: flex;\n    justify-content: center;\n}\n\n.new-task-div {\n    display: flex;\n    width: 75px;\n    height: 75px;\n    flex-direction: column;\n    justify-self: center;\n    justify-content: center;\n    align-items: center;\n    align-self: center;\n}\n.new-task-button {\n    background-color: blueviolet;\n    height: 75px;\n}\n",""]);const d=r},312:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,s,i){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(a)for(var d=0;d<this.length;d++){var o=this[d][0];null!=o&&(r[o]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);a&&r[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),s&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=s):l[4]="".concat(s)),t.push(l))}},t}},500:e=>{e.exports=function(e){return e[1]}},596:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var i={},r=[],d=0;d<e.length;d++){var o=e[d],c=a.base?o[0]+a.base:o[0],l=i[c]||0,p="".concat(c," ").concat(l);i[c]=l+1;var u=n(p),m={css:o[1],media:o[2],sourceMap:o[3],supports:o[4],layer:o[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var f=s(m,a);a.byIndex=d,t.splice(d,0,{identifier:p,updater:f,references:1})}r.push(p)}return r}function s(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,s){var i=a(e=e||[],s=s||{});return function(e){e=e||[];for(var r=0;r<i.length;r++){var d=n(i[r]);t[d].references--}for(var o=a(e,s),c=0;c<i.length;c++){var l=n(i[c]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=o}}},176:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},808:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},120:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},520:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,s&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},936:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(a){var s=t[a];if(void 0!==s)return s.exports;var i=t[a]={id:a,exports:{}};return e[a](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(596),t=n.n(e),a=n(520),s=n.n(a),i=n(176),r=n.n(i),d=n(120),o=n.n(d),c=n(808),l=n.n(c),p=n(936),u=n.n(p),m=n(904),f={};f.styleTagTransform=u(),f.setAttributes=o(),f.insert=r().bind(null,"head"),f.domAPI=s(),f.insertStyleElement=l(),t()(m.c,f),m.c&&m.c.locals&&m.c.locals;const h=document.getElementById("content");let v=[];class g{constructor(e,t,n,a,s,i="in progress"){this.name=e,this.summary=t,this.participants=n,this.dueDate=a,this.priority=s,this.status=i,v.push(this)}}new g("Sample Task","This is a sample.","Only Me","12/12/3000","Urgent"),new g("Sample complete task",'"This is a completed task',"Me again","11/11/2000","Urgent","completed"),console.log(v),window.addEventListener("load",(function(){let e=document.createElement("div");e.classList.add("heading");let t=document.createElement("h1");t.textContent="Let's Do This!";let n=document.createElement("h2");n.textContent="A planner for your tasks, you got this!",h.appendChild(e),e.appendChild(t),e.appendChild(n)}(),function(){let e=document.createElement("div");e.classList.add("tasks-div");let t=document.createElement("div");t.classList.add("in-progress-tasks");let n=document.createElement("div");n.classList.add("completed-tasks"),h.appendChild(e),e.appendChild(t),e.appendChild(n),v.forEach((e=>{let t=document.createElement("div");t.classList.add("task-div");let n=document.createElement("div");n.classList.add("tasks-name");let a=document.createElement("p");a.classList.add("task-subheading"),a.textContent="Name";let s=document.createElement("p");s.classList.add("task-info"),s.textContent=e.name,n.appendChild(a),n.appendChild(s);let i=document.createElement("div");i.classList.add("tasks-summary");let r=document.createElement("p");r.classList.add("task-subheading"),r.textContent="Summary";let d=document.createElement("p");d.classList.add("task-info"),d.textContent=e.summary,i.appendChild(r),i.appendChild(d);let o=document.createElement("div");o.classList.add("tasks-participants");let c=document.createElement("p");c.classList.add("task-subheading"),c.textContent="Participants";let l=document.createElement("p");l.classList.add("task-info"),l.textContent=e.participants,o.appendChild(c),o.appendChild(l);let p=document.createElement("div");p.classList.add("tasks-due-date");let u=document.createElement("p");u.classList.add("task-subheading"),u.textContent="Due date";let m=document.createElement("p");m.classList.add("task-info"),m.textContent=e.dueDate,p.appendChild(u),p.appendChild(m);let f=document.createElement("div");f.classList.add("tasks-priority");let h=document.createElement("p");h.classList.add("task-subheading"),h.textContent="Priority";let v=document.createElement("p");v.classList.add("task-info"),v.textContent=e.priority,f.appendChild(h),f.appendChild(v);let g=document.createElement("div");g.classList.add("tasks-status");let y=document.createElement("p");y.classList.add("task-subheading"),y.textContent="Status";let x=document.createElement("p");x.classList.add("task-info"),x.textContent=e.status,g.appendChild(y),g.appendChild(x),t.appendChild(n),t.appendChild(i),t.appendChild(o),t.appendChild(p),t.appendChild(f),t.appendChild(g),"in progress"==e.status?document.querySelector(".in-progress-tasks").appendChild(t):"completed"==e.status?document.querySelector(".completed-tasks").appendChild(t):alert(`${e.name} has an error and cannot be placed.`)}))}(),void function(){let e=document.createElement("div");e.classList.add("new-task-div");let t=document.createElement("button");t.classList.add("new-task-button"),t.innerHTML="+<br>New Task",document.querySelector(".in-progress-tasks").appendChild(e),e.appendChild(t),e.appendChild(newTaskText)}()))})()})();
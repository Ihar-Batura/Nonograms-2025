(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerPolicy&&(l.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?l.credentials="include":n.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(n){if(n.ep)return;n.ep=!0;const l=s(n);fetch(n.href,l)}})();function r(t){const{tag:e="div",classes:s=[],id:o,text:n,parent:l}=t,i=document.createElement(e);return s.length>0&&i.classList.add(...s),o&&(i.id=o),n&&(i.textContent=n),l!=null&&l.append(i),i}function u(t){const{classes:e=[],id:s,text:o,disabled:n,onClick:l,parent:i}=t,a=document.createElement("button");return e.length>0&&a.classList.add(...e),s&&(a.id=s),o&&(a.textContent=o),n&&a.setAttribute("disabled",`${n}`),l&&(a.onclick=l),i!=null&&i.append(a),a}const N=""+new URL("../fillCell.wav",import.meta.url).href,q=""+new URL("../crossCell.wav",import.meta.url).href,k=""+new URL("../clearCell.wav",import.meta.url).href,E=""+new URL("../win.wav",import.meta.url).href;let m=!0;const h=new Audio(N),C=new Audio(q),L=new Audio(k),_=new Audio(E);function R(){const t=document.querySelector(".btn-sound");m=!m,m?t.classList.remove("mute"):t.classList.add("mute")}function $(){m&&(h.currentTime=0,h.play())}function x(){m&&(L.currentTime=0,L.play())}function A(){m&&(C.currentTime=0,C.play())}function I(){m&&(_.currentTime=0,_.play())}function G(){const t=document.querySelector("body"),e=document.querySelector(".btn-theme");t.classList.value.includes("dark-style")?(t.classList.remove("dark-style"),e.classList.remove("dark")):(t.classList.add("dark-style"),e.classList.add("dark"))}function P(){const t=r({tag:"div",classes:["btns-container__sound-theme"]});return u({classes:["header-btns","btn-sound"],onClick:()=>R(),parent:t}),u({classes:["header-btns","btn-theme"],onClick:()=>G(),parent:t}),t}function B(){const t=r({tag:"header",classes:["header"]}),e=r({tag:"div",classes:["wrapper","header-wrapper"],parent:t});r({tag:"h1",classes:["header-logo"],text:"Nonograms",parent:e});const s=P();return e.append(s),t}function f(){const t=document.querySelector(".main-content");for(;t.firstChild;)t.removeChild(t.firstChild)}const p=[{id:1,name:"watch",difficulty:"easy",cellsNumber:25,matrix:[[0,1,1,1,0],[1,0,1,0,1],[1,0,1,1,1],[1,0,0,0,1],[0,1,1,1,0]]},{id:2,name:"propeller",difficulty:"easy",cellsNumber:25,matrix:[[0,1,0,0,0],[0,1,0,1,1],[0,0,1,0,0],[1,1,0,1,0],[0,0,0,1,0]]},{id:3,name:"heart",difficulty:"easy",cellsNumber:25,matrix:[[0,1,0,1,0],[1,1,1,1,1],[1,1,1,1,1],[0,1,1,1,0],[0,0,1,0,0]]},{id:4,name:"fountain",difficulty:"easy",cellsNumber:25,matrix:[[0,1,0,1,0],[1,0,1,0,1],[0,0,1,0,0],[1,1,1,1,1],[0,1,1,1,0]]},{id:5,name:"camel",difficulty:"easy",cellsNumber:25,matrix:[[0,1,0,0,0],[1,1,1,0,1],[1,1,1,1,0],[1,0,1,0,0],[1,0,1,0,0]]},{id:6,name:"cup",difficulty:"medium",cellsNumber:100,matrix:[[1,1,1,1,1,1,1,1,1,1],[1,0,1,1,0,0,1,1,0,1],[1,0,1,1,0,0,1,1,0,1],[1,0,1,1,0,0,1,1,0,1],[0,1,1,1,0,0,1,1,1,0],[0,0,0,1,1,1,1,0,0,0],[0,0,0,0,1,1,0,0,0,0],[0,0,0,0,1,1,0,0,0,0],[0,0,0,1,1,1,1,0,0,0],[0,0,1,1,1,1,1,1,0,0]]},{id:7,name:"spider",difficulty:"medium",cellsNumber:100,matrix:[[0,0,0,1,1,0,0,1,1,0],[1,1,1,0,1,0,1,1,1,1],[0,0,1,0,1,0,1,1,1,1],[0,0,0,1,1,1,1,1,1,0],[1,1,1,1,1,1,1,0,0,0],[0,0,0,1,1,1,1,1,1,0],[0,0,1,1,1,1,1,0,0,1],[1,1,1,1,0,1,0,1,0,1],[0,0,1,0,0,1,0,1,0,0],[0,0,1,0,0,1,0,1,0,0]]},{id:8,name:"kettle",difficulty:"medium",cellsNumber:100,matrix:[[0,0,1,1,1,1,1,0,0,0],[0,1,0,0,0,0,0,1,0,0],[0,1,0,0,1,0,0,1,0,0],[0,0,1,1,1,1,1,0,0,0],[0,1,1,1,1,1,1,1,0,0],[1,1,1,1,1,1,1,1,0,1],[1,0,1,1,1,1,1,1,1,1],[1,0,0,1,1,1,1,1,1,1],[1,1,0,0,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,0,0]]},{id:9,name:"hamster",difficulty:"medium",cellsNumber:100,matrix:[[1,1,1,0,0,0,1,1,1,1],[1,0,1,1,1,1,1,1,0,1],[1,1,1,1,1,1,1,1,1,1],[0,1,1,0,1,1,0,1,1,0],[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,0,1,1,1,1,1],[1,0,0,0,1,0,0,0,0,1],[1,0,0,1,1,1,0,0,0,1],[0,1,0,0,0,0,0,0,1,0],[0,1,1,1,1,1,1,1,1,0]]},{id:10,name:"crab",difficulty:"medium",cellsNumber:100,matrix:[[1,0,1,0,0,0,0,1,0,1],[1,1,1,0,0,0,0,1,1,1],[1,1,1,0,0,0,0,1,1,1],[1,1,0,1,0,0,1,0,1,1],[0,1,1,0,1,1,0,1,1,0],[0,0,1,1,1,1,1,1,0,0],[0,1,1,1,1,1,1,1,1,0],[1,0,1,0,1,1,0,1,0,1],[0,1,1,1,0,0,1,1,1,0],[1,0,1,1,1,1,1,1,0,1]]},{id:11,name:"crown",difficulty:"hard",cellsNumber:225,matrix:[[1,1,1,1,1,1,1,0,1,1,1,1,1,1,1],[1,1,1,1,1,1,0,1,0,1,1,1,1,1,1],[1,1,0,0,0,1,1,0,1,1,0,0,0,1,1],[1,0,0,0,0,1,1,0,1,0,0,0,0,0,1],[1,0,0,1,0,0,0,0,0,0,1,1,0,0,1],[1,0,1,1,0,1,0,1,0,1,0,1,1,0,1],[1,0,1,0,1,0,1,1,1,0,1,1,1,0,1],[1,0,0,0,1,0,1,1,1,0,1,1,1,0,1],[1,0,0,1,1,0,1,1,1,0,1,1,0,0,1],[1,1,0,1,1,0,0,1,0,0,1,1,0,1,1],[1,1,1,0,1,0,0,1,0,0,1,0,1,1,1],[0,0,1,0,1,0,1,1,1,0,1,0,1,0,0],[0,0,1,1,1,1,0,0,0,1,1,1,1,0,0],[0,0,1,0,0,1,0,1,0,1,0,0,1,0,0],[0,0,1,1,1,1,1,1,1,1,1,1,1,0,0]]},{id:12,name:"portrait",difficulty:"hard",cellsNumber:225,matrix:[[0,0,0,0,0,1,1,1,1,0,0,0,0,0,0],[0,0,0,0,1,1,1,1,1,1,0,0,0,0,0],[1,1,0,0,1,1,1,1,1,1,0,0,0,1,1],[1,1,1,1,0,0,0,0,0,0,1,1,1,1,1],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,0,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,0,0,1,1,0,0,0,0,0,1,0,0,0,0],[1,1,0,1,0,0,1,0,1,1,1,0,1,0,0],[1,0,1,1,0,0,0,0,1,0,1,0,1,0,1],[0,1,0,1,1,1,1,1,1,1,0,0,1,0,1],[0,0,1,0,1,1,1,0,0,1,0,0,1,1,1],[0,1,1,0,1,1,1,1,1,1,0,0,0,1,0],[1,1,1,0,0,1,1,1,1,0,1,0,0,1,0],[1,1,1,0,0,0,1,1,0,1,1,1,0,0,0],[1,1,1,0,0,0,0,0,0,1,1,1,1,0,0]]},{id:13,name:"operator",difficulty:"hard",cellsNumber:225,matrix:[[0,0,0,0,0,0,0,0,0,1,1,1,1,1,0],[0,0,0,0,0,0,0,0,0,1,1,1,1,1,0],[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1],[0,0,1,1,0,1,1,0,0,1,0,0,1,1,1],[0,1,0,0,1,0,0,1,0,1,1,0,0,1,1],[0,1,0,0,1,0,0,1,0,1,0,0,1,1,1],[1,0,1,1,0,1,1,0,0,1,1,1,1,1,0],[1,1,1,1,1,1,1,1,0,0,0,1,0,1,1],[1,1,1,1,0,1,0,1,1,0,0,1,0,0,1],[1,0,1,1,1,0,1,0,1,1,1,1,0,0,1],[0,0,0,1,1,1,0,1,1,0,0,0,0,0,1],[0,0,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,1,1,0,1,0,1,1,0,0,0,0,0,0,1],[1,1,0,0,1,0,0,1,1,0,0,0,0,0,1],[1,0,0,0,1,0,0,0,1,0,0,1,1,1,1]]},{id:14,name:"camera",difficulty:"hard",cellsNumber:225,matrix:[[0,0,0,0,0,0,0,1,1,1,1,0,0,0,0],[0,0,0,0,0,0,1,1,0,0,1,1,0,0,0],[0,1,1,0,1,0,1,0,0,0,0,1,0,1,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,1,1,1,1,1,0,0,0],[1,1,1,1,1,1,1,0,0,0,0,1,1,1,1],[1,1,0,1,1,1,0,1,1,1,1,0,1,1,1],[1,1,1,0,1,0,1,1,1,0,1,1,0,1,1],[1,1,1,0,1,0,1,1,1,1,0,1,0,1,1],[1,1,1,0,1,0,1,1,1,1,0,1,0,1,1],[1,1,1,0,1,0,1,1,1,1,1,1,0,1,1],[1,1,1,1,1,1,0,1,1,1,1,0,1,1,1],[1,1,1,0,0,1,1,0,0,0,0,1,1,0,0],[0,0,0,0,0,0,1,1,1,1,1,1,0,0,0]]},{id:15,name:"lion",difficulty:"hard",cellsNumber:225,matrix:[[1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],[1,0,0,1,1,1,1,1,1,0,0,1,1,1,0],[1,0,1,1,0,1,0,0,1,1,0,1,1,1,0],[1,1,1,0,0,1,0,0,0,1,1,1,1,1,1],[1,1,0,0,0,0,0,0,0,0,1,1,1,1,1],[1,0,1,0,0,0,0,1,0,0,0,1,1,1,1],[1,0,0,1,0,1,0,0,0,0,0,1,1,1,1],[1,0,0,1,1,1,0,0,0,0,0,1,0,1,1],[1,1,0,1,1,1,0,0,0,1,1,1,1,0,1],[1,1,0,0,1,0,0,0,0,1,1,0,1,0,1],[1,1,0,1,1,1,1,0,1,1,1,0,1,1,0],[1,1,1,0,0,0,0,1,1,1,1,1,0,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,0,1,0],[1,0,1,1,1,1,1,1,1,1,0,1,0,0,0],[0,0,0,1,1,1,1,1,1,0,0,0,0,0,0]]}];function y(t,e){document.querySelectorAll(`.${t}`).forEach(o=>{o.classList.remove(`${e}`)})}function F(t){const e=r({tag:"div",classes:["play-field"],id:t}),s=p[t-1].matrix;s.length===5&&e.classList.add("small-field"),s.length===10&&e.classList.add("medium-field"),s.length===15&&e.classList.add("big-field");const o=r({tag:"div",classes:["row-top"],parent:e});for(let n=0;n<s.length;n+=1){const l=r({tag:"div",classes:["top-prompt"]});n===0&&l.classList.add("hight-hint__cell-border__start-cell"),(n===4||n===9||n===14)&&l.classList.add("hight-hint__cell-border__end-cell"),n!==0&&n!==4&&n!==9&&n!==14&&l.classList.add("hight-hint__cell-border__medium-cell");let i=0;for(let a=0;a<s.length;a+=1){const c=r({tag:"span",classes:["prompt"]});s[a][n]===1?(i++,a===s.length-1&&(c.textContent+=i,l.append(c))):i>0&&(c.textContent+=i,l.append(c),i=0)}o.append(l)}for(let n=0;n<s.length;n+=1){const l=r({tag:"div",classes:["row-cells"]}),i=r({tag:"div",classes:["row-prompt"]});n===0&&i.classList.add("row-border__top"),(n===4||n===9||n===14)&&i.classList.add("row-border__bottom"),(n===5||n===10)&&i.classList.add("row-border__top-none"),l.append(i);let a=0;for(let c=0;c<s[n].length;c+=1){const d=r({tag:"div",classes:["cell"]});c===0&&d.classList.add("cell-border__left"),(c===4||c===9||c===14)&&d.classList.add("cell-border__right"),(c===5||c===10||c===15)&&d.classList.add("cell-border__left-none"),(n===5||n===10)&&d.classList.add("cell-border__top-none"),(n===4||n===9||n===14)&&d.classList.add("cell-border__bottom"),d.textContent=s[n][c],s[n][c]===1?(a+=1,c===s.length-1&&(i.textContent+=` ${a}`)):a>0&&(i.textContent+=` ${a}`,a=0),l.append(d)}e.append(l)}return e}function O(){const e=document.querySelector(".play-field").id,s=p[e-1].name,o=p[e-1].difficulty,n=document.querySelector(".timer-minutes").textContent,l=document.querySelector(".timer-seconds").textContent,i=`${n}:${l}`,a={name:`${s}`,difficulty:`${o}`,result:`${i}`},c=JSON.parse(localStorage.getItem("NGResultsList"));if(c===null){const d=[];d.push(a),localStorage.setItem("NGResultsList",JSON.stringify(d))}else{let d=c;d.push(a),localStorage.setItem("NGResultsList",JSON.stringify(d))}}function M(t,e,s){const o=document.querySelector(".main-content"),n=r({tag:"div",classes:["win-message__container"],parent:o});r({tag:"h2",classes:["win-message__container-text"],text:`"Great! You have solved the nonogram in ${s} seconds!"`,parent:n}),r({tag:"div",classes:["win-message__container-picture","level-card__img",`level-card__img-${e}`],parent:n}),u({classes:["btn","play-btn","play-btn__play-again"],text:"Play again",onClick:()=>g(t),parent:n})}function W(){const e=document.querySelector(".play-field").id,s=p[e-1].name,o=document.querySelector(".timer-minutes").textContent,n=document.querySelector(".timer-seconds").textContent,l=`${o}:${n}`;f(),M(e,s,l),I()}function H(){const t=document.querySelectorAll(".cell");let e=0;t.forEach(s=>{s.textContent==="1"&&(e+=1,s.textContent==="1"&&s.classList.value.includes("fill")&&(e-=1)),s.textContent==="0"&&s.classList.value.includes("fill")&&(e+=1)}),e===0&&(O(),W())}function J(){document.querySelectorAll(".cell").forEach(e=>e.addEventListener("click",()=>{e.classList.value.includes("solution")||(e.classList.remove("cross"),e.classList.toggle("fill"),H(),e.classList.value.includes("fill")?$():x())}))}function U(){document.querySelectorAll(".cell").forEach(e=>e.addEventListener("contextmenu",s=>{s.preventDefault(),e.classList.value.includes("solution")||(e.classList.remove("fill"),e.classList.toggle("cross"),e.classList.value.includes("cross")?A():x())}))}function D(){const t=r({tag:"div",classes:["timer"]});return r({tag:"span",classes:["timer-minutes"],text:"00",parent:t}),r({tag:"span",classes:["timer-dots"],text:":",parent:t}),r({tag:"span",classes:["timer-seconds"],text:"00",parent:t}),t}function j(){document.querySelectorAll(".cell").forEach(e=>{e.innerText==="1"?(e.classList.add("fill"),e.classList.remove("cross"),e.classList.add("solution")):(e.classList.remove("fill"),e.classList.remove("cross"),e.classList.add("solution"))})}function K(){document.querySelectorAll(".cell").forEach(e=>{e.classList.remove("fill"),e.classList.remove("cross"),e.classList.remove("solution")})}function Y(){const t=document.querySelectorAll(".cell"),s=document.querySelector(".play-field").id,o=document.querySelector(".timer-minutes").textContent,n=document.querySelector(".timer-seconds").textContent,l=[],i=[s],a=[o,n];l.push(i,a);const c=[];t.forEach(d=>{d.innerText==="1"&&!d.classList.value.includes("fill")&&!d.classList.value.includes("cross")?c.push(1):d.innerText==="1"&&d.classList.value.includes("fill")?c.push(2):d.innerText==="1"&&d.classList.value.includes("cross")?c.push(3):d.innerText==="0"&&!d.classList.value.includes("fill")&&!d.classList.value.includes("cross")?c.push(0):d.innerText==="0"&&d.classList.value.includes("fill")?c.push(-1):d.innerText==="0"&&d.classList.value.includes("cross")&&c.push(-2)}),l.push(c),t[0].classList.value.includes("solution")||localStorage.setItem("NGLastGame",JSON.stringify(l))}function z(){const t=JSON.parse(localStorage.getItem("NGLastGame"));if(t!==null){const e=+t[0][0],s=+t[1][0],o=+t[1][1],n=t[2];f(),g(e,s,o);const l=document.querySelectorAll(".cell");let i=0;l.forEach(a=>{n[i]===1?a.innerText="1":n[i]===2?(a.innerText="1",a.classList.add("fill")):n[i]===3?(a.innerText="1",a.classList.add("cross")):n[i]===0?a.innerText="0":n[i]===-1?(a.innerText="0",a.classList.add("fill")):n[i]===-2&&(a.innerText="0",a.classList.add("cross")),i+=1})}}function Q(){const t=r({tag:"div",classes:["play-control"]}),e=D();return t.append(e),u({classes:["btn","play-btn","play-btn__save-game"],text:"Save game",onClick:()=>Y(),parent:t}),u({classes:["btn","play-btn","play-btn__reset-game"],text:"Reset game",onClick:()=>K(),parent:t}),u({classes:["btn","play-btn","play-btn__show-solution"],text:"Show solution",onClick:()=>j(),parent:t}),u({classes:["btn","play-btn","play-btn__continue-game"],text:"Continue last game",onClick:()=>z(),parent:t}),t}function V(t=0,e=0){const s=document.querySelector(".timer-minutes"),o=document.querySelector(".timer-seconds"),n=document.querySelector(".play-btn__show-solution"),l=document.querySelector(".play-btn__reset-game");s.textContent=t<10?`0${t}`:t,o.textContent=e<10?`0${e}`:e;let i=t,a=e,c,d;const w=()=>{a+=1,o.textContent=a,a<=9&&(o.textContent=`0${a}`),a>9&&a<=60&&(o.textContent=a),a==60&&(o.textContent="00",i+=1,s.textContent=`0${i}`,a=0),i>9&&(s.textContent=i)};document.querySelectorAll(".cell").forEach(b=>b.addEventListener("click",function(){d||b.classList.value.includes("solution")||(clearInterval(c),c=setInterval(w,1e3),d=!0)})),n.addEventListener("click",function(){clearInterval(c)});function T(){clearInterval(c),i=0,a=0,s.textContent="00",o.textContent="00",d=!1}l.addEventListener("click",T)}function g(t,e,s){f();const o=document.querySelector(".main-content"),n=F(t),l=Q();o.append(n,l),J(),U(),V(e,s)}function v(t,e){const s=r({tag:"div",classes:["level"]});r({tag:"p",classes:["level-description"],text:`${e}`,parent:s});const o=r({tag:"div",classes:["levels-container"],parent:s});for(let n=0;n<5;n+=1){const l=t+n,i=p[l-1].name,a=r({tag:"div",classes:["level-card"],id:`${l}`});a.addEventListener("click",c=>{const d=c.target.parentNode.id;y("nav-btn","active"),g(d)}),r({tag:"div",classes:["level-card__img",`level-card__img-${i}`],parent:a}),r({tag:"p",classes:["level-card__name"],text:`${i}`,parent:a}),o.append(a)}return s}function X(){const t=r({tag:"div",classes:["select-level__container"]}),e=v(1,"Easy (5x5)"),s=v(6,"Medium (10x10)"),o=v(11,"Hard (15x15)");return t.append(e,s,o),t}function Z(t){const e=t.target;y("nav-btn","active"),e.classList.add("active"),f();const s=document.querySelector(".main-content"),o=X();s.append(o)}function S(t,e){return Math.floor(t+Math.random()*(e-t))}function ee(){y("nav-btn","active"),f();const t=S(1,15);g(t)}function te(){const t=r({tag:"thead",classes:["table-head"]}),e=r({tag:"tr",classes:["table-head__row","table-row"],parent:t});return r({tag:"th",classes:["table-head__header"],text:"Name:",parent:e}),r({tag:"th",classes:["table-head__header"],text:"Difficulty:",parent:e}),r({tag:"th",classes:["table-head__header"],text:"Time:",parent:e}),t}function ne(){const t=r({tag:"tbody",classes:["table-body"]});for(let e=0;e<5;e+=1){const s=r({tag:"tr",classes:["table-body__row","table-row"]});r({tag:"td",classes:["table-body__cell"],parent:s}),r({tag:"td",classes:["table-body__cell"],parent:s}),r({tag:"td",classes:["table-body__cell"],parent:s}),t.append(s)}return t}function se(){const t=r({tag:"table",classes:["score-table"]}),e=te(),s=ne();return t.append(e,s),t}function ae(){const t=JSON.parse(localStorage.getItem("NGResultsList"));if(t!==null){let e=t.sort(function(n,l){return n.result>l.result?1:n.result<l.result?-1:0});const s=document.querySelectorAll(".table-body__row");let o=0;s.forEach(n=>{e!==null&&e[o]!==void 0&&(n.children[0].textContent=e[o].name,n.children[1].textContent=e[o].difficulty,n.children[2].textContent=e[o].result),o+=1})}}function le(t){const e=t.target;y("nav-btn","active"),e.classList.add("active"),f();const s=document.querySelector(".main-content"),o=se();s.append(o),ae()}function oe(){const t=r({tag:"div",classes:["main__nav-container"]});return u({classes:["btn","nav-btn","nav-btn__select-level"],text:"Select level",onClick:e=>Z(e),parent:t}),u({classes:["btn","nav-btn","nav-btn__start-random"],text:"Start random",onClick:()=>ee(),parent:t}),u({classes:["btn","nav-btn","nav-btn__score-table"],text:"Score table",onClick:e=>le(e),parent:t}),t}function ie(){const t=r({tag:"main",classes:["main"]}),e=r({tag:"div",classes:["wrapper","main-wrapper"],parent:t}),s=oe(),o=r({tag:"div",classes:["main-content"]});return e.append(s,o),t}function re(t){const{classes:e=[],id:s,text:o,href:n,target:l,parent:i}=t,a=document.createElement("a");return a.href=n,e.length>0&&a.classList.add(...e),s&&(a.id=s),o&&(a.textContent=o),l&&a.setAttribute("target",l),i!=null&&i.append(a),a}function ce(){const t=r({tag:"footer",classes:["footer"]}),e=r({tag:"div",classes:["wrapper","footer-wrapper"],parent:t});return r({tag:"p",classes:["footer-year"],text:"©2025",parent:e}),re({classes:["footer-link"],text:"Ihar Batura",href:"https://github.com/Ihar-Batura",target:"_blank",parent:e}),t}const de=document.querySelector("body"),ue=B(),me=ie(),fe=ce();de.append(ue,me,fe);const pe=S(1,5);g(pe);

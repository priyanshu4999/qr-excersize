(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const i="Improve your front-end skills by building projects",l="Scan the QR code to visit Frontend Mentor and take your coding skills to next level",s=document.querySelector("#app");s.classList.add("-flex-column-center");s.innerHTML=`
  <div class="-card -flex-column-center -shadow-1">
    <img src="/frame.svg" />
    <h3>${i}</h3>
    <p>${l}</p>
  </div>
`;

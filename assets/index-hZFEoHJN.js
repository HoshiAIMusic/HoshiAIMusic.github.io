(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function l(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=l(e);fetch(e.href,s)}})();const c=[{id:"watch",label:"視聴",labelEn:"Watch & social"},{id:"listen",label:"聴取",labelEn:"Listen"}],p=[{id:"youtube",group:"watch",label:"YouTube",handle:"Hoshi AI Music",href:"https://www.youtube.com/@hoshiaimusic"},{id:"x",group:"watch",label:"X",handle:"@YipAIArt",href:"https://x.com/YipAIArt"},{id:"instagram",group:"watch",label:"Instagram",handle:"@hoshi_ai_music",href:"https://www.instagram.com/hoshi_ai_music"},{id:"tiktok",group:"watch",label:"TikTok",handle:"@hoshiaimusic",href:"https://www.tiktok.com/@hoshiaimusic"},{id:"bilibili",group:"watch",label:"Bilibili",handle:"Hoshi AI Music",href:"https://space.bilibili.com/3744991918689168"},{id:"spotify",group:"listen",label:"Spotify",handle:"Hoshi AI Music",href:"https://open.spotify.com/artist/1i7fz7dQDFHQLPOsi7rb1M"},{id:"apple-music",group:"listen",label:"Apple Music",handle:"Hoshi AI Music",href:"https://music.apple.com/my/artist/hoshi-ai-music/6794892238"}];function u(){return p.filter(t=>t.href.trim().length>0)}function n(t){return t.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function h(t){return String(t).padStart(2,"0")}function d(t,i){const l=t.handle.trim(),a=n(t.label),e=l?`<span class="plate-handle">${n(l)}</span>`:"",s=n(`${t.label}${l?"："+l:""}（新しいタブで開く）`);return`
    <a
      class="plate"
      href="${n(t.href)}"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="${s}"
    >
      <span class="plate-num">${h(i)}</span>
      <span class="plate-body">
        <span class="plate-label">${a}</span>
        ${e}
      </span>
      <span class="plate-go" aria-hidden="true">↗</span>
    </a>
  `}function f(){const t=document.querySelector("[data-index]"),i=u();if(!t)return;if(i.length===0){t.remove();return}const l=c.map(a=>{const e=i.filter(r=>r.group===a.id);if(e.length===0)return"";const s=e.map((r,o)=>d(r,o+1)).join("");return`
        <div class="group">
          <p class="group-kicker">
            <span>${n(a.label)}</span>
            <span class="kicker-en">${n(a.labelEn)}</span>
          </p>
          <nav class="plates" aria-label="${n(a.labelEn)}">
            ${s}
          </nav>
        </div>
      `}).join("");t.innerHTML=`
    <p class="kicker"><span>案内</span><span class="kicker-en">Index</span></p>
    <div class="index-groups">
      ${l}
    </div>
  `}f();

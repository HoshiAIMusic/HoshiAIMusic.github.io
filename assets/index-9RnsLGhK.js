(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();const p=[{id:"seed-destiny-12",title:"最新 SEED/DESTINY 名曲12選 Mix",href:"https://youtu.be/jupemzTWCOM"},{id:"bleach-10",title:"BLEACH 10曲公开版",href:"https://youtu.be/hus3kAIj3Bw"},{id:"inuyasha",title:"犬夜叉 名曲Mix",href:"https://youtu.be/Yfm6_wpG304"},{id:"sao-12",title:"SAO 名曲12選 Mix",href:"https://youtu.be/bHJylOKzJjM"},{id:"gundam-seed-vol2",title:"ガンダムSEED 名曲メドレー Vol.2",href:"https://youtu.be/9YXQBuTk7Vc"}],u=[{id:"watch",label:"視聴",labelEn:"Watch & social"},{id:"listen",label:"聴取",labelEn:"Listen"}],h=[{id:"youtube",group:"watch",label:"YouTube",handle:"Hoshi AI Music",href:"https://www.youtube.com/@hoshiaimusic"},{id:"x",group:"watch",label:"X",handle:"@YipAIArt",href:"https://x.com/YipAIArt"},{id:"instagram",group:"watch",label:"Instagram",handle:"@hoshi_ai_music",href:"https://www.instagram.com/hoshi_ai_music"},{id:"tiktok",group:"watch",label:"TikTok",handle:"@hoshiaimusic",href:"https://www.tiktok.com/@hoshiaimusic"},{id:"bilibili",group:"watch",label:"Bilibili",handle:"Hoshi AI Music",href:"https://space.bilibili.com/3744991918689168"},{id:"spotify",group:"listen",label:"Spotify",handle:"Hoshi AI Music",href:"https://open.spotify.com/artist/1i7fz7dQDFHQLPOsi7rb1M"},{id:"apple-music",group:"listen",label:"Apple Music",handle:"Hoshi AI Music",href:"https://music.apple.com/my/artist/hoshi-ai-music/6794892238"}];function d(){return h.filter(e=>e.href.trim().length>0)}function f(){return p.filter(e=>e.href.trim().length>0)}function n(e){return e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function o(e){return String(e).padStart(2,"0")}function m(e,a){const i=e.handle.trim(),l=n(e.label),t=i?`<span class="plate-handle">${n(i)}</span>`:"",s=n(`${e.label}${i?"："+i:""}（新しいタブで開く）`);return`
    <a
      class="plate"
      href="${n(e.href)}"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="${s}"
    >
      <span class="plate-num">${o(a)}</span>
      <span class="plate-body">
        <span class="plate-label">${l}</span>
        ${t}
      </span>
      <span class="plate-go" aria-hidden="true">↗</span>
    </a>
  `}function b(e,a){const i=n(e.title),l=n(`${e.title}（YouTube・新しいタブで開く）`);return`
    <a
      class="plate plate-mix"
      href="${n(e.href)}"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="${l}"
    >
      <span class="plate-num">${o(a)}</span>
      <span class="plate-body">
        <span class="plate-label">MIX</span>
        <span class="plate-handle">${i}</span>
      </span>
      <span class="plate-go" aria-hidden="true">↗</span>
    </a>
  `}function g(){const e=document.querySelector("[data-index]"),a=d();if(!e)return;if(a.length===0){e.remove();return}const i=u.map(l=>{const t=a.filter(r=>r.group===l.id);if(t.length===0)return"";const s=t.map((r,c)=>m(r,c+1)).join("");return`
        <div class="group">
          <p class="group-kicker">
            <span>${n(l.label)}</span>
            <span class="kicker-en">${n(l.labelEn)}</span>
          </p>
          <nav class="plates" aria-label="${n(l.labelEn)}">
            ${s}
          </nav>
        </div>
      `}).join("");e.innerHTML=`
    <div class="index-groups">
      ${i}
    </div>
  `}function y(){const e=document.querySelector("[data-mixes]"),a=f();if(!e)return;if(a.length===0){e.remove();return}const i=a.map((l,t)=>b(l,t+1)).join("");e.innerHTML=`
    <p class="kicker"><span>名曲MIX</span><span class="kicker-en">Mixes</span></p>
    <nav class="plates" aria-label="名曲MIX">
      ${i}
    </nav>
  `}g();y();

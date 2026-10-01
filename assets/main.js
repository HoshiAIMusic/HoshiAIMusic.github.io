// ============================================================
//  Hoshi AI Music — 更新するときはここのリストだけ触ればOK
//  新作を追加: COVERS の先頭に1行足す (isNew:true で NEW バッジ)
// ============================================================

const CHANNEL = "https://www.youtube.com/@hoshiaimusic";

// ★ chAngE は公開したら href を動画の URL に変えてください (今はチャンネルのトップ)
const COVERS = [
  { title: "chAngE", sub: "miwa · Cover by Hoshi AI Music", img: "/assets/img/cover-change.jpg", href: CHANNEL, isNew: true },
  { title: "Overfly", sub: "Cover by Hoshi AI Music", img: "/assets/img/cover-overfly.jpg", href: "https://youtu.be/oNNPnNcCP_s" },
  { title: "Star Ring Child", sub: "English ver. · ガンダムUC RE:0096 ED", img: "/assets/img/cover-starring.jpg", href: "https://youtu.be/tRmj195SN9E" },
  { title: "一縷", sub: "Cover by Hoshi AI Music", img: "/assets/img/cover-hitosuji.jpg", href: "https://youtu.be/sMQa8sJ6ki4" },
];

const MIXES = [
  { title: "SEED/DESTINY 名曲12選", href: "https://youtu.be/jupemzTWCOM" },
  { title: "SAO Mix", href: "https://youtu.be/bHJylOKzJjM" },
  { title: "SEED DESTINY Piano & Orchestra BGM", href: "https://youtu.be/BqKrKgZV924" },
  { title: "犬夜叉 Mix", href: "https://youtu.be/Yfm6_wpG304" },
  { title: "BLEACH 10 flagship", href: "https://youtu.be/hus3kAIj3Bw" },
];

const GROUPS = [
  { id: "watch", label: "視聴", en: "Watch & social" },
  { id: "listen", label: "聴取", en: "Listen" },
];
const LINKS = [
  { group: "watch", label: "YouTube", handle: "Hoshi AI Music", href: CHANNEL },
  { group: "watch", label: "X", handle: "@YipAIArt", href: "https://x.com/YipAIArt" },
  { group: "watch", label: "Instagram", handle: "@hoshi_ai_music", href: "https://www.instagram.com/hoshi_ai_music" },
  { group: "watch", label: "TikTok", handle: "@hoshiaimusic", href: "https://www.tiktok.com/@hoshiaimusic" },
  { group: "watch", label: "Bilibili", handle: "Hoshi AI Music", href: "https://space.bilibili.com/3744991918689168" },
  { group: "listen", label: "Spotify", handle: "Hoshi AI Music", href: "https://open.spotify.com/artist/1i7fz7dQDFHQLPOsi7rb1M" },
  { group: "listen", label: "Apple Music", handle: "Hoshi AI Music", href: "https://music.apple.com/my/artist/hoshi-ai-music/6794892238" },
];

// ---------------- 描画 ----------------
const esc = (s) => String(s).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
const pad = (n) => String(n).padStart(2, "0");
const ytId = (u) => (u.match(/youtu\.be\/([\w-]{11})/) || u.match(/[?&]v=([\w-]{11})/) || [])[1];
const ext = 'target="_blank" rel="noopener noreferrer"';

function card({ title, sub, img, href, isNew }) {
  return `<a class="card${isNew ? " card-new" : ""}" href="${esc(href)}" ${ext} aria-label="${esc(title)}（YouTube・新しいタブで開く）">
    <img src="${esc(img)}" alt="" loading="lazy" width="800" height="450" />
    <span class="card-body"><span class="card-title">${esc(title)}</span>${sub ? `<span class="card-sub">${esc(sub)}</span>` : ""}<span class="card-go">YouTube ↗</span></span>
  </a>`;
}

function mount(sel, html) { const el = document.querySelector(sel); if (el) el.innerHTML = html; }

mount("[data-covers]", COVERS.filter((c) => c.href).map(card).join(""));
mount("[data-mixes]", MIXES.filter((m) => m.href).map((m) => {
  const id = ytId(m.href);
  return card({ ...m, sub: "MIX", img: id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : "/featured/bleach-mix.jpg" });
}).join(""));
mount("[data-links]", GROUPS.map((g) => {
  const items = LINKS.filter((l) => l.group === g.id && l.href);
  if (!items.length) return "";
  return `<div class="group"><p class="group-kicker">${esc(g.label)}<small>${esc(g.en)}</small></p><nav class="plates" aria-label="${esc(g.en)}">${items.map((l, i) =>
    `<a class="plate" href="${esc(l.href)}" ${ext} aria-label="${esc(l.label)}：${esc(l.handle)}（新しいタブで開く）"><span class="plate-num">${pad(i + 1)}</span><span><span class="plate-label">${esc(l.label)}</span><span class="plate-handle">${esc(l.handle)}</span></span><span class="plate-go" aria-hidden="true">↗</span></a>`).join("")}</nav></div>`;
}).join(""));

// ヒーローの「最新MV」ボタン = COVERS の先頭
const latest = COVERS[0];
const btn = document.querySelector("[data-latest]");
if (btn && latest && latest.href) { btn.href = latest.href; btn.textContent = `▶ 最新MV「${latest.title}」を観る`; }

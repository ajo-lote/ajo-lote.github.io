// Generador estático sin dependencias. Uso: node src/build.mjs
// Lee src/content.mjs + src/brand-projects.json y escribe en/, es/, assets/, 404.html, sitemap.xml, robots.txt, index.html.
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";
import { SITE, T, CASE_ORDER } from "./content.mjs";
import { BRAND_ES } from "./brand-es.mjs";

const SRC = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(SRC, "..");
const LANGS = ["en", "es"];
const missing = new Set();

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const slugify = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const write = (rel, html) => {
  const f = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(f), { recursive: true });
  fs.writeFileSync(f, html);
};
const exists = (rel) => fs.existsSync(path.join(ROOT, rel));
const productImg = (name) => {
  const rel = `uploads/product/${name}`;
  if (exists(rel)) return `/${rel}`;
  missing.add(rel);
  return null;
};

// Tamaños de imagen (los genera tools/make-sizes.py)
const SIZES = (() => { try { return JSON.parse(fs.readFileSync(path.join(ROOT, "uploads/product/sizes.json"), "utf8")); } catch { return {}; } })();
const COLUMN = "(min-width: 960px) 880px, calc(100vw - 40px)";
function pic(name, alt, { sizes = COLUMN, eager = false, zoom = true } = {}) {
  const u = productImg(name);
  if (!u) return "";
  const m = SIZES[name];
  const base = name.replace(/\.webp$/, "");
  const set = m && m.v.length ? ` srcset="${[...m.v.map((w) => `/uploads/product/w/${base}-${w}.webp ${w}w`), `${u} ${m.w}w`].join(", ")}" sizes="${sizes}"` : "";
  const dim = m ? ` width="${m.w}" height="${m.h}"` : "";
  return `<img src="${u}"${set}${dim} alt="${esc(alt)}"${zoom ? ` data-full="${u}"` : ""} ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">`;
}

// CSS
const css = fs.readFileSync(path.join(SRC, "site.css"), "utf8");
const cssHash = crypto.createHash("md5").update(css).digest("hex").slice(0, 8);
fs.mkdirSync(path.join(ROOT, "assets"), { recursive: true });
fs.writeFileSync(path.join(ROOT, "assets/site.css"), css);

const FONTS =
  "https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400&display=swap";

const brandProjects = JSON.parse(fs.readFileSync(path.join(SRC, "brand-projects.json"), "utf8")).map((p) => ({ ...p, slug: slugify(p.name) }));

const SECTIONS = ["product", "lab", "about", "contact"];

function head({ lang, rel, title, desc, noindex, extra = "" }) {
  const t = T[lang];
  const alt = LANGS.map((l) => `<link rel="alternate" hreflang="${l}" href="${SITE.domain}/${l}${rel}">`).join("\n");
  return `<!doctype html>
<html lang="${t.htmlLang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<meta name="theme-color" content="#F6F0DE">
${noindex ? '<meta name="robots" content="noindex">' : ""}
<link rel="canonical" href="${SITE.domain}/${lang}${rel}">
${alt}
<link rel="alternate" hreflang="x-default" href="${SITE.domain}/en${rel}">
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${SITE.domain}/${lang}${rel}">
<meta property="og:locale" content="${lang === "es" ? "es_MX" : "en_US"}">
<link rel="icon" type="image/png" sizes="64x64" href="/uploads/favicon-64.png">
<link rel="icon" type="image/png" sizes="32x32" href="/uploads/favicon-32.png">
<link rel="shortcut icon" href="/favicon.ico">
<link rel="apple-touch-icon" href="/uploads/favicon-180.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="${FONTS}">
<link rel="stylesheet" href="/assets/site.css?v=${cssHash}">
${extra}
</head>`;
}

function header(lang, active, cls = "") {
  const t = T[lang];
  const other = lang === "en" ? "es" : "en";
  const links = SECTIONS.map(
    (s) => `<a href="${s === "product" ? `/${lang}/#projects` : `/${lang}/${s}/`}"${active === s ? ' aria-current="page"' : ""}>${esc(t.nav[s])}</a>`
  ).join("");
  return `<body${cls ? ` class="${cls}"` : ""}>
<a class="skip" href="#main">${esc(t.skip)}</a>
<header class="site-header"><div class="wrap">
<a class="brand" href="/${lang}/">Diana <em>Becerra</em></a>
<nav class="nav" aria-label="Main">${links}<a class="lang" href="__ALT__" hreflang="${other}" lang="${other}" aria-label="${other === "es" ? "Español" : "English"}">${t.switchTo}</a></nav>
</div></header>
<main id="main">`;
}

function footer(lang) {
  const t = T[lang];
  return `</main>
<footer class="site-footer"><div class="wrap">
<span>${esc(t.footer.rights)} · ${esc(t.footer.loc)}</span>
<span><a href="${SITE.linkedin}" rel="noopener">LinkedIn</a> · <a href="${SITE.dribbble}" rel="noopener">Dribbble</a> · <a href="mailto:${SITE.email}">${esc(SITE.email)}</a></span>
</div></footer>
</body>
</html>`;
}

function page({ lang, rel, active, title, desc, body, noindex, cls, extra }) {
  const altLang = lang === "en" ? "es" : "en";
  const html = head({ lang, rel, title, desc, noindex, extra }) + header(lang, active, cls).replace("__ALT__", `/${altLang}${rel}`) + body + footer(lang);
  write(`${lang}${rel}index.html`, html);
}

// Prototipos de Figma ocultos por ahora (cambiar a true para mostrarlos de nuevo).
const SHOW_PROTOTYPES = false;
const SHOW_LAB_DETAILS = false; // decidí / qué hizo la IA / qué cambiaría (datos siguen en content.mjs)
const SHOW_LAB_SOON = false;

// ---------- Components
function caseCard(lang, key, idx, brief = false) {
  const c = T[lang].cases[key];
  // Portada vertical opcional: uploads/product/cover-<key>.webp (4:5, ej. 1200x1500). Sin ella: color sólido.
  const coverRel = `uploads/product/cover-${key}.webp`;
  const hasCover = exists(coverRel);
  const textOn = c.light ? "on-dark" : "";
  return `<a class="card" href="/${lang}/product/${key}/">
<div class="art ${hasCover ? "has-img" : ""} ${textOn}" style="background:${c.color}">
${hasCover ? `<img src="/${coverRel}" alt="${esc(c.title)}" width="1200" height="1500" loading="lazy" decoding="async">` : `<span class="tags">${esc(c.year)}</span>
<span class="name">${esc(c.title)}</span>`}
</div>
<div class="info"><span class="y">${esc(c.tags)}</span><span class="t">${esc(c.sub)}</span><span class="s">${esc(brief ? c.short || c.summary : c.summary)}</span></div>
</a>`;
}

function brandThumbs(lang) {
  const pick = ["Faro Grill", "Constanza Reserve", "Vayu"];
  return `<div class="thumbs">${pick
    .map((n) => {
      const p = brandProjects.find((x) => x.name === n);
      return `<a href="/${lang}/brand/#${p.slug}" aria-label="${esc(p.name)}"><img src="/${esc(p.img)}" alt="${esc(p.name)}" loading="lazy" decoding="async"></a>`;
    })
    .join("")}</div>`;
}

// ---------- Pages
for (const lang of LANGS) {
  const t = T[lang];

  // Home
  page({
    lang, rel: "/", active: null, title: t.home.title, desc: t.home.desc,
    body: `<section class="hero"><div class="wrap">
<p class="eyebrow">${esc(t.role)}</p>
<h1 class="display">${t.home.h1}</h1>
<p class="lede">${esc(t.home.sub)}</p>
<div class="actions"><a class="btn solid" href="/${lang}/#projects">${esc(t.home.ctaProduct)}</a><a class="btn ghost" href="/${lang}/lab/">${esc(t.home.ctaLab)}</a></div>
</div></section>
<section class="section" id="projects"><div class="wrap">
<div class="sec-head"><h2 class="h2">${esc(t.home.selected)}</h2></div>
<div class="cards">${CASE_ORDER.map((k, i) => caseCard(lang, k, i, true)).join("")}</div>
</div></section>
<section class="section"><div class="wrap"><div class="band lab">
<p class="eyebrow" style="color:inherit">${esc(t.home.labKicker)}</p>
<h2 class="h2" style="margin-top:14px">${esc(t.home.labH)}</h2>
${t.home.labP ? `<p class="lede">${esc(t.home.labP)}</p>` : ""}
<div class="actions"><a class="btn solid" href="/${lang}/lab/">${esc(t.home.labCta)} →</a></div>
</div></div></section>
<section class="section"><div class="wrap brand-strip">
<div><p class="eyebrow">${esc(t.home.brandKicker)}</p><h2 class="h2" style="margin-top:14px">${esc(t.home.brandH)}</h2>
<p class="lede" style="margin-top:14px;color:var(--muted)">${esc(t.home.brandHP)}</p>
<div class="actions"><a class="btn ghost" href="/${lang}/brand/">${esc(t.home.brandCta)} →</a></div></div>
${brandThumbs(lang)}
</div></section>`,
  });

  // Product index: ya no existe como página; la lista de proyectos vive en el inicio (#projects)
  write(`${lang}/product/index.html`, `<!doctype html><html lang="${t.htmlLang}"><head><meta charset="utf-8"><title>${esc(t.product.title)}</title><meta name="robots" content="noindex"><link rel="canonical" href="${SITE.domain}/${lang}/"><meta http-equiv="refresh" content="0;url=/${lang}/#projects"><script>location.replace("/${lang}/#projects");</script></head><body><a href="/${lang}/#projects">${esc(t.nav.product)}</a></body></html>\n`);

  // Case studies
  CASE_ORDER.forEach((key, i) => {
    const c = t.cases[key];
    const next = t.cases[CASE_ORDER[(i + 1) % CASE_ORDER.length]];
    const nextKey = CASE_ORDER[(i + 1) % CASE_ORDER.length];
    const hero = productImg(c.hero[0]);
    const m = t.product.meta;
    const metaRows = ["role", "year", "focus", "team", "status"].filter((k) => c.meta[k]).map((k) => `<div><dt>${esc(m[k])}</dt><dd>${esc(c.meta[k])}</dd></div>`).join("");
    const sections = c.sections
      .map((s) => {
        const paras = (s.p || []).map((x) => `<p>${esc(x)}</p>`).join("");
        const list = s.list ? `<ul class="list">${s.list.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>` : "";
        const figs = (s.img || []).map((f) => productImg(f)).filter(Boolean).map((u) => `<figure>${pic(u.split("/").pop(), `${s.h} — ${c.title}`)}</figure>`).join("");
        const nImg = (s.img || []).map((f) => productImg(f)).filter(Boolean).length;
        const figsHtml = !figs ? "" : s.carousel && nImg > 1
          ? `<div class="carousel" data-carousel><div class="figs track" tabindex="0" aria-label="${esc(s.h)}">${figs}</div><div class="car-nav"><button type="button" data-dir="-1" aria-label="${lang === "es" ? "Anterior" : "Previous"}">←</button><span class="car-count" aria-live="polite">1 / ${nImg}</span><button type="button" data-dir="1" aria-label="${lang === "es" ? "Siguiente" : "Next"}">→</button></div></div>`
          : `<div class="figs">${figs}</div>`;
        return `<section class="case-sec">${figsHtml}<div class="txt"><h2>${esc(s.h)}</h2>${paras}${list}</div></section>`;
      })
      .join("");
    const introU = c.introImg ? productImg(c.introImg) : null;
    const introFig = introU ? `<figure class="intro-fig">${pic(c.introImg, c.title)}</figure>` : "";
    const figma = SHOW_PROTOTYPES && c.figma ? `<p style="margin-top:20px"><a class="btn ghost" href="${SITE.figmaBrel}" rel="noopener" target="_blank">${esc(t.product.figma)}</a></p>` : "";
    const protoUrl = SHOW_PROTOTYPES && c.figma ? SITE.figmaBrel.replace("https://www.figma.com/", "https://embed.figma.com/") + "&embed-host=share" : null;
    const proto = protoUrl ? `<section class="case-sec wide"><div class="figs"><div class="proto"><iframe src="${protoUrl}" title="${esc(c.title)} — ${esc(t.product.protoH)}" loading="lazy" allowfullscreen></iframe></div></div><div class="txt"><h2>${esc(t.product.protoH)}</h2><p class="muted">${esc(t.product.protoNote)}</p></div></section>` : "";
    page({
      lang, rel: `/product/${key}/`, active: "product",
      title: `${c.title} — ${c.sub} · Diana Becerra`, desc: c.summary,
      body: `<section class="page-head" style="padding-bottom:0"><div class="wrap">
<p class="eyebrow"><a href="/${lang}/#projects" style="text-decoration:none">${esc(t.product.back)}</a> &nbsp;·&nbsp; ${esc(c.tags)}</p>
<h1 class="display" style="margin-top:20px">${esc(c.title)}</h1>
<p class="lede">${esc(c.sub)}</p>
${hero ? `<div class="case-hero" style="margin-top:36px">${pic(c.hero[0], c.title, { eager: true })}</div>` : `<div class="case-hero block ${c.light ? "on-dark" : ""}" style="background:${c.color};margin-top:36px"><span class="name">${esc(c.year)}</span></div>`}
<dl class="meta">${metaRows}</dl>
<p class="case-intro">${esc(c.intro)}</p>${figma}${introFig}
</div></section>
<div class="wrap">${proto}${sections}
<dialog class="zoom" id="zoom" aria-label="${lang === "es" ? "Imagen ampliada" : "Enlarged image"}"><button type="button" class="zoom-x" aria-label="${lang === "es" ? "Cerrar" : "Close"}">×</button><div class="zoom-box"><img alt=""></div></dialog>
<script>(function(){var d=document.getElementById("zoom"),im=d.querySelector("img");function open(src,alt){im.alt=alt||"";im.src=src;if(d.showModal)d.showModal();else d.setAttribute("open","")}document.addEventListener("click",function(e){var t=e.target.closest("img[data-full]");if(t&&!e.target.closest("dialog"))open(t.dataset.full,t.alt)});d.addEventListener("click",function(){d.close&&d.close()});d.addEventListener("close",function(){im.removeAttribute("src")});document.querySelectorAll("img[data-full]").forEach(function(i){i.tabIndex=0;i.setAttribute("role","button");i.addEventListener("keydown",function(e){if(e.key==="Enter"||e.key===" "){e.preventDefault();open(i.dataset.full,i.alt)}})})})();</script>
<script>(function(){document.querySelectorAll("[data-carousel]").forEach(function(c){var t=c.querySelector(".track"),n=c.querySelectorAll("figure").length,k=c.querySelector(".car-count");function i(){return Math.round(t.scrollLeft/t.clientWidth)}function u(){k.textContent=(i()+1)+" / "+n}t.addEventListener("scroll",u,{passive:true});c.querySelectorAll("button").forEach(function(b){b.addEventListener("click",function(){t.scrollTo({left:(i()+Number(b.dataset.dir))*t.clientWidth,behavior:"smooth"})})});t.addEventListener("keydown",function(e){if(e.key==="ArrowRight")t.scrollBy({left:t.clientWidth,behavior:"smooth"});if(e.key==="ArrowLeft")t.scrollBy({left:-t.clientWidth,behavior:"smooth"})})})})();</script>
<div class="case-next"><span class="eyebrow">${esc(t.product.next)}</span><a class="big" href="/${lang}/product/${nextKey}/">${esc(next.title)} →</a></div></div>`,
      cls: "case",
    });
  });

  // Brand
  const tiles = brandProjects
    .map((p) => {
      const es = lang === "es" ? BRAND_ES[p.name] : null;
      return `<li><a class="work" href="#${p.slug}" data-p="${p.slug}"><span class="im"><img src="/${esc(p.img)}" alt="" width="625" height="800" loading="lazy" decoding="async">${p.imgHover ? `<img class="h" src="/${esc(p.imgHover)}" alt="" width="625" height="800" loading="lazy" decoding="async">` : ""}</span><span class="nm">${esc(p.name)}</span><span class="ty">${esc(es ? es.type : p.type)}</span></a></li>`;
    })
    .join("");
  const sheets = brandProjects
    .map((p) => {
      const es = lang === "es" ? BRAND_ES[p.name] : null;
      const seen = new Set();
      const imgs = p.layout.cells
        .filter((c) => typeof c !== "string" && c.img && !seen.has(c.img) && seen.add(c.img))
        .map((c) => `<img src="/${esc(c.img)}" alt="" loading="lazy" decoding="async">`)
        .join("");
      const ctx = (es ? es.context : p.context).replace("Casa 231", `<a href="https://www.instagram.com/casa_231/" rel="noopener" target="_blank">Casa 231</a>`);
      return `<dialog class="proj" id="p-${p.slug}" aria-labelledby="h-${p.slug}"><button type="button" class="proj-x" aria-label="${lang === "es" ? "Cerrar" : "Close"}">×</button><div class="proj-in">
<header><p class="eyebrow">${esc(es ? es.type : p.type)} · ${esc(p.loc)}</p><h2 id="h-${p.slug}">${esc(p.name)}</h2><p class="lede">${esc(es ? es.description : p.description)}</p></header>
<div class="masonry">${imgs}</div>
<div class="foot2"><div><p class="l">${esc(t.brand.done)}</p><p>${esc(es ? es.whatDone : p.whatDone)}</p></div><div><p class="l">${esc(t.brand.context)}</p><p>${ctx}</p></div></div>
</div></dialog>`;
    })
    .join("");
  const bp = `<ul class="works">${tiles}</ul>${sheets}<noscript><style>dialog.proj{display:block;position:static;margin:0 auto 48px}.proj-x{display:none}</style></noscript>
<script>(function(){var cur=null;function open(s){var d=document.getElementById("p-"+s);if(!d)return;cur=d;if(d.showModal)d.showModal();else d.setAttribute("open","");d.scrollTop=0;history.replaceState(null,"","#"+s)}function close(){history.replaceState(null,"",location.pathname+location.search)}document.querySelectorAll("a.work").forEach(function(a){a.addEventListener("click",function(e){e.preventDefault();open(a.dataset.p)})});document.querySelectorAll("dialog.proj").forEach(function(d){d.addEventListener("close",close);d.addEventListener("click",function(e){if(e.target===d)d.close()});d.querySelector(".proj-x").addEventListener("click",function(){d.close()})});if(location.hash.length>1)open(location.hash.slice(1))})();</script>`;
  page({
    lang, rel: "/brand/", active: "product", title: t.brand.title, desc: t.brand.desc,
    body: `<section class="page-head"><div class="wrap">
<p class="eyebrow"><a href="/${lang}/#projects" style="text-decoration:none">${esc(t.brand.back)}</a> &nbsp;·&nbsp; ${esc(t.brand.kicker)}</p>
<h1 class="display" style="margin-top:20px">${t.brand.h1}</h1>
<p class="lede">${esc(t.brand.p)}</p>
</div></section>
<div class="wrap">${bp}</div>`,
  });

  // Lab
  const labCards = t.lab.items
    .map((it) => {
      const status = it.status === "live" ? t.lab.live : t.lab.ongoing;
      const ext = it.external ? ' rel="noopener" target="_blank"' : "";
      return `<article class="lab-card">
<div class="top" style="background:${it.color}"><h2>${esc(it.title)}</h2><span class="pill">${esc(status)}${it.year ? " · " + esc(it.year) : ""}</span></div>
<p class="sum">${esc(it.summary)}</p>
${[["question", it.question], ["decided", it.decided], ["ai", it.ai], ["change", it.change]].filter(([k, v]) => v && (SHOW_LAB_DETAILS || k === "question")).length ? `<dl>${[["question", it.question], ["decided", it.decided], ["ai", it.ai], ["change", it.change]].filter(([k, v]) => v && (SHOW_LAB_DETAILS || k === "question")).map(([k, v]) => `<div><dt>${esc(t.lab[k])}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>` : ""}
<p class="go"><a href="${it.href}"${ext}>${esc(it.external ? t.lab.openExt : t.lab.open)}</a></p>
</article>`;
    })
    .join("");
  page({
    lang, rel: "/lab/", active: "lab", title: t.lab.title, desc: t.lab.desc,
    body: `<section class="page-head"><div class="wrap">
<p class="eyebrow">${esc(t.lab.kicker)}</p>
<h1 class="display">${t.lab.h1}</h1>
<p class="lede">${esc(t.lab.p)}</p>
</div></section>
<section class="section" style="padding-top:0;border-top:0"><div class="wrap"><div class="lab-grid">${labCards}</div>${SHOW_LAB_SOON ? `<p class="lab-soon">${esc(t.lab.soon)}</p>` : ""}</div></section>`,
  });

  // About
  const a = t.about;
  const photoGrid = (prefix) =>
    Array.from({ length: 8 }, (_, i) => {
      const rel = `uploads/about/${prefix}-0${i + 1}.webp`;
      if (exists(rel)) return `<li><img src="/${rel}" alt="" loading="lazy" decoding="async"></li>`;
      missing.add(rel);
      return `<li class="ph" aria-hidden="true"></li>`;
    }).join("");
  page({
    lang, rel: "/about/", active: "about", title: a.title, desc: a.desc,
    body: `<section class="page-head" style="padding-bottom:0"><div class="wrap about-wrap">
<p class="eyebrow">${esc(a.kicker)}</p>
<h1 class="display statement" data-reveal>${a.h1}</h1>
</div></section>
<section class="section nb"><div class="wrap about-wrap">
<div class="about-intro"><div class="about-photo small"><img src="/uploads/IMG_8695.webp" alt="Diana Becerra" decoding="async"></div>
<div class="about-body"><p class="lede">${esc(a.p1)}</p><p>${esc(a.p2)}</p></div></div>
</div></section>
<section class="section nb"><div class="wrap about-wrap">
<h2 class="h-sec">${esc(a.museumsLine)}</h2>
<ul class="pgrid">${photoGrid("museum")}</ul>
<p class="line-link"><a href="/${lang}/lab/art-library/">${esc(a.museumsLink)}</a></p>
</div></section>
<section class="section nb"><div class="wrap about-wrap">
<h2 class="h-sec">${esc(a.natureLine)}</h2>
<ul class="pgrid">${photoGrid("nature")}</ul>
</div></section>
<section class="section nb"><div class="wrap about-wrap">
<p class="eyebrow eb-mark" style="margin-bottom:18px">${t.nav.about === "About" ? "Experience" : "Experiencia"}</p>
<p class="statement2" data-reveal>${a.expH}</p>
<p class="about-p3">${esc(a.p3)}</p>
<p><a href="/${lang}/brand/">${esc(a.brandLink)}</a></p>
</div></section>
<section class="section nb"><div class="wrap about-wrap">
<p class="eyebrow" style="margin-bottom:8px">${esc(a.toolkitH)}</p>
<ul class="tk">${a.toolkit.map(([n, r, c]) => `<li><span class="logo" style="background:${c}" aria-hidden="true">${esc(n[0])}</span><span><b>${esc(n)}</b><small>${esc(r)}</small></span></li>`).join("")}</ul>
</div></section>
<script>
(function () {
  try {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var els = [].slice.call(document.querySelectorAll("[data-reveal]"));
    var groups = els.map(function (el) {
      var words = [];
      var walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, { acceptNode: function (n) { return n.parentNode.closest && n.parentNode.closest(".h1-sub") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT; } });
      var nodes = []; while (walker.nextNode()) nodes.push(walker.currentNode);
      nodes.forEach(function (n) {
        var parts = n.textContent.split(/(\\s+)/), frag = document.createDocumentFragment();
        parts.forEach(function (p) {
          if (!p) return;
          if (/^\\s+$/.test(p)) { frag.appendChild(document.createTextNode(p)); return; }
          var sp = document.createElement("span"); sp.className = "w"; sp.textContent = p; frag.appendChild(sp); words.push(sp);
        });
        n.parentNode.replaceChild(frag, n);
      });
      return { el: el, words: words };
    });
    document.documentElement.classList.add("js-reveal");
    function update() {
      var h = window.innerHeight;
      groups.forEach(function (g) {
        var r = g.el.getBoundingClientRect();
        var prog = (h * 0.9 - r.top) / (r.height + h * 0.35);
        var lit = Math.round(Math.max(0, Math.min(1, prog)) * g.words.length * 1.15);
        g.words.forEach(function (w, i) { w.classList.toggle("on", i < lit); });
      });
    }
    update(); window.addEventListener("scroll", update, { passive: true }); window.addEventListener("resize", update);
  } catch (e) {}
})();
</script>`,
  });

  // Contact
  const c = t.contact;
  page({
    lang, rel: "/contact/", active: "contact", title: c.title, desc: c.desc,
    body: `<section class="page-head"><div class="wrap">
<p class="eyebrow">${esc(c.kicker)}</p>
<h1 class="display">${c.h1}</h1>
<p class="lede">${esc(c.p)}</p>
</div></section>
<section class="section" style="padding-top:0;border-top:0"><div class="wrap">
<a class="mail" href="mailto:${SITE.email}">${esc(SITE.email)} <span aria-hidden="true">↗</span></a>
<div class="social"><a href="${SITE.linkedin}" rel="noopener">LinkedIn ↗</a><a href="${SITE.dribbble}" rel="noopener">Dribbble ↗</a><a href="${SITE.instagram}" rel="noopener">Instagram ↗</a></div>
</div></section>`,
  });
}

// Root: language chooser
write(
  "index.html",
  `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Diana Becerra — Product designer</title>
<meta name="description" content="${esc(T.en.home.desc)}">
<link rel="canonical" href="${SITE.domain}/en/">
<link rel="alternate" hreflang="en" href="${SITE.domain}/en/">
<link rel="alternate" hreflang="es" href="${SITE.domain}/es/">
<link rel="alternate" hreflang="x-default" href="${SITE.domain}/en/">
<link rel="icon" type="image/png" sizes="64x64" href="/uploads/favicon-64.png">
<link rel="icon" type="image/png" sizes="32x32" href="/uploads/favicon-32.png">
<link rel="shortcut icon" href="/favicon.ico">
<link rel="stylesheet" href="/assets/site.css?v=${cssHash}">
<script>
try {
  var l = (navigator.language || "en").toLowerCase().indexOf("es") === 0 ? "es" : "en";
  location.replace("/" + l + "/" + location.hash);
} catch (e) {}
</script>
</head>
<body>
<main class="wrap" style="padding-top:20vh;text-align:center">
<p class="display">Diana <em>Becerra</em></p>
<p class="actions" style="justify-content:center"><a class="btn solid" href="/en/">English</a><a class="btn ghost" href="/es/">Español</a></p>
</main>
</body>
</html>`
);

// 404
write(
  "404.html",
  `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>404 — Diana Becerra</title>
<meta name="robots" content="noindex">
<link rel="icon" type="image/png" sizes="64x64" href="/uploads/favicon-64.png">
<link rel="icon" type="image/png" sizes="32x32" href="/uploads/favicon-32.png">
<link rel="shortcut icon" href="/favicon.ico">
<link rel="stylesheet" href="${FONTS}">
<link rel="stylesheet" href="/assets/site.css?v=${cssHash}">
</head>
<body>
<main class="wrap" style="padding-top:18vh">
<p class="eyebrow">404</p>
<h1 class="display">${T.en.notFound.h1} <span class="muted">/ ${T.es.notFound.h1}</span></h1>
<p class="actions"><a class="btn solid" href="/en/">${T.en.notFound.cta}</a><a class="btn ghost" href="/es/">${T.es.notFound.cta}</a></p>
</main>
</body>
</html>`
);

// ---------- Biblioteca de arte (Lab): una página por idioma desde plantillas en src/art-library.*
const ALCSS = fs.readFileSync(path.join(SRC, "art-library.css"), "utf8");
fs.writeFileSync(path.join(ROOT, "assets/art-library.css"), ALCSS);
const alHash = crypto.createHash("md5").update(ALCSS).digest("hex").slice(0, 8);
const AL = {
  es: {
    title: "Biblioteca de arte — Lab · Diana Becerra",
    desc: "Una guía para no perderte en el museo: 12 periodos, qué pasaba en el mundo, sus artistas y mis piezas favoritas con foto y museo.",
    h1: "Biblioteca de <em>arte</em>.",
    story: "Para no perderte en el museo: ubica cada periodo, <em>qué pasaba en el mundo</em> y quiénes son sus voces. Nació porque me sentí perdida entre épocas y corrientes; poco a poco la voy llenando con mis piezas favoritas, con fotos mías y el museo donde las vi.",
    experiment: "Experimento", viewLabel: "Vista", timeline: "Línea del tiempo", myPieces: "Mis piezas",
    search: "Buscar artista, obra o museo…", periods: "Periodos", noResults: "No hay resultados para esa búsqueda.",
    emptyH: "Aquí van mis piezas favoritas.", emptyP: "Cada una con mi foto, el museo donde la vi y por qué me gusta. Estoy preparando la primera tanda.",
    enlarged: "Imagen ampliada", close: "Cerrar",
    js: {
      lang: "es", data: "/lab/art-library/data.json", hash: "#piezas", viewImage: "Ver imagen: ", whatHappened: "Qué pasaba", woman: "artista mujer", myPhoto: "Mi foto · ",
      allMuseums: "Todos los museos", loadError: "No se pudo cargar la biblioteca.",
      short: { antiguo: "Antiguo", medieval: "Medieval", renacimiento: "Renacimiento", barroco: "Barroco", neoclasico: "Neoclasicismo", realismo: "Realismo", impresionismo: "Impresionismo", modernismo: "Modernismo", entreguerras: "Vanguardias", posguerra: "Posguerra", conceptual: "Conceptual", contemporaneo: "Contemporáneo" },
    },
  },
  en: {
    title: "Art Library — Lab · Diana Becerra",
    desc: "A guide so you don't get lost in the museum: 12 periods, what was happening in the world, their artists and my favorite pieces with photo and museum.",
    h1: "Art <em>Library</em>.",
    story: "So you don't get lost in the museum: it places each period, <em>what was happening in the world</em> and who its voices are. It began because I felt lost among eras and movements; little by little I'm filling it with my favorite pieces, with my own photos and the museum where I saw them.",
    experiment: "Experiment", viewLabel: "View", timeline: "Timeline", myPieces: "My pieces",
    search: "Search artist, work or museum…", periods: "Periods", noResults: "No results for that search.",
    emptyH: "My favorite pieces go here.", emptyP: "Each one with my photo, the museum where I saw it and why I like it. I'm preparing the first batch.",
    enlarged: "Enlarged image", close: "Close",
    js: {
      lang: "en", data: "/lab/art-library/data.en.json", hash: "#pieces", viewImage: "View image: ", whatHappened: "What was happening", woman: "woman artist", myPhoto: "My photo · ",
      allMuseums: "All museums", loadError: "The library could not be loaded.",
      short: { antiguo: "Ancient", medieval: "Medieval", renacimiento: "Renaissance", barroco: "Baroque", neoclasico: "Neoclassicism", realismo: "Realism", impresionismo: "Impressionism", modernismo: "Modernism", entreguerras: "Avant-gardes", posguerra: "Post-war", conceptual: "Conceptual", contemporaneo: "Contemporary" },
    },
  },
};
const alBody = fs.readFileSync(path.join(SRC, "art-library.body.html"), "utf8");
const alJs = fs.readFileSync(path.join(SRC, "art-library.js"), "utf8");
for (const lang of LANGS) {
  const a = AL[lang];
  const I = {
    ...a.js,
    era: "__ERA__", counts: "__COUNTS__", results: "__RES__", piecesCount: "__PC__",
  };
  const fns = lang === "es"
    ? `era: function (n, t) { return "Época " + n + " de " + t; }, counts: function (a, p, m) { return a + " artistas · " + p + " periodos" + (m ? " · " + m + " piezas mías" : ""); }, results: function (n) { return n + " resultado" + (n === 1 ? "" : "s"); }, piecesCount: function (n, mu) { return n + " pieza" + (n === 1 ? "" : "s") + (mu ? " en " + mu : ""); }`
    : `era: function (n, t) { return "Era " + n + " of " + t; }, counts: function (a, p, m) { return a + " artists · " + p + " periods" + (m ? " · " + m + " of my pieces" : ""); }, results: function (n) { return n + " result" + (n === 1 ? "" : "s"); }, piecesCount: function (n, mu) { return n + " piece" + (n === 1 ? "" : "s") + (mu ? " at " + mu : ""); }`;
  const i18n = JSON.stringify(a.js).slice(0, -1) + "," + fns + "}";
  const fill = (s) => s.replace(/\{\{(\w+)\}\}/g, (_, k) => (k === "lang" ? lang : a[k] ?? ""));
  page({
    lang, rel: "/lab/art-library/", active: "lab", title: a.title, desc: a.desc,
    extra: `<link rel="stylesheet" href="/assets/art-library.css?v=${alHash}">`,
    body: fill(alBody) + `<script>\n${alJs.replace("__I18N__", i18n)}</script>`,
  });
}
// La URL anterior redirige al idioma del navegador
fs.writeFileSync(path.join(ROOT, "lab/art-library/index.html"), `<!doctype html><html lang="es"><head><meta charset="utf-8"><title>Biblioteca de arte · Art Library</title><meta name="robots" content="noindex"><link rel="canonical" href="${SITE.domain}/es/lab/art-library/"><script>var l=(navigator.language||"es").slice(0,2)==="en"?"en":"es";location.replace("/"+l+"/lab/art-library/"+location.hash.replace("#piezas","#pieces").replace("#pieces",l==="es"?"#piezas":"#pieces"));</script><meta http-equiv="refresh" content="0;url=/es/lab/art-library/"></head><body><a href="/es/lab/art-library/">Biblioteca de arte</a> · <a href="/en/lab/art-library/">Art Library</a></body></html>\n`);

// robots + sitemap
const urls = [];
for (const lang of LANGS) {
  for (const r of ["/", ...CASE_ORDER.map((k) => `/product/${k}/`), "/brand/", "/lab/", "/about/", "/contact/"]) urls.push(`${SITE.domain}/${lang}${r}`);
}
for (const lang of LANGS) urls.push(`${SITE.domain}/${lang}/lab/art-library/`);
write("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `<url><loc>${u}</loc></url>`).join("\n")}\n</urlset>\n`);
write("robots.txt", `User-agent: *\nAllow: /\nSitemap: ${SITE.domain}/sitemap.xml\n`);

console.log(`OK: ${urls.length} páginas.`);
if (missing.size) {
  console.log(`\nImágenes de producto pendientes (${missing.size}). Súbelas a uploads/product/ con estos nombres:`);
  [...missing].sort().forEach((m) => console.log("  " + m));
}

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

// CSS
const css = fs.readFileSync(path.join(SRC, "site.css"), "utf8");
const cssHash = crypto.createHash("md5").update(css).digest("hex").slice(0, 8);
fs.mkdirSync(path.join(ROOT, "assets"), { recursive: true });
fs.writeFileSync(path.join(ROOT, "assets/site.css"), css);

const FONTS =
  "https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400&display=swap";

const brandProjects = JSON.parse(fs.readFileSync(path.join(SRC, "brand-projects.json"), "utf8")).map((p) => ({ ...p, slug: slugify(p.name) }));

const SECTIONS = ["product", "lab", "about", "contact"];

function head({ lang, rel, title, desc, noindex }) {
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
<link rel="icon" type="image/png" href="/uploads/favicon-64.png">
<link rel="apple-touch-icon" href="/uploads/favicon-180.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="${FONTS}">
<link rel="stylesheet" href="/assets/site.css?v=${cssHash}">
</head>`;
}

function header(lang, active, cls = "") {
  const t = T[lang];
  const other = lang === "en" ? "es" : "en";
  const links = SECTIONS.map(
    (s) => `<a href="/${lang}/${s}/"${active === s ? ' aria-current="page"' : ""}>${esc(t.nav[s])}</a>`
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

function page({ lang, rel, active, title, desc, body, noindex, cls }) {
  const altLang = lang === "en" ? "es" : "en";
  const html = head({ lang, rel, title, desc, noindex }) + header(lang, active, cls).replace("__ALT__", `/${altLang}${rel}`) + body + footer(lang);
  write(`${lang}${rel}index.html`, html);
}

// Prototipos de Figma ocultos por ahora (cambiar a true para mostrarlos de nuevo).
const SHOW_PROTOTYPES = false;

// ---------- Components
function caseCard(lang, key, idx) {
  const c = T[lang].cases[key];
  const hero = productImg(c.hero[0]);
  const textOn = c.light ? "on-dark" : "";
  return `<a class="card" href="/${lang}/product/${key}/">
<div class="art ${hero ? "has-img" : ""} ${textOn}" style="background:${c.color}">
${hero ? `<img src="${hero}" alt="" loading="lazy" decoding="async">` : ""}
<span class="tags">${esc(c.year)}</span>
<span class="name">${esc(c.title)}</span>
</div>
<div class="info"><span class="y">${esc(c.tags)}</span><span class="t">${esc(c.sub)}</span><span class="s">${esc(c.summary)}</span></div>
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
<div class="actions"><a class="btn solid" href="/${lang}/product/">${esc(t.home.ctaProduct)}</a><a class="btn ghost" href="/${lang}/lab/">${esc(t.home.ctaLab)}</a></div>
</div></section>
<section class="section"><div class="wrap">
<div class="sec-head"><h2 class="h2">${esc(t.home.selected)}</h2><a class="link-arrow" href="/${lang}/product/">${esc(t.home.all)} →</a></div>
<div class="cards">${CASE_ORDER.map((k, i) => caseCard(lang, k, i)).join("")}</div>
</div></section>
<section class="section"><div class="wrap"><div class="band lab">
<p class="eyebrow" style="color:inherit">${esc(t.home.labKicker)}</p>
<h2 class="h2" style="margin-top:14px">${esc(t.home.labH)}</h2>
<p class="lede">${esc(t.home.labP)}</p>
<div class="actions"><a class="btn solid" href="/${lang}/lab/">${esc(t.home.labCta)} →</a></div>
</div></div></section>
<section class="section"><div class="wrap brand-strip">
<div><p class="eyebrow">${esc(t.home.brandKicker)}</p><h2 class="h2" style="margin-top:14px">${esc(t.home.brandH)}</h2>
<div class="actions"><a class="btn ghost" href="/${lang}/brand/">${esc(t.home.brandCta)} →</a></div></div>
${brandThumbs(lang)}
</div></section>`,
  });

  // Product index
  page({
    lang, rel: "/product/", active: "product", title: t.product.title, desc: t.product.desc,
    body: `<section class="page-head"><div class="wrap">
<p class="eyebrow">${esc(t.product.kicker)}</p>
<h1 class="display">${t.product.h1}</h1>
<p class="lede">${esc(t.product.p)}</p>
</div></section>
<section class="section" style="padding-top:0;border-top:0"><div class="wrap"><div class="cards">${CASE_ORDER.map((k, i) => caseCard(lang, k, i)).join("")}</div></div></section>
<section class="section"><div class="wrap brand-strip">
<div><p class="eyebrow">${esc(t.product.brandKicker)}</p><h2 class="h2" style="margin-top:14px">${esc(t.product.brandH)}</h2>
<p class="lede" style="margin-top:14px;color:var(--muted)">${esc(t.product.brandP)}</p>
<div class="actions"><a class="btn ghost" href="/${lang}/brand/">${esc(t.product.brandCta)} →</a></div></div>
${brandThumbs(lang)}
</div></section>`,
  });

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
        const figs = (s.img || []).map((f) => productImg(f)).filter(Boolean).map((u) => `<figure><img src="${u}" alt="${esc(s.h)} — ${esc(c.title)}" loading="lazy" decoding="async"></figure>`).join("");
        return `<section class="case-sec">${figs ? `<div class="figs">${figs}</div>` : ""}<div class="txt"><h2>${esc(s.h)}</h2>${paras}${list}</div></section>`;
      })
      .join("");
    const figma = SHOW_PROTOTYPES && c.figma ? `<p style="margin-top:20px"><a class="btn ghost" href="${SITE.figmaBrel}" rel="noopener" target="_blank">${esc(t.product.figma)}</a></p>` : "";
    const protoUrl = SHOW_PROTOTYPES && c.figma ? SITE.figmaBrel.replace("https://www.figma.com/", "https://embed.figma.com/") + "&embed-host=share" : null;
    const proto = protoUrl ? `<section class="case-sec wide"><div class="figs"><div class="proto"><iframe src="${protoUrl}" title="${esc(c.title)} — ${esc(t.product.protoH)}" loading="lazy" allowfullscreen></iframe></div></div><div class="txt"><h2>${esc(t.product.protoH)}</h2><p class="muted">${esc(t.product.protoNote)}</p></div></section>` : "";
    page({
      lang, rel: `/product/${key}/`, active: "product",
      title: `${c.title} — ${c.sub} · Diana Becerra`, desc: c.summary,
      body: `<section class="page-head" style="padding-bottom:0"><div class="wrap narrow">
<p class="eyebrow"><a href="/${lang}/product/" style="text-decoration:none">${esc(t.product.back)}</a> &nbsp;·&nbsp; ${esc(c.tags)}</p>
<h1 class="display" style="margin-top:20px">${esc(c.title)}</h1>
<p class="lede">${esc(c.sub)}</p>
${hero ? `<div class="case-hero" style="margin-top:36px"><img src="${hero}" alt="${esc(c.title)}" decoding="async"></div>` : `<div class="case-hero block ${c.light ? "on-dark" : ""}" style="background:${c.color};margin-top:36px"><span class="name">${esc(c.year)}</span></div>`}
<dl class="meta">${metaRows}</dl>
<p class="case-intro">${esc(c.intro)}</p>${figma}
</div></section>
<div class="wrap narrow">${proto}${sections}
<div class="case-next"><span class="eyebrow">${esc(t.product.next)}</span><a class="big" href="/${lang}/product/${nextKey}/">${esc(next.title)} →</a></div></div>`,
      cls: "case",
    });
  });

  // Brand
  const bp = brandProjects
    .map((p) => {
      const es = lang === "es" ? BRAND_ES[p.name] : null;
      const L = p.layout;
      const cells = L.cells
        .map((c) => (typeof c === "string" ? "" : `<div class="cell" style="--a:${c.area};${c.bg ? `background:${c.bg};` : ""}">${c.img ? `<img src="/${esc(c.img)}" alt="" loading="lazy" decoding="async"${c.objPos ? ` style="object-position:${c.objPos}"` : ""}>` : ""}</div>`))
        .join("");
      const ctx = (es ? es.context : p.context).replace("Casa 231", `<a href="https://www.instagram.com/casa_231/" rel="noopener" target="_blank">Casa 231</a>`);
      return `<article class="brand-proj" id="${p.slug}">
<header><div><p class="eyebrow"><span class="dot" style="background:${p.color}"></span>${esc(es ? es.type : p.type)} · ${esc(p.loc)}</p></div><div><h2>${esc(p.name)}</h2><p class="lede" style="margin-top:16px">${esc(es ? es.description : p.description)}</p></div></header>
<div class="collage" style="--cols:${L.cols};--rows:${L.rows};--areas:${L.areas}">${cells}</div>
<div class="foot2"><div><p class="l">${esc(t.brand.done)}</p><p>${esc(es ? es.whatDone : p.whatDone)}</p></div><div><p class="l">${esc(t.brand.context)}</p><p>${ctx}</p></div></div>
</article>`;
    })
    .join("");
  page({
    lang, rel: "/brand/", active: "product", title: t.brand.title, desc: t.brand.desc,
    body: `<section class="page-head"><div class="wrap">
<p class="eyebrow"><a href="/${lang}/product/" style="text-decoration:none">${esc(t.brand.back)}</a> &nbsp;·&nbsp; ${esc(t.brand.kicker)}</p>
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
${[["question", it.question], ["decided", it.decided], ["ai", it.ai], ["change", it.change]].filter(([, v]) => v).length ? `<dl>${[["question", it.question], ["decided", it.decided], ["ai", it.ai], ["change", it.change]].filter(([, v]) => v).map(([k, v]) => `<div><dt>${esc(t.lab[k])}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>` : ""}
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
<section class="section" style="padding-top:0;border-top:0"><div class="wrap"><div class="lab-grid">${labCards}</div><p class="lab-soon">${esc(t.lab.soon)}</p></div></section>`,
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
<p class="line">${esc(a.museumsLine)}</p>
<ul class="pgrid">${photoGrid("museum")}</ul>
<p class="line-link"><a href="/lab/art-library/">${esc(a.museumsLink)}</a></p>
</div></section>
<section class="section nb"><div class="wrap about-wrap">
<p class="line">${esc(a.natureLine)}</p>
<ul class="pgrid">${photoGrid("nature")}</ul>
</div></section>
<section class="section nb"><div class="wrap about-wrap">
<p class="eyebrow" style="margin-bottom:18px">${t.nav.about === "About" ? "Experience" : "Experiencia"}</p>
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
      var walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
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
<link rel="icon" type="image/png" href="/uploads/favicon-64.png">
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
<link rel="icon" type="image/png" href="/uploads/favicon-64.png">
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

// robots + sitemap
const urls = [];
for (const lang of LANGS) {
  for (const r of ["/", "/product/", ...CASE_ORDER.map((k) => `/product/${k}/`), "/brand/", "/lab/", "/about/", "/contact/"]) urls.push(`${SITE.domain}/${lang}${r}`);
}
urls.push(`${SITE.domain}/lab/art-library/`);
write("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `<url><loc>${u}</loc></url>`).join("\n")}\n</urlset>\n`);
write("robots.txt", `User-agent: *\nAllow: /\nSitemap: ${SITE.domain}/sitemap.xml\n`);

console.log(`OK: ${urls.length} páginas.`);
if (missing.size) {
  console.log(`\nImágenes de producto pendientes (${missing.size}). Súbelas a uploads/product/ con estos nombres:`);
  [...missing].sort().forEach((m) => console.log("  " + m));
}

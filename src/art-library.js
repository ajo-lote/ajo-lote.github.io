(function () {
  var I = __I18N__;
  var LANG = I.lang;
  function U(u) { return u && u.charAt(0) !== "/" && !/^https?:/.test(u) ? "/lab/art-library/" + u : u; }
  function L(x) { return x && typeof x === "object" ? (x[LANG] || x.es || x.en || "") : (x || ""); }
  var SHORT = I.short;
  var cats = [], pieces = [], mode = "time", q = "", museum = "";
  var $ = function (id) { return document.getElementById(id); };
  var lb = $("lb"), reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function artistTotal() { var n = 0; cats.forEach(function (c) { c.movements.forEach(function (m) { n += m.artists.length; }); }); return n; }
  function norm(s) { return (s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, ""); }
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  function catById(id) { return cats.filter(function (c) { return c.id === id; })[0]; }

  /* Ventana ampliada (obras de artistas y mis piezas) */
  function show(o) {
    $("lb-img").src = o.src; $("lb-img").alt = o.alt || "";
    $("lb-a").textContent = o.title || ""; $("lb-o").textContent = o.sub || "";
    $("lb-m").textContent = o.museum || ""; $("lb-c").textContent = o.caption || "";
    if (lb.showModal) lb.showModal(); else lb.setAttribute("open", "");
  }
  $("lb-x").addEventListener("click", function () { lb.close(); });
  lb.addEventListener("click", function (e) { if (e.target === lb) lb.close(); });

  function showPiece(p) { show({ src: U(p.photo), alt: L(p.title), title: L(p.title), sub: L(p.artist) + (p.year ? " · " + L(p.year) : ""), museum: L(p.museum) + (p.city ? ", " + L(p.city) : ""), caption: L(p.note) }); }

  /* Regla + capítulos */
  var chapEls = {}, rulerBtns = {};
  function buildTimeline() {
    var ruler = $("ruler"), host = $("chaps");
    var ind = el("span", "ind"); ind.setAttribute("aria-hidden", "true"); ruler.appendChild(ind);
    function moveInd(id) { var b = rulerBtns[id]; if (!b) return; ind.style.width = (b.offsetWidth - 14) + "px"; ind.style.transform = "translateX(" + (b.offsetLeft + 10) + "px)"; }
    window.addEventListener("resize", function () { var cur = ruler.querySelector('[aria-current="true"]'); if (cur) { var k = Object.keys(rulerBtns).filter(function (x) { return rulerBtns[x] === cur; })[0]; moveInd(k); } });
    cats.forEach(function (c) {
      var b = el("button"); b.type = "button"; b.style.setProperty("--c", c.color);
      b.appendChild(el("span", "r", c.range)); b.appendChild(el("span", "s", SHORT[c.id] || c.name));
      b.addEventListener("click", function () {
        chapEls[c.id].scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
      });
      ruler.appendChild(b); rulerBtns[c.id] = b;

      var sec = el("section", "chap"); sec.id = "era-" + c.id; sec.style.setProperty("--c", c.color);
      var inn = el("div", "chap-in"); var side = el("div", "chap-side");
      side.appendChild(el("span", "chap-range", c.range)); side.appendChild(el("span", "chap-n", I.era(cats.indexOf(c) + 1, cats.length))); side.appendChild(el("h2", "chap-name", c.name));
      if (c.context) { var cx = el("div", "chap-ctx"); cx.appendChild(el("span", "eyebrow", I.whatHappened)); cx.appendChild(el("p", null, c.context)); side.appendChild(cx); }
      var main = el("div");
      var mp = pieces.filter(function (p) { return p.era === c.id; });
      if (mp.length) {
        var st = el("div", "mypics"); st.appendChild(el("h3", null, I.myHere));
        var row = el("div", "mypics-row");
        mp.forEach(function (p) {
          var b = el("button", "mp"); b.type = "button"; b.dataset.s = norm([L(p.title), L(p.artist), L(p.museum), L(p.city)].join(" "));
          var ph = el("div", "ph"); var im = document.createElement("img"); im.src = U(p.photo); im.alt = L(p.title) + " — " + L(p.artist); im.loading = "lazy"; if (p.pos) im.style.objectPosition = p.pos; ph.appendChild(im);
          b.appendChild(ph); b.appendChild(el("div", "t", L(p.title))); b.appendChild(el("div", "a", L(p.artist) + (p.year ? " · " + L(p.year) : "")));
          b.addEventListener("click", function () { showPiece(p); });
          row.appendChild(b);
        });
        st.appendChild(row); main.appendChild(st);
        rulerBtns[c.id].classList.add("has-mine");
      }
      if (c.movements.length > 1) {
        var chips = el("div", "chips");
        c.movements.forEach(function (m) {
          var ch = el("button", "chip", m.name); ch.type = "button"; ch.setAttribute("aria-pressed", "false");
          ch.addEventListener("click", function () {
            var on = ch.getAttribute("aria-pressed") !== "true";
            [].forEach.call(chips.children, function (x) { x.setAttribute("aria-pressed", "false"); });
            ch.setAttribute("aria-pressed", on ? "true" : "false");
            [].forEach.call(main.querySelectorAll(".mov"), function (mv) { mv.dataset.off = (on && mv.dataset.name !== m.name) ? "1" : ""; });
            applyFilters();
          });
          chips.appendChild(ch);
        });
        main.appendChild(chips);
      }
      c.movements.forEach(function (m) {
        var mv = el("div", "mov"); mv.dataset.name = m.name; mv.appendChild(el("h3", null, m.name));
        var grid = el("div", "artists");
        m.artists.forEach(function (a) {
          var card = el("div", "artist"); card.dataset.s = norm(a.name + " " + a.work);
          if (a.img) {
            var bt = el("button", "av"); bt.type = "button"; bt.setAttribute("aria-label", I.viewImage + a.name);
            var im = document.createElement("img"); im.src = U(a.img); im.alt = ""; im.loading = "lazy"; bt.appendChild(im);
            bt.addEventListener("click", function () { show({ src: U(a.img), alt: a.name + " — " + a.work, title: a.name, sub: a.work, caption: a.imgCaption }); });
            card.appendChild(bt);
          } else card.appendChild(el("div", "av", (a.name || "?").trim().charAt(0).toUpperCase()));
          var tx = el("div"); var n = el("div", "n", a.name);
          if (a.woman) { var i = el("i", null, " ♀"); i.setAttribute("aria-label", I.woman); n.appendChild(i); }
          tx.appendChild(n); tx.appendChild(el("div", "w", a.work));
          if (a.note) tx.appendChild(el("p", "note", a.note));
          var mine = pieces.filter(function (p) { return norm(L(p.artist)) === norm(a.name); })[0];
          if (mine) {
            var tg = el("button", "mine", I.myPhoto + L(mine.museum)); tg.type = "button";
            tg.addEventListener("click", function () { museum = ""; setMode("mine"); $("q").value = a.name; q = a.name; applyFilters(); });
            tx.appendChild(tg);
          }
          card.appendChild(tx); grid.appendChild(card);
        });
        mv.appendChild(grid); main.appendChild(mv);
      });
      inn.appendChild(side); inn.appendChild(main); sec.appendChild(inn); host.appendChild(sec); chapEls[c.id] = sec;
    });
    /* Scroll-spy */
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (ents) {
        ents.forEach(function (e) {
          if (!e.isIntersecting) return;
          var id = e.target.id.replace("era-", "");
          Object.keys(rulerBtns).forEach(function (k) { rulerBtns[k].setAttribute("aria-current", k === id ? "true" : "false"); chapEls[k].classList.toggle("is-active", k === id); });
          moveInd(id);
          var b = rulerBtns[id], r = $("ruler");
          if (b && r.scrollWidth > r.clientWidth) r.scrollTo({ left: b.offsetLeft - 24, behavior: reduce ? "auto" : "smooth" });
        });
      }, { rootMargin: "-40% 0px -55% 0px" });
      Object.keys(chapEls).forEach(function (k) { io.observe(chapEls[k]); });
    }
  }

  /* Mis piezas */
  function buildPieces() {
    $("n-mine").textContent = pieces.length ? "(" + pieces.length + ")" : "";
    var grid = $("pieces"); grid.textContent = "";
    var museums = {}; pieces.forEach(function (p) { var k = L(p.museum); museums[k] = (museums[k] || 0) + 1; });
    var mc = $("mchips"); mc.textContent = "";
    if (Object.keys(museums).length > 1) {
      var all = el("button", "chip", I.allMuseums); all.type = "button"; all.setAttribute("aria-pressed", museum ? "false" : "true");
      all.addEventListener("click", function () { museum = ""; buildPieces(); applyFilters(); }); mc.appendChild(all);
      Object.keys(museums).forEach(function (m) {
        var ch = el("button", "chip", m + " (" + museums[m] + ")"); ch.type = "button"; ch.setAttribute("aria-pressed", museum === m ? "true" : "false");
        ch.addEventListener("click", function () { museum = m; buildPieces(); applyFilters(); }); mc.appendChild(ch);
      });
    }
    pieces.forEach(function (p) {
      var c = catById(p.era) || { color: "#999" };
      var b = el("button", "piece"); b.type = "button"; b.style.setProperty("--c", c.color);
      b.dataset.s = norm([L(p.title), L(p.artist), L(p.museum), L(p.city)].join(" ")); b.dataset.m = L(p.museum);
      var ph = el("div", "ph"); var im = document.createElement("img"); im.src = U(p.photo); im.alt = L(p.title) + " — " + L(p.artist); im.loading = "lazy"; if (p.pos) im.style.objectPosition = p.pos; ph.appendChild(im);
      b.appendChild(ph); b.appendChild(el("div", "t", L(p.title)));
      b.appendChild(el("div", "a", L(p.artist) + (p.year ? " · " + L(p.year) : "")));
      var m = el("span", "m"); m.innerHTML = '<svg viewBox="0 0 12 12" aria-hidden="true"><path d="M6 0a4 4 0 0 0-4 4c0 3 4 8 4 8s4-5 4-8a4 4 0 0 0-4-4zm0 5.5A1.5 1.5 0 1 1 6 2.5a1.5 1.5 0 0 1 0 3z" fill="currentColor"/></svg>';
      m.appendChild(document.createTextNode(L(p.museum) + (p.city ? ", " + L(p.city) : ""))); b.appendChild(m);
      b.addEventListener("click", function () { showPiece(p); });
      grid.appendChild(b);
    });
  }

  function applyFilters() {
    var nq = norm(q), shown = 0;
    /* Línea del tiempo */
    cats.forEach(function (c) {
      var sec = chapEls[c.id], vis = 0;
      [].forEach.call(sec.querySelectorAll(".mov"), function (mv) {
        var mvVis = 0;
        [].forEach.call(mv.querySelectorAll(".artist"), function (a) {
          var ok = !mv.dataset.off && (!nq || a.dataset.s.indexOf(nq) > -1);
          a.hidden = !ok; if (ok) mvVis++;
        });
        mv.hidden = mvVis === 0; vis += mvVis;
      });
      var mpv = 0;
      [].forEach.call(sec.querySelectorAll(".mp"), function (x) { var ok = !nq || x.dataset.s.indexOf(nq) > -1; x.hidden = !ok; if (ok) mpv++; });
      var mps = sec.querySelector(".mypics"); if (mps) mps.hidden = mpv === 0;
      vis += mpv;
      sec.hidden = vis === 0; rulerBtns[c.id].disabled = vis === 0; shown += vis;
    });
    $("none").hidden = shown > 0 || mode !== "time";
    /* Mis piezas */
    var pv = 0;
    [].forEach.call($("pieces").children, function (b) {
      var ok = (!nq || b.dataset.s.indexOf(nq) > -1) && (!museum || b.dataset.m === museum);
      b.hidden = !ok; if (ok) pv++;
    });
    $("empty").hidden = pieces.length > 0;
    $("count").textContent = mode === "time"
      ? (nq ? I.results(shown) : I.counts(artistTotal(), cats.length, pieces.length))
      : (pieces.length ? I.piecesCount(pv, museum) : "");
  }

  function setMode(m) {
    mode = m;
    $("m-time").setAttribute("aria-pressed", m === "time"); $("m-mine").setAttribute("aria-pressed", m === "mine");
    $("view-time").hidden = m !== "time"; $("view-mine").hidden = m !== "mine";
    if (location.hash !== (m === "mine" ? I.hash : "")) history.replaceState(null, "", m === "mine" ? I.hash : location.pathname);
    applyFilters();
  }
  $("m-time").addEventListener("click", function () { setMode("time"); });
  $("m-mine").addEventListener("click", function () { setMode("mine"); });
  $("q").addEventListener("input", function (e) { q = e.target.value; applyFilters(); });

  Promise.all([
    fetch(I.data).then(function (r) { return r.json(); }),
    fetch("/lab/art-library/pieces.json").then(function (r) { return r.ok ? r.json() : []; }).catch(function () { return []; })
  ]).then(function (res) {
    cats = res[0]; pieces = res[1] || [];
    buildTimeline(); buildPieces(); applyFilters();
    if (location.hash === I.hash) setMode("mine");
    else if (location.hash.indexOf("#era-") === 0 && chapEls[location.hash.slice(5)]) chapEls[location.hash.slice(5)].scrollIntoView();
  }).catch(function () { $("count").textContent = I.loadError; });
})();

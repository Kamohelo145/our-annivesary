/* ============================================================
   How the site works. You don't need to edit this file —
   all your content lives in config.js.

   Testing tip: open the site with ?skip at the end of the link
   (e.g. index.html?skip) to jump straight to the main page.
   ============================================================ */
(function () {
  "use strict";
  const C = CONFIG; // comes from config.js
  const $ = (s) => document.querySelector(s);
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

  document.title = C.pageTitle || "For You 💌";

  /* ---------------- little sound effects (no files needed) ---------------- */
  let actx = null;
  function audioCtx() {
    if (!actx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      actx = new AC();
    }
    if (actx.state === "suspended") actx.resume();
    return actx;
  }
  function tone(freq, start, dur, type, vol) {
    const c = audioCtx();
    if (!c) return;
    const t = c.currentTime + start;
    const o = c.createOscillator();
    const g = c.createGain();
    o.type = type || "sine";
    o.frequency.value = freq;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol || 0.15, t + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g);
    g.connect(c.destination);
    o.start(t);
    o.stop(t + dur + 0.05);
  }
  const sfx = {
    ping() { tone(988, 0, 0.12, "square", 0.06); tone(740, 0.13, 0.22, "square", 0.06); },
    correct() { [523, 659, 784, 1047].forEach((f, i) => tone(f, i * 0.08, 0.35, "triangle", 0.14)); },
    pop() { tone(700, 0, 0.07, "sine", 0.08); },
    win() { [523, 659, 784, 1047, 1319, 1568].forEach((f, i) => tone(f, i * 0.11, 0.7, "triangle", 0.12)); },
  };

  /* ---------------- background stars + floating hearts ---------------- */
  function makeStars() {
    const box = $("#stars");
    for (let i = 0; i < 90; i++) {
      const s = document.createElement("span");
      s.className = "star";
      s.style.left = Math.random() * 100 + "%";
      s.style.top = Math.random() * 100 + "%";
      s.style.setProperty("--d", 2 + Math.random() * 4 + "s");
      s.style.setProperty("--delay", -Math.random() * 5 + "s");
      box.appendChild(s);
    }
  }
  function makeHearts() {
    const box = $("#hearts");
    const glyphs = ["❤", "♥", "💕", "💖", "✨", "❤"];
    const count = window.innerWidth < 600 ? 14 : 24;
    for (let i = 0; i < count; i++) {
      const h = document.createElement("span");
      h.className = "float-heart";
      h.textContent = pick(glyphs);
      h.style.left = Math.random() * 100 + "%";
      h.style.fontSize = 10 + Math.random() * 22 + "px";
      h.style.setProperty("--d", 10 + Math.random() * 14 + "s");
      h.style.setProperty("--delay", -Math.random() * 20 + "s");
      h.style.setProperty("--sway", (Math.random() * 80 - 40) + "px");
      h.style.setProperty("--o", (0.25 + Math.random() * 0.5).toFixed(2));
      box.appendChild(h);
    }
  }
  function burst(x, y, n) {
    const glyphs = ["❤", "💖", "💕", "✨", "💗"];
    for (let i = 0; i < (n || 18); i++) {
      const b = document.createElement("span");
      b.className = "burst";
      b.textContent = pick(glyphs);
      b.style.left = x + "px";
      b.style.top = y + "px";
      const ang = Math.random() * Math.PI * 2;
      const dist = 80 + Math.random() * 160;
      b.style.setProperty("--x", Math.cos(ang) * dist + "px");
      b.style.setProperty("--y", Math.sin(ang) * dist + "px");
      b.style.setProperty("--r", Math.random() * 360 + "deg");
      document.body.appendChild(b);
      setTimeout(() => b.remove(), 1300);
    }
  }
  function burstAt(el, n) {
    const r = el.getBoundingClientRect();
    burst(r.left + r.width / 2, r.top + r.height / 2, n);
  }

  /* ---------------- screen switching ---------------- */
  function show(id) {
    document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
    if (id) $("#" + id).classList.add("active");
  }

  /* ---------------- SCREEN 1: the bird types its message ---------------- */
  let typeSpeed = 38;
  async function runIntro() {
    const box = $("#introText");
    const bubble = $("#bubble");
    bubble.addEventListener("click", () => (typeSpeed = 0));
    for (const line of C.introLines) {
      const p = document.createElement("p");
      box.appendChild(p);
      for (const ch of Array.from(line)) {
        p.textContent += ch;
        if (typeSpeed) await sleep(typeSpeed);
      }
      await sleep(typeSpeed ? 550 : 60);
    }
    bubble.classList.add("done");
    const btn = $("#startBtn");
    btn.textContent = C.introButton;
    btn.classList.remove("hidden");
    btn.onclick = () => {
      sfx.pop();
      show("game");
      renderQuestion();
    };
  }

  /* ---------------- SCREEN 2: the mystery game ---------------- */
  let qi = 0;
  function renderProgress() {
    const p = $("#progress");
    p.innerHTML = "";
    C.game.forEach((_, i) => {
      const s = document.createElement("span");
      s.textContent = "❤️";
      if (i < qi) s.className = "on";
      p.appendChild(s);
    });
  }
  function setFeedback(el, text, kind) {
    el.textContent = text;
    el.className = "feedback " + kind;
    void el.offsetWidth; // restart animation
    el.classList.add("show");
  }
  function renderQuestion() {
    const q = C.game[qi];
    $("#qNumber").textContent = `Clue ${qi + 1} of ${C.game.length}`;
    $("#question").textContent = q.question;
    $("#feedback").textContent = "";
    const box = $("#options");
    box.innerHTML = "";
    box.classList.remove("locked");
    q.options.forEach((opt, i) => {
      const b = document.createElement("button");
      b.className = "option";
      b.textContent = opt;
      b.onclick = () => answer(i, b);
      box.appendChild(b);
    });
    renderProgress();
  }
  function answer(i, btn) {
    const q = C.game[qi];
    const fb = $("#feedback");
    if (i === q.answer) {
      sfx.correct();
      btn.classList.add("right");
      $("#options").classList.add("locked");
      setFeedback(fb, q.rightMessage || "Correct! 💖", "good");
      burstAt(btn, 16);
      qi++;
      renderProgress();
      setTimeout(() => (qi < C.game.length ? renderQuestion() : toFinal()), 1500);
    } else {
      sfx.ping();
      btn.classList.remove("shake", "wrong");
      void btn.offsetWidth;
      btn.classList.add("shake", "wrong");
      setTimeout(() => btn.classList.remove("wrong"), 700);
      setFeedback(fb, pick(q.wrongMessages || ["Try again 🙈"]), "bad");
    }
  }

  /* ---------------- SCREEN 3: yes / runaway no ---------------- */
  let noTries = 0;
  function toFinal() {
    show("final");
    $("#finalQuestion").textContent = C.finalQuestion;
    const yes = $("#yesBtn");
    const no = $("#noBtn");
    yes.textContent = C.yesText;
    no.textContent = C.noText;
    yes.onclick = () => toDreamland(yes);

    const runAway = (e) => {
      if (no.dataset.gaveUp) return;
      if (e) e.preventDefault();
      noTries++;
      sfx.ping();
      setFeedback($("#noFeedback"), C.noMessages[(noTries - 1) % C.noMessages.length], "bad");
      if (noTries >= 6) {
        // after enough tries, the No button gives up and becomes a Yes
        no.dataset.gaveUp = "1";
        no.classList.remove("running", "ghost");
        no.style.left = no.style.top = "";
        no.textContent = "Okay fine… " + C.yesText;
        no.onclick = () => toDreamland(no);
        return;
      }
      const r = no.getBoundingClientRect();
      no.classList.add("running");
      const maxX = window.innerWidth - r.width - 16;
      const maxY = window.innerHeight - r.height - 16;
      no.style.left = 16 + Math.random() * Math.max(0, maxX - 16) + "px";
      no.style.top = 16 + Math.random() * Math.max(0, maxY - 16) + "px";
      yes.style.transform = `scale(${1 + Math.min(noTries, 5) * 0.08})`;
    };
    no.addEventListener("mouseenter", runAway);
    no.addEventListener("touchstart", runAway, { passive: false });
    no.addEventListener("click", runAway);
  }

  /* ---------------- SCREEN 4: dreamland ---------------- */
  function toDreamland(fromBtn) {
    sfx.win();
    burstAt(fromBtn, 30);
    $("#noBtn").classList.add("hidden");
    startMusic(); // tapping "Yes" counts as permission for the browser to play sound
    setTimeout(() => {
      show("dreamland");
      $("#dreamTitle").textContent = C.dreamTitle;
      $("#dreamText").textContent = C.dreamText;
      const enter = $("#enterBtn");
      enter.textContent = C.enterButton;
      enter.onclick = () => {
        sfx.pop();
        openMain();
      };
      setTimeout(() => burst(window.innerWidth / 2, window.innerHeight / 3, 40), 300);
    }, 700);
  }

  /* ---------------- music ---------------- */
  const audio = $("#song");
  const musicBtn = $("#musicBtn");
  audio.src = C.song;
  function setPlaying(on) {
    musicBtn.classList.toggle("playing", on);
    $("#musicLabel").textContent = (on ? "Pause · " : "Play · ") + (C.songTitle || "our song");
  }
  function startMusic() {
    musicBtn.classList.remove("hidden");
    audio.volume = 0;
    const p = audio.play();
    if (p && p.then) {
      p.then(() => {
        setPlaying(true);
        let v = 0; // gentle fade in
        const fade = setInterval(() => {
          v = Math.min(0.7, v + 0.05);
          audio.volume = v;
          if (v >= 0.7) clearInterval(fade);
        }, 150);
      }).catch(() => setPlaying(false));
    }
  }
  musicBtn.onclick = () => {
    if (audio.paused) {
      audio.volume = 0.7;
      audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    } else {
      audio.pause();
      setPlaying(false);
    }
  };
  setPlaying(false);

  /* ---------------- the main page ---------------- */
  function openMain() {
    show(null);
    document.body.classList.remove("locked");
    $("#main").classList.remove("hidden");
    musicBtn.classList.remove("hidden");
    window.scrollTo(0, 0);
    buildMain();
  }

  let built = false;
  function buildMain() {
    if (built) return;
    built = true;

    $("#heroHer").textContent = C.herNickname || C.herName;
    $("#heroTitle").textContent = C.heroTitle;
    $("#heroNames").textContent = `${C.herName} & ${C.yourName}`;
    $("#heroSub").textContent = C.heroSubtitle;
    startCounter();

    const tl = $("#timeline");
    C.memories.forEach((m, i) => tl.appendChild(memoryCard(m, i)));

    $("#letterTitle").textContent = C.letterTitle;
    const body = $("#letterBody");
    C.letterParagraphs.forEach((t) => {
      const p = document.createElement("p");
      p.textContent = t;
      body.appendChild(p);
    });
    $("#letterSignoff").textContent = C.letterSignoff;
    $("#letterSignature").textContent = C.letterSignature;
    $("#footerText").textContent = C.footerText;
    $("#replayBtn").onclick = () => (location.href = location.pathname);

    setupReveal();
  }

  function missingMedia(m) {
    const d = document.createElement("div");
    d.className = "media-missing";
    d.innerHTML = "<span>📷</span>";
    const t = document.createElement("div");
    t.textContent = `Couldn't find “${m.src}”. Check the file name in config.js (capital letters matter!).`;
    d.appendChild(t);
    return d;
  }

  function memoryCard(m, i) {
    const art = document.createElement("article");
    art.className = "memory reveal" + (i % 2 ? " flip" : "");

    // the photo / video in a polaroid frame
    const frame = document.createElement("figure");
    frame.className = "polaroid";
    let media;
    if (m.type === "video") {
      media = document.createElement("video");
      media.src = m.src;
      media.muted = true;          // videos are silent so the song keeps playing
      media.defaultMuted = true;
      media.loop = true;
      media.playsInline = true;
      media.setAttribute("playsinline", "");
      media.setAttribute("muted", "");
      media.preload = "metadata";
      if (m.poster) media.poster = m.poster;
      const badge = document.createElement("span");
      badge.className = "video-badge";
      badge.textContent = "▶ video";
      frame.appendChild(badge);
    } else {
      media = document.createElement("img");
      media.src = m.src;
      media.alt = m.title || "";
      media.loading = "lazy";
      media.onclick = () => {
        $("#lightboxImg").src = m.src;
        $("#lightbox").classList.remove("hidden");
      };
    }
    media.onerror = () => media.replaceWith(missingMedia(m));
    frame.appendChild(media);
    const cap = document.createElement("figcaption");
    cap.className = "caption";
    cap.textContent = m.date || "";
    frame.appendChild(cap);

    // the words next to it
    const text = document.createElement("div");
    text.className = "memory-text";
    if (m.date) {
      const chip = document.createElement("span");
      chip.className = "chip";
      chip.textContent = m.date;
      text.appendChild(chip);
    }
    const h = document.createElement("h3");
    h.textContent = m.title || "";
    text.appendChild(h);
    String(m.text || "").split(/\n\s*\n/).forEach((para) => {
      const p = document.createElement("p");
      p.textContent = para.trim();
      text.appendChild(p);
    });

    art.appendChild(frame);
    art.appendChild(text);
    return art;
  }

  function setupReveal() {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.15 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    // play videos only while they're on screen
    const vio = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        const v = e.target;
        if (e.isIntersecting) { v.muted = true; const p = v.play(); if (p && p.catch) p.catch(() => {}); }
        else v.pause();
      }),
      { threshold: 0.4 }
    );
    document.querySelectorAll(".polaroid video").forEach((v) => vio.observe(v));
  }

  function startCounter() {
    const start = new Date(C.startDate + "T00:00:00");
    const box = $("#counter");
    const tick = () => {
      let diff = Math.max(0, Date.now() - start.getTime());
      const days = Math.floor(diff / 86400000); diff -= days * 86400000;
      const hrs = Math.floor(diff / 3600000); diff -= hrs * 3600000;
      const mins = Math.floor(diff / 60000); diff -= mins * 60000;
      const secs = Math.floor(diff / 1000);
      box.innerHTML = [[days, "days"], [hrs, "hours"], [mins, "minutes"], [secs, "seconds"]]
        .map(([n, l]) => `<div><b>${n}</b><small>${l}</small></div>`).join("");
    };
    tick();
    setInterval(tick, 1000);
  }

  $("#lightbox").onclick = () => $("#lightbox").classList.add("hidden");

  /* ---------------- start ---------------- */
  makeStars();
  makeHearts();
  if (new URLSearchParams(location.search).has("skip")) {
    openMain(); // tester shortcut: index.html?skip
  } else {
    document.body.classList.add("locked");
    runIntro();
  }
})();

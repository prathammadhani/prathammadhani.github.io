/* ════════════════════════════════════════
   Pratham Madhani — Portfolio JavaScript
   ════════════════════════════════════════ */

/* ── 1. THEME TOGGLE ── */
(function initTheme() {
  const saved = localStorage.getItem('pm-theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
  const btn = document.getElementById('themeToggle');
  if (btn) btn.textContent = saved === 'dark' ? '☀️' : '🌙';
})();

function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('pm-theme', next);
  const btn = document.getElementById('themeToggle');
  if (btn) btn.textContent = next === 'dark' ? '☀️' : '🌙';
}

/* ── 2. SCROLL PROGRESS ── */
function updateScrollProgress() {
  const el = document.getElementById('scroll-progress');
  if (!el) return;
  const scrolled = window.scrollY;
  const total = document.body.scrollHeight - window.innerHeight;
  el.style.width = ((scrolled / total) * 100).toFixed(1) + '%';
}

/* ── 3. NAVBAR ACTIVE LINKS ── */
function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-links a, .mobile-menu a');
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
  });
  links.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === '#' + current) a.classList.add('active');
  });
}

/* ── 4. HAMBURGER MENU ── */
function initHamburger() {
  const ham = document.getElementById('hamburger');
  const menu = document.getElementById('mobileMenu');
  if (!ham || !menu) return;
  ham.addEventListener('click', () => {
    ham.classList.toggle('open');
    menu.classList.toggle('open');
  });
}

window.closeMobile = function () {
  document.getElementById('hamburger')?.classList.remove('open');
  document.getElementById('mobileMenu')?.classList.remove('open');
};

/* ── 5. TYPING ANIMATION ── */
function initTyping() {
  const el = document.getElementById('typed-text');
  if (!el) return;

  const phrases = [
    'Senior Software Engineer',
    'Java Backend Developer',
    'Distributed Systems Builder',
    'System Design Enthusiast',
    'Apache Kafka Expert',
    'Microservices Architect',
  ];

  let pi = 0, ci = 0, deleting = false;

  function type() {
    const phrase = phrases[pi];
    if (!deleting) {
      el.textContent = phrase.slice(0, ++ci);
      if (ci === phrase.length) {
        deleting = true;
        setTimeout(type, 1800);
        return;
      }
      setTimeout(type, 68);
    } else {
      el.textContent = phrase.slice(0, --ci);
      if (ci === 0) {
        deleting = false;
        pi = (pi + 1) % phrases.length;
        setTimeout(type, 350);
        return;
      }
      setTimeout(type, 34);
    }
  }
  type();
}

/* ── 6. CODE ANIMATION ── */
function initCodeAnimation() {
  const body = document.getElementById('codeBody');
  if (!body) return;

  const lines = [
    { html: '<span class="ln">1</span><span class="c-cm">// Pratham Madhani · engineer.java</span>' },
    { html: '<span class="ln">2</span><span class="c-txt"> </span>' },
    { html: '<span class="ln">3</span><span class="c-kw">public class </span><span class="c-str">Pratham </span><span class="c-txt">{</span>' },
    { html: '<span class="ln">4</span><span class="c-txt">  </span><span class="c-kw">private final </span><span class="c-val">String</span><span class="c-txt"> role =</span>' },
    { html: '<span class="ln">5</span><span class="c-txt">    </span><span class="c-grn">"Senior SDE @ Trellix"</span><span class="c-txt">;</span>' },
    { html: '<span class="ln">6</span><span class="c-txt"> </span>' },
    { html: '<span class="ln">7</span><span class="c-txt">  </span><span class="c-kw">private final </span><span class="c-val">int</span><span class="c-txt"> yoe = </span><span class="c-num">3</span><span class="c-txt">;</span>' },
    { html: '<span class="ln">8</span><span class="c-txt">  </span><span class="c-kw">private final </span><span class="c-val">int</span><span class="c-txt"> leetRating = </span><span class="c-num">1902</span><span class="c-txt">;</span>' },
    { html: '<span class="ln">9</span><span class="c-txt"> </span>' },
    { html: '<span class="ln">10</span><span class="c-txt">  </span><span class="c-kw">private final </span><span class="c-val">String</span><span class="c-txt">[] stack = {</span>' },
    { html: '<span class="ln">11</span><span class="c-txt">    </span><span class="c-grn">"Java 21"</span><span class="c-txt">, </span><span class="c-grn">"Spring Boot"</span><span class="c-txt">,</span>' },
    { html: '<span class="ln">12</span><span class="c-txt">    </span><span class="c-grn">"Apache Kafka"</span><span class="c-txt">, </span><span class="c-grn">"AWS"</span>' },
    { html: '<span class="ln">13</span><span class="c-txt">  };</span>' },
    { html: '<span class="ln">14</span><span class="c-txt"> </span>' },
    { html: '<span class="ln">15</span><span class="c-txt">  </span><span class="c-kw">public </span><span class="c-val">boolean</span><span class="c-fn"> isAvailable</span><span class="c-txt">() {</span>' },
    { html: '<span class="ln">16</span><span class="c-txt">    </span><span class="c-kw">return </span><span class="c-num">true</span><span class="c-txt">; </span><span class="c-cm">// 🟢</span>' },
    { html: '<span class="ln">17</span><span class="c-txt">  }</span>' },
    { html: '<span class="ln">18</span><span class="c-txt">}</span>' },
  ];

  body.innerHTML = '';
  let i = 0;

  function addLine() {
    if (i >= lines.length) {
      // add blinking cursor at end
      const cur = document.createElement('div');
      cur.className = 'code-line';
      cur.innerHTML = '<span class="ln">19</span><span class="code-cursor"></span>';
      body.appendChild(cur);
      return;
    }
    const div = document.createElement('div');
    div.className = 'code-line';
    div.innerHTML = lines[i].html;
    div.style.opacity = '0';
    body.appendChild(div);
    // fade in
    requestAnimationFrame(() => {
      div.style.transition = 'opacity 0.18s';
      div.style.opacity = '1';
    });
    i++;
    setTimeout(addLine, 110);
  }

  // Start after a short delay
  setTimeout(addLine, 600);

  // Loop: reset and replay every 12s
  setInterval(() => {
    body.innerHTML = '';
    i = 0;
    setTimeout(addLine, 300);
  }, 12000);
}

/* ── 7. SCROLL REVEAL ── */
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach((e, idx) => {
      if (e.isIntersecting) {
        const delay = Number(e.target.dataset.delay || 0);
        setTimeout(() => {
          e.target.classList.add('visible');
        }, delay);
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => observer.observe(el));
}

/* ── 8. GEO-BASED RESUME DOWNLOAD (SILENT RUNTIME) ──────────────────
   Strategy: Detect user geo-location via background API to silently 
   route the file source without revealing tracking mechanics or 
   triggering UI notifications to the end-user.
   ─────────────────────────────────────────────────────────────────── */
async function downloadResume() {
  const btn = document.getElementById('downloadBtn');

  if (btn) {
    btn.textContent = '⏳ Downloading...';
    btn.disabled = true;
  }

  let resume = 'assets/resume_relocation.pdf';
  let label  = 'Resume';

  try {
    // Use ip-api (free, no key needed, CORS-friendly)
    const res = await fetch('https://ip-api.com/json/?fields=city,regionName,status', {
      signal: AbortSignal.timeout(3500)
    });
    const data = await res.json();

    if (data.status === 'success') {
      const city   = (data.city || '').toLowerCase();
      const region = (data.regionName || '').toLowerCase();
      
      // Internal validation routing for Bengaluru / Bangalore locales
      if (city.includes('bengaluru') || city.includes('bangalore') ||
          (region.includes('karnataka') && city.includes('bang'))) {
        resume = 'assets/resume_bengaluru.pdf';
        label  = 'Resume_Bengaluru';
      }
    }
  } catch (err) {
    // Fail silently: Fallback gracefully routes to default relocation variant
  } finally {
    // Execute target download cleanly
    const a = document.createElement('a');
    a.href = resume;
    a.download = `Pratham_Madhani_${label}.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // Reset button to its initial state seamlessly
    if (btn) {
      btn.innerHTML = `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> Download Resume`;
      btn.disabled = false;
    }
  }
}

/* ── 9. CONTACT FORM — ROBUST RATE LIMITING ──────────────────────────
   Strategy: Multi-layer fingerprint stored client-side
   + client-side localStorage + sessionStorage + cookie combined.
   Bypassing requires clearing ALL three simultaneously — very unlikely
   for a casual visitor.
   ─────────────────────────────────────────────────────────────────── */

const COOLDOWN_DAYS    = 15;
const COOLDOWN_MS      = COOLDOWN_DAYS * 24 * 60 * 60 * 1000;
const CONTACT_EMAIL    = 'prathamadhani28@gmail.com';
const LS_KEY           = 'pm_fs_ts';      // localStorage
const SS_KEY           = 'pm_fs_ss';      // sessionStorage
const COOKIE_KEY       = 'pm_fs_ck';      // cookie

/* ── Generate a stable browser fingerprint ── */
function getFingerprint() {
  const raw = [
    navigator.userAgent,
    navigator.language,
    screen.width + 'x' + screen.height,
    screen.colorDepth,
    Intl.DateTimeFormat().resolvedOptions().timeZone,
    navigator.hardwareConcurrency,
    navigator.platform,
  ].join('|');
  // Simple hash
  let h = 0;
  for (let i = 0; i < raw.length; i++) {
    h = Math.imul(31, h) + raw.charCodeAt(i) | 0;
  }
  return Math.abs(h).toString(36);
}

/* ── Cookie helpers ── */
function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/; SameSite=Strict`;
}
function getCookie(name) {
  return document.cookie.split('; ').reduce((acc, c) => {
    const [k, v] = c.split('=');
    return k === name ? v : acc;
  }, null);
}

/* ── Save submission timestamp to all three stores ── */
function saveSubmission() {
  const ts = Date.now().toString();
  try { localStorage.setItem(LS_KEY, ts); }   catch(e) {}
  try { sessionStorage.setItem(SS_KEY, ts); } catch(e) {}
  try { setCookie(COOKIE_KEY, ts, COOLDOWN_DAYS); } catch(e) {}
}

/* ── Read earliest timestamp from any store ── */
function getSubmissionTimestamp() {
  const candidates = [];
  try { const v = localStorage.getItem(LS_KEY);   if (v) candidates.push(parseInt(v,10)); } catch(e) {}
  try { const v = sessionStorage.getItem(SS_KEY); if (v) candidates.push(parseInt(v,10)); } catch(e) {}
  try { const v = getCookie(COOKIE_KEY);           if (v) candidates.push(parseInt(v,10)); } catch(e) {}
  return candidates.length ? Math.min(...candidates) : null;
}

/* ── Check rate limit ── */
function checkRateLimit() {
  const ts = getSubmissionTimestamp();
  if (!ts) return { blocked: false };
  const elapsed = Date.now() - ts;
  if (elapsed < COOLDOWN_MS) {
    const daysLeft = Math.ceil((COOLDOWN_MS - elapsed) / 864e5);
    return { blocked: true, daysLeft, submittedOn: new Date(ts) };
  }
  return { blocked: false };
}

/* ── Format date nicely ── */
function fmtDate(d) {
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

/* ── Lock the form UI ── */
function lockForm(daysLeft, submittedOn) {
  const form   = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  if (!form) return;

  form.querySelectorAll('input, textarea, button').forEach(el => {
    el.disabled = true;
    el.style.opacity = '0.4';
    el.style.cursor  = 'not-allowed';
  });

  const ts = getSubmissionTimestamp();
  const nextDate = new Date(ts + COOLDOWN_MS);

  status.className = 'form-status rate-limited';
  status.style.display = 'block';
  status.innerHTML = `
    <div style="display:flex;gap:12px;align-items:flex-start">
      <span style="font-size:24px;line-height:1;flex-shrink:0">⏳</span>
      <div>
        <strong style="display:block;margin-bottom:6px;font-size:14px">
          Your message is already on my radar — thank you for reaching out!
        </strong>
        <span style="font-size:13px">
          You submitted on <strong>${fmtDate(submittedOn)}</strong>. I keep a
          ${COOLDOWN_DAYS}-day window between submissions to give every message
          the attention it deserves.<br><br>
          You're welcome to write again after
          <strong>${fmtDate(nextDate)}</strong>
          &nbsp;(${daysLeft} day${daysLeft !== 1 ? 's' : ''} from now).<br><br>
          For anything time-sensitive, I'm just an email away —
          <a href="mailto:${CONTACT_EMAIL}"
             style="color:var(--accent);font-weight:600;text-decoration:underline;word-break:break-all">
            ${CONTACT_EMAIL}
          </a>
        </span>
      </div>
    </div>`;
}

function initFormRateLimit() {
  const { blocked, daysLeft, submittedOn } = checkRateLimit();
  if (blocked) lockForm(daysLeft, submittedOn);
}

/* ── DIRECT WEB3FORMS SUBMIT HANDLER ── */
async function submitForm(e) {
  e.preventDefault();

  const rl = checkRateLimit();
  if (rl.blocked) { lockForm(rl.daysLeft, rl.submittedOn); return; }

  const form   = document.getElementById('contactForm');
  const btn    = document.getElementById('formBtn');
  const status = document.getElementById('formStatus');

  status.className = 'form-status';
  status.style.display = 'none';

  const name    = form.querySelector('[name="name"]').value.trim();
  const email   = form.querySelector('[name="email"]').value.trim();
  const message = form.querySelector('[name="message"]').value.trim();

  if (!name || !email || !message) {
    status.textContent = '⚠️ Please fill in all fields.';
    status.className = 'form-status error';
    status.style.display = 'block';
    return;
  }

  btn.innerHTML = '⏳ Sending...';
  btn.disabled  = true;

  try {
    // Collect all data from the form element (including hidden access key input)
    const formData = new FormData(form);
    
    // Web3Forms automatically parses browser metadata, but we can pass our custom hash tracking tag too
    formData.append("Browser Fingerprint", getFingerprint());

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });

    const data = await res.json();

    if (data.success) {
      saveSubmission();

      status.textContent = "✅ Message sent! I'll get back to you soon.";
      status.className = 'form-status success';
      status.style.display = 'block';
      form.reset();

      setTimeout(() => {
        const r = checkRateLimit();
        if (r.blocked) lockForm(r.daysLeft, new Date());
      }, 2800);

    } else {
      throw new Error(data.message || 'Submission failed');
    }

  } catch (err) {
    /* Fallback: open mailto */
    const subj = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subj}&body=${body}`;
    status.textContent = '📧 Opening your email client as fallback.';
    status.className = 'form-status success';
    status.style.display = 'block';

  } finally {
    const r = checkRateLimit();
    if (!r.blocked) {
      btn.innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> Send Message`;
      btn.disabled = false;
    }
  }
}

/* ── 10. BOOT ── */
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('themeToggle')?.addEventListener('click', toggleTheme);
  initHamburger();
  initTyping();
  initCodeAnimation();
  initReveal();
  window.addEventListener('scroll', () => {
    updateScrollProgress();
    updateActiveNav();
  }, { passive: true });
  initFormRateLimit();
  document.getElementById('contactForm')?.addEventListener('submit', submitForm);
});




// Website Brian Nguyễn: chuyển ngôn ngữ VI/EN, hiệu ứng khi cuộn, số đếm.
(function () {
  document.documentElement.classList.add('js');

  // Bản tiếng Anh. Bản tiếng Việt lấy thẳng từ HTML.
  var EN = {
    'nav.about': 'About', 'nav.impact': 'Impact', 'nav.work': 'Work', 'nav.experience': 'Experience', 'nav.contact': 'Contact',
    'hero.eyebrow': 'Head of Design · Hanoi, Vietnam',
    'hero.lead': '13 years designing digital products. Currently leading design for insurance apps and web platforms at MIC, where every screen has to be easy to use and actually sell.',
    'hero.cta1': 'Hire me', 'hero.cta2': 'Download CV',
    'hero.photoAlt': 'Portrait of Brian Nguyen', 'hero.badge': 'years of<br>experience',
    'about.label': '01 · About',
    'about.title': 'Design that users <em>get instantly</em>, and that helps the business <em>sell</em>.',
    'about.p1': 'I’m Brian, Head of Design at MIC (Military Insurance Corporation). With my design team, I look after the MIC app for customers, the MICPRO app for insurance sellers, their companion websites, the Bancas website for bank partners, and the core insurance system.',
    'about.p2': 'Before MIC, I worked across e-commerce (Bibomart, Vatgia), insurtech (Nexttech) and bancassurance (VBI). I believe good design starts with user research and ends with measurable results.',
    'about.p3': 'I also want to mentor young designers and help grow the UI/UX community in Vietnam.',
    'impact.label': '02 · Impact', 'impact.title': 'Measurable results',
    'impact.s1': 'MIC app installs', 'impact.s2': 'Customers buying insurance in the MIC app',
    'impact.s3': 'MIC app sales', 'impact.s3n': 'Aug 2023 vs. same period last year',
    'impact.s4': 'Less time to enter a contract', 'impact.s4n': '20 min → 10 min on the core insurance system',
    'impact.appTitle': 'MIC app · Aug 2023 vs. same period last year',
    'impact.a1': 'Installs', 'impact.a2': 'New sign-ups', 'impact.a3': 'Customers buying insurance', 'impact.a4': 'Sales',
    'impact.coreTitle': 'Core insurance system (web), after launch',
    'impact.c1': 'Time to enter one contract', 'impact.c1v': '20 → 10 min',
    'impact.c2': 'Data entry errors', 'impact.c3': 'Contracts processed per day',
    'impact.c4': 'Speed when creating a contract', 'impact.c5': 'Contract completion rate',
    'impact.c6': 'Onboarding time for new staff',
    'impact.awards': 'Awards', 'impact.aw1': 'Outstanding Employee · MIC', 'impact.aw2': 'Excellent Employee · VBI',
    'work.label': '03 · Work', 'work.title': 'Selected projects',
    'work.p1alt': 'MIC non-life insurance app screens',
    'work.problem': 'Problem', 'work.role': 'Role', 'work.result': 'Result',
    'work.p1problem': 'The old app and website couldn’t sell insurance products directly, and had no tools to support the sales team.',
    'work.p1role': 'Set the direction and made the design decisions for the whole app and website.',
    'work.p1result': 'MIC app installs grew from 39k to 187k, insurance buyers from 2k to 27k, and sales rose 180% (Aug 2023 vs. same period last year).',
    'work.view': 'View on Behance',
    'work.p2alt': 'MICPRO app screens', 'work.p2desc': 'MIC’s app for insurance sellers.',
    'work.p3alt': 'MIC app and web design system', 'work.p3desc': 'A shared design system for MIC’s app and web: color, typography and components.',
    'exp.label': '04 · Experience', 'exp.title': '13 years, 5 chapters', 'exp.now': 'present',
    'exp.mic': 'Core insurance system, customer app and web, sales app and web, Bancas.',
    'exp.vbi': 'VBI app and website. Helped build the fast-claims feature, ran A/B tests, trained the team and built a design culture.',
    'exp.nexttech': 'Inso, an insurtech app: user research, wireframes, prototypes and post-launch performance tracking.',
    'exp.vnp': 'Vatgia.com and Vchat: wireframes, prototypes, UI design and cross-device testing.',
    'exp.bibo': 'E-commerce website for mothers: information architecture, shopping and checkout flows.',
    'exp.edu': 'Education',
    'exp.eduText': 'FPT Arena, Multimedia Arts (2010–2013) · Vietnam National University HCMC, Information Technology (2008–2010)',
    'skills.label': '05 · Skills', 'skills.core': 'Expertise', 'skills.lead': 'Team leadership & coaching',
    'skills.present': 'Presentation', 'skills.tools': 'Tools', 'skills.certs': 'Certificates · Interaction Design Foundation',
    'contact.label': '06 · Contact', 'contact.title': 'Let’s build what’s next.',
    'contact.lead': 'I’m open to conversations about design leadership roles. Send me an email, or download my CV for full contact details.',
    'contact.cv': 'Download CV (PDF)', 'contact.follow': 'Follow on Behance',
    'footer.top': 'Back to top ↑'
  };
  var META = {
    vi: { title: 'Brian Nguyễn · Head of Design', cv: 'assets/Brian-Nguyen-CV-VI.pdf' },
    en: { title: 'Brian Nguyen · Head of Design', cv: 'assets/Brian-Nguyen-CV-EN.pdf' }
  };

  var nodes = document.querySelectorAll('[data-i18n]');
  var altNodes = document.querySelectorAll('[data-i18n-alt]');
  var VI = {};
  nodes.forEach(function (n) { VI[n.dataset.i18n] = n.innerHTML; });
  altNodes.forEach(function (n) { VI[n.dataset.i18nAlt] = n.getAttribute('alt'); });
  var current = 'vi';

  function setLang(lang) {
    current = lang;
    var dict = lang === 'en' ? EN : VI;
    nodes.forEach(function (n) { var v = dict[n.dataset.i18n]; if (v != null) n.innerHTML = v; });
    altNodes.forEach(function (n) { var v = dict[n.dataset.i18nAlt]; if (v != null) n.setAttribute('alt', v); });
    document.documentElement.lang = lang;
    document.title = META[lang].title;
    document.querySelectorAll('.js-cv').forEach(function (a) { a.href = META[lang].cv; });
    document.querySelectorAll('.lang button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
    });
    document.querySelectorAll('.count').forEach(function (c) { c.textContent = fmt(+c.dataset.to, +(c.dataset.dec || 0)); });
    try { localStorage.setItem('lang', lang); } catch (e) {}
  }

  function fmt(v, dec) {
    var s = v.toFixed(dec);
    return current === 'vi' ? s.replace('.', ',') : s;
  }

  document.querySelectorAll('.lang button').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.dataset.lang); });
  });

  var start = 'vi';
  var q = new URLSearchParams(location.search).get('lang');
  if (q === 'en' || q === 'vi') start = q;
  else {
    try { start = localStorage.getItem('lang') || start; } catch (e) {}
  }
  if (start === 'en') setLang('en');

  // Viền dưới thanh menu khi cuộn
  var nav = document.querySelector('.nav');
  function onScroll() { nav.classList.toggle('scrolled', window.scrollY > 8); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Hiện dần khi cuộn tới, và đếm số
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function countUp(el) {
    var to = +el.dataset.to, dec = +(el.dataset.dec || 0);
    if (reduce) { el.textContent = fmt(to, dec); return; }
    var t0 = null, dur = 1400;
    function step(t) {
      if (!t0) t0 = t;
      var p = Math.min((t - t0) / dur, 1), e = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt(to * e, dec);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.classList.add('in');
        en.target.querySelectorAll('.count').forEach(countUp);
        io.unobserve(en.target);
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
  }
})();

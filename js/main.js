/* ==========================================================================
   Lion Borehole Drilling — Main JS
   Single config object: change phone/links here, they propagate everywhere.
   ========================================================================== */

const SITE_CONFIG = {
  phone: '0694143965',
  phonePretty: '069 414 3965',
  whatsapp: 'https://wa.me/27694143965',
  whatsappDefault: 'https://wa.me/27694143965?text=Hi%20Lion%20Borehole%20Drilling!%20I%20would%20like%20to%20get%20a%20free%20quote.',
  // TODO: replace # with real social media URLs when available
  facebook:  '#', // TODO: https://www.facebook.com/YOURPAGE
  tiktok:    '#', // TODO: https://www.tiktok.com/@YOURACCOUNT
  instagram: '#', // TODO: https://www.instagram.com/YOURACCOUNT
};

/* ---------- Expose config globally (used by contact form etc.) ---------- */
window.SITE_CONFIG = SITE_CONFIG;

/* ---------- Inject dynamic values ---------- */
document.addEventListener('DOMContentLoaded', () => {

  // Footer year
  document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  // Stamp whatsapp links
  document.querySelectorAll('[data-wa]').forEach(el => {
    const msg = el.dataset.wa || '';
    el.href = msg
      ? `${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`
      : SITE_CONFIG.whatsappDefault;
  });

  // Stamp phone links
  document.querySelectorAll('[data-tel]').forEach(el => {
    el.href = `tel:+27${SITE_CONFIG.phone.replace(/^0/, '')}`;
    if (!el.textContent.trim()) el.textContent = SITE_CONFIG.phonePretty;
  });

  // Social links
  document.querySelectorAll('[data-social="facebook"]').forEach(el => { el.href = SITE_CONFIG.facebook; });
  document.querySelectorAll('[data-social="tiktok"]').forEach(el => { el.href = SITE_CONFIG.tiktok; });
  document.querySelectorAll('[data-social="instagram"]').forEach(el => { el.href = SITE_CONFIG.instagram; });

  /* ---------- Mobile nav toggle ---------- */
  const toggle = document.getElementById('nav-toggle');
  const nav    = document.getElementById('main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', !expanded);
      nav.classList.toggle('open', !expanded);
    });
    // Close on nav link click
    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('open');
      });
    });
  }

  /* ---------- Active nav link ---------- */
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('#main-nav a').forEach(a => {
    const href = a.getAttribute('href').split('/').pop();
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
      a.setAttribute('aria-current', 'page');
    }
  });

  /* ---------- Hero video: pause if off screen on mobile ---------- */
  const heroVideo = document.getElementById('hero-video');
  if (heroVideo) {
    heroVideo.muted = true;
    heroVideo.play().catch(() => {});
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(entries => {
        entries.forEach(e => e.isIntersecting ? heroVideo.play() : heroVideo.pause());
      }, { threshold: 0.1 }).observe(heroVideo);
    }
  }

  /* ---------- Scroll Reveal ---------- */
  if ('IntersectionObserver' in window) {
    const revealObs = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -48px 0px' });

    document.querySelectorAll('[data-reveal]').forEach(el => revealObs.observe(el));
  } else {
    // Fallback for old browsers: show everything
    document.querySelectorAll('[data-reveal]').forEach(el => el.classList.add('revealed'));
  }

  /* ---------- FAQ Accordion ---------- */
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      // Close all
      document.querySelectorAll('.faq-question').forEach(b => {
        b.setAttribute('aria-expanded', 'false');
        b.nextElementSibling?.classList.remove('open');
      });
      // Open clicked if it was closed
      if (!expanded) {
        btn.setAttribute('aria-expanded', 'true');
        btn.nextElementSibling?.classList.add('open');
      }
    });
  });

  /* ---------- Gallery filter (projects.html) ---------- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (filterBtns.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-pressed', 'false'); });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
        const cat = btn.dataset.filter;
        document.querySelectorAll('.gallery-item').forEach(item => {
          if (cat === 'all' || item.dataset.category === cat) {
            item.dataset.hidden = 'false';
            item.style.display = '';
          } else {
            item.dataset.hidden = 'true';
            item.style.display = 'none';
          }
        });
      });
    });
  }

  /* ---------- Lightbox ---------- */
  const lightbox      = document.getElementById('lightbox');
  const lbMedia       = document.getElementById('lb-media');
  const lbCaption     = document.getElementById('lb-caption');
  const lbClose       = document.getElementById('lb-close');
  const lbPrev        = document.getElementById('lb-prev');
  const lbNext        = document.getElementById('lb-next');

  let lbItems = [];
  let lbIndex = 0;

  function openLightbox(items, index) {
    lbItems = items;
    lbIndex = index;
    renderLightbox();
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
    lbClose.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
    // Stop any playing video
    if (lbMedia) {
      const vid = lbMedia.querySelector('video');
      if (vid) vid.pause();
      lbMedia.innerHTML = '';
    }
  }

  function renderLightbox() {
    if (!lbMedia) return;
    const item = lbItems[lbIndex];
    // Stop previous video
    const prevVid = lbMedia.querySelector('video');
    if (prevVid) prevVid.pause();
    lbMedia.innerHTML = '';

    if (item.type === 'video') {
      const vid = document.createElement('video');
      vid.src = item.src;
      vid.controls = true;
      vid.autoplay = true;
      vid.className = 'lightbox-media';
      if (item.poster) vid.poster = item.poster;
      lbMedia.appendChild(vid);
    } else {
      const img = document.createElement('img');
      img.src = item.src;
      img.alt = item.caption || '';
      img.className = 'lightbox-media';
      lbMedia.appendChild(img);
    }
    if (lbCaption) lbCaption.textContent = item.caption || '';

    if (lbPrev) lbPrev.style.visibility = lbItems.length > 1 ? 'visible' : 'hidden';
    if (lbNext) lbNext.style.visibility = lbItems.length > 1 ? 'visible' : 'hidden';
  }

  if (lightbox) {
    lbClose?.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
    lbPrev?.addEventListener('click', () => { lbIndex = (lbIndex - 1 + lbItems.length) % lbItems.length; renderLightbox(); });
    lbNext?.addEventListener('click', () => { lbIndex = (lbIndex + 1) % lbItems.length; renderLightbox(); });

    document.addEventListener('keydown', e => {
      if (!lightbox.classList.contains('open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') { lbIndex = (lbIndex - 1 + lbItems.length) % lbItems.length; renderLightbox(); }
      if (e.key === 'ArrowRight') { lbIndex = (lbIndex + 1) % lbItems.length; renderLightbox(); }
    });

    // Touch swipe
    let touchStartX = 0;
    lightbox.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].clientX; }, { passive: true });
    lightbox.addEventListener('touchend', e => {
      const dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 60) {
        if (dx < 0) lbIndex = (lbIndex + 1) % lbItems.length;
        else        lbIndex = (lbIndex - 1 + lbItems.length) % lbItems.length;
        renderLightbox();
      }
    }, { passive: true });

    // Open lightbox from gallery
    document.querySelectorAll('.gallery-item[data-src]').forEach((item, _, all) => {
      item.addEventListener('click', () => {
        const visibleItems = [...all].filter(i => i.style.display !== 'none').map(i => ({
          src:     i.dataset.src,
          type:    i.dataset.type || 'image',
          poster:  i.dataset.poster || '',
          caption: i.dataset.caption || '',
        }));
        const clickedSrc = item.dataset.src;
        const idx = visibleItems.findIndex(i => i.src === clickedSrc);
        openLightbox(visibleItems, idx >= 0 ? idx : 0);
      });
      item.setAttribute('tabindex', '0');
      item.setAttribute('role', 'button');
      item.setAttribute('aria-label', item.dataset.caption || 'View project media');
      item.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); item.click(); } });
    });
  }

  /* ---------- Contact / Quote form (contact.html) ---------- */
  const quoteForm = document.getElementById('quote-form');
  if (quoteForm) {
    quoteForm.addEventListener('submit', e => {
      e.preventDefault();
      if (!validateForm(quoteForm)) return;

      const name     = quoteForm.querySelector('[name="name"]').value.trim();
      const phone    = quoteForm.querySelector('[name="phone"]').value.trim();
      const town     = quoteForm.querySelector('[name="town"]').value.trim();
      const service  = quoteForm.querySelector('[name="service"]').value;
      const propType = quoteForm.querySelector('[name="property"]').value;
      const message  = quoteForm.querySelector('[name="message"]').value.trim();

      const waText = [
        `Hi Lion Borehole Drilling! I'd like a FREE quote.`,
        ``,
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Town/Area: ${town}`,
        `Service needed: ${service}`,
        `Property type: ${propType}`,
        message ? `Message: ${message}` : '',
      ].filter(Boolean).join('\n');

      window.open(`${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(waText)}`, '_blank');

      // Show success state
      quoteForm.style.display = 'none';
      const success = document.getElementById('form-success');
      if (success) { success.classList.add('show'); success.focus(); }
    });
  }

  function validateForm(form) {
    let valid = true;
    form.querySelectorAll('[required]').forEach(field => {
      const err = field.parentElement.querySelector('.error-msg');
      if (!field.value.trim()) {
        field.classList.add('invalid');
        if (err) err.classList.add('show');
        valid = false;
      } else {
        field.classList.remove('invalid');
        if (err) err.classList.remove('show');
      }
    });
    return valid;
  }

  // Clear validation on input
  document.querySelectorAll('[required]').forEach(field => {
    field.addEventListener('input', () => {
      field.classList.remove('invalid');
      const err = field.parentElement.querySelector('.error-msg');
      if (err) err.classList.remove('show');
    });
  });

});

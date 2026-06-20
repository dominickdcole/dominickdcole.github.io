// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
    const spans = toggle.querySelectorAll('span');
    const open = links.classList.contains('open');
    spans[0].style.transform = open ? 'translateY(6px) rotate(45deg)' : '';
    spans[1].style.opacity   = open ? '0' : '';
    spans[2].style.transform = open ? 'translateY(-6px) rotate(-45deg)' : '';
  });
  links.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => links.classList.remove('open'))
  );
}

// Resume link: until resume.pdf is added, show a gentle notice instead of 404
const resume = document.getElementById('resume-link');
if (resume) {
  resume.addEventListener('click', async (e) => {
    try {
      const r = await fetch(resume.getAttribute('href'), { method: 'HEAD' });
      if (!r.ok) throw new Error();
    } catch {
      e.preventDefault();
      const label = resume.querySelector('.arr') ? resume : null;
      resume.textContent = 'Résumé coming soon';
      setTimeout(() => { resume.innerHTML = 'View résumé <span class="arr">↗</span>'; }, 1800);
    }
  });
}

// Scroll reveal
const els = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && els.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  els.forEach((el, i) => { el.style.transitionDelay = (i % 6) * 60 + 'ms'; io.observe(el); });
} else {
  els.forEach(el => el.classList.add('in'));
}

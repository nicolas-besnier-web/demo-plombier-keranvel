(function () {
  var form = document.getElementById('form');
  var status = document.getElementById('form-status');
  if (form) {
    form.addEventListener('submit', function () {
      status.textContent = 'Ceci est un site de démonstration : aucun message n’est envoyé.';
      status.focus();
    });
  }

  var menu = document.querySelector('.menu');
  if (menu) {
    menu.addEventListener('click', function (e) {
      if (e.target.closest('nav a')) menu.removeAttribute('open');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.open) { menu.removeAttribute('open'); menu.querySelector('summary').focus(); }
    });
  }

  var items = document.querySelectorAll('.reveal');
  var calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!('IntersectionObserver' in window) || calm) {
    items.forEach(function (el) { el.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px' });
  items.forEach(function (el, i) {
    el.style.setProperty('--d', (i % 4) * 70 + 'ms');
    io.observe(el);
  });
})();

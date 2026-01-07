// Veilscope marketing JS (tiny, no frameworks)
(function () {
  var toggle = document.getElementById('nav-toggle');
  var burger = document.querySelector('.hamburger');

  function setAria() {
    if (burger && toggle) burger.setAttribute('aria-expanded', String(toggle.checked));
  }

  if (toggle) {
    // Close menu when switching to desktop
    var mq = window.matchMedia('(min-width: 901px)');
    function closeOnChange() { toggle.checked = false; setAria(); }
    if (mq.addEventListener) mq.addEventListener('change', closeOnChange);
    else if (mq.addListener) mq.addListener(closeOnChange);
    window.addEventListener('orientationchange', closeOnChange);

    // Keep scroll position when opening the hamburger (no jump)
    if (burger) {
      var lastY = 0;
      burger.addEventListener('mousedown', function(){ lastY = window.scrollY; }, {passive:true});
      burger.addEventListener('click', function(){ setTimeout(function(){ window.scrollTo(0, lastY); }, 0); });
    }

    // Close drawer when a link inside is clicked
    var drawer = document.getElementById('mobile-menu');
    if (drawer) {
      drawer.addEventListener('click', function (e) {
        var el = e.target;
        if (el.closest('.drawer-link') || el.closest('.drawer-actions a')) {
          toggle.checked = false; setAria();
        }
      });
    }

    toggle.addEventListener('change', setAria);
    setAria();
  }

  // Footer year
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Newsletter (dummy)
  var newsletter = document.querySelector('.newsletter');
  if (newsletter) {
    newsletter.addEventListener('submit', function (e) {
      e.preventDefault();
      var email = newsletter.querySelector('input[type="email"]');
      var msg = newsletter.querySelector('.newsletter-msg');
      if (email && email.value.trim().length) {
        msg.textContent = 'Thanks! Please check your inbox to confirm.';
        email.value = '';
      } else {
        msg.textContent = 'Please enter a valid email address.';
      }
    });
  }

  // Contact form (dummy)
  var contact = document.getElementById('contact-form');
  if (contact) {
    contact.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = document.getElementById('contact-msg');
      msg.textContent = 'Thanks — we received your message and will respond soon.';
      contact.reset();
    });
  }
})();
// ONE place to control "Get Started" link site-wide
(function(){
  const APP_URL = 'https://app.veilscope.com/signup';
  const ready = (fn) => (document.readyState !== 'loading') ? fn() : document.addEventListener('DOMContentLoaded', fn);
  ready(() => {
    document.querySelectorAll('a.btn-get-started').forEach(a => { a.href = APP_URL; });
  });
})();
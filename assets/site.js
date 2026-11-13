// Mobile menu and the Team dropdown
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('site-nav');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
  document.querySelectorAll('.sub-toggle').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var li = btn.closest('.has-sub');
      var open = li.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });
  document.addEventListener('click', function () {
    document.querySelectorAll('.has-sub.open').forEach(function (li) {
      li.classList.remove('open');
      li.querySelector('.sub-toggle').setAttribute('aria-expanded', 'false');
    });
  });
})();

// Publication counts: fill every [data-count] with the number of entries its selector matches,
// so adding a paper never requires editing a number by hand
(function () {
  document.querySelectorAll('[data-count]').forEach(function (el) {
    el.textContent = document.querySelectorAll(el.getAttribute('data-count')).length;
  });
})();

// Mark JS active so reveal animations are enabled (content stays visible without JS)
document.documentElement.classList.add('js');

// Mobile nav toggle
document.addEventListener('click', function (e) {
  var toggle = e.target.closest('.nav-toggle');
  if (toggle) {
    document.querySelector('.nav-links').classList.toggle('open');
  } else if (!e.target.closest('.nav-links')) {
    var nl = document.querySelector('.nav-links');
    if (nl) nl.classList.remove('open');
  }
});

// Scroll reveal
var io = new IntersectionObserver(function (entries) {
  entries.forEach(function (en) {
    if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });

// Contact form (demo only — no backend)
var form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var note = document.getElementById('formNote');
    note.textContent = "Thanks — this is a demo form. Wire it to your email/CRM to receive messages.";
    note.style.color = 'var(--cyan-2)';
    form.reset();
  });
}

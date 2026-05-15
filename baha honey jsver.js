window.onload = function() {
  alert("🍯 أهلاً بك في موقع عسل الباحة الطبيعي!");
};
function orderNow() {
  var result = confirm("هل تريد طلب عسل الباحة الطبيعي؟");
  if (result) {
    alert("✅ شكراً! سيتم التواصل معك قريباً.");
  } else {
    alert("يسعدنا خدمتك في أي وقت 😊");
  }
}
<button onclick="orderNow()">اطلب الآن</button>
window.onload = function() {
  var name = prompt("أهلاً! ما اسمك؟");
  if (name) {
    alert("مرحباً " + name + "! 🍯 نورت موقع عسل الباحة");
  }
};
function toggleNav() {
  document.getElementById('navLinks').classList.toggle('open');
}

window.addEventListener('scroll', () => {
  const btn = document.getElementById('scrollTop');
  if (btn) {
    btn.style.display = window.scrollY > 400 ? 'flex' : 'none';
  }
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.type-card,.benefit-card,.review-card,.how-step,.quality-item,.cert-card')
    .forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity .6s ease, transform .6s ease';
      observer.observe(el);
    });
});


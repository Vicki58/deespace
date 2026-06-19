const reveals = document.querySelectorAll('.reveal');

if (reveals.length) {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    reveals.forEach(el => observer.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('visible'));
  }
}

const nav = document.querySelector('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.style.background = window.scrollY > 60 ? 'rgba(7,20,61,0.95)' : 'rgba(7,20,61,0.7)';
  });
}

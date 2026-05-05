// Mobile menu toggle và scroll reveal animation
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
const revealItems = document.querySelectorAll('.reveal');
const yearElement = document.getElementById('year');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  revealItems.forEach((item, index) => {
    const elementTop = item.getBoundingClientRect().top;
    const delay = index * 100;
    if (elementTop < windowHeight - 100) {
      setTimeout(() => {
        item.classList.add('active');
      }, delay);
    }
  });
};

window.addEventListener('scroll', revealOnScroll, { passive: true });
window.addEventListener('load', () => {
  revealOnScroll();
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});

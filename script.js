// Mobile menu toggle và scroll reveal animation
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
const themeSwitcher = document.querySelector('.theme-switcher');
const themeModes = ['white', 'dark', 'pink'];
const revealItems = document.querySelectorAll('.reveal');
const yearElement = document.getElementById('year');

const setTheme = (mode) => {
  document.documentElement.dataset.theme = mode;
  if (themeSwitcher) {
    themeSwitcher.textContent = mode.charAt(0).toUpperCase() + mode.slice(1);
  }
  localStorage.setItem('portfolioTheme', mode);
};

const getSavedTheme = () => {
  return localStorage.getItem('portfolioTheme') || 'white';
};

if (navToggle) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

if (themeSwitcher) {
  themeSwitcher.addEventListener('click', () => {
    const current = document.documentElement.dataset.theme || 'white';
    const nextIndex = (themeModes.indexOf(current) + 1) % themeModes.length;
    setTheme(themeModes[nextIndex]);
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
  setTheme(getSavedTheme());
});

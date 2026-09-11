const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.site-nav');
const themeButton = document.querySelector('.theme-button');
const themeLabel = themeButton?.querySelector('.theme-label');
const themeIcon = themeButton?.querySelector('.theme-icon');

const setTheme = (theme) => {
  const isLight = theme === 'light';
  document.body.classList.toggle('light', isLight);
  if (themeLabel) themeLabel.textContent = isLight ? 'Dark mode' : 'Light mode';
  if (themeIcon) themeIcon.textContent = isLight ? '☾' : '☼';
  themeButton?.setAttribute('aria-label', isLight ? 'Switch to dark mode' : 'Switch to light mode');
  localStorage.setItem('portfolio-theme', theme);
};

setTheme(localStorage.getItem('portfolio-theme') || 'dark');

themeButton?.addEventListener('click', () => {
  setTheme(document.body.classList.contains('light') ? 'dark' : 'light');
});

menuButton?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.querySelector('span').textContent = isOpen ? '×' : '+';
});

document.querySelectorAll('.site-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
    const symbol = menuButton?.querySelector('span');
    if (symbol) symbol.textContent = '+';
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

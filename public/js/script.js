document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;
  const lightBtn = document.getElementById('lightModeBtn');
  const darkBtn = document.getElementById('darkModeBtn');
  const logo = document.getElementById('siteLogo');

  const savedTheme = localStorage.getItem('theme') ?? 'light';
  setTheme(savedTheme);

  lightBtn?.addEventListener('click', () => setTheme('light'));
  darkBtn?.addEventListener('click', () => setTheme('dark'));

  function setTheme(theme) {
    root.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);

    if (logo) {
      const lightSrc = logo.dataset.logoLight ?? '/images/lightmode.svg';
      const darkSrc = logo.dataset.logoDark ?? '/images/darkmode.svg';
      logo.src = theme === 'dark' ? darkSrc : lightSrc;
    }
  }
});

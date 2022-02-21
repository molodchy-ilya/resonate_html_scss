//*** HEADER ***//
// switch theme
const header = document.querySelector('.header');
const headerLogo = document.querySelector('.header__logo');
const menu = document.querySelector('.menu');

if (headerLogo) {
  headerLogo.addEventListener('click', () => {
    header.classList.toggle('header_theme-light');
  });
}

if (header) {
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 992 && header.classList.contains('header_open')) {
      header.classList.remove('header_open');
    }
  });
}

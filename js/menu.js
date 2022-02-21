//*** MENU ***//
// show/hide
const burger = document.querySelector('.header__burger');
const fader = document.querySelector('.fader');
[burger, fader].forEach((item) => {
  item.addEventListener('click', () => {
    header.classList.toggle('header_open');
  });
});

// change active link
const links = document.querySelectorAll('.menu__link');
if (links) {
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      const currentActive = document.querySelector('.menu__link_active');
      currentActive.classList.remove('menu__link_active');

      link.classList.add('menu__link_active');
    });
  });
}

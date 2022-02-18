//*** MENU ***//
// show/hide
const burger = document.querySelector('.header__burger');
// const menu = document.querySelector('.menu');
const fader = document.querySelector('.fader');
if (burger) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('header__burger_close');
    // if (menu) {
    menu.classList.toggle('menu_show');
    fader.classList.toggle('fader_show');
    // }
  });
}

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

// close on click on fader
if (fader) {
  fader.addEventListener('click', () => {
    if (menu.classList.contains('menu_show')) {
      menu.classList.remove('menu_show');
      burger.classList.remove('header__burger_close');
      fader.classList.remove('fader_show');
    }
  });
}

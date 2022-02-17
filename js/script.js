// show/hide menu
const burger = document.querySelector('.header__burger');
if (burger) {
  burger.addEventListener('click', () => {
    const menu = document.querySelector('.menu');
    if (menu) {
      menu.classList.toggle('menu_show');
    }
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

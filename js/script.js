const burger = document.querySelector('.header__burger');
if (burger) {
  burger.addEventListener('click', () => {
    const menu = document.querySelector('.menu');
    if (menu) {
      menu.classList.toggle('menu_show');
    }
  });
}

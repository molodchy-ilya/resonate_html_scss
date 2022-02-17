// show/hide menu
const burger = document.querySelector('.header__burger');
if (burger) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('header__burger_close');
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

// change header/menu style
const header = document.querySelector('.header');
const headerLogo = document.querySelector('.header__logo');
const contacts = document.querySelectorAll('.contact');
const menu = document.querySelector('.menu');
const contactBtns = [];
[...contacts].forEach((contact) => {
  [...contact.childNodes].forEach((child) => {
    if (child.classList && child.classList.contains('btn')) {
      contactBtns.push(child);
    }
  });
});
console.log(menu);
console.log(contactBtns);

if (headerLogo && contacts && menu) {
  headerLogo.addEventListener('click', () => {
    header.classList.toggle('header_light');
    contacts.forEach((contact) => {
      contact.classList.toggle('contact_blue');
    });
    menu.classList.toggle('menu_blue');
    contactBtns.forEach((btn) => {
      btn.classList.toggle('btn_clr-blue');
    });
  });
}

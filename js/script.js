//*** MENU ***//
// show/hide
const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.menu');
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

//*** HEADER ***//
// switch theme
const header = document.querySelector('.header');
const headerLogo = document.querySelector('.header__logo');
const contacts = document.querySelectorAll('.contact');
// const menu = document.querySelector('.menu');
const contactBtns = [];
[...contacts].forEach((contact) => {
  [...contact.childNodes].forEach((child) => {
    if (child.classList && child.classList.contains('btn')) {
      contactBtns.push(child);
    }
  });
});

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

//*** ACCORDION ***//
// show/hide text
const accordionItems = document.querySelectorAll('.accordion__item');
const accordionTitles = document.querySelectorAll(
  '.accordion__item-title-container',
);
if (accordionTitles) {
  accordionTitles.forEach((title) => {
    title.addEventListener('click', () => {
      title.parentElement.classList.toggle('accordion__item_open');

      accordionItems.forEach((item) => {
        if (item !== title.parentElement)
          item.classList.remove('accordion__item_open');
      });
    });
  });
}

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

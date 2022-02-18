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

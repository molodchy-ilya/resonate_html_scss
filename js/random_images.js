const images = [...document.querySelectorAll('.card__img-container')];
const colors = ['#083090', '#d3d8e4', '#ff779a', '#070707'];

images.map((image) => {
  image.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];
});

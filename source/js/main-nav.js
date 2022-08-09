const buttonNav = document.querySelector('.main-nav__toggle');
const mainNavClosed = document.querySelector('.main-nav');

const buttonAbout = document.querySelector('.about__button');
const listAbout = document.querySelector('.about__list');

buttonNav.addEventListener('click', function () {
  mainNavClosed.classList.toggle("main-nav--opened");
})

buttonAbout.addEventListener('click', function () {
  listAbout.classList.toggle("visually-hidden");
})

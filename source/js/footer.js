const buttonProducts = document.querySelector('.products__icon');
const buttonCompany = document.querySelector('.company__icon');
const buttonClient = document.querySelector('.client__icon');
const listProducts = document.querySelector('.products__list');
const listCompany = document.querySelector('.company__list');
const listClient = document.querySelector('.client__list');
const newLocal = "visually-hidden";

buttonProducts.addEventListener('click', function () {
  listProducts.classList.toggle(newLocal);
});

buttonCompany.addEventListener('click', function () {
  listCompany.classList.toggle(newLocal);
});

buttonClient.addEventListener('click', function () {
  listClient.classList.toggle(newLocal);
});

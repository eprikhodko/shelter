import '../../scss/main.scss';

console.log('hello, this is main page');

const closeButton = document.querySelector('.main-header__button-close-nav');
const openButton = document.querySelector('.main-header__button-open-nav');
const nav = document.querySelector('.main-header__nav-list-wrapper');

closeButton.addEventListener('click', () => {
  nav.classList.remove('navigation-open');
});

openButton.addEventListener('click', () => {
  nav.classList.add('navigation-open');
});

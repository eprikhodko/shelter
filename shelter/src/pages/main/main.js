import '../../scss/main.scss';

console.log('hello, this is main page');

const closeButton = document.querySelector('.main-header__button-close-nav');
const openButton = document.querySelector('.main-header__button-open-nav');
const nav = document.querySelector('.main-header__nav-list-wrapper');
const navItems = document.querySelectorAll('.main-header__nav-list-item');
const body = document.querySelector('body');

closeButton.addEventListener('click', () => {
  nav.classList.remove('navigation-open');
  body.classList.remove('disable-scroll');
});

openButton.addEventListener('click', () => {
  nav.classList.add('navigation-open');
  body.classList.add('disable-scroll');
});

// close mobile nav when user click any item from mobile menu
navItems.forEach((item) => {
  item.addEventListener('click', () => {
    nav.classList.remove('navigation-open');
    body.classList.remove('disable-scroll');
  });
});

console.log(body);

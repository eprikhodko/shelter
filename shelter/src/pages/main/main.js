import '../../scss/main.scss';

console.log('hello, this is main page');

// code for burger menu
const closeButton = document.querySelector('.header-nav__button-close-nav');
const openButton = document.querySelector('.header-nav__button-open-nav');
const nav = document.querySelector('.header-nav__nav-list-wrapper');
const navItems = document.querySelectorAll('.header-nav__nav-list-item');
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

// code for carousel
fetch('../../assets/js/pets.json')
  .then((response) => response.json())
  .then((data) => console.log(data));

const BTN_LEFT = document.querySelector('#btn-left');
const BTN_RIGHT = document.querySelector('#btn-right');
const CAROUSEL = document.querySelector('#carousel');

const moveLeft = () => {
  CAROUSEL.classList.add('transition-left');
  BTN_LEFT.removeEventListener('click', moveLeft);
};

BTN_LEFT.addEventListener('click', moveLeft);

CAROUSEL.addEventListener('animationend', () => {
  CAROUSEL.classList.remove('transition-left');
});

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
const ITEM_LEFT = document.querySelector('#item-left');
const ITEM_RIGHT = document.querySelector('#item-right');

const moveLeft = () => {
  CAROUSEL.classList.add('transition-left');
  BTN_LEFT.removeEventListener('click', moveLeft);
  BTN_RIGHT.removeEventListener('click', moveRight);
};

const moveRight = () => {
  CAROUSEL.classList.add('transition-right');
  BTN_RIGHT.removeEventListener('click', moveRight);
  BTN_LEFT.removeEventListener('click', moveLeft);
};

BTN_LEFT.addEventListener('click', moveLeft);
BTN_RIGHT.addEventListener('click', moveRight);

CAROUSEL.addEventListener('animationend', (animationEvent) => {
  if (animationEvent.animationName === 'move-left') {
    CAROUSEL.classList.remove('transition-left');

    const leftItems = document.querySelector('#item-left').innerHTML;
    document.querySelector('#item-active').innerHTML = leftItems;

    // создадим новый элемент
    const card1 = document.createElement('div');
    card1.classList.add('card');
    // запишем внутрь этого элемента рандомное число
    card1.innerText = Math.floor(Math.random() * 8);

    // создадим новый элемент
    const card2 = document.createElement('div');
    card2.classList.add('card');
    // запишем внутрь этого элемента рандомное число
    card2.innerText = Math.floor(Math.random() * 8);

    // создадим новый элемент
    const card3 = document.createElement('div');
    card3.classList.add('card');
    // запишем внутрь этого элемента рандомное число
    card3.innerText = Math.floor(Math.random() * 8);

    // удалим все что было внутри левого айтема
    ITEM_LEFT.innerHTML = '';
    // добавим новые элементы внутрь левого айтема
    // можно заменить это на цикл
    ITEM_LEFT.appendChild(card1);
    ITEM_LEFT.appendChild(card2);
    ITEM_LEFT.appendChild(card3);
  } else {
    CAROUSEL.classList.remove('transition-right');
  }

  BTN_LEFT.addEventListener('click', moveLeft);
  BTN_RIGHT.addEventListener('click', moveRight);
});

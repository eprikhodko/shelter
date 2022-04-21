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
// fetch('../../assets/js/pets.json')
//   .then((response) => response.json())
//   .then((data) => console.log(data));

const url = '../../assets/js/pets.json';
async function getData(url) {
  const response = await fetch(url);

  return response.json();
}

const data = await getData(url);

console.log(data);

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

    // для карточек животных, когда мы будем добавлять имена животных или ссылки на страницу с животными, это уже будет отдельно для каждой карточки. То есть, мы можем создать восемь функций, которые будут генерировать нам шаблон для восьми различных карточек, но если мы не знаем какие именно данные нам приходят, мы можем подставлять их на момент создания и заполнения новой карточки. В данном случае у нас случайное число, которое мы подставляем индивидуально для каждой карточки, но сам шаблон у нас один на все карточки.
    const createCardTemplate = () => {
      const card = document.createElement('div');
      card.classList.add('card');
      return card;
    };

    // создадим новый элемент
    // внутри дива мы можем создавать разные элементы, например createElementImage, createElementButton, итд, и все это положить внутрь нашего дива при помощи appendChild, нужно не забыть задать новым элементам новые классы.
    const card1 = createCardTemplate();
    // запишем внутрь этого элемента рандомное число
    card1.innerText = Math.floor(Math.random() * 8);

    // создадим новый элемент
    const card2 = createCardTemplate();
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

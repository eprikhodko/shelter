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

const petsData = await getData(url);

console.log(petsData);

const BTN_LEFT = document.querySelector('#btn-left');
const BTN_RIGHT = document.querySelector('#btn-right');
const CAROUSEL = document.querySelector('#carousel');
const ITEM_LEFT = document.querySelector('#item-left');
const ITEM_RIGHT = document.querySelector('#item-right');
const ITEM_ACTIVE = document.querySelector('#item-active');

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

const setInitialCentralItem = (petKey) => {
  // ITEM_ACTIVE.innerHTML = '';

  const createCardTemplate = () => {
    const card = document.createElement('div');
    card.classList.add('card');
    return card;
  };

  // создадим карточку питомца
  // внутри дива мы можем создавать разные элементы, например createElementImage, createElementButton, итд, и все это положить внутрь нашего дива при помощи appendChild, нужно не забыть задать новым элементам новые классы.
  const card1 = createCardTemplate();

  // const petKey = Math.floor(Math.random() * 7);
  // создадим элемент img
  const img = document.createElement('img');
  img.classList.add('card__image');
  // зададим элементу img src
  img.src = petsData[petKey].img;
  // добавим элемент img внутрь нашей карточки
  card1.appendChild(img);

  // добавим в карточку имя питомца
  const petName = document.createElement('p');
  petName.classList.add('card__pet-name');
  // console.log(petName);
  petName.innerText = petsData[petKey].name;
  card1.appendChild(petName);

  // добавим в карточку кнопку learn more
  const buttonLearnMore = document.createElement('button');
  buttonLearnMore.type = 'button';
  buttonLearnMore.classList.add('button-secondary');
  buttonLearnMore.classList.add('card__button');
  buttonLearnMore.innerText = 'Learn more';
  card1.appendChild(buttonLearnMore);

  // добавим карточку с питомцев в центральный айтем
  ITEM_ACTIVE.appendChild(card1);

  // <div class="card">
  //   <img
  //     src="../../assets/img/pets-katrine.png"
  //     alt="britain breed cat"
  //     class="card__image"
  //   />
  //   <p class="card__pet-name">Katrine</p>
  //   <button class="button-secondary card__button" type="button">
  //     Learn more
  //   </button>
  // </div>;
};

// setInitialCentralItem();

// это мне где надо тогда сгенерировать список трех уникальных ключей? Чтобы мне потом эти ключи передавать в функцию что ли и уже генерировать в цикле самом три уникальных карточки?
const generateUniquePetsKeys = () => {
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  // Used like so
  let arr = [0, 1, 2, 3, 4, 5, 6, 7];
  shuffle(arr);
  // console.log(arr);
  return shuffle(arr);
};

const arrayOfThreeUniqueValues = generateUniquePetsKeys();
console.log(arrayOfThreeUniqueValues);

for (let i = 0; i < 3; i += 1) {
  setInitialCentralItem(arrayOfThreeUniqueValues[i]);
}

CAROUSEL.addEventListener('animationend', (animationEvent) => {
  if (animationEvent.animationName === 'move-left') {
    CAROUSEL.classList.remove('transition-left');

    const leftItems = document.querySelector('#item-left').innerHTML;
    ITEM_ACTIVE.innerHTML = leftItems;

    // для карточек животных, когда мы будем добавлять имена животных или ссылки на страницу с животными, это уже будет отдельно для каждой карточки. То есть, мы можем создать восемь функций, которые будут генерировать нам шаблон для восьми различных карточек, но если мы не знаем какие именно данные нам приходят, мы можем подставлять их на момент создания и заполнения новой карточки. В данном случае у нас случайное число, которое мы подставляем индивидуально для каждой карточки, но сам шаблон у нас один на все карточки.
    const createCardTemplate = () => {
      const card = document.createElement('div');
      card.classList.add('card');
      return card;
    };

    // <div class="card">
    //   <img
    //     src="../../assets/img/pets-katrine.png"
    //     alt="britain breed cat"
    //     class="card__image"
    //   />
    //   <p class="card__pet-name">Katrine</p>
    //   <button class="button-secondary card__button" type="button">
    //     Learn more
    //   </button>
    // </div>;

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

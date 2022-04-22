import '../../scss/main.scss';

console.log('hello, this is main page');

// code for burger menu
// const closeButton = document.querySelector('.header-nav__button-close-nav');
const openButton = document.querySelector('.header-nav__button-open-nav');
const nav = document.querySelector('.header-nav__nav-list-wrapper');
const navItems = document.querySelectorAll('.header-nav__nav-list-item');
const body = document.querySelector('body');

// closeButton.addEventListener('click', () => {
//   nav.classList.remove('navigation-open');
//   body.classList.remove('disable-scroll');
// });

openButton.addEventListener('click', () => {
  nav.classList.toggle('navigation-open');
  body.classList.toggle('disable-scroll');
  openButton.classList.toggle('header-nav__button-open-nav_rotate');
});

// close mobile nav when user click any item from mobile menu
navItems.forEach((item) => {
  item.addEventListener('click', () => {
    nav.classList.remove('navigation-open');
    body.classList.remove('disable-scroll');
  });
});

// code for carousel
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

// set initial pets indexes for carousel
let petsNums = [4, 0, 2];

const generateNewNumbersBasedOnOldNumbers = (oldNums) => {
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

  let arr = [0, 1, 2, 3, 4, 5, 6, 7];

  let shuffledArray = shuffle(arr);

  // смержим старый массив из трех чисел, и новый шаффл массив. Потом сделаем из этого массива сет. Если длина сета такая же как длина смерженного массива, тогда дубликатов нет, и мы возвращаем shuffledArray. Если же дубликаты есть, то нам нужно запустить эту функцию снова. Base case - когда у нас сет равен длине массива.
  const mergedArray = shuffledArray.slice(0, 3).concat(oldNums.slice(0, 3));

  if (mergedArray.length === [...new Set(mergedArray)].length) {
    petsNums = shuffledArray.slice(0, 3);
    return shuffledArray.slice(0, 3);
  } else {
    return generateNewNumbersBasedOnOldNumbers(oldNums);
  }
};

const moveLeft = () => {
  CAROUSEL.classList.add('transition-left');
  BTN_LEFT.removeEventListener('click', moveLeft);
  BTN_RIGHT.removeEventListener('click', moveRight);

  ITEM_LEFT.innerHTML = '';
  generateNewNumbersBasedOnOldNumbers(petsNums);

  // сгенерируем три карточки для левого айтема
  for (let i = 0; i < 3; i += 1) {
    setLeftItem(petsNums[i]);
  }

  console.log('current numbers state', petsNums);
};

const moveRight = () => {
  CAROUSEL.classList.add('transition-right');
  BTN_RIGHT.removeEventListener('click', moveRight);
  BTN_LEFT.removeEventListener('click', moveLeft);

  ITEM_RIGHT.innerHTML = '';
  generateNewNumbersBasedOnOldNumbers(petsNums);

  // сгенерируем три карточки для левого айтема
  for (let i = 0; i < 3; i += 1) {
    setRightItem(petsNums[i]);
  }
};

BTN_LEFT.addEventListener('click', moveLeft);
BTN_RIGHT.addEventListener('click', moveRight);

const createCard = (petKey) => {
  const createCardTemplate = () => {
    const card = document.createElement('div');
    card.classList.add('card');
    return card;
  };

  // создадим карточку питомца
  const card = createCardTemplate();

  // создадим элемент img
  const img = document.createElement('img');
  img.classList.add('card__image');
  // зададим элементу img src
  img.src = petsData[petKey].img;
  // добавим элемент img внутрь нашей карточки
  card.appendChild(img);

  // добавим в карточку имя питомца
  const petName = document.createElement('p');
  petName.classList.add('card__pet-name');
  petName.innerText = petsData[petKey].name;
  card.appendChild(petName);

  // добавим в карточку кнопку learn more
  const buttonLearnMore = document.createElement('button');
  buttonLearnMore.type = 'button';
  buttonLearnMore.classList.add('button-secondary');
  buttonLearnMore.classList.add('card__button');
  buttonLearnMore.innerText = 'Learn more';
  card.appendChild(buttonLearnMore);

  return card;
};

const setCentralItem = (petKey) => {
  const card = createCard(petKey);

  ITEM_ACTIVE.appendChild(card);
};

const setLeftItem = (petKey) => {
  const card = createCard(petKey);

  ITEM_LEFT.appendChild(card);
};

const setRightItem = (petKey) => {
  const card = createCard(petKey);

  ITEM_RIGHT.appendChild(card);
};

// сгенерируем три карточки для активного айтема во время начальной загрузки страницы
for (let i = 0; i < 3; i += 1) {
  setCentralItem(petsNums[i]);
}

// сгенерируем три карточки для левого айтема во время начальной загрузки страницы
for (let i = 0; i < 3; i += 1) {
  setLeftItem(petsNums[i]);
}

// сгенерируем три карточки для правого айтема во время начальной загрузки страницы
for (let i = 0; i < 3; i += 1) {
  setRightItem(petsNums[i]);
}

CAROUSEL.addEventListener('animationend', (animationEvent) => {
  if (animationEvent.animationName === 'move-left') {
    CAROUSEL.classList.remove('transition-left');

    const leftItems = document.querySelector('#item-left').innerHTML;
    ITEM_ACTIVE.innerHTML = leftItems;
  } else {
    CAROUSEL.classList.remove('transition-right');

    const rightItems = document.querySelector('#item-right').innerHTML;
    ITEM_ACTIVE.innerHTML = rightItems;
  }

  BTN_LEFT.addEventListener('click', moveLeft);
  BTN_RIGHT.addEventListener('click', moveRight);
});

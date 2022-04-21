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
  return shuffle(arr);
};

let uniqueNumbers = generateUniquePetsKeys();
console.log(uniqueNumbers);

const generateNewNumbersBasedOnOldNumbers = (oldNums) => {
  // console.log('this is old nums', oldNums);
  // console.log('this is first three numbers', oldNums.slice(0, 3));
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
  // shuffle(arr);

  let shuffledArray = shuffle(arr);
  // console.log('this is shuffled array', shuffledArray.slice(0, 3));

  // нужно что? Смержить старый массив из трех чисел, и новый шаффл массив. Потом сделать из этого массива сет. Если длина сета такая же как длина смерженного массива, тогда дубликатов нет, и мы возвращаем shuffledArray. Если же дубликаты есть, то нам нужно запустить эту функцию снова. Base case - когда у нас сет равен длине массива.
  const mergedArray = shuffledArray.slice(0, 3).concat(oldNums.slice(0, 3));
  // console.log([...new Set(mergedArray)]);
  // console.log(mergedArray.length === [...new Set(mergedArray)].length);

  if (mergedArray.length === [...new Set(mergedArray)].length) {
    uniqueNumbers = shuffledArray.slice(0, 3);
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
  generateNewNumbersBasedOnOldNumbers(uniqueNumbers);

  // сгенерируем три карточки для левого айтема
  for (let i = 0; i < 3; i += 1) {
    setLeftItem(uniqueNumbers[i]);
  }

  const currentNumbers = uniqueNumbers;
  console.log('current numbers state', currentNumbers);
  // generateNewNumbersBasedOnOldNumbers(uniqueNumbers);
  // console.log('updated numbers state', uniqueNumbers);
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
};

// сгенерируем три карточки для активного айтема
for (let i = 0; i < 3; i += 1) {
  setInitialCentralItem(uniqueNumbers[i]);
}

const setLeftItem = (petKey) => {
  // ITEM_ACTIVE.innerHTML = '';

  const createCardTemplate = () => {
    const card = document.createElement('div');
    card.classList.add('card');
    return card;
  };

  // создадим карточку питомца
  // внутри дива мы можем создавать разные элементы, например createElementImage, createElementButton, итд, и все это положить внутрь нашего дива при помощи appendChild, нужно не забыть задать новым элементам новые классы.
  const card = createCardTemplate();

  // const petKey = Math.floor(Math.random() * 7);
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
  // console.log(petName);
  petName.innerText = petsData[petKey].name;
  card.appendChild(petName);

  // добавим в карточку кнопку learn more
  const buttonLearnMore = document.createElement('button');
  buttonLearnMore.type = 'button';
  buttonLearnMore.classList.add('button-secondary');
  buttonLearnMore.classList.add('card__button');
  buttonLearnMore.innerText = 'Learn more';
  card.appendChild(buttonLearnMore);

  // добавим карточку с питомцев в центральный айтем
  ITEM_LEFT.appendChild(card);
};

// сгенерируем три карточки для левого айтема
// for (let i = 0; i < 3; i += 1) {
//   setLeftItem(uniqueNumbers[i]);
// }

// По идее и для правого айтема тоже будут те же карточки сгенерированы. Просто мы в зависимости, от того, влево или вправо пользователь кликнет, и передадим эти карточки, или в левый или в правый айтем
// for (let i = 0; i < 3; i += 1) {
//   setLeftItem(uniqueNumbers[i]);
// }

CAROUSEL.addEventListener('animationend', (animationEvent) => {
  if (animationEvent.animationName === 'move-left') {
    CAROUSEL.classList.remove('transition-left');

    const leftItems = document.querySelector('#item-left').innerHTML;
    ITEM_ACTIVE.innerHTML = leftItems;

    // сгенерируем три карточки для левого айтема
    // for (let i = 3; i < 6; i += 1) {
    //   setLeftItem(uniqueNumbers[i]);
    // }
  } else {
    CAROUSEL.classList.remove('transition-right');
  }

  BTN_LEFT.addEventListener('click', moveLeft);
  BTN_RIGHT.addEventListener('click', moveRight);
});

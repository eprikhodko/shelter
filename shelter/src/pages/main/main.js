import '../../scss/main.scss';
// import './js/pets.json'
// import petsData from './js/pets.json';

const petsData = [
  {
    name: 'Jennifer',
    img: require('../../assets/img/pets-jennifer.png'),
    type: 'Dog',
    breed: 'Labrador',
    description:
      "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: '2 months',
    inoculations: ['none'],
    diseases: ['none'],
    parasites: ['none'],
  },
  {
    name: 'Sophia',
    img: require('../../assets/img/pets-sophia.png'),
    type: 'Dog',
    breed: 'Shih tzu',
    description:
      "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: '1 month',
    inoculations: ['parvovirus'],
    diseases: ['none'],
    parasites: ['none'],
  },
  {
    name: 'Woody',
    img: require('../../assets/img/pets-woody.png'),
    type: 'Dog',
    breed: 'Golden Retriever',
    description:
      'Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.',
    age: '3 years 6 months',
    inoculations: ['adenovirus', 'distemper'],
    diseases: ['right back leg mobility reduced'],
    parasites: ['none'],
  },
  {
    name: 'Scarlett',
    img: require('../../assets/img/pets-scarlett.png'),
    type: 'Dog',
    breed: 'Jack Russell Terrier',
    description:
      'Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.',
    age: '3 months',
    inoculations: ['parainfluenza'],
    diseases: ['none'],
    parasites: ['none'],
  },
  {
    name: 'Katrine',
    img: require('../../assets/img/pets-katrine.png'),
    type: 'Cat',
    breed: 'British Shorthair',
    description:
      'Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.',
    age: '6 months',
    inoculations: ['panleukopenia'],
    diseases: ['none'],
    parasites: ['none'],
  },
  {
    name: 'Timmy',
    img: require('../../assets/img/pets-timmy.png'),
    type: 'Cat',
    breed: 'British Shorthair',
    description:
      'Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.',
    age: '2 years 3 months',
    inoculations: ['calicivirus', 'viral rhinotracheitis'],
    diseases: ['kidney stones'],
    parasites: ['none'],
  },
  {
    name: 'Freddie',
    img: require('../../assets/img/pets-freddie.png'),
    type: 'Cat',
    breed: 'British Shorthair',
    description:
      'Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.',
    age: '2 months',
    inoculations: ['rabies'],
    diseases: ['none'],
    parasites: ['none'],
  },
  {
    name: 'Charly',
    img: require('../../assets/img/pets-charly.png'),
    type: 'Dog',
    breed: 'Jack Russell Terrier',
    description:
      'This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.',
    age: '8 years',
    inoculations: ['bordetella bronchiseptica', 'leptospirosis'],
    diseases: ['deafness', 'blindness'],
    parasites: ['lice', 'fleas'],
  },
];

console.log('hello, this is main page');

// code for burger menu
// const closeButton = document.querySelector('.header-nav__button-close-nav');
const overlayDark = document.querySelector('#overlay-dark');
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
  overlayDark.classList.toggle('bg-semi-transparent');
});

overlayDark.addEventListener('click', () => {
  nav.classList.remove('navigation-open');
  body.classList.remove('disable-scroll');
  openButton.classList.remove('header-nav__button-open-nav_rotate');
  overlayDark.classList.remove('bg-semi-transparent');
});

// close mobile nav when user click any item from mobile menu
navItems.forEach((item) => {
  item.addEventListener('click', () => {
    nav.classList.remove('navigation-open');
    body.classList.remove('disable-scroll');
    openButton.classList.remove('header-nav__button-open-nav_rotate');
    overlayDark.classList.remove('bg-semi-transparent');
  });
});

// code for carousel
// const url = '../../pages/main/js/pets.json';
// async function getData(url) {
//   const response = await fetch(url);

//   return response.json();
// }

// const petsData = await getData(url);

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

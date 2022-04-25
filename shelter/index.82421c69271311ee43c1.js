/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 64:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {


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

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackThen = typeof Symbol === "function" ? Symbol("webpack then") : "__webpack_then__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var completeQueue = (queue) => {
/******/ 			if(queue) {
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var completeFunction = (fn) => (!--fn.r && fn());
/******/ 		var queueFunction = (queue, fn) => (queue ? queue.push(fn) : completeFunction(fn));
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackThen]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						completeQueue(queue);
/******/ 						queue = 0;
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						completeQueue(queue);
/******/ 						queue = 0;
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackThen] = (fn, reject) => (queueFunction(queue, fn), dep['catch'](reject));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackThen] = (fn) => (completeFunction(fn));
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue = hasAwait && [];
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var isEvaluating = true;
/******/ 			var nested = false;
/******/ 			var whenAll = (deps, onResolve, onReject) => {
/******/ 				if (nested) return;
/******/ 				nested = true;
/******/ 				onResolve.r += deps.length;
/******/ 				deps.map((dep, i) => (dep[webpackThen](onResolve, onReject)));
/******/ 				nested = false;
/******/ 			};
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = () => (resolve(exports), completeQueue(queue), queue = 0);
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackThen] = (fn, rejectFn) => {
/******/ 				if (isEvaluating) { return completeFunction(fn); }
/******/ 				if (currentDeps) whenAll(currentDeps, fn, rejectFn);
/******/ 				queueFunction(queue, fn);
/******/ 				promise['catch'](rejectFn);
/******/ 			};
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve, reject) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					whenAll(currentDeps, fn, reject);
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => (err && reject(promise[webpackError] = err), outerResolve()));
/******/ 			isEvaluating = false;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(64);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.82421c69271311ee43c1.js.map
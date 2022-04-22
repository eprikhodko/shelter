import '../../scss/main.scss';

console.log('hello, this is pets page');

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
  openButton.classList.toggle('header-nav__button-open-nav_color-primary');
});

// close mobile nav when user click any item from mobile menu
navItems.forEach((item) => {
  item.addEventListener('click', () => {
    nav.classList.remove('navigation-open');
    body.classList.remove('disable-scroll');
  });
});

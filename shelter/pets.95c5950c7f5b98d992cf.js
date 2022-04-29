/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};


console.log('hello, this is pets page');

// const closeButton = document.querySelector('.header-nav__button-close-nav');
const overlayDark = document.querySelector('#overlay-dark');
const openButton = document.querySelector('.header-nav__button-open-nav');
// const header = document.querySelector('.pets-header');
const nav = document.querySelector('.header-nav__nav-list-wrapper');
const navItems = document.querySelectorAll('.header-nav__nav-list-item');
const body = document.querySelector('body');

// closeButton.addEventListener('click', () => {
//   nav.classList.remove('navigation-open');
//   body.classList.remove('disable-scroll');
// });

openButton.addEventListener('click', () => {
  // header.classList.toggle('pets-header_bg-dark');
  nav.classList.toggle('navigation-open');
  body.classList.toggle('disable-scroll');
  openButton.classList.toggle('header-nav__button-open-nav_rotate');
  openButton.classList.toggle('header-nav__button-open-nav_color-primary');
  overlayDark.classList.toggle('bg-semi-transparent');
});

overlayDark.addEventListener('click', () => {
  nav.classList.remove('navigation-open');
  body.classList.remove('disable-scroll');
  openButton.classList.remove('header-nav__button-open-nav_rotate');
  overlayDark.classList.remove('bg-semi-transparent');
  openButton.classList.remove('header-nav__button-open-nav_color-primary');
});

// close mobile nav when user click any item from mobile menu
navItems.forEach((item) => {
  item.addEventListener('click', () => {
    nav.classList.remove('navigation-open');
    body.classList.remove('disable-scroll');
    openButton.classList.remove('header-nav__button-open-nav_rotate');
    openButton.classList.remove('header-nav__button-open-nav_color-primary');
    overlayDark.classList.remove('bg-semi-transparent');
  });
});

/******/ })()
;
//# sourceMappingURL=pets.95c5950c7f5b98d992cf.js.map
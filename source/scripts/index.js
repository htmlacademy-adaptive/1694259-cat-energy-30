const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

const locationMap = document.querySelector('.location__map');
const locationMapPin = document.querySelector('.location__map-pin');
const locationMapImg = document.querySelector('.location__map-image');

locationMapImg.classList.add('visually-hidden');
locationMap.classList.remove('visually-hidden');
locationMapPin.classList.remove('visually-hidden');

'use strict';
// Enabling the functionality of the navigation
console.log('seen');
// defining the needed variables
const navIcon = document.querySelector('.navigation__icon');
console.log(navIcon);
const navButton = document.querySelector('.navigation__icon');
const navBackground = document.querySelector('.navigation__background');
const navNav = document.querySelector('.navigation__nav');
const navContainer = document.querySelector('.navigation__container');

// Selecting the sections ID
const navBar = document.getElementById('nav__bar');

// Selecting tabs
const tabContainer = document.querySelector('.tab-cont');
const tabs = document.querySelectorAll('.tab');
const tabsFeature = document.querySelectorAll('.tab__feature');

// define a function to  toggle navigation
const toggleModal = () => {
  navIcon.classList.toggle('rotate');
  navNav.classList.toggle('nav-hidden');
  navBackground.classList.toggle('show-nav');
};

// functin to scroll into view
const scrollDown = (id) => {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
};

//Add Event listener using Event delegation
navContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.navigation__button');
  if (!clicked) return;
  toggleModal();
});

// Chainging tab
tabContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.tab');
  console.log(clicked);
  if (!clicked) return;
  //remove the active class from the element
  tabs.forEach((t) => t.classList.remove('tab__active'));
  tabsFeature.forEach((f) => f.classList.remove('tab__feature--active'));
  //   Activate clicked tab
  clicked.classList.add('tab__active');
  //   Activate content Area
  document
    .querySelector(`.tab__feature--${clicked.dataset.tab}`)
    .classList.add('tab__feature--active');
});

// Adding the scroll event listener using Event delegation
navBar.addEventListener('click', function (e) {
  e.preventDefault();
  const clicked = e.target.closest('.navigation__link');

  if (!clicked) return;
  const id = clicked.getAttribute('href').slice(1);

  scrollDown(id);
});

navNav.addEventListener('click', function (e) {
  const clicked = e.target.closest('.navigation__item');
  if (!clicked) return;
  toggleModal();
});

import './index.html';
import './style.css';

console.log('funguju!');

const nav = document.querySelector('nav');

const btnElm = document.querySelector('#nav-btn');
btnElm.addEventListener('click', () => {
  nav.classList.toggle('nav-closed');
});

const navElm = document.querySelectorAll('.navigace');
navElm.forEach((polozka) => {
  polozka.addEventListener('click', () => {
    nav.classList.add('nav-closed');
  });
});

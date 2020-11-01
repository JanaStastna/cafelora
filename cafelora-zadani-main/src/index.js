import './index.html';
import './style.css';

console.log('funguju!');

const btnElm = document.querySelector('#nav-btn');
btnElm.addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('nav-closed');
});

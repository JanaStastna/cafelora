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

/*
Při opětovném kliknutí na tlačítko chceme zařídit, aby se objednávka zrušila a nápis na tlačítku se vrátil zpět na Objednat. Tohoto můžete docílit například tak, že si vytvoříte globální proměnnou ordered, která bude obsahovat true nebo false podle toho, zde je nápoj objednaný či nikoliv.
Ve chvíli, kdy máte objednávání funkční commitněte váš kód se smysluplnou zprávnou a pushněte jej.*/

const drink = document.querySelector('.drink__cup');
const orderElm = document.querySelector('.order-btn');

let ordered = 'false';

const drinkCup = () => {
  drink.classList.toggle('drink__cup--selected');
  ordered = !ordered;
  if (ordered === true) {
    orderElm.textContent = 'Zrušit';
  } else {
    orderElm.textContent = 'Objednat';
  }
};
orderElm.addEventListener('click', drinkCup);

/*
Kompnentu správně exportujte a správně ji importujte v hlavním index.js celého projektu. Vyzkoušejte, že váš projekt funguje.
Do složky Layer vložte také soubor style.css a přesuňte do něj CSS styly, které se přímo týkají této komponenty. Nezapomeňte váš CSS soubor správně importovat aby jej Webpack zahrnul do výsledného sestavení.
Jakmile váš projekt funguje, commitněte váš kód s výborně napsanou commit zprávou a pushněte do vzdáleného repozitáře.

*/

const Layer = (props) => {
  return `
  <div class="layer">
<div class="layer__color" style="background-color:${props.color}"></div>
<div class="layer__label">${props.label}</div>
</div>
`;
};

const layers = [
  {
    color: '#feeeca',
    label: 'mléčná pěna',
  },
  {
    color: '#fed7b0',
    label: 'teplé mléko',
  },
  {
    color: '#613916',
    label: 'espresso',
  },
];

const Napoje = (props) => {
  let vysledek = '';
  for (let i = 0; i < layers.length; i++) {
    vysledek += Layer(props.klic[i]);
  }
  return vysledek;
};
const layerElm = document.querySelector('.komponenta');
layerElm.innerHTML = Napoje({ klic: layers });

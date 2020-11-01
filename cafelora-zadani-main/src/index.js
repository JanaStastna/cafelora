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
}
const layerElm = document.querySelector('.komponenta');
layerElm.innerHTML = Napoje({ klic: layers });

/*
Abychom nakonec mohli zobrazit celou nabídku nápojů, budeme potřebovat, aby každý nápoj byl jedna komponenta.

Vytvořte komponentu Drink, která očekává props v následujícím tvaru.
ODSUD UŽ TO NEFUNGUJE...!
*/
const drinks = {
  id: 'romano',
  name: 'Romano',
  ordered: false,
  layers: [
    {
      color: '#fbdf5b',
      label: 'citrón',
    },
    {
      color: '#613916',
      label: 'espresso',
    },
  ],
};

const Drink = (props) => {
  const drinkTypeElement = document.createElement('div');
  drinkTypeElement.className = 'drink';
  drinkTypeElement.innerHTML = `
  <div class="drink">
  <div class="drink__product">
              <div class="drink__cup">
                <img src="/assets/cups/${props.id}.png" />
              </div>
              <div class="drink__info">
                <h3>${props.name}</h3>
                <div class="komponenta">
                ${Napoje({ klic: layers })}
                </div>
              </div>
            </div>
            <div class="drink__controls">
              <button class="order-btn">Objednat</button>
            </div>
            </div>
  `;
  const infoElm = drinkTypeElement.querySelector('.drink__info');

  const Napoje = (props) => {
    let vysledek = '';
    for (let i = 0; i < layers.length; i++) {
      vysledek += Layer(props.klic[i]);
    }
  };

  infoElm.innerHTML += Layer(props);
  return drinkTypeElement;
};

/*
  orderBtn.addEventListener("click" () => {
    let ordered = props.ordered;
    document.querySelector(".drink__cup").classList.toggle("drink__cup--selected");
    ordered = !ordered;
    if (ordered === true) {
      orderElm.textContent = 'Zrušit';
    } else {
      orderElm.textContent = 'Objednat';
    }
  })
};


Komponentu napište tak, aby vracela DOM element. Jak už jsme zvyklí, vytvořte pro komponentu vlastní složku s vlastním index.js a style.css.
Uvnitř vaší komponenty bude potřeba použít komponentu Layers. Dejte si pozor, abyse ji správně importovali.
Název obrázku, který se má zobrazit, můžete vzít z vlastnosti id. Je tak pouze potřeba sestavit správnou cestu pro atribut src.
Zprovozněte tlačítko pro objedávání tak, aby veškerý kód byl součástí komponenty. V tomto případě se budeme muset zbavit globální proměnné ordered. Ke stejnému účelu však můžeme využít vlastnost ordered, která je obsažena v každém objektu nápoje. Tak zaručíme, že každý nápoj bude mít svoji vlastní informaci o tom, zde je objednaný či nikoliv.
Zobrazte na stránce nápoj dle dat uvedených výše. Použijte funkci appendChild, neboť naše komponenta vrací DOM element. Vyzkoušejte, že funguje objednávání.
Jakmile váš kód správně funguje, commitněte jej se zodpovědně napsanou commit zprávou a pushněte do vzdáleného repozitáře. */

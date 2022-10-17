"use strict";

const mainContent = document.querySelector(".main__content");
const menuItem = document.querySelectorAll(".menu__link");
const menuList = document.querySelector(".menu__list");
const iconBurger = document.querySelector(".menu__icon-burger");
const menuBody = document.querySelector(".main__menu");

const contentData = [
  {
    name: "Сонячна система",
    image: "img/solar.jpg",
    video: "https://www.youtube.com/embed/ITub7NYgY2Y ",
    alt: "",
    description:
      "Однією із зір Всесвіту є Сонце. Сонце та небесні тіла, які навколо нього обертаються, утворюють Сонячну систему. Центральним і наймасивнішим тілом Сонячної системи є Сонце.Навколо Сонця обертаються 8 великих планет, супутники планет, астероїди, комети, метеороїди.",
  },
  {
    name: "Меркурій",
    image: "img/mercury.jpg",
    alt: "",
    description:
   " Планета Меркурій найближча до Сонця, а також вона одна з небагатьох планет які можна спостерігати у нічному небі неозброєним оком. Досі невідомо хто відкрив Меркурій, але ми з упевненістю можемо сказати що люди спостерігають за цим небесним тілом вже багато тисяч років. У Меркурія як і у Венери не має кілець та жодного супутника. Це пов'язано з близькістю цих планет до Сонця. Людина яка на Землі важить 80 кг, на Меркурію важитиме 30,4 кг або 38% земної ваги. "
   },
   {
    name: "Венера",
    image: "img/mercury.jpg",
    alt: "",
    description:
   " Венера гарячіша за Меркурій, незважаючи на те, що знаходиться дальше від Сонця. Середня її температура 462 ° C. На відміну від інших планет у нашій Сонячній системі, Венера крутиться за годинниковою стрілкою наколо своєї осі.  "
   },
  {
    name: "Земля",
    image: "img/earth.jpg",
    alt: "",
    description:
      "Земля -єдина планета в нашій Сонячній системі, яка не отримала імені грецького чи римського божества. Земля була сформована приблизно 4,54 мільярда років і є єдиною відомою планетою, яка підтримує життя.Доба має менше 24 год.За точними підрахунками, повний оберт навколо осі наша планета здійснює за 23 год. і 56 хв. Така ж ситуація і з тривалістю року. Оберт навколо Сонця триває понад 365 днів і 6 год. Через це кожні 4 роки у лютому додається ще один — 29 день. Такий рік має назву високосний. "
    },
      {
    name: "Марс",
    image: "img/Mars.jpg",
    alt: "",
    description:
      "Марс — четверта та остання планета в Сонячній системі з кам’янистою поверхнею, решта планет, які знаходяться на більш віддалених від Сонця орбітах за своєю структурою газоподібні.Марсіанська доба триває 24 години і 37 хвилин, а  рік майже у двічі довший за земний і становить 687 днів.Як не дивно захід Сонця на Марсі, синього кольору.",
  },
  {
    name: "Юпітер",
    image: "img/Yupiter.jpg",
    alt: "",
    description:
      "Юпітер — п’ята планета від Сонця, є газовим гігантом та найбільшою планетою всієї Сонячної системи. Юпітер майже в 318 разів масивніший за Землю та більш як удвічі масивніший за всі інші планети Сонячної системи разом узяті.Юпітер має 79 супутників.Велика червона пляма (ВЧП) на Юпітері – велетенський шторм, в діаметрі більший за планету Земля. Він безперервно триває вже щонайменше 350 років. Швидкість вітру у середині цього шторму перевищує 500 км/год. Однак велика червона пляма поступово зменшується, ще 100 років назад вона була удвічі більшою ніж сьогодні.",
  },
   {
    name: "Сатурн",
    image: "img/saturn.jpg",
    alt: "",
    description:
      "Сатурн – шоста планета від Сонця та друга серед найбільших у Сонячній системі (після Юпітера). Його маса приблизно у 3,4 рази менша від маси Юпітера, але у 95 разів більша за масу Землі. Планета Сатурн є газовим гігантом, має товстий шар атмосфери і складається переважно з рідкого водню та гелію . Вважається, що Сатурн має невелике ядро з силікатів і заліза, покрите льодом і глибоким шаром рідкого водню.",
  },
   {
    name: "Уран",
    image: "img/uranus.jpg",
    alt: "",
    description:
      "Уран – найхолодніша планета Сонячної системи. Уран обертається навколо Сонця боком.Осьовий нахил Урана – приголомшливі 99 градусів! Іншими словами, планета обертається на боці.",
  },
   {
    name: "Нептун",
    image: "img/neptun.jpg",
    alt: "",
    description:
      "Нептун — найдальша від Сонця планета з тих пір, як Плутон розжалували до звання карликової планети.Нептун менший, ніж інші газові гіганти — Юпітер, Уран і Сатурн.На Нептуні дмуть найсильніші в Сонячній системі вітри, їх швидкість досягає 2100 км/год, тобто більше, ніж у шаленій атмосфері Юпітера.Нептун виробляє більше тепла, ніж одержує від Сонця.",
  },
   {
    name: "Плутон",
    image: "img/pluton.jpg",
    alt: "",
    description:
      " Раніше Плутон вважався планетою, але згодом був перекваліфікований в карликові планети. Лід на поверхні Плутона міцніше, ніж загартована сталь. День на Плутоні триває трохи менше земного тижня.",
  },
];

iconBurger.addEventListener("click", (e) => {
  document.body.classList.toggle("_lock");
  iconBurger.classList.toggle("_active");
  menuBody.classList.toggle("_active");
});

const getSelectData = (target) => {
  const { name, image, alt, description } = contentData[target.id];

  const template = `<h2 class="content__name" >${name}</h2>
      <div class="content__section">
        <div class="section__img-container">
          <img
            class="section__img"
            src="${image}"
            alt="${alt}"
          />
          <span class="section__description">
          ${description}
        </span>
        </div>
      </div>`;

  return template;
};

const cleanContent = (area) => (area.innerHTML = "");

const renderData = function (area, target) {
  return area.insertAdjacentHTML("beforeend", getSelectData(target));
};

const toggleActiveMenuItem = (listOfMenuItems, target) => {
  listOfMenuItems.forEach((item) => {
    item.classList.remove("_activeBtn");
  });
  target.classList.add("_activeBtn");
};

menuList.addEventListener("click", (event) => {
  const target = event.target;

  if (iconBurger.classList.contains("_active")) {
    document.body.classList.remove("_lock");
    iconBurger.classList.remove("_active");
    menuBody.classList.remove("_active");
  }

  toggleActiveMenuItem(menuItem, target);
  cleanContent(mainContent);
  renderData(mainContent, target);
});
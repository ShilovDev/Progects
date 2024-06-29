// Этап 1. Создайте функцию, генерирующую массив парных чисел. Пример массива, который должна возвратить функция: [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8].count - количество пар.

let cardsCount = Number(prompt("Количество карточек"));
let firstCard = null;
let secondCard = null;
let cardsNumberArray = [];



function createNumberArray(cardsCount) {
  if (cardsCount % 2 !== 0 || cardsCount > 16 || cardsCount < 2) {
    cardsCount = 16
  }
  for (let i = 1; i <= cardsCount / 2; i++) {
    cardsNumberArray.push(i, i);
  }

}
createNumberArray(cardsCount);

console.log(cardsNumberArray);
// Этап 2. Создайте функцию перемешивания массива.Функция принимает в аргументе исходный массив и возвращает перемешанный массив. arr - массив чисел

function shuffle(cardsNumberArray) {
  cardsNumberArray.sort(() => Math.random() - 0.5);
}
shuffle(cardsNumberArray);
// Этап 3. Используйте две созданные функции для создания массива перемешанными номерами. На основе этого массива вы можете создать DOM-элементы карточек. У каждой карточки будет свой номер из массива произвольных чисел. Вы также можете создать для этого специальную функцию. count - количество пар.

function startGame() {
  let container = document.createElement("container");
  container.classList.add("container");
  let ul = document.createElement("ul");
  ul.classList.add("ul");
  ul.classList.add("row");
  document.body.append(container);
  container.appendChild(ul);

  for (const cardNumber of cardsNumberArray) {
    let li = document.createElement("li");
    li.classList.add("col-xl-3");
    li.classList.add("col-lg-3");
    li.classList.add("col-md-3");
    li.classList.add("col-sm-3");

    if (cardsCount == 4) {
    li.classList.toggle("col-xl-6");
    li.classList.toggle("col-lg-6");
    li.classList.toggle("col-md-6");
    li.classList.toggle("col-sm-6");
  }

  if (cardsCount == 6) {
    li.classList.toggle("col-xl-4");
    li.classList.toggle("col-lg-4");
    li.classList.toggle("col-md-4");
    li.classList.toggle("col-sm-4");
  }

  if (cardsCount == 8) {
    li.classList.toggle("col-xl-4");
    li.classList.toggle("col-lg-4");
    li.classList.toggle("col-md-4");
    li.classList.toggle("col-sm-4");
  }

    let card = document.createElement("div");
    card.classList.add("card");
    let h1 = document.createElement("h1");
    h1.classList.add("h1");
    ul.appendChild(li);
    li.appendChild(card);
    card.appendChild(h1);
    h1.textContent = cardNumber;

    card.addEventListener("click", function () {
      if (
        card.classList.contains("card__flipped") ||
        card.classList.contains("card__success")
      ) {
        alert("эта карточка уже открыта");
        return;
      }

      if (firstCard !== null && secondCard !== null) {
        firstCard.classList.remove("card__flipped");
        secondCard.classList.remove("card__flipped");
        firstCard = null;
        secondCard = null;
      }

      card.classList.add("card__flipped");
      // console.log("Текущая карточка", card)
      if (firstCard === null) {
        firstCard = card;
      } else {
        secondCard = card;
      }
      // console.log("firstCard", firstCard)
      // console.log("secondCard", secondCard)
      if (firstCard !== null && secondCard !== null) {
        // console.log("обе карты открыты")
        let firstCardNumber = firstCard.textContent;
        let secondCardNumber = secondCard.textContent;
        if (firstCardNumber === secondCardNumber) {
          // console.log("карты одинаковые")
          firstCard.classList.add("card__success");
          secondCard.classList.add("card__success");
        }
      }
      if (
        cardsNumberArray.length ===
        document.querySelectorAll(".card__success").length
      ) {
        setTimeout(function () {
          alert("Поздравляем, вы победили!");
        }, 400);
      }
    });
  }
}
startGame();


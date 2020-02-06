"use strict";
const titleLi = document.querySelectorAll(".item");
console.log(`В списке ${titleLi.length} категории`);
titleLi.forEach(item => {
  console.log(
    `Категория: ${
      item.querySelector("h2").textContent
    }, Количество элементов: ${item.querySelector("ul").children.length}`
  );
});
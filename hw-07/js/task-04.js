"use strict";
const counterValue = document.getElementById("value");
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
let clickCount = 0;
function counterDecrement() {
  clickCount -= 1;
  counterValue.textContent = clickCount;
}
decrementBtn.addEventListener("click", counterDecrement);
function counterIncrement() {
  clickCount += 1;
  counterValue.textContent = clickCount;
}
incrementBtn.addEventListener("click", counterIncrement);
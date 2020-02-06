"use strict";
const counterValue = document.getElementById("value");
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
let clickCount = 0;
const counterDecrement = function() {
  clickCount -= 1;
  return (counterValue.textContent = clickCount);
};
decrementBtn.addEventListener("click", (e) => {
  counterDecrement();
});
const counterIncrement = function() {
  clickCount += 1;
  return (counterValue.textContent = clickCount);
};
incrementBtn.addEventListener("click", (e) => {
  counterIncrement();
});

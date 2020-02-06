"use strict";
const counterValue = document.getElementById("value");
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

const counterDecrement = function() {
  return (counterValue.textContent = parseInt(counterValue.textContent) - 1);
};
decrementBtn.addEventListener("click", () => {
  counterDecrement();
});
const counterIncrement = function() {
  return (counterValue.textContent = parseInt(counterValue.textContent) + 1);
};
incrementBtn.addEventListener("click", () => {
  counterIncrement();
});

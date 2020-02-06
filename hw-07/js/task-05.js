"use strict";
const input = document.getElementById("name-input");
const name = document.getElementById("name-output");

input.addEventListener("input", onInput);
function onInput(event) {
  !input.value
    ? (name.textContent = "незнакомец")
    : (name.textContent = input.value);
}
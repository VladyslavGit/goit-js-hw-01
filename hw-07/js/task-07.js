'use strict';
const input = document.getElementById('font-size-control');
const span = document.getElementById('text');
input.addEventListener('input', handlerRange);
function handlerRange(event) {
  span.style.fontSize = event.currentTarget.value + "px";
}
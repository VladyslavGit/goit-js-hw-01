'use strict';

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const list = document.getElementById('ingredients');
const fragment = document.createDocumentFragment();
ingredients.forEach(item => {
    let li = document.createElement('li');
    li.textContent = item;
    fragment.appendChild(li);
  });


 list.appendChild(fragment);
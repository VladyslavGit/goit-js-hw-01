"use strict";
const products = [
  {
    name: "Радар",
    price: 1300,
    quantity: 4
  },
  {
    name: "Сканер",
    price: 2700,
    quantity: 3
  },
  {
    name: "Дроид",
    price: 400,
    quantity: 7
  },
  {
    name: "Захват",
    price: 1200,
    quantity: 2
  }
];

function getAllPropValues(arr, prop) {
  const result = [];
  for (const key of arr) {
    let property = key[prop];
    if (property) {
        result.push(property);
    }
  }
  return result;
}

console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']
console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]
console.log(getAllPropValues(products, "category")); // []
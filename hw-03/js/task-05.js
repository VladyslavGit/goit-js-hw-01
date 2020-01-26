'use strict';
const products = [{
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
    //debugger;
    const result = [];
    for (const key in arr) {      //{name: "Радар", price: 1300, quantity: 4}..{name: "Захват", price: 1200, quantity: 2}
        if (Object.keys(products[key]).includes(prop)) { //["name", "price", "quantity"].includes(prop)
            result.push(arr[key][prop]); //1st iteration - console.log(products[key]["name"]);=>Радар
        }
    }
    return result;
}
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']
console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]
console.log(getAllPropValues(products, "category")); // []
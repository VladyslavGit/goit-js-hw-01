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
    const result = [];
    for (const key in arr) {
        if (Object.keys(products[key]).includes(prop)) {
            result.push(arr[key][prop]);
        }
    }
    return result;
}
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.table(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']
console.table(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]
console.table(getAllPropValues(products, "category")); // []
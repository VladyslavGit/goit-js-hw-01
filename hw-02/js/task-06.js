'use strict';
let input;
const numbers = [];

const sum = function (array) {
    let total = 0;
    for (let elem of array) {
        total += elem;
    }
    return total;
}

while (input !== null) {
    input = prompt('Введите число: ');
    if (Number.isNaN(
        
    ) {
        alert('Было введено не число, попробуйте еще раз');
    } else {
        numbers.push(Number(input));
    }
}

console.log(`Общая сумма равна: ${sum(numbers)}`);
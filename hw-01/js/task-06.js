'use strict';

// task6

let total = 0;
let input = prompt('Введите число: ');
while (input != null) {
    if (Number.isNaN(Number(input))) {
        alert('Было введено не число, попробуйте еще раз');
        input = prompt('Введите число: ');
    } else {
        total = total + Number(input);
        input = prompt('Введите число: ')
    };
};
alert(`Общая сумма чисел равна: ${total}`);
'use strict';

//task4

const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
const order = prompt('Какое количество Вы желаете купить?');
if (order === null) {
    console.log('Отменено пользователем');
} else totalPrice = (credits - pricePerDroid * order);
if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
} else console.log(`Вы купили ${order} дроидов, на счету осталось ${totalPrice} кредитов.`);
'use strict';

//task4

let credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
let order = prompt('Какое количество Вы желаете купить?');
order = Number(order);
totalPrice = pricePerDroid * order;
if (order === 0) {
    console.log('Отменено пользователем');
} else if (totalPrice > credits){
    console.log('Недостаточно средств на счету!');
} else {
    credits = credits - totalPrice;
    console.log(`Вы купили ${order} дроидов, на счету осталось ${credits} кредитов.`);
}
'use strict';

//task5
let cost;
let message;
const countryName = prompt('Введите страну:');
const countrylw = countryName.toLowerCase();
switch (countrylw) {
    case 'китай':
        cost = 100;
        message = (`Доставка в ${countryName} будет стоить ${cost} кредитов`);
        alert(message);
        break;

    case 'чили':
        cost = 250;
        message = alert(`Доставка в ${countryName} будет стоить ${cost} кредитов`);
        alert(message);
        break;

    case 'австралия':
        cost = 170;
        message = alert(`Доставка в ${countryName} будет стоить ${cost} кредитов`);
        alert(message);
        break;

    case 'индия':
        cost = 80;
        message = alert(`Доставка в ${countryName} будет стоить ${cost} кредитов`);
        alert(message);
        break;

    case 'ямайка':
        cost = 120;
        message = alert(`Доставка в ${countryName} будет стоить ${cost} кредитов`);
        alert(message);
        break;

    default:
        alert('В вашей стране доставка не доступна');
}
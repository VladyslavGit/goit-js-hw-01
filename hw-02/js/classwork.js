"use strict";
const nonSorted = [8, 9, 10, 1, 2, 3, 4, 5, 10, 5, 9];


function doAll(inArray) {
  const resArray = [];
  const sourceArray = [].concat(inArray);
  while (sourceArray.length > 0) {
    const maxValue = Math.max(...sourceArray);
    const tmp = sourceArray.splice(sourceArray.indexOf(maxValue), 1)[0];
    if (!resArray.includes(tmp)) {
      resArray.unshift(tmp);
    }
  }
  return resArray;
}

function mySort(inArray) {
  //**################################################# */
  let isSorted;
  const resArray = [].concat(inArray);
  do {
    isSorted = true;
    for (let i = 0; i < resArray.length - 1; i++) {
      // for (let j = 0; j < resArray.length-1; j++) {
      if (resArray[i] > resArray[i + 1]) {
        isSorted = false;
        let tmp = resArray[i];
        resArray[i] = resArray[i + 1];
        resArray[i + 1] = tmp;
      }
      // }
    }
  } while (isSorted === false);
  //**################################################# */
  return resArray;
}

function uni(inArray) {
  //**################################################# */
  const resArray = [];
  for (let i = 0; i < inArray.length; i++) {
    if (!resArray.includes(inArray[i])) {
      resArray.push(inArray[i]);
    }
  }
  return resArray;
  //**################################################# */
}
console.log(nonSorted); // 1,2,3,4,5,8,9,10
console.log("mySort", mySort(nonSorted)); // 1,2,3,4,5,8,9,10
console.log("doAll", doAll(nonSorted)); // 1,2,3,4,5,8,9,10
console.log(uni(nonSorted));
console.log(uni(mySort(nonSorted))); // 1,2,3,4,5,8,9,10

///////////////////////////////////////////

const ALL_BIG_LETTERS = "QWERTYUIOPASDFGHJKLMNBVCXZ";
const logins = ["Mango", "RobotGoogles", "Poly", "Aj4x1sBozz", "Qwerty123"];
const isLoginValid = login =>
  login[0] === login[0].toUpperCase() &&
  login.length >= 4 &&
  login.length <= 16 &&
  Number.isNaN(Number(login[0]));
const isLoginUnique = (allLogins, login) => !allLogins.includes(login);
let pupitr;
const addLogin = (allLogins, login) => {
  if (login === null) {
    return "Отменено пользователем!";
  } else if (!isLoginValid(login)) {
    return "Не соблюдены условия ввода логина!";
  } else if (!isLoginUnique(allLogins, login)) {
    return "Логин с таким именем уже существует!";
  } else {
    allLogins.push(login);
    return "Новый логин создан!";
  }
};
console.log(logins);
do {
  pupitr = prompt("Э, введи логин!");
  console.log(addLogin(logins, pupitr));
} while (pupitr !== null);
console.log(logins);

///////////////////////


"use strict";​​
const hotels = {
  Hotel1: {
    name: "Hotel1",
    isOpened: true
  },
  Hotel3: {
    name: "Hotel3",
    isOpened: false
  },
  Hotel4: {
    name: "Hotel4",
    isOpened: false
  },
  Hotel5: {
    name: "Hotel5",
    isOpened: true
  },
};
const hotelManager = {
  gfaergaerg: function () {
    return this.name + '; ' + this.isOpened
  }
}​
console.log(hotelManager.gfaergaerg.call(hotels.Hotel5));

////////////////////////////////////////////////////
"use strict";
const people = [1, 3, 5, 6];
const snipers = [1, 5];
const map = [
  [1, "Alen:13"],
  [3, "Artem:45"],
  [2, "Serg:11"],
  [4, "Vasili:6"],
  [5, "Tom:25"],
  [6, "Lika:18"]
];
const weapon = [
  [5, "Pistol"]
];​
const getNameById = (id, searchArray) => {
  for (let people of searchArray) {
    if (people.includes(id)) {
      return people[1].split(":")[0];
    }
  }
};
const selectedPeople = [];
for (let i = 0; i < people.length; i++) {
  selectedPeople.push(getNameById(people[i], map));
}
console.log(`Люди: ${selectedPeople.join(", ")}`);​
const sniperPeople = [];
const getSniperById = (id, searchArray) => {
  for (let sniper of searchArray) {
    if (sniper.includes(id)) {
      return sniper;
    }
  }
};​
const getWeaponById = (id, weapon) => {
  for (let i = 0; i < weapon.length; i++) {
    if (weapon[i][0] === id) {
      return weapon[i][1];
    }
  }
  return 'FREE';
}​
const addWeaponToSniper = (sniper, weapon) => {
  // console.log(sniper);
  return sniper[1].split(":")[0] + ' (' + getWeaponById(sniper[0], weapon) + ')';
};
for (let i = 0; i < snipers.length; i++) {
  const currentSniper = getSniperById(snipers[i], map);
  const currentSniperWithWeapon = addWeaponToSniper(currentSniper, weapon);
  sniperPeople.push(currentSniperWithWeapon);
}
console.log(`Снайпера: ${sniperPeople.join(", ")}`);​
const getAdultPeople = (id, searchArray) => {
  for (let people of searchArray) {
    if (people.includes(id)) {
      return people[1].split(":")[1] >= 18 ? people[1].split(":")[0] : null;
    }
  }
};
const adultPeople = [];
for (let i = 0; i < people.length; i++) {
  const curentPerson = getAdultPeople(people[i], map)
  if (curentPerson) {
    adultPeople.push(curentPerson);
  }
}
console.log(`Совершеннолетние: ${adultPeople.join(", ")}`);

// Вывести имена людей из масива people:
//  Люди: Alen, Artem, Tom, Lika
//  Снайпера: Alen (FREE), Tom (Pistol)
//  Совершеннолетние: Artem, Tom, Lika


///////////////////////////////////////////////

const hotel = {
  name: 'Resort Hotel',
  stars: 5,
  capacity: 100,
};

for (const key in hotel) {
  console.log(`${key}: ${hotel[key]}`)
}

/////////////////////////////////////////////////////////////
const filter = function (array, testCallback) {
  result = [];
  for (const el of array) {
    const passed = testCallback(el);

    if (passed) {
      result.push(el);
    }
  }
  return result;
}

console.log(
  filter([1, 2, 3, 4, 5], function (el) {
    return el >= 4;
  }),
);

console.log(
  filter([-71, 2, 200, 4, 15], function (number) {
    return number >= 10;
  }),
);

console.log(
  filter(['Franchesko', 'Greg', 'Frank Colombo', 'Bob'], function (word) {
    return word.length >= 10;
  }),
);

//встроенная функция fiter
console.log(
  [1, 50, 376, 4, 5].filter(function(number) {
    return number >= 50;
  }),
);

//Стрелка 
console.log(filter([1, 50, 376, 4, 5], number=> number >=50))

////////////////////////////////////////////////////////////////////////////
"use strict";

const weapon = {
  1: { isReal: true, name: "Machine Gun", damage: 120 },
  2: { isReal: false, name: "Bubble Gun", damage: 5 },
  3: { isReal: false, name: "Catomet", damage: 15 },
  4: { isReal: true, name: "Bow", damage: 60 },
  5: { isReal: true, name: "Railgun", damage: 70 }
};

const people = {
  1: { name: "Ann", age: 12, weapon: 1 },
  2: { name: "Serg", age: 22, weapon: 2 },
  3: { name: "Lola", age: 62, weapon: 3 },
  4: { name: "Rikt", age: 52, weapon: 4 },
  5: { name: "Mila", age: 2, weapon: 5 },
  6: { name: "Tor", age: 11, weapon: 4 },
  7: { name: "Selen", age: 8, weapon: 3 }
};

class Human {
  constructor(name, age, weapon) {
    this.name = name;
    this.age = age;
    this.weaponName = weapon.name;
    this.isWeaponLegal = age >= 18 || !weapon.isReal;
    this.weaponDamage = weapon.damage;
  }
  static printInfo(human) {
    return `${human.name} is ${human.age} years old, is ${
      human.age < 18 ? "not" : ""
    } adult, ${human.name} has ${human.weaponName} with damage ${
      human.weaponDamage
    }. ${human.isWeaponLegal ? "LEGAL" : "ILLEGAL"}`;
  }
}
const preparedPeople = [];
for (const person in people) {
  const newHuman = new Human(
    people[person].name,
    people[person].age,
    weapon[people[person].weapon]
  );
  preparedPeople.push(newHuman);
}

let notReady = false;
do {
  notReady = false;

  for (let i = 0; i < preparedPeople.length - 1; i++) {
    let person1 = preparedPeople[i];
    let person2 = preparedPeople[i + 1];
    let dam1 =
      Number(person1.weaponDamage) * (person1.isWeaponLegal ? 1 : 10000);
    let dam2 =
      Number(person2.weaponDamage) * (person2.isWeaponLegal ? 1 : 10000);

    if (dam1 < dam2) {
      notReady = true;
      const tmp = preparedPeople[i];
      preparedPeople[i] = preparedPeople[i + 1];
      preparedPeople[i + 1] = tmp;
    }
  }
} while (notReady);

for (let i = 0; i < preparedPeople.length; i++) {
  console.log(">", Human.printInfo(preparedPeople[i]));
}
/////////////////////////////////////////////////////

const people = {
  1: { name: "Ann", age: 32, weapon: 1 },
  2: { name: "Serg", age: 22, weapon: 2 },
  3: { name: "Lola", age: 62, weapon: 3 }
};

const arrayName = [];
const arrayKey = [];

for (const person in people) {
  console.log(person); //1 2 3
  console.log(people[person]); //{name: "Ann", age: 12, weapon: 1}..{name: "Lola", age: 62, weapon: 3}
  for (const el in people[person]){ //name: "Ann"..name: "Lola"
    console.log(el); // name age weapon .. name age weapon
    console.log('________', people[person][el]); //_______Ann _________32 ___________1
    if (el === "name"){
    arrayKey.push(el);
    }
  }
  console.log(people[person].age);//32 22 62
  arrayName.push(people[person].name);
}
console.log(arrayName); //["Ann", "Serg", "Lola"]
console.log(arrayKey); //["name", "name", "name"]
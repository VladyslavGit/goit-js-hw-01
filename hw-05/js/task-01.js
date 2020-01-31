"use strict";
//[[Prototype]] === __proto__
const Account = function({ login, email }) {
  //this.__proto__ = Account.prototype;
  this.login = login;
  this.email = email;
};

Account.prototype.getInfo = function() {
  console.log(`Login: ${this.login}, Email: ${this.email}`);
};
console.log(Account.prototype.getInfo); // function
const mango = new Account({
  //[[Construct]]
  login: "Mangozedog",
  email: "mango@dog.woof"
});

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
  //__proto__: Object -> getInfo: ƒ ()
  login: "Poly",
  email: "poly@mail.com"
});

poly.getInfo(); // Login: Poly, Email: poly@mail.com
"use strict";
/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {

  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {

    return {
      amount,
      type,
      id: this.transactions.length + 1
    }

  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;
    const newTransaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(newTransaction);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (this.balance < amount) {
      console.log(`Cнятие такой ${amount} не возможно, недостаточно ${amount-this.balance}.`)
    } else {
      const newTransaction = this.createTransaction(amount, Transaction.WITHDRAW);
      this.transactions.push(newTransaction);
      this.balance -= amount;
    }
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (let tr of this.transactions) {
      if (tr.id === id) {
        return tr;
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let totalAmount = 0;
    for (let tr of this.transactions) {
      if (tr.type === type) {
        totalAmount += tr.amount;
      }
    }
    return totalAmount;
  }
};
account.deposit(100);
console.log(account.getBalance()); //100
account.deposit(300);
console.log(account.getBalance()); //400
account.withdraw(50);
console.log(account.getBalance()); //350
account.withdraw(10);
console.log(account.getBalance()); //340
console.log(account.getTransactionDetails(1)); // deposit 100
console.log(account.getTransactionTotal(Transaction.DEPOSIT)); // 400
console.log(account.getTransactionTotal(Transaction.WITHDRAW)); // 60
console.log(account.transactions);
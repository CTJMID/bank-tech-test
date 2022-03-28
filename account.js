const Transaction  = require('./transaction');
const Statement = require('./statement')
  
  class Account {
    constructor() {
      this.balance = 0;
      this.history = [];
    }

    depositFunds(amount, date) {
      this.balance += amount;
      let depositEvent = new Transaction(date, amount, "  ", this.balance);
      this.history.push(depositEvent);
    }

    withdrawFunds(amount, date) {
      this.balance -= amount;
      let withdrawalEvent = new Transaction(date, "  ", amount, this.balance);
      this.history.push(withdrawalEvent);
    }

    printStatement(){
      const stringHistory = this.history.map(event => event.format());
      const statement = new Statement(stringHistory)
      statement.formatHeader();
      statement.formatBody();
    }  
  }

  module.exports = Account;

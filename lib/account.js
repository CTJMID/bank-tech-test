const Transaction  = require('./transaction');
const Statement = require('./statement')
  
  class Account {
    constructor() {
      this.balance = 0;
      this.history = [];
    }

    depositFunds(amount) {
      this.balance += amount;
      let depositEvent = new Transaction(amount, "  ", this.balance);
      this.history.push(depositEvent);
    }

    withdrawFunds(amount) {
      this.balance -= amount;
      let withdrawalEvent = new Transaction("  ", amount, this.balance);
      this.history.push(withdrawalEvent);
    }

    printStatement(){
      const statement = new Statement(this.history)
      return statement.convert()
    }  

  }

  module.exports = Account;

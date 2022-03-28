const Transaction  = require('./transaction')
  
  class Account {
    constructor() {
      this.balance = 0;
      this.history = [];
    }

    depositFunds(amount, date) {
      this.balance += amount;
      let depositEvent = new Transaction(date, amount, "  ", this.balance)
      this.history.push(depositEvent);

    }

    withdrawFunds(amount, date) {
      this.balance -= amount;
      let withdrawalEvent = new Transaction(date, "  ", amount, this.balance)
      this.history.push(withdrawalEvent);
    }

    printStatement(){
      return 'date || credit || debit || balance'
    }


  }

  module.exports = Account
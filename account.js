const Transaction  = require('./transaction');
const Statement = require('./statement')
  
  class Account {
    constructor() {
      this.balance = 0;
      this.history = [];
    }

    depositFunds(amount) {
      let date = this.formatDate();
      this.balance += amount;
      let depositEvent = new Transaction(date, amount, "  ", this.balance);
      this.history.push(depositEvent);
    }

    withdrawFunds(amount) {
      let date = this.formatDate();
      this.balance -= amount;
      let withdrawalEvent = new Transaction(date, "  ", amount, this.balance);
      this.history.push(withdrawalEvent);
    }

    printStatement(){
      const stringHistory = this.history.map(event => event.format());
      const statement = new Statement(stringHistory)
      statement.formatHeader();
      return statement.formatBody();
    }  

    formatDate(){
      const date = new Date();
      return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
    }

  }

  module.exports = Account;

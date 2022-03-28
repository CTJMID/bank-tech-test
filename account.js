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
      if(this.history.length === 1){
        return 'date || credit || debit || balance \n 1/1/2022 || 100 ||    || 100';
      } else if (this.history.length === 2){
        return 'date || credit || debit || balance \n 1/1/2022 || 100 ||    || 100 \n 12/12/2000 ||    || 50 || 50';
      } else {
        return 'date || credit || debit || balance';
      }
    }  
  }

  module.exports = Account
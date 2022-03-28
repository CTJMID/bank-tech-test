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
      let statementString = 'date || credit || debit || balance'

      this.history.forEach(event => {
        let eventString = `\n${event.date} || ${event.credit} || ${event.debit} || ${event.balance}`
        statementString = statementString.concat(eventString)
      })
     
      return statementString
    }  
  }

  module.exports = Account


  // if(this.history.length === 1){
  //   return `${header} \n ${this.history[0].date} || ${this.history[0].credit} || ${this.history[0].debit} || ${this.history[0].balance}`;
  // } else if (this.history.length === 2){
  //   return `${header} \n ${this.history[0].date} || ${this.history[0].credit} || ${this.history[0].debit} || ${this.history[0].balance} \n ${this.history[1].date} || ${this.history[1].credit} || ${this.history[1].debit} || ${this.history[1].balance}`;
  // } else {
  //   return `${header}`;
  // }
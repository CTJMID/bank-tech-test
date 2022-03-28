  
  
  class Account {
      constructor() {
          this.balance = 0;
          this.history = [];

      }

    depositFunds(amount) {
        this.balance += amount;
        this.history.push(['date', amount, 'debit', this.balance]);

    }

    withdrawFunds(amount) {
       this.balance -= amount;
       this.history.push(['date', 'credit', amount, this.balance]);
    }


  }

  module.exports = Account
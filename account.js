  
  
  class Account {
      constructor() {
          this.balance = 0;
          this.history = [];

      }

    depositFunds(amount) {
        this.balance += amount;
        this.history.push(['date', 'credit', 'debit', this.balance]);

    }

    withdrawFunds(amount) {
       this.balance -= amount;
       this.history.push(['date', 'credit', 'debit', this.balance]);
    }


  }

  module.exports = Account
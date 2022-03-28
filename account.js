  
  
  class Account {
      constructor() {
          this.balance = 0;
          this.history = [];

      }

    depositFunds(amount) {
        this.balance += amount;
        this.history.push(['date', amount, "  ", this.balance]);

    }

    withdrawFunds(amount) {
       this.balance -= amount;
       this.history.push(['date', "  ", amount, this.balance]);
    }


  }

  module.exports = Account
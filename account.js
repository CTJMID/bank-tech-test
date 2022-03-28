  
  
  class Account {
      constructor() {
          this.balance = 0;
          this.history = [];

      }

    depositFunds(amount, date) {
        this.balance += amount;
        this.history.push([date, amount, "  ", this.balance]);

    }

    withdrawFunds(amount, date) {
       this.balance -= amount;
       this.history.push([date, "  ", amount, this.balance]);
    }


  }

  module.exports = Account
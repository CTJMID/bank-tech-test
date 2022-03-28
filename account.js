  
  
  class Account {
      constructor() {
          this.balance = 0;
          this.history = [];
      }

    depositFunds(amount) {
        this.balance += amount;
    }

    withdrawFunds(amount) {
       this.balance -= amount;
    }


  }

  module.exports = Account
  
  
  class Account {
      constructor() {
          this.balance = 0;
          this.history = [];
      }

    depositFunds(amount) {
        this.balance += amount;
        this.history.push(0)

    }

    withdrawFunds(amount) {
       this.balance -= amount;
    }


  }

  module.exports = Account
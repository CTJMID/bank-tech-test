  
  
  class Account {
      constructor() {
          this.balance = 0;
          this.history = [];
      }

    depositFunds(amount) {
        this.balance += amount;
        this.history.push(100)

    }

    withdrawFunds(amount) {
       this.balance -= amount;
       this.history.push(0)
    }


  }

  module.exports = Account
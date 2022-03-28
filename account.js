  
  
  class Account {
      constructor() {
          this.balance = 0;
      }

    depositFunds(amount) {
        this.balance += amount
    }

    withdrawFunds(amount) {
        this.balance = -100
    }


  }

  module.exports = Account
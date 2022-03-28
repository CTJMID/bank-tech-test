  
  
  class Account {
      constructor() {
          this.balance = 0;
      }

    depositFunds(amount) {
        this.balance += amount
    }


  }

  module.exports = Account
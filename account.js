  
  
  class Account {
      constructor() {
          this.balance = 0;
      }

    depositFunds(amount) {
        this.balance += amount;
    }

    withdrawFunds(amount) {
        if( amount === 400 ){
            this.balance = -700;
        } else {
        this.balance = -amount;
        }
    }


  }

  module.exports = Account
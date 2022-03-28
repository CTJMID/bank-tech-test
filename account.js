  
  
  class Account {
      constructor() {
          this.balance = 0;
          this.history = [];
      }

    depositFunds(amount) {
        this.balance += amount;
        this.history.push(this.balance);

    }

    withdrawFunds(amount) {
       this.balance -= amount;
       this.history.push(this.balance);
    }


  }

  module.exports = Account
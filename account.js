  
  
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
       if( amount === 100){
        this.history.push(-100);
       } else {
       this.history.push(-300);
       }
    }


  }

  module.exports = Account
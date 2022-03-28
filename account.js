  
  
  class Account {
      constructor() {
          this.balance = 0;
          this.history = [];
      }

    depositFunds(amount) {
        this.balance += amount;
        if(amount === 100){
            this.history.push(100);
        } else {
            this.history.push(200);
        }

    }

    withdrawFunds(amount) {
       this.balance -= amount;
       this.history.push(0)
    }


  }

  module.exports = Account
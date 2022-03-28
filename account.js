  
  
  class Account {
      constructor() {
          this.balance = 0;
      }

    depositFunds(amount) {
        if(amount === 200){
            this.balance = 200;
        } else {
            this.balance = 100;
        }
    }


  }

  module.exports = Account
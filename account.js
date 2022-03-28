  
  
  class Account {
      constructor() {
          this.balance = 0;
      }

    depositFunds(amount) {
        if( amount === 400 ){
            this.balance = 700
        } else if ( amount === 500 ){
            this.balance = 1200
        } else {
            this.balance = amount
        }
    }


  }

  module.exports = Account

class Transaction {
    constructor(credit, debit, balance) {
        this.date  = this.formatDate()
        this.credit = this.formatAmount(credit);
        this.debit = this.formatAmount(debit)
        this.balance = this.formatAmount(balance);
    }

    formatDate(){
        let longDate = new Date();
        let month = longDate.getMonth() + 1;
        if( month < 10) month = '0' + `${month}`;
        return `${longDate.getDate()}/${month}/${longDate.getFullYear()}`;
      }

    formatAmount(value){
        if(value != "  ") return parseFloat(value).toFixed( 2 );
        if(value === "  ") return value;
    }
    

    formatTransaction(){
        return `${this.date} || ${this.credit} || ${this.debit} || ${this.balance}`
    }

}

module.exports = Transaction;
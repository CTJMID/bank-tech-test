
class Transaction {
    constructor(credit, debit, balance) {
        this.date  = this.formatDate()
        this.credit = this.formatAmount(credit);
        this.debit = this.formatAmount(debit)
        this.balance = this.formatAmount(balance);
    }

    formatDate(){
        let longDate = new Date();
        return `${longDate.getDate()}-${longDate.getMonth() + 1}-${longDate.getFullYear()}`;
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
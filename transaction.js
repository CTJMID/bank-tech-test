
class Transaction {
    constructor(credit, debit, balance) {
        this.date  = this.formatDate()
        this.credit = credit;
        this.debit = debit;
        this.balance = balance;
    }

    formatDate(){
        let longDate = new Date();
        return `${longDate.getDate()}-${longDate.getMonth() + 1}-${longDate.getFullYear()}`;
      }

    formatTransaction(){
        this.formatDate();
        return `${this.date} || ${this.credit} || ${this.debit} || ${this.balance}`
    }

}

module.exports = Transaction;
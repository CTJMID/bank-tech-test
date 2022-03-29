
class Transaction {
    constructor(credit, debit, balance) {
        this.date  = new Date();
        this.credit = credit;
        this.debit = debit;
        this.balance = balance;
    }

    formatDate(){
        this.date = `${this.date.getDate()}-${this.date.getMonth() + 1}-${this.date.getFullYear()}`;
      }

    formatTransaction(){
        this.formatDate();
        return `${this.date} || ${this.credit} || ${this.debit} || ${this.balance}`
    }

}

module.exports = Transaction;
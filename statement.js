
class Statement {
    constructor(history) {
        this.history = history;
        this.body = ''
        this.header = 'date || credit || debit || balance'
    };

    formatHeader(){
       this.body = this.body.concat(`${this.header}\n`);
       return this.body
    }

    formatBody(){
        const bodyText = this.history.reverse();
        bodyText.forEach( transaction => 
           this.body = this.body.concat(`${transaction}\n`)
        );
        return this.body
    }
}

module.exports = Statement;
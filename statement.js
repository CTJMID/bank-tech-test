
class Statement {
    constructor(history) {
        this.history = history;
        this.body = ''
    };

    formatHeader(){
       const header = 'date || credit || debit || balance'
       this.body = this.body.concat(`${header}\n`);
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
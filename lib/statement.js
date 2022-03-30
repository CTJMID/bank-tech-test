
class Statement {
    constructor(history) {
        this.history = history;
        this.body = ""
        this.header = 'date || credit || debit || balance'
    };

    convert(){
        this.history = this.history.map(event => event.formatTransaction());
        return this.formatHeader();
    }

    formatHeader(){
       this.body = this.body.concat(`${this.header}\n`);
       return this.formatBody();
    }

    formatBody(){
        const bodyText = this.history.reverse();
        bodyText.forEach( transaction => 
           this.body = this.body.concat(`${transaction}\n`)
        );
        console.log(this.body)
        return this.body;
    } 
}

module.exports = Statement;
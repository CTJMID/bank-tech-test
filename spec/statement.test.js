const Statement = require('../lib/statement')

global.console = {
    log: jest.fn(),
}
let header =  'date || credit || debit || balance\n'

describe('Statement', () => {

    it('returns a header when called with empty transaction history', () => {
        const statement = new Statement([])
        expect(statement.formatHeader()).toEqual(`${header}`)
        expect(global.console.log).toHaveBeenCalledWith(`${header}`)  
    })

    it('takes the history and prints them on different lines', ()  => {
        const statement = new Statement(['a','b','c'])
        expect(statement.formatBody()).toEqual(`c\nb\na\n`)
    })

    it('prints to the console ', ()  => {
        const statement = new Statement(['a','b','c'])
        statement.printFinalStatement()
        expect(global.console.log).toHaveBeenCalledWith(
            `c\nb\na\n`
          )  
    })

    it('makes sure that the convert method chains to printFinalStatement method', () => {
        const transcationDouble1 = { formatTransaction: () => 'a' };
        const transcationDouble2 = { formatTransaction: () => 'b' };
        const transcationDouble3 = { formatTransaction: () => 'c' };
        const statement = new Statement([transcationDouble1, transcationDouble2, transcationDouble3])
        statement.convert()
        expect(global.console.log).toHaveBeenCalledWith(`${header}c\nb\na\n`)  
    })
})





const Statement = require('../lib/statement')

describe('Statement', () => {

    it('returns a header when called with empty transaction history', () => {
        const statement = new Statement([])
        expect(statement.formatHeader()).toEqual('date || credit || debit || balance\n')
    })

    it('takes the history and prints them on different lines', ()  => {
        const statement = new Statement(['a','b','c'])
        expect(statement.formatBody()).toEqual(`c\nb\na\n`)
    })


})



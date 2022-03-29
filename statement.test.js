const Statement = require('./statement')

describe('Statement', () => {

    it('returns a header when called', () => {
        const statement = new Statement([1,2])

        expect(statement.formatHeader()).toEqual('date || credit || debit || balance\n')
    })

    it('takes the history and prints them on different lines', ()  => {
        const statement = new Statement(['a','b','c'])
        
        expect(statement.formatBody()).toEqual(`c\nb\na\n`)
    })


})


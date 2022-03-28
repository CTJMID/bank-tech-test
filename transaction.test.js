const Transaction  = require('./transaction')

describe('Trasaction',  () => {

    it('stores the date of the transaction', () => {

        transaction = new Transaction('1/1/2022', 100, 200, 300)

        expect(transaction.date).toEqual('1/1/2022')
    })

    it('stores the credit amount of the transaction', () => {

        transaction = new Transaction('1/1/2022', 100, 200, 300)

        expect(transaction.credit).toEqual(100)
    })

    it('stores the debit amount of the transaction', () => {

        transaction = new Transaction('1/1/2022', 100, 200, 300)

        expect(transaction.debit).toEqual(200)
    })


})
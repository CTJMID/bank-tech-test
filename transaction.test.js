const Transaction  = require('./transaction')

describe('Trasaction',  () => {

    let transaction;
    beforeEach(() => {
       transaction = new Transaction('1/1/2022', 100, 200, 300);
      });

    it('stores the date of the transaction', () => {

        expect(transaction.date).toEqual('1/1/2022')
    })

    it('stores the credit amount of the transaction', () => {

        expect(transaction.credit).toEqual(100)
    })

    it('stores the debit amount of the transaction', () => {

        expect(transaction.debit).toEqual(200)
    })

    it('stores the balance amount of the transaction', () => {

        expect(transaction.balance).toEqual(300)
    })

    it('returns a formatted string when called', () => {

        expect(transaction.format()).toEqual('1/1/2022 || 100 || 200 || 300')
    })


})
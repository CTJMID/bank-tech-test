const Transaction  = require('./transaction');
const MockDate = require('mockdate');

describe('Trasaction',  () => {

    let transaction;
    beforeEach(() => {
        MockDate.set(new Date('2021-11-22'));
        transaction = new Transaction(100, 200, 300);
    });

    afterEach(() => {
        MockDate.reset();
    });

    it('stores the date of the transaction', () => {
        expect(transaction.date).toContain(2021)
    })

    it('formats the date of the transaction', () => {
        transaction.formatDate()
        expect(transaction.date).toEqual('22-11-2021')
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
        expect(transaction.formatTransaction()).toEqual('22-11-2021 || 100 || 200 || 300')
    })


})
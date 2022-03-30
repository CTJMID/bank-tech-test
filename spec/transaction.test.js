const Transaction  = require('../lib/transaction');
const MockDate = require('mockdate');

describe('Transaction',  () => {

    let transaction;
    beforeEach(() => {
        MockDate.set(new Date('2021-11-22'));
        transaction = new Transaction(100, 200, 300);
    });

    afterEach(() => {
        MockDate.reset();
    });

    it('stores and formats the date of the transaction', () => {
        expect(transaction.date).toEqual('22-11-2021')
    })

    it('stores the credit amount of the transaction', () => {
        expect(transaction.credit).toEqual('100.00')
    })

    it('stores the debit amount of the transaction', () => {
        expect(transaction.debit).toEqual('200.00')
    })

    it('stores the balance amount of the transaction', () => {
        expect(transaction.balance).toEqual('300.00')
    })

    it('returns a formatted string when called', () => {
        expect(transaction.formatTransaction()).toEqual('22-11-2021 || 100.00 || 200.00 || 300.00')
    })


})
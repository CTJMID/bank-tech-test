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

    it('reformats the date to the desired string', () => {
        expect(transaction.formatDate()).toEqual('22/11/2021')
    })

    it('can access date property', () => {
        expect(transaction).toHaveProperty('date')
    })


    it('stores and formats the date of the transaction', () => {
        expect(transaction.date).toEqual('22/11/2021')
    })

    it('converts rounded integers to a string with 2 decimal places', () => {
        expect(transaction.formatAmount(1000)).toEqual('1000.00')
    })

    it('does not convert space string, and return the same space string', () => {
        expect(transaction.formatAmount('  ')).toEqual('  ')
    })

    it('can access credit property', () => {
        expect(transaction).toHaveProperty('credit')
    })

    it('stores the credit amount of the transaction', () => {
        expect(transaction.credit).toEqual('100.00')
    })

    it('can access debit property', () => {
        expect(transaction).toHaveProperty('debit')
    })

    it('stores the debit amount of the transaction', () => {
        expect(transaction.debit).toEqual('200.00')
    })

    it('can access balance property', () => {
        expect(transaction).toHaveProperty('balance')
    })

    it('stores the balance amount of the transaction', () => {
        expect(transaction.balance).toEqual('300.00')
    })

    it('returns a formatted string when called', () => {
        expect(transaction.formatTransaction()).toEqual('22/11/2021 || 100.00 || 200.00 || 300.00')
    })


})
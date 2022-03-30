const Account = require('../lib/account')
const MockDate = require('mockdate');

global.console = {
    log: jest.fn(),
}

describe('Account', () => {

    let account;
    beforeEach(() => {
       account = new Account();
       MockDate.set(new Date('2021-11-22'));
      });

    afterEach(() => {
        MockDate.reset();
    });

    
    it('Should start with a balanace of zero', () => {
        expect(account.balance).toEqual(0);
    })

    it('Should start with an empty transaction history', () => {
        expect(account.history).toEqual([]);
    })

    describe ('depositFunds', () => {
        it('Should have an increased balance when deposit of 100 is made', ()  =>  {
            account.depositFunds(100)
            expect(account.balance).toEqual(100);
         })

        it('Should have an increased balance when deposit of 200 is made', ()  =>  {
            account.depositFunds(200);
            expect(account.balance).toEqual(200);
        })

        it('Should have an increased balance when deposit of 300 is made', ()  =>  {
            account.depositFunds(300)
            expect(account.balance).toEqual(300);
        })

        it('Should be able to add 2 deposits', ()  =>  {
            account.depositFunds(300)
            account.depositFunds(400)
            expect(account.balance).toEqual(700);
        })

        it('Should be able to add 3 deposits', ()  =>  {
            account.depositFunds(300)
            account.depositFunds(400)
            account.depositFunds(500)
            expect(account.balance).toEqual(1200);
        })
    })

    describe ('withdrawFunds', () => {

        it('Should descrease balance when withdrawal of 100 is made', ()  =>  {
            account.withdrawFunds(100)
            expect(account.balance).toEqual(-100);
        })

        it('Should descrease balance when withdrawal of 200 is made', ()  =>  {
            account.withdrawFunds(200)
            expect(account.balance).toEqual(-200);
        })

        it('Should descrease balance when withdrawal of 300 is made', ()  =>  {
            account.withdrawFunds(300)
            expect(account.balance).toEqual(-300);
        })

        it('Should descrease balance when 2 withdrawals are made', ()  =>  {
            account.withdrawFunds(300)
            account.withdrawFunds(400)
            expect(account.balance).toEqual(-700);
        })

        it('Should descrease balance when 2 withdrawals are made', ()  =>  {
            account.withdrawFunds(300)
            account.withdrawFunds(400)
            account.withdrawFunds(500)
            expect(account.balance).toEqual(-1200);
        })
    })

    it('Should calculate the balance between multiple depoists and withdrawals', ()  =>  {
        account.depositFunds(1000)
        account.withdrawFunds(500)
        account.depositFunds(800)
        account.withdrawFunds(400)
        expect(account.balance).toEqual(900);
    })

    describe ('history', () => {
        it('Should start with an empty transaction history', () => {
            expect(account.history).toEqual([]);
        })

        it('should have 1 item after 1 deposit transcation', ()  =>  {
            account.depositFunds(100);
            expect(account.history).toHaveLength(1);
        })

        it('should have 2 item after 2 deposit transcation', ()  =>  {
            account.depositFunds(100)
            account.depositFunds(100)
            expect(account.history).toHaveLength(2);
        })

        it('should have 1 item after 1 withdrawal transcation', ()  =>  {
            account.withdrawFunds(100)
            expect(account.history).toHaveLength(1);
        })

        it('should have 2 item after 2 withdrawal transcation', ()  =>  {
            account.withdrawFunds(100)
            account.withdrawFunds(100)
            expect(account.history).toHaveLength(2);
        })

        it('should be able to access first trasaction balance in account history', ()  =>  {
            account.depositFunds(100)
            expect(account.history[0].balance).toEqual('100.00');
        })

        it('should be able to access second transaction balance in account history', ()  =>  {
            account.depositFunds(100)
            account.depositFunds(200)
            expect(account.history[1].balance).toEqual('300.00');
        })

        it('should be able to access first trasaction balance in account history', ()  =>  {
            account.withdrawFunds(100)
            expect(account.history[0].balance).toEqual('-100.00');
        })

        it('should be able to access second transaction balance in account history', ()  =>  {
            account.withdrawFunds(100)
            account.withdrawFunds(200)
            expect(account.history[1].balance).toEqual('-300.00');
        })

        it('allows us to access the deposit amount from the history', () => {
            account.depositFunds(100)
            account.depositFunds(200)
            expect(account.history[0].credit).toEqual('100.00')
            expect(account.history[1].credit).toEqual('200.00')
        })

        it('allows us to access the withdrawl amount from the history', () => {
            account.withdrawFunds(100)
            account.withdrawFunds(200)
            expect(account.history[0].debit).toEqual('100.00')
            expect(account.history[1].debit).toEqual('200.00')
        })

        it('when depositing the debit amount is a space', () => {
            account.depositFunds(100)
            expect(account.history[0].debit).toEqual("  ")
        })

        it('when withdrawing the credit amount is a space', () => {
            account.withdrawFunds(100)
            expect(account.history[0].credit).toEqual("  ")
        })

        it('stores the date that a depoist is made', () => {
            account.depositFunds(100)
            expect(account.history[0].date).toEqual('22/11/2021')
        })

        it('stores the date that a withdrawal is made', () => {
            account.withdrawFunds(100)
            expect(account.history[0].date).toEqual('22/11/2021')
        })
    })

    describe ('printStatement', () => {

        let header = 'date || credit || debit || balance\n';
        let transactionOne = '22/11/2021 || 100.00 ||    || 100.00\n';
        let transactionTwo = '12/12/2000 ||    || 50.00 || 50.00\n';

        it('returns the correct header', () => {
            expect(account.printStatement()).toEqual(header)
            expect(global.console.log).toHaveBeenCalledWith(header)
        })

        it('returns header and transcation info after 1 transcation', () => {
            account.depositFunds(100);
            expect(account.printStatement()).toEqual(`${header}${transactionOne}`)
            expect(global.console.log).toHaveBeenCalledWith(`${header}${transactionOne}`)
        })

        it('returns header and transcation info after 2 transcations', () => {
            account.depositFunds(100);
            MockDate.set(new Date('2000-12-12'))
            account.withdrawFunds(50);
            expect(account.printStatement()).toEqual(`${header}${transactionTwo}${transactionOne}`)
            expect(global.console.log).toHaveBeenCalledWith(`${header}${transactionTwo}${transactionOne}`)
        })

    })

})
const Account = require('./account')

describe('Account', () => {

    let account;

    beforeEach(() => {
       account = new Account();
      });

    describe ('depositFund', () => {
        it('Should start with a balanace of zero', () => {

            expect(account.balance).toEqual(0);
        })

        it('Should have an increased balance when deposit is made', ()  =>  {
            account.depositFunds(100)

            expect(account.balance).toEqual(100);
         })

        it('Should be able to increase balance by different amounts when alternative deposits are made', ()  =>  {
            account.depositFunds(200);

            expect(account.balance).toEqual(200);
        })

        it('Should be able to increase balance by different amounts when a third different deposit is made ', ()  =>  {
            account.depositFunds(300)

            expect(account.balance).toEqual(300);
        })

        it('Should be able to add multiple deposits', ()  =>  {
            account.depositFunds(300)
            account.depositFunds(400)

            expect(account.balance).toEqual(700);
        })

        it('Should be able to add multiple deposits with alternative amounts', ()  =>  {
            account.depositFunds(300)
            account.depositFunds(400)
            account.depositFunds(500)

            expect(account.balance).toEqual(1200);
        })
    })

})
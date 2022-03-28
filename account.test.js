const Account = require('./account')

describe('Account', () => {
    it('Should start with a balanace of zero', () => {
        const account = new Account();

        expect(account.balance).toEqual(0);
    })

    it('Should have an increased balance when deposit is made', ()  =>  {
        const account = new Account();
        account.depositFunds(100)

        expect(account.balance).toEqual(100);
    })

    it('Should be able to increase balance by different amounts when alternative deposits are made', ()  =>  {
        const account = new Account();
        account.depositFunds(200);

        expect(account.balance).toEqual(200);
    })
})
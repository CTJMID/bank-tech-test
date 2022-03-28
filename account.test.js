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
})
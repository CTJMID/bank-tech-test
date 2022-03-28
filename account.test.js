const Account = require('./account')

describe('Account', () => {
    it('Should start with a balanace of zero', () => {
        const account = new Account();

        expect(account.balance).toEqual(0);
    })
})
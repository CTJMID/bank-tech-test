const Account = require('./account')

describe('Account', () => {

    let account;

    beforeEach(() => {
       account = new Account();
      });

    
    it('Should start with a balanace of zero', () => {

        expect(account.balance).toEqual(0);
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


    
    })

})
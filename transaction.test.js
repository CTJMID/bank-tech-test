const Transaction  = require('./transaction')

describe('Trasaction',  () => {

   it('stores the date of the transaction', () => {

        transaction = new Transaction('1/1/2022', 100, 200, 300)

        expect(transaction.date).toEqual('1/1/2022')
   })


})
### Requirements

You should be able to interact with your code via a REPL like IRB or Node. (You don't need to implement a command line interface that takes input from STDIN.  
Deposits, withdrawal.  
Account statement (date, amount, balance) printing.  
Data can be kept in memory (it doesn't need to be stored to a database or anything).  

### Acceptance criteria
Given a client makes a deposit of 1000 on 10-01-2023  
And a deposit of 2000 on 13-01-2023  
And a withdrawal of 500 on 14-01-2023   
When she prints her bank statement  
Then she would see:
```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

## Planning

Key Nouns (classes):
1. Account (has a balance, has a transaction log an array of transcation objects)
2. Statement (iterates over then transaction log, and prints stored info in a particular way)
3. Transation (4 attributes (date, credit, debit, balance))

Key Verbs (methods):
1. Deposit - instantiate a transaction object
2. Withdrawal - instantiate a transaction object
3. Print Statement - instantiate a statement object


Testing Plan:

Account starts with 0  
Account methods will trigger chnages in balance  
Account starts with an empty transcation log  
Account methods add to the transcation log  

Transaction objects takes 4 arguments  
Transaction objects can return a date, a credit amount, a debit amount, and a balance  
The last balance entry equals the account balance






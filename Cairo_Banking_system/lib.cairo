
mod Account {
    fn checkBalance(){}
}

<<<<<<< HEAD
mod Transaction {
    fn deposit(){}
    fn withdraw(){}
    fn transfer(){}
}
=======
// // mod Transaction {
// //     fn deposit(){}
// //     fn withdraw(){}
// //     fn transfer(){}
// // }
// >>>>>>> master
mod Bank {
    use array::ArrayTrait;
    use debug::PrintTrait;


    #[derive(Copy, Drop)]
<<<<<<< HEAD
    struct BankAccount{
        bankBalance: u32,
        accountName: felt252,
    }

    #[derive(Drop)]
    struct BankStorage {
        bankAccounts: Array<BankAccount>
    }
=======
    struct BankAccount{
        bankBalance: u32,
        accountName: felt252,
    }

    #[derive(Drop)]
    struct BankStorage {
        bankAccounts: Array<BankAccount>
    }
>>>>>>> master
    
    fn createAccounts(accountName: felt252, ref bank: BankStorage){
        let mut bankStorage = BankStorage {bankAccounts: ArrayTrait::new()};
        let account = BankAccount {accountName, bankBalance: 0};
        bank.bankAccounts.append(account);
    }

    fn displayLength(bank: @BankStorage) -> usize{
        bank.bankAccounts.len()
    }

    fn displayAccount(bank: @BankAccount) -> @felt252{
        bank.accountName
    }

    impl BankAccountPrintTrait of PrintTrait<BankAccount> {
        fn print(self: BankAccount){
            self.accountName.print();
            self.bankBalance.print();
        }
    }
}

use Bank::{BankAccount, BankStorage, createAccounts, displayLength};
use debug::PrintTrait;
fn main(){
    let mut bank = BankStorage {
        bankAccounts: ArrayTrait::new()
    };


    createAccounts('account1',ref bank);
    createAccounts('account2',ref bank);
    let account1 = bank.bankAccounts[0];
}
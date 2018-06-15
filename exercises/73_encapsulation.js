// Encapsulation: hiding internal details.
//
// Encapsulation means keeping an object's internal data private and only
// exposing safe ways to use it. In 2018 JavaScript classes do not have
// real private fields yet (the #private syntax is still a proposal), so
// people use two approaches:
//   1. an underscore naming CONVENTION (_balance) - just a "please don't
//      touch" hint, not truly private.
//   2. closures - genuinely private, from the module-pattern days.

// approach 1: convention. Anyone CAN still reach _balance, but the
// underscore says "internal, use the methods instead".
class BankAccount {
  constructor(balance = 0) {
    this._balance = balance; // "private by convention"
  }
  deposit(amount) {
    if (amount <= 0) throw new Error("amount must be positive");
    this._balance += amount;
  }
  withdraw(amount) {
    if (amount > this._balance) throw new Error("insufficient funds");
    this._balance -= amount;
  }
  get balance() {
    return this._balance; // read-only access through a getter
  }
}

const account = new BankAccount(100);
account.deposit(50);
account.withdraw(30);
console.log(account.balance); // 120
// account.balance = 999999; // does nothing useful - no setter defined
console.log(account.balance); // still 120

// approach 2: real privacy with a closure (no class). The variable
// "balance" cannot be reached from outside at all.
function createAccount(startBalance = 0) {
  let balance = startBalance; // truly private
  return {
    deposit(amount) {
      balance += amount;
    },
    getBalance() {
      return balance;
    },
  };
}
const secret = createAccount(200);
secret.deposit(50);
console.log(secret.getBalance()); // 250
console.log(secret.balance); // undefined - genuinely hidden

// note to self: a future version of JS adds #private class fields, which
// will make this cleaner. For now the convention is the common choice.

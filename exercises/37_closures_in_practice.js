// Closures in practice: private state and the module pattern.
//
// One of the best uses of closures is creating "private" variables that
// code outside cannot touch directly. The only way to change them is
// through the functions you choose to expose.

// a bank account where the balance is private
function createAccount(startingBalance) {
  let balance = startingBalance; // private - not reachable from outside

  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    withdraw(amount) {
      if (amount > balance) {
        return "Insufficient funds";
      }
      balance -= amount;
      return balance;
    },
    getBalance() {
      return balance;
    },
  };
}

const account = createAccount(100);
console.log(account.deposit(50)); // 150
console.log(account.withdraw(30)); // 120
console.log(account.getBalance()); // 120
console.log(account.balance); // undefined - balance is hidden!

// the "module pattern": group related functions and hide internals.
const counterModule = (function () {
  let count = 0; // private
  return {
    increment: () => ++count,
    decrement: () => --count,
    reset: () => (count = 0),
    value: () => count,
  };
})();

counterModule.increment();
counterModule.increment();
console.log(counterModule.value()); // 2
counterModule.reset();
console.log(counterModule.value()); // 0

// a once() helper: a function that only runs the first time, using a
// closure to remember whether it has already run.
function once(fn) {
  let called = false;
  let result;
  return function (...args) {
    if (!called) {
      called = true;
      result = fn(...args);
    }
    return result;
  };
}

const setup = once(() => {
  console.log("setting up...");
  return "ready";
});
setup(); // logs "setting up..."
setup(); // does nothing the second time

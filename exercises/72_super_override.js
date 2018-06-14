// super and method overriding.
//
// A child class can OVERRIDE a parent method by defining its own with the
// same name. Inside the override, super.method() calls the parent's
// version, so you can extend behaviour instead of fully replacing it.

class Employee {
  constructor(name, baseSalary) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  describe() {
    return `${this.name}, base salary ${this.baseSalary}`;
  }

  pay() {
    return this.baseSalary;
  }
}

class Manager extends Employee {
  constructor(name, baseSalary, bonus) {
    super(name, baseSalary); // call Employee's constructor first
    this.bonus = bonus;
  }

  // override pay(), but reuse the parent's pay() via super
  pay() {
    return super.pay() + this.bonus; // base salary + bonus
  }

  // override describe(), extending the parent's text
  describe() {
    return `${super.describe()} (manager, +${this.bonus} bonus)`;
  }
}

const emp = new Employee("Ada", 5000);
const mgr = new Manager("Bob", 6000, 2000);

console.log(emp.pay()); // 5000
console.log(mgr.pay()); // 8000  (6000 + 2000, reusing super.pay())
console.log(mgr.describe()); // "Bob, base salary 6000 (manager, +2000 bonus)"

// rule: in a subclass constructor you MUST call super() before using
// "this". Forgetting it is an error.
class Broken extends Employee {
  constructor(name) {
    // this.name = name; // ERROR: must call super() before using "this"
    super(name, 0);
    this.name = name;
  }
}
console.log(new Broken("Cara").describe());

// super works for any inherited method, not just the constructor. This
// "extend, don't replace" pattern is really common in real code.

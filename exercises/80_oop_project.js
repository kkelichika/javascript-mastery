// Mini project: a small library system, putting the month's OOP together.
//
// It uses: a base class, inheritance with super, encapsulation, a custom
// error, static counters, getters, and polymorphism. This is the most
// "designed" code I have written so far.

// a custom error for the domain
class LibraryError extends Error {
  constructor(message) {
    super(message);
    this.name = "LibraryError";
  }
}

// base class for anything that can be borrowed
class Item {
  static nextId = 1;

  constructor(title) {
    this.id = Item.nextId++; // static counter gives unique ids
    this.title = title;
    this._borrowedBy = null; // "private by convention"
  }

  get isAvailable() {
    return this._borrowedBy === null;
  }

  borrow(member) {
    if (!this.isAvailable) {
      throw new LibraryError(`"${this.title}" is already borrowed`);
    }
    this._borrowedBy = member;
  }

  giveBack() {
    this._borrowedBy = null;
  }

  // children override this (polymorphism)
  describe() {
    return `Item: ${this.title}`;
  }
}

class Book extends Item {
  constructor(title, author) {
    super(title);
    this.author = author;
  }
  describe() {
    return `Book: "${this.title}" by ${this.author}`;
  }
}

class DVD extends Item {
  constructor(title, minutes) {
    super(title);
    this.minutes = minutes;
  }
  describe() {
    return `DVD: "${this.title}" (${this.minutes} min)`;
  }
}

// the library manages a collection of items
class Library {
  constructor() {
    this.items = [];
  }
  add(item) {
    this.items.push(item);
    return item;
  }
  get available() {
    return this.items.filter((item) => item.isAvailable);
  }
  findByTitle(title) {
    return this.items.find((item) => item.title === title);
  }
}

// --- using it ---
const library = new Library();
const book = library.add(new Book("Clean Code", "Robert Martin"));
const dvd = library.add(new DVD("Inception", 148));

// polymorphism: describe() runs each item's own version
library.items.forEach((item) => console.log(item.describe()));

book.borrow("Ada");
console.log("available now:", library.available.map((i) => i.title));

// the custom error fires when borrowing an unavailable book
try {
  book.borrow("Bob");
} catch (error) {
  if (error instanceof LibraryError) {
    console.log("handled:", error.message);
  }
}

book.giveBack();
console.log("after return, available:", library.available.length); // 2

// A to-do list as a small, testable module.
//
// The logic is kept separate from any UI or input, so it is easy to test.
// This is a good habit I picked up: pure logic in one place, the messy
// input/output somewhere else.

class TodoList {
  constructor() {
    this.todos = [];
    this.nextId = 1;
  }

  add(text) {
    if (!text || text.trim() === "") {
      throw new Error("todo text cannot be empty");
    }
    const todo = { id: this.nextId++, text: text.trim(), done: false };
    this.todos.push(todo);
    return todo;
  }

  toggle(id) {
    const todo = this.todos.find((t) => t.id === id);
    if (!todo) throw new Error(`no todo with id ${id}`);
    todo.done = !todo.done;
    return todo;
  }

  remove(id) {
    const before = this.todos.length;
    this.todos = this.todos.filter((t) => t.id !== id);
    return this.todos.length < before; // true if something was removed
  }

  get active() {
    return this.todos.filter((t) => !t.done);
  }

  get completed() {
    return this.todos.filter((t) => t.done);
  }

  clearCompleted() {
    this.todos = this.active;
  }
}

module.exports = TodoList;

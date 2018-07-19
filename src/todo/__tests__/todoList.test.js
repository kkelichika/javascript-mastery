// Tests for the TodoList module.

const TodoList = require("../todoList");

describe("TodoList", () => {
  let list;

  // beforeEach runs before every test, giving each a fresh list
  beforeEach(() => {
    list = new TodoList();
  });

  test("starts empty", () => {
    expect(list.todos).toHaveLength(0);
  });

  test("adds a todo with an id and done=false", () => {
    const todo = list.add("Learn Jest");
    expect(todo).toEqual({ id: 1, text: "Learn Jest", done: false });
    expect(list.todos).toHaveLength(1);
  });

  test("trims whitespace and rejects empty text", () => {
    expect(list.add("  spaced  ").text).toBe("spaced");
    expect(() => list.add("   ")).toThrow("cannot be empty");
  });

  test("gives each todo a unique increasing id", () => {
    const a = list.add("a");
    const b = list.add("b");
    expect(a.id).toBe(1);
    expect(b.id).toBe(2);
  });

  test("toggles done on and off", () => {
    const todo = list.add("task");
    list.toggle(todo.id);
    expect(todo.done).toBe(true);
    list.toggle(todo.id);
    expect(todo.done).toBe(false);
  });

  test("throws when toggling an unknown id", () => {
    expect(() => list.toggle(999)).toThrow("no todo with id 999");
  });

  test("removes a todo and reports whether it removed anything", () => {
    const todo = list.add("task");
    expect(list.remove(todo.id)).toBe(true);
    expect(list.remove(todo.id)).toBe(false); // already gone
    expect(list.todos).toHaveLength(0);
  });

  test("separates active and completed", () => {
    const a = list.add("a");
    list.add("b");
    list.toggle(a.id); // mark a as done
    expect(list.active).toHaveLength(1);
    expect(list.completed).toHaveLength(1);
  });

  test("clearCompleted keeps only active todos", () => {
    const a = list.add("a");
    list.add("b");
    list.toggle(a.id);
    list.clearCompleted();
    expect(list.todos).toHaveLength(1);
    expect(list.todos[0].text).toBe("b");
  });
});

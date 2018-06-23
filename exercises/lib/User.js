// A module with a DEFAULT export plus some named exports.
//
// A file can have ONE default export (usually its main thing) and any
// number of named exports alongside it.

// the main thing this module provides: the User class (default export)
export default class User {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return `Hi, I'm ${this.name}`;
  }
}

// extra named exports for related helpers
export const ROLES = ["admin", "editor", "guest"];

export function isValidRole(role) {
  return ROLES.includes(role);
}

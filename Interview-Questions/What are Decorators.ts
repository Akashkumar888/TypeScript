
// What are Decorators?
// Decorators are metadata annotations used on:
// classes
// methods
// properties
// Used heavily in Angular.

// ✔ Example:
function Log(target: any) {
  console.log("Decorated:", target);
}

// @Log
class User {}

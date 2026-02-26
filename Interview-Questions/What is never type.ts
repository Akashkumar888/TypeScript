
// What is never type?
// Represents something that never occurs.

// ✔ Functions that always throw:
function error(): never {
  throw new Error("Oops!");
}

// ✔ Infinite loop:
function loop(): never {
  while (true) {}
}

// Used for exhaustive checks in switch statements.

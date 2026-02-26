
// What are type aliases?
// A type alias creates a new name for a type.
// Can be used for:
// primitive types
// union types
// tuple types
// function signatures

// ✔ Example:
type ID = number | string;
let userId: ID = 101;
userId = "USR123"; // valid

// Function type:
type MathFn = (a: number, b: number) => number;

const add: MathFn = (x, y) => x + y;
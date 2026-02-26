
// What is Structural Typing? (Duck Typing)
// TypeScript cares about shape, not name.
interface Point { x: number }

let p = { x: 10, y: 20 };
let q: Point = p; // ✔ allowed (has x)
 
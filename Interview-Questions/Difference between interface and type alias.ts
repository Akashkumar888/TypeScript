
// Difference between interface and type alias? (Deep Explanation)
// Feature	Interface	Type Alias
// Extendable	Yes (extends)	Limited
// Declaration merging	Yes	No
// Represents	Objects, classes	Primitives, unions, tuples
// Use-case	OOP, object contracts	Complex type transformations
// ✔ Example of merging (only interface supports):
interface A { x: number; }
interface A { y: number; }

const obj: A = { x: 10, y: 20 }; // merged ✔

// ✔ Type alias cannot merge:
type B = number | string;
// // Cannot declare B again ❌

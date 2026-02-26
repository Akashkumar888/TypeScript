
// Union vs Intersection Types?
// 🔹 Union (|) → Either type
let value: number | string;
value = 10;
value = "hello";

// 🔹 Intersection (&) → Must satisfy both types
type A = { x: number };
type B = { y: number };
type C = A & B;

const obj: C = { x: 10, y: 20 };

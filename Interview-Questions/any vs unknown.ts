
// any vs unknown (Very Important Interview Question)
// any	unknown
// Disables type checking	Requires type checking
// Unsafe	Safe
// You can use it directly	Must narrow before use
// Good for migration	Good for APIs with unknown data
// ✔ Example:
let a: any = 10;
a.toUpperCase(); // No error ❌

let b: unknown = "hello";
if (typeof b === "string") {
  b.toUpperCase(); // Now safe ✔
}

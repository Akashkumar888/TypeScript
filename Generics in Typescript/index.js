// 🔷 1️⃣ What is Generic?
// Generic means:
// "Write code once, use it for multiple types safely."
function logAndReturn(value) {
    return value;
}
var numberResult = logAndReturn(42);
var stringResult = logAndReturn("Hello, Generic");
var booleanResult = logAndReturn(true);
console.log(numberResult);
console.log(stringResult);
console.log(booleanResult);
function getFirstElement(arr) {
    return arr[0];
}
var firstNumber = getFirstElement([10, 20, 30]);
var firstString = getFirstElement(["A", "B", "C"]);
console.log(firstNumber); // 10
console.log(firstString); // "A"
function pair(key, value) {
    return { key: key, value: value };
}
var p1 = pair("age", 23);
var p2 = pair(1, "Akash");
console.log(p1);
console.log(p2);
function getProperty(obj, key) {
    return obj[key];
}
var user = {
    name: "Akash",
    age: 23
};
var userName = getProperty(user, "name");
console.log(userName);
var response1 = {
    success: true,
    data: "Login Successful"
};
var response2 = {
    success: true,
    data: [1, 2, 3]
};
// 🔷 10️⃣ When We Use Generics?
// Use Generics when:
// ✔ You want reusable functions
// ✔ You want reusable components
// ✔ API responses
// ✔ Utility functions
// ✔ Data structures
// ✔ React reusable components
// ✔ Custom hooks
// ✔ Libraries
// 🔷 11️⃣ Interview Definition (Important)
// If interviewer asks:
// What is Generic in TypeScript?
// You say:
// Generics allow us to write reusable and type-safe code that works with multiple data types without losing type information. They provide flexibility while maintaining strict type checking.
// 🔷 12️⃣ Generic vs Union Difference (Important)
// Generic	Union
// Works with ANY type	Limited predefined types
// Reusable	Fixed options
// Preserves type	Returns union type
// Example:
// function test(value: string | number): string | number
// Return type is always string | number
// But generic:
// function test<T>(value: T): T
// If input is number → return number
// If input is string → return string
// 🔥 This is powerful.

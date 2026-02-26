"use strict";
// TS Array Example
// (a) adding elements to an array push
const fruits = ["apple", "banana", "orange", "mango"];
// ✅ push()
const newLength = fruits.push("kiwi");
console.log(newLength);
console.log(fruits);
// ❌ fruits.push(100); 
// Error: Argument of type 'number' is not assignable to parameter of type 'string'
// removing elements from an array using pop:
// ✅ pop()
const removed = fruits.pop();
console.log(removed);
console.log(fruits);
console.log();
// ✅ for loop
for (let i = 0; i < fruits.length; i++) {
    console.log(i, fruits[i]);
}
console.log();
// for ...in -> in for index
for (const index in fruits) {
    console.log(index, fruits[index]);
}
// 👉 for...in is mainly for objects, not arrays.
// Better for arrays:
// for...of
// forEach
console.log();
// ✅ for...of -> direct value
for (const fruit of fruits) {
    console.log(fruit);
}
console.log();
// ✅ forEach
fruits.forEach((fruit, index) => {
    console.log(index, fruit);
});
console.log();
// // ✅ forEach
// fruits.forEach((index: number,fruit: string) => {
//   console.log(index, fruit);
// });
// 🚨 This is WRONG because:
// forEach parameters order is:
// (currentValue, index, array)
// ✔ First parameter → value
// ✔ Second parameter → index
console.log();
// ✅ forEach
fruits.forEach((currVal) => console.log(currVal));

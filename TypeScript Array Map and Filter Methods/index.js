"use strict";
// map 
const numbers = [1, 2, 3, 4, 5];
// const newArr:number[]=numbers.map((num:number)=>num*2);
const newArr = numbers.map((num) => {
    return num * 2;
});
console.log(newArr);
// filter 
// const filterArr:number[]=numbers.filter((num:number)=>num%2==1);
// const filterArr:number[]=numbers.filter((num:number)=>{
//   if(num%2===1)return num;
// });
// It works, but it's not clean.
// filter() expects a boolean, not the value.
// array.filter(callback)
// The callback must return:
// true → keep the element
// false → remove the element
// const filterArr:number[]=numbers.filter((num:number)=>{
//   if(num%2===1)return true;
// });
// Why it works?
// When condition is true → returns true
// When condition is false → returns undefined
// undefined is treated as false
// But this is not professional.
const filterArr = numbers.filter((num) => {
    return num % 2 === 1;
});
console.log(filterArr);
const numberToString = numbers.map((currNum) => currNum.toString());
console.log(numberToString);
const numberGreaterThanTwoWrong = numbers.map((num) => {
    if (num > 2)
        return num;
});
console.log("Wrong map:", numberGreaterThanTwoWrong);
// Output: [undefined, undefined, undefined, 4, 5]
// ✅ WHY?
// map ALWAYS returns same length array.
// If condition fails → undefined gets stored. // map check each values not filter 
// const numberGreaterThanThree=numbers.filter((num:number)=>num>3);
const numberGreaterThanThree = numbers.filter((num) => {
    if (num > 3)
        return num;
});
console.log(numberGreaterThanThree);
// 5️⃣ Even numbers
// const evenNumbers: number[] = numbers.filter((num: number) => {
//   return num % 2 === 0;
// });
// const evenNumbers:number[]=numbers.filter((num:number)=>num%2===0);
const evenNumbers = numbers.filter((num) => {
    if (num % 2 === 0)
        return num;
});
console.log(evenNumbers);
// 4️⃣ Odd numbers
const oddNumbers = numbers.filter((num) => {
    return num % 2 === 1;
});
console.log("Odd Numbers:", oddNumbers);
// 🧠 Difference Between map & filter
// map()	filter()
// Returns SAME length array	Returns smaller or equal array
// Transforms each element	Selects elements
// Always returns something	Returns only matching elements
const names = ["Alice", "Bob", "Anna", "Andrew", "Alex"];
const upperCaseNames = names.map((name) => {
    return name.toUpperCase();
});
console.log("Uppercase Names:", upperCaseNames);
const squaredNumbers = numbers.map((num) => {
    return num * num;
});
console.log("Squared Numbers:", squaredNumbers);
const namesLengthGreaterThanFour = names.filter((name) => {
    if (name.length > 4)
        return true;
});
console.log("Names greater than length 4:", namesLengthGreaterThanFour);
const namesStartingWithA = names.filter((name) => {
    return name.startsWith("A");
});
console.log("Names starting with A:", namesStartingWithA);
// If interviewer asks:
// ❓ Why does map return undefined sometimes?
// Answer:
// Because map always returns an array of the same length. If a condition does not return a value explicitly, undefined is stored in that position. For filtering elements, filter() should be used instead.
// 1️⃣ Calculate Average
const calculateAverage = (nums) => {
    if (nums.length === 0)
        return 0; // edge case
    const sum = nums.reduce((acc, curr) => acc + curr, 0);
    return sum / nums.length;
};
// Test
const numbers2 = [10, 20, 30, 40];
console.log("Average:", calculateAverage(numbers2));
// 2️⃣ Find Maximum Value
const findMaxValue = (nums) => {
    if (nums.length === 0) {
        throw new Error("Array cannot be empty");
    }
    let max = nums[0];
    for (let num of nums) {
        if (num > max) {
            max = num;
        }
    }
    return max;
};
// Test
console.log("Max Value:", findMaxValue(numbers2));
const findMaxValueShort = (nums) => {
    return Math.max(...nums);
};
console.log("Max (short):", findMaxValueShort(numbers2));
// If interviewer asks:
// Why not just use Math.max?
// You can say:
// In real projects, manual implementation shows understanding of logic and algorithm. But in production, Math.max with spread operator is cleaner and optimized.

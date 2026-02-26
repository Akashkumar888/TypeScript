"use strict";
// normal function , it has this keywords
function sum1(a, b) {
    return a + b;
}
let sumOfTwoNumbers = sum1(5, 25);
console.log(sumOfTwoNumbers);
// fat arrow function
const sum2 = (a, b, c) => {
    return a + b + c;
};
let sumOfThreeNumbers = sum2(5, 25, 40);
console.log(sumOfThreeNumbers);

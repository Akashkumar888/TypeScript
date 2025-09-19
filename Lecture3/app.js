console.log("Hello...");
function combine(num1, num2) {
    var result;
    if (typeof num1 === "number" && typeof num2 === "number") {
        result = num1 + num2;
    }
    else {
        result = num1.toString() + num2.toString();
    }
    return result;
}
// Example usage with explicit type narrowing
var sumOfTwoNumbers = combine(10, 20);
if (typeof sumOfTwoNumbers === "number") {
    console.log("Sum:", sumOfTwoNumbers); // ✅ Safe
}
var concatOfTwoString = combine("Akash", "Kumar");
if (typeof concatOfTwoString === "string") {
    console.log("Concatenation:", concatOfTwoString); // ✅ Safe
}
function akash(num1, num2, conversionType) {
    var ans;
    if (conversionType === 'as-number' || (typeof num1 === "number" && typeof num2 === "number")) {
        ans = +num1 + +num2;
    }
    else {
        ans = num1.toString() + num2.toString();
    }
    return ans;
}
var sum1 = akash(20, 30, "as-number");
var sum2 = akash("50", "40", "as-number");
var combineName = akash("Akash", "kumar", "as-string");
console.log(sum1, sum2, combineName);
// type → often used for aliases, unions, intersections.
// interface → often used when designing shapes of objects, especially in OOP style or extending multiple interfaces.
// interface ObjectType {
//  name:string,
//  age:number,
//  skills:string[],
// };
var user = {
    name: "Akash",
    age: 22,
    skills: ["Python", "cpp", "JavaScript", "Reactjs"],
};
console.log(user);
function greet(user) {
    console.log("Hii, I am ".concat(user.name));
}
greet(user);

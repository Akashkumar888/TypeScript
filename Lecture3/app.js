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

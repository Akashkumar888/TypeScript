// union 
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// fat arrow functions define
// Union Type Example
var userInput = function (value) {
    if (typeof value === "number") {
        return value * 2; // double number
    }
    if (typeof value === "string") {
        return value.toUpperCase(); // uppercase string
    }
    if (typeof value === "boolean") {
        return value ? "Yes" : "No"; // boolean format
    }
    throw new Error("Invalid input type");
};
// Function Calls
console.log(userInput(10)); // 20
console.log(userInput("Akash")); // AKASH
console.log(userInput(true)); // Yes
console.log(userInput(false)); // No
// ✅ 2️⃣ Union With Arrays
// Case 1: Array that can contain both types
var mixedArray = ["Akash", 23, "India", 100];
mixedArray.forEach(function (item) {
    if (typeof item === "number") {
        console.log(item * 2);
    }
    else {
        console.log(item.toUpperCase());
    }
});
// Case 2: Entire array is either string[] OR number[]
var processArray = function (arr) {
    if (typeof arr[0] === "string") {
        console.log("String Array:", arr.map(function (item) { return item.toUpperCase(); }));
    }
    else {
        console.log("Number Array:", arr.map(function (item) { return item * 2; }));
    }
};
processArray(["akash", "thapa"]);
processArray([10, 20, 30]);
var handleResponse = function (response) {
    if (response.success === true) {
        console.log("Data:", response.data);
    }
    else {
        console.log("Error:", response.error);
    }
};
// Now object must contain ALL properties
var employee = {
    name: "Akash",
    age: 23,
    emp_id: 1,
    department: "IT"
};
console.log(employee);
// Objects
var user = {
    name: "Akash",
    age: 23
};
var userLocation = {
    city: "Pune",
    country: "India"
};
// Function that RETURNS combined object
var createUserProfile = function (user, location) {
    return __assign(__assign({}, user), location);
};
// Call function
var myCompleteInfo = createUserProfile(user, userLocation);
console.log(myCompleteInfo);
var fullUser = {
    name: "Akash",
    age: 23,
    accountNumber: "123456789",
    balance: 50000
};
console.log(fullUser);

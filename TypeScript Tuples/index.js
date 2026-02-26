var displayPersonInfo = function (person) {
    var name = person[0], age = person[1], hasDriverLicense = person[2];
    console.log("Name: ".concat(name, ", Age: ").concat(age, ", Driver's License: ").concat(hasDriverLicense ? "Yes" : "No"));
};
var person1 = ['Akash', 23, true];
// order matters here 
var preson2 = ['thapa', 17, false];
displayPersonInfo(person1);
displayPersonInfo(preson2);
// Create product instances
var product1 = ["Laptop", 50000, 2];
var product2 = ["Mobile", 20000, 3];
// Function to display product info
var displayProduct = function (product) {
    var name = product[0], price = product[1], quantity = product[2];
    var total = price * quantity;
    console.log("Product: ".concat(name));
    console.log("Price: \u20B9".concat(price));
    console.log("Quantity: ".concat(quantity));
    console.log("Total Price: \u20B9".concat(total));
    console.log("---------------------------");
};
displayProduct(product1);
displayProduct(product2);
// Student grades
var grades = [
    ["Math", 85],
    ["English", 90],
    ["Science", 88],
];
// Function to calculate average
var calculateAverageGrade = function (subjects) {
    var total = 0;
    for (var _i = 0, subjects_1 = subjects; _i < subjects_1.length; _i++) {
        var _a = subjects_1[_i], grade = _a[1];
        total += grade;
    }
    return total / subjects.length;
};
// Display grades
var displayGrades = function (subjects) {
    subjects.forEach(function (_a) {
        var subject = _a[0], grade = _a[1];
        console.log("".concat(subject, ": ").concat(grade));
    });
    console.log("Average Grade:", calculateAverageGrade(subjects));
};
displayGrades(grades);
var weatherList = [
    ["Pune", 28, "Sunny"],
    ["Delhi", 35, "Hot"],
    ["Mumbai", 30, "Humid"],
];
// Function to display weather
var displayWeather = function (data) {
    data.forEach(function (_a) {
        var city = _a[0], temp = _a[1], condition = _a[2];
        console.log("City: ".concat(city, " | Temperature: ").concat(temp, "\u00B0C | Condition: ").concat(condition));
    });
};
displayWeather(weatherList);
// 🧠 When to Use Tuple?
// Use Tuple when:
// ✔ Fixed number of elements
// ✔ Order is important
// ✔ Each position has different type
// ✔ Small structured data
// Example:
// Coordinates → [x, y]
// Product → [name, price, quantity]
// API response → [statusCode, message]
// ⚡ Tuple vs Array (Interview Quick Answer)
// Tuple	Array
// Fixed length	Dynamic length
// Fixed types per index	Same type for all elements
// Order matters	Order less strict
// Used for structured small data	Used for lists

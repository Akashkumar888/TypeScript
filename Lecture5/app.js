console.log("akash");
var userInput;
var userName;
// let userName :any;
// any
// When a variable is of type any, TypeScript disables type checking.
// You can assign it to any other type without restrictions.
// unknown
// unknown is safer than any.
// You can assign anything to unknown, but before using it, you must check its type.
userInput = 10;
userName = "Kumar";
if (typeof userInput === "string") {
    userName = userInput;
}
// never return type 
// never is used for functions that never return a value.
// This happens in two main cases:
// Function throws an error.
// Function never ends (infinite loop).
function generateError(message, code) {
    throw { message: message, statusCode: code };
}
var res = generateError("Internal server error", 500);
console.log(res);

console.log("Let's learn functions...");
// function return type
function addNumber(num1, num2) {
    return num1 + num2;
}
var sum = addNumber(10, 20);
console.log(sum);
function addString(str1, str2) {
    return str1 + str2;
}
var concatenation = addString("Akash", "Kumar");
console.log(concatenation);
function addValues(a, b) {
    return a + b;
}
console.log(addValues(190, 20)); // 30
console.log(addValues("Priya", "Yadav")); // AkashKumar
function greet(name) {
    console.log("Hii, ".concat(name));
}
greet("Akash");
// let combineFunction : Function;
// // combineFunction=10;// invalid
// // combineFunction=function(){}; // valid
// combineFunction=addNumber;
// console.log(combineFunction(1,3));
// combineFunction=addString;
// console.log(combineFunction("preeti","Yadav"));
// good practice
var combineFunction;
combineFunction = addNumber;
console.log(combineFunction(20, 40));
// function addHandle(num1:number,num2:number,cb:(n:number)=>void){
//   const result=num1+num2;
//   cb(result);
// }
function addHandle(num1, num2, cb) {
    var result = num1 + num2;
    cb(result);
}
addHandle(89, 51, function (result) {
    console.log(result);
});

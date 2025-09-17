// generally in typescript 
// number string boolean
function add(num1, num2, printResult, someText) {
    if (printResult) {
        console.log("".concat(someText, " ").concat(num1 + num2));
    }
}
var n1 = 20;
var n2 = 30;
var printResult = true;
var someText = "Sum of two number is = ";
add(n1, n2, printResult, someText);

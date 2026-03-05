var MathOperations = /** @class */ (function () {
    function MathOperations() {
    }
    MathOperations.add = function (num1, num2) {
        return num1 + num2;
    };
    MathOperations.subs = function (num1, num2) {
        return num1 - num2;
    };
    MathOperations.division = function (num1, num2) {
        return num1 / num2;
    };
    MathOperations.multiply = function (num1, num2) {
        return num1 * num2;
    };
    MathOperations.modulo = function (num1, num2) {
        return num1 % num2;
    };
    MathOperations.PI = Math.PI;
    return MathOperations;
}());
console.log(MathOperations.PI);
console.log(MathOperations.add(4, 6));
console.log(MathOperations.subs(10, 6));
console.log(MathOperations.division(10, 6));
console.log(MathOperations.multiply(10, 6));
console.log(MathOperations.modulo(10, 6));

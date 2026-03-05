// it is interface for object 
// interface PerObj {
//   name: string;
//   age: number;
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// const person: PerObj = {
//   name: "Akash",
//   age: 23
// };
// const person1: PerObj = {
//   name: "Thapa",
//   age: 23
// };
// const person3:PerObj={
//   name:"Kumar",
//   age:25
// }
// abstract class for class
// it is common class for many class 
// abstract class can not be instantiated.
// abstract class can be inheriated.
// 3️⃣ Abstract Class Concept (Lecture Topic)
// Abstract class is used when:
// ✔ Many classes share common structure
// ✔ Some methods must be implemented by child classes
// Example:
// Shape
//  ├ Circle
//  ├ Square
//  └ Rectangle
// All shapes must have:
// calculateArea()
// displayArea()
// So we make abstract base class.
// *********************************************************
// ABSTRACT CLASS
// *********************************************************
// abstract class cannot be instantiated
// it works as blueprint for other classes
var Shape = /** @class */ (function () {
    // protected allows child classes to access
    function Shape(color) {
        this.color = color;
    }
    return Shape;
}());
// circle,rectangle
// calculateArea();
// displayArea();
// both class are common then make it abstacrt for all classes 
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(color, radius) {
        var _this = _super.call(this, color) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.calculateArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    Circle.prototype.displayArea = function () {
        console.log("Circle Area: ".concat(this.calculateArea()));
    };
    return Circle;
}(Shape));
// sqaure and rectangle
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(color, _side) {
        var _this = _super.call(this, color) || this;
        _this._side = _side;
        return _this;
    }
    Object.defineProperty(Square.prototype, "side", {
        // getter
        get: function () {
            return this._side;
        },
        // setter
        set: function (value) {
            if (value > 0) {
                this._side = value;
            }
            else {
                console.log("Side must be positive");
            }
        },
        enumerable: false,
        configurable: true
    });
    Square.prototype.calculateArea = function () {
        return this._side * this._side;
    };
    Square.prototype.displayArea = function () {
        console.log("Square Area: ".concat(this.calculateArea()));
    };
    return Square;
}(Shape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(color, width, height) {
        var _this = _super.call(this, color) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.calculateArea = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.displayArea = function () {
        console.log("Rectangle Area: ".concat(this.calculateArea()));
    };
    return Rectangle;
}(Shape));
// 8️⃣ Static Utility (Optional like teacher said)
var ShapeUtils = /** @class */ (function () {
    function ShapeUtils() {
    }
    ShapeUtils.printShape = function (shape) {
        shape.displayArea();
    };
    return ShapeUtils;
}());
var circle = new Circle("red", 5);
circle.displayArea();
var square = new Square("blue", 4);
square.displayArea();
square.side = 10; // setter
console.log(square.side); // getter
var rectangle = new Rectangle("green", 4, 6);
rectangle.displayArea();
ShapeUtils.printShape(circle);

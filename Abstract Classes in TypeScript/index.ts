
// it is interface for object 
// interface PerObj {
//   name: string;
//   age: number;
// }

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

abstract class Shape {

  // protected allows child classes to access
  constructor(protected color: string) {}

  // abstract methods must be implemented by child classes
  abstract calculateArea(): number;
  abstract displayArea(): void;

}

// circle,rectangle
// calculateArea();
// displayArea();
// both class are common then make it abstacrt for all classes 

class Circle extends Shape {

  constructor(
    color: string,
    private radius: number
  ){
    super(color);
  }

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }

  displayArea(): void {
    console.log(`Circle Area: ${this.calculateArea()}`);
  }

}


// sqaure and rectangle
class Square extends Shape {

  constructor(
    color: string,
    private _side: number
  ){
    super(color);
  }

  // getter
  get side(): number {
    return this._side;
  }

  // setter
  set side(value:number){
    if(value > 0){
      this._side = value;
    } else {
      console.log("Side must be positive");
    }
  }

  calculateArea(): number {
    return this._side * this._side;
  }

  displayArea(): void {
    console.log(`Square Area: ${this.calculateArea()}`);
  }

}


class Rectangle extends Shape {

  constructor(
    color:string,
    private width:number,
    private height:number
  ){
    super(color);
  }

  calculateArea(): number {
    return this.width * this.height;
  }

  displayArea(): void {
    console.log(`Rectangle Area: ${this.calculateArea()}`);
  }

}


// 8️⃣ Static Utility (Optional like teacher said)
class ShapeUtils {

  static printShape(shape: Shape){
    shape.displayArea();
  }

}


const circle = new Circle("red",5);
circle.displayArea();

const square = new Square("blue",4);
square.displayArea();

square.side = 10; // setter
console.log(square.side); // getter

const rectangle = new Rectangle("green",4,6);
rectangle.displayArea();

ShapeUtils.printShape(circle);



// 1️⃣ Abstract Class (Interview Definition)
// Abstract class is a special class that cannot be instantiated directly and is used as a base class for other classes.
// It can contain:
// Abstract methods (methods without implementation)
// Concrete methods (methods with implementation)
// Properties
// Constructors
// Child classes must implement all abstract methods.

// 2️⃣ Interface (Interview Definition)
// An interface is used to define the structure of an object or class.
// It only contains:
// Property declarations
// Method signatures
// It does not contain implementation.
// Classes implement interfaces.

/*
interface Printable {
  print(): void;
}

abstract class Shape {

  constructor(protected color: string) {}

  abstract area(): number;
}

class Circle extends Shape implements Printable {

  constructor(color: string, private radius: number) {
    super(color);
  }

  area(): number {
    return Math.PI * this.radius * this.radius;
  }

  print(): void {
    console.log(`Circle area: ${this.area()}`);
  }
}
*/
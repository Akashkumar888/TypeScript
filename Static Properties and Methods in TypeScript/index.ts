

class MathOperations{
  public static PI:number=Math.PI;
  public static add(num1:number,num2:number){
    return num1+num2;
  }
  public static subs(num1:number,num2:number){
    return num1-num2;
  }
  public static division(num1:number,num2:number){
    return num1/num2;
  }
  public static multiply(num1:number,num2:number){
    return num1*num2;
  }
  public static modulo(num1:number,num2:number){
    return num1%num2;
  }
}



console.log(MathOperations.PI);

console.log(MathOperations.add(4,6));
console.log(MathOperations.subs(10,6));
console.log(MathOperations.division(10,6));
console.log(MathOperations.multiply(10,6));
console.log(MathOperations.modulo(10,6));

// 🧠 1️⃣ What is static in TypeScript?
// In a class, normally properties and methods belong to an object (instance).
// Example:

// class Person {
//   name: string = "Akash";
// }
// You must create an object:
// const p1 = new Person();
// console.log(p1.name);

// But sometimes we want data that belongs to the class itself, not to objects.
// That is where static is used.
// 🔥 Definition

// Static members belong to the class itself, not to objects.
// So they are accessed using:

// ClassName.property
// ClassName.method()
// instead of
// object.property
// object.method()
// 📊 Normal vs Static
// Feature	Normal	Static
// Belongs to	Object	Class
// Need instance	Yes	No
// Access using	obj.method()	Class.method()

// 🧠 Why Static is Used
// Static is used for utility functions.
// Example:
// Math calculations
// Config values
// Helper functions
// Database connection pools
// Logger utilities
// Example in JavaScript:

// Math.PI
// Math.random()
// Math.floor()

// These are static methods of the Math object.
// 🏆 Real-Life Example
// Bank Utility
// class BankUtils {
//   static bankName = "State Bank of India";
//   static calculateInterest(amount:number, rate:number) {
//     return (amount * rate) / 100;
//   }

// }
// Use:
// console.log(BankUtils.bankName);
// console.log(BankUtils.calculateInterest(10000,5));
// No object needed.
// 🧠 Important Rule
// ❌ Static methods cannot access non-static properties directly.
// Example:
// class Test {
//   name:string="Akash";

//   static print(){
//      console.log(this.name); ❌ ERROR
//   }
// }
// Because static belongs to class, not object.
// 🔥 Static with Inheritance
// Static members are inherited by child classes.
// Let's see example.
// 🚀 Parent Class

// class Vehicle {
//   static category = "Transport";
//   static startEngine() {
//     console.log("Vehicle engine started");
//   }

// }
// 🚀 Child Class
// class Car extends Vehicle {
//   static brand = "BMW";
//   static showDetails() {
//     console.log("Category:", this.category);
//     console.log("Brand:", this.brand);
//   }
// }
// ✅ Using Static with Inheritance
// console.log(Vehicle.category);
// Vehicle.startEngine();
// console.log(Car.category);   // inherited
// console.log(Car.brand);

// Car.showDetails();
// 📊 Output
// Transport
// Vehicle engine started
// Transport
// BMW
// Category: Transport
// Brand: BMW
// 🧠 Important Interview Concept
// Static members are shared by all objects.
// Example:

// class Counter {
//   static count = 0;
//   constructor() {
//     Counter.count++;
//   }
// }
// Use:

// new Counter();
// new Counter();
// new Counter();
// console.log(Counter.count);
// Output:
// 3
// Because static variable is shared across instances.

// 🏆 Industry Example
// Logger System
// class Logger {
//   static log(message:string) {
//     console.log(`[LOG]: ${message}`);
//   }
//   static error(message:string) {
//     console.error(`[ERROR]: ${message}`);
//   }
// }

// Use:
// Logger.log("Server started");
// Logger.error("Database failed");
// ⚠️ Important Static Rules
// Rule 1
// Static belongs to class, not object.
// Rule 2
// Access using:

// ClassName.method()
// Rule 3
// Static can call static only.

// Rule 4
// Static is inherited by child classes.

// 🎯 Interview Definition
// If interviewer asks:
// What is static in TypeScript?
// Answer:

// Static members belong to the class itself instead of instances. They can be accessed using the class name without creating an object. Static methods are commonly used for utility functions or shared data across instances.

// 💎 Industry Tip
// Utility classes are usually only static.
// Example:
// Math
// Date
// Number
// String

// In many frameworks:
// AuthService.login()
// Logger.error()
// Config.get()
// 🧠 One Advanced Interview Question
// ❓ Can static methods be overridden?

// Answer:
// Yes, child class can override static methods.
// Example:

// class Parent {
//   static greet() {
//     console.log("Hello from Parent");
//   }
// }

// class Child extends Parent {
//   static greet() {
//     console.log("Hello from Child");
//   }
// }

// Child.greet();
// Output:

// Hello from Child
// 🏁 Final Summary
// Concept	Meaning
// static property	belongs to class
// static method	callable without object
// accessed by	ClassName.method()
// inheritance	static members inherited
// use case	utility functions

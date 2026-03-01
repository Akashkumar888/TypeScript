"use strict";
// ✅ 1️⃣ C++ Default Access Modifier
// It depends on class or struct
// 🔹 In C++
// class Person {
//     int age;   // ❌ private by default
// };
// ✔ In class → default = private
// struct Person {
//     int age;   // ✅ public by default
// };
// ✔ In struct → default = public
// So your statement:
// “By default data members and methods in C++ are private”
// ✔ Correct only for class
// ❌ Not correct for struct
// ✅ 2️⃣ Java Default Access Modifier
// In Java:
// class Person {
//     int age;
// }
// This is NOT private.
// Java default = package-private (also called default access)
// Meaning:
// Accessible within same package
// Not accessible outside package
// So:
// ❌ Not private
// ❌ Not public
// ✔ Package-private
// If you want private:
// private int age;
// ✅ 3️⃣ JavaScript Default Access
// In JavaScript (ES6 classes):
// class Person {
//   name = "Vinod";
// }
// ✔ Everything is public by default
// Private only if you use:
// class Person {
//   #age = 10;  // private
// }
// (Using #)
// ✅ 4️⃣ TypeScript Default Access
// In TypeScript:
// class Person {
//   name: string;   // public by default
// }
// ✔ Default = public
// You must explicitly write:
// private name: string;
// protected age: number;
// public hobbies: string[];
// 📌 Final Comparison Table
// Language	Default Access Modifier
// C++ (class)	private
// C++ (struct)	public
// Java	package-private
// JavaScript	public
// TypeScript	public
// 🧠 First Understand Clearly
// 🔹 public
// Accessible everywhere
// 🔹 private
// Accessible only inside same class
// 🔹 protected
// Accessible inside class + child class
// ✅ Industry Level Example
// 🔹 Parent Class → Vehicle
class Vehicle {
    // public → accessible everywhere
    brand;
    // protected → accessible in child class
    year;
    // private → accessible only inside Vehicle
    engineNumber;
    constructor(brand, year, engineNumber) {
        this.brand = brand;
        this.year = year;
        this.engineNumber = engineNumber;
    }
    // public method
    start() {
        return `${this.brand} vehicle is starting...`;
    }
    // protected method
    getVehicleAge(currentYear) {
        return currentYear - this.year;
    }
    // private method
    getEngineInfo() {
        return `Engine No: ${this.engineNumber}`;
    }
    // public method accessing private method internally
    vehicleDetails() {
        return `${this.brand} (${this.year}) - ${this.getEngineInfo()}`;
    }
}
// 🔹 Child Class → Car
class Car extends Vehicle {
    model;
    constructor(brand, year, engineNumber, model) {
        super(brand, year, engineNumber);
        this.model = model;
    }
    // Method overriding
    start() {
        return `Car ${this.model} is starting with push button 🚗`;
    }
    carAge(currentYear) {
        // Can access protected method
        const age = this.getVehicleAge(currentYear);
        return `Car age is ${age} years`;
    }
}
// ✅ Usage
const myCar = new Car("Toyota", 2020, "ENG12345", "Fortuner");
console.log(myCar.brand); // ✅ public
console.log(myCar.start()); // ✅ overridden method
console.log(myCar.vehicleDetails()); // ✅ public method
console.log(myCar.carAge(2025)); // ✅ protected method used internally
// ❌ Not Allowed
// console.log(myCar.engineNumber);      // Error (private)
// console.log(myCar.getVehicleAge(2025)); // Error (protected)
// 🔥 Bonus: If You Want Professional Setup
// Install:
// npm init -y
// npm install typescript --save-dev
// Add script in package.json:
// "scripts": {
//   "build": "tsc",
//   "dev": "tsc -w"
// }
// Then run:
// npm run dev
// 🧠 What Just Happened?
// ✔ Encapsulation
// Engine number is hidden (private)
// ✔ Inheritance
// Car extends Vehicle
// ✔ Protected usage
// Child class used getVehicleAge()
// ✔ Private usage
// Only Vehicle can access engineNumber
// ✔ Method Overriding
// Car overrides start()
// 🔥 Output Example
// Toyota
// Car Fortuner is starting with push button 🚗
// Toyota (2020) - Engine No: ENG12345
// Car age is 5 years
// 🎯 Interview Important Concept
// If interviewer asks:
// Why use protected instead of private?
// Answer:
// 👉 private → completely hidden from child
// 👉 protected → child class can reuse logic
// 🏆 Industry Cleaner Version (Constructor Shortcut)
// class Vehicle {
//   constructor(
//     public brand: string,
//     protected year: number,
//     private engineNumber: string
//   ) {}
//   start() {
//     return `${this.brand} starting...`;
//   }
//   protected getAge(currentYear: number) {
//     return currentYear - this.year;
//   }
// }
// class Car extends Vehicle {
//   constructor(
//     brand: string,
//     year: number,
//     engineNumber: string,
//     public model: string
//   ) {
//     super(brand, year, engineNumber);
//   }
//   override start() {
//     return `Car ${this.model} starting 🚗`;
//   }
// }
// ✔ Short
// ✔ Clean
// ✔ Professional

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
class Persons {
    name;
    age;
    hobbies;
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    introduce() {
        return `Hi, I am ${this.name}`;
    }
}
class Students extends Persons {
    grade;
    constructor(name, age, hobbies, grade) {
        super(name, age, hobbies);
        this.grade = grade;
    }
    introduce() {
        return `${super.introduce()} and my grade is ${this.grade}`;
    }
}
const student1 = new Students("Bahadur", 16, ["coding", "sports"], 98);
console.log(student1.name); // ✅ public
console.log(student1.grade); // ✅ public
// console.log(student1.age);     // ❌ protected
// console.log(student1.hobbies); // ❌ private
console.log(student1.introduce());
/*
🔥 Shorthand / Parameter Properties (Industry Way)
class Persons {

  constructor(
    public name: string,
    public age: number,
    private hobbies: string[]
  ) {}

  introduce(): string {
    return `Hi, I am ${this.name} and I love ${this.hobbies.join(", ")}`;
  }
}
✅ What Happened Here?

When you write:

constructor(public name: string)

TypeScript automatically:

Creates the property

Assigns it

Makes it accessible based on modifier

So this:

public name: string;
constructor(name: string) {
  this.name = name;
}

Becomes:

constructor(public name: string) {}

🔥 Cleaner
🔥 Shorter
🔥 Industry Standard
*/
// 🔥 Ultra Clean Industry Version
// export class Person {
//   constructor(
//     public name: string,
//     protected age: number,
//     private hobbies: string[]
//   ) {}
//   introduce(): string {
//     return `Hi, I am ${this.name}`;
//   }
// }
// export class Student extends Person {
//   constructor(
//     name: string,
//     age: number,
//     hobbies: string[],
//     public grade: number
//   ) {
//     super(name, age, hobbies);
//   }
//   override introduce(): string {
//     return `${super.introduce()} and my grade is ${this.grade}`;
//   }
// }
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

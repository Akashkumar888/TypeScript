

// camelCase not follow for creating class name
// PascalCase follow

// class Persons{
//  name:string="vinod";
//  age:number=12;
//  hobbies:string[]=["reading","painting"];
// }

// // instance of a class

// const person1:Persons= new Persons();

// console.log(person1);
// console.log(person1.hobbies);

// second method 

// Parent / base / main class
class Persons{
 name:string;
 age:number;
 hobbies:string[];


//  constructor(){}  which one use same name as class not use in js or constructor keyword use in js

 // constructor 
 constructor(name:string,age:number,hobbies:string[]){
  this.name=name;
  this.age=age;
  this.hobbies=hobbies;
 }

 // function called methods inside a class
 introduce():string{
  return `Hi, I am ${this.name} and I'm ${this.age} years old. I love ${this.hobbies.join(', ')}.`;
 }

}


// derived /child class / subclass
class Students extends Persons{
  grade:number;

  constructor(name:string,age:number,hobbies:string[],grade:number){
    super(name,age,hobbies);
    this.grade=grade;
    // super() → Calls parent constructor
// super.methodName() → Calls parent method
  }
}



// instance of a class

const person1:Persons= new Persons("vinod",12,["reading","painting"]);

console.log(person1);
console.log(person1.hobbies);
console.log(person1.introduce());

const person2:Persons= new Persons("kumar",14,["dancing","singing"]);

console.log(person2);
console.log(person2.hobbies);
console.log(person2.introduce());

const students1: Students = new Students(
  "bahadur",
  16,
  ["coding","sports"],
  98
);

console.log(students1);
console.log(students1.hobbies);
console.log(students1.introduce());
console.log(students1.grade); // ✅ Works








// 🧠 1️⃣ OOP Concepts in TypeScript (In Simple Words)
// 🔹 1. Encapsulation
// Wrapping data + methods together inside a class
// Protecting internal data using private

// class BankAccount {
//   private balance: number;

//   constructor(initialBalance: number) {
//     this.balance = initialBalance;
//   }

//   deposit(amount: number) {
//     this.balance += amount;
//   }

//   getBalance(): number {
//     return this.balance;
//   }
// }

// 🔒 balance cannot be accessed directly.
// 🔹 2. Access Modifiers
// Modifier	Accessible Where?
// public	Everywhere
// private	Only inside same class
// protected	Inside class + child class
// Example
// class Person {
//   public name: string;
//   protected age: number;
//   private salary: number;

//   constructor(name: string, age: number, salary: number) {
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
//   }
// }

// 🧬 3️⃣ Inheritance
// One class reuses another class functionality

// class Persons {
//   constructor(
//     public name: string,
//     protected age: number,
//     public hobbies: string[]
//   ) {}

//   introduce(): string {
//     return `Hi, I am ${this.name} and I'm ${this.age} years old.`;
//   }
// }

// 👨‍🎓 Child Class (Inheritance + super)
// class Students extends Persons {
//   constructor(
//     name: string,
//     age: number,
//     hobbies: string[],
//     public grade: number
//   ) {
//     super(name, age, hobbies); // 🔥 super calls parent constructor
//   }

//   // 🔥 Method Overriding
//   introduce(): string {
//     return `${super.introduce()} My grade is ${this.grade}.`;
//   }
// }
// 🧠 What is super?
// super() → Calls parent constructor
// super.methodName() → Calls parent method

// 🔁 4️⃣ Polymorphism
// Same method name, different behavior
// const student1: Persons = new Students(
//   "Bahadur",
//   16,
//   ["coding", "sports"],
//   98
// );

// console.log(student1.introduce()); 
// Even though type is Persons,
// actual object is Students → child method runs.

// 🔥 That is runtime polymorphism.
// 🔄 5️⃣ Method Overriding
// Parent:
// introduce(): string {
//   return `Hi, I am ${this.name}`;
// }

// Child:
// introduce(): string {
//   return `Student: ${this.name}`;
// }
// Same method name → different implementation.

// 🔁 6️⃣ Method Overloading (TypeScript Way)
// TS supports overload signatures:

// class Calculator {
//   add(a: number, b: number): number;
//   add(a: string, b: string): string;
//   add(a: any, b: any): any {
//     return a + b;
//   }
// }
// const calc = new Calculator();

// calc.add(2, 3);         // number
// calc.add("Hi ", "Akash"); // string
// 🧱 7️⃣ Abstraction (Abstract Class)
// Hide implementation details
// abstract class Animal {
//   constructor(public name: string) {}
//   abstract makeSound(): void;

//   move(): void {
//     console.log("Moving...");
//   }
// }

// class Dog extends Animal {
//   makeSound(): void {
//     console.log("Bark 🐶");
//   }
// }
// Cannot create:
// new Animal("Lion"); ❌
// 🏗 8️⃣ Industry Level Setup
// 📂 Folder Structure
// src/
//  ├── models/
//  │     ├── Person.ts
//  │     └── Student.ts
//  ├── index.ts
// dist/
// tsconfig.json
// index.html
// 📁 models/Person.ts

// export class Person {
//   constructor(
//     public name: string,
//     protected age: number,
//     public hobbies: string[]
//   ) {}

//   introduce(): string {
//     return `Hi, I am ${this.name} and I'm ${this.age} years old.`;
//   }
// }
// 📁 models/Student.ts
// import { Person } from "./Person.js";
// export class Student extends Person {
//   constructor(
//     name: string,
//     age: number,
//     hobbies: string[],
//     public grade: number
//   ) {
//     super(name, age, hobbies);
//   }

//   introduce(): string {
//     return `${super.introduce()} My grade is ${this.grade}.`;
//   }
// }
// 📁 index.ts
// import { Person } from "./models/Person.js";
// import { Student } from "./models/Student.js";

// const person1 = new Person("Vinod", 12, ["reading", "painting"]);
// const student1 = new Student("Bahadur", 16, ["coding"], 98);

// console.log(person1.introduce());
// console.log(student1.introduce());
// 🧩 Why type="module" in HTML?

// Because:

// <script type="module" src="./dist/index.js"></script>
// What is this?

// ✅ Allows import / export
// ✅ Each file becomes module scoped
// ✅ Cleaner architecture
// ✅ Industry standard

// 🧠 Why we don't need defer with module?
// Because:
// 👉 type="module" automatically works like defer.
// So this is enough:

// <script type="module" src="./dist/index.js"></script>
// What is this?
// 🏆 Industry Rules (Very Important)
// ✅ 1. Always use PascalCase for class names
// Person, Student
// ✅ 2. Use constructor parameter properties
// Cleaner:

// constructor(
//   public name: string,
//   public age: number
// ) {}
// ✅ 3. Always use strict mode in tsconfig
// "strict": true
// ✅ 4. Never use any in real projects
// ✅ 5. Use private for sensitive data
// ✅ 6. Use abstract when class should not be instantiated
// ✅ 7. Always separate models into different files

// 🔥 Final Clean Industry Version (Compact)
// export class Person {
//   constructor(
//     public name: string,
//     protected age: number,
//     public hobbies: string[]
//   ) {}

//   introduce(): string {
//     return `Hi, I am ${this.name}.`;
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
//     return `${super.introduce()} My grade is ${this.grade}.`;
//   }
// }
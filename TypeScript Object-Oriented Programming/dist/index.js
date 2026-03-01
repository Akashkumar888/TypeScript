"use strict";
// camelcase not follow for creating class name
// Pascal Case follow
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
class Persons {
    name;
    age;
    hobbies;
    //  constructor(){}  which one use same name as class not use in js or constructor keyword use in js
    // constructor 
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
}
// instance of a class
const person1 = new Persons("vinod", 12, ["reading", "painting"]);
console.log(person1);
console.log(person1.hobbies);
const person2 = new Persons("kumar", 14, ["dancing", "singing"]);
console.log(person2);
console.log(person2.hobbies);
// ✅ 5️⃣ Industry Way to Write Class
// Instead of writing manually:
// class Persons {
//   name: string;
//   age: number;
//   hobbies: string[];
//   constructor(name: string, age: number, hobbies: string[]) {
//     this.name = name;
//     this.age = age;
//     this.hobbies = hobbies;
//   }
// }
// 🔥 Industry cleaner version:
// export class Person {
//   constructor(
//     public name: string,
//     public age: number,
//     public hobbies: string[]
//   ) {}
// }
// ✔ Cleaner
// ✔ Shorter
// ✔ More professional
// ✅ 6️⃣ Industry index.ts
// import { Person } from "./models/Person.js";
// const person1 = new Person("Vinod", 12, ["reading", "painting"]);
// const person2 = new Person("Kumar", 14, ["dancing", "singing"]);
// console.log(person1);
// console.log(person2);

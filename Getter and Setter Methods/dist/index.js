"use strict";
// ************************************************************
// 🔐 GETTER & SETTER IN TYPESCRIPT
// ************************************************************
// In TypeScript classes:
// ✔ Getter (get)
// - Used to READ a private property
// - Takes NO parameter
// - Must return ONE value
// ✔ Setter (set)
// - Used to UPDATE a private property
// - Takes ONLY ONE parameter
// - Does NOT return anything
// Why use getter & setter?
// 👉 To control access to private properties
// 👉 To add validation logic
// 👉 To protect data (Encapsulation)
// 🔐 What is Getter?
// 👉 A getter is a special method used to read a private property.
// Important Rules:
// ✔ Takes NO parameters
// ✔ Must return ONLY ONE value
// ✔ Used to expose controlled access to private data
// 🔐 What is Setter?
// 👉 A setter is a special method used to update a private property.
// Important Rules:
// ✔ Takes ONLY ONE parameter
// ✔ Does NOT return anything
// ✔ Used for validation before updating data
// Why only one parameter?
// Because setter is designed to update one property at a time.
// ✅ Q1: Bank Account Balance
// ✔ Requirements from your photo:
// private property _balance
// getter → return balance
// setter → update balance only if value >= 0
// if negative → show error
// ************************************************************
// 🏦 Q1: Bank Account with Getter & Setter
// ************************************************************
class BankAccount {
    // 🔒 Private property (Encapsulation)
    // Cannot be accessed directly outside class
    _balance = 0;
    constructor(initialBalance) {
        if (initialBalance >= 0) {
            this._balance = initialBalance;
        }
        else {
            console.log("Initial balance can not be negative.");
        }
    }
    // ************************************************
    // ✅ GETTER
    // - No parameter
    // - Returns ONE value
    // ************************************************
    get balance() {
        return this._balance;
    }
    // ************************************************
    // ✅ SETTER
    // - Takes ONLY ONE parameter
    // - Updates balance
    // - Adds validation
    // ************************************************
    set balance(newBalance) {
        if (newBalance >= 0) {
            this._balance = newBalance;
        }
        else {
            console.log("❌ Balance cannot be negative.");
        }
    }
}
// ************************************************
// 🧪 Testing BankAccount
// ************************************************
const account1 = new BankAccount(1000);
console.log("Initial Balance:", account1.balance); // getter called
account1.balance = 2000; // setter called
console.log("Updated Balance:", account1.balance);
account1.balance = -500; // ❌ Invalid
console.log("After Invalid Update:", account1.balance);
// ✅ Q2: Temperature Converter
// ✔ Requirements:
// private _celsius
// getter → return Celsius
// setter → set Celsius
// getter → Fahrenheit conversion
// setter → set Fahrenheit → convert to Celsius
// ************************************************************
// 🌡 Q2: Temperature Converter
// ************************************************************
class Temperature {
    // 🔒 Private property
    _celsius = 0;
    constructor(initialCelsius) {
        this._celsius = initialCelsius;
    }
    // ************************************************
    // ✅ GET Celsius
    // Returns temperature in Celsius
    // ************************************************
    get celsius() {
        return this._celsius;
    }
    // ************************************************
    // ✅ SET Celsius
    // Takes ONLY one parameter
    // ************************************************
    set celsius(value) {
        this._celsius = value;
    }
    // ************************************************
    // ✅ GET Fahrenheit
    // Converts Celsius to Fahrenheit
    // Formula: (C * 9/5) + 32
    // ************************************************
    get fahrenheit() {
        return (this._celsius * 9) / 5 + 32;
    }
    // ************************************************
    // ✅ SET Fahrenheit
    // Converts Fahrenheit to Celsius
    // Formula: (F - 32) * 5/9
    // ************************************************
    set fahrenheit(value) {
        this._celsius = ((value - 32) * 5) / 9;
    }
}
// ************************************************
// 🧪 Testing Temperature
// ************************************************
const temp = new Temperature(25);
console.log("Celsius:", temp.celsius);
console.log("Fahrenheit:", temp.fahrenheit);
temp.fahrenheit = 98.6;
console.log("Updated Celsius:", temp.celsius);
console.log("Updated Fahrenheit:", temp.fahrenheit);
// 🧠 Important Interview Points
// ✔ Getter must return one value
// ✔ Setter must take only one parameter
// ✔ Setter does not return value
// ✔ Used for encapsulation
// ✔ Protects private data
// Encapsulation means:
// Binding data and methods together inside a class and restricting direct access using private modifier.
// Getter and Setter help achieve encapsulation.
// 💎 Final Important Line (Interview Gold)
// Getter improves readability because it allows property-like access.
// Setter ensures controlled modification of internal state.

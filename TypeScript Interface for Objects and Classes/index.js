var greet = {
    name: 'Akash',
    age: 29
};
console.log(greet);
var introduce = function (person) {
    return "My name is ".concat(person.name, " and I am ").concat(person.age, " years old");
};
console.log(introduce(greet));
var user = {
    name: "Akash",
    age: 23,
    greet: function () {
        return "Hello, I am ".concat(this.name);
    }
};
console.log(user.greet());
var user1 = {
    name: "Akash"
};
var userData = {
    id: 1,
    name: "Akash",
    email: "akash@gmail.com"
};
// -----------------------------
// 2️⃣ Product Objects
// -----------------------------
var product1 = {
    id: 1,
    name: "Laptop",
    price: 1000,
    quantity: 5
};
var product2 = {
    id: 2,
    name: "Mobile",
    price: 500,
    quantity: 3,
    discount: 10 // 10% discount
};
// -----------------------------
// 3️⃣ Calculate Total Price Function
// -----------------------------
var calculateTotalPrice = function (product) {
    var total = product.price * product.quantity;
    if (product.discount) {
        return total - (total * product.discount) / 100;
    }
    return total;
};
// -----------------------------
// 4️⃣ Output
// -----------------------------
console.log("Product 1 Total:", calculateTotalPrice(product1));
console.log("Product 2 Total:", calculateTotalPrice(product2));
// -----------------------------
// 6️⃣ Digital Product Object
// -----------------------------
var ebook = {
    id: 3,
    name: "TypeScript Guide",
    price: 200,
    quantity: 1,
    fileSize: "5MB",
    format: "PDF"
};
console.log("Digital Product Total:", calculateTotalPrice(ebook));

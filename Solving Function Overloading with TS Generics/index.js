// 🔷 1️⃣ Normal Function Overloading (Without Generics)
// function add(a: number, b: number): number;
// function add(a: string, b: string): string;
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// function add(a: any, b: any): any {
//   return a + b;
// }
// const r1 = add(5, 10);           // number
// const r2 = add("Hello ", "TS");  // string
function add(a, b) {
    console.log(typeof a, a);
    console.log(typeof b, b);
}
var result1 = add(5, "Akash");
var result2 = add("Hello", 10);
var result3 = add(true, 50);
function format(value) {
    if (typeof value === "number") {
        return "$".concat(value.toFixed(2));
    }
    if (value instanceof Date) {
        return value.toDateString();
    }
    return "";
}
var p1 = format(100); // "$100.00"
var p2 = format(new Date()); // date string
function identity(value) {
    return value;
}
var single = identity(10); // number
var arr = identity([1, 2, 3]); // number[]
// ✅ No need of overload here
function fetchData(url) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(url)];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("HTTP Error: ".concat(response.status));
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
// ✅ Use FULL URL (Node.js requires absolute URL)
var userData = fetchData("https://jsonplaceholder.typicode.com/users/1");
var productData = fetchData("https://fakestoreapi.com/products/1");
// Handle results
userData.then(function (user) {
    console.log("User Name:", user.name);
});
productData.then(function (product) {
    console.log("Product Title:", product.title);
});
function getLength(value) {
    return value.length;
}
var len1 = getLength("Akash"); // 5
var len2 = getLength([1, 2, 3]); // 3
// 🔥 Important Interview Question
// ❓ When should we use Overloading?
// Use when:
// Different parameter types
// Different return types
// Different internal logic
// Example:
// number → format currency
// date → format date
// ❓ When should we use Generics?
// Use when:
// Same logic
// Only type changes
// Want reusable code
// Example:
// identity function
// API response
// Reusable components

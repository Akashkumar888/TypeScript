
// What are Namespaces?
// Namespaces group related functions/variables into one block.

namespace Utils {
  export function add(a: number, b: number) {
    return a + b;
  }
}

console.log(Utils.add(2, 3));

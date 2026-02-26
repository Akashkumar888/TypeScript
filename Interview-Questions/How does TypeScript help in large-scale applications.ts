
// How does TypeScript help in large-scale applications? (Full Interview Answer)
// 1️⃣ Type Safety
// Eliminates bugs early during compile time.

// 2️⃣ Predictable Code
// Makes large teams work without breaking other modules.

// 3️⃣ Better Tooling
// IntelliSense
// Autocomplete
// Jump-to-definition
// Safe refactoring

// 4️⃣ Easier Refactoring
// If you rename a property, TS shows errors everywhere.
// interface Product { id: number; name: string; }

function print(p: Product) {
  console.log(p.name);
}

// If someone renames name → productName, TypeScript catches it.

// 5️⃣ Modular Architecture
// Interfaces, classes, modules make big applications maintainable.

// 6️⃣ Better Collaboration
// Everyone on the team knows the shapes of objects and expected types.
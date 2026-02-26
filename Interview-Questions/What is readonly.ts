
// What is readonly?
// Prevents property modification.

interface User { readonly id: number; }

let u: User = { id: 1 };
// u.id = 2 ❌
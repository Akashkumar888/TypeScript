
// What is Declaration Merging?
// TypeScript automatically merges declarations of the same name.

interface User { id: number; }
interface User { name: string; }

const u: User = { id: 1, name: "Akash" };

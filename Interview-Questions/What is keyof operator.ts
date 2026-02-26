
// What is keyof operator?

// Extracts property names as a union of strings.

type User = { id: number; name: string };
type Keys = keyof User; // "id" | "name"
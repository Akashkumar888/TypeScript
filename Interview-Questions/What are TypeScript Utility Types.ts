
// What are TypeScript Utility Types? (Very Important for Interviews)
// Built-in types used for rapid type transformations.
// ✔ Partial<T>
// Makes all properties optional.

interface User { id: number; name: string; }
type PartialUser = Partial<User>;

// ✔ Pick<T, Keys>
// Select specific keys.
type OnlyName = Pick<User, "name">;

// ✔ Omit<T, Keys>

// Remove keys.
// type WithoutAge = Omit<User, "age">;

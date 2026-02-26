
// What is Conditional Typing?
type IsString<T> = T extends string ? true : false;
type R = IsString<"abc">; // true


// Used for advanced type transformations.

// What are Enums? (Detailed)
// Enums allow you to create named constants for better readability.

// ✔ Numeric enum:
enum Role {
  Admin,    // 0
  User      // 1
}

let r: Role = Role.Admin;

// ✔ String enum:
enum Status {
  Success = "SUCCESS",
  Failure = "FAILURE"
}

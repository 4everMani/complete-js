// Assignment operator
let x = 11;
let y = 44;

// Arithmatic Operator
// +, - , * , / , %(Remainder)
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);

// Comparision operator
let number1 = 230;
let number2 = 377;

console.log(number1 > number2);
console.log(number1 < number2);
console.log(number1 >= number2);
console.log(number1 <= number2);

// Equality operator
// == and ===

// 1) == (Equality Operator):
// The == operator is the equality operator, which is used to compare values for equality after performing type coercion. Type coercion is the process of converting one data type to another in order to perform a comparison. When using ==, JavaScript will attempt to convert the operands to the same type before making the comparison.

5 == "5"   // true, because the string "5" is coerced to the number 5
true == 1  // true, because the boolean true is coerced to the number 1


// 2) === (Strict Equality Operator):
// The === operator is the strict equality operator, which compares both the values and the data types of the operands. It does not perform type coercion, so if the operands are of different types, the result will be false.

5 === "5"  // false, because the value is the same, but the types are different
true === 1 // false, because they are of different types

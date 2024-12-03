/**
 * Debug
 */
let age: number = 26;

if (age < 50) age += 10;
console.log(age);

/**
 * Any
 */
let sales: number = 123_456_789;
let course = "TypeScript";
let is_published = true;

let level;

function test(document) {
  console.log(document);
}

/**
 * Array
 */
let num01 = [1, 2, "3"]; // valid code
let numbers: number[] = [1, 2, "3"]; // now throw error

let num2: number[] = [];
// num2[0] = 1;
// num2[1] = "1";
num2.forEach((n) => n);

/**
 * Tuples
 */

let user: [number, string, boolean, number] = [1, "Akash", true, 0];

/**
 * Enums
 */

// const small = 1;
// const medium = 2;
// const large = 3;

// PascalCase
// enum Size {
//     Small = 5,
//     Medium,
//     Large,
//   }
// If we use `const`, it generates more optimize code
const enum Size {
  Small = 5,
  Medium,
  Large,
}
let mySize: Size = Size.Large;
console.log(mySize);

/**
 * Functions
 */

function calculateTax(income: number): number {
  return income;
}

// Use ? for optional parameter
function calculateTax1(income: number, deposit?: number): number {
  return income - (deposit || 20_000);
}

/**
 * Objects
 */

let employee: {
  id: number;
  name: string;
} = { id: 1, name: "" };

employee.name = "Akash";

// If we want to prevent changing any property, use `readonly`
let employee1: {
  readonly id: number;
  name: string;
} = { id: 1, name: "" };

employee.name = "Akash";

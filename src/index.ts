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

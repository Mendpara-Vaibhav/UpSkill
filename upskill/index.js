// Recursive Factorial
// function factorial(n) {
//   if (n === 1) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// }
// console.log(factorial(5));

// Fibonacci
// function fibonacci(n) {
//   if (n === 0) {
//     return 0;
//   }
//   if (n === 1) {
//     return 1;
//   }
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }
// console.log(fibonacci(6));

// Sum of first N natural numbers
// function sum(n) {
//   if (n === 1) {
//     return 1;
//   }
//   return n + sum(n - 1);
// }
// console.log(sum(5));

// Print numbers from 1 to N using recursion
// function print1toN(n) {
//   if (n === 0) {
//     return;
//   }
//   print1toN(n - 1);
//   console.log(n);
// }
// print1toN(5);

//Sum of digits of a number
// function sumOfDigits(n) {
//   if (n === 0) {
//     return 0;
//   }
//   return (n % 10) + sumOfDigits(Math.floor(n / 10));
// }
// console.log(sumOfDigits(12345));

// Count digits in a number
// function countDigits(n) {
//   if (n === 0) return 0;
//   return 1 + countDigits(Math.floor(n / 10));
// }
// console.log(countDigits(12345));

// Check if string is a palindrome
// function isPalindrome(str, start = 0, end = str.length - 1) {
//   if (start >= end) return true;
//   if (str[start] !== str[end]) return false;
//   return isPalindrome(str, start + 1, end - 1);
// }
// console.log(isPalindrome("malayalam"));

// Reverse a string using recursion
// function reverseString(str) {
//   if (str.length === 0) return "";
//   return reverseString(str.slice(1)) + str[0];
// }
// console.log(reverseString("hello"));

// Power of a number (a^b)
// function power(a, b) {
//   if (b === 0) return 1;
//   return a * power(a, b - 1);
// }
// console.log(power(2, 3));

/**
 *  *
 *  **
 *  ***
 *  ****
 *  *****
 */

// function leftTriangle(n) {
//   for (let i = 1; i <= n; i++) {
//     let pattern = "";
//     for (let j = 1; j <= i; j++) {
//       pattern += "*";
//     }
//     console.log(pattern);
//   }
// }
// leftTriangle(5);

// function leftTriangleInverted(n) {
//   for (let i = n; i >= 1; i--) {
//     let pattern = "";
//     for (let j = 1; j <= i; j++) {
//       pattern += "*";
//     }
//     console.log(pattern);
//   }
// }
// leftTriangleInverted(5);

// function rightTriangle(n) {
//   for (let i = 1; i <= n; i++) {
//     let pattern = "";
//     for (let j = 1; j <= n - i; j++) {
//       pattern += " ";
//     }
//     for (let k = 1; k <= i; k++) {
//       pattern += "*";
//     }
//     console.log(pattern);
//   }
// }
// rightTriangle(5);

function rightTriangleInverted(n) {
  for (let i = 0; i <= n; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
      pattern += " ";
    }
    for (let k = 1; k <= n - i; k++) {
      pattern += "*";
    }
    console.log(pattern);
  }
}
rightTriangleInverted(5);

// js - problems - part1 - practice - tasks;
// Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.
// function celciusToFahrenheit(cel) {
//   const result = cel * 1.8 + 32;
//   return result;
// }
// console.log(celciusToFahrenheit(10));

// Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.
// sample-input: numbers = [5,6,11,12,98, 5] // find: 5 // output: 2
// sample-input: // numbers = [5,6,11,12,98, 5] // find: 25 // output: 0
// function countElements(numbers, key) {
//   const len = numbers.length;
//   let cnt = 0;
//   for (let i = 0; i < len; i++) if (key === numbers[i]) cnt++;
//   return cnt;
// }
// const numbers = [5, 6, 11, 12, 98, 5];
// console.log(countElements(numbers, 25));

// Task-3:
// Write a function to count the number of vowels in a string.
// function isVowel(ch) {
//   return (
//     ch === "a" ||
//     ch === "e" ||
//     ch === "i" ||
//     ch === "o" ||
//     ch === "u" ||
//     ch === "A" ||
//     ch === "E" ||
//     ch === "I" ||
//     ch === "O" ||
//     ch === "U"
//   );
// }

// function countVowels(str) {
//   const n = str.length;
//   let cnt = 0;
//   for (let i = 0; i < n; i++) if (isVowel(str[i])) cnt++;
//   return cnt;
// }

// console.log(countVowels("a QUICK brown fox jumps over the lazy DOG"));

// Task-4:
// Write a function to find the longest word in a given string.
// sample-input: I am learning Programming to become a programmer
// sample-output: Programming
// function findLongString(str) {
//   let tmp = str.split(" ");
//   let mx = tmp[0].length;
//   let mxValue = tmp[0];
//   for (let i = 0; i < tmp.length; i++) {
//     if (tmp[i].length > mx) {
//       mx = tmp[i].length;
//       mxValue = tmp[i];
//     }
//   }
//   return mxValue;
// }

// const result = findLongString(
//   "I am learning Programming to become a programmer",
// );
// console.log(result);

// Task-5:
// Generate a random number between 10 to 20.
// const rand = Math.round(Math.random() * (20 - 10 + 1) + 10);
// console.log(rand);

// Simple function Related Practice Tasks
// Task-1
// Take four parameters. Multiply the four numbers and then return the result
function multiplyFunction(a, b, c, d) {
  return a * b * c * d;
}
// console.log(multiplyFunction(1, 3, 2, 4));

// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
function evenOdd(number) {
  if (number % 2) return number * 2;
  else return number / 2;
}
// console.log(evenOdd(20));
// console.log(evenOdd(5));

// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
function make_avg(numbers) {
  const len = numbers.length;
  let sum = 0;
  for (const number of numbers) sum += number;
  return sum / len;
}
// console.log(make_avg([6, 3, 4]).toFixed(2));

// Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
function count_zero(str) {
  let cnt = 0;
  for (let i = 0; i < str.length; i++) if (str[i] === "0") cnt++;
  return cnt;
}
// console.log(count_zero("111000"));

// Task-5
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
function odd_even(number) {
  if (number % 2) return "Odd";
  else return "Even";
}
// console.log(odd_even(50));

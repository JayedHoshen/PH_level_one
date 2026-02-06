const numbers = [1, 2, 40, 29, 20];

// using reverse()
console.log(numbers);
// numbers.reverse();
// console.log(numbers);

// using for of and unshift()
const rev_numbers = [];
for (const num of numbers) {
  rev_numbers.unshift(num);
}
// console.log(rev_numbers);

// normal for loop
const reversed_numbers = [];
for (let i = 0; i < numbers.length; i++) {
  const num = numbers[i];
  reversed_numbers.unshift(num);
}
// console.log(reversed_numbers);

// reverse side
const rev_rev_numbers = [];
for (let i = numbers.length - 1; i >= 0; i--) {
  const num = numbers[i];
  rev_rev_numbers.push(num);
}
console.log(rev_rev_numbers);

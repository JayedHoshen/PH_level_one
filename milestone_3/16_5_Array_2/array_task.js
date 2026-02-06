// array-looping-tasks

// Task 1
// Write a JavaScript code to reverse the array colors without using the reverse method.
// Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']
// Output: ['orange', 'yellow', 'green', 'blue', 'red']
// const colors = ["red", "blue", "green", "yellow", "orange"];
// const rev_colors = [];
// for (const i of colors) {
//   rev_colors.unshift(i);
// }
// // colors.reverse();
// console.log(colors);
// console.log(rev_colors);

// Task 2
// Write a JavaScript code to get the even numbers from an array using any looping technique.
// Input: const numbers = [12, 98, 5, 41, 23, 78, 46];
// Output: [12, 98, 76, 46]
// const numbers = [12, 98, 5, 41, 23, 78, 46];
// const result = [];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 == 0) result.push(numbers[i]);
// }
// console.log(result);

// Task 3
// Use a for...of loop to concatenate all the elements of an array into a single string.
// Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']
// Output: 'TomTimTinTik'
// let numbers = ["Tom", "Tim", "Tin", "Tik"];
// let result = "";
// for (const i of numbers) {
//   result += i;
// }
// console.log(result);

// Task 4 (Hard)
// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output
// Input: const statement = 'I am a hard working person'
// Output: 'person working hard a am I'
// const statement = "I am a hard working person";
// const outputStatement = statement.split(" ");
// console.log(outputStatement);
// outputStatement.reverse();
// console.log(outputStatement);

// Task 5
// Copy the given array into another array so that changing the copy does not affect the original.Change the first element of the copied array to 99.
// Input: [1, 2, 3]
// Expected Output:
// Original: [1, 2, 3] Copy: [99, 2, 3]
// const numbers = [1, 2, 3];
// const copyNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
//   copyNumbers.push(numbers[i]);
// }
// copyNumbers[0] = 99;
// console.log(numbers);
// console.log(copyNumbers);

// Task 6
// Given an array of student objects, print each student’s name and marks.
// [
//   { name: "John", marks: 85 },
//   { name: "Alice", marks: 90 }
// ]
// Expected output:
// John scored 85
// Alice scored 90
// const student = [
//   { name: "John", marks: 85 },
//   { name: "Alice", marks: 90 },
// ];
// for (let i = 0; i < student.length; i++) {
//   console.log(student[i].name, "scored", student[i].marks);
// }

// Task 7
// Given a 2D array, update the value at second row first item to 99 and print the updated array.
// input:
// [
//   [1, 2],
//   [3, 4],
//   [5, 6]
// ]
// Expected Array:
// [
//   [1, 2],
//   [99, 4],
//   [5, 6]
// ]

// const myArray = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// myArray[1][0] = 99;
// console.log(myArray);

// Link: https://github.com/ProgrammingHero1/JS-conditionals-tasks

// --------------------> Task-1:
/***
    Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/
// const burgerPrice = 550;
// if (burgerPrice > 500) {
//   console.log("You have to achieve a free coke.");
// } else {
//   console.log("You have to 30tk pay for coke price.");
// }

// --------------------> Task-2:
/*** 
BMI Calculator and Health Category
Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.
*/
// const convert = 0.3048; // feet to meters
// let height = 5.4 * convert; // meters
// let weight = 1000; // kg
// let BMI = weight / (height * height);

// console.log(BMI);

// if (BMI < 18.5) {
//   console.log("You are underweight.");
// } else if (BMI >= 18.5) {
//   if (BMI <= 24.9) {
//     console.log("You are Normal.");
//   } else if (BMI <= 29.9) {
//     console.log("You are overweight.");
//   } else {
//     console.log("You are obese.");
//   }
// }

// --------------------> Task-3:
/***
Grade Calculator
Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:
    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59
***/
// let marks = 50;
// if (marks >= 90) console.log("A");
// else if (marks >= 80) console.log("B");
// else if (marks >= 70) console.log("C");
// else if (marks >= 60) console.log("D");
// else console.log("F");

// --------------------> Task-4:
/***
if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad
Note: 
use nested if-else-if-else
*/
// const score = 70;
// if (score > 80) {
//   const friendScore = 33;
//   if (friendScore > 80) console.log("go for a lunch");
//   else if (friendScore < 80 && friendScore >= 60)
//     console.log("good luck next time");
//   else if (friendScore < 60 && friendScore >= 40) console.log("message unseen");
//   else if (friendScore < 40) console.log("block your friend");
// } else if (score < 80) {
//   console.log("go to home and sleep and act sad");
// }

// --------------------> Task-5:
/***
you have two numbers in two variables, called: num1, num2
now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.
write a simple if-else. 
also, write it using ternary operator.
*/
// const num1 = 30;
// const num2 = 40;
// let result;
// if (num1 > num2) result = num1 * 2;
// else result = num1 + num2;
// result = num1 > num2 ? num1 * 2 : num1 + num2;
// console.log(result);

// --------------------> Task-6:
/***
Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
// let age = 24;
// let ticketPrice = 800;

// if (age < 10) console.log("Don't pay any taka.");
// else if (age >= 10 && age < 60) {
//   ticketPrice -= ticketPrice * 0.5;
//   console.log("You have to pay", ticketPrice);
// } else if (age >= 60) {
//   ticketPrice -= ticketPrice * 0.15;
//   console.log("You have to pay", ticketPrice);
// } else console.log("You have to pay", ticketPrice);

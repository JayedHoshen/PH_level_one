//---------->>> js-problems-part2-practice-tasks <<<------
// Task -1:
// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];
// function findLowest(numbers) {
//   let mn = numbers[0];
//   for (const num of numbers) {
//     if (num < mn) mn = num;
//   }
//   return mn;
// }
// const heights2 = [167, 190, 125, 165, 137, 120];
// console.log(findLowest(heights2));

// Task -2:
// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
// function findSmallest(names) {
//   let small = names[0];
//   for (const name of names) {
//     if (name.length < small.length) small = name;
//   }
//   return small;
// }
// const heights2 = ["rahim", "robin", "rafi", "ron", "rashed"];
// console.log(findSmallest(heights2));

// Task-3:
// Your task is to calculate the total budget required to buy electronics:
//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
// function calculateElectronicsBudget(laptops, tablets, mobiles) {
//   const laptopPrice = 35000;
//   const tabletPrice = 15000;
//   const mobilePrice = 20000;
//   const total =
//     laptopPrice * laptops + tabletPrice * tablets + mobilePrice * mobiles;
//   return total;
// }
// const buy = calculateElectronicsBudget(3, 1, 3);
// console.log(buy);

// Task-4:
// You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.
// function findAveragePhonePrice(phones) {
//   let sum = 0;
//   for (const phone of phones) {
//     sum += phone.price;
//   }
//   const avg = sum / phones.length;
//   return avg;
// }

// // Input
// const phones = [
//   { model: "PhoneA", brand: "Iphone", price: 95000 },
//   { model: "PhoneB", brand: "Samsung", price: 40000 },
//   { model: "PhoneC", brand: "Oppo", price: 26000 },
//   { model: "PhoneD", brand: "Nokia", price: 35000 },
//   { model: "PhoneE", brand: "Iphone", price: 105000 },
//   { model: "PhoneF", brand: "HTC", price: 48000 },
// ];
// const avg = findAveragePhonePrice(phones);
// console.log(avg);

//     Task -5: (Hard)
// For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.
// function calculateTotalSalary(employees) {
//   let totalSalary = 0;
//   for (const emp of employees) {
//     const currentSalary = emp.experience * emp.increment + emp.starting;
//     totalSalary += currentSalary;
//   }
//   return totalSalary;
// }

// const employees = [
//   { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
//   { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
//   { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
//   { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
// ];

// const total = calculateTotalSalary(employees);
// console.log(total);

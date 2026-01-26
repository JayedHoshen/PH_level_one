// const ages = []; // empty array
// const numbers = [12, 87, 98, 45];
// console.log(numbers);

// numbers.push(100);
// numbers.push(200, 300);

// console.log(numbers);

const friends = ["balam", "kalam", "salam", "khalam"];
friends.push("jalam", "gailam");
console.log(friends);

const out1 = friends.pop();
console.log(friends);

const out2 = friends.pop();
console.log(friends);

console.log(out1, out2);

const shiftOne = friends.shift();
console.log(friends);

friends.unshift(shiftOne);
console.log(friends);

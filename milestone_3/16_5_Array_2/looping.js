/**
 * LOOPING Technique
 * 1. for loop
 * 2. while loop
 * 3. do while --> ignore
 * 4. for of --> array loop korar jonno
 * 5. for in --> object loop korar jonno
 */

const friends = ["Elon", "Bill", "Mark", "Waren"];

// for of
for (const friend of friends) {
  //   console.log(friend);
}

// for loop
for (let i = 0; i < friends.length; i++) {
  //   console.log(friends[i]);
}

// while loop
let i = 0;
while (i < friends.length) {
  //   console.log(friends[i]);
  i++;
}

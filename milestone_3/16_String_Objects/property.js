const person = {
  name: "sodor uddin",
  age: 25,
  profession: "developer",
  salary: 25000,
  married: true,
  "fav places": ["bandorban", "saintmartin", "kuakata"],
};

// console.log(person);

// dot notation
// console.log(person.profession);
const income = person.salary;
// console.log(income);

// bracket notation
const boyos = person["age"];
// console.log(person["age"]);
// console.log(boyos);

// console.log(person["fav places"]);
// const favPlaces = "fav places";
// person[favPlaces] = "Favorite places";

// set value
person.salary = person.salary + 5000;
person["age"] = 26;
person["fav places"] = ["maldives", "bali", "pataya"];
const propName = "profession";
person[propName] = "devops";
console.log(person);

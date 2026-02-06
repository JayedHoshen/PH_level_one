const pen = { brand: "econo", price: 10, color: "black" };
const pencil = new Object();
console.log(pencil);
const rubber = Object.create({});
console.log(rubber);

const mobile = {
  brand: "samsung",
  price: 25000,
  color: "black",
  camera: "12mp",
  isNew: true,
};

// 1st way to access full objects
// for (const prop in mobile) {
//   console.log(prop);
//   console.log(mobile[prop]);
// }

// 2nd way to access full objects
const keys = Object.keys(mobile);
for (const key of keys) {
  console.log(key, ":", mobile[key]);
}

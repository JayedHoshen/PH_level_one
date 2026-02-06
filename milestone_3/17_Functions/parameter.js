function square(number) {
  console.log("value of the number parameter", number);
  const borgo = number * number;
  console.log("square of the given number is: ", borgo);
  console.log("------------");
}

square(4);
square(12);
square(5);
square(405);

function add(num1, num2) {
  const sum = num1 + num2;
  console.log(sum);
}

add(15, 28);
add(10, 20);

function addAll(a, b, c, d, e) {
  const total = a + b + c + d + e;
  console.log(a, b, c, d, e);
  console.log(total);
}
addAll(2, 4, 23, 2, 2);
addAll(1, 4, 9, 9);

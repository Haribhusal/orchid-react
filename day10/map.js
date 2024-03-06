// console.log(Math.sqrt(9));
const numbers = [4, 9, 16, 25];
// let rootNumber = numbers.map(Math.sqrt);
// console.log(rootNumber);
// const squred = numbers.map((num) => num * num);
// console.log(squred);

// let filtered = numbers.filter((item) => item > 15);
// console.log(filtered);
let found = numbers.find((item) => item > 10);
let foundByTraditionalFunction = numbers.find(function (item) {
  return item > 10;
});
console.log(foundByTraditionalFunction);

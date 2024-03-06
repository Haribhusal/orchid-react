// function addTwoNumbers(x, y) {
//   let z = x + y;
//   return z;
// }

// let result = addTwoNumbers(10, 20);
// console.log(result);

// const addNumbers = (a, b) => a + b;
// console.log(addNumbers(20, 30));

const squareNum = (a) => a * a;
// console.log(squareNum(9));

const addTwoNumbers = (x, y) => x + y;
console.log(addTwoNumbers(10, 20));

//  °F = (°C × 9/5) + 32

// Q. WAP to convert from Celcius to Fahrenheit

const convertToF = (celcius) => {
  let fohrenheit = (celcius * 9) / 5 + 32;
  return fohrenheit;
};

console.log(convertToF(37));

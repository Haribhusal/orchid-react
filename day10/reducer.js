const numbers = [15.5, 2.3, 1.1, 4.7];

function getSum(total, num) {
  return total + Math.round(num);
}

let result = numbers.reduce(getSum, 1);
console.log(result);

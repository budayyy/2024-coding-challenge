//2024-CODING-CHALLENGE
// 78/366
// https://www.codewars.com/kata/5949481f86420f59480000e7

function oddOrEven(array) {
  //enter code here

  return array.length > 0
    ? array.reduce((acc, curr) => acc + curr) % 2 === 0
      ? "even"
      : "odd"
    : "even";
}

console.log(oddOrEven([2]));

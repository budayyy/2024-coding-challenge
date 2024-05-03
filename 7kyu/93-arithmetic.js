//2024-CODING-CHALLENGE
// 93/366
// https://www.codewars.com/kata/583f158ea20cfcbeb400000a

function arithmetic(a, b, operator) {
  //your code here!

  const op = {
    add: a + b,
    subtract: a - b,
    multiply: a * b,
    divide: a / b,
  };

  return op[operator];
}

console.log(arithmetic(1, 2, "add"));

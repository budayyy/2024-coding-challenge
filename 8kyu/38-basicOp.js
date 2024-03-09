//2024-CODING-CHALLENGE
// 38/366
//https://www.codewars.com/kata/57356c55867b9b7a60000bd7/

// function basicOp(operation, value1, value2) {
//   switch (operation) {
//     case "+":
//       return value1 + value2;
//     case "-":
//       return value1 - value2;
//     case "*":
//       return value1 * value2;
//     case "/":
//       return value1 / value2;
//     default:
//       return 0;
//   }
// }

function basicOp(operation, value1, value2) {
  return eval(value1 + operation + value2);
}

console.log(basicOp("+", 4, 7));

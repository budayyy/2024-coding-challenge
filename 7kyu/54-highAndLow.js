//2024-CODING-CHALLENGE
// 54/366
// https://www.codewars.com/kata/554b4ac871d6813a03000035

function highAndLow(numbers) {
  let result = "";
  result = result + Number(numbers.split(" ").sort((a, b) => b - a)[0]);
  result = result + " ";
  result = result + Number(numbers.split(" ").sort((a, b) => a - b)[0]);

  return result;
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));

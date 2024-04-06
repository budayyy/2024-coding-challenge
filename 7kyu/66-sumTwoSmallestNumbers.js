//2024-CODING-CHALLENGE
// 66/366
// https://www.codewars.com/kata/558fc85d8fd1938afb000014

// function sumTwoSmallestNumbers(numbers) {
//   //Code here
//   let x = numbers.sort((a, b) => a - b)[0];
//   let y = numbers.sort((a, b) => a - b)[1];

//   return x + y;
// }

function sumTwoSmallestNumbers(numbers) {
  //Code here
  numbers = numbers.sort((a, b) => a - b);

  return numbers[0] + numbers[1];
}

console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]));

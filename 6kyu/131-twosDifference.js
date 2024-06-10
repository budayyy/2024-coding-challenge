//2024-CODING-CHALLENGE
// 131/366
// https://www.codewars.com/kata/5340298112fa30e786000688

function twosDifference(input) {
  input = input.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (Math.abs(input[i] - input[j]) === 2) {
        result.push([input[i], input[j]]);
        break;
      }
    }
  }

  return result;
}

console.log(twosDifference([1, 2, 3, 4]));

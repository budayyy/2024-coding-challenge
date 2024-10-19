// 2024-CODING-CHALLENGE
// 260/366
// https://www.codewars.com/kata/56b29582461215098d00000f

function pipeFix(numbers) {
  const minValue = Math.min(...numbers);

  const maxValue = Math.max(...numbers);
  const fixedPipes = [];
  for (let i = minValue; i <= maxValue; i++) {
    fixedPipes.push(i);
  }
  return fixedPipes;
}

console.log(pipeFix([1, 2, 3, 5, 6, 8, 9]));

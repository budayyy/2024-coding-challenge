//2024-CODING-CHALLENGE
// 154/366
// https://www.codewars.com/kata/5601409514fc93442500010b

function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  return (
    yourPoints >
    classPoints.reduce((acc, curr) => acc + curr) / classPoints.length
  );
}

console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));

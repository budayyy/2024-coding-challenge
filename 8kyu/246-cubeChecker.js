// 2024-CODING-CHALLENGE
// 246/366
// https://www.codewars.com/kata/58d248c7012397a81800005c

function cubeChecker(volume, side) {
  return volume > 0 && side > 0 && volume === Math.pow(side, 3);
}

console.log(cubeChecker(8, 3));

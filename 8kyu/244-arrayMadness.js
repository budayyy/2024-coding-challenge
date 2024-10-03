// 2024-CODING-CHALLENGE
// 244/366
// https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1/

function arrayMadness(a, b) {
  // Ready, get set, GO!!!
  let resultA = 0;
  let resultB = 0;

  for (let i = 0; i < a.length; i++) {
    resultA += Math.pow(a[i], 2);
  }

  for (let j = 0; j < b.length; j++) {
    resultB += Math.pow(b[j], 3);
  }

  return resultA > resultB;
}

console.log(arrayMadness([4, 5, 6], [1, 2, 3]));

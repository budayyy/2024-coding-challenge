//2024-CODING-CHALLENGE
// 48/366
//https://www.codewars.com/kata/555086d53eac039a2a000083

function lovefunc(flower1, flower2) {
  // moment of truth
  return flower1 % 2 !== flower2 % 2;
}

console.log(lovefunc(1, 4));

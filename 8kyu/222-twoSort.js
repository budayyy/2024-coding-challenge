// 2024-CODING-CHALLENGE
// 222/366
// https://www.codewars.com/kata/57cfdf34902f6ba3d300001e

function twoSort(s) {
  return s.sort()[0].split("").join("***");
}

console.log(
  twoSort([
    "bitcoin",
    "take",
    "over",
    "the",
    "world",
    "maybe",
    "who",
    "knows",
    "perhaps",
  ])
);

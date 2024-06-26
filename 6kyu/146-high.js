//2024-CODING-CHALLENGE
// 146/366
// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272

function high(x) {
  let as = x
    .split(" ")
    .map((v) => [...v].reduce((acc, curr) => acc + curr.charCodeAt(0) - 96, 0));
  return x.split(" ")[as.indexOf(Math.max(...as))];
}

console.log(high("man i need a taxi up to ubud"));

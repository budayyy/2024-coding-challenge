//2024-CODING-CHALLENGE
// 68/366
// https://www.codewars.com/kata/5656b6906de340bd1b0000ac

function longest(s1, s2) {
  // your code
  let result = (s1 + s2).split("").sort();

  return result
    .filter((value, index) => result.indexOf(value) === index)
    .join("");
}

console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"));

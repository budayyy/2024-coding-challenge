// 2024-CODING-CHALLENGE
// 218/366
// https://www.codewars.com/kata/58ca658cc0d6401f2700045f

function findMultiples(integer, limit) {
  //your code here
  let result = [];
  for (let i = integer; i <= limit; i += integer) {
    result.push(i);
  }

  return result;
}

console.log(findMultiples(5, 25));

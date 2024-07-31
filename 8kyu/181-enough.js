// 2024-CODING-CHALLENGE
// 181/366
// https://www.codewars.com/kata/5875b200d520904a04000003

function enough(cap, on, wait) {
  // your code here
  return on + wait <= cap ? 0 : on + wait - cap;
}

console.log(enough(100, 60, 50));

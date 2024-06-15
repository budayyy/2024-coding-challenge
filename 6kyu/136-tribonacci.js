//2024-CODING-CHALLENGE
// 136/366
// https://www.codewars.com/kata/556deca17c58da83c00002db

function tribonacci(signature, n) {
  //your code here
  let arr = [...signature];
  for (let i = 0; i < n; i++) {
    arr.push(arr.slice(i, i + 3).reduce((acc, next) => acc + next, 0));
  }

  return arr.slice(0, -3);
}

console.log(tribonacci([300, 200, 100]));

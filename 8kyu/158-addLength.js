// 2024-CODING-CHALLENGE
// 158/366
// https://www.codewars.com/kata/559d2284b5bb6799e9000047

function addLength(str) {
  //start-here
  return str.split(" ").map((v, i) => `${v} ${v.length}`);
}

console.log(addLength("apple ban"));

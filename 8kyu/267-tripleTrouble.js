// 2024-CODING-CHALLENGE
// 267/366
// https://www.codewars.com/kata/5704aea738428f4d30000914

function tripleTrouble(one, two, three) {
  //Solution
  let n = one.length;
  one = one.split("");
  two = two.split("");
  three = three.split("");
  let result = [];
  for (let i = 0; i < n; i++) {
    result += one[i];
    result += two[i];
    result += three[i];
  }

  return result;
}

console.log(tripleTrouble("aaa", "bbb", "ccc"));

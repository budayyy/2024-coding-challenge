//2024-CODING-CHALLENGE
// 120/366
// https://www.codewars.com/kata/5552101f47fc5178b1000050

function digPow(n, p) {
  let nArr = n.toString().split("");
  let total = 0;

  for (let i = 0; i < nArr.length; i++) {
    let element = nArr[i];
    total += Math.pow(parseInt(element), p);
    p++;
  }

  let compare = total / n;

  if (Number.isInteger(compare)) {
    return compare;
  } else {
    return -1;
  }
}

console.log(digPow(89, 1));

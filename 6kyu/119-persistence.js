//2024-CODING-CHALLENGE
// 119/366
// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

function persistence(num) {
  //code me
  if (num.toString().length < 2) return 0;
  let count = 0;

  let result = num.toString();
  while (result.length > 1) {
    result = result
      .split("")
      .reduce((acc, curr) => Number(acc) * Number(curr))
      .toString();

    count++;
  }

  return count;
}

console.log(persistence(999));

// 2024-CODING-CHALLENGE
// 294/366
// https://www.codewars.com/kata/5dd462a573ee6d0014ce715b

function sameCase(a, b) {
  if (!/^[a-zA-Z]$/.test(a) || !/^[a-zA-Z]$/.test(b)) return -1;
  if (
    (a === a.toLowerCase() && b === b.toLowerCase()) ||
    (a === a.toUpperCase() && b === b.toUpperCase())
  ) {
    return 1;
  }

  return 0;
}

console.log(sameCase("1", "c"));

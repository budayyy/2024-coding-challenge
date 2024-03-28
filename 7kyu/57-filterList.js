//2024-CODING-CHALLENGE
// 57/366
// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd

function filter_list(l) {
  // Return a new array with the strings filtered out
  return l.filter((a) => typeof a === "number");
}

console.log(filter_list([1, "a", "b", 0, 15]));

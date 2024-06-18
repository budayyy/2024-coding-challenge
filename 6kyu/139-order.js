//2024-CODING-CHALLENGE
// 139/366
// https://www.codewars.com/kata/55c45be3b2079eccff00010f/

function order(words) {
  // ...
  return words
    .split(" ")
    .sort(function (a, b) {
      return a.match(/\d/) - b.match(/\d/);
    })
    .join(" ");
}

console.log(order("is2 Thi1s T4est 3a"));

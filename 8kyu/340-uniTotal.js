// 2024-CODING-CHALLENGE
// 340/366
// https://www.codewars.com/kata/572b6b2772a38bc1e700007a

function uniTotal(string) {
  // total up dem unicodes!
  return string.split("").reduce((acc, cur) => acc + cur.charCodeAt(0), 0);
}

console.log(uniTotal("a"));
console.log(uniTotal("bbb"));

//2024-CODING-CHALLENGE
// 123/366
// https://www.codewars.com/kata/5a1dc4baffe75f270200006b

function onlyDuplicates(str) {
  // your code here
  let result = [];
  str
    .toLowerCase()
    .split("")
    .map(function (x) {
      if (str.toLowerCase().indexOf(x) !== str.toLowerCase().lastIndexOf(x)) {
        return result.push(x);
      }
    });

  return result.join("");
}

console.log(onlyDuplicates("abccdefee"));

// 2024-CODING-CHALLENGE
// 233/366
// https://www.codewars.com/kata/57a1fd2ce298a731b20006a4

function isPalindrome(x) {
  // your code here
  return x.toLowerCase() === x.split("").reverse().join("").toLowerCase();
}

console.log(isPalindrome("Abba"));

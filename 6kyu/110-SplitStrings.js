//2024-CODING-CHALLENGE
// 110/366
// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001

function solution(str) {
  if (str.length < 1) return [];
  let kata = str.split("");
  let huruf = "";
  let result = [];

  if (kata.length % 2 === 0) {
    for (let i = 0; i < kata.length; i++) {
      huruf = huruf + kata[i];
      if (huruf.length == 2) {
        result = [...result, huruf];
        huruf = "";
      }
    }
    return result;
  } else {
    kata = kata = [...kata, "_"];
    for (let i = 0; i < kata.length; i++) {
      huruf = huruf + kata[i];
      if (huruf.length == 2) {
        result = [...result, huruf];
        huruf = "";
      }
    }
    return result;
  }
}

console.log(solution("abcdefg"));

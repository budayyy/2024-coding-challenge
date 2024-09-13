// 2024-CODING-CHALLENGE
// 224/366
// https://www.codewars.com/kata/5547929140907378f9000039

function shortcut(string) {
  return string.replace(/[aiueo]/gi, "");
}

console.log(shortcut("hello"));

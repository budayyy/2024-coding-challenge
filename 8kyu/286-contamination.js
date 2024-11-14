// 2024-CODING-CHALLENGE
// 286/366
// https://www.codewars.com/kata/596fba44963025c878000039

function contamination(text, char) {
  // Code here ;)
  let result = "";

  for (let i = 0; i < text.length; i++) {
    result += char;
  }

  return result;
}

console.log(contamination("abc", "z"));

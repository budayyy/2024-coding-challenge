//2024-CODING-CHALLENGE
// 116/366
// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

function duplicateEncode(word) {
  // ...
  return word
    .toLowerCase()
    .split("")
    .map((x) =>
      word.toLowerCase().indexOf(x) == word.toLowerCase().lastIndexOf(x)
        ? "("
        : ")"
    )
    .join("");
}

console.log(duplicateEncode("din"));

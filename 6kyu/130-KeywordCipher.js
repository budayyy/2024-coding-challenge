//2024-CODING-CHALLENGE
// 130/366
// https://www.codewars.com/kata/535c1c80cdbf5011e600030f/

function KeywordCipher(abc, keyword) {
  const createChipherAlphabet = (abc, keyword) => {
    const uniqueKeyword = Array.from(new Set(keyword));
    const remainingLetters = abc
      .split("")
      .filter((letter) => !uniqueKeyword.includes(letter));
    return uniqueKeyword.concat(remainingLetters).join("");
  };

  const cipherAlphabet = createChipherAlphabet(abc, keyword);

  this.encode = function (str) {
    return str
      .split("")
      .map((char) => {
        const index = abc.indexOf(char);
        return index !== -1 ? cipherAlphabet[index] : char;
      })
      .join("");
  };
  this.decode = function (str) {
    return str
      .split("")
      .map((char) => {
        const index = cipherAlphabet.indexOf(char);
        return index !== -1 ? abc[index] : char;
      })
      .join("");
  };
}
const abc = "abcdefghijklmnopqrstuvwxyz";
const key = "keyword";
const cipher = new KeywordCipher(abc, key);

console.log(cipher.encode("abc"));
console.log(cipher.decode("key"));

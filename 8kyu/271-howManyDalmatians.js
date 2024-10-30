// 2024-CODING-CHALLENGE
// 271/366
// https://www.codewars.com/kata/56f6919a6b88de18ff000b36

function howManyDalmatians(number) {
  if (number <= 10) {
    return "Hardly any";
  } else if (number <= 50) {
    return "More than a handful!";
  } else if (number === 101) {
    return "101 DALMATIANS!!!";
  } else {
    return "Woah that's a lot of dogs!";
  }
}
console.log(howManyDalmatians(102));

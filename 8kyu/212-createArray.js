// 2024-CODING-CHALLENGE
// 212/366
// https://www.codewars.com/kata/55c28f7304e3eaebef0000da

function createArray(number) {
  var newArray = [];

  for (var counter = 1; counter <= number; counter++) {
    newArray.push(counter);
  }

  return newArray;
}

console.log(createArray(2));

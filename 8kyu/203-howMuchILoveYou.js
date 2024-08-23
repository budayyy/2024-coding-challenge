// 2024-CODING-CHALLENGE
// 203/366
// https://www.codewars.com/kata/57f24e6a18e9fad8eb000296

function howMuchILoveYou(nbPetals) {
  // your code
  const note = {
    1: "I love you",
    2: "a little",
    3: "a lot",
    4: "passionately",
    5: "madly",
    6: "not at all",
  };

  return note[nbPetals % 6 === 0 ? 6 : nbPetals % 6];
}

console.log(howMuchILoveYou(174));

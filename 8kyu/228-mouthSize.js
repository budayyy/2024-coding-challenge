// 2024-CODING-CHALLENGE
// 228/366
// https://www.codewars.com/kata/57ec8bd8f670e9a47a000f89

function mouthSize(animal) {
  // code here

  if (animal.toLowerCase() == "alligator") {
    return "small";
  } else {
    return "wide";
  }
}

console.log(mouthSize("toucan"));

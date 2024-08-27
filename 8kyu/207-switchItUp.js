// 2024-CODING-CHALLENGE
// 207/366
// https://www.codewars.com/kata/5808dcb8f0ed42ae34000031

function switchItUp(number) {
  let word;
  switch (number) {
    case 0:
      return (word = "Zero");
    case 1:
      return (word = "One");
    case 2:
      return (word = "Two");
    case 3:
      return (word = "Three");
    case 4:
      return (word = "Four");
    case 5:
      return (word = "Five");
    case 6:
      return (word = "Six");
    case 7:
      return (word = "Seven");
    case 8:
      return (word = "Eight");
    case 9:
      return (word = "Nine");
  }

  return word;
}

console.log(switchItUp(2));

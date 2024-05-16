//2024-CODING-CHALLENGE
// 106/366
// https://www.codewars.com/kata/5266876b8f4bf2da9b000362

function likes(names) {
  // TODO
  if (names.length < 1) return "no one likes this";
  if (names.length === 1) {
    return `${names} likes this`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else {
    let mount = names.length - 2;
    return `${names[0]}, ${names[1]} and ${mount} others like this`;
  }
}

console.log(likes(["Peter", "budi"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max", "Budi"]));

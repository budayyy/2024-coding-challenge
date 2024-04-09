//2024-CODING-CHALLENGE
// 69/366
// https://www.codewars.com/kata/55b42574ff091733d900002f

// function friend(friends) {
//   //your code here
//   let result = [];
//   friends.map((value, index) => (value.length === 4 ? result.push(value) : ""));

//   return result;
// }

function friend(friends) {
  return friends.filter((n) => n.length === 4);
}

console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]));

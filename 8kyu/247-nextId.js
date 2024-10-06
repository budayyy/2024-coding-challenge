// 2024-CODING-CHALLENGE
// 247/366
// https://www.codewars.com/kata/55eea63119278d571d00006a

function nextId(ids) {
  //this will be awesome!
  for (let i = 0; i < ids.length + 1; i++) {
    if (ids.indexOf(i) == -1) {
      return i;
    }
  }
}

console.log(nextId([0, 1, 2, 3, 5]));

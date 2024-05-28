//2024-CODING-CHALLENGE
// 118/366
// https://www.codewars.com/kata/54da539698b8a2ad76000228

function isValidWalk(walk) {
  //insert brilliant code here

  function count(val) {
    return walk.filter(function (a) {
      return a == val;
    }).length;
  }
  return (
    walk.length == 10 && count("n") == count("s") && count("w") == count("e")
  );
}

console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));

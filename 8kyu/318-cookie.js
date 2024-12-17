// 2024-CODING-CHALLENGE
// 318/366
// https://www.codewars.com/kata/55a996e0e8520afab9000055

function cookie(x) {
  let result = "";
  switch (typeof x) {
    case "string":
      result = "Who ate the last cookie? It was Zach!";
      break;
    case "number":
      result = "Who ate the last cookie? It was Monica!";
      break;
    default:
      result = "Who ate the last cookie? It was the dog!";
      break;
  }

  return result;
}

console.log(cookie("Ryan"));
console.log(cookie(26));
console.log(cookie(2.3));
console.log(cookie(true));

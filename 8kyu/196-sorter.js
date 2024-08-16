// 2024-CODING-CHALLENGE
// 196/366
// https://www.codewars.com/kata/5a07e5b7ffe75fd049000051

function sorter(textbooks) {
  return textbooks.sort((a, b) => {
    let lowerA = a.toLowerCase();
    let lowerB = b.toLowerCase();

    if (lowerA < lowerB) return -1;
    if (lowerA > lowerB) return 1;
    return 0;
  });
}

console.log(sorter(["Algebra", "History", "Geometry", "English"]));
console.log(sorter(["Algebra", "history", "Geometry", "english"]));
console.log(sorter(["Alg#bra", "$istory", "Geom^try", "**english"]));

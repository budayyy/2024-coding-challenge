//2024-CODING-CHALLENGE
// 132/366
// https://www.codewars.com/kata/5340298112fa30e786000688

// function sortArray(items) {
//   const angka = [];
//   for (let i = 0; i < items.length; i++) {
//     for (let j = 0; j < items.length; j++) {
//       if (items[i] < items[j]) {
//         angka.push(items[j]);
//         items[j] = items[i];
//         items[i] = angka.pop();
//       }
//     }
//   }
//   return items;
// }

function sort(items) {
  // create your custom sort logic
  const temp = [];

  for (let i = 0; i < items.length; i++) {
    for (let j = 0; j < items.length; j++) {
      if (items[i] < items[j]) {
        temp.push(items[j]);
        items[j] = items[i];
        items[i] = temp.pop();
      }
    }
  }

  return items;
}

console.log(sort([4, 1, 3, 2, 2, 3, 4, 1]));
console.log(sortArray([4, 1, 3, 2, 2, 3, 4, 1]));

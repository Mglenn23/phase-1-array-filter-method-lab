// Code your solution here

// function findMatching(arr, str) {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     //log(el)
//     if (arr[i].toUpperCase() == str.toUpperCase()) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

//or
function findMatching(arr, str) {
  return arr.filter((arr) => arr.toUpperCase() === str.toUpperCase());
}

function fuzzyMatch(arr, str) {
  return arr.filter((arr) => arr.startsWith(str));
}

function matchName(arr, str) {
  return arr.filter((arr) => arr.name === str);
}

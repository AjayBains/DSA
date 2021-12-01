let array1 = [2, 6, 9, 8];
let arr = [5, 8, 7, 13, 21];
let arrNew = [42, 43, 44, 9];
console.log(array1, arr);
// const compareArr = function (arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// };

let compareArr = function (arr1, arr2) {
  return arr1.some((item) => arr2.includes(item));
};
// let compareArr = function (arr1, arr2) {
//   let map = {};
//   for (let i = 0; i < arr1.length; i++) {
//     if (!map[arr1[i]]) {
//       let item = arr1[i];
//       map[item] = true;
//     }
//   }
//   for (let j = 0; j < arr2.length; j++) {
//     if (map[arr2[j]]) {
//       return true;
//     }
//   }
//   return false;
// };
console.log(compareArr(array1, arr));
console.log(compareArr(array1, arrNew));

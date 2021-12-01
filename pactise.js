// let array1 = [2, 6, 9, 8];
// let arr = [5, 8, 7, 13, 21];
// let arrNew = [42, 43, 44, 9];
// console.log(array1, arr);
// // const compareArr = function (arr1, arr2) {
// //   for (let i = 0; i < arr1.length; i++) {
// //     for (let j = 0; j < arr2.length; j++) {
// //       if (arr1[i] === arr2[j]) {
// //         return true;
// //       }
// //     }
// //   }
// //   return false;
// // };

// let compareArr = function (arr1, arr2) {
//   return arr1.some((item) => arr2.includes(item));
// };
// // let compareArr = function (arr1, arr2) {
// //   let map = {};
// //   for (let i = 0; i < arr1.length; i++) {
// //     if (!map[arr1[i]]) {
// //       let item = arr1[i];
// //       map[item] = true;
// //     }
// //   }
// //   for (let j = 0; j < arr2.length; j++) {
// //     if (map[arr2[j]]) {
// //       return true;
// //     }
// //   }
// //   return false;
// // };
// console.log(compareArr(array1, arr));
// console.log(compareArr(array1, arrNew));

// Naive
function hasPairWithSum(arr, sum) {
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    for (var j = i + 1; j < len; j++) {
      if (arr[i] + arr[j] === sum) return true;
    }
  }

  return false;
}

// Better
function hasPairWithSum2(arr, sum) {
  const mySet = new Set();
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (mySet.has(arr[i])) {
      return true;
    }
    mySet.add(sum - arr[i]);
  }
  return false;
}

console.log(hasPairWithSum2([6, 4, 3, 2, 1, 7], 9));
console.log(hasPairWithSum([1, 2, 3, 4, 12], 8));

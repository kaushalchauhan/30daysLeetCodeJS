// Problem - 2625. Flatten Deeply Nested Array
const flat = function (arr, n) {
  const res = [];
  function helper(arr, depth) {
    for (const val of arr) {
      if (Array.isArray(val) && depth < n) {
        helper(val, depth + 1);
      } else {
        res.push(val);
      }
    }
    return res;
  }

  return helper(arr, 0);
};
// Input
arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
n = 1;
// Output
console.log(flat(arr, n));
// [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]
// Solution - 2, TLE for recursive approach with reduce
// const flat = function (arr, n) {
//     if(n === 0 || !Array.isArray(arr)){
//         return arr;
//     }
//        return arr.reduce((acc,cr)=>{
//         return acc.concat(Array.isArray(cr) ? flat(cr,n-1): cr)
//     },[])

// };

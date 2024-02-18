//  Problem - 2635
// Example 1:

// Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
// Output: [2,3,4]
// Explanation:
// const newArray = map(arr, plusone); // [2,3,4]
// The function increases each value in the array by one.
const map = function (arr, fn) {
  const res = new Array(arr.length); // dynamic array
  for (const [index, value] of arr.entries()) {
    res[index] = fn(value);
  }
  return res;
};
const arr = [1, 2, 3];
const plusOne = (n) => n * 4;

const newArray = map(arr, plusOne);
console.log(newArray); // [ 4, 8, 12 ]

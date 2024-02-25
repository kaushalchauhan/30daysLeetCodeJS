// Problem 2626(Array Reduce Transformation)
function reduce(arr, fn, init) {
  return arr.reduce(fn, init);
}

const arr = [1, 2, 3, 4, 5];
const fn = (init, cr) => {
  return init + cr;
};
console.log(reduce(arr, fn, 0));
// but question is asking not to use reduce built in method

// function withoutReduce(arr, fn, init) {
//   let res = init;
//   for (const n of arr) {
//     res = fn(res, n);
//   }
//   return res;
// }
// console.log(withoutReduce(arr, fn, 0));

//? even we dont need extra variable of res, we can use init to store the res, like this
function withoutReduce(arr, fn, init) {
  for (const n of arr) {
    fn(init, n);
  }
  return init;
}
console.log(withoutReduce(arr, fn, 0));

// we can also use forEach for iterating the array

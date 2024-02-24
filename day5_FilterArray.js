// Problem - 2634 (Filter Element in Array)
const giverArr = [1, 2, 2, 3, 4, 5, 6];
const condition = (n) => {
  return n < 4;
};
// const FilterArr = (arr, fn) => {
//   //   return arr.filter((elm)=>fn(elm)); or
//   return arr.filter(fn);
// };
// console.log(FilterArr(giverArr, condition));
// but question is asking not to use filter built in method

const FilterArr = (arr, fn) => {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      res.push(arr[i]);
    }
  }
  return res;
};
console.log(FilterArr(giverArr, condition));

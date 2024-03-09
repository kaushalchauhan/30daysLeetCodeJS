// Problem - Chunk Array(2677)
// solution-1
var chunk = function (arr, size) {
  const res = [];
  let subArr = [];
  for (let i = 0; i < arr.length; i++) {
    subArr.push(arr[i]);
    if (subArr.length === size) {
      res.push(subArr);
    }
  }
  if (subArr.length) {
    res.push(subArr);
  }
  return res;
};
// solution - 2
var chunk = function (arr, size) {
  const res = [];
  for (let i = 0; i < arr.length; i += size) {
    res.push(arr.slice(i, i + size));
  }
  return res;
};

//! closure concept

function doSquare() {
  const cache = {};
  return function (n) {
    if (n in cache) {
      console.log("from cache");
      return cache[n];
    }
    console.log("calculated");
    return (cache[n] = n * n);
  };
}
const res = doSquare();
console.log(res(3));
console.log(res(3));

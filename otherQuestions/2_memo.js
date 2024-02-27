//! closure concept
function doSquare() {
  const cache = JSON.parse(localStorage.getItem("cache")) || {};

  return function (n) {
    if (n in cache) {
      console.log("from cache");
      return cache[n];
    }

    console.log("calculated");
    cache[n] = n * n;

    // Save the updated cache to localStorage
    localStorage.setItem("cache", JSON.stringify(cache));

    return cache[n];
  };
}

const res = doSquare();
console.log(res(3));
console.log(res(3));

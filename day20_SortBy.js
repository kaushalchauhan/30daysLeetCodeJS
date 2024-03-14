// Problem - 2724. Sort By

const sortBy = function (arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b));
};

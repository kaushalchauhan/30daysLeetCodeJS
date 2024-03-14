// Problem - 2631. Group By
Array.prototype.groupBy = function (fn) {
  const res = {};
  for (const obj of this) {
    const key = fn(obj);
    res[key] = res[key] || [];
    res[key].push(obj);
  }
  return res;
};
console.log([1, 2, 3].groupBy(String)); // {"1":[1],"2":[2],"3":[3]});

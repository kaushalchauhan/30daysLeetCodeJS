// Problem - 2626(Function Composition)
// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
// Example 1 - Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4, Output: 65

function compose(fns, x) {
  return function () {
    for (const fn of fns.reverse()) {
      x = fn(x);
    }
    return x;
  };
}
const res1 = compose([(x) => x + 1, (x) => x * x, (x) => 2 * x], 4);
console.log(res1());

// Solution 2, we can also use reduceRight

function compose2(fns, x) {
  const fn = (acc, f) => f(acc);
  return function () {
    return fns.reduceRight(fn, x);
  };
}
const res2 = compose([(x) => x + 1, (x) => x * x, (x) => 2 * x], 4);
console.log(res2());

// Solution 3
function compose(fns, x) {
  if (fns.length === 0) {
    return function (x) {
      return x;
    };
  }
  return function () {
    for (let i = fns.length - 1; i >= 0; i--) {
      x = fn[i](x);
    }
    return x;
  };
}
const res = compose([(x) => x + 1, (x) => x * x, (x) => 2 * x], 4);
console.log(res());

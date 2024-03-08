// Problem - 2627. Debounce
const debounce = function (fn, t) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => fn(...args), t);
  };
};

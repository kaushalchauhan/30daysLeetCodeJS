// Problem 2725. Interval Cancellation
// Given a function fn, an array of arguments args, and an interval time t, return a cancel function cancelFn.
// After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.
const cancellable = function (fn, args, t) {
  fn(...args);
  intervalId = setInterval(() => fn(...args), t);
  return () => {
    clearInterval(intervalId);
  };
};

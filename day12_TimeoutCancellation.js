// Problem - Timeout Cancelation (2715)
// Given a function fn, an array of arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.
// After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.
const cancelable = (fn, args, t) => {
  timeoutId = setTimeout(() => {
    return fn(...args);
  }, t);
  return () => {
    clearTimeout(timeoutId);
  };
};

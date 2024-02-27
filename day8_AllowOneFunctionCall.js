// Problem - Allow One Function Call (2666)
const fn = (fn) => {
  let called = false;
  return function (...args) {
    if (called) {
      return undefined;
    }
    called = true;
    return fn(...args);
  };
};

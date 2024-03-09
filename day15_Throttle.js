// Problem - Throttle(2676)
const throttle = function (fn, t) {
  return function (...args) {
    let isThrottle = false;
    let nextArgs = null;
    if (isThrottle) {
      nextArgs = args;
    } else {
      fn(...args);
      isThrottle = true;
      setTimeout(helper, t);
    }
    function helper() {
      if (nextArgs) {
        fn(...nextArgs);
        isThrottle = true;
        nextArgs = null;
        setTimeout(helper, t);
      } else {
        isThrottle = false;
      }
    }
  };
};

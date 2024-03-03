// 2637. Promise Time Limit
/**
 * Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. fn takes arguments provided to the time limited function.
 * The time limited function should follow these rules:
 * If the fn completes within the time limit of t milliseconds, the time limited function should resolve with the result:
 * If the execution of the fn exceeds the time limit, the time limited function should reject with the string "Time Limit Exceeded".
 */
const timeLimit = (fn, args, t) => {
  return async function () {
    return new Promise(async (resolve, reject) => {
      timerId = setTimeout(() => reject("Time Limit Exceeded"), t);
      try {
        const res = await fn(...args);
        resolve(res);
      } catch (error) {
        reject(error);
      } finally {
        clearTimeout(timerId);
      }
    });
  };
};
//  we can solve this using promise.race also, promise.race([fn(...args),timeout])

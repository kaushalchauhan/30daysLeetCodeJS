// Problem - Promise Pool(2636 )

// Solution 1
const promisePool = async function (functions, n) {
  return new Promise((resolve, reject) => {
    let i = 0;
    let inProgress = 0;
    function callback() {
      if (i === functions.length && inProgress === 0) {
        resolve();
      }
      while (i < functions.length && inProgress < 0) {
        functions[i++]().then(() => {
          inProgress--;
          callback();
        });
        inProgress++;
      }
    }
    callback();
  });
};

// solution 2
const promisePool2 = async function (functions, n) {
  let i = 0;
  async function callback() {
    if (i === functions.length) {
      return;
    }
    await functions[i++]();
    await callback();
  }
  const nPromise = Array(n).fill.map(callback);
  Promise.all(nPromise);
};

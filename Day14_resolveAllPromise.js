// Problem - 2721. Execute Asynchronous Functions in Parallel
var promiseAll = async function (functions) {
  return new Promise((resolve, reject) => {
    const result = [];
    let count = 0;
    if (functions.length === 0) {
      resolve(result);
    }
    for (let i = 0; i < functions.length; i++) {
      functions[i]()
        .then((item) => {
          result[i] = item;
          count++;
          if (count === functions.length) {
            resolve(result);
          }
        })
        .catch((error) => reject(error));
    }
  });
};

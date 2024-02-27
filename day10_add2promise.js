// Problem Add two Promises (2723)

// solution 1
async function addTwoPromise(promise1, promise2) {
  Promise.all([promise1, promise2]).then((values) => {
    const sum = values.reduce((total, value) => total + value, 0);
    return sum;
  });
}
// solution2
async function add2Promise(promise1, promise2) {
  try {
    let p1 = await promise1;
    let p2 = await promise2;
    return p1 + p2;
  } catch (error) {
    console.log(error.message);
  }
}

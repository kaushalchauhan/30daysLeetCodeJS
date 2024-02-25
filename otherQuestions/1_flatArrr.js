// flat arr at one level
const arr1 = [1, 2, [3, 4], 3, [2, 3]]; // flat this [1,2,3,4]

function flatArray(arr) {
  let res = [];
  res = arr.reduce((acc, cr) => {
    return acc.concat(cr);
  }, []);
  return res;
}

const output1 = flatArray(arr1);
console.log("arr1", output1);

// flat arr at n level
const arr2 = [1, 2, [3, 4, [5, 7, [3, 5]]], 3, [2, 3, [4, 5]]]; // flat this [1,2,3,4]
function flatArrayN(arr) {
  let res = [];
  res = arr.reduce((acc, cr) => {
    return acc.concat(Array.isArray(cr) ? flatArrayN(cr) : cr);
  }, []);
  return res;
}
const output2 = flatArrayN(arr2);
console.log("arr2", output2);

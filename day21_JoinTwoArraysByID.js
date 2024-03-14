// Problem - 2722. Join Two Arrays by ID
const join = function (arr1, arr2) {
  let obj = {};
  for (const i of arr1) {
    obj[i.id] = i;
  }
  for (const i of arr2) {
    obj[i.id] = obj[i.id] ? { ...obj[i.id], ...i } : i;
  }
  return Object.values(obj);
};
const arr1 = [
  { id: 1, x: 1 },
  { id: 2, x: 9 },
];

const arr2 = [{ id: 3, x: 5 }];

console.log(join(arr1, arr2));

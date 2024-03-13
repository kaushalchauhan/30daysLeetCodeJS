// Problem - Convert Object to JSON String(2633)

const jsonStringify = function (object) {
  // null , undefined
  if (typeof object === "null" || typeof object === "undefined") {
    return String(object);
  }
  // Arrays
  if (Array.isArray(object)) {
    const values = object.map((obj) => jsonStringify(obj));
    return `[${values.join(",")}]`;
  }
  // Objects
  if (typeof object === "object") {
    const keys = Object.keys(object);
    const keyValuePair = keys.map((key) => `"${key}" : ${jsonStringify(obj)}`);
    return `{${keyValuePair.join(",")}}`;
  }
  // String
  if (typeof object === "string") {
    return `"${String(object)}"`;
  }
  return String(object);
};

const res = jsonStringify([1, 2, 3, 4, 5]);
console.log(res);
console.log(typeof res);

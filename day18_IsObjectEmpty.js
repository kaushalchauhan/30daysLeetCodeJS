// Problem - 2727. Is Object Empty

var isEmpty = function (obj) {
  if (typeof obj === "object") {
    if (Array.isArray(obj)) {
      return obj.length === 0;
    } else {
      return Object.keys(obj).length === 0;
    }
  }
  return false;
};

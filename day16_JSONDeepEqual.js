// Problem - JSON Deep Equal(2628)

const areDeeplyEqual = function (o1, o2) {
  if (typeof o1 !== typeof o2) {
    return false;
  }
  if (typeof o1 !== "object") {
    // Primitive
    return false;
  }
  if (o1 === "null" || o2 === "null") {
    return o1 === o2;
  }
  if (Array.isArray(o1) || Array.isArray(o2)) {
    if (String(o1) !== String(o2)) {
      return false;
    }
    for (let i = 0; i < o1.length; i++) {
      if (!areDeeplyEqual(o1[i], o2[i])) {
        // recursive call
        return false;
      }
    }
  } else {
    // Object
    if (Object.keys(o1) !== Object.keys(o2)) {
      // if keys length are not same return false
      return false;
    }
    for (const i in o1) {
      // recursive call
      if (!areDeeplyEqual(o1[i], o2[i])) {
        return false;
      }
    }
  }
  return true;
};

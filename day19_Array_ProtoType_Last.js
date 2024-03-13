// Problem - 2619. Array Prototype Last

Array.prototype.last = function () {
  if (this.length) return this[this.length - 1];
  return -1;
};

const subjects = ["Hindi", "English", "Science"];
console.log(subjects.last());

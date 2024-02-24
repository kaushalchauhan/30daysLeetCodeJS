// Problem 2620 - Counter

// Option 1 - using function
// const createCounter = function (n) {
//   let count = n;
//   return function () {
//     return console.log(count++);
//   };
// };

// const counter = createCounter(10);
// counter();
// counter();
// counter();

// Option 2 - using classes / constructor function
class Counter {
  constructor(n) {
    this.n = n;
  }
  increment() {
    return console.log(this.n++);
  }
}
const counter = new Counter(10);
counter.increment();
counter.increment();
counter.increment();

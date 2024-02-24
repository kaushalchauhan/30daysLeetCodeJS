// Problem - 2665
// createCounter that support below three functions, increment(), decrement(), reset()
// init - 2, increment() - 3, increment() - 4, decrement() - 3, reset() - 2

// Solution 1 - using functional approach
// const createCounter = function (init) {
//   let initCount = init;
//   function increment() {
//     return console.log(++initCount);
//   }
//   function decrement() {
//     return console.log(--initCount);
//   }
//   function reset() {
//     initCount = init;
//     return console.log(initCount);
//   }
//   return {
//     increment: increment,
//     decrement: decrement,
//     reset: reset,
//   };
// };
// const counter = createCounter(12);
// counter.increment();
// counter.increment();
// counter.increment();
// counter.decrement();
// counter.reset();

// Solution 2 - using constructor function
class Counter {
  constructor(init) {
    this.init = init;
    this.count = init;
  }
  increment() {
    return ++this.count;
  }
  decrement() {
    return --this.count;
  }
  reset() {
    this.count = this.init;
    return this.count;
  }
}

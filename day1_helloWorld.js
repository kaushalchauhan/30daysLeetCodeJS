// topic closuers
const createHelloWorld = function () {
  return function (...args) {
    return console.log("Hello world");
  };
};
createHelloWorld()();

// Problem - Return Length of Arguments Passed(2703)
const argumentLength = function (...args) {
  // we can do
  // const arr = [...args], but without doing this args.length will also works the same, no need to create another variable
  return args.length;
};

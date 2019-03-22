const memoized = [0, 1];

const fib = n => {
  if (n < memoized.length) {
    return memoized[n];
  }
  const current = fib(n - 1) + fib(n - 2);
  memoized.push(current);
  return current;
};

const assert = require("assert");

assert.equal(fib(0), 0, "test 1");
assert.equal(fib(1), 1, "test 2");
assert.equal(fib(2), 1, "test 3");
assert.equal(fib(3), 2, "test 4");
assert.equal(fib(4), 3, "test 5");
assert.equal(fib(5), 5, "test 6");
assert.equal(fib(6), 8, "test 7");
assert.equal(fib(7), 13, "test 8");
assert.equal(fib(8), 21, "test 9");
assert.equal(fib(9), 34, "test 10");
assert.equal(fib(10), 55, "test 11");

console.log("all tests pass");

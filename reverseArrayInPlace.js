const reverseArrayInPlace = array => {
  const endIndex = Math.floor(array.length / 2);
  for (let leftIndex = 0; leftIndex < endIndex; leftIndex++) {
    const rightIndex = array.length - leftIndex - 1;
    const leftChar = array[leftIndex];
    const rightChar = array[rightIndex];
    array[leftIndex] = rightChar;
    array[rightIndex] = leftChar;
  }
  return array;
};

// testing

const assert = require("assert");

const input1 = "abcdefgh".split("");
const input1Copy = input1.slice();
assert.equal(
  reverseArrayInPlace(input1).join(""),
  input1Copy.reverse().join(""),
  "test 1"
);
const input2 = "lkasdjflkdsjlfknvjnnfanoaosnvvjnasnsafohsahfdfoasfosdjf;lrnivnijvc;d;faofornnvs".split(
  ""
);
const input2Copy = input2.slice();
assert.equal(
  reverseArrayInPlace(input2).join(""),
  input2Copy.reverse().join(""),
  "test 2"
);

console.log("all tests pass");

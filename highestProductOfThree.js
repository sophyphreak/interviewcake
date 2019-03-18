const highestProductOfThree = arrayOfInts => {
  const firstThree = arrayOfInts.slice(0, 3);
  firstThree.sort();
  let highest = firstThree[2];
  let secondHighest = firstThree[1];
  let thirdHighest = firstThree[0];
  let secondLowest = firstThree[1];
  let lowest = firstThree[0];
  for (let index = 3; index < arrayOfInts.length; index++) {
    const current = arrayOfInts[index];
    if (current > highest) {
      thirdHighest = secondHighest;
      secondHighest = highest;
      highest = current;
    } else if (current > secondHighest) {
      thirdHighest = secondHighest;
      secondHighest = current;
    } else if (current > thirdHighest) {
      thirdHighest = current;
    }
    if (current < lowest) {
      secondLowest = lowest;
      lowest = current;
    } else if (current < secondLowest) {
      secondLowest = current;
    }
  }
  return Math.max(
    highest * secondHighest * thirdHighest,
    highest * lowest * secondLowest
  );
};

const assert = require("assert");

let arrayOfInts = [1, 2, 3, 4, 5];
assert.equal(highestProductOfThree(arrayOfInts), 60, "test 1");
arrayOfInts = [-10, -10, 1, 3, 2];
assert.equal(highestProductOfThree(arrayOfInts), 300, "test 2");

console.log("all tests pass");

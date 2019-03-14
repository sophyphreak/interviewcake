const mergeArrays = (myArray, alicesArray) => {
  let myIndex = 0;
  let aliceIndex = 0;
  const mergedArray = [];
  while (myIndex < myArray.length && aliceIndex < alicesArray.length) {
    const myOrder = myArray[myIndex];
    const aliceOrder = alicesArray[aliceIndex];
    if (myOrder < aliceOrder) {
      mergedArray.push(myOrder);
      myIndex++;
    } else {
      mergedArray.push(aliceOrder);
      aliceIndex++;
    }
  }
  if (myIndex < myArray.length) {
    const myOrders = myArray.slice(myIndex);
    mergedArray.push(...myOrders);
  }
  if (aliceIndex < alicesArray.length) {
    const alicesOrders = alicesArray.slice(aliceIndex);
    mergedArray.push(...alicesOrders);
  }
  return mergedArray;
};

const assert = require("assert");

const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];
assert.deepEqual(
  mergeArrays(myArray, alicesArray),
  [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19],
  "test 1"
);

console.log("all tests pass");

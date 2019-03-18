const getProductOfAllIntsExceptAtIndex = arrayOfInts => {
  const arrayOfProducts = [];
  arrayOfInts.forEach(() => arrayOfProducts.push(1));
  let memoryProduct = 1;
  for (let index = 0; index < arrayOfInts.length; index++) {
    arrayOfProducts[index] *= memoryProduct;
    memoryProduct *= arrayOfInts[index];
  }
  memoryProduct = 1;
  for (let index = arrayOfInts.length - 1; index >= 0; index--) {
    arrayOfProducts[index] *= memoryProduct;
    memoryProduct *= arrayOfInts[index];
  }
  return arrayOfProducts;
};

const assert = require("assert");

let arrayOfInts = [1, 7, 3, 4];
assert.deepEqual(
  getProductOfAllIntsExceptAtIndex(arrayOfInts),
  [84, 12, 28, 21],
  "test 1"
);
arrayOfInts.push(0);
assert.deepEqual(
  getProductOfAllIntsExceptAtIndex(arrayOfInts),
  [0, 0, 0, 0, 84],
  "test 2"
);
arrayOfInts = [1, 2, 6, 5, 9];
assert.deepEqual(
  getProductOfAllIntsExceptAtIndex(arrayOfInts),
  [540, 270, 90, 108, 60],
  "test 3"
);

console.log("all tests pass");

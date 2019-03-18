const getMaxProfit = stockPrices => {
  const lastIndex = stockPrices.length - 1;
  let maxVal = stockPrices[lastIndex];
  let maxProfit = stockPrices[lastIndex] - stockPrices[lastIndex - 1];
  for (let index = lastIndex - 1; index >= 0; index--) {
    const current = stockPrices[index];
    if (maxVal - current > maxProfit) {
      maxProfit = maxVal - current;
    }
    if (current > maxVal) {
      maxVal = current;
    }
  }
  return maxProfit;
};

const assert = require("assert");

let stockPrices = [10, 7, 5, 8, 11, 9];
assert.equal(getMaxProfit(stockPrices), 6, "test 1");
stockPrices = [100, 90, 70, 40, 10];
assert.equal(getMaxProfit(stockPrices), -10, "test 2");

console.log("all tests pass");

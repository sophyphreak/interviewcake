const isEnoughMovie = (flightLength, movieLengths) => {
  const dictOfTrues = {};
  for (let movie of movieLengths) {
    if (dictOfTrues[movie]) {
      return true;
    }
    dictOfTrues[flightLength - movie] = true;
  }
  return false;
};

const assert = require("assert");

const flightLength = 335;
let movieLengths = [88, 96, 107, 116, 125, 134];
assert.equal(isEnoughMovie(flightLength, movieLengths), false, "test 1");
movieLengths = [167, 168];
assert.equal(isEnoughMovie(flightLength, movieLengths), true, "test 2");
console.log("all tests passed");

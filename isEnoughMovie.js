const isEnoughMovie = (flightLength, movieLengths) => {
  movieLengths.sort();
  let leftIndex = 0;
  let rightIndex = movieLengths.length - 1;
  while (leftIndex < rightIndex) {
    const left = movieLengths[leftIndex];
    const right = movieLengths[rightIndex];
    if (left + right === flightLength) {
      return true;
    } else if (left + right < flightLength) {
      leftIndex++;
    } else {
      rightIndex++;
    }
  }
  return false;
};

const assert = require("assert");

const flightLength = 335;
let movieLengths = [88, 96, 107, 116, 125, 134];
assert.equal(isEnoughMovie(flightLength, movieLengths), false, "test 1");
movieLengths = [167, 168];
assert.equal(isEnoughMovie(flightLength, movieLengths), true, "test 1");
console.log("all tests passed");

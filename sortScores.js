const sortScores = (unsortedScores, HIGHEST_POSSIBLE_SCORE) => {};

const assert = require("assert");

const unsortedScores = [37, 89, 41, 65, 91, 53];
const HIGHEST_POSSIBLE_SCORE = 100;

assert.equal(
  sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE),
  [91, 89, 65, 53, 41, 37],
  "test 1"
);

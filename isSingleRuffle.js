const isSingleRiffle = (shuffledDeck, half1, half2) => {
  let deckIndex = 0;
  let h1Index = 0;
  let h2Index = 0;
  while (arrayIndexExists(half1, h1Index) && arrayIndexExists(half2, h2Index)) {
    const deckVal = shuffledDeck[deckIndex];
    const h1Val = half1[h1Index];
    const h2Val = half2[h2Index];
    switch (deckVal) {
      case h1Val:
        deckIndex++;
        h1Index++;
        break;
      case h2Val:
        deckIndex++;
        h2Index++;
        break;
      default:
        return false;
    }
  }
  while (arrayIndexExists(half1, h1Index)) {
    const deckVal = shuffledDeck[deckIndex];
    const h1Val = half1[h1Index];
    if (deckVal === h1Val) {
      deckIndex++;
      h1Index++;
    } else {
      return false;
    }
  }
  while (arrayIndexExists(half2, h2Index)) {
    const deckVal = shuffledDeck[deckIndex];
    const h2Val = half2[h2Index];
    if (deckVal === h2Val) {
      deckIndex++;
      h2Index++;
    } else {
      return false;
    }
  }
  return true;
};

const arrayIndexExists = (array, index) =>
  !(typeof array[index] === 'undefined');

// for testing

const generateRandBool = () => !!Math.floor(Math.random() * 2);

const generateHalves = () => {
  const half1 = [];
  const half2 = [];
  for (let index = 0; index < 10; index++) {
    if (generateRandBool()) {
      half1.push(index);
    } else {
      half2.push(index);
    }
  }
  return { half1, half2 };
};

const generateSingleRiffle = (half1, half2) => {
  const h1 = half1.slice();
  const h2 = half2.slice();
  const singleRiffle = [];
  while (h1.length && h2.length) {
    if (generateRandBool()) {
      singleRiffle.push(h1.shift());
    } else {
      singleRiffle.push(h2.shift());
    }
  }
  singleRiffle.push(...h1);
  singleRiffle.push(...h2);
  return singleRiffle;
};

const generateBackwardsDeck = () => {
  const backwardsDeck = [];
  for (let index = 51; index >= 0; index--) {
    backwardsDeck.push(index);
  }
  return backwardsDeck;
};

const { half1, half2 } = generateHalves();
const shuffledDeck = generateSingleRiffle(half1, half2);
const backwardsDeck = generateBackwardsDeck();

const assert = require('assert');

assert.ok(isSingleRiffle(shuffledDeck, half1, half2), 'test 1');
assert.ok(!isSingleRiffle(backwardsDeck, half1, half2), 'test 2');
console.log('all tests pass');

const isSingleRiffle = (shuffledDeck, half1, half2) => {
  const deck = shuffledDeck.slice();
  const h1 = half1.slice();
  const h2 = half2.slice();
  while (h1.length && h2.length) {
    switch(deck[0]) {
      case h1[0]:
        deck.shift();
        h1.shift();
        break;
      case h2[0]:
        deck.shift();
        h2.shift();
        break;
      default:
        return false;
    }
  }
  while (h1.length) {
    if (deck[0] === h1[0]) {
      deck.shift();
      h1.shift();
    } else {
      return false;
    }
  }
  while (h2.length) {
    if (deck[0] === h2[0]) {
      deck.shift();
      h2.shift();
    } else {
      return false;
    }
  }
  return true;
};

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
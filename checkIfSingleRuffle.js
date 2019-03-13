const checkIfSingleRuffle = (shuffledDeck, half1, half2) => {
  let shuffledDeckIndex = 0;
  let half1Index = 0;
  let half2Index = 0;
  while (shuffledDeckIndex < 52) {
    if (shuffledDeck[shuffledDeckIndex] === half1[half1Index]) {
      shuffledDeckIndex++;
      half1Index++;
    } else if (shuffledDeck[shuffledDeckIndex] === half2[half2Index]) {
      shuffledDeckIndex++;
      half2Index++;
    } else {
      return false;
    }
  }
  return true;
};

// run your function through some test cases here
// remember: debugging is half the battle!

let deck = [];

for (let index = 0; index < 52; index++) {
  deck.push(index);
}

let half1 = deck.slice(0, 26);
let half2 = deck.slice(26, 52);

let tempHalf1 = half1.slice();
let tempHalf2 = half2.slice();
let shuffledDeck = [];

while (shuffledDeck.length < 52) {
  if (tempHalf1.length && tempHalf2.length) {
    let chosenHalf = Math.floor(Math.random() * Math.floor(2));
    if (chosenHalf === 0) {
      shuffledDeck.push(tempHalf1.shift());
    } else {
      shuffledDeck.push(tempHalf2.shift());
    }
  } else if (tempHalf1.length) {
    shuffledDeck.push(tempHalf1.shift());
  } else if (tempHalf2.length) {
    shuffledDeck.push(tempHalf2.shift());
  }
}

// console.log(checkIfSingleRuffle(shuffledDeck, half1, half2));

console.log(checkIfSingleRuffle(shuffledDeck, half1, half2));

console.log(checkIfSingleRuffle(shuffledDeck.sort(), half1, half2));

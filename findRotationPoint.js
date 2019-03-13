function findRotationPoint(words) {
  let workingWords = words.slice();
  while (1 !== 0) {
    const halfway = Math.floor(workingWords.length / 2);
    const leftHalf = workingWords.slice(0, halfway);
    const leftHalfEnd = halfway - 1;
    const rightHalf = workingWords.slice(halfway, workingWords.length);
    const rightHalfEnd = words.length - halfway - 1;
    if (rightHalf[0] < leftHalf[leftHalfEnd]) {
      return words.indexOf(rightHalf[0]);
    } else if (leftHalf[0] > leftHalf[leftHalfEnd] || rightHalf.length <= 1) {
      workingWords = leftHalf;
    } else if (rightHalf[0] > rightHalf[rightHalfEnd] || leftHalf.length <= 1) {
      workingWords = rightHalf;
    } else {
      throw `yeah, that's an error. ${workingWords}`;
    }
  }
}

// Tests

let desc = 'small array';
let actual = findRotationPoint(['cape', 'cake']);
let expected = 1;
assertEquals(actual, expected, desc);

desc = 'medium array';
actual = findRotationPoint(['grape', 'orange', 'plum', 'radish', 'apple']);
expected = 4;
assertEquals(actual, expected, desc);

desc = 'large array';
actual = findRotationPoint([
  'ptolemaic',
  'retrograde',
  'supplant',
  'undulate',
  'xenoepist',
  'asymptote',
  'babka',
  'banoffee',
  'engender',
  'karpatka',
  'othellolagkage'
]);
expected = 5;
assertEquals(actual, expected, desc);

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}

const getRandom = (floor, ceiling) => {
  return Math.floor(Math.random() * (ceiling - floor)) + floor;
};

const shuffle = theArray => {
  for (let index = 0; index < theArray.length; index++) {
    const toMoveIndex = getRandom(0, theArray.length);
    const toMove = theArray[toMoveIndex];
    theArray.splice(toMoveIndex, 1);
    theArray.unshift(toMove);
  }
};

const sample = [1, 2, 3, 4, 5];
console.log('Initial array: ', sample);
shuffle(sample);
console.log('Shuffled array: ', sample);

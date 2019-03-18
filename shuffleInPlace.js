const shuffleInPlace = array => {
  const ceiling = array.length - 1;
  for (let index = 0; index < array.length; index++) {
    const newIndex = getRandom(index, ceiling);
    array = swap(array, index, newIndex);
  }
  return array;
};

const swap = (array, firstIndex, secondIndex) => {
  const temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
  return array;
};

const getRandom = (floor, ceiling) =>
  Math.floor(Math.random() * (ceiling + 1 - floor) + floor);

let array = [1, 2, 3, 4, 5, 6, 7];
console.log(shuffleInPlace(array));
console.log(shuffleInPlace(array));
console.log(shuffleInPlace(array));
console.log(shuffleInPlace(array));
console.log(shuffleInPlace(array));
console.log(shuffleInPlace(array));
console.log(shuffleInPlace(array));
console.log(shuffleInPlace(array));

// Write a function that takes an array of characters and reverses the letters in place. ↴

// Why an array of characters instead of a string?

// The goal of this question is to practice manipulating strings in place.
// Since we're modifying the input, we need a mutable ↴ type like an array, instead of JavaScript's immutable strings.

const reverseStringInPlace = arrayOfCharacters => {
  for (let index = 0; index <= arrayOfCharacters.length / 2; index++) {
    const oppositeIndex = arrayOfCharacters.length - index - 1;
    const element = arrayOfCharacters[index];
    const oppositeElement = arrayOfCharacters[oppositeIndex];
    arrayOfCharacters[oppositeIndex] = element;
    arrayOfCharacters[index] = oppositeElement;
  }
  return arrayOfCharacters;
};

const thisArrayOfCharacters = ['a', 'n', 'd', 'r', 'e', 'w'];

console.log(reverseStringInPlace(thisArrayOfCharacters));

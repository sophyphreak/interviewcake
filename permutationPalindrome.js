// Write an efficient function that checks whether any permutation ↴ of an input string is a palindrome. ↴

// You can assume the input string only contains lowercase letters.

// Examples:

//     "civic" should return true
//     "ivicc" should return true
//     "civil" should return false
//     "livci" should return false

// "But 'ivicc' isn't a palindrome!"

// If you had this thought, read the question again carefully.
// We're asking if any permutation of the string is a palindrome.
// Spend some extra time ensuring you fully understand the question before starting.
// Jumping in with a flawed understanding of the problem doesn't look good in an interview.

const isPalindrome = inputString => {
  let result = true;
  const letterCount = {};
  inputArray = inputString.split('');
  inputArray.forEach(letter => {
    if (!letterCount.hasOwnProperty(letter)) {
      letterCount[letter] = 1;
    } else {
      letterCount[letter] += 1;
    }
  });
  const letterList = Object.keys(letterCount);
  if (inputString.length % 2 === 0) {
    letterList.forEach(letter => {
      if (letterCount[letter] !== 2) {
        result = false;
      }
    });
  } else {
    let singleLetterFound = false;
    letterList.forEach(letter => {
      if (letterCount[letter] !== 2) {
        if (letterCount[letter] === 1) {
          if (singleLetterFound) {
            result = false;
          } else {
            singleLetterFound = true;
          }
        } else {
          result = false;
        }
      }
    });
  }
  return result;
};

console.log(
  isPalindrome('civic'),
  isPalindrome('ivicc'),
  isPalindrome('civil'),
  isPalindrome('livci')
);

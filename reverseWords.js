const reverseWords = message => {
  let numberOfWords = 1;
  for (let letter of message) {
    if (letter === " ") {
      numberOfWords++;
    }
  }
  let replacesLeft = Math.floor(numberOfWords / 2);
  let replacesDone = 0;
  while (replacesLeft) {
    let leftWordBeginSpaceIndex;
    let leftWordEndSpaceIndex;
    let rightWordBeginSpaceIndex;
    let rightWordEndSpaceIndex;

    let finished = false;
    let spacesToPass = replacesDone;
    for (let i = 0; i < message.length; i++) {
      if (finished) break;
      const current = message[i];
      if (current === " ") {
        switch (spacesToPass) {
          case 0:
            leftWordEndSpaceIndex = i;
            finished = true;
            break;
          case 1:
            leftWordBeginSpaceIndex = i;
            spacesToPass--;
            break;
          default:
            spacesToPass--;
            break;
        }
      }
    }

    finished = false;
    spacesToPass = replacesDone;
    for (let i = message.length - 1; i >= 0; i--) {
      if (finished) break;
      const current = message[i];
      if (current === " ") {
        switch (spacesToPass) {
          case 0:
            rightWordBeginSpaceIndex = i;
            finished = true;
            break;
          case 1:
            rightWordEndSpaceIndex = i;
            spacesToPass--;
            break;
          default:
            spacesToPass--;
            break;
        }
      }
    }

    const leftWord = leftWordBeginSpaceIndex
      ? message.slice(leftWordBeginSpaceIndex + 1, leftWordEndSpaceIndex)
      : message.slice(0, leftWordEndSpaceIndex);
    const rightWord = rightWordEndSpaceIndex
      ? message.slice(rightWordBeginSpaceIndex + 1, rightWordEndSpaceIndex)
      : message.slice(rightWordBeginSpaceIndex + 1);
    message.splice(rightWordBeginSpaceIndex + 1, rightWord.length, ...leftWord);
    leftWordBeginSpaceIndex
      ? message.splice(
          leftWordBeginSpaceIndex + 1,
          leftWord.length,
          ...rightWord
        )
      : message.splice(0, leftWord.length, ...rightWord);
    replacesDone++;
    replacesLeft--;
  }
  return message;
};

// testing

const assert = require("assert");

const message = "cake pound steal".split("");
assert.equal(reverseWords(message).join(""), "steal pound cake", "test 1");

const zhuangzi = "unhurried and slow is understanding great".split("");
assert.equal(
  reverseWords(zhuangzi).join(""),
  "great understanding is slow and unhurried",
  "test 2"
);

console.log("all tests pass");

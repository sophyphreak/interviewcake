const mergeRanges = meetingTimes => {
  meetingTimes.sort((a, b) => a.startTime - b.startTime);
  for (let index = 0; index < meetingTimes.length; index++) {
    const currentStart = meetingTimes[index];
    let beginSpliceIndex;
    let endSpliceIndex;
    for (let j = index + 1; j < meetingTimes.length; j++) {
      const currentEnd = meetingTimes[j];
      if (currentEnd.startTime <= currentStart.endTime) {
        if (currentStart.endTime <= currentEnd.endTime) {
          currentStart.endTime = currentEnd.endTime;
        }
        if (!beginSpliceIndex) {
          beginSpliceIndex = j;
          endSpliceIndex = j + 1;
        } else {
          endSpliceIndex = j + 1;
        }
      } else {
        break;
      }
    }
    beginSpliceIndex &&
      meetingTimes.splice(beginSpliceIndex, endSpliceIndex - beginSpliceIndex);
  }
  return meetingTimes;
};

const assert = require("assert");

let meetingTimes = [
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 5 },
  { startTime: 4, endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9, endTime: 10 }
];
assert.deepEqual(
  mergeRanges(meetingTimes),
  [
    { startTime: 0, endTime: 1 },
    { startTime: 3, endTime: 8 },
    { startTime: 9, endTime: 12 }
  ],
  "test 1"
);
meetingTimes = [{ startTime: 1, endTime: 2 }, { startTime: 2, endTime: 3 }];
assert.deepEqual(
  mergeRanges(meetingTimes),
  [{ startTime: 1, endTime: 3 }],
  "test 2"
);
meetingTimes = [{ startTime: 1, endTime: 5 }, { startTime: 2, endTime: 3 }];
assert.deepEqual(
  mergeRanges(meetingTimes),
  [{ startTime: 1, endTime: 5 }],
  "test 3"
);
meetingTimes = [
  { startTime: 1, endTime: 10 },
  { startTime: 2, endTime: 6 },
  { startTime: 3, endTime: 5 },
  { startTime: 7, endTime: 9 }
];
assert.deepEqual(
  mergeRanges(meetingTimes),
  [{ startTime: 1, endTime: 10 }],
  "test 4"
);

console.log("all tests pass");

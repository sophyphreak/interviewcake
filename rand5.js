const rand7 = () => Math.floor(Math.random() * 7) + 1;

const rand5 = () => {
  let result;
  while (true) {
    const current = rand7();
    if (current < 6) {
      result = current;
      break;
    }
  }
  return result;
};

const main = () => {
  let total = 0;
  let results = [0, 0, 0, 0, 0];
  for (let i = 0; i < 1000000; i++) {
    results[rand5() - 1]++;
    total++;
  }
  results = results.map(result => Math.floor((result / total) * 10000));
  return results;
};

console.log(main());

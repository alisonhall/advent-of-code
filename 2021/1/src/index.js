import data1 from "./data1.json";

export const part1 = (data = data1) => {
  let increaseCount = 0;
  let previousValue = null;

  data.forEach((element) => {
    if (previousValue && element > previousValue) {
      increaseCount++;
    }
    previousValue = element;
  });

  return { increaseCount };
};

export const part2 = (data = data1) => {
  let increaseCount = 0;
  let previousValue = null;
  let previousPreviousValue = null;
  let previousSum = null;
  const sums = [];

  data.forEach((element) => {
    if (previousValue && previousPreviousValue) {
      const sum = element + previousValue + previousPreviousValue;
      sums.push(sum);
      if (sum && previousSum && sum > previousSum) {
        increaseCount++;
      }
      previousSum = sum;
    }
    previousPreviousValue = previousValue;
    previousValue = element;
  });

  return { increaseCount, sums };
};

export default {
  "Part 1": part1(data1)?.increaseCount,
  "Part 2": part2(data1)?.increaseCount
};

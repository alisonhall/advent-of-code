import data1 from "./data1.json";

export const part1 = (data = data1) => {
  return {
    caloriesPerElf,
    maxCalories
  };
};

export const part2 = (data = data1) => {
    return {};
};

export default {
  "Part 1": part1(data1)?.maxCalories,
  "Part 2": part2(data1)
};

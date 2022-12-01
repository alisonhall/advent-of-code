import { part1, part2 } from "./index";

const sampleData = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

describe("Tests for part1", () => {
  test("Given sample data matches given result", () => {
    expect(part1(sampleData).increaseCount).toEqual(7);
  });

  test("2 increases", () => {
    const testData = [1, 2, 3];
    expect(part1(testData).increaseCount).toEqual(2);
  });

  test("2 decreases", () => {
    const testData = [3, 2, 1];
    expect(part1(testData).increaseCount).toEqual(0);
  });

  test("1 increase 1 decrease", () => {
    const testData = [1, 2, 1];
    expect(part1(testData).increaseCount).toEqual(1);
  });

  test("1 decrease 1 increase", () => {
    const testData = [2, 1, 2];
    expect(part1(testData).increaseCount).toEqual(1);
  });
});

describe("Tests for part2", () => {
  test("Given sample data matches given result", () => {
    const testData = [607, 618, 618, 617, 647, 716, 769, 792];
    expect(part2(sampleData).sums).toEqual(testData);
    expect(part2(sampleData).increaseCount).toEqual(5);
  });

  test("3 increases", () => {
    const testData = [1, 2, 3, 4];
    expect(part2(testData).sums).toEqual([6, 9]);
    expect(part2(testData).increaseCount).toEqual(1);
  });

  test("3 decreases", () => {
    const testData = [4, 3, 2, 1];
    expect(part2(testData).sums).toEqual([9, 6]);
    expect(part2(testData).increaseCount).toEqual(0);
  });

  test("1 increase 2 decreases", () => {
    const testData = [2, 3, 2, 1];
    expect(part2(testData).sums).toEqual([7, 6]);
    expect(part2(testData).increaseCount).toEqual(0);
  });

  test("1 decrease 2 increases", () => {
    const testData = [2, 1, 2, 3];
    expect(part2(testData).sums).toEqual([5, 6]);
    expect(part2(testData).increaseCount).toEqual(1);
  });
});
